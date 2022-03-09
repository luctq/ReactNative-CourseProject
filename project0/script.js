const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
var uncheckedCount = 0;
var itemCount = 0;
function handleCheck(self) {
  if (self.checked == true) {
    uncheckedCount--;
    uncheckedCountSpan.innerHTML = uncheckedCount;
  } else {
    let text = "Do you want to delete this todo?";
    if (confirm(text) == true) {
        list.removeChild(self.parentElement);
        uncheckedCountSpan.innerHTML = uncheckedCount;  
        itemCount--;
        itemCountSpan.innerHTML = itemCount;
    } else {
      uncheckedCount++;
      uncheckedCountSpan.innerHTML = uncheckedCount;
    }
  }
}
function newTodo() {
  let todo = prompt("Let's have one more thing to do: ");
  if (todo != null) {
    uncheckedCount++;
    itemCount++;
    var temp =document.createElement('li');
    temp.innerHTML = '<input type="checkbox" class="check" onClick="handleCheck(this)"/>' + '<span>'+ todo+ '</span>';
    list.appendChild(temp);
    itemCountSpan.innerHTML = itemCount;
    uncheckedCountSpan.innerHTML = uncheckedCount;
  }

}
