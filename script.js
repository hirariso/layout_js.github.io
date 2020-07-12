$(function () {

    //↑画像の枚数をsize1で取得。6枚以上の時はsize2=6。それ以外はsize2=size1。
    var size1 = $('#js-gallery').find('li').length;

    if (size1 > 6) {
        size2 = 6;
    } else {
        size2 = size1;
    }


    //レイアウト初期番号
    var count = 1;


    //画像が２枚のとき
    if (size2 === 2) {
        for (var i = 1; i <= size2; i++) {
            var tmpImage = new Image();
            tmpImage.src = $('#js-gallery').find('img').eq(i - 1).attr('src');
            var width = tmpImage.width;
            var height = tmpImage.height;
            if (height > width) {
                count = 2;
            }
        }
    }

    //画像が３枚のとき
    if (size2 === 3) {
        var tmpImage = new Image();
        tmpImage.src = $('#js-gallery').find('img').eq(0).attr('src');
        var width = tmpImage.width;
        var height = tmpImage.height;
        if (width > height) {
            tmpImage.src = $('#js-gallery').find('img').eq(1).attr('src');
            var width = tmpImage.width;
            var height = tmpImage.height;
            if (width > height) {
                tmpImage.src = $('#js-gallery').find('img').eq(2).attr('src');
                var width = tmpImage.width;
                var height = tmpImage.height;
                if (width > height) {
                    count = 3;
                } else {
                    count = 2;
                }
            } else {
                count = 2;
            }
        }
    }

    //画像が４枚のとき
    if (size2 === 4) {
        var tmpImage = new Image();
        tmpImage.src = $('#js-gallery').find('img').eq(0).attr('src');
        var width = tmpImage.width;
        var height = tmpImage.height;

        tmpImage.src = $('#js-gallery').find('img').eq(1).attr('src');
        var width1 = tmpImage.width;
        var height1 = tmpImage.height;

        tmpImage.src = $('#js-gallery').find('img').eq(2).attr('src');
        var width2 = tmpImage.width;
        var height2 = tmpImage.height;

        tmpImage.src = $('#js-gallery').find('img').eq(3).attr('src');
        var width3 = tmpImage.width;
        var height3 = tmpImage.height;

        if (width < height) {
            if (width1 > height1 && width2 > height2 && width3 > height3) {
                count = 5;
            } else {
                count = 3;
            }
        } else if (width > height) {
            if (width1 < height1 && width2 < height2 && width3 < height3) {
                count = 4;
            } else {
                count = 2;
            }
        }
    }

    //画像が５枚のとき
    if (size2 === 5) {
        var height_count = 0;
        var width_count = 0;

        var tmpImage = new Image();
        tmpImage.src = $('#js-gallery').find('img').eq(0).attr('src');
        var width = tmpImage.width;
        var height = tmpImage.height;

        tmpImage.src = $('#js-gallery').find('img').eq(1).attr('src');
        var width1 = tmpImage.width;
        var height1 = tmpImage.height;

        tmpImage.src = $('#js-gallery').find('img').eq(2).attr('src');
        var width2 = tmpImage.width;
        var height2 = tmpImage.height;

        tmpImage.src = $('#js-gallery').find('img').eq(3).attr('src');
        var width3 = tmpImage.width;
        var height3 = tmpImage.height;

        tmpImage.src = $('#js-gallery').find('img').eq(4).attr('src');
        var width4 = tmpImage.width;
        var height4 = tmpImage.height;

        if (height2 > width2) {
            height_count++;
        } else {
            width_count++;
        }

        if (height3 > width3) {
            height_count++;
        } else {
            width_count++;
        }

        if (height4 > width4) {
            height_count++;
        } else {
            width_count++;
        }

        if (width < height) {
            if (width1 < height1) {
                count = 3;
            } else if (height_count > width_count) {
                count = 2;
            }
        } else if (width > height) {
            if (width1 > height1) {
                count = 4;
            } else if (height_count > width_count) {
                count = 2;
            }
        }
    }

    //画像の枚数分classを変える
    for (var i = 1; i <= size1; i++) {
        $('#js-gallery').find('li').eq(i - 1).addClass(`photo${size2}-${count}-${i}-li`);
    }
});