var todos = [];

function addToDo() {
  var inputValue = $('#todo1').val();
  $("#todos").append('<div class="todo">' + inputValue + '</div>');
  todos.push(inputValue);
  console.log(todos);
  localStorage.setItem('todos', JSON.stringify(todos));
}

$("#my-button").bind("click", addToDo);



$(document).ready(function() {
  var todos = localStorage.getItem('todos');
  if (!todos) return;
	todos = JSON.parse(todos);

  for (i = 0; i < todos.length; i++) {
    $("#todos").append('<div class="todo">' + todos[i] + '</div>');
  }
});
