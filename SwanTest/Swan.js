var examples = {
    "Button": ["OK", "Cancel"],
    "Image": ["Normal"],
    "List": ["Normal"],
    "EditableText": ["Normal", "SkinNormal"],
    "All": ["Examples"],
    "": []
};


function returnHref(thirdName, forthName) {
    return "SwanTest/index.html?mainClass=" + (thirdName + forthName) + "&factor=" + input_size.value;
}

createRoot("Egret", "Swan", examples, returnHref);
