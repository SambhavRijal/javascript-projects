var currentIndex=1;
var numReviews=$(".review").length;
//console.log(numReviews);

$(".review").hide();
$("#review-"+currentIndex).show();
$("#review-indicator-1").addClass("selected");

$(".slider-control").on("click",function(){
    //$(this) to access jquery functions, this to access normal js functions
    if(this.id=='next'){
        //console.log("next");
        currentIndex=currentIndex+1;
    }
    else{
        //console.log("Previous");
        currentIndex=currentIndex-1;
    }
    if(currentIndex>numReviews){
        currentIndex=1;
    }
    if(currentIndex<1){
        currentIndex=numReviews;
    }
    //console.log(currentIndex);
    $(".review-indicator").removeClass("selected");
    $("#review-indicator-"+currentIndex).addClass("selected");
    $(".review").hide();
    $("#review-"+currentIndex).show();
});