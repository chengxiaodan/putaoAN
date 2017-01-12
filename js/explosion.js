var Grape = Grape || {};
if(!Grape.Explosion) {
	Grape.Explosion = {};
}

Grape.Explosion = function() {
	this.v_video = document.getElementById("v_video");
	this.bindEvent();
}
Grape.Explosion.prototype = {
	init: function() {

	},
	bindEvent: function() {
		var self = this;
		var arr = ['index', 'hello', 'cartoon', 'novel', 'shortTv', 'movie'];
		var whichIsClicked = [];
		$.each(arr, function(i, value) {
			$('#t-' + value).click(function() {
				if(whichIsClicked.length == 0) {
					$('#t-' + value).removeClass("c1");
					$('#t-' + value).addClass(value + "-active");
					$('#c-' + value).show();
					$.each(arr, function(j, other) {
						if(other !== value) {
							$('#c-' + other).hide();
						}
					});
					whichIsClicked.length = 0;
					whichIsClicked.push(value);
				} else if(whichIsClicked[0] == value) {
					return false;
				} else {
					$('#t-' + whichIsClicked[0]).removeClass(whichIsClicked[0] + "-active");
					$('#t-' + whichIsClicked[0]).addClass("c1");
					$('#c-' + whichIsClicked[0]).hide();
					$('#t-' + value).removeClass("c1");
					$('#t-' + value).addClass(value + "-active");
					$('#c-' + value).show();
					$.each(arr, function(j, other) {
						if(other !== value) {
							$('#c-' + other).hide();
						}
					});
					whichIsClicked.length = 0;
					whichIsClicked.push(value);
				}
			});
			if(i == 0) {
				$('#t-' + value).click();
			}
			$('#t-' + value).mouseenter(function() { //鼠标移入
				if(whichIsClicked[0] !== value) {
					$(this).addClass(value + "_hover");
				}
			}).mouseleave(function() { //鼠标移出 
				$(this).removeClass(value + "_hover");
			});
		});

		$('#hello_play').click(function() {
			self.showVideo();
		});
		$('#hello_close').click(function() {
			self.closeVideo();
		});
	},
	closeVideo: function() {
		var self = this;
		$('#maskWrap').hide();
		$('#video_main').hide();
		self.v_video.pause();
	},
	showVideo: function() {
		var self = this;
		$('#maskWrap').show();
		$('#video_main').show();
		self.v_video.currentTime = 0;
		self.v_video.play();
	}
}