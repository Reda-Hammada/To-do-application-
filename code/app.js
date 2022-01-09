
function darkTheme(){

    let moon = document.getElementById('moon');
    if(moon.click){
        document.body.style.backgroundColor = "hsl(235, 21%, 11%)";
    }
    
};

function lightTheme(){

    let sun = document.getElementById('sun');
    if(sun.click){
        document.body.style.backgroundColor = "white";
    }
}