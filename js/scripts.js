// business logic
function toDoList(){
  this.task = "";
  this.toDoItems = [];
}







// user interface logic
$(document).ready(function(){
  var newTask = new toDoList();

  $('#task-form').submit(function(event){
    event.preventDefault();
    var taskInput = $('input#input-task').val();
    newTask.task = taskInput;
    newTask.toDoItems = [];

    $('#task-list').append('<li><span class="todo-task">' + newTask.task + '</span></li>');
    $('.todo-task').last().click(function(){
      //do something when click on task
    });
    $('.task-form-area').hide();
    $('.list-form-area').show();
    $('#task-form').trigger('reset');
  });

  $('#todo-form').submit(function(event){
    event.preventDefault();
    var listItem = $('input#input-todo').val();

    newTask.toDoItems.push(listItem);
    $('#todo-list').append('<li><span class="todo-list">' + listItem + '</span></li>');
    $('.todo-list').last().click(function(){
      //do something when click on list item
    });
    $('#todo-form').trigger('reset');

  });

  $('#list-complete').click(function(){
    $('.list-form-area').hide();
    $('.task-form-area').show();
    $('#todo-list').remove();
  });

});
