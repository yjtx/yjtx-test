var examples = {
    "list": ["input", "textarea", "trans", "userAgent", "client", "save"],
    "": []
};

var item2 = createRoot("DOM", "htmls");

function returnHref(thirdName, forthName) {
    return "HtmlTest/" + forthName + ".html";
}

createRoot("DOM", "htmls", examples, returnHref);
