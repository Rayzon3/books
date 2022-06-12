import nextConnect from 'next-connect';
import clientPromise from '../database/connectDB';

const client = await clientPromise

async function database(req, res, next) {

  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db('books');
  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;