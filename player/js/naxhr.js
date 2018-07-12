var naxhr={
	xhr:null,
	/* DOMString method,
   DOMString url,
   optional boolean async,
   optional DOMString user,
   optional DOMString password*/
	send : function (configur){
		naxhr.xhr = new plus.net.XMLHttpRequest();
		//naxhr.xhr.setRequestHeader("Set-Cookie",configur.cookie);
		naxhr.xhr.setRequestHeader("X-CSRF-TOKEN","1XstAjC6HgHekybOOZlRuQsHUhj3c9hYrU4iFJYw");
		naxhr.xhr.setRequestHeader("User-Agent",
		"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.186 Safari/537.36");
		//naxhr.xhr.setRequestHeader("Referer","http://email.51thyyyy.at.gmail.com.csduona.site/?d=1")
		
		configur.method = configur.method||"GET";
		console.log( "创建请求"+configur.method+":"+configur.url );
		//alert( "创建请求："+configur.url );
		
		naxhr.xhr.timeout = 15000;
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
	                	//alert( "naxhr.xhr请求已完成");
	                	console.log("naxhr.xhr请求已完成");
	                	//设置回调函数
	               		//responseText = naxhr.xhr.responseText;
	               		//console.log("naxhr response:"+naxhr.xhr.responseText);
               		  	var cookies;
						var headers = naxhr.xhr.getAllResponseHeaders();
						//console.log(headers);
						reponse = {};
						reponse.headers = headers;
						reponse.txt = naxhr.xhr.responseText;
						reponse.rurl=configur.url;
	               		configur.callback(reponse);
	                } else if(naxhr.xhr.status == 404){
	                	alert("服务器异常，请联系管理员");
	                	console.log( "请求404："+configur.url );
	                	return -1;
	                }
	              
	                break;
	            default :
	                break;
	        }
		}
		naxhr.xhr.onerror=function(){
			mui.toast("网络异常,请稍候再试");
			if(layer)layer.close(0)
		}
		naxhr.xhr.ontimeout=function(){
			mui.toast("请求超时,请稍候再试");
			if(layer)layer.close(0)
		}
		naxhr.xhr.open(configur.method, configur.url,false);
		naxhr.xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded; charset=gb2312');
		if(configur.data)naxhr.xhr.send(configur.data);
		else{naxhr.xhr.send()}
	},
	reponse:null
}

var timestampUrl = "http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp";