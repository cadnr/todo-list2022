'use scrict';

import { storage } from "./storage";
import { dummyLists } from "./dummyLists";

localStorage.clear();
dummyLists();

console.log(storage.read());