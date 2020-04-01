import ListService from "../Services/ListService.js";
import _store from "../store.js"

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let template = ''
  let lists = _store.State.lists

  lists.forEach(list => template += list.Template)
  document.getElementById("lists").innerHTML = template
  //console.log(lists)
}
 
//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems
  create(event) {
    //console.log("app.listController.create(event)")
    event.preventDefault()
    
    let formData = event.target
    console.log(formData)
    console.log(formData.color.value)
    let newList = {
      title: formData.listName.value,
      color: formData.color.value,
      //listItems: []
    }
    ListService.create(newList)
    _drawLists()
    formData.reset()
  }

  delete(listId) {
    if (window.confirm("Are you sure?")) {
    //console.log(listId)
    ListService.delete(listId)
    _drawLists()
    }
  }

  addListItem(event, listId) {
    event.preventDefault()
    let formData = event.target
    ListService.addListItem(formData.listItemName.value, listId)
    _drawLists()
  }

  deleteListItem(listId, Index){
    if (window.confirm("Are you sure?")) {
    ListService.deleteListItem(listId, Index) 
    _drawLists() 
    }
  }

}
