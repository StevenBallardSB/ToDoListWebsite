/**
 * Represents a single task in a ToDo list
 */
class ToDoItem{
    title:string;
    description:string;
    startDate:Date;
    endDate:Date;
    isComplete:boolean;
    urgency:string;
    //subTasks:Array<ToDoItem>;
}

/*let testItem = new ToDoItem();
testItem.title = "Teach CPW 203";
testItem.startDate= new Date("April 30, 2019");
testItem.description = "Lecture advence JavaScript like a boss!";
testItem.isComplete = true;
if(testItem.isComplete){

}
*/

//When Add Item is clicked
    //Get data off the page and wrap in ToDo object
    //Notify user and clear form
    //Save ToDo object.

window.onload = function(){
    let addBtn = <HTMLElement>document.querySelector("#create-item > button")
    addBtn.onclick = processNewItem;
}

function processNewItem(){
    let item:ToDoItem = getItemFromForm();
    saveItem(item);
    notifyUser();
    clearForm();
}

function saveItem(item:ToDoItem):void{
    //ensure user can use localStorage
    if(typeof(Storage) != "undefined"){
        localStorage.setItem("todo", item.title);
    }
}

/**
 * Get all user input from Form and wrap it in a ToDoItem
 */
function getItemFromForm():ToDoItem{
    let item = new ToDoItem();

    item.title = (<HTMLInputElement>document.getElementById("title")).value;
    item.description = (<HTMLTextAreaElement>document.getElementById("description")).value;

    let itemStartDate:string = (<HTMLInputElement>document.getElementById("start-date")).value;
    item.startDate = new Date(itemStartDate);

    let itemEndDate = (<HTMLInputElement>document.getElementById("end-date")).value;
    item.startDate = new Date(itemEndDate);

    item.isComplete = (<HTMLInputElement>document.getElementById("is-complete")).checked;

    let urgencyElement = <HTMLSelectElement>document.getElementById("urgency");
    item.urgency = urgencyElement.options[urgencyElement.selectedIndex].text;

    return item;
}