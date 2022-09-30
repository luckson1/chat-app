import Dexie from "dexie";

// Declare database instance to create a db in browser IndexedDB
export const db = new Dexie("MyChatDb");

// Define Database Schema
db.version(1).stores({
  friends: "++id, userName, userId",
  messages: "++id, body, creator, alias",
});