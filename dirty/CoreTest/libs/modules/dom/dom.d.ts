declare module egret.web {
    /**
     * @private
     * Canvas2D渲染缓冲
     */
    class DOMRenderBuffer implements sys.RenderBuffer {
        constructor(width?: number, height?: number);
        /**
         * 渲染上下文
         */
        context: CanvasRenderingContext2D;
        /**
         * 呈现最终绘图结果的画布
         */
        surface: HTMLCanvasElement;
        /**
         * 渲染缓冲的宽度，以像素为单位。
         * @readOnly
         */
        width: number;
        /**
         * 渲染缓冲的高度，以像素为单位。
         * @readOnly
         */
        height: number;
        /**
         * 改变渲染缓冲的大小并清空缓冲区
         * @param width 改变后的宽
         * @param height 改变后的高
         * @param useMaxSize 若传入true，则将改变后的尺寸与已有尺寸对比，保留较大的尺寸。
         */
        resize(width: number, height: number, useMaxSize?: boolean): void;
        /**
         * 改变渲染缓冲为指定大小，但保留原始图像数据
         * @param width 改变后的宽
         * @param height 改变后的高
         * @param offsetX 原始图像数据在改变后缓冲区的绘制起始位置x
         * @param offsetY 原始图像数据在改变后缓冲区的绘制起始位置y
         */
        resizeTo(width: number, height: number, offsetX: number, offsetY: number): void;
        /**
         * 清空并设置裁切
         * @param regions 矩形列表
         * @param offsetX 矩形要加上的偏移量x
         * @param offsetY 矩形要加上的偏移量y
         */
        beginClip(regions: sys.Region[], offsetX?: number, offsetY?: number): void;
        /**
         * 取消上一次设置的clip。
         */
        endClip(): void;
        /**
         * 获取指定坐标的像素
         */
        getPixel(x: number, y: number): number[];
        /**
         * 转换成base64字符串，如果图片（或者包含的图片）跨域，则返回null
         * @param type 转换的类型，如: "image/png","image/jpeg"
         */
        toDataURL(type?: string, encoderOptions?: number): string;
        /**
         * 清空缓冲区数据
         */
        clear(): void;
        /**
         * 销毁绘制对象
         */
        destroy(): void;
    }
}
declare module egret.web {
    /**
     * @private
     * Canvas渲染器
     */
    class DOMRenderer implements sys.SystemRenderer {
        constructor();
        private nestLevel;
        /**
         * 渲染一个显示对象
         * @param displayObject 要渲染的显示对象
         * @param buffer 渲染缓冲
         * @param matrix 要对显示对象整体叠加的变换矩阵
         * @param dirtyList 脏矩形列表
         * @param forRenderTexture 绘制目标是RenderTexture的标志
         * @returns drawCall触发绘制的次数
         */
        render(displayObject: DisplayObject, buffer: sys.RenderBuffer, matrix: Matrix, dirtyList?: egret.sys.Region[], forRenderTexture?: boolean): number;
        /**
         * @private
         * 绘制一个显示对象
         */
        private drawDisplayObject(displayObject, context, dirtyList, matrix, displayList, clipRegion, root);
        /**
         * 将一个RenderNode对象绘制到渲染缓冲
         * @param node 要绘制的节点
         * @param buffer 渲染缓冲
         * @param matrix 要叠加的矩阵
         * @param forHitTest 绘制结果是用于碰撞检测。若为true，当渲染GraphicsNode时，会忽略透明度样式设置，全都绘制为不透明的。
         */
        drawNodeToBuffer(node: sys.RenderNode, buffer: sys.RenderBuffer, matrix: Matrix, forHitTest?: boolean): void;
    }
}
