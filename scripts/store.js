import item from './item.js';

const items= [];
const hideCheckedItems= false;

const findById = function(id) {
 const item = items.find(item => item.id === id);
 return item;
}

const addItem = function(name) {
  try {
    item.validateName(name);
    const newItem = item.create(name);
    items.push(newItem);
  } 
  catch {
    console.log(`Cannot add item: ${error.message}`);
  }
}

const findAndToggleChecked = function(id) {
  const item = this.findById(id);
  item.checked = !item.checked;
}

const findAndUpdateName = function(id, newName) {
  try {
    item.validateName(newName);
    const changeItem = findById(id);
    changeItem.name = newName;
  }
    catch {
      console.log(`Cannot update name: ${error.message}`);
    }
}

const findAndDelete = function(id) {
  const deleteItem = items.findIndex(item => id === item.id);
  items.splice(deleteItem, 1);
}

const toggleCheckedFilter = function(){
  this.hideCheckedItems = !this.hideCheckedItems;
}



export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete
};