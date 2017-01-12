if(!Grape)
	var Grape = {};
if(!Grape.Business) {
	Grape.Business = {};
}

Grape.Business = function() {
}
Grape.Business.prototype = {
	init: function() {
		
	},
	move: function(){
		var arrTops = ['operations','derivatives','originate','joint'];
		var arrBottoms = ['marketing','authorized','game_chain'];
		 var self = this;
		 var num = 0;
		 var flag = true;
		setInterval(function(){
			if(num==10){
				flag = false;
			}
			if(num==0){
				flag = true;
			}
			if(flag){
				/* $.each(arrTops, function(i, value) {
					var str=$('#'+value).css('top');
					var top=str.substring(0,str.length-2);
					$('#'+value).css('top',(top++)+'px');
				});
				$.each(arrBottoms, function(i, value) {
					var str=$('#'+value).css('bottom');
					var bottom=str.substring(0,str.length-2);
					$('#'+value).css('bottom',(bottom--)+'px');
				}); */
				num ++;
			}else{
				num--;
			}
			$('#bs_menu').css("top",num);
		},55);
		// self.stop();
	},
	stop: function(){ 
		$('#bs_menu').hover(function(e){
			var key=e.target.id;
			switch(key){
				case 'operations':   
					$(this).css("top",'100px');
					break;
				case 'derivatives':   
					$(this).css("top",'235px');
					break;
				case 'marketing':   
					$(this).css("bottom",'350px');
					break;
				case 'authorized':   
					$(this).css("bottom",'142px');
					break;
				case 'game_chain':   
					$(this).css("bottom",'225px');
					break;
				case 'originate':   
					$(this).css("top",'280px');
					break;
				case 'joint':   
					$(this).css("top",'50px');
					break;
			}
		});
	}
}