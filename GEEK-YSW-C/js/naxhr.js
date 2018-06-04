var naxhr={
	xhr:null,
	/* DOMString method,
   DOMString url,
   optional boolean async,
   optional DOMString user,
   optional DOMString password*/
	send : function (configur){
		naxhr.xhr = new plus.net.XMLHttpRequest();
		console.log( "创建请求："+configur.url );
		configur.method = configur.method||"GET";
		naxhr.xhr.onreadystatechange = function () {
	        switch ( naxhr.xhr.readyState ) {
	            case 0:
	            	//console.log( "naxhr.xhr请求已初始化" );
	            break;
	            case 1:
	            	//console.log( "naxhr.xhr请求已打开" );
	            break;
	            case 2:
	            	//console.log( "naxhr.xhr请求已发送" );
	            break;
	            case 3:
	               // console.log( "naxhr.xhr请求已响应");
	                break;
	            case 4:
	                //console.log( "naxhr.xhr请求已完成");
	                if ( naxhr.xhr.status == 200 ) {
	                	console.log("naxhr.xhr请求已完成");
	                	//设置回调函数
	               		//responseText = naxhr.xhr.responseText;
	               		//console.log("naxhr response:"+naxhr.xhr.responseText);
	               		configur.callback(naxhr.xhr.responseText,configur.url);
	                } else if(naxhr.xhr.status == 404){
	                	alert("服务器地址异常，请联系管理员");
	                	return -1;
	                }else{
	                	console.log( "naxhr.xhr请求失败："
	                	+naxhr.xhr.status );
	                	alert("网络异常，请检查手机网络");
	                	return -1;
	                }
	                break;
	            default :
	                break;
	        }
		}
	/*	naxhr.xhr.onerror=function(){
			configur.onerror(configur.url);
		}
		naxhr.xhr.ontimeout=function(){
			configur.ontimeout(configur.url);
		}*/
		//configur.before();
		naxhr.xhr.open(configur.method, configur.url,false);
		naxhr.xhr.send();
	}
}