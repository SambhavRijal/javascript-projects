var input='';
var result=0;
var delete_trigger=0;

$("button").on("click",function(event){
    if($(this).hasClass('input')){
        input+=$(this).text();
        $("#result").val(input);
        console.log(input)
    }

    if(event.target.id=='='){
        equals();
    }

    if($(this).text()=='AC'){
        console.log("Clear");
        console.log(input);
        result='';
        input='';
        $("#result").val(result);
        $("#history").val(input);
    }

    if($(this).text()=='Del'){
        if(delete_trigger<2){
            console.log("Delete");
            console.log(input);
            delete_trigger=delete_trigger+1;
        }
        
        if(delete_trigger==2){
            input=input.slice(0,-1);
        }
        $("#result").val(input);
        $("#history").val(result);
    }

    


})

$(document).on("keypress",function(event){
    var keypress=event.which;
    if(keypress!=13){
        console.log(event.key);
        input+=event.key;
        $("#result").val(input);
        console.log(input);
    }
    else{
        equals();
    }

    
});


function equals(){
    console.log("equalsto");
    console.log(input);
    result=eval(input);
    delete_trigger=0;
    $("#result").val(result);
    $("#history").val(input);
}