var G_utils = (function(){
	var namespace = function(){

		var a, v, x, o, d, i, j, len1, len2;
		a = arguments;
		len1 = a.length;
		
		// 支持多参数,如两个参数（a.b.c, d.e）
		for(i = 0; i < len1; i++){
			d = a[i].split('.'); // 分解成数组，如把a.b.c分解成[a,b,c]
			o = window[d[0]] = window[d[0]] || {}; // 保证a是对象,若果全局有就用全局的，如果没有就新建{}
			x = d.slice(1);//取出[b,c]
			len2 = x.length;
			
			// 支持嵌套，对b和c
			for(j = 0; j < len2; j++){
				v = x[j]
				o = o[v] = o[v] || {}; // o逐层深入，保证每层都是对象，如果是b，o变为a.b，如果是c，o最后变成a.b.c
			}
		}
    };
    
	return {
		namespace: namespace
	};
})();