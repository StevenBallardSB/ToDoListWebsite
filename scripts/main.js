var ToDoItem = (function () {
    function ToDoItem() {
    }
    return ToDoItem;
}());
window.onload = function () {
    var addBtn = document.querySelector("#create-item > button");
    addBtn.onclick = processNewItem;
    var readItembtn = document.querySelector("#read-item > button");
    readItembtn.onclick = readItem;
};
var itemKey = "todo";
function readItem() {
    var item = JSON.parse(localStorage.getItem(itemKey));
    alert(item.title);
    alert(item.description);
}
function processNewItem() {
    var item = getItemFromForm();
    saveItem(item);
    notifyUser();
    clearForm();
}
function clearForm() {
    var textElements = document.querySelectorAll("input[type=text], textarea");
    for (var i = 0; i < textElements.length; i++) {
        textElements[i].value = "";
    }
    var isCompleteBox = document.querySelector("#is-complete");
    isCompleteBox.checked = false;
    var urgencyList = document.querySelector("#urgency");
    urgencyList.selectedIndex = 0;
}
function notifyUser() {
    alert("Your item was saved");
}
function saveItem(item) {
    var data = JSON.stringify(item);
    console.log("Converting todoitem into JSON string...");
    console.log(data);
    if (typeof (Storage) != "undefined") {
        localStorage.setItem(itemKey, data);
    }
}
function getItemFromForm() {
    var item = new ToDoItem();
    item.title = document.getElementById("title").value;
    item.description = document.getElementById("description").value;
    var itemStartDate = document.getElementById("start-date").value;
    item.startDate = new Date(itemStartDate);
    var itemEndDate = document.getElementById("end-date").value;
    item.startDate = new Date(itemEndDate);
    item.isComplete = document.getElementById("is-complete").checked;
    var urgencyElement = document.getElementById("urgency");
    item.urgency = urgencyElement.options[urgencyElement.selectedIndex].text;
    return item;
}
