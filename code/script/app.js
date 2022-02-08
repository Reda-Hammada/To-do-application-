let taskList = [];

function addTask(){

 tasks = readTask();
 pushArray();




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
        
    }
}

