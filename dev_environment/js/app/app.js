(function($){

    $(window).load(function(){
        $(".content").mCustomScrollbar({
            scrollButtons: { enable: true },
            theme: "light-3",
        });
        
        setUpClickToSms();
    });
})(jQuery);

function setUpClickToSms() {
    var md = new MobileDetect(window.navigator.userAgent);
    var clickToText = 'sms:82888';
    var ua = navigator.userAgent;
    var body = "NAME VS FRTIZ";
    
    if(md.os() == 'AndroidOS') {
        clickToText = 'sms:82888?body=' + body;
    } else if(md.os() == 'iOS') {
        if(md.version('Version') == '8')
            clickToText = 'sms:82888&body=' + body;
        else
            //clickToText = 'sms:82888;body=' + body;
            clickToText = 'sms:82888&body=' + body;
    } else {
        clickToText = 'sms:82888?body=' + body;
    }
    
    $('#mobile-send').attr('href', clickToText);
}
