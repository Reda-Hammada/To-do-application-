// add a task dynamically 

const taskList = [];
let check;

// executes all the function below to add the task 
 addTask = () => {

 tasks = readTask();
 pushArray();
 insertTask();
 reset();

}


// read the value from the input and return it
 readTask = () =>{

    let task = document.getElementById('typeTask').value;
    return task;
}

//  push the value to the array
 pushArray = () => {
    
    taskList.push(tasks);

}


// count data in array 
count = () => {

    for(i=0; i<taskList.length; i++){
        return taskList.length;
    }
}



// create commands container 
createCommands = () => {
  
     commandContainer = document.getElementById('commandsContainer');
     commands = document.createElement('div');
     commands.innerHTML = `<p>${count()} items left</p>` + `<ul style =display:inline;><li>All</li>Active<li>Completed</li></ul>` + `<p>Clear Completed</p>`;
     commandContainer.insertAdjacentElement('beforeend', commands);
     commands.classList.add('commandContainer');
}

// insert the task through looping over the array and insert it into the div
 insertTask = () =>{  
 
    Elem = document.createElement('div');
    
     let task = document.getElementById('typeTask').value;

    for(i=0; i < taskList.length; i++){
    

        if(task) {
 
          taskContainer = document.getElementById('tasksContainer');// task container 
          checkInput =`<input id="check"  type="checkbox">`;//  content of task container div
          Elem.innerHTML = checkInput + taskList[i] + `<div class="delete">x</div>` ; 
          taskContainer.insertAdjacentElement('beforeend', Elem);
          Elem.classList.add('task');  //adding style to task container content 
          createCommands();

          while(commandContainer.hasChildNodes ){

                commandContainer.removeChild(commandContainer.firstElementChild);
          }

        }

        

        } 
    }

        




        
    



// reset the input value to empty 
 reset = () => {

    document.getElementById('typeTask').value = "";
}

