class ProgressBarExample extends egret.DisplayObjectContainer {

    public constructor() {
        super();

        var exml =
            `<s:ProgressBar xmlns:s="http://ns.egret.com/swan">
                <s:Skin>
                    <s:Image id="thumb" width="100%" height="100%" source="resource/thumb.png" scale9Grid="1,1,4,4"/>
                    <s:Label id="labelDisplay" textColor="0xffffff" horizontalCenter="0" verticalCenter="0"/>
                </s:Skin>
            </s:ProgressBar>`;

        var clazz = EXML.parse(exml);
        var progressBar = new clazz();
        progressBar.width = 500;
        progressBar.height = 40;
        progressBar.minimum = 0;
        progressBar.maximum = 100;
        this.addChild(progressBar);
        var add = 1;
        this.addEventListener(egret.Event.ENTER_FRAME,function(e:egret.Event):void {
            progressBar.value += add;
            if(progressBar.value >= progressBar.maximum || progressBar.value <= progressBar.minimum) {
                add = -add;
            }
        },null);
    }
}