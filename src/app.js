import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  console.log("Working nae bother");
  new Vue({
    el: "#app",
    data: {
      todos: [
        {name: "Buy shopping", isHighPriority: "high"},
        {name: "Clean bathroom", isHighPriority: "low"},
        {name: "Car's MOT", isHighPriority: "low"}
        ],
      newTodo: {name: "", isHighPriority: ""}
    },
    methods: {
      saveNewTodo: function () {
        this.todos.push(this.newTodo);
        this.newTodo = {name: "", isHighPriority: ""};
      }
    }
  });
})
