import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createStore } from 'vuex';


import Budget from './components/budget/TheBudget.vue';
import ToDoList from './components/tasks/ToDoList.vue';

import App from './App.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/budget', component: Budget },
        { path: '/toDoList', component: ToDoList }
    ]
});

const store = createStore({
    state() {
        console.log('State called');
        return {

            ArrTask: [
                { name: 'lern', description: ' first, second..', status: 'start' },
                { name: 'health', description: 'run 100km for a month', status: 'inProgress' }
            ],
        };
    },
    mutations: {
        pushNewTask(state, t) {

            state.ArrTask.push({
                name: t.name,
                description: t.description,
                status: 'start'
            });
        }
    }
})
const app = createApp(App);

app.use(store);
app.use(router);
app.mount('#app');