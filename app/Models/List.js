import { generateId } from "../utils.js";

export default class List {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.title = data.title
    this.color = data.color
    this.listsItems = data.listsItems || []
    this.id = data.id || generateId();
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you

  get Template(){
    return `
    <div class="col-4 border border-warning rounded shadow">
    <button type="button" class="close text-danger" onclick="app.listController.delete('${this.id}')">
    <span>&times;</span>
    </button>
      <h1>${this.title}</h1>
      <form onsubmit="app.listController.addListItem(event, '${this.id}')">
        <div class="form-group">
          <label for="listItemName">list Item:</label>
          <input type="text" name="listItemName" class="form-control" placeholder="Type a list item in here..." aria-describedby="helpId">
        </div>
      </form>
      <h5>List Items:</h5>
      <dl>
        ${this.ListItemsTemplate}
      </dl>
    </div>
    `
  }

  get ListItemsTemplate(){
    let template = ''
    //return template
    //this.listsItems.forEach(listsItem => template += listsItem.getTemplate(this.id))
    console.log("before for loop" , this.listsItems)
    for (let i = 0; i < this.listsItems.length; i++){
      console.log( "infor loop", i)
      template += `
      <button type="button" class="close text-danger" onclick="app.listController.deleteListItem('${this.id}',${i})">
      <span>&times;</span>
      </button>
      <h5>${this.listsItems[i]}</h5>
      </dd>
      `
    }
    console.log(template)
    return template
  }

}
