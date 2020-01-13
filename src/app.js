import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  console.log("Working nae bother");
  new Vue({
    el: "#app",
    data: {
      todos: ["Buy shopping", "Clean bathroom", "Car's MOT"],
      newTodo: ""
    },
    methods: {
      saveNewTodo: function () {
        this.todos.push(this.newTodo);
        this.newTodo = "";
      }
    }
  });
})
