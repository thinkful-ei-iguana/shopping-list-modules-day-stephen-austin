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
  let item = findById(id);
  item.checked = !item.checked;
}
 
const findAndUpdateName = function(id, newName) {
    item.validateName(newName);
    const changeItem = findById(id);
    changeItem.name = newName;
}
 
const findAndDelete = function(id) {
  const deleteItem = items.findIndex(item => id === item.id);
  items.splice(deleteItem, 1);
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
