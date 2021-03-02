import { v4 as uuidv4 } from "uuid";

export const dataList = [
  { id: uuidv4(), title: "hello", content: "world", pinned: true },
  { id: uuidv4(), title: "hi", content: "everyone", pinned: false }
  // { id: 3, title: "hey", content: "guys" },
  // { id: 4, title: "namaste", content: "duniya" }
];
