var searchText="";
var result=[];
var items=[];
$(document).on("keyup",function(){
    searchText=$(".search-input").val();
    //console.log(searchText);


    if(items.length === 0){
        $(".item-description").each(function(){
            var name=$(this).text();
            //console.log(name);
            items.push((name.trim()).toLowerCase());
            
        });
    }
    
    //console.log(items);
    for(var i=0;i<items.length;i++){
        var id=items[i].replace(" ","-");
        //console.log(id);
        //console.log("Array length"+i);
        //console.log(items[i]);
        if(items[i].indexOf(searchText)>-1){
            console.log("Found item: "+items[i]);
            var need_div=$("#"+id).parents(".item");
            need_div.show();
            
        }
        else{
            var need_div=$("#"+id).parents(".item");
            need_div.hide();
        }
    }
});

