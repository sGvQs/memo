import styled from 'styled-components';
import { Delete } from '@styled-icons/fluentui-system-filled';
import colors from '../components/Colors/index';

export const StyledBody = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.beige};
`;

export const StyledThreadsTitle = styled.h1`
  font-size: 50px;
  font-weight: bold;
  text-align: center;
`;

export const StyledThreadsWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
  width: 70vw;
  padding: 5em;
  gap: 3em;

  @media screen and (max-width: 768px) {
    padding: 0.5em;
    width: 100vw;
  }
`;

export const StyledThread = styled.div`
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
  gap: 1em;
  padding: 2em;
  border: 0.1em solid black;
  border-radius: 1em;
`;

export const StyledTitle = styled.p`
  font-size: 30px;
  display: flex;
  justify-content: space-between;
`;

export const StyledContent = styled.h3``;

export const StyledTypingContentWrap = styled.form`
  padding: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1em;
  border: 0.1em solid black;
  border-radius: 1em;
`;

export const StyledInputTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  width: 100%;
`;

export const StyledInput = styled.input`
  width: 100%;
  border: 0.1em solid white;
  border-radius: 0.3em;
  font-size: 30px;
  padding: 0.3em;
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  border: 0.1em solid white;
  border-radius: 0.3em;
  font-size: 20px;
  height: 20vh;
  padding: 0.3em;
  resize: none;
`;

export const StyledSubmitButton = styled.button`
  border: 0.1em solid black;
  border-radius: 0.3em;
  padding: 0.5em 1em;
  font-size: 20px;
  font-weight: bold;
  transition: all 0.5s;
  :hover {
    color: ${colors.beige};
    background-color: black;
    cursor: pointer;
  }
`;

export const StyledDeleteButton = styled(Delete)`
  display: block;
  height: 40px;
  :hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;
