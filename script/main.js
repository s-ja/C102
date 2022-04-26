$(function(){
    $("#site").change(function(){
        // location.href = ($(this).val());
        
        let url = $(this).val()
        // let index = url.index()
        // let option = $("#site option")
        // let text = $(this).index().text()

        // console.log(url);
        // console.log(text);
        // window.open($(this).val.text),
        
        window.open(url,"new window")
    })
    // 1.팝업
    // $(".news ul li:eq(0)").click(function(){
    popup()
    // 2.메뉴
    menu()
    // .slideDown()
    // .slideUp()
    // .slideToggle()
    // 3.슬라이드
    // slide()
    let interval_id = setInterval(slide,3000);
});
function popup(){
    $(".news ul li").first().click(function(){
        $("#popup").fadeIn();
    });
    $("#popup button").click(function(){
        $("#popup").fadeOut();
    });
}

function menu(){
    $("#gnb > li").mouseenter(function(){
        $(this).children("a").addClass("highlight")
        $(this).children(".lnb").stop().slideDown()
    });
    $("#gnb > li").mouseleave(function(){
        $(this).children("a").removeClass("highlight")
        $(this).children(".lnb").stop().slideUp()
    })
}

function slide(){
    let current_slide = $(".slide > div.top");
    let next_slide = current_slide.next();
    if(!next_slide.length){
        next_slide = $(".slide > div:first");
    }
    current_slide.removeClass("top");
    next_slide.addClass("top");

//     // current_slide.fadeOut().removeClass("top");
//     // next_slide.addClass("top").fadeIn();
}