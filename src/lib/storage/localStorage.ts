import localForage from "localforage";

localForage.config({
  name: "book", // Name of the database
  storeName: "bookStore", // Name of the data store
  version: 1.0, // Database version
  description: "Local storage for Book", // Description for the database
  size: 5 * 1024 * 1024, // Size of the database in bytes (5 MB in this example)
  driver: [localForage.WEBSQL, localForage.INDEXEDDB, localForage.LOCALSTORAGE], // Preferred storage drivers in order
});

export default localForage;
