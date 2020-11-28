var todos = [];

function addToDo() {
  var inputValue = $('#todo1').val();
  $("#todos").append('<div class="todo">' + inputValue + '</div>');
  todos.push(inputValue);
  console.log(todos);
  localStorage.setItem('todos', JSON.stringify(todos));
}

$(document).ready(function() {
    $("#my-button").bind("click", addToDo);
  var todos = localStorage.getItem('todos');
    todos = JSON.parse(todos);

  for (i = 0; i < todos.length; i++) {
    $("#todos").append('<div class="todo">' + todos[i] + '</div>');
  }

});
