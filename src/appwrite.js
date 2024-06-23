import { Client, Databases, Storage } from "appwrite";



const projectId = process.env.NEXT_PUBLIC_projectId;
const storageId = process.env.NEXT_PUBLIC_storageId;
const databaseId = process.env.NEXT_PUBLIC_databaseId;
const messageCollectionId = process.env.NEXT_PUBLIC_messageCollectionId;
const dataCollectionId = process.env.NEXT_PUBLIC_dataCollectionId;
const marketingCollectionId = process.env.NEXT_PUBLIC_marketingCollectionId;
const ip = process.env.NEXT_PUBLIC_ip;


const client = new Client();

client.setEndpoint(ip).setProject(projectId);

const database = new Databases(client);

const storage = new Storage(client);

export {
  client,
  database,
  storage,
  projectId,
  databaseId,
  dataCollectionId,
  messageCollectionId,
  storageId,
  marketingCollectionId,
  ip,
};
