// $('.navbar').css('visibility', 'hidden');
// $(function() {
//     $(window).scroll(function() {
//         var scrollVal = $(this).scrollTop();
//         //console.log(scrollVal);
//         if (scrollVal > 0) {
//             $('.navbar').css('visibility', 'visible');
//         } else {
//             $('.navbar').css('visibility', 'hidden');
//         }
//     });
// });
$(".mainCover").css("margin-top", "-50px");
$(".mainCover").width(window.screen.availWidth);
$(".mainCover").height(window.innerHeight);
//$(".middleText").css("margin-top", "-20px");
$(".middleText").height("100px");
$(".news").height("450px");
// console.log(window.screen.availWidth);
// console.log(window.innerHeight);

// $(function() {
//     var $item = $('.carousel .item');
//     var $wHeight = window.innerHeight;
//     $item.height($wHeight);
//     $item.addClass('full-screen');

//     $('.carousel img').each(function() {
//         var $src = $(this).attr('src');
//         var $color = $(this).attr('data-color');
//         $(this).parent().css({
//             'background-image': 'url(' + $src + ')',
//             'background-color': $color
//         });
//         $(this).remove();
//     });

//     //下方自動加入控制圓鈕
//     var total = $('.carousel .carousel-inner div.item').size();
//     append_li();

//     function append_li() {
//         var li = "";
//         var get_ac = $(".carousel .active");
//         var ac = $(".carousel .carousel-inner div").index(get_ac);

//         for (var i = 0; i <= total - 1; i++) {
//             if (i == (ac) / 2) {
//                 li += "<li data-target='#myCarousel' data-slide-to='" + i + "' class='active'></li>";
//             } else {
//                 li += "<li data-target='#myCarousel' data-slide-to='" + i + "' class=''></li>";
//             }
//         }
//         $(".carousel-indicators").append(li);
//     }

//     //單則隱藏控制鈕
//     if ($('.carousel .carousel-inner div.item').length < 2) {
//         $('.carousel-indicators, .carousel-control').hide();
//     }

//     //縮放視窗調整視窗高度
//     $(window).on('resize', function() {
//         $wHeight = window.innerHeight;
//         $item.height($wHeight);
//     });

//     //輪播秒數與滑入停止
//     $('.carousel').carousel({
//         interval: 5000,
//         pause: "hover"
//     });
// });