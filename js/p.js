$(document).ready(function(){
	  if(navigator.userAgent.indexOf("MSIE 8.0")>0){
    $(".but ul li:nth-child(1),.but ul li:nth-child(3),.but ul li:nth-child(5)").css({"width":"120px","line-height":"34px","font-size": "18px"});
    $(".but ul li input").css({"padding-top":"0","margin-top":"0"});
    $(".but").css({
    	"background": "#B3631A",
	"height":"800px"
    });
    $(".bj_out ul li:nth-child(1)").css({"font-size":"24px"});
    $(".bj_out ul li").css({"font-size":"18px"});
    $(".bj_position ul li:nth-child(2)").css({"font-size": "14px","color":"#999","margin-bottom":"40px"});
    $(".b_transfer ul li:nth-child(2),.bj_p ul li:nth-child(2)").css({"margin-bottom":"0px","font-size": "18px"});
    $(".bj_p ul li:nth-child(2) b").css({"font-size": "20px","color":"#e30505"});
    $(".bj_p ul li:nth-child(1)").css({"font-size": "30px","text-align": "left","margin-top":"-80px"});
    $(".bj_p ul li:nth-child(1) img").css({"width":"40px","height":"64px"});
    $(".bj_p ul li:nth-child(1) img.p").css({"width":"100px","height":"39px"});
    $(".b_transfer ul li").css({"font-size": "18px"});
    $(".bj_transfer ul li").css({"font-size": "18px"});
    $(".bj_position ul li").css({"font-size": "18px"});
    $(".bj_frozen ul li").css({"font-size": "18px"});

    $(".main2 ul li:nth-child(2) li img").css({"width":"100px",
        "height":"35px",
        "border":"0px solid #000",
        "margin-right":"16px",
        "margin-bottom":"16px",
        "font-size":"16px",
        "font-weight": "bold"});
    $(".main_take ul li.yp:nth-child(4)").css({"float":"right"});
    $(".main_take ul li.yp:nth-child(4) input[type=button]").css({"background":"none",
        "border":"0",
        "width":"170px",
        "height":"58px",
        "color":"#fff",
        "font-size": "30px",
        "line-height": "30px",
        "background-image": "url('../../../images/bj_pop1.png')"});
    $(".main2 ul li:nth-child(1) ul li:nth-child(2),.main2 ul li:nth-child(1) ul li:nth-child(4)").css({"width": "300px"});
    $(".main2 ul li:nth-child(2) ul li:nth-child(2)").css({"width": "700px"});
    $(".main2 ul li:nth-child(3) ul li:nth-child(2)").css({"width":"600px","height":"235px","background-image": "url('../../images/gonggao_bg.png')"});
    $(".main2 ul li ul li:nth-child(1)").css({"width":"90px"});
    $(".main2 ul li:nth-child(1) ul li:nth-child(1)").css({"width":"200px"});


    $(".main1 ul li ul li:nth-child(2),.main_take ul li ul li:nth-child(2)").css({
        "width":"80px",
        "padding":"0 0px",
        "line-height": "34px"
    });
    $(".main1 ul li li:nth-child(1),.main_take ul li li:nth-child(1)").css({
        "width":"100px",
        "height":"34px",
        "background-image": "url('../../images/yp.png')",
        "background-repeat":"no-repeat",
        "margin":"0 30px 0 0",
        "line-height": "34px",
        "text-align": "center"

    });
    $(".main_take ul li li:nth-child(1)").css({
        "width":"100px",
        "height":"34px",
        "background-image": "url('../../images/yp.png')",
        "background-repeat":"no-repeat",
        "margin":"0 30px 0 0",
        "line-height": "34px",
        "text-align": "center"

    });
    $(".main1 ul li ul li:nth-child(3),.main_take ul li ul li:nth-child(3)").css({
        "width":"26px",
        "height":"24px",
        "margin":"0 30px 0 0",
        "background-image": "url('../../images/yp1.png')",
        "background-repeat":"no-repeat",
        "line-height": "26px",
        "border":"0px solid #000"
    });
    $(".main1 ul li ul li:nth-child(3).l").css({
        "width":"20px",
        "height":"32px",
        "margin":"0 30px 0 6px",
        "background": "none",
        "background-image": "url('../../images/small_l.png')"
    });
    $(".main1 ul li ul li:nth-child(4) input,.main1 ul li ul li:nth-child(5) input").css({
        "width":"75px",
        "height":"35px",
        "background": "none",
        "background-image": "url('../../images/yp2.png')",
        "margin":"0 30px 0 0",
        "color":"#fff",
        "line-height": "35px",
        "font-size": "18px",
        "border":"0px solid #000",
        "text-align": "center"
    });
    $(".main_take ul li ul li:nth-child(4) input").css({
        "width":"120px",
        "height":"30px",
        "margin":"0 30px 0 0",
        "color":"#fff",
        "line-height": "35px",
        "font-size": "18px"
    });
    $(".main1 img:nth-child(3)").css({
        "margin":"300px 0 0 750px"
    });$(".main1 img:nth-child(1)").css({
        "position":"absolute",
        "margin":"50px 0 0 660px",
        " z-index": "100"
    });
    $(".main_profit .u2 ul li ul li:nth-child(6)").css({
        "margin-right":"0",
        "margin-bottom": "16px",
        "line-height": "18px",
        "font-weight": "bold"
    });
    $(".main_profit .u1 ul li:nth-child(1)").css({

        "margin": "0 80px 0 0"
    });
    $(".main_profit .u1 ul li:nth-child(2)").css({

        "margin": "0 90px 0 0"
    });
    $(".main_profit .u1 ul li:nth-child(3),.main_profit .u1 ul li:nth-child(4),.main_profit .u1 ul li:nth-child(5)").css({

        "margin": "0 50px 0 0"
    });
    $(".main_grab .u2 ul li ul li:nth-child(2) img").css({
        "vertical-align": "middle",
        "margin-left": "10px"

    });
    $(".main_grab .u2 ul li ul li:nth-child(1)").css({

        "width":"200px"
    });

    $(".main_grab .u2  > ul > li:nth-child(1) ul li").css({


        "margin-bottom": "10px",
        "color":"#ffd200",
        "font-size": "24px"
    });
    $(".main_grab .u1   ul  li:nth-child(2)").css({


        "background-image":"url('../../../images/grab.png')" ,
        "background-size":"108%" ,
        "background-repeat": "no-repeat",
        "background-position": "center",
        "width":"200px",
        "height":"84px"

    });
    $(".main_grab .u1  ul  li:nth-child(2)").css({


        "font-size": "60px",
        "padding": "8px 0 0 20px",
        "font-family":"'微软雅黑'"
    });
    $(".main_grab .u1  ul  li:nth-child(1)").css({


        "margin-top": "-26px"
    });
    $(".main_prompt .u2 ul li:nth-child(1)").css({
        "font-size": "30px"
    });
    $(".main_prompt .u2 ul li:nth-child(2)").css({
        "font-size": "20px"
    });
    $(".main_prompt .u2 ul li:nth-child(3)").css({
        "font-size": "30px",
        "padding-right": "40px",
        "text-align": "right"
    });
    $(".main_prompt .u2 ul li:nth-child(3) a").css({
        "color":"#000"
    });
    $(".main3 .u1 ul li:nth-child(1),.main3 .u1 ul li:nth-child(3),.main3 .u1 ul li:nth-child(5)").css({
        "width":"100px",
        "text-align": "left"
    });
    $(".main3 .u1 ul li:nth-child(4),.main3 .u1 ul li:nth-child(6)").css({
        "width":"200px",
        "text-align": "left"
    });
    $(".main3 .u1 ul li:nth-child(2)").css({
        "width":"600px",
        "text-align": "left"
    });
    $(".main3 img:nth-child(1)").css({
        "position":"absolute",
        "margin":"80px 0 0 90px"
    });
    $(".main3 img:nth-child(3)").css({
        "position":"absolute",
        "margin":"220px 0 0 90px"
    });
    $(".main4 .u2 ul.u3 li ul li:nth-child(6)").css({
        "width":"130px"

    });
    $(".main4 .u2 ul.u3 li").css({
        "margin-bottom":"2px"
    });
    $(".main4 .u2 ul.u3 li:nth-child(7) ul li:nth-child(1)").css({
        "width":"162px"
    });
    $(".main4 .u2 ul.u3 li:nth-child(7) ul a").css({
        "color":"#000000"
    });
    $(".main4 .u2 ul.u3 li:nth-child(7) ul input").css({
        "width":"50px",
        "height":"19px",
        "background": "none",
        "background-image": "url('../../../images/ppp.gif')",
        "border": "0",
        "line-height":"12px",
        "font-size": "12px"

    });
    $(".main4 .u2 ul li ul li").css({
        "width":"110px"
    });
    $(".main4 .u1 ul li.p:nth-child(1),.main4 .u1 ul li.p:nth-child(2),.main4 .u1 ul li.p:nth-child(3)").css({
        "width":"242px",
        "height":"39px",
        "text-align": "left",
        "background-image":"url('../../../images/p_p.png')",
        "line-height": "39px",
        "font-size": "18px",
        "color":"#fff",
        "padding-left":"30px",
        "margin":"0 0 0 20px",
        "background-repeat":"no-repeat"
    });
    $(".main4 .u1 ul li.p:nth-child(2)").css({
        "width":"200px",
        "background-image":"url('../../images/p_p.png')",
        "margin-left":"40px",
        "text-align":"left"
    });
    $(".main4 .u1 ul li.p:nth-child(3)").css({
        "width":"260px",
        "background-image":"url('../../images/p_p.png')",
        "padding-right":"26px",
        "background-position": "right",
        "text-align":"right"
    });
    $(".main4 .u1 ul li.p:nth-child(4)").css({
        "width":"750px",
        "height":"36px",
        "background-image": "url('../../../images/p_o.png')"
    });
    $(".main4 .u1 ul li ul li:nth-child(1),.main4 .u1 ul li ul li:nth-child(3)").css({
        "width":"124px",
        "height":"36px",
        "line-height":"36px",
        "color":"#fff",
        "border":"0"
    });
    $(".main5 .u2 ul.u3 li ul li input:nth-child(1)").css({
        "width":"100px",
        "background-image": "url('../../images/p_2.png')"


    });
    $(".main5 .u2 ul.u3 li ul input:nth-child(2)").css({
        "width":"60px",
        "background-image": "url('../../images/ppp.png')"


    });
    $(".main5 .u2 ul.u3 li ul input.activation").css({
        "width":"60px",
        "background-image": "url('../../images/p_k.png')"


    });
    $(".main5 .u2 ul.u3 li ul li:nth-child(6)").css({
        "width":"180px"

    });
    $(".main5 .u1 ul li.p:nth-child(1) img:nth-child(1)").css({
        "border":"0px solid #000",
        "position": "absolute",
        "margin":"100px 0 0 -40px"
    });
    $(".main5 .u1 ul li.p:nth-child(1) a:nth-child(3) img").css({
        "border":"0px solid #000",
        "position": "absolute",
        "margin":"-20px 0 0 24px"
    });
    $(".main5 .u1 ul li.p:nth-child(1) h1").css({
        "font-family":"'叶根友毛笔行书2.0版'",
        "font-size": "26px",
        "width":"1.5em",
        "color":"#eac401",
        "text-shadow":"#000 1px 0 0,#000 0 1px 0,#000 -1px 0 0,#000 0 -1px 0"
    });
    $(".main5 .u1 li.p:nth-child(2)").css({
        "width":"600px",
        "margin-top":"40px"
    });
    $(".main5 .u1 li.p:nth-child(2) img").css({
        "position": "absolute",
        "margin":"-2px 0"
    });
    $(".main5 .u1 li.p:nth-child(2) ul li").css({
        "width":"300px",
        "margin-bottom":"20px"
    });
    $(".main5 .u1 li.p:nth-child(3) ul li input").css({
        "width":"100px",
        "height":"36px",
        "color":"#fff",
        "font-size": "20px",
        "line-height": "20px",
        "margin-bottom":"20px",
        "border": "0",
        "background": "none",
        "background-image": "url('../../images/an.png')"
    });
    $(".main5 .u1 li.p:nth-child(3) ul li").css({
        "margin-right":"20px"
    });
    $(".mainp .u2 ul.u3 li ul li input:nth-child(1)").css({
        "width":"100px",
        "background-image": "url('../../images/p_2.png')"


    });
    $(".mainp .u2 ul.u3 li ul input:nth-child(2)").css({
        "width":"60px",
        "background-image": "url('../../images/ppp.png')"


    });
    $(".mainp .u2 ul.u3 li ul li:nth-child(6)").css({
        "width":"180px"

    });
    $(".mainp .u2 ul.u3 li ul li").css({
        "margin-bottom":"20px"
    });
    $(".mainp .u2 ul.u3 li:nth-child(7) ul li:nth-child(1)").css({
        "width":"100px"
    });
    $(".mainp .u2 ul.u3 li:nth-child(7) ul li:nth-child(2)").css({
        "width":"300px"
    });
    $(".mainp .u2 ul.u3 li:nth-child(7) ul a").css({
        "color":"#000000"
    });
    $(".mainp .u2 ul.u3 li:nth-child(7) ul li input").css({
        "width":"50px",
        "height":"19px",
        "background": "none",
        "background-image": "url('../../images/ppp.gif')",
        "border": "0",
        "line-height":"12px",
        "font-size": "12px",
        "color":"#000"

    });
    $(".mainp .u2 ul li.o_op ul li:nth-child(1)").css({
        "background-image":"url('../../images/o_pp.png')"
    });
    $(".mainp .u2 ul li.o_op ul li:nth-child(2)").css({
        "background-image":"url('../../images/o_pp1.png')"
    });
    $(".mainp .u2 ul li.o_op ul li:nth-child(3)").css({
        "background-image":"url('../../images/o_pp2.png')"
    });
    $(".maino .u2 ul.u3 li:nth-child(1)").css({
        "color":"#ffd200"
    });
    $(".maino .u1 ul li.bj_pp1:nth-child(2)").css({
        "width":"470px",
        "height":"190px",
        "background-image":"url('../../images/bj_pp1.png')",
        "background-repeat":"no-repeat"
    });
    $(".maino .u1 ul li.bj_pp1:nth-child(1) img").css({
        "margin":"-30px 0 0 0"
    });

    $(".maino .u1").css({
        "position":"absolute",
        "margin":"80px 0 0 80px",
        "width":"100%"
    });
    $(".maino .u1 ul li.bj_pp1:nth-child(3) ul").css({
        "width":"190px",
        "position":"absolute",
        "margin":-"30px 0 0 0"
    });
    $(".maino .u1 ul li.bj_pp1:nth-child(3)").css({
        "float":"left"
    });
    $(".maino .u1 ul li.bj_pp1:nth-child(3) ul li").css({
        "width":"190px",
        "height":"52px",
        "background-image":"url('../../images/bj_pp2.png')",
        "background-repeat":"no-repeat",
        "margin-bottom":"8px",
        "font-size":"30px",
        "color":"#000",
        "line-height":"52px"
    });
    $(".pop ul.popp li.bj_pop:nth-child(1)").css({
        "margin":"0 20px 0 0"
    });
    $(".pop .popp li.bj_pop:nth-child(1) ul li").css({
        "margin-bottom": "0px"
    });
    $(".pop ul.popp li.bj_pop:nth-child(1) ul li b").css({
        "color":"#ff0404"
    });
    $(".pop ul.popp li.bj_pop:nth-child(1) ul li:nth-child(12)").css({
        "font-size": "14px",
        "padding":"0 50px 0 0"
    });
    $(".pop ul.popp li.bj_pop:nth-child(1) ul li:nth-child(8)").css({
        "padding":"0 50px 0 0"
    });
    $("#bj_pop").css({
        "margin":"40px 100px"

    });
    $(".pop ul.popp li.bj_pop:nth-child(1) ul li:nth-child(1) img").css({
        "vertical-align": "middle"
    });
    $(".pop").css({
        "background-repeat": "no-repeat"
    });
    $(".pop .colose").css({
        "top": "-80px",
        "right":"-20px"
    });
    $("#colose").css({
        "top": "-30px",
        "right":"0px"
    });
    $(".bj_p a .colose").css({
        "margin": "0px 0 0 350px",
        "right":"10px",
        "position":"absolute"
    });
    $(".bj_p ul").css({
        "margin": "100px 0 0 -140px",
    });
    $(".pop ul.popp li.bj_pop:nth-child(1) ul").css({
        "width":"300px"
    });
    $(".pop ul.popp li.bj_pop:nth-child(1) ul li").css({
        "width":"100%"
    });
    $(".pop ul.popp li.bj_pop:nth-child(2) ul").css({
        "width":"300px"
    });
    $(".pop ul.popp li.bj_pop:nth-child(2) ul li:nth-child(2) input").css({
        "width":"140px",
        "height":"35px",
        "background":"none",
        "border":"0",
        "background-image":"url('../../images/bj_pop.png')"
    });
    $(".pop ul.popp li.bj_pop:nth-child(2) ul li:nth-child(2) h1").css({
        "font-size": "14px",
        "margin-bottom":"10px",
        "float":"left",
        "width":"300px"
    });
    $(".pop ul.popp li.bj_pop:nth-child(2) ul li:nth-child(2) .button").css({
        "width":"140px",
        "color":"#555",
        "text-shadow":"1px 1px 0px #fff",
        "background":"-webkit-gradient(linear, left top, left bottom, color-stop(0%,#eeeeee), color-stop(100%,#dddddd))",
        "border-color":"#ccc",
        "float":"left",
        "height":"32px",
        "display":"inline-block",
        "outline":"0 none",
        "padding":"8px 12px",
        "margin":"0",
        "cursor":"pointer",
        "font":"bold 9pt/100% Arial, Helvetica, sans-serif",

        "-moz-border-radius":"5px",
        "-webkit-border-radius":"5px",
        "border-radius":"5px",

        "-moz-box-shadow":"0px 0px 1px #fff inset",
        "-webkit-box-shadow":"0px 0px 1px #fff inset",
        "box-shadow":"0px 0px 1px #fff inset"
    });
    $(".pop .popp li.bj_pop:nth-child(2) ul li:nth-child(2) input[type=file]").css({
        "position":"absolute",
        "top":"190px", "right":"145px", "bottom":"0",
        "border":"0",
        "padding":"0", "margin":"0",
        "height":"30px",
        "cursor":"pointer",
        "filter":"alpha(opacity=0)",
        "-moz-opacity":"0",
        "-khtml-opacity": "0",
        "opacity":"0"
    });
    $(".pop ul.popp li.bj_pop:nth-child(2) ul li:nth-child(2) input[type=file]").css({
        "position":"absolute",
        "width":"200px",
        "height":"180px",
        "top":"30px", "right":"68px",
        "filter":"alpha(opacity=0)",
        "-moz-opacity":"0",
        "-khtml-opacity": "0",
        "opacity":"0"
    });
    $(".pop ul.popp li.bj_pop:nth-child(2) ul li:last-child input").css({
        "width":"100px",
        "height":"36px",
        "background":"none",
        "border":"0",
        "background-image":"url('../../../images/an.png')",
        "font-size":"20px",
        "color":"#fff",
        "margin-right":"10px",
        "line-height": "30px"
    });
    $(".pop ul.popp li.bj_pop:nth-child(1) ul li textarea").css({
        "width":"300px",
        "height":"200px"

    });
    $(".pop ul.popp li.bj_pop:nth-child(2) ul li:nth-child(1)").css({
        "width":"200px",
        "height":"140px",
        "border":"1px solid #000",
        "margin-bottom":"10px",
        "overflow":"hidden"
    });
    $(".pop ul.popp li.bj_pop:nth-child(2) ul li.no").css({
        "width":"200px",
        "height":"140px",
        "border":"0px solid #000",
        "margin-bottom":"10px"
    });
    $(".blo li.blo_2:nth-child(1)").css({
        "width":"160px",
        "height":"30px",
        "line-height": "30px",
        "background-image":"url('../../images/blo.png')"
    });
    $(".blo li.blo_2p ul li:nth-child(4)").css({
        "width":"160px"
    });
    $(".blo li.blo_2p ul li:nth-child(4) input").css({
        "width":"76px",
        "height":"24px",
        "background":"none",
        "border":"0",
        "background-image":"url('../../images/blo_2.png')",
        "color":"#ffd200"
    });
    $(".blo li.blo_2p ul li:nth-child(4) input:nth-child(1)").css({
        "float":"left"
    });
    $(".blo li.blo_2p ul li:nth-child(4) input:nth-child(2)").css({
        "float":"right"
    });
    $(".main_hall ul.u3 > li:nth-child(1)").css({
        "width":"180px",
        "border":"0px solid #000",
        "position":"relative",
        "margin":"40px 0 0 50px"
    });
    $(".main_hall ul.u3 > li:nth-child(1) ul li").css({
        "width":"180px",
        "border":"0px solid #000"
    });
    $(".main_hall ul.u3 > li:nth-child(1) ul li:nth-child(2)").css({
        "font-size":"50px",
        "color":"#ffd200",
        "font-family": "'微软雅黑'",
        "text-shadow":"0 2px 0 #000,0 -1px 0 #fff",
        "-webkit-text-shadow":"0 2px 0 #000,0 -1px 0 #fff",
        "-moz-text-shadow":"0 2px 0 #000,0 -1px 0 #fff"
    });
    $(".main_hall ul.u3 > li:nth-child(1) ul li:nth-child(2) b").css({
        "color":"#000",
        "text-shadow":"0 2px 2px #000,0 0px 0 #000",
        "-webkit-text-shadow":"0 2px 2px #000,0 0px 0 #000",
        "-moz-text-shadow":"0 2px 2px #000,0 0px 0 #000"
    });
    $(".main_hall ul.u3 > li:nth-child(1) ul li:nth-child(3)").css({
        "color":"#000",
        "font-size": "24px",
        "font-weight": "bold",
        "text-align": "center"
    });
    $(".main_hall ul.u3 > li:nth-child(1) ul li:nth-child(1) img").css({
        "position":"relative",
        "left":"50%",
        "margin-left":"-68px"
    });
    $(".main_hall ul.u3 > li:nth-child(2)").css({
        "width":"300px",
        "border":"0px solid #000",
        "position":"relative",
        "margin":"80px 0 0 100px"
    });
    $(".main_hall ul.u3 > li:nth-child(2) > ul > li:nth-child(1)").css({
        "width":"300px",
        "height":"162px",
        "border":"1px solid #000",
        "position":"relative",
        "border-radius":"4px",
        "padding":"10px 0 0 20px",
        "box-shadow":"0 1px 5px #000"
    });
    $(".main_hall ul.u3 > li:nth-child(2) > ul > li:nth-child(1) ul li").css({
        "width":"300px",
        "margin-bottom":"10px",
        "text-align": "left",
        "font-size": "24px",
        "font-weight": "bold"
    });
    $(".main_hall ul.u3 > li:nth-child(2) > ul > li:nth-child(1) ul li:nth-child(2)").css({
        "font-size": "14px",
        "color":"#999"
    });
    $(".main_hall ul.u3 > li:nth-child(2) > ul > li:nth-child(1) ul li input[type=text]").css({
        "font-size": "14px",
        "width":"100px",
        "height":"30px",
        "color":"#999"
    });
    $(".main_hall ul.u3 > li:nth-child(2) > ul > li:nth-child(2) input[type=button]").css({
        "font-size": "20px",
        "line-height": "20px",
        "width":"120px",
        "height":"36px",
        "color":"#ffd200",
        "background":"none",
        "border":"0",
        "margin":"30px 0 0 20px",
        "background-image":"url('../../../images/ap.png')" ,
        "font-weight": "bold"
    });
    $(".main_hall ul.u3 > li:nth-child(2) > ul > li:nth-child(1) ul li img").css({
        "vertical-align": "middle"
    });
    $(".main_take ul li.yp ul li:nth-child(3)").css({"margin-right":"140px"});
    $(".ll ul li:nth-child(1)").css({"font-size": "14px"});
    }
});/**
 * Created by Administrator on 2016/9/11.
 */
