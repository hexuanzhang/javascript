// 检测浏览器是否支持webp及webpanimation
(function() {
    function webpTest(src, name) {
        var img = new Image(),
            isSupport = false,
            className, cls;

        img.onload = function() {
            isSupport = !!(img.height > 0 && img.width > 0);

            cls = isSupport ? (' ' + name) : (' no-' + name);
            className = document.querySelector('html').className
            className += cls;

            document.querySelector('html').className = className.trim();
        };
        img.onerror = function() {
            cls = (' no-' + name);
            className = document.querySelector('html').className
            className += cls;

            document.querySelector('html').className = className.trim();
        };

        img.src = src;
    }

    var webpSrc = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoB\
                AAEAAwA0JaQAA3AA/vuUAAA=',
        webpanimationSrc = 'data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAA\
                            SAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAA\
                            AAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA';

    webpTest(webpSrc, 'webp');
    webpTest(webpanimationSrc, 'webpanimation');
})();