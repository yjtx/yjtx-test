/**
 * Created by yjtx on 15-6-23.
 */
var TextFieldFlowEndWithEmpty = (function (_super) {
    __extends(TextFieldFlowEndWithEmpty, _super);
    function TextFieldFlowEndWithEmpty() {
        _super.call(this);
    }
    var d = __define,c=TextFieldFlowEndWithEmpty,p=c.prototype;
    p.initRoot = function () {
        var arr = new egret.HtmlTextParser().parser("是否花费  <font color=\"#FFCC00\">40</font>\n购买10000经验吗？\nsdfasdf");
        var t = new egret.TextField();
        t.textFlow = arr;
        console.log(t.height);
        arr[arr.length - 2].text = "";
        t.textFlow = arr;
        console.log(t.height);
        this.addChild(t);
        var arr2 = new egret.HtmlTextParser().parser("是否花费  <font color=\"#FFCC00\">40</font>\n购买10000经验吗？");
        //打开下面的注释,文本2不能显示.     更改最后一个对象的文本内容为空,文本宽高就一直为0了. 
        arr2[arr2.length - 1].text = "";
        var t2 = new egret.TextField();
        t2.textFlow = arr2;
        t2.y = 150;
        console.log(t2.height);
        this.addChild(t2);
    };
    return TextFieldFlowEndWithEmpty;
}(EntryDisplayObjectContainer));
egret.registerClass(TextFieldFlowEndWithEmpty,'TextFieldFlowEndWithEmpty');
