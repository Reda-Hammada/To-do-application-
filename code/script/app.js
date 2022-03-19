let taskList = [];
let check;

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

        else {

          if(task.value == null){
          
          document.querySelector('#typeTaks:focus').style.outlineColor = red;

        }
        
        }

         
        
    

          
       };
      

     
    }
    
       
    


function reset(){

    document.getElementById('typeTask').value = "";
}

