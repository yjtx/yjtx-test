var ListTile = (function (_super) {
    __extends(ListTile, _super);
    function ListTile() {
        _super.call(this);
        var exml = "<e:Scroller xmlns:e=\"http://ns.egret.com/eui\">\n                <e:List id=\"list\" width=\"200\" height=\"400\">\n                    <e:itemRendererSkinName>\n                        <e:Skin states=\"up,down,disabled\" height=\"50\">\n                            <e:Label text=\"{data.label}\" textColor=\"0xFFFFFF\" horizontalCenter=\"0\" verticalCenter=\"0\"/>\n                        </e:Skin>\n                    </e:itemRendererSkinName>\n                </e:List>\n            </e:Scroller>";
        var clazz = EXML.parse(exml);
        var scroller = new clazz();
        this.addChild(scroller);
        var list = scroller.list;
        list.useVirtualLayout = false;
        list.layout = new eui.BasicLayout();
        var collection = new eui.ArrayCollection();
        for (var i = 0; i < 20; i++) {
            collection.addItem({ "label": "Text" + i });
        }
        list.dataProvider = collection;
    }
    var d = __define,c=ListTile,p=c.prototype;
    return ListTile;
}(egret.Sprite));
egret.registerClass(ListTile,'ListTile');
