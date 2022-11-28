var itemid=0;
$(".search-icon").on("click",function(){
    addItem();
});

$(document).on("keypress",function(event){
    if($(".item-name").val()!=""){
        var pressedKey=event.which;
        if(pressedKey==13){
            addItem();
        }
    }
});

function addItem(){
    itemid++;
    var divId="div-item-"+itemid;
    var pId="item-"+itemid;
    $('<div/>').attr("id", divId).attr("class","item").appendTo(".list");
    $('<p/>').attr("id",pId).text($(".item-name").val()).appendTo("#"+divId);
    $('<i/>').attr("class","fa-regular fa-square checkbox").attr("id",itemid).appendTo("#"+divId);
    $(".item-name").val("");
    $(".checkbox").on("click",function(event){
        checkingbox(event.target.id);
        $("#"+event.target.id).toggleClass("done");
        if($("#"+event.target.id).hasClass("done")){
            $("#"+event.target.id).removeClass("fa-regular fa-square");
            $("#"+event.target.id).addClass("fa-solid fa-square");
        }
        else{
            $("#"+event.target.id).removeClass("fa-solid fa-square");
            $("#"+event.target.id).addClass("fa-regular fa-square");

        }

    })

}

function checkingbox(boxId){
    $("#item-"+boxId).toggleClass("done");
}


