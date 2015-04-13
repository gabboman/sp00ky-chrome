//spookyPics
//U'LL GET 2 SP00K3D
(function ($) {

    var self = {
        spookyPics: [
		"http://i.ytimg.com/vi/tSdSemAMzdY/hqdefault.jpg",
    "http://i.imgur.com/wio50hd.gif",
    "http://i.imgur.com/yAZgHwR.gif",
    "http://www.tncgiftsncollectibles.com/1789-1028-thickbox/spooky-skeleton-toilet-paper-holder-12608.jpg",
    "http://i.ytimg.com/vi/101jYcZQ8O8/maxresdefault.jpg",
    "https://mikedoel.files.wordpress.com/2008/10/skeleton11.jpg",
    "http://static.tumblr.com/85b2e40e1c4a4df343f51a6f184e6a0e/lntarg1/35kmt3fni/tumblr_static_dancing_tophat_skeleton_t.png",
    "http://img3.wikia.nocookie.net/__cb20140924174011/trollpasta/images/7/79/HS-H-PAPERSKLTN.jpg",
    "http://media2.giphy.com/media/oLyIz3quUlD1e/200_s.gif"


        ],
        handleImages: function (lstImgs, time) {
            $.each($('img'), function (i, item) {
                //Skip if image is already replaced
                if ($.inArray($(item).attr('src'), lstImgs) == -1) {
                    var h = $(item).height();
                    var w = $(item).width();

                    //If image loaded
                    if (h > 0 && w > 0) {
                        self.handleImg(item, lstImgs);
                    }
                    else {
                        //Replace when loaded
                        $(item).load(function () {
                            //Prevent 'infinite' loop
                            if ($.inArray($(item).attr('src'), lstImgs) == -1) {
                                self.handleImg(item, lstImgs);
                            }
                        });
                    }
                }
            });

            //Keep replacing
            if (time > 0) {
                setTimeout(function () { self.handleImages(lstImgs, time); }, time);
            }
        },
        handleImg: function (item, lstImgs) {
            $(item).error(function () {
                //Handle broken imgs
                self.handleBrokenImg(item, lstImgs);
            });

            self.setRandomImg(item, lstImgs);
        },
        setRandomImg: function (item, lstImgs) {
            var h = $(item).height();
            var w = $(item).width();
            $(item).css('width', w + 'px').css('height', h + 'px');
            $(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]);
        },
        handleBrokenImg: function (item, lstImgs) {

            var brokenImg = $(item).attr('src');
            var index = lstImgs.indexOf(brokenImg);
            if (index > -1) {
                lstImgs.splice(index, 1);
            }
            self.setRandomImg(item, lstImgs);
        },
    };

    //Run on jQuery ready
    $(function () {
        self.handleImages(self.spookyPics, 3000);
    });

    //Set global variable
    $.spookyPics = self;

})(jQuery);
