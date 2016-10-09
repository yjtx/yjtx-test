/**
 * Created by yjtx on 15-11-12.
 */
var TextInputWithEXML = (function (_super) {
    __extends(TextInputWithEXML, _super);
    function TextInputWithEXML() {
        _super.call(this, [""]);
        this.addEventListener(eui.UIEvent.COMPLETE, this.onCompleteHandler, this);
    }
    var d = __define,c=TextInputWithEXML,p=c.prototype;
    p.onCompleteHandler = function (e) {
        console.log(e.type);
    };
    p.initRoot = function () {
        this.stage.addEventListener(egret.Event.RENDER, function () {
            console.log("r");
        }, this);
        var userInput = new eui.TextInput();
        userInput.addEventListener(eui.UIEvent.COMPLETE, function () {
            console.log("userInput");
            userInput.promptDisplay.textColor = 0xff0000;
            userInput.prompt = "this.userPromptSt";
            userInput.x = 100;
            userInput.y = 100;
        }, this);
        this.addChild(userInput);
        var inputPwd = new eui.TextInput();
        inputPwd.addEventListener(eui.UIEvent.COMPLETE, function () {
            console.log("inputPwd");
            inputPwd.textDisplay.promptColor = 0xff0000;
            inputPwd.textDisplay.prompt = "this.inputPwd";
            inputPwd.x = 100;
            inputPwd.y = 300;
        }, this);
        this.addChild(inputPwd);
    };
    return TextInputWithEXML;
}(EntryEuiDocument));
egret.registerClass(TextInputWithEXML,'TextInputWithEXML');
