/**
 * 
 */

function checkMobile(mobile){
	if(!(/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(mobile))||mobile.length<11){ 
		alert("请填写正确的手机号");  
		return false; 
	}
	else{
		return true;
	} 
} 

function matchName(str){
	var reg = new RegExp(/^[\u4e00-\u9fa5]{2,4}$/i); 
	if (!reg.test(str)) 
	{
		alert("姓名不正确，请输入2-4个汉字！"); 
		return false;
	}
	else
	{
		return true;
	}
}


function matchCode(str){
	var reg = new RegExp(/^\d{6}$/);
	if (!reg.test(str)) 
	{
		alert("验证码不正确"); 
		return false;
	}
	else
	{
		var code=GetCookie('code');
		if(code==str)
		{
			return true;
		}
		else
		{
			alert('验证码不正确');
			return false;
		}
	}
}


function isCardID(sId){
	var reg = new RegExp(/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/);
	 if(!reg.test(sId))
		 {
		 alert('不是正确的身份证号长度');
		 return false;
		 }
	 return true;
	}

function isNull(str,tip) {
    if (str == "" ){
    	alert(tip)
    	return true;
    } 
    var regu = "^[ ]+$" ;
    var re = new RegExp(regu);
    if(re.test(str))
    {
    	alert(tip)
    	return true;
    }
    else{
    	return false;
    }
}