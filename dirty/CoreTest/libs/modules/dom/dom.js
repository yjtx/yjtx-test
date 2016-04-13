
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
var egret;
(function (egret) {
    var web;
    (function (web) {
        /**
         * 创建一个canvas。
         */
        function createCanvas(width, height) {
            var canvas = document.createElement("canvas");
            if (!isNaN(width) && !isNaN(height)) {
                canvas.width = width;
                canvas.height = height;
            }
            //$toBitmapData(canvas);
            var context = canvas.getContext("2d");
            if (context["imageSmoothingEnabled"] === undefined) {
                var keys = ["webkitImageSmoothingEnabled", "mozImageSmoothingEnabled", "msImageSmoothingEnabled"];
                for (var i = keys.length - 1; i >= 0; i--) {
                    var key = keys[i];
                    if (context[key] !== void 0) {
                        break;
                    }
                }
                try {
                    Object.defineProperty(context, "imageSmoothingEnabled", {
                        get: function () {
                            return this[key];
                        },
                        set: function (value) {
                            this[key] = value;
                        }
                    });
                }
                catch (e) {
                    context["imageSmoothingEnabled"] = context[key];
                }
            }
            return canvas;
        }
        var sharedCanvas = createCanvas();
        /**
         * @private
         * Canvas2D渲染缓冲
         */
        var DOMRenderBuffer = (function () {
            function DOMRenderBuffer(width, height) {
                this.surface = createCanvas(width, height);
                this.context = this.surface.getContext("2d");
            }
            var d = __define,c=DOMRenderBuffer,p=c.prototype;
            d(p, "width"
                /**
                 * 渲染缓冲的宽度，以像素为单位。
                 * @readOnly
                 */
                ,function () {
                    return this.surface.width;
                }
            );
            d(p, "height"
                /**
                 * 渲染缓冲的高度，以像素为单位。
                 * @readOnly
                 */
                ,function () {
                    return this.surface.height;
                }
            );
            /**
             * 改变渲染缓冲的大小并清空缓冲区
             * @param width 改变后的宽
             * @param height 改变后的高
             * @param useMaxSize 若传入true，则将改变后的尺寸与已有尺寸对比，保留较大的尺寸。
             */
            p.resize = function (width, height, useMaxSize) {
                var surface = this.surface;
                if (useMaxSize) {
                    var change = false;
                    if (surface.width < width) {
                        surface.width = width;
                        change = true;
                    }
                    if (surface.height < height) {
                        surface.height = height;
                        change = true;
                    }
                    //尺寸没有变化时,将绘制属性重置
                    if (!change) {
                        this.context.globalCompositeOperation = "source-over";
                        this.context.setTransform(1, 0, 0, 1, 0, 0);
                        this.context.globalAlpha = 1;
                    }
                }
                else {
                    if (surface.width != width) {
                        surface.width = width;
                    }
                    if (surface.height != height) {
                        surface.height = height;
                    }
                }
                this.clear();
            };
            /**
             * 改变渲染缓冲为指定大小，但保留原始图像数据
             * @param width 改变后的宽
             * @param height 改变后的高
             * @param offsetX 原始图像数据在改变后缓冲区的绘制起始位置x
             * @param offsetY 原始图像数据在改变后缓冲区的绘制起始位置y
             */
            p.resizeTo = function (width, height, offsetX, offsetY) {
                var oldContext = this.context;
                var oldSurface = this.surface;
                var newSurface = sharedCanvas;
                var newContext = newSurface.getContext("2d");
                sharedCanvas = oldSurface;
                this.context = newContext;
                this.surface = newSurface;
                newSurface.width = Math.max(width, 257);
                newSurface.height = Math.max(height, 257);
                newContext.setTransform(1, 0, 0, 1, 0, 0);
                newContext.drawImage(oldSurface, offsetX, offsetY);
                oldSurface.height = 1;
                oldSurface.width = 1;
            };
            /**
             * 清空并设置裁切
             * @param regions 矩形列表
             * @param offsetX 矩形要加上的偏移量x
             * @param offsetY 矩形要加上的偏移量y
             */
            p.beginClip = function (regions, offsetX, offsetY) {
                offsetX = +offsetX || 0;
                offsetY = +offsetY || 0;
                var context = this.context;
                context.save();
                context.beginPath();
                context.setTransform(1, 0, 0, 1, offsetX, offsetY);
                var length = regions.length;
                for (var i = 0; i < length; i++) {
                    var region = regions[i];
                    context.clearRect(region.minX, region.minY, region.width, region.height);
                    context.rect(region.minX, region.minY, region.width, region.height);
                }
                context.clip();
            };
            /**
             * 取消上一次设置的clip。
             */
            p.endClip = function () {
                this.context.restore();
            };
            /**
             * 获取指定坐标的像素
             */
            p.getPixel = function (x, y) {
                return this.context.getImageData(x, y, 1, 1).data;
            };
            /**
             * 转换成base64字符串，如果图片（或者包含的图片）跨域，则返回null
             * @param type 转换的类型，如: "image/png","image/jpeg"
             */
            p.toDataURL = function (type, encoderOptions) {
                return this.surface.toDataURL(type, encoderOptions);
            };
            /**
             * 清空缓冲区数据
             */
            p.clear = function () {
                this.context.setTransform(1, 0, 0, 1, 0, 0);
                this.context.clearRect(0, 0, this.surface.width, this.surface.height);
            };
            /**
             * 销毁绘制对象
             */
            p.destroy = function () {
                this.surface.width = this.surface.height = 0;
            };
            return DOMRenderBuffer;
        }());
        web.DOMRenderBuffer = DOMRenderBuffer;
        egret.registerClass(DOMRenderBuffer,'egret.web.DOMRenderBuffer',["egret.sys.RenderBuffer"]);
        egret.sys.hitTestBuffer = new DOMRenderBuffer(3, 3);
    })(web = egret.web || (egret.web = {}));
})(egret || (egret = {}));

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
var egret;
(function (egret) {
    var web;
    (function (web) {
        var renderBufferPool = []; //渲染缓冲区对象池
        /**
         * @private
         * Canvas渲染器
         */
        var DOMRenderer = (function () {
            function DOMRenderer() {
                this.nestLevel = 0; //渲染的嵌套层次，0表示在调用堆栈的最外层。
            }
            var d = __define,c=DOMRenderer,p=c.prototype;
            /**
             * 渲染一个显示对象
             * @param displayObject 要渲染的显示对象
             * @param buffer 渲染缓冲
             * @param matrix 要对显示对象整体叠加的变换矩阵
             * @param dirtyList 脏矩形列表
             * @param forRenderTexture 绘制目标是RenderTexture的标志
             * @returns drawCall触发绘制的次数
             */
            p.render = function (displayObject, buffer, matrix, dirtyList, forRenderTexture) {
                this.nestLevel++;
                var context = buffer.context;
                var root = forRenderTexture ? displayObject : null;
                //绘制显示对象
                var drawCall = this.drawDisplayObject(displayObject, context, dirtyList, matrix, null, null, root);
                this.nestLevel--;
                if (this.nestLevel === 0) {
                    //最大缓存6个渲染缓冲
                    if (renderBufferPool.length > 6) {
                        renderBufferPool.length = 6;
                    }
                    var length = renderBufferPool.length;
                    for (var i = 0; i < length; i++) {
                        renderBufferPool[i].resize(0, 0);
                    }
                }
                return drawCall;
            };
            /**
             * @private
             * 绘制一个显示对象
             */
            p.drawDisplayObject = function (displayObject, context, dirtyList, matrix, displayList, clipRegion, root) {
                var drawCalls = 0;
                var node;
                if (displayList && !root) {
                    if (displayList.isDirty) {
                        drawCalls += displayList.drawToSurface();
                    }
                    node = displayList.$renderNode;
                }
                else {
                    node = displayObject.$getRenderNode();
                }
                if (node && node.needRedraw) {
                    console.log(displayObject.$hashCode);
                }
                if (displayList && !root) {
                    return drawCalls;
                }
                var children = displayObject.$children;
                if (children) {
                    var length = children.length;
                    for (var i = 0; i < length; i++) {
                        var child = children[i];
                        if (!child.$visible || child.$alpha <= 0 || child.$maskedObject) {
                            continue;
                        }
                        if ((child.$blendMode !== 0 ||
                            (child.$mask && (child.$mask.$parentDisplayList || root)))) {
                        }
                        else if (child.$scrollRect || child.$maskRect) {
                        }
                        else {
                            if (child["isFPS"]) {
                            }
                            else {
                                drawCalls += this.drawDisplayObject(child, context, dirtyList, matrix, child.$displayList, clipRegion, root);
                            }
                        }
                    }
                }
                return drawCalls;
            };
            /**
             * 将一个RenderNode对象绘制到渲染缓冲
             * @param node 要绘制的节点
             * @param buffer 渲染缓冲
             * @param matrix 要叠加的矩阵
             * @param forHitTest 绘制结果是用于碰撞检测。若为true，当渲染GraphicsNode时，会忽略透明度样式设置，全都绘制为不透明的。
             */
            p.drawNodeToBuffer = function (node, buffer, matrix, forHitTest) {
                //var context = buffer.context;
                //context.setTransform(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
                //this.renderNode(node, context, forHitTest);
            };
            return DOMRenderer;
        }());
        web.DOMRenderer = DOMRenderer;
        egret.registerClass(DOMRenderer,'egret.web.DOMRenderer',["egret.sys.SystemRenderer"]);
    })(web = egret.web || (egret.web = {}));
})(egret || (egret = {}));



