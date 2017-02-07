
$(function(){


    $('.tabnav').click(function(){
        var num = $(this).index();
        $('.tabnav').removeClass('active');
        $(this).addClass('active');
        $('.tab').removeClass('active');
        $('.tab').eq(num).addClass('active');
    })


    $(function(){
        var imgW = $('.bg-bg').css("width");
        var widthsk=imgW.substring(0,imgW.length-2);
        var a = widthsk*515/370;
        var b = widthsk*496/370;
        var imgH = parseInt(a)+"px";
        var lineH = parseInt(b)+"px";
        $('.bg-bg').css({'height':imgH,'line-height':lineH});
    })





    $(".fold-on-off").click(function(){
        if($(".fold-text").is(":hidden")){
            $(".fold-text").slideDown("slow");
            $(this).html("点击折叠详情");
        }else{
            $(".fold-text").slideUp("slow");
            $(this).html("点击展开详情");
        }


    })

})
function openWindow(){
    document.getElementById('light').style.display='block';
    document.getElementById('fade').style.display='block';
}
function closeWindow(){
    document.getElementById('light').style.display='none';
    document.getElementById('fade').style.display='none';
}

function floatup(event){
    var e=window.event || event;
    if(e.stopPropagation){
        e.stopPropagation();
    }else{
        e.cancelBubble = true;
    }
    $("#popbox").animate({bottom:"0"});
}

$("#popbox").click(function(event){
    var e=window.event || event;
    if(e.stopPropagation){
        e.stopPropagation();
    }else{
        e.cancelBubble = true;
    }
});

function floatdown(){
    $("#popbox").animate({bottom:"-202px"});
}

function removeto(obj){
    $(obj).parent().remove();
}


function addto(){

    var li=document.createElement("li");
    var del=document.createElement("span");
    var value=document.getElementById("add").value;
    del.innerHTML='<span class="common_nav1 float00 " onclick="removeto(this)">删除</span>';
    li.innerHTML=value+del.innerHTML;
    var list=document.getElementById("listd");
    list.appendChild(li);
    document.getElementById("add").value="";
    closeWindow();

}


