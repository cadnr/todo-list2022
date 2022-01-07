'use strict';

import { todosFactory } from "./factories";
import { storage } from "./storage";
import { eventListener } from "./eventListener";

const divList = document.getElementById('list');

let dom = {
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
                const titleSpan = document.createElement('span');
                titleSpan.classList.add('title-span');
                titleSpan.textContent = element.title;
                tempDiv.appendChild(titleSpan);
                // tempDiv.textContent = element.title;

                const editTitleDiv = document.createElement('div');
                editTitleDiv.classList.add('edit', 'off');
                editTitleDiv.classList.add('title-edit');
                const titleInput = document.createElement('input');
                titleInput.classList.add('title-input');
                titleInput.value = element.title;
                editTitleDiv.appendChild(titleInput);
                tempDiv.appendChild(editTitleDiv);
                
                const saveButton = document.createElement('button');
                saveButton.textContent = 'Save';
                saveButton.classList.add('save-button', 'off');
                tempDiv.appendChild(saveButton);
                
                const editButton = document.createElement('button');
                editButton.textContent = 'Edit';
                editButton.classList.add('extension', 'edit-button', 'off');
                tempDiv.appendChild(editButton);
                
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.classList.add('extension', 'delete-button', 'off');
                tempDiv.appendChild(deleteButton);

                const expandedDiv = document.createElement('div');
                // expandedDiv.textContent = element.description;
                const descSpan = document.createElement('span');
                descSpan.textContent = element.description;
                descSpan.classList.add('desc-span');
                expandedDiv.appendChild(descSpan);
                expandedDiv.classList.add('extension', 'off');

                const editDescDiv = document.createElement('div');
                editDescDiv.classList.add('edit', 'off');
                editDescDiv.classList.add('desc-edit');
                const descInput = document.createElement('input');
                descInput.classList.add('desc-input');
                descInput.value = element.description;
                editDescDiv.appendChild(descInput);
                expandedDiv.appendChild(editDescDiv);


                tempDiv.appendChild(expandedDiv);

        
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
        eventListener();
    },
};

export { dom };
