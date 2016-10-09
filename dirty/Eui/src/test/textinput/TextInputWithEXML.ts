/**
 * Created by yjtx on 15-11-12.
 */
class TextInputWithEXML extends EntryEuiDocument {
    constructor() {
        super([""]);

        this.addEventListener(eui.UIEvent.COMPLETE, this.onCompleteHandler, this);
    }

    private onCompleteHandler(e:eui.UIEvent):void {
        console.log(e.type);
    }

    protected initRoot():void {
        
        this.stage.addEventListener(egret.Event.RENDER,function(){
            console.log("r");
        }, this);
        var userInput:eui.TextInput = new eui.TextInput();
        userInput.addEventListener(eui.UIEvent.COMPLETE, function () {
            console.log("userInput");
            userInput.promptDisplay.textColor = 0xff0000;
            userInput.prompt = "this.userPromptSt";
            userInput.x = 100;
            userInput.y = 100;

        }, this);
        this.addChild(userInput);
        
        var inputPwd:eui.TextInput = new eui.TextInput();
        inputPwd.addEventListener(eui.UIEvent.COMPLETE, function () {
            console.log("inputPwd");

            inputPwd.textDisplay.promptColor = 0xff0000;
            inputPwd.textDisplay.prompt = "this.inputPwd";
            inputPwd.x = 100;
            inputPwd.y = 300;
        }, this);
        this.addChild(inputPwd);
    }
}
