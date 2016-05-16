/**
 * Created by yjtx on 15-11-12.
 */
var EditTextLineSpacing = (function (_super) {
    __extends(EditTextLineSpacing, _super);
    function EditTextLineSpacing() {
        _super.call(this, ["preload"]);
    }
    var d = __define,c=EditTextLineSpacing,p=c.prototype;
    p.initRoot = function () {
        var edit = new eui.EditableText();
        edit.multiline = true;
        edit.text = "23\n23";
        edit.x = 100;
        edit.width = 200;
        edit.y = 100;
        edit.lineSpacing = 50;
        edit.height = 100;
        this.addChild(edit);
        var textField = new egret.TextField();
        textField.type = egret.TextFieldType.INPUT;
        textField.multiline = true;
        textField.text = "23\n23";
        textField.x = 100;
        textField.width = 200;
        textField.y = 300;
        textField.lineSpacing = 50;
        textField.height = 100;
        this.addChild(textField);
    };
    return EditTextLineSpacing;
}(EntryEuiDocument));
egret.registerClass(EditTextLineSpacing,'EditTextLineSpacing');
