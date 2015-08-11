var examples = {
    "Label": ["Normal", "NormalDelay"],
    "": []
};

function returnHref(thirdName, forthName) {
    return "GuiTest/index.html?mainClass=" + (thirdName + forthName) + "&factor=" + input_size.value + "&r=" + Math.random();
}

createRoot("Egret", "Gui", examples, returnHref);
