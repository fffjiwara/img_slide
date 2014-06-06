$(function(){
	
	var now_slide=0;
	var max=11;

	$("#next").on("click",nextSlide);
	$("#back").on("click",backSlide);


	function nextSlide(){
		if(now_slide<max){
			now_slide+=1;
			imgChange(now_slide);
		}
		console.log(now_slide);
	}

	function backSlide(){
		if(now_slide>0){
			now_slide-=1;
			imgChange(now_slide);
		}
		console.log(now_slide);
	}

	function imgChange(num){
		$img=$("#img_space img");
		$img.attr('src','img/'+num+'.jpg');
	}
	
	
	
	
});