var btn=document.getElementById("btn");
btn.onclick=function(){
    var arrays = new Array();
    var items=document.getElementsByName("check");

    for(var i=0;i<items.length;i++){
        if(items[i].checked){
            arrays.push(items[i].value);
        }
    }
    alert("你选中的个数为："+arrays.length)
}
