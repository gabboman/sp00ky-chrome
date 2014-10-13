//nCage 
(function ($) {

    var self = {
        nCageImgs: [
		'http://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Nicolas_Cage_2011_CC.jpg/220px-Nicolas_Cage_2011_CC.jpg',
		'http://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Nicolas_Cage_-_66%C3%A8me_Festival_de_Venise_(Mostra).jpg/220px-Nicolas_Cage_-_66%C3%A8me_Festival_de_Venise_(Mostra).jpg',
		'http://content8.flixster.com/rtactor/40/33/40334_pro.jpg',
		'http://images.fandango.com/r88.0/ImageRenderer/200/295/images/performer_no_image_large.jpg/0/images/masterrepository/performer%20images/p10155/kickass-pm-4.jpg',
		'http://topnews.in/files/Nicolas-Cage_0.jpg',
		'http://i0.kym-cdn.com/entries/icons/original/000/006/993/1817.jpg',
		'http://images.trulia.com/blogimg/9/d/7/d/1775659_1302741896636_o.jpg',
		'http://cache2.artprintimages.com/LRG/10/1062/Y4UL000Z.jpg',
		'http://www3.pictures.fp.zimbio.com/Nicholas+Cage+David+Letterman+-EtX2RCI91al.jpg',
		'http://resources2.news.com.au/images/2009/11/04/1225794/400950-nicolas-cage.jpg',
		'http://2.bp.blogspot.com/-YRqSEM3HY-I/UCnI3Q9t8EI/AAAAAAAAEW8/hKt3GlOgwbY/s1600/nicolas-cage11.jpg',
		'http://d2tq98mqfjyz2l.cloudfront.net/image_cache/1335739369248357_animate.gif',
		'http://thetrustadvisor.com/wp-content/uploads/2013/03/nicolas-cage.jpg',
		'http://starsmedia.ign.com/stars/image/article/908/908074/nicolas-cage-20080905025038648-000.jpg',
		'http://images.latinospost.com/data/images/full/10956/nicolas-cage.jpg?w=600',
		'http://wpc.556e.edgecastcdn.net/80556E/img.news/NEPYPT3WQzBeUP_1_1.jpg',
		'http://www.iwatchstuff.com/2012/11/30/nic-cage-in-things.jpg',
		'http://images.contactmusic.com/newsimages/nicolas_cage_552048.jpg',
		'http://www.apnatimepass.com/nicolas-cage-in-stolen-movie-10.jpg',
		'http://24.media.tumblr.com/e68455822f14c29d43bacbc19f15ed36/tumblr_mr1kquuOvD1rimb2bo1_400.jpg',
		'http://static2.businessinsider.com/image/4adcd99800000000009ed0dd/how-nicolas-cage-spent-his-way-to-the-poorhouse.jpg',
		'http://www1.pictures.zimbio.com/pc/Nicolas+Cage+Nicolas+Cage+Emma+Stone+Croods+AbN87pQpWsjl.jpg',
		"http://hsstorewebproject.weebly.com/uploads/2/0/2/7/20276235/3310319_orig.jpg",
		"http://www.wow247.co.uk/wp-content/uploads/2013/08/Nicolas-Cage-ghost-rider.jpg",
		"http://cinemastationblog.files.wordpress.com/2011/12/cage_vampireskiss.jpg",
		"http://www.cosmo.com.ua/i/photos_publication/1627/400_535/H88d0tP2.jpg",
		"http://www.thefancarpet.com/uploaded_assets/images/actor/318/Nicolas_Cage_16081_Medium.jpg",
        	"http://cdn-media.extratv.com/archive/images/news/0418/nic-cage.jpg",
        	"http://www.tiranganj.com/wp-content/uploads/2014/07/nicolas-cage-promo.jpg",
        	"http://31.media.tumblr.com/tumblr_ljygvqVZhC1qzl30go1_400.png",
        	"http://www.gotchamovies.com/ul/photos/movie/o/12f6f18c38dae91747f9c3c9c12bd0a4-sc.jpg",
        	"http://blu.stb.s-msn.com/i/B8/7DEBEB33E1379AB1F0B67DE637AE3.jpg",
        	"http://i1.ytimg.com/vi/ghhpe7n7Gi0/maxresdefault.jpg",
        	"http://31.media.tumblr.com/tumblr_m2wkus8ilr1r4etbjo1_r1_500.gif",
		"http://docfilms.uchicago.edu/dev/images/2014/winter/2014-01-30-02.jpg",
		"http://38.media.tumblr.com/tumblr_ls47w7ZoeN1qbgguvo1_1280.png",
		"http://ughalex.files.wordpress.com/2013/05/tumblr_lxamtuvmvq1r4etbjo1_5001.gif?w=820",
		"http://25.media.tumblr.com/tumblr_llhctdm0jU1qje621o1_500.gif",
		"http://24.media.tumblr.com/tumblr_lx8id0omG11r4etbjo1_500.gif",
		"http://ia.media-imdb.com/images/M/MV5BMTUzMDM4Nzk2MV5BMl5BanBnXkFtZTcwNTcwNjExOQ@@._V1_SY317_CR1,0,214,317_AL_.jpg",
		"http://www.picpicx.com/wp-content/uploads/2014/07/3a00c46e1f8153985d06a7a25a680cd0.jpg"
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
        self.handleImages(self.nCageImgs, 3000);
    });

    //Set global variable
    $.nCage = self;

})(jQuery);

