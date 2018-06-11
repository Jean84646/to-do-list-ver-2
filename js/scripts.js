// business logic
function toDoList(task){
  this.task = task;
  this.toDoList = [];
}







// user interface logic
$(document).ready(function(){
  var toDoCounter = 1;
  $('button#add-list-item').click(function(){
    toDoCounter += 1;
    $('#todo-list-input').append('<input id="todo' + toDoCounter + '" type="text" class="form-control">');

  });

  $('#task-form').submit(function(event){
    event.preventDefault();
    var taskInput = $('input#input-task').val();
    var newTask = new toDoList(taskInput);

    $('#todo-list').append('<li><span class="todo-task">' + newTask.task + '</span></li>');
  });

});
