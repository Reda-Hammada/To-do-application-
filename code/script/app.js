// add a task dynamically 

let taskList = [];
let check;

// executes all the function below to add the task 
function addTask(){

 tasks = readTask();
 pushArray();
 insertTask();
 reset();

}


// read the value from the input and return it
function readTask(){

    let task = document.getElementById('typeTask').value;
    return task;
}

//  push the value to the array
function pushArray(){
    
    taskList.push(tasks);

}

// insert the task through looping over the array and insert it into the div
function insertTask(){  

    Elem = document.createElement('div');
    
     let task = document.getElementById('typeTask').value;

    for(i=0; i < taskList.length; i++){

        if(task){

          taskContainer = document.getElementById('tasksContainer');
          checkInput =`<input id="check"  type="checkbox">`;
          Elem.innerHTML = checkInput + taskList[i] ; 
          taskContainer.insertAdjacentElement('beforeend', Elem);
          Elem.classList.add('task');
           
        }

        
       }
}

// reset the input value to empty 
function reset(){

    document.getElementById('typeTask').value = "";
};
