'use strict';

import { todosFactory } from "./factories";
import { storage } from "./storage";

const divList = document.getElementById('list');

let dom = {
    selectedList: 'defaultList',

    clearList: () => {
        divList.replaceChildren();
    },
    
    updateList: () => {
    
        divList.replaceChildren();
        const lists = storage.read();
        let currentList = [];
        const nav = document.createElement('nav');
        lists.forEach((element) => {
           
            const tempA = document.createElement('a');
            tempA.textContent = element.name;
            tempA.setAttribute('data-list-key', element.name);
            if(element.name == dom.selectedList) {
                currentList = element.todos;
                tempA.classList.add('active');
            };
            nav.appendChild(tempA);
        });
        
        const genList = document.createElement('div');
        const newListDiv = document.createElement('div');
        const newListButton = document.createElement('button');
        newListButton.classList.add('new-list-button');
        newListButton.textContent = 'New list';
        const newListInput = document.createElement('input');
        newListInput.classList.add('new-list-input');
        newListDiv.append(newListButton, newListInput);

        genList.appendChild(newListDiv);

        genList.appendChild(nav);
        const addButton = document.createElement('button');
        addButton.textContent = 'Add';
        addButton.classList.add('add-button');
        const addForm = document.createElement('input');
        addForm.classList.add('add-form');
        genList.appendChild(addButton);
        genList.appendChild(addForm);
        
        if(currentList && currentList[0]) {
            currentList.forEach((element, index) => {
                const tempDiv = document.createElement('div');
                tempDiv.setAttribute('data-index', index);
                tempDiv.textContent = element.title;
                
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.classList.add('delete-button');
                tempDiv.appendChild(deleteButton);
        
                genList.appendChild(tempDiv);
                
            });
        };
        divList.appendChild(genList);

        
    },

    changeList: (newSelectedList) => {
        dom.selectedList = newSelectedList;
        dom.updateList();
    },

    eventListener: () => {
        window.addEventListener('click', e => {
            console.log(e);
            console.log(e.target.attributes);
            if (e.target.classList.contains('delete-button')) {
                const lists = storage.read();
                const index = e.path[1].getAttribute('data-index');
                let list = storage.fetchList(dom.selectedList);
                list.todos.splice(index, 1);
                
                storage.write(list);
        
                dom.clearList();
                dom.updateList();
            } else if(e.target.classList.contains('add-button')) {
                const input = document.querySelector('.add-form');
                console.log(input.value);
                const lists = storage.read();
                const index = e.path[1].getAttribute('data-index');
                let list = storage.fetchList(dom.selectedList);
                console.log(list.todos);
                list.todos.push(todosFactory(input.value));
                storage.write(list);
                dom.updateList();
            } else if(e.target.classList.contains('new-list-button')) {
                const input = document.querySelector('.new-list-input');
                console.log(input.value);
                storage.newList(input.value);
                dom.updateList();            
            } else if (e.target.hasAttribute('data-list-key')) {
                const newSelectedList = e.target.getAttribute('data-list-key');
                dom.changeList(newSelectedList);
            };
        });
    },
};

export { dom }
