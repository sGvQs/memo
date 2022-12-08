import type { NextApiRequest, NextApiResponse } from 'next';
const express = require('express');
const Express = require('express');
const app = express();
const mongoose = require('mongoose');
const Thread = require('../models/thread');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  app.use(Express.json());
  app.listen(3000, console.log('sever is running'));

  mongoose
    .connect(
      `mongodb://susum:Sg08263491@ac-srtm6vk-shard-00-00.qyfvqzb.mongodb.net:27017,ac-srtm6vk-shard-00-01.qyfvqzb.mongodb.net:27017,ac-srtm6vk-shard-00-02.qyfvqzb.mongodb.net:27017/?ssl=true&replicaSet=atlas-4dkh0f-shard-0&authSource=admin&retryWrites=true&w=majority`
    )
    .then(() => {
      console.log('db connected');
    })
    .catch(() => {
      console.log('db disconnected');
    });

  switch (req.method) {
    case 'GET':
      const allThreads = await Thread.find({});
      res.status(200).json(allThreads);
      break;
    case 'POST':
      const createThread = await Thread.create(req.body);
      res.status(200).json(createThread);
      break;
    case 'DELETE':
      const deleteThread = await Thread.deleteOne(req.body);
      res.status(200).json(deleteThread);
      break;
    default:
      res.status(405).end();
      break;
  }
}
