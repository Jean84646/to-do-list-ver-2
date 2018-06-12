// business logic
function ToDoList(task){
  this.task = task;
  this.toDoItems = [];
}




// user interface logic
$(document).ready(function(){

  $('#add-list').click(function(){
    $('#new-todo').append('<div class="new-todo remove-list">' +
                            '<div class="form-group">' +
                              '<input type="text" class="form-control todo-list">' +
                            '</div>' +
                          '</div>');
  });

  $('#task-form').submit(function(event){
    event.preventDefault();

    var taskInput = $('input#input-task').val();
    var newTask = new ToDoList(taskInput);

    $('.new-todo').each(function(){
      var listItem = $(this).find('input.todo-list').val();
      newTask.toDoItems.push(listItem);
    });

    $('ul#task-list').append('<li><span class="todo-task">' + newTask.task + '</span></li>');
    $('.todo-task').last().click(function(){
      $('#list-area h2').text(newTask.task);
      $('ul#todo-list').text("");
      newTask.toDoItems.forEach(function(listItem){
        $('ul#todo-list').append('<li><span class="todo-item">' + listItem + '</span></li>');
        $('.todo-item').last().click(function(){
          $(this).toggleClass('struck');
        });
      });
    });

    $('#task-form').trigger('reset');
    $('div.remove-list').remove();
  });



});
