/**
 * @language en_US
 * The following example uses the class ItemTapEventExample to show the represents events that are emitted when a item has been touched
 */
/**
 * @language zh_CN
 * 以下示例使用 ItemTapEventExample 类来演示列表项触碰事件
 */
var ItemTapEventExample = (function (_super) {
    __extends(ItemTapEventExample, _super);
    function ItemTapEventExample() {
        _super.call(this);
        var list = new eui.List();
        var arr = new eui.ArrayCollection(["a1", "a2", "a3", "a4", "a5", "a6"]);
        list.dataProvider = arr;
        list.itemRenderer = IR_ItemTapEvent;
        this.addChild(list);
        list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onItemTapHandler, this);
    }
    var d = __define,c=ItemTapEventExample;p=c.prototype;
    p.onItemTapHandler = function (e) {
        console.log(e.item, e.itemRenderer, e.itemIndex);
    };
    return ItemTapEventExample;
})(egret.DisplayObjectContainer);
egret.registerClass(ItemTapEventExample,"ItemTapEventExample");
var IR_ItemTapEvent = (function (_super) {
    __extends(IR_ItemTapEvent, _super);
    function IR_ItemTapEvent() {
        _super.call(this);
        this.label = new eui.Label();
        this.addChild(this.label);
    }
    var d = __define,c=IR_ItemTapEvent;p=c.prototype;
    p.dataChanged = function () {
        this.label.text = "label:" + this.data.toString();
    };
    return IR_ItemTapEvent;
})(eui.ItemRenderer);
egret.registerClass(IR_ItemTapEvent,"IR_ItemTapEvent");
