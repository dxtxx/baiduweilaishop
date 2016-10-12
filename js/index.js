$(function(){
	// 商品动画效果
	var imgs=$('.main1-right div img');
	var d=$('.main1-right div');
	d.hover(function(){
        imgs.eq(d.index(this)).animate({right:30},1000)
	},function(){
		imgs.eq(d.index(this)).animate({right:14},1000)
	})

	//banner图放大效果
	// var imgs1=$('.banner img');
	// console.dir(imgs1)
	// imgs1.hover(function(){
	// 	imgs1.eq(imgs1.index(this)).animate({width:'110%'},1000)
	// })
})