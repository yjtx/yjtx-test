﻿
/**
 * @language en_US
 * The following example shows how to use the swan.Button class
 */
/**
 * @language zh_CN
 * 下面的例子显示了如何使用 swan.Button 类
 */
class ButtonExample extends swan.Group {
    constructor() {
        super();

        var buttonSkin = 
            `<s:Skin class="skins.ButtonSkin" states="up,down,disabled" minHeight="50" minWidth="100" xmlns:s="http://ns.egret.com/swan">
                <s:Image width="100%" height="100%" scale9Grid="1,3,8,8" alpha.disabled="0.5"
                         source="resource/examples/button_up.png"
                         source.down="resource/examples/button_down.png"/>
                <s:Label id="labelDisplay" top="8" bottom="8" left="8" right="8"
                         textColor="0xFFFFFF" verticalAlign="middle" textAlign="center"/>
                <s:Image id="iconDisplay" horizontalCenter="0" verticalCenter="0"/>
            </s:Skin>`;

        var button = new swan.Button();

        //组件可以接受：皮肤类定义,皮肤类名,皮肤实例,EXML文件内容,或外部EXML文件路径作为 skinName 的值
        //这里我们直接用 EXML 内容作为 skinName
        button.skinName = buttonSkin;
        button.label = "Button";
        button.addEventListener(egret.TouchEvent.TOUCH_TAP, e=> button.label = " Tap! ", this);
        button.x = 50;
        button.y = 50;

        this.addChild(button);
    }
}