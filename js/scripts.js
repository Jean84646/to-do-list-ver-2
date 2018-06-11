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

});
