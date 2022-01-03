'use strict';
import { storage } from "./storage";
import { dom } from "./dom";
import { listsFactory, todosFactory } from "./factories";

const eventListener = () => {
        window.addEventListener('click', e => {
            console.log(e);
            console.log(e.target);
            if (e.target.classList.contains('delete-button')) {
                const lists = storage.read();
                const index = e.path[1].getAttribute('data-index');
                let list = storage.fetchList(dom.selectedList);
                list.todos.splice(index, 1);
                
                storage.write(list);
        
                dom.clearList();
                dom.updateList
                ();
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
                e.target.querySelector('div').classList.toggle('expanded');
                e.target.querySelector('button').classList.toggle('expanded');
            };
        });
    };

export { eventListener };