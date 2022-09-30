import Dexie from "dexie";
//choice of database
//There are 3 possible choices: localstorage, indexedDb, and Dexie.js
//localStorage only stores strings and might restrict our app if we need to send images
//indexedDb is a browser db but it is incosistent with some browsers and not supported by some order versions of browser
//Dexie is a light wrapper around IndexedDb to overcome the challenge of iincosistencies with browsers
// Declare database instance to create a db in browser IndexedDB
export const db = new Dexie("MyChatDb");

// Define Database Schema
db.version(1).stores({
  friends: "++id, userName, userId",
  messages: "++id, body, creator, alias",
});