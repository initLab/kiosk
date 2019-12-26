jQuery(function($) {
	function paddingZero(num) {
		if (num < 10) {
			return '0' + num;
		}
		
		return num;
	}
	
	const clock = $('#clock');
	
	setInterval(function() {
		const now = new Date;
		clock.text(paddingZero(now.getHours()) + ':' + paddingZero(now.getMinutes()) + ':' + paddingZero(now.getSeconds()));
	}, 1000);
});
