$(document).ready(function(){
    initIntro();
});

function initIntro()
{
    $(".intro-text").letterfx({"fx":"fly-right fly-bottom spin"});
    $(".brand-heading").letterfx({"fx":"spin fly-top", "timing": 200, "fx_duration": "300ms"});
}