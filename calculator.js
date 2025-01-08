const display= document.getElementById("display");

//combines the digits or symbols
function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value= "";
}

function calculate(){
    try{
                    //evaluates and calculates the input
        display.value=eval(display.value);
    }
    catch(error){
        display.value="Error";
    }
                
}