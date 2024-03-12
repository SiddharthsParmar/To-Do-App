const inputTracker = document.querySelector("input");
const listContainer = document.querySelector('.task-list');

function addItem(){
    if(inputTracker.value==''){
        alert("enter something");

    }
    else{
        let li=document.createElement('li');
        li.innerHTML=inputTracker.value;
        listContainer.appendChild(li);
       inputTracker.value=''

        let span = document.createElement("span");
        span.innerHTML ='\u00d7';
        li.appendChild(span);
        saveData()




    }

}
listContainer.addEventListener('click',function(e){

if(e.target.tagName==="LI"){
    e.target.classList.toggle('checked');
    saveData()
}
else if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove();
    saveData()
}


},false)

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);

}
function displayData(){
    listContainer.innerHTML = localStorage.getItem("data");
}
displayData();