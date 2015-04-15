var js = document.createElement('script');
js.src = 'jquery-2.0.0.min.js';
document.getElementsByTagName("head")[0].appendChild(js);

window.onload = function() {
	$.ajax({cache:false});
	$.get('newsletter.htm',function(data) {
		$('#holderdiv2').append(data);
	});
}
