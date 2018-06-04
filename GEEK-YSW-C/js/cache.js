var cache={
	set:function(k,v,t){
		var json = {"v":v,"t":(new Date().getTime()+t)};
		var str = JSON.stringify(json);
		
		localStorage.setItem(k,str);
	},
	get:function(k){
		var v = localStorage.getItem(k);
		if(v){
			var jso = JSON.parse(v);
			if(new Date().getTime()>new Number(jso.t)){
				return null;
			}
			return jso.v;
		}else{
			return null;
		}
	},
	getJSON:function(k){
		var jk = localStorage.getItem(k);
		if(jk==null){
			return null;
		}
		var fullVal = JSON.parse(jk);
		return  JSON.parse(fullVal.v);
	}
}
