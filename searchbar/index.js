var searchText="";
var result=[];
var items=[];
var need_div="";
$(document).on("keyup",function(){
    searchText=$(".search-input").val();


    if(items.length === 0){
        $(".item-description").each(function(){
            var name=$(this).text();
            items.push((name.trim()).toLowerCase());
            
        });
    }
    
    for(var i=0;i<items.length;i++){
        var id=items[i].replace(" ","-");
      
        if(items[i].indexOf(searchText)>-1){
            console.log("Found item: "+items[i]);
            need_div=$("#"+id).parents(".item");
            need_div.show();
            
        }
        else{
            need_div=$("#"+id).parents(".item");
            need_div.hide();
        }
    }
});

