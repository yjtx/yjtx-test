var examples = {
    "list": ["input", "textarea", "trans", "userAgent", "client", "save"],
    "": []
};

function returnHref(thirdName, forthName) {
    return "HtmlTest/" + forthName + ".html";
}

createRoot("DOM", "htmls", examples, returnHref);
