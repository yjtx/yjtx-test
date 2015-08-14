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
     * The State class defines a view state, a particular view of a component.
     *
     * For example, a product thumbnail could have two view states;
     * a base view state with minimal information, and a rich view state with
     * additional information.
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     */
    /**
     * @language zh_CN
     * State 类定义视图状态，即组件的特定视图。
     *
     * 例如，产品缩略图可以有两个视图状态，包含最少信息的基本视图状态和包含附加信息的丰富视图状态。
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     */
    var State = (function (_super) {
        __extends(State, _super);
        /**
         * @language en_US
         * Constructor.
         *
         * @param name The name of the view state.
         * State names must be unique for a given component.
         * This property must be set.
         * @param overrides The overrides for this view state, as an Array of objects that implement
         * the IOverride interface. These overrides are applied in order when the
         * state is entered, and removed in reverse order when the state is exited.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 创建一个State实例。
         *
         * @param name 视图状态的名称。给定组件的状态名称必须唯一。必须设置此属性。
         * @param overrides 该视图状态的覆盖，表现为实现 IOverride 接口的对象的数组。
         * 这些覆盖在进入状态时按顺序应用，在退出状态时按相反的顺序删除。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        function State(name, overrides) {
            _super.call(this);
            this.name = name;
            this.overrides = overrides;
        }
        var __egretProto__ = State.prototype;
        /**
         * @language en_US
         * Initialize this state and all of its overrides.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 初始化视图状态
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.initialize = function (host, stage) {
            var overrides = this.overrides;
            var length = overrides.length;
            for (var i = 0; i < length; i++) {
                var addItems = overrides[i];
                if (addItems instanceof swan.AddItems) {
                    var target = host[addItems.target];
                    if (target && target instanceof swan.Image && !target.$parent) {
                        stage.addChild(target);
                        stage.removeChild(target);
                    }
                }
            }
        };
        return State;
    })(egret.HashObject);
    swan.State = State;
    State.prototype.__class__ = "swan.State";
    egret.registerClass(State,"swan.State");
})(swan || (swan = {}));
var swan;
(function (swan) {
    var sys;
    (function (sys) {
        /**
         * @private
         */
        var StateClient = (function () {
            function StateClient() {
            }
            var __egretProto__ = StateClient.prototype;
            Object.defineProperty(__egretProto__, "states", {
                /**
                 * @private
                 * 为此组件定义的视图状态。
                 */
                get: function () {
                    return this.$stateValues.states;
                },
                set: function (value) {
                    if (!value)
                        value = [];
                    var values = this.$stateValues;
                    values.states = value;
                    var statesMap = {};
                    var length = value.length;
                    for (var i = 0; i < length; i++) {
                        var state = value[i];
                        statesMap[state.name] = state;
                    }
                    values.statesMap = statesMap;
                    if (values.parent) {
                        this.commitCurrentState();
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(__egretProto__, "currentState", {
                /**
                 * @private
                 * 组件的当前视图状态。将其设置为 "" 或 null 可将组件重置回其基本状态。
                 */
                get: function () {
                    return this.$stateValues.currentState;
                },
                set: function (value) {
                    var values = this.$stateValues;
                    values.explicitState = value;
                    values.currentState = value;
                    this.commitCurrentState();
                },
                enumerable: true,
                configurable: true
            });
            /**
             * @private
             * 应用当前的视图状态。子类覆盖此方法在视图状态发生改变时执行相应更新操作。
             */
            __egretProto__.commitCurrentState = function () {
                var values = this.$stateValues;
                if (!values.parent) {
                    return;
                }
                var destination = values.statesMap[values.currentState];
                if (!destination) {
                    if (values.states.length > 0) {
                        values.currentState = values.states[0].name;
                    }
                    else {
                        return;
                    }
                }
                if (values.oldState == values.currentState) {
                    return;
                }
                var parent = values.parent;
                var state = values.statesMap[values.oldState];
                if (state) {
                    var overrides = state.overrides;
                    var length = overrides.length;
                    for (var i = 0; i < length; i++) {
                        overrides[i].remove(this, parent);
                    }
                }
                values.oldState = values.currentState;
                state = values.statesMap[values.currentState];
                if (state) {
                    overrides = state.overrides;
                    length = overrides.length;
                    for (i = 0; i < length; i++) {
                        overrides[i].apply(this, parent);
                    }
                }
            };
            /**
             * @private
             * 返回是否含有指定名称的视图状态
             * @param stateName 要检查的视图状态名称
             */
            __egretProto__.hasState = function (stateName) {
                return !!this.$stateValues.statesMap[stateName];
            };
            /**
             * @private
             * 初始化所有视图状态
             */
            __egretProto__.initializeStates = function (stage) {
                this.$stateValues.intialized = true;
                var states = this.states;
                var length = states.length;
                for (var i = 0; i < length; i++) {
                    states[i].initialize(this, stage);
                }
            };
            return StateClient;
        })();
        sys.StateClient = StateClient;
        StateClient.prototype.__class__ = "swan.sys.StateClient";
        egret.registerClass(StateClient,"swan.sys.StateClient");
        /**
         * @private
         */
        var StateValues = (function () {
            function StateValues() {
                /**
                 * @private
                 */
                this.intialized = false;
                /**
                 * @private
                 */
                this.statesMap = {};
                /**
                 * @private
                 */
                this.states = [];
                /**
                 * @private
                 */
                this.oldState = null;
                /**
                 * @private
                 */
                this.explicitState = null;
                /**
                 * @private
                 */
                this.currentState = null;
                /**
                 * @private
                 */
                this.parent = null;
                /**
                 * @private
                 */
                this.stateIsDirty = false;
            }
            var __egretProto__ = StateValues.prototype;
            return StateValues;
        })();
        sys.StateValues = StateValues;
        StateValues.prototype.__class__ = "swan.sys.StateValues";
        egret.registerClass(StateValues,"swan.sys.StateValues");
    })(sys = swan.sys || (swan.sys = {}));
})(swan || (swan = {}));
