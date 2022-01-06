'use strict';
import { storage } from "./storage";
import { dom } from "./dom";
import { listsFactory, todosFactory } from "./factories";

const eventListener = () => {
        window.addEventListener('click', e => {
            console.log(e.path);
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
            } else if (e.target.hasAttribute('data-index')) {
                e.target.querySelectorAll('.extension').forEach((e) => {
                    e.classList.toggle('off');
                });
            } else if (e.target.classList.contains('title-span')) {
                e.path[1].querySelectorAll('.extension').forEach((e) => {
                    e.classList.toggle('off');
                });
            } else if (e.target.classList.contains('edit-button')) {
                const divs = e.path[1].querySelectorAll(`.title-edit, .desc-edit, .title-span, 
                                .desc-span, .save-button`);
                console.log(divs);
                divs.forEach((e) => { e.classList.toggle('off'); });
            } else if (e.target.classList.contains('save-button')) {
                const lists = storage.read();
                const index = e.path[1].getAttribute('data-index');
                let list = storage.fetchList(dom.selectedList);
                
                const titleInput = e.path[1].querySelector('.title-input');
                const descInput = e.path[1].querySelector('.desc-input');

                console.log(list.todos[index].title);
                list.todos[index].title = titleInput.value;
                list.todos[index].description = descInput.value;
                
                storage.write(list);
        
                dom.clearList();
                dom.updateList();
            };
        });
    };

export { eventListener };