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

    $('#task-list').append('<li><span class="todo-task">' + newTask.task + '</span></li>');
    $('.todo-task').last().click(function(){
      $('#todo-list').append('<li><span class="todo-list">' + newTask.task + '</span></li>');
    });
    $('#task-form').trigger('reset');
  });

});
