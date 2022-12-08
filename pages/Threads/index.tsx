import {
  StyledBody,
  StyledThreadsTitle,
  StyledThreadsWrap,
  StyledThread,
  StyledTitle,
  StyledContent,
  StyledTypingContentWrap,
  StyledInputTitle,
  StyledInput,
  StyledTextarea,
  StyledSubmitButton,
  StyledDeleteButton,
} from './styled';
import React from 'react';
import axios from 'axios';
import { AxiosRequestConfig } from 'axios';
export type ThreadProps = {
  id: string;
  title: string;
  content: string;
};

const Threads = () => {
  const [threads, setThreads] = React.useState<Array<ThreadProps | undefined>>(
    []
  );

  React.useEffect(() => {
    getAllThreads();
  }, []);

  React.useEffect(() => {}, [threads]);

  const getAllThreads = () => {
    axios
      .get('/api/server')
      .then((res) => {
        setThreads(res.data);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const submit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const input = document.getElementById('input') as HTMLInputElement;
    const textarea = document.getElementById('textarea') as HTMLInputElement;
    if (!input.value || !textarea.value) return;
    try {
      await axios.post('/api/server', {
        title: input.value,
        content: textarea.value,
      });
      getAllThreads();
      input.value = '';
      textarea.value = '';
    } catch (e) {
      console.error(e);
    }
  };

  const deleteThread = async (id: string, title: string, content: string) => {
    const deleteReqestParam: AxiosRequestConfig = {
      data: {
        _id: id,
        title: title,
        content: content,
      },
    };
    try {
      await axios.delete('/api/server', deleteReqestParam);
      getAllThreads();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <StyledBody>
      <StyledThreadsWrap>
        <StyledThreadsTitle>Susumu`s Memo</StyledThreadsTitle>
        {threads.map((thread, key) => {
          return (
            thread && (
              <StyledThread key={key}>
                <StyledTitle>
                  {thread.title}
                  <StyledDeleteButton
                    onClick={() =>
                      deleteThread(thread.id, thread.title, thread.content)
                    }
                  />
                </StyledTitle>
                <StyledContent>{thread.content}</StyledContent>
              </StyledThread>
            )
          );
        })}
        <StyledTypingContentWrap>
          <StyledInputTitle>TITLE :</StyledInputTitle>
          <StyledInput required id="input" />
          <StyledInputTitle>CONTENT :</StyledInputTitle>
          <StyledTextarea required id="textarea" />
          <StyledSubmitButton onClick={submit}>subumit</StyledSubmitButton>
        </StyledTypingContentWrap>
      </StyledThreadsWrap>
    </StyledBody>
  );
};

export default Threads;
