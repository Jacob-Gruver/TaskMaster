import  store  from "../store.js";
import  ListService  from "../Services/ListService.js";

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let lists = store.State.lists;
  let template = '';
  lists.forEach(list => {
    template += list.Template;
  })
  
  document.getElementById('lists').innerHTML = template;
}

//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    
    _drawLists();
  
  }
  //TODO: Your app will need the ability to create, and delete both lists and listItems
  addList() {
    window.event.preventDefault();
    let form = window.event.target;
    let addedList = {
      items: form['items'].value,
      price: form['price'].value
    }
    ListService.addList(addedList);
    // @ts-ignore
    form.reset();
    // @ts-ignore
    document.getElementById("new-list-modal").modal('hide');
  
}
}