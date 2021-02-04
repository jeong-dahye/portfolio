$(document).ready(function(){
    
    /*mainCon01*/
    $(".toggle").hide();
    
    $(".con01Txt01").click(function(){
        $(".toggle01").slideDown();
        $(".con01Txt li ul").not('.toggle01').slideUp();
    });
    $(".con01Txt02").click(function(){
        $(".con01Txt02 ul").slideDown();
        $(".con01Txt li ul").not('.toggle02').slideUp();
    });
    
    $(".con01Txt03").click(function(){
        $(".toggle03").slideDown();
        $(".con01Txt li ul").not('.toggle03').slideUp();
    });
    $(".con01Txt04").click(function(){
        $(".con01Txt04 ul").slideDown();
        $(".con01Txt li ul").not('.toggle04').slideUp();
    });
    $(".con01Txt05").click(function(){
        $(".con01Txt05 ul").slideDown();
        $(".con01Txt li ul").not('.toggle05').slideUp();
    });
    $(".con01Txt06").click(function(){
        $(".con01Txt06 ul").slideDown();
        $(".con01Txt li ul").not('.toggle06').slideUp();
    });
    $(".con01Txt07").click(function(){
        $(".con01Txt07 ul").slideDown();
        $(".con01Txt li ul").not('.toggle07').slideUp();
    });
    
    
    
    /*mainCon02*/
    $(".con02Txt").hide();
    $(".con02List01>h3").click(function(){
            $(".con02List01").animate({
                height: "680px"});
            $(".con02List01>h3").hide();
            $(".con02Txt01").fadeIn(1000,"swing",function(){
                $(".con02Txt01").show();
            })
        });
    $(".con02List01 .name").click(function(){
             $(".con02List01 h4").text("예미니");
        });
    $(".con02List01 .likeBtn").click(function(){
             $(".con02List01 h4").text("잠자기 지금부터 잘거니깐 깨우면 안된다냥");
        });
    $(".con02List01 .dislikeBtn").click(function(){
             $(".con02List01 h4").text("냥?");
        });
    $(".con02List01 .hobby").click(function(){
             $(".con02List01 h4").text("그루밍");
        });
    
    $(".con02List02>h3").click(function(){
            $( ".con02List02" ).animate({
                height: "680px"});
            $(".con02List02>h3").hide();
            $(".con02Txt02").fadeIn(1000,"swing",function(){
                $(".con02Txt02").show();
            })
        });
    $(".con02List02 .name").click(function(){
             $(".con02List02 h4").text("몬나니");
        });
    $(".con02List02 .likeBtn").click(function(){
             $(".con02List02 h4").text("새로운 걸 좋아해요");
        });
    $(".con02List02 .dislikeBtn").click(function(){
             $(".con02List02 h4").text("후회? 최선을 다하지 못한 후회");
        });
    $(".con02List02 .hobby").click(function(){
             $(".con02List02 h4").text("영화보기?");
        });
    
    $(".con02List03>h3").click(function(){
            $( ".con02List03" ).animate({
                height: "680px"});
            $(".con02List03>h3").hide();
            $(".con02Txt03").fadeIn(1000,"swing",function(){
                $(".con02Txt03").show();
            })
        });
    $(".con02List03 .name").click(function(){
             $(".con02List03 h4").text("건강이");
        });
    $(".con02List03 .likeBtn").click(function(){
             $(".con02List03 h4").text("예미니 간식 뺏어먹는게 조왕");
        });
    $(".con02List03 .dislikeBtn").click(function(){
             $(".con02List03 h4").text("간식 안주기");
        });
    $(".con02List03 .hobby").click(function(){
             $(".con02List03 h4").text("먹는게 좋다멍");
        });
});