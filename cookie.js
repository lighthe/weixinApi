/**
	*COOKIE相关 add by bsrn  
	*
*/
		var Cookie=new Object();
		var Cookie={
			setCookie:function(){},
			getCookie:function(){},
			deleteCookie:function(){}
		}
		//setCookie
		//name是要设置cookie的名字，value是要设置的值
		//option 包括其他选项，是一个对象参数
		Cookie.setCookie=function(name,value,option){
			//用于存储负值给document.cookie的cookie格式字符串
			var str=name+"="+escape(value);
			if(option){
				//如果设置了过期时间
				if(option.expireDays){
					var date=new Date();
					var ms=option.expireDays*24*3600*1000;
					date.setTime(date.getTime()+ms);
					str+=";expires="+date.toGMTString();
				}
				if(option.path)str+=";path="+option.path;//设置访问路径
				if(option.domain)str+=";domain="+option.domain;//设置访问主机
				if(option.secure)str+=";true";//设置安全性
			}
			document.cookie=str;
		}
		//实现取Cookie值的方法
		//name是指定Cookie的名字
		Cookie.getCookie=function(cookieName){
		var reg=new RegExp(cookieName+"=([^;]*);?");
		if(reg.test(document.cookie)){
			return decodeURIComponent(RegExp.$1);
		}		
	}
		//实现删除Cookie 的方法
		//name是指定的Cookie名称， 通过将expireDays属性指定为负数
		Cookie.deleteCookie=function(name){
			this.setCookie(name,"",{expireDays:-1,path:"/"});//将过期时间设置为过去来删除Cookie			
			
//		  var date = new Date();
//   		  date.setTime(date.getTime() - 10000);
//   		  var cval=Cookie.getCookie(name);
//   		  document.cookie = name + "=a; expires=" + date.toGMTString() +";path=/";

		}