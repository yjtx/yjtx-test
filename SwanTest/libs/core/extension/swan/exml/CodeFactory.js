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
    var sys;
    (function (sys) {
        var STATE = "swan.State";
        var ADD_ITEMS = "swan.AddItems";
        var SET_PROPERTY = "swan.SetProperty";
        var BINDING_PROPERTY = "swan.Binding.bindProperty";
        /**
         * @private
         * 代码生成工具基类
         */
        var CodeBase = (function () {
            function CodeBase() {
                /**
                 * @private
                 */
                this.indent = 0;
            }
            var __egretProto__ = CodeBase.prototype;
            /**
             * @private
             *
             * @returns
             */
            __egretProto__.toCode = function () {
                return "";
            };
            /**
             * @private
             * 获取缩进字符串
             */
            __egretProto__.getIndent = function (indent) {
                if (indent === void 0)
                    indent = this.indent;
                var str = "";
                for (var i = 0; i < indent; i++) {
                    str += "	";
                }
                return str;
            };
            return CodeBase;
        })();
        sys.CodeBase = CodeBase;
        CodeBase.prototype.__class__ = "swan.sys.CodeBase";
        egret.registerClass(CodeBase,"swan.sys.CodeBase");
        /**
         * @private
         */
        var EXClass = (function (_super) {
            __extends(EXClass, _super);
            function EXClass() {
                _super.apply(this, arguments);
                /**
                 * @private
                 * 类名,不包括模块名
                 */
                this.className = "";
                /**
                 * @private
                 * 父类类名,包括完整模块名
                 */
                this.superClass = "";
                /**
                 * @private
                 * 内部类区块
                 */
                this.innerClassBlock = [];
                /**
                 * @private
                 * 变量定义区块
                 */
                this.variableBlock = [];
                /**
                 * @private
                 * 函数定义区块
                 */
                this.functionBlock = [];
            }
            var __egretProto__ = EXClass.prototype;
            /**
             * @private
             * 添加一个内部类
             */
            __egretProto__.addInnerClass = function (clazz) {
                if (this.innerClassBlock.indexOf(clazz) == -1) {
                    this.innerClassBlock.push(clazz);
                }
            };
            /**
             * @private
             * 添加变量
             */
            __egretProto__.addVariable = function (variableItem) {
                if (this.variableBlock.indexOf(variableItem) == -1) {
                    this.variableBlock.push(variableItem);
                }
            };
            /**
             * @private
             * 根据变量名获取变量定义
             */
            __egretProto__.getVariableByName = function (name) {
                var list = this.variableBlock;
                var length = list.length;
                for (var i = 0; i < length; i++) {
                    var item = list[i];
                    if (item.name == name) {
                        return item;
                    }
                }
                return null;
            };
            /**
             * @private
             * 添加函数
             */
            __egretProto__.addFunction = function (functionItem) {
                if (this.functionBlock.indexOf(functionItem) == -1) {
                    this.functionBlock.push(functionItem);
                }
            };
            /**
             * @private
             * 根据函数名返回函数定义块
             */
            __egretProto__.getFuncByName = function (name) {
                var list = this.functionBlock;
                var length = list.length;
                for (var i = 0; i < length; i++) {
                    var item = list[i];
                    if (item.name == name) {
                        return item;
                    }
                }
                return null;
            };
            /**
             * @private
             *
             * @returns
             */
            __egretProto__.toCode = function () {
                var indent = this.indent;
                var indentStr = this.getIndent(indent);
                var indent1Str = this.getIndent(indent + 1);
                var indent2Str = this.getIndent(indent + 2);
                //打印类起始块
                var returnStr = indentStr + "(function (";
                if (this.superClass) {
                    returnStr += "_super) {\n" + indent1Str + "__extends(" + this.className + ", _super);\n";
                }
                else {
                    returnStr += ") {\n";
                }
                //打印内部类列表
                var innerClasses = this.innerClassBlock;
                var length = innerClasses.length;
                for (var i = 0; i < length; i++) {
                    var clazz = innerClasses[i];
                    clazz.indent = indent + 1;
                    returnStr += indent1Str + "var " + clazz.className + " = " + clazz.toCode() + "\n\n";
                }
                returnStr += indent1Str + "function " + this.className + "() {\n";
                if (this.superClass) {
                    returnStr += indent2Str + "_super.call(this);\n";
                }
                //打印变量列表
                var variables = this.variableBlock;
                length = variables.length;
                for (i = 0; i < length; i++) {
                    var variable = variables[i];
                    if (variable.defaultValue) {
                        returnStr += indent2Str + variable.toCode() + "\n";
                    }
                }
                //打印构造函数
                if (this.constructCode) {
                    var codes = this.constructCode.toCode().split("\n");
                    length = codes.length;
                    for (i = 0; i < length; i++) {
                        var code = codes[i];
                        returnStr += indent2Str + code + "\n";
                    }
                }
                returnStr += indent1Str + "}\n";
                returnStr += indent1Str + "var _proto = " + this.className + ".prototype;\n\n";
                //打印函数列表
                var functions = this.functionBlock;
                length = functions.length;
                for (i = 0; i < length; i++) {
                    var functionItem = functions[i];
                    functionItem.indent = indent + 1;
                    returnStr += functionItem.toCode() + "\n";
                }
                //打印类结尾
                returnStr += indent1Str + "return " + this.className + ";\n" + indentStr;
                if (this.superClass) {
                    returnStr += "})(" + this.superClass + ");";
                }
                else {
                    returnStr += "})();";
                }
                return returnStr;
            };
            return EXClass;
        })(CodeBase);
        sys.EXClass = EXClass;
        EXClass.prototype.__class__ = "swan.sys.EXClass";
        egret.registerClass(EXClass,"swan.sys.EXClass");
        /**
         * @private
         */
        var EXCodeBlock = (function (_super) {
            __extends(EXCodeBlock, _super);
            function EXCodeBlock() {
                _super.apply(this, arguments);
                /**
                 * @private
                 */
                this.lines = [];
            }
            var __egretProto__ = EXCodeBlock.prototype;
            /**
             * @private
             * 添加变量声明语句
             * @param name 变量名
             * @param value 变量初始值
             */
            __egretProto__.addVar = function (name, value) {
                var valueStr = value ? " = " + value : "";
                this.addCodeLine("var " + name + valueStr + ";");
            };
            /**
             * @private
             * 添加赋值语句
             * @param target 要赋值的目标
             * @param value 值
             * @param prop 目标的属性(用“.”访问)，不填则是对目标赋值
             */
            __egretProto__.addAssignment = function (target, value, prop) {
                var propStr = prop ? "." + prop : "";
                this.addCodeLine(target + propStr + " = " + value + ";");
            };
            /**
             * @private
             * 添加返回值语句
             */
            __egretProto__.addReturn = function (data) {
                this.addCodeLine("return " + data + ";");
            };
            /**
             * @private
             * 添加一条空行
             */
            __egretProto__.addEmptyLine = function () {
                this.addCodeLine("");
            };
            /**
             * @private
             * 开始添加if语句块,自动调用startBlock();
             */
            __egretProto__.startIf = function (expression) {
                this.addCodeLine("if(" + expression + ")");
                this.startBlock();
            };
            /**
             * @private
             * 开始else语句块,自动调用startBlock();
             */
            __egretProto__.startElse = function () {
                this.addCodeLine("else");
                this.startBlock();
            };
            /**
             * @private
             * 开始else if语句块,自动调用startBlock();
             */
            __egretProto__.startElseIf = function (expression) {
                this.addCodeLine("else if(" + expression + ")");
                this.startBlock();
            };
            /**
             * @private
             * 添加一个左大括号，开始新的语句块
             */
            __egretProto__.startBlock = function () {
                this.addCodeLine("{");
                this.indent++;
            };
            /**
             * @private
             * 添加一个右大括号,结束当前的语句块
             */
            __egretProto__.endBlock = function () {
                this.indent--;
                this.addCodeLine("}");
            };
            /**
             * @private
             * 添加执行函数语句块
             * @param functionName 要执行的函数名称
             * @param args 函数参数列表
             */
            __egretProto__.doFunction = function (functionName, args) {
                var argsStr = args.join(",");
                this.addCodeLine(functionName + "(" + argsStr + ")");
            };
            /**
             * @private
             * 添加一行代码
             */
            __egretProto__.addCodeLine = function (code) {
                this.lines.push(this.getIndent() + code);
            };
            /**
             * @private
             * 添加一行代码到指定行
             */
            __egretProto__.addCodeLineAt = function (code, index) {
                this.lines.splice(index, 0, this.getIndent() + code);
            };
            /**
             * @private
             * 是否存在某行代码内容
             */
            __egretProto__.containsCodeLine = function (code) {
                return this.lines.indexOf(code) != -1;
            };
            /**
             * @private
             * 在结尾追加另一个代码块的内容
             */
            __egretProto__.concat = function (cb) {
                this.lines = this.lines.concat(cb.lines);
            };
            /**
             * @private
             *
             * @returns
             */
            __egretProto__.toCode = function () {
                return this.lines.join("\n");
            };
            return EXCodeBlock;
        })(CodeBase);
        sys.EXCodeBlock = EXCodeBlock;
        EXCodeBlock.prototype.__class__ = "swan.sys.EXCodeBlock";
        egret.registerClass(EXCodeBlock,"swan.sys.EXCodeBlock");
        /**
         * @private
         */
        var EXFunction = (function (_super) {
            __extends(EXFunction, _super);
            function EXFunction() {
                _super.apply(this, arguments);
                /**
                 * @private
                 * 代码块
                 */
                this.codeBlock = null;
                /**
                 * @private
                 */
                this.isGet = false;
                /**
                 * @private
                 * 函数名
                 */
                this.name = "";
            }
            var __egretProto__ = EXFunction.prototype;
            /**
             * @private
             *
             * @returns
             */
            __egretProto__.toCode = function () {
                var indentStr = this.getIndent();
                var indent1Str = this.getIndent(this.indent + 1);
                var codeIndent;
                var returnStr = indentStr;
                if (this.isGet) {
                    codeIndent = this.getIndent(this.indent + 2);
                    returnStr += 'Object.defineProperty(_proto, "skinParts", {\n';
                    returnStr += indent1Str + "get: function () {\n";
                }
                else {
                    codeIndent = indent1Str;
                    returnStr += "_proto." + this.name + " = function () {\n";
                }
                if (this.codeBlock) {
                    var lines = this.codeBlock.toCode().split("\n");
                    var length = lines.length;
                    for (var i = 0; i < length; i++) {
                        var line = lines[i];
                        returnStr += codeIndent + line + "\n";
                    }
                }
                if (this.isGet) {
                    returnStr += indent1Str + "},\n" + indent1Str + "enumerable: true,\n" + indent1Str + "configurable: true\n" + indentStr + "});";
                }
                else {
                    returnStr += indentStr + "};";
                }
                return returnStr;
            };
            return EXFunction;
        })(CodeBase);
        sys.EXFunction = EXFunction;
        EXFunction.prototype.__class__ = "swan.sys.EXFunction";
        egret.registerClass(EXFunction,"swan.sys.EXFunction");
        /**
         * @private
         */
        var EXVariable = (function (_super) {
            __extends(EXVariable, _super);
            /**
             * @private
             */
            function EXVariable(name, defaultValue) {
                _super.call(this);
                this.indent = 2;
                this.name = name;
                this.defaultValue = defaultValue;
            }
            var __egretProto__ = EXVariable.prototype;
            /**
             * @private
             *
             * @returns
             */
            __egretProto__.toCode = function () {
                if (!this.defaultValue) {
                    return "";
                }
                return "this." + this.name + " = " + this.defaultValue + ";";
            };
            return EXVariable;
        })(CodeBase);
        sys.EXVariable = EXVariable;
        EXVariable.prototype.__class__ = "swan.sys.EXVariable";
        egret.registerClass(EXVariable,"swan.sys.EXVariable");
        /**
         * @private
         */
        var EXState = (function (_super) {
            __extends(EXState, _super);
            /**
             * @private
             */
            function EXState(name, stateGroups) {
                _super.call(this);
                /**
                 * @private
                 * 视图状态名称
                 */
                this.name = "";
                /**
                 * @private
                 */
                this.stateGroups = [];
                /**
                 * @private
                 */
                this.addItems = [];
                /**
                 * @private
                 */
                this.setProperty = [];
                this.name = name;
                if (stateGroups)
                    this.stateGroups = stateGroups;
            }
            var __egretProto__ = EXState.prototype;
            /**
             * @private
             * 添加一个覆盖
             */
            __egretProto__.addOverride = function (item) {
                if (item instanceof EXAddItems)
                    this.addItems.push(item);
                else
                    this.setProperty.push(item);
            };
            /**
             * @private
             *
             * @returns
             */
            __egretProto__.toCode = function () {
                var indentStr = this.getIndent(1);
                var returnStr = "new " + STATE + " (\"" + this.name + "\",\n" + indentStr + "[\n";
                var index = 0;
                var isFirst = true;
                var overrides = this.addItems.concat(this.setProperty);
                while (index < overrides.length) {
                    if (isFirst)
                        isFirst = false;
                    else
                        returnStr += ",\n";
                    var item = overrides[index];
                    var codes = item.toCode().split("\n");
                    var length = codes.length;
                    for (var i = 0; i < length; i++) {
                        var code = codes[i];
                        codes[i] = indentStr + indentStr + code;
                    }
                    returnStr += codes.join("\n");
                    index++;
                }
                returnStr += "\n" + indentStr + "])";
                return returnStr;
            };
            return EXState;
        })(CodeBase);
        sys.EXState = EXState;
        EXState.prototype.__class__ = "swan.sys.EXState";
        egret.registerClass(EXState,"swan.sys.EXState");
        /**
         * @private
         */
        var EXAddItems = (function (_super) {
            __extends(EXAddItems, _super);
            /**
             * @private
             */
            function EXAddItems(target, property, position, relativeTo) {
                _super.call(this);
                this.target = target;
                this.property = property;
                this.position = position;
                this.relativeTo = relativeTo;
            }
            var __egretProto__ = EXAddItems.prototype;
            /**
             * @private
             *
             * @returns
             */
            __egretProto__.toCode = function () {
                var returnStr = "new " + ADD_ITEMS + "(\"" + this.target + "\",\"" + this.property + "\"," + this.position + ",\"" + this.relativeTo + "\")";
                return returnStr;
            };
            return EXAddItems;
        })(CodeBase);
        sys.EXAddItems = EXAddItems;
        EXAddItems.prototype.__class__ = "swan.sys.EXAddItems";
        egret.registerClass(EXAddItems,"swan.sys.EXAddItems");
        /**
         * @private
         */
        var EXSetProperty = (function (_super) {
            __extends(EXSetProperty, _super);
            /**
             * @private
             */
            function EXSetProperty(target, name, value) {
                _super.call(this);
                this.target = target;
                this.name = name;
                this.value = value;
            }
            var __egretProto__ = EXSetProperty.prototype;
            /**
             * @private
             *
             * @returns
             */
            __egretProto__.toCode = function () {
                return "new " + SET_PROPERTY + "(\"" + this.target + "\",\"" + this.name + "\"," + this.value + ")";
            };
            return EXSetProperty;
        })(CodeBase);
        sys.EXSetProperty = EXSetProperty;
        EXSetProperty.prototype.__class__ = "swan.sys.EXSetProperty";
        egret.registerClass(EXSetProperty,"swan.sys.EXSetProperty");
        /**
         * @private
         */
        var EXBinding = (function (_super) {
            __extends(EXBinding, _super);
            /**
             * @private
             */
            function EXBinding(target, property, expression) {
                _super.call(this);
                this.target = target;
                this.property = property;
                this.expression = expression;
            }
            var __egretProto__ = EXBinding.prototype;
            /**
             * @private
             *
             * @returns
             */
            __egretProto__.toCode = function () {
                var chain = this.expression.split(".").join("\",\"");
                return BINDING_PROPERTY + "(this, [\"" + chain + "\"], this." + this.target + ",\"" + this.property + "\");";
            };
            return EXBinding;
        })(CodeBase);
        sys.EXBinding = EXBinding;
        EXBinding.prototype.__class__ = "swan.sys.EXBinding";
        egret.registerClass(EXBinding,"swan.sys.EXBinding");
    })(sys = swan.sys || (swan.sys = {}));
})(swan || (swan = {}));
