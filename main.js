var todos = [];

function addToDo() {
  var inputValue = $('#input').val();
  if (!inputValue) return;
  $('#input').val('');
  $("#todos").append('<div class="todo">' + inputValue + '</div>');
  todos.push(inputValue);
  localStorage.setItem('todos', JSON.stringify(todos));

  completeTasks();
}

function completeTasks() {
  $('.todo').click(function(e) {
  	// Remove element
    $(e.target).remove();
    var value = $(e.target).text();
    // Remove from array
    var index = todos.indexOf(value);
    if (index !== -1) { todos.splice(index, 1); }
    // Save updated todos
    localStorage.setItem('todos', JSON.stringify(todos));
  });
}

$(document).ready(function() {
  // Bind functions
  $("#my-button").bind("click", addToDo);
  $("#input").bind('keypress', function(e) {
    if (e.which == 13) {
      addToDo();
    }
  });

  // Load saved todos
  todos = localStorage.getItem('todos');
  if (!todos) return;
  todos = JSON.parse(todos);
  for (i = 0; i < todos.length; i++) {
    $("#todos").append('<div class="todo">' + todos[i] + '</div>');
  }

  // Bind complete tasks function to todos
  completeTasks();
});
