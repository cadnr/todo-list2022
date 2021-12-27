'use scrict';

import { storage } from "./storage";
import { dummyLists } from "./dummyLists";

localStorage.clear();
dummyLists();

const lists = storage.read();
console.log(lists);

let currentList = [];
lists.forEach((element) => {
    if(element.name == 'defaultList') {
        currentList = element.todos;
    };
});

console.log(currentList);

const divList = document.getElementById('list');
const genList = document.createElement('div');

currentList.forEach((element) => {
    const tempDiv = document.createElement('div');
    tempDiv.textContent = element.title;
    genList.appendChild(tempDiv);
});

divList.appendChild(genList);