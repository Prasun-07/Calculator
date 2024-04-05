var display=document.querySelector("input");
var buttons=document.querySelectorAll("button");

var btnArr=Array.from(buttons);    /*Get the input datas in the form of a list*/
var inputData="";
btnArr.forEach(btn => {
    btn.addEventListener('click',function(event){
        if(event.target.innerHTML=="DEL"){
            inputData=inputData.substring(0, inputData.length - 1);
            display.value=inputData;
        }
        else if(event.target.innerHTML=="AC"){
            inputData="";
            display.value=inputData;
        }
        else if(event.target.innerHTML=="="){
            inputData=eval(inputData);
            display.value=inputData;
        }
        else{
            inputData+=event.target.innerHTML;
            display.value=inputData;
        }
    })
})