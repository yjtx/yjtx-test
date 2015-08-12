var examples = {
    "list": ["input", "textarea", "trans", "userAgent", "client", "save", "sound", "effect"],
    "": []
};

function returnHref(thirdName, forthName) {
    return "HtmlTest/" + forthName + ".html" + "?r=" + Math.random();
}

createRoot("DOM", "htmls", examples, returnHref);
