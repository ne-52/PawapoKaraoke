
/*--------------------------------------------------------------------------
	
	Script Name : Random Image Script
	Author      : FIRSTSTEP - Motohiro Tani
	Author URL  : https://www.1-firststep.com
	Create Date : 2017/06/06
	Version     : 1.1
	Last Update : 2019/07/24
	
--------------------------------------------------------------------------*/


function random_image() {
	
	if ( document.getElementById( 'random-image' ) == null ) {
		return;
	}
	
	var image_ul   = document.getElementById( 'random-image' );
	var image_li   = image_ul.getElementsByTagName( 'li' );
	
	var random_int = Math.floor( Math.random() * image_li.length );
	
	image_li[random_int].style.display = 'block';
	
}




if ( document.readyState == 'loading' ) {
	document.addEventListener( 'DOMContentLoaded', function() {
		random_image();
	}, false );
} else {
	random_image();
}