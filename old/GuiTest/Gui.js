var examples = {
    "Label": ["Normal", "NormalDelay"],
    "Main": ["Test"]
};

function returnHref(thirdName, forthName) {
    return "old/GuiTest/launcher/index.html?mainClass=" + (thirdName + forthName) + "&factor=" + input_size.value + "&r=" + Math.random();
}

createRoot("Egret", "Gui", examples, returnHref);
