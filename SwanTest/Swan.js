var examples = {
    "Button": ["OK", "Cancel"],
    "Image": ["Normal"],
    "Label": ["Normal", "NormalDelay"],
    "List": ["Normal"],
    "EditableText": ["Normal", "SkinNormal"],
    "Slider": ["Normal"],
    "All": ["Examples"],
    "examplesBinding": ["BindingExample", "WatcherExample"],
    "examplesCollections": ["ArrayCollectionExample"],
    "examplesSup": ["DefaultAssetAdapterExample", "RangeExample"],
    "examplesComponents": ["ButtonExample", "CheckboxExample", "ComponentExample", "DataGroupExample", "EditablTextExample", "GroupExample",
        "HScrollBarExample", "HSliderExample", "ImageExample", "ItemRendererExample", "LabelExample", "ListExample", "PanelExample",
        "ProgressBarExample", "RadioButtonExample", "RadioButtonGroupExample", "ScrollerExample", "SkinExample", "TabBarExample",
        "ToggleButtonExample", "ToggleSwitchExample", "ViewStackExample", "VScrollBarExample", "VSliderExample"],
    "examplesCore": ["BitmapFillModeExample", "DirectionExample", "ScrollPolicyExample", "ThemeExample"],
    "examplesEvents": ["CollectionEventExample", "ItemTapEventExample", "PropertyEventExample", "UIEventExample"],
    "examplesLayout": ["BasicLayoutExample", "ColumnAlignExample", "HorizontalLayoutExample", "JustifyAlignExample", "RowAlignExample",
        "TileLayoutExample", "TileOrientationExample", "VerticalLayoutExample"]
};


function returnHref(thirdName, forthName) {
    if (thirdName.indexOf("examples") < 0) {
        return "SwanTest/index.html?mainClass=" + (thirdName + forthName) + "&factor=" + input_size.value + "&r=" + Math.random();
    }
    else {
        return "SwanTest/index.html?mainClass=" + (forthName) + "&factor=" + input_size.value + "&r=" + Math.random();
    }
}

createRoot("Egret", "Swan", examples, returnHref);
