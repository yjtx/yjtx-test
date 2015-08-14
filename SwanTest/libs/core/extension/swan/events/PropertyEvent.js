//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-2015, Egret Technology Inc.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var swan;
(function (swan) {
    /**
     * @language en_US
     * The PropertyChangeEvent class represents the event object
     * passed to the event listener when one of the properties of
     * an object has changed, and provides information about the change.
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/events/PropertyEventExample.ts
     */
    /**
     * @language zh_CN
     * 对象的一个属性发生更改时传递到事件侦听器的事件。
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/events/PropertyEventExample.ts
     */
    var PropertyEvent = (function (_super) {
        __extends(PropertyEvent, _super);
        /**
         * @language en_US
         * Constructor.
         *
         * @param type The event type; indicates the action that triggered the event.
         * @param bubbles Specifies whether the event can bubble
         * up the display list hierarchy.
         * @param cancelable Specifies whether the behavior
         * associated with the event can be prevented.
         * @param property Name of the property that changed.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 创建一个属性改变事件。
         *
         * @param type 事件类型；指示触发事件的动作。
         * @param bubbles 指定该事件是否可以在显示列表层次结构得到冒泡处理。
         * @param cancelable 指定是否可以防止与事件相关联的行为。
         * @param property 发生改变的属性名称。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        function PropertyEvent(type, bubbles, cancelable, property) {
            _super.call(this, type, bubbles, cancelable);
            this.property = property;
        }
        var __egretProto__ = PropertyEvent.prototype;
        /**
         * @language en_US
         * Emit an event with specified EventDispatcher. The emitted event will be cached in the object pool,
         * for the next cycle of reuse.
         *
         * @param target the target of event emitter.
         * @param eventType The event type; indicates the action that triggered the event.
         * @param property Name of the property that changed.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 使用指定的 EventDispatcher 对象来抛出事件对象。抛出的对象将会缓存在对象池上，供下次循环复用。
         *
         * @param target 事件派发目标
         * @param eventType 事件类型；指示触发事件的动作。
         * @param property 发生改变的属性名称。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        PropertyEvent.emitPropertyEvent = function (target, eventType, property) {
            if (!target.hasEventListener(eventType)) {
                return true;
            }
            var event = egret.Event.create(PropertyEvent, eventType);
            event.property = property;
            var result = target.dispatchEvent(event);
            egret.Event.release(event);
            return result;
        };
        /**
         * @language en_US
         * Emit when a property changed.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 属性改变。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        PropertyEvent.PROPERTY_CHANGE = "propertyChange";
        return PropertyEvent;
    })(egret.Event);
    swan.PropertyEvent = PropertyEvent;
    PropertyEvent.prototype.__class__ = "swan.PropertyEvent";
    egret.registerClass(PropertyEvent,"swan.PropertyEvent");
})(swan || (swan = {}));