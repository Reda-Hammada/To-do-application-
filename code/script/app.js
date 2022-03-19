let taskList = [];

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

      
       let task = document.getElementById('typeTask').value;
        if(task.value == null){

          taskContainer = document.getElementById('tasksContainer');
          Elem.innerHTML = taskList[i] ; 
          taskContainer.insertAdjacentElement('beforeend', Elem);
          Elem.classList.add('task');
        }

         
        
    

          
       };
      

     
    }
    
       
    


function reset(){

    document.getElementById('typeTask').value = "";
}

