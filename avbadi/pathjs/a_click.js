(function($m, $s, $) {
	mui.init();
	mui.plusReady(function(){
		mui('body').on('tap', '.accl', function() {
			var fun = $(this).attr("fun");
			var data = $(this).attr("data");
			if(data){
				data=data.split(",");
			}
			doCallback(eval(fun),data);
		});
		mui('body').on('tap', '.movie-box', function() {
			//跳转到电影详情页
			localutil.setCache("open_movie_url",$(this).attr("href"),300);
			var currHref = window.location.href;
			if(currHref.indexOf("movie.html")>0){
				window.location.reload();
				return;
			}
			webviewOpen("movie.html",1);
		});
		mui('body').on('tap', '.avatar-box', function() {
			//跳转到演员详情页
			loadHref($(this).attr("href"));
		});
	});
	function openHref(url){
		window.location.href=url;
	}
	function loadHref(url){
		console.log("loadHref:"+url);
		localutil.setCache("open_url",url,30);
		window.location.href="index.html";
	}
	function copyMagnet(magnetUrl){
		var context = plus.android.importClass("android.content.Context");
	  	var main = plus.android.runtimeMainActivity();
	  	var clip = main.getSystemService(context.CLIPBOARD_SERVICE);
	  	plus.android.invoke(clip,"setText",magnetUrl);
	  	mui.toast("拷贝成功！");
	  	window.open(magnetUrl);
	}
	function fun_back() {
		console.log("back");
		var ws=plus.webview.currentWebview();  
		plus.webview.close(ws);  
	}

	function showOrCloseMenu() {
		if($("#menu_div").hasClass("open")) {
			$("#menu_div").removeClass("open");
			return;
		}
		$("#menu_div").addClass("open");
	}
	function toMember(){
		//window.location.opne="member.html"; 返回直接退出
		//window.open("member.html"); //返回直接退出
		showOrCloseMenu() ;
		webviewOpen("member.html", 1);
	}
	
	function returnPageNo(pageno){
		$s.setInt("pageno",pageno,300);
		webviewOpen("index.html", 1);
	}
	
	function returnTop(){
	    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
	    if (currentScroll > 0) {
	         window.requestAnimationFrame(returnTop);
	         window.scrollTo (0,currentScroll - (currentScroll/5));
	    }
	}
	
	
	function webviewOpen(url,id){
		var page = plus.webview.create(url,id);
 		page.show();
	}
	function doCallback(fn,args)    
	{    
	    fn.apply(this, args);  
	}    
})(mui, localutil, jQuery);