if(!Grape)
	var Grape = {};
if(!Grape.Animation) {
	Grape.Animation = {};
}

Grape.Animation = function() {
	this.bindEvent();
}
Grape.Animation.prototype = {
	init: function() {

	},
	bindEvent: function() {
		var arr = ['office', 'talent', 'contact'];
		var whichIsClicked = [];
		$.each(arr, function(i, value) {
			$('#' + value + '_list').click(function() {
				if(whichIsClicked.length == 0) {
					$('#' + value + '_list').addClass("list_active");
					$('#' + value + '_list').find('span').addClass("ac");
					$('#' + value + '_space').show();
					$.each(arr, function(j, other) {
						if(other !== value) {
							$('#' + other).hide();
						}
					});
					whichIsClicked.length = 0;
					whichIsClicked.push(value);
				} else if(whichIsClicked[0] == value) {
					return false;
				} else {
					$('#' + whichIsClicked[0] + '_list').removeClass("list_active");
					$('#' + whichIsClicked[0] + '_list').find('span').removeClass("ac");
					$('#' + whichIsClicked[0] + '_space').hide();
					$('#' + value + '_list').addClass("list_active");
					$('#' + value + '_list').find('span').addClass("ac");
					$('#' + value + '_space').show();
					$.each(arr, function(j, other) {
						if(other !== value) {
							$('#' + other + '_space').hide();
						}
					});
					whichIsClicked.length = 0;
					whichIsClicked.push(value);
				}
			});
			if(i == 0){
				$('#' + value + '_list').click();
			}
		});
	}
}