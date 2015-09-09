(function($){

    $(window).load(function(){
        $(".content").mCustomScrollbar({
            scrollButtons: { enable: true },
            theme: "light-3",
        });
    });
})(jQuery);

function clickToSms() {
    var md = new MobileDetect(window.navigator.userAgent);
    var clickToText = 'sms:68666';
    var ua = navigator.userAgent;

    if(md.os() == 'AndroidOS') {
        clickToText = 'sms:68666?body=ASKBUDDY'
    } else if(md.os() == 'iOS') {
        if(md.version('Version') == '8')
            clickToText = 'sms:68666&body=ASKBUDDY';
        else
            clickToText = 'sms:68666;body=ASKBUDDY';
    } else {
        clickToText = 'sms:68666?body=ASKBUDDY';
    }
    $('#mobile-send').attr('href', clickToText);
}
