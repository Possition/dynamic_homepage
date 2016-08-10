$(function(){
	var $banner_page = $(".header .banner ul li");
	var $banner_btn = $(".header .banner dl dd a");
	$banner_btn.on("click", function(){
		var $target = $(this).parent();
		var index = $target.index();
		// 添加类选择器，并让其他的去除这个类选择器
		$target.addClass("active").siblings().removeClass("active");

		//获取到当前索引值，添加显示动画
		var $page = $banner_page.eq(index);   //拿到目标page
		$page.fadeIn(1000,function(){
			$(this).addClass("active");       //动画执行完之后，添加类选择器
		}).siblings().fadeOut(1000,function(){
			$(this).removeClass("active");    //动画执行完之后，移除类选择器
		});

		//文字的动态进入效果
		var $imgs = $page.find(".font-text").find("img");
		$imgs.animate({top:0,opacity:1},1000); 
	}).first().trigger('click');    //添加进入时触发事件


	$(window).scroll(function(event){
		var top = $(this).scrollTop();

		$(".dynamic").each(function(){
			console.log($(this).offset().top);
			if(top > $(this).offset().top){
				$(this).removeClass(".dynamic").animate({opacity:1},1000);
			}
		});
	});

});