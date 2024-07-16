$(document).ready(function(){
    // sub_bg 슬라이드▼
    $(".main li, .sub_bg").hover(function(){
        $(".sub, .sub_bg").stop().slideDown("fast");
    }, function(){
        $(".sub, .sub_bg").stop().slideUp("fast");
    })// .main li, .sub_bg.hover

    // 이미지 슬라이드▼
    var n = 0;

    setInterval(function(){
        if(n == 2){
            n = 0;
        }else{
            n ++;
        }
        console.log(n)

        var pos = n*(-1200)+"px"
        $(".left_move").animate({"left":pos}, 500)
    }, 3000)

    $(".click").click(function(){
        $(".modal, .pop").fadeIn();
    })

    $(".close").click(function(){
        $(".modal, .pop").fadeOut();
    })
})// jquery 끝