var examples = {
    "list": ["soundTest", "input", "textarea", "trans", "userAgent", "client", "save", "sound", "webAudio", "effect", "select", "image", "imageD", "canvasImage", "video"],
    "浏览器bug列表": ["猎豹img跨域", "IOS微信Iframe输入框", "Mx2X59宫Canvas", "IOS9Canvas绘图降帧", "IOS9Canvas文本降帧", "猎豹首次播放声音时间不对", "猎豹声音load假死"],
    "": []
};

function returnHref(thirdName, forthName) {
    if (thirdName == "list") {
        return "HtmlTest/" + forthName + ".html" + "?r=" + Math.random();
    }
    return "HtmlTest/bugs/" + forthName + ".html" + "?r=" + Math.random();
}

createRoot("DOM", "htmls", examples, returnHref);
