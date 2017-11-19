var time1 = [600,1600,2600,3600,4600,5600,6600];
var time2 = [1100,2100,3100,4100,5100,6100,7100];
var odd=0,even=1;
var scrollx=[0,0];
var fin;
var fout;
var fout2;

$(document).ready(function(){
    for(i=1;i<=11;i++){
        $('#img'+i).hide();
    }
   
    
    $(window).scroll(function() {
        
        
        for(i=0;i<time1.length;i++){
            if($(window).scrollTop()<300){
                odd = 0;
                $('#img1').fadeOut(200);
                
            }
            if($(window).scrollTop() >= time1[i]-220 && $(window).scrollTop() < time1[i]+220){
                change_img1(i);
           }
           if($(window).scrollTop() >= time2[i]-220 && $(window).scrollTop() < time2[i]+220){  
                change_img2(i);
           }
        }
 
    });
});

function change_img1(d){
    if(odd == 0){
        fout = 2*d;
        fin = 2*d+1;
        fout2 = 2*d+2;
        fout = '#img'+fout;
        fin = '#img'+fin;
        fout2 = '#img'+fout2;
       
        $(fout).fadeOut(200,function() {$(fout2).fadeOut(200,function() {$(fin).fadeIn(200);});});
        odd = 1;
        even = 0;
    } 
}
function change_img2(d){
    if(even == 0){
        fout = 2*d+1;
        fin = 2*d+2;
        fout2 = 2*d+3;
        fout = '#img'+fout;
        fin = '#img'+fin;
        fout2 = '#img'+fout2; 
        $(fout).fadeOut(200,function() {$(fout2).fadeOut(200,function() {$(fin).fadeIn(200);});});
       
        even =1;
        odd =0;
    }
}