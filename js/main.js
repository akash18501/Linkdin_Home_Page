document.addEventListener('scroll',removebar); 
var previousscroll = 0; 
var columntwo = document.querySelector('.col-two'); 
// document.addEventListener('mouseup',addbar); 
var lastScrollTop = 0; 
function removebar(e){
	var query = window.matchMedia('(max-width: 700px)'); 
	if(query.matches){
	   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
	   if (st > lastScrollTop){
	      // downscroll code
	      //console.log('scroll down');
	     columntwo.style.display='none'; 
	   } else {
	      // upscroll code
	      console.log('upscroll')
 			columntwo.style.display='flex'; 
	   }
	   lastScrollTop = st <= 0 ? 0 : st;
  	}
}


