import { Component } from './component.js';

export class TodoList extends Component {
    template;
    tasks;
    constructor() {
        super();
        this.tasks = [];
        this.template = this.generateTemplate();
        this.render('#tasks');
        this.manageComponent();
    }
    generateTemplate() {
        let template = `
            <div id="tasks">
                <form>
                    <input type="text" id="new-tarea" placeholder="Add tarea">
                    <button type="submit">Add</button>
                </form>
                <h3>
                    Lista de tareas
                </h3>
                <ul>`;
        this.tasks.forEach((item) => {
            template += `<li>${item}</li>`;
        });
        template += `
                </ul>
            </div>
        `;
        return template;
    }
    manageComponent() {
        const element = document.querySelector('#tasks');
        element.querySelector('form').addEventListener('submit', (ev) => {
            ev.preventDefault();
            this.tasks.push(element.querySelector('input').value);
            element.querySelector('input').value = '';
            this.template = this.generateTemplate();
            this.render('#tasks');
            this.manageComponent();
        });
    }
}