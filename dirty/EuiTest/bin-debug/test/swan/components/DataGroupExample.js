/**
 * @language en_US
 * The following example demonstrates two methods to create DataGroup.
 */
/**
 * @language zh_CN
 * 下面的例子演示了两种方法来创建 DataGroup。
 */
var DataGroupExample = (function (_super) {
    __extends(DataGroupExample, _super);
    function DataGroupExample() {
        _super.call(this);
        this.createDataGroupByTypeScript();
        this.createDataGroupByEXML();
    }
    var d = __define,c=DataGroupExample;p=c.prototype;
    p.createDataGroupByTypeScript = function () {
        var dataGroup = new eui.DataGroup();
        dataGroup.layout = new eui.VerticalLayout();
        dataGroup.itemRenderer = LabelRender;
        var collection = new eui.ArrayCollection();
        collection.addItem({ "label": "1", "color": 0xcc9999 });
        collection.addItem({ "label": "2", "color": 0xff9966 });
        collection.addItem({ "label": "3", "color": 0xcc3333 });
        collection.addItem({ "label": "4", "color": 0xff6666 });
        dataGroup.dataProvider = collection;
        this.addChild(dataGroup);
        dataGroup.x = 50;
        dataGroup.y = 50;
    };
    p.createDataGroupByEXML = function () {
        var exml = "<s:DataGroup class=\"Example.DataGroup\" xmlns:s=\"http://ns.egret.com/eui\" x=\"300\" y=\"50\">\n                <s:layout>\n                    <s:VerticalLayout gap=\"20\"/>\n                </s:layout>\n                <s:itemRenderer>\n                    <s:ItemRenderer>\n                     <s:Label text=\"{data.label}\" textColor=\"{data.color}\"/>\n                    </s:ItemRenderer>\n                </s:itemRenderer>\n                <s:ArrayCollection>\n                    <s:Array>\n                        <s:Object label=\"a\" color=\"0xcc9999\"/>\n                        <s:Object label=\"b\" color=\"0xff9966\"/>\n                        <s:Object label=\"c\" color=\"0xcc3333\"/>\n                        <s:Object label=\"d\" color=\"0xff6666\"/>\n                    </s:Array>\n                </s:ArrayCollection>\n            </s:DataGroup>";
        var clazz = EXML.parse(exml);
        var dataGroup2 = new clazz();
        this.addChild(dataGroup2);
    };
    return DataGroupExample;
})(egret.DisplayObjectContainer);
egret.registerClass(DataGroupExample,"DataGroupExample");
var LabelRender = (function (_super) {
    __extends(LabelRender, _super);
    function LabelRender() {
        _super.call(this);
        this.label = new eui.Label();
        this.addChild(this.label);
    }
    var d = __define,c=LabelRender;p=c.prototype;
    p.dataChanged = function () {
        if (this.data) {
            this.label.text = this.data.label;
            this.label.textColor = this.data.color;
        }
    };
    return LabelRender;
})(eui.ItemRenderer);
egret.registerClass(LabelRender,"LabelRender");
