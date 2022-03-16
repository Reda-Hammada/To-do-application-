let taskList = [];
let  content;

function addTask(){

 tasks = readTask();
 pushArray();
 insertTask();
 reset();

}

function readTask(){

    let task = document.getElementById('typeTask').value;
    return task;
}


function pushArray(){
    
    taskList.push(tasks);

}

function insertTask(){
    taskContainer = document.getElementById('tasks-container');
    Elem = document.createElement('div');
    

   
    for(i=0; i < taskList.length; i++){
           

        
    }
    
       
    
}

function reset(){

    document.getElementById('typeTask').value = "";
}

