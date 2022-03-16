// dark theme
function darkTheme(){

    let moon = document.getElementById('moon');
     

    if(moon.click){
        document.body.style.backgroundColor = "hsl(235, 21%, 11%)";
        document.querySelector('.todoContainer').style.backgroundImage = "url(../images/bg-desktop-dark.jpg)";
        showSun();
        removeMoon();
    }
    
};
// light theme
function lightTheme(){

    let sun = document.getElementById('sun');
    if(sun.click){

        document.body.style.backgroundColor = "white";
        document.querySelector('.todoContainer').style.backgroundImage = "url(../images/bg-desktop-light.jpg)";
        showMoon();
        removeSun();
        
    }

}

// show and hide the sun 
function showSun(){

let _sun = document.querySelector('#sun');
_sun.style.display = "flex";

};

function removeSun(){

    let _sun = document.querySelector('#sun');
    _sun.style.display = "none";
}

// show and hide the moon

function removeMoon(){

    let _moon = document.querySelector('#moon');
    _moon.style.display = "none";
    
}

function showMoon(){
    let _moon = document.querySelector('#moon');
    _moon.style.display = "flex";
}


