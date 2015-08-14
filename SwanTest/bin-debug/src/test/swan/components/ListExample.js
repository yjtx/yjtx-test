var ListExample = (function (_super) {
    __extends(ListExample, _super);
    function ListExample() {
        _super.call(this);
        var exml = "<s:Scroller xmlns:s=\"http://ns.egret.com/swan\">\n                <s:List id=\"list\" width=\"200\" height=\"400\">\n                    <s:itemRenderer>\n                        <s:ItemRenderer states=\"up,down,disabled\" height=\"50\">\n                            <s:Label text=\"{data.label}\" textColor=\"0xFFFFFF\" horizontalCenter=\"0\" verticalCenter=\"0\"/>\n                        </s:ItemRenderer>\n                    </s:itemRenderer>\n                </s:List>\n            </s:Scroller>";
        var clazz = EXML.parse(exml);
        var scroller = new clazz();
        this.addChild(scroller);
        var list = scroller.list;
        var collection = new swan.ArrayCollection();
        for (var i = 0; i < 20; i++) {
            collection.addItem({ "label": "文本" + i });
        }
        list.dataProvider = collection;
    }
    var __egretProto__ = ListExample.prototype;
    return ListExample;
})(egret.DisplayObjectContainer);
ListExample.prototype.__class__ = "ListExample";
egret.registerClass(ListExample,"ListExample");
