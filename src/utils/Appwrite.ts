import { Client, Account, ID, Databases } from 'appwrite';
export const appwriteClient = new Client()
  .setEndpoint(process.env.APPWRITE_ENDPOINT || '')
  .setProject(process.env.APPWRITE_PROJECT_ID || '');
export const appwriteDatabase = new Databases(appwriteClient);
