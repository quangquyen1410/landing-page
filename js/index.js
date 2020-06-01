var heightNavbar = parseInt($(".bg-navbar").height());
var heightfixed = parseInt($(".bg-img-head").height());
$(document).ready(function () {
    $(".js_height_overview, .support_height").matchHeight();
    // scroll click   
    $(".content_navbar a").click(function (e) {
        e.preventDefault();
        var hash = this.hash; // lấy thuộc tính href của thẻ a bắt đầu từ dấu # khi được click
        $("html,body").animate(
            {
                scrollTop: $(hash).offset().top - heightNavbar
            },
            1000
        );
    });
    // scroll fixed menu
    var heightOverview = parseInt($("#overview").height());
    var heightBestfor = parseInt($("#bestfor").height());
    var heightHightLights = parseInt($("#hightlights").height());
    var heightDemo = parseInt($("#demo").height());   
    var heightBody = parseInt($("body").height());   

    $(window).scroll(function () {
        var overviewScroll = parseInt($("#overview").offset().top - heightNavbar);
        var bestforScroll = parseInt($("#bestfor").offset().top - heightNavbar);
        var hightlightsScroll = parseInt($("#hightlights").offset().top - heightNavbar);
        var demoScroll = parseInt($("#demo").offset().top - heightNavbar);        
        var window_scroll = $(window).scrollTop();
        console.log(overviewScroll,bestforScroll,hightlightsScroll, demoScroll, window_scroll);
        



        if (window_scroll >= heightfixed) {
            $(".bg-navbar").addClass("nav_fixed");
        } else $(".bg-navbar").removeClass("nav_fixed");   
        
        
        if (window_scroll < (overviewScroll + heightOverview)&& window_scroll>= overviewScroll) {
            $(".content_navbar > li > a").removeClass("nav_active");
            $("a[href='#overview']").addClass("nav_active");
        }


        if (window_scroll <  (bestforScroll + heightBestfor) && window_scroll>=bestforScroll) {
            $(".content_navbar > li > a").removeClass("nav_active");
            $("a[href='#bestfor']").addClass("nav_active");
        }


        if (window_scroll < (hightlightsScroll + heightHightLights) && window_scroll>=hightlightsScroll) {
            $(".content_navbar > li > a").removeClass("nav_active");
            $("a[href='#hightlights']").addClass("nav_active");
        }


        if (window_scroll < (demoScroll + heightDemo) && window_scroll >=(heightBody - screen.availHeight)) {
            $(".content_navbar > li > a").removeClass("nav_active");
            $("a[href='#demo']").addClass("nav_active");
        }


        if (window_scroll < overviewScroll) {
            $(".content_navbar > li > a").removeClass("nav_active");
        }
console.log(screen.height);
    });
    $(".over_tabs").click(function () {
        $(".over_tabs").removeClass("active");
        $(this).addClass("active");
        var dataValue = $(this).data("value");
        $(".overview_content").removeClass("content_active bounceInUp animated");
        $("#overview_content_" + dataValue).addClass(
            "content_active bounceInUp animated"
        );
    });
});
new WOW().init();
