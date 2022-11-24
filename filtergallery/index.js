$("li").on("click",function(event){
    var category=event.target.id;
    console.log(category);
    
    $("li").removeClass("selected");
    $("#"+category).toggleClass("selected");

    $(".card").hide();
    $("."+category).fadeIn(300);
    
})