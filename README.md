 // 所有功能必须包含在 WeixinApi.ready 中进行
    WeixinApi.ready(function(Api){

        // 微信分享的数据
        var wxData = {
            "imgUrl":ershoucheDetailPic,
            "link":location.href,
            "desc":ershoucheDetailMiaoshu,
            "title":ershoucheDetailTitle
        };

        // 用户点开右上角popup菜单后，点击分享给好友，会执行下面这个代码
        Api.shareToFriend(wxData);

        // 点击分享到朋友圈，会执行下面这个代码
        Api.shareToTimeline(wxData);

        // 点击分享到腾讯微博，会执行下面这个代码
        Api.shareToWeibo(wxData);