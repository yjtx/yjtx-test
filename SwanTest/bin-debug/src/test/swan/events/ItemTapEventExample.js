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
        var list = new swan.List();
        var arr = new swan.ArrayCollection(["a1", "a2", "a3", "a4", "a5", "a6"]);
        list.dataProvider = arr;
        list.itemRenderer = IR_ItemTapEvent;
        this.addChild(list);
        list.addEventListener(swan.ItemTapEvent.ITEM_TAP, this.onItemTapHandler, this);
    }
    var __egretProto__ = ItemTapEventExample.prototype;
    __egretProto__.onItemTapHandler = function (e) {
        console.log(e.item, e.itemRenderer, e.itemIndex);
    };
    return ItemTapEventExample;
})(egret.DisplayObjectContainer);
ItemTapEventExample.prototype.__class__ = "ItemTapEventExample";
egret.registerClass(ItemTapEventExample,"ItemTapEventExample");
var IR_ItemTapEvent = (function (_super) {
    __extends(IR_ItemTapEvent, _super);
    function IR_ItemTapEvent() {
        _super.call(this);
        this.label = new swan.Label();
        this.addChild(this.label);
    }
    var __egretProto__ = IR_ItemTapEvent.prototype;
    __egretProto__.dataChanged = function () {
        this.label.text = "label:" + this.data.toString();
    };
    return IR_ItemTapEvent;
})(swan.ItemRenderer);
IR_ItemTapEvent.prototype.__class__ = "IR_ItemTapEvent";
egret.registerClass(IR_ItemTapEvent,"IR_ItemTapEvent");
