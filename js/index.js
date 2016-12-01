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
    
    //banner轮播
    var imag_box=$('.images');
    var banner=$('.banner-left');
    var b=$('.image-list');
    var t=setInterval(move,2000);
    var i=0;
    function move(){
        var x=$('.image-list').width();
    	i++;
    	if (i==b.length) {
    		i=0;
    	}
    	imag_box.animate({left:x*-i},1000)
        b_btn.removeClass('hot').eq(i).addClass('hot');
    }
    // banner.hover(function(){
    // 	clearInterval(t)
    // },function(){
    // 	t=setInterval(move,2000)
    // })
    var b_btn=$('.banner-btn');
    b_btn.eq(0).addClass('hot');
    b_btn.click(function(){
        clearInterval(t);
        i=b_btn.index(this);
        var x=$('.image-list').width();
        b_btn.removeClass('hot').eq(i).addClass('hot');
        imag_box.animate({left:x*-i},1000,function(){
            var t=setInterval(move,2000);
        });
    })
    var b_left=$('.btn-left');
    var b_right=$('.btn-right');
    b_right.click(function(){
        var x=$('.image-list').width();
       clearInterval(t)
            i++
            if (i==b.length) {
                i=0;
            };
            imag_box.animate({left:x*-i},1000)
            b_btn.removeClass('hot').eq(i).addClass('hot');
            t=setInterval(move,1500)
    })
    b_left.click(function(){
        var x=$('.image-list').width();
         clearInterval(t)
            i--
            if (i==-1) {
                i=b.length-1;
            };
            imag_box.animate({left:x*-i},1000)
            b_btn.removeClass('hot').eq(i).addClass('hot');
            t=setInterval(move,1500)
    })
    //返回顶部
    var top=$('.back');
    top.click(function(){
        $('html,body').animate({scrollTop:0},1000)
        return false;
    })
})