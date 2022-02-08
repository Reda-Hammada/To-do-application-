let taskList = [];

function addTask(){

 tasks = readTask();
 pushArray();
 insertTask();




}

function readTask(){

    let task = document.getElementById('typeTask').value;

    return task;

}


function pushArray(){
    
    taskList.push(tasks);

}

function insertTask(){
    for(i=0; i < taskList.length; i++){
        let Elem;
        taskContainer = document.getElementsByClassName('tasks-container');
        taskContainer.Elem = document.createElement('p');
         Elem.textContent = "this is a test";
        console.log(taskList[i]);
    }
        while(taskList.length > 0){
            taskList = [];
        }
    
}

