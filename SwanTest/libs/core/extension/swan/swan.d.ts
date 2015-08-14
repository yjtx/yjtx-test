declare module swan {
    /**
     * @language en_US
     * The BitmapFillMode class defines an enumeration of the resize modes that
     * determine how a Bitmap fills in the dimensions specified by the layout system.
     *
     * @see swan.Image#fillMode
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/core/BitmapFillModeExample.ts
     */
    /**
     * @language zh_CN
     * BitmapFillMode 类定义 Image 控件的图像填充方式。
     * BitmapFillMode 类定义了调整大小模式的一个枚举，这些模式确定 Bitmap 如何填充由布局系统指定的尺寸。
     *
     * @see swan.Image#fillMode
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/core/BitmapFillModeExample.ts
     */
    class BitmapFillMode {
        /**
         * @language en_US
         * The bitmap ends at the edge of the region.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 在区域的边缘处截断不显示位图。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        static CLIP: string;
        /**
         * @language en_US
         * The bitmap is repeated to fill the region.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 重复位图以填充区域。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        static REPEAT: string;
        /**
         * @language en_US
         * The bitmap fill stretches to fill the region.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 拉伸位图以填充区域。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        static SCALE: string;
    }
}

declare module swan {
    /**
     * @language en_US
     * Values for the <code>horizontalCanScroll</code> and
     * <code>verticalCanScroll</code> properties of the Scroller classes.
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/core/ScrollPolicyExample.ts
     */
    /**
     * @language zh_CN
     * 滚动条显示策略常量。
     * Scroller 类的 <code>horizontalCanScroll</code> 和 <code>verticalCanScroll</code> 属性的值。
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/core/ScrollPolicyExample.ts
     */
    class ScrollPolicy {
        /**
         * @language en_US
         * Show the scrollbar if the children exceed the owner's dimension.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 如果子项超出父级的尺寸，则允许滚动，反之不允许滚动。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        static AUTO: string;
        /**
         * @language en_US
         * Never show the scrollbar.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 从不允许滚动。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        static OFF: string;
        /**
         * @language en_US
         * Always show the scrollbar.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 总是允许滚动。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        static ON: string;
    }
}

declare module swan {
    /**
     * @language en_US
     * Note: The skin name values in the skin theme are used as default values,which can not be changed while running.
     * You can change the skin of a component with the skinName property.
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/core/ThemeExample.ts
     */
    /**
     * @language zh_CN
     * 皮肤主题。注意：皮肤主题是一次性设置的默认值,并不能运行时切换所有组件默认皮肤。切换单个皮肤您可以自行对Component.skinName赋值来修改。
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/core/ThemeExample.ts
     */
    class Theme extends egret.EventDispatcher {
        /**
         * @language en_US
         * Create an instance of Theme
         * @param configURL the external theme path. if null, you need to register the default skin name with
         * mapSkin() manually.
         * @param stage current stage. The theme will register to the stage with this parameter.
         * If null, you need to register with stage.registerImplementation("swan.Theme",theme)
         * manually.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 创建一个主题实例
         * @param configURL 要加载并解析的外部主题配置文件路径。若传入 null，将不进行配置文件加载，
         * 之后需要在外部以代码方式手动调用 mapSkin() 方法完成每条默认皮肤名的注册。
         * @param stage 当前舞台引用。传入此参数，主题会自动注册自身到舞台上。
         * 若传入null，需要在外部手动调用 stage.registerImplementation("swan.Theme",theme) 来完成主题的注册。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        constructor(configURL: string, stage: egret.Stage);
        /**
         * @private
         */
        private initialized;
        /**
         * @private
         *
         * @param url
         */
        private load(url);
        /**
         * @private
         *
         * @param event
         */
        private onConfigLoaded(event);
        /**
         * @private
         */
        private delayList;
        /**
         * @private
         *
         */
        private handleDelayList();
        /**
         * @private
         */
        private skinMap;
        /**
         * @language en_US
         * According to the host component to get the default skin name.
         * Search rules are as follows:
         * <li>1. Use the <code>hostComponentKey</code> of client to search.</li>
         * <li>2. Use the class name of client to search.</li>
         * <li>3. Use the parent class name of client to search.</li>
         * <li>4. Repeat step 3 until find the skin name or the parent is <code>swan.Component</code>.</li>
         * @param client the component need to get the default skin.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 根据主机组件，获取对应的默认皮肤名。查询规则如下：
         * <li>1.使用client的hostComponentKey作为键查询默认皮肤名。</li>
         * <li>2.使用client的类名作为键查询默认皮肤名。</li>
         * <li>3.使用client的父类名作为键查询默认皮肤名。</li>
         * <li>4.不断重复3直到查询到皮肤名或父类为swan.Component时停止。</li>
         * @param client 要获取默认皮肤的组件。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        getSkinName(client: Component): string;
        /**
         * @private
         */
        private findSkinName(prototype);
        /**
         * @language en_US
         * Map a default skin for the specified host component.
         * @param hostComponentKey the name of host component, such as "swan.Button".
         * @param skinName the name of skin, such as "app.MyButtonSkin".
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 为指定的主机组件映射一个默认皮肤。
         * @param hostComponentKey 主机组件名称，例如：“swan.Button”。
         * @param skinName 皮肤名称 例如："app.MyButtonSkin"。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        mapSkin(hostComponentKey: string, skinName: string): void;
    }
}

declare module swan.sys {
    /**
     * @private
     * 失效验证管理器
     */
    class Validator extends egret.EventDispatcher {
        /**
         * @private
         * 创建一个Validator对象
         */
        constructor();
        /**
         * @private
         */
        private targetLevel;
        /**
         * @private
         */
        private invalidatePropertiesFlag;
        /**
         * @private
         */
        private invalidateClientPropertiesFlag;
        /**
         * @private
         */
        private invalidatePropertiesQueue;
        /**
         * @private
         * 标记组件属性失效
         */
        invalidateProperties(client: UIComponent): void;
        /**
         * @private
         * 验证失效的属性
         */
        private validateProperties();
        /**
         * @private
         */
        private invalidateSizeFlag;
        /**
         * @private
         */
        private invalidateClientSizeFlag;
        /**
         * @private
         */
        private invalidateSizeQueue;
        /**
         * @private
         * 标记需要重新测量尺寸
         */
        invalidateSize(client: UIComponent): void;
        /**
         * @private
         * 测量尺寸
         */
        private validateSize();
        /**
         * @private
         */
        private invalidateDisplayListFlag;
        /**
         * @private
         */
        private invalidateDisplayListQueue;
        /**
         * @private
         * 标记需要重新布局
         */
        invalidateDisplayList(client: UIComponent): void;
        /**
         * @private
         * 重新布局
         */
        private validateDisplayList();
        /**
         * @private
         */
        private eventDisplay;
        /**
         * @private
         * 是否已经添加了事件监听
         */
        private listenersAttached;
        /**
         * @private
         * 添加事件监听
         */
        private attachListeners();
        /**
         * @private
         * 执行属性应用
         */
        private doPhasedInstantiationCallBack(event?);
        /**
         * @private
         *
         */
        private doPhasedInstantiation();
        /**
         * @private
         * 使大于等于指定组件层级的元素立即应用属性
         * @param target 要立即应用属性的组件
         */
        validateClient(target: UIComponent): void;
    }
}

declare module swan {
    /**
     * @language en_US
     * The Component class defines the base class for skinnable components.
     * The skins used by a Component class are typically child classes of
     * the Skin class.<p/>
     *
     * Associate a skin class with a component class by setting the <code>skinClass</code> style property of the
     * component class.
     *
     * @event egret.Event.RESIZE Emit when the component is resized.
     * @event swan.UIEvent.MOVE Emit when the object has moved.
     * @event swan.UIEvent.CREATION_COMPLETE  Emit when the component has finished its construction,
     * property processing, measuring, layout, and drawing.
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     */
    /**
     * @language zh_CN
     * Component 类定义可设置外观的组件的基类。Component 类所使用的外观通常是 Skin 类的子类。<p/>
     *
     * 通过设置 component 类的 skinClass 样式属性，将 skin 类与 component 类相关联。
     *
     * @event egret.Event.RESIZE 当UI组件的尺寸发生改变时调度
     * @event swan.UIEvent.MOVE 当UI组件在父级容器中的位置发生改变时调度
     * @event swan.UIEvent.CREATION_COMPLETE 当UI组件第一次被添加到舞台并完成初始化后调度
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     */
    interface UIComponent extends egret.DisplayObject {
        $UIComponent: Object;
        /**
         * @private
         */
        $includeInLayout: boolean;
        /**
         * @language en_US
         * Specifies whether this component is included in the layout of the
         * parent container.
         * If <code>false</code>, the object size and position are not affected by its parent container's
         * layout.
         * This value is different with <code>visible</code>. the object size and position is still affected by its parent
         * container's layout when the <code>visible</code> is false.
         * @default true
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 指定此组件是否包含在父容器的布局中。若为false，则父级容器在测量和布局阶段都忽略此组件。
         * 注意，visible属性与此属性不同，设置visible为false，父级容器仍会对其布局。
         *
         * @default true
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        includeInLayout: boolean;
        /**
         * @language en_US
         * The horizontal distance in pixels from the left edge of the component to the
         * anchor target's left edge.
         *
         * @default NaN
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 距父级容器离左边距离。
         *
         * @default NaN
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        left: number;
        /**
         * @language en_US
         * The horizontal distance in pixels from the right edge of the component to the
         * anchor target's right edge.
         *
         * @default NaN
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 距父级容器右边距离。
         *
         * @default NaN
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        right: number;
        /**
         * @language en_US
         * The vertical distance in pixels from the top edge of the component to the
         * anchor target's top edge.
         *
         * @default NaN
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 距父级容器顶部距离。
         *
         * @default NaN
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        top: number;
        /**
         * @language en_US
         * The vertical distance in pixels from the bottom edge of the component to the
         * anchor target's bottom edge.
         *
         * @default NaN
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 距父级容器底部距离。
         *
         * @default NaN
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        bottom: number;
        /**
         * @language en_US
         * The horizontal distance in pixels from the center of the component to the
         * center of the anchor target's content area.
         *
         * @default NaN
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 在父级容器中距水平中心位置的距离。
         *
         * @default NaN
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        horizontalCenter: number;
        /**
         * @language en_US
         * The vertical distance in pixels from the center of the component to the
         *  center of the anchor target's content area.
         *
         * @default NaN
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 在父级容器中距竖直中心位置的距离。
         *
         * @default NaN
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        verticalCenter: number;
        /**
         * @language en_US
         * Specifies the width of a component as a percentage
         * of its parent's size. Allowed values are 0-100.
         * Setting the <code>width</code> or <code>explicitWidth</code> properties
         * resets this property to NaN.
         *
         * @default NaN
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 相对父级容器宽度的百分比。
         *
         * @default NaN
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        percentWidth: number;
        /**
         * @language en_US
         * Specifies the height of a component as a percentage
         * of its parent's size. Allowed values are 0-100.
         * Setting the <code>height</code> or <code>explicitHeight</code> properties
         * resets this property to NaN.
         *
         * @default NaN
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 相对父级容器高度的百分比。
         *
         * @default NaN
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        percentHeight: number;
        /**
         * @language en_US
         * Number that specifies the explicit width of the component,
         * in pixels, in the component's coordinates.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 外部显式指定的宽度。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        explicitWidth: number;
        /**
         * @language en_US
         * Number that specifies the explicit height of the component,
         * in pixels, in the component's coordinates.
         * @readOnly
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 外部显式指定的高度。
         * @readOnly
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        explicitHeight: number;
        /**
         * @language en_US
         * The minimum recommended width of the component to be considered
         * by the parent during layout. This value is in the
         * component's coordinates, in pixels. The default value depends on
         * the component's implementation.
         * @readOnly
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 组件的最小宽度,此属性设置为大于maxWidth的值时无效。同时影响测量和自动布局的尺寸。
         * @readOnly
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        minWidth: number;
        /**
         * @language en_US
         * The maximum recommended width of the component to be considered
         * by the parent during layout. This value is in the
         * component's coordinates, in pixels. The default value of this property is
         * set by the component developer.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 组件的最大高度。同时影响测量和自动布局的尺寸。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        maxWidth: number;
        /**
         * @language en_US
         * The minimum recommended height of the component to be considered
         * by the parent during layout. This value is in the
         * component's coordinates, in pixels. The default value depends on
         * the component's implementation.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 组件的最小高度,此属性设置为大于maxHeight的值时无效。同时影响测量和自动布局的尺寸。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        minHeight: number;
        /**
         * @language en_US
         * The maximum recommended height of the component to be considered
         * by the parent during layout. This value is in the
         * component's coordinates, in pixels. The default value of this property is
         * set by the component developer.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 组件的最大高度,同时影响测量和自动布局的尺寸。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        maxHeight: number;
        /**
         * @language en_US
         * Set the result of measuring.
         * @param width measured width
         * @param height measured height
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 设置测量结果。
         * @param width 测量宽度
         * @param height 测量高度
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        setMeasuredSize(width: number, height: number): void;
        /**
         * @language en_US
         * Marks a component so that its <code>commitProperties()</code>
         * method gets called during a later screen update.<p/>
         *
         * Invalidation is a useful mechanism for eliminating duplicate
         * work by delaying processing of changes to a component until a
         * later screen update.<p/>
         *
         * For example, if you want to change the text color and size,
         * it would be wasteful to update the color immediately after you
         * change it and then update the size when it gets set.
         * It is more efficient to change both properties and then render
         * the text with its new size and color once.<p/>
         *
         * Invalidation methods rarely get called.
         * In general, setting a property on a component automatically
         * calls the appropriate invalidation method.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 标记提交过需要延迟应用的属性，以便在稍后屏幕更新期间调用该组件的 commitProperties() 方法。<p/>
         *
         * 这是一个很有用的机制，可将组件更改延迟到稍后屏幕更新时进行处理，从而消除了重复的工作。<p/>
         *
         * 例如，要更改文本颜色和大小，如果在更改颜色后立即进行更新，然后在设置大小后再更新大小，就有些浪费。
         * 同时更改两个属性后再使用新的大小和颜色一次性呈示文本，效率会更高。<p/>
         *
         * 很少调用 Invalidation 方法。通常，在组件上设置属性会自动调用合适的 invalidation 方法。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        invalidateProperties(): void;
        /**
         * @language en_US
         * Used by layout logic to validate the properties of a component
         * by calling the <code>commitProperties()</code> method.
         * In general, subclassers should
         * override the <code>commitProperties()</code> method and not this method.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 由布局逻辑用于通过调用 commitProperties() 方法来验证组件的属性。
         * 通常，子类应覆盖 commitProperties() 方法，而不是覆盖此方法。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        validateProperties(): void;
        /**
         * @language en_US
         * Marks a component so that its <code>measure()</code>
         * method gets called during a later screen update.<p/>
         *
         * Invalidation is a useful mechanism for eliminating duplicate
         * work by delaying processing of changes to a component until a
         * later screen update.<p/>
         *
         * For example, if you want to change the text and font size,
         * it would be wasteful to update the text immediately after you
         * change it and then update the size when it gets set.
         * It is more efficient to change both properties and then render
         * the text with its new size once.<p/>
         *
         * Invalidation methods rarely get called.
         * In general, setting a property on a component automatically
         * calls the appropriate invalidation method.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 标记提交过需要验证组件尺寸，以便在稍后屏幕更新期间调用该组件的 measure() 方法。<p/>
         *
         * Invalidation 是一个很有用的机制，可将组件更改延迟到稍后屏幕更新时进行处理，从而消除了重复的工作。<p/>
         *
         * 例如，要更改文本和字体大小，如果在更改文本后立即进行更新，然后在设置大小后再更新大小，就有些浪费。
         * 更改两个属性后再使用新的大小一次性呈示文本，效率会更高。<p/>
         *
         * 很少调用 Invalidation 方法。通常，在组件上设置属性会自动调用合适的 invalidation 方法。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        invalidateSize(): void;
        /**
         * @language en_US
         * Validates the measured size of the component.
         * @param recursive If <code>true</code>, call this method
         *  on the objects children.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 验证组件的尺寸。
         * @param recursive 如果为 true，则调用对象子项的此方法。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        validateSize(recursive?: boolean): void;
        /**
         * @language en_US
         * Marks a component so that its <code>updateDisplayList()</code>
         * method gets called during a later screen update.<p/>
         *
         * Invalidation is a useful mechanism for eliminating duplicate
         * work by delaying processing of changes to a component until a
         * later screen update.<p/>
         *
         * For example, if you want to change the width and height,
         * it would be wasteful to update the component immediately after you
         * change the width and then update again with the new height.
         * It is more efficient to change both properties and then render
         * the component with its new size once.<p/>
         *
         * Invalidation methods rarely get called.
         * In general, setting a property on a component automatically
         * calls the appropriate invalidation method.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 标记需要验证显示列表，以便在稍后屏幕更新期间调用该组件的 updateDisplayList() 方法。<p/>
         *
         * Invalidation 是一个很有用的机制，可将组件更改延迟到稍后屏幕更新时进行处理，从而消除了重复的工作。<p/>
         *
         * 例如，要更改宽度和高度，如果在更改宽度后立即更新组件，然后在设置新高度后再次更新组件，就有些浪费。
         * 更改两个属性后再使用新的大小一次性呈示组件，效率会更高。<p/>
         *
         * 很少调用 Invalidation 方法。通常，在组件上设置属性会自动调用合适的 invalidation 方法。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        invalidateDisplayList(): void;
        /**
         * @language en_US
         * Validates the position and size of children and draws other
         * visuals.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 验证子项的位置和大小，并绘制其他可视内容。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        validateDisplayList(): void;
        /**
         * @language en_US
         * Validate and update the properties and layout of this object
         * and redraw it, if necessary.<p/>
         *
         * Processing properties that require substantial computation are normally
         * not processed until the script finishes executing.<p/>
         *
         * For example setting the <code>width</code> property is delayed, because it can
         * require recalculating the widths of the objects children or its parent.
         * Delaying the processing prevents it from being repeated
         * multiple times if the script sets the <code>width</code> property more than once.
         * This method lets you manually override this behavior.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 验证并更新此对象的属性和布局，如果需要的话重绘对象。<p/>
         *
         * 通常只有当脚本执行完毕后，才会处理要求进行大量计算的处理属性。<p/>
         *
         * 例如，对 width 属性的设置可能会延迟，因为此设置需要重新计算这些对象的子项或父项的宽度。
         * 如果脚本多次设置了 width 属性，则延迟处理可防止进行多次处理。此方法允许您手动覆盖此行为。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        validateNow(): void;
        /**
         * @language en_US
         * Sets the layout size of the element.
         * This is the size that the element uses to draw on screen.<p/>
         *
         * If the <code>width</code> and/or <code>height</code> parameters are left unspecified (NaN),
         * Swan sets the element's layout size to its preferred width and/or preferred height.<p/>
         *
         * Note that calls to the <code>setLayoutBoundSize()</code> method can affect the layout position, so
         * call <code>setLayoutBoundPosition()</code> after calling <code>setLayoutBoundSize()</code>.<p/>
         *
         * @param layoutWidth The element's layout width.
         * @param layoutHeight The element's layout height.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 设置元素的布局大小。这是元素在屏幕上进行绘制时所用的大小。<p/>
         *
         * 如果 width 和/或 height 参数尚未指定 (NaN))，则 Swan 会将该元素的布局大小设置为首选宽度和/或首选高度。<p/>
         *
         * 请注意，调用 setLayoutBoundSize() 方法会影响布局位置，因此请在调用 setLayoutBoundSize()
         * 之后再调用 setLayoutBoundPosition()。
         *
         * @param layoutWidth 元素的布局宽度。
         * @param layoutHeight 元素的布局高度。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        setLayoutBoundsSize(layoutWidth: number, layoutHeight: number): void;
        /**
         * @language en_US
         * Sets the coordinates that the element uses to draw on screen.<p/>
         *
         * Note that calls to the <code>setLayoutBoundSize()</code> method can affect the layout position, so
         * call <code>setLayoutBoundPosition()</code> after calling <code>setLayoutBoundSize()</code>.<p/>
         *
         * @param x The x-coordinate of the top-left corner of the bounding box.
         * @param y The y-coordinate of the top-left corner of the bounding box.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 设置元素在屏幕上进行绘制时所用的布局坐标。<p/>
         *
         * 请注意，调用 setLayoutBoundSize() 方法会影响布局位置，因此请在调用 setLayoutBoundSize()
         * 之后再调用 setLayoutBoundPosition()。
         *
         * @param x 边框左上角的 X 坐标。
         * @param y 边框左上角的 Y 坐标。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        setLayoutBoundsPosition(x: number, y: number): void;
        /**
         * @language en_US
         * Get the layout bounds that the element uses to draw on screen.
         * Commonly used in the <code>updateDisplayList()</code> method in parent container.<p/>
         * Priority: layout > explicit > measure.<p/>
         * The result of this method is contains <code>scale</code> and <code>rotation</code>.
         *
         * @param bounds the instance of <code>egret.Rectangle</code> can set result.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 组件的布局尺寸,常用于父级的<code>updateDisplayList()</code>方法中。<p/>
         * 按照：布局尺寸>外部显式设置尺寸>测量尺寸 的优先级顺序返回尺寸。<p/>
         * 注意此方法返回值已经包含scale和rotation。
         *
         * @param bounds 可以放置结果的<code>egret.Rectangle</code>实例。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        getLayoutBounds(bounds: egret.Rectangle): void;
        /**
         * @language en_US
         * Get the element's preferred bounds。
         * Commonly used in the <code>measure()</code> method in parent container.<p/>
         * Priority: explicit > measure.<p/>
         * The result of this method is contains <code>scale</code> and <code>rotation</code>.
         *
         * @param bounds the instance of <code>egret.Rectangle</code> can set result.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 获取组件的首选尺寸,常用于父级的<code>measure()</code>方法中。<p/>
         * 按照：外部显式设置尺寸>测量尺寸 的优先级顺序返回尺寸。<p/>
         * 注意此方法返回值已经包含scale和rotation。
         *
         * @param bounds 可以放置结果的<code>egret.Rectangle</code>实例。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        getPreferredBounds(bounds: egret.Rectangle): void;
    }
}
declare module swan.sys {
    const enum UIKeys {
        left = 0,
        right = 1,
        top = 2,
        bottom = 3,
        horizontalCenter = 4,
        verticalCenter = 5,
        percentWidth = 6,
        percentHeight = 7,
        explicitWidth = 8,
        explicitHeight = 9,
        width = 10,
        height = 11,
        minWidth = 12,
        maxWidth = 13,
        minHeight = 14,
        maxHeight = 15,
        measuredWidth = 16,
        measuredHeight = 17,
        oldPreferWidth = 18,
        oldPreferHeight = 19,
        oldX = 20,
        oldY = 21,
        oldWidth = 22,
        oldHeight = 23,
        invalidatePropertiesFlag = 24,
        invalidateSizeFlag = 25,
        invalidateDisplayListFlag = 26,
        layoutWidthExplicitlySet = 27,
        layoutHeightExplicitlySet = 28,
        initialized = 29,
    }
    /**
     * @private
     * Swan 显示对象基类模板。仅作为 UIComponent 的默认实现，为lark.sys.implemenetUIComponenet()方法提供代码模板。
     * 注意：在此类里不允许直接使用super关键字访问父类方法。一律使用this.$super属性访问。
     */
    class UIComponentImpl extends egret.DisplayObject implements swan.UIComponent {
        /**
         * @private
         * 构造函数
         */
        constructor();
        /**
         * @private
         * UIComponentImpl 定义的所有变量请不要添加任何初始值，必须统一在此处初始化。
         */
        private initializeUIValues();
        /**
         * @private
         * 子类覆盖此方法可以执行一些初始化子项操作。此方法仅在组件第一次添加到舞台时回调一次。
         * 请务必调用super.createChildren()以完成父类组件的初始化
         */
        protected createChildren(): void;
        /**
         * @private
         * 子项创建完成,此方法在createChildren()之后执行。
         */
        protected childrenCreated(): void;
        /**
         * @private
         * 提交属性，子类在调用完invalidateProperties()方法后，应覆盖此方法以应用属性
         */
        protected commitProperties(): void;
        /**
         * @private
         * 测量组件尺寸
         */
        protected measure(): void;
        /**
         * @private
         * 更新显示列表
         */
        protected updateDisplayList(unscaledWidth: number, unscaledHeight: number): void;
        $super: any;
        $UIComponent: Object;
        $includeInLayout: boolean;
        /**
         * @private
         * 指定此组件是否包含在父容器的布局中。若为false，则父级容器在测量和布局阶段都忽略此组件。默认值为true。
         * 注意，visible属性与此属性不同，设置visible为false，父级容器仍会对其布局。
         */
        includeInLayout: boolean;
        /**
         * @private
         *
         * @param stage
         * @param nestLevel
         */
        $onAddToStage(stage: egret.Stage, nestLevel: number): void;
        /**
         * @private
         * 检查属性失效标记并应用
         */
        private checkInvalidateFlag(event?);
        /**
         * @private
         * 距父级容器离左边距离
         */
        left: number;
        /**
         * @private
         * 距父级容器右边距离
         */
        right: number;
        /**
         * @private
         * 距父级容器顶部距离
         */
        top: number;
        /**
         * @private
         * 距父级容器底部距离
         */
        bottom: number;
        /**
         * @private
         * 在父级容器中距水平中心位置的距离
         */
        horizontalCenter: number;
        /**
         * @private
         * 在父级容器中距竖直中心位置的距离
         */
        verticalCenter: number;
        /**
         * @private
         * 相对父级容器宽度的百分比
         */
        percentWidth: number;
        /**
         * @private
         * 相对父级容器高度的百分比
         */
        percentHeight: number;
        /**
         * @private
         * 外部显式指定的宽度
         */
        explicitWidth: number;
        /**
         * @private
         * 外部显式指定的高度
         */
        explicitHeight: number;
        /**
         * @private
         * 组件宽度,默认值为lark.NaN,设置为NaN将使用组件的measure()方法自动计算尺寸
         */
        $getWidth(): number;
        /**
         * @private
         *
         * @param value
         */
        $setWidth(value: number): void;
        /**
         * @private
         * 立即验证自身的尺寸。
         */
        private validateSizeNow();
        /**
         * @private
         * 组件高度,默认值为NaN,设置为NaN将使用组件的measure()方法自动计算尺寸
         */
        $getHeight(): number;
        /**
         * @private
         *
         * @param value
         */
        $setHeight(value: number): void;
        /**
         * @private
         *
         * @param value
         * @returns
         */
        $setScaleX(value: number): boolean;
        /**
         * @private
         *
         * @param value
         * @returns
         */
        $setScaleY(value: number): boolean;
        /**
         * @private
         * 组件的最小宽度,此属性设置为大于maxWidth的值时无效。同时影响测量和自动布局的尺寸。
         */
        minWidth: number;
        /**
         * @private
         * 组件的最大高度。同时影响测量和自动布局的尺寸。
         */
        maxWidth: number;
        /**
         * @private
         * 组件的最小高度,此属性设置为大于maxHeight的值时无效。同时影响测量和自动布局的尺寸。
         */
        minHeight: number;
        /**
         * @private
         * 组件的最大高度,同时影响测量和自动布局的尺寸。
         */
        maxHeight: number;
        /**
         * @private
         * 设置测量结果。
         * @param width 测量宽度
         * @param height 测量高度
         */
        setMeasuredSize(width: number, height: number): void;
        /**
         * @private
         * 设置组件的宽高。此方法不同于直接设置width,height属性，
         * 不会影响显式标记尺寸属性
         */
        private setActualSize(w, h);
        /**
         * @private
         *
         * @param value
         * @returns
         */
        $setX(value: number): boolean;
        /**
         * @private
         *
         * @param value
         * @returns
         */
        $setY(value: number): boolean;
        /**
         * @private
         * 标记属性失效
         */
        invalidateProperties(): void;
        /**
         * @private
         * 验证组件的属性
         */
        validateProperties(): void;
        /**
         * @private
         * 标记提交过需要验证组件尺寸
         */
        invalidateSize(): void;
        /**
         * @private
         * 验证组件的尺寸
         */
        validateSize(recursive?: boolean): void;
        /**
         * @private
         * 测量组件尺寸，返回尺寸是否发生变化
         */
        private measureSizes();
        /**
         * @private
         * 标记需要验证显示列表
         */
        invalidateDisplayList(): void;
        /**
         * @private
         * 验证子项的位置和大小，并绘制其他可视内容
         */
        validateDisplayList(): void;
        /**
         * @private
         * 更新最终的组件宽高
         */
        private updateFinalSize();
        /**
         * @private
         * 立即应用组件及其子项的所有属性
         */
        validateNow(): void;
        /**
         * @private
         * 标记父级容器的尺寸和显示列表为失效
         */
        protected invalidateParentLayout(): void;
        /**
         * @private
         * 设置组件的布局宽高
         */
        setLayoutBoundsSize(layoutWidth: number, layoutHeight: number): void;
        /**
         * @private
         * 设置组件的布局位置
         */
        setLayoutBoundsPosition(x: number, y: number): void;
        /**
         * @private
         * 组件的布局尺寸,常用于父级的updateDisplayList()方法中
         * 按照：布局尺寸>外部显式设置尺寸>测量尺寸 的优先级顺序返回尺寸,
         * 注意此方法返回值已经包含scale和rotation。
         */
        getLayoutBounds(bounds: egret.Rectangle): void;
        /**
         * @private
         *
         * @returns
         */
        private getPreferredUWidth();
        /**
         * @private
         *
         * @returns
         */
        private getPreferredUHeight();
        /**
         * @private
         * 获取组件的首选尺寸,常用于父级的measure()方法中
         * 按照：外部显式设置尺寸>测量尺寸 的优先级顺序返回尺寸，
         * 注意此方法返回值已经包含scale和rotation。
         */
        getPreferredBounds(bounds: egret.Rectangle): void;
        /**
         * @private
         *
         * @param bounds
         * @param w
         * @param h
         */
        private applyMatrix(bounds, w, h);
    }
    /**
     * @private
     * 拷贝模板类的方法体和属性到目标类上。
     * @param target 目标类
     * @param template 模板类
     */
    function mixin(target: any, template: any): void;
    /**
     * @private
     * 自定义类实现UIComponent的步骤：
     * 1.在自定义类的构造函数里调用：this.initializeUIValues();
     * 2.拷贝UIComponent接口定义的所有内容(包括注释掉的protected函数)到自定义类，将所有子类需要覆盖的方法都声明为空方法体。
     * 3.在定义类结尾的外部调用sys.implementUIComponent()，并传入自定义类。
     * 4.若覆盖了某个UIComponent的方法，需要手动调用UIComponentImpl.prototype["方法名"].call(this);
     * @param descendant 自定义的UIComponent子类
     * @param base 自定义子类继承的父类
     */
    function implementUIComponent(descendant: any, base: any, isContainer?: boolean): void;
}

declare module swan {
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
    class State extends egret.HashObject {
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
        constructor(name: string, overrides: IOverride[]);
        /**
         * @language en_US
         * The name of the view state.
         * State names must be unique for a given component.
         * This property must be set.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 视图状态的名称。给定组件的状态名称必须唯一。必须设置此属性。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        name: string;
        /**
         * @language en_US
         * The overrides for this view state, as an Array of objects that implement
         * the IOverride interface. These overrides are applied in order when the
         * state is entered, and removed in reverse order when the state is exited.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 该视图状态的覆盖，表现为实现 IOverride 接口的对象的数组。
         * 这些覆盖在进入状态时按顺序应用，在退出状态时按相反的顺序删除。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        overrides: IOverride[];
        /**
         * @language en_US
         * The state groups that this view state belongs to as an array of String.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 此视图状态作为 string 数组所属的状态组。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        stateGroups: string[];
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
        initialize(host: any, stage: egret.Stage): void;
    }
}
declare module swan.sys {
    /**
     * @private
     */
    class StateClient {
        /**
         * @private
         */
        $stateValues: StateValues;
        /**
         * @private
         * 为此组件定义的视图状态。
         */
        states: swan.State[];
        /**
         * @private
         * 组件的当前视图状态。将其设置为 "" 或 null 可将组件重置回其基本状态。
         */
        currentState: string;
        /**
         * @private
         * 应用当前的视图状态。子类覆盖此方法在视图状态发生改变时执行相应更新操作。
         */
        private commitCurrentState();
        /**
         * @private
         * 返回是否含有指定名称的视图状态
         * @param stateName 要检查的视图状态名称
         */
        hasState(stateName: string): boolean;
        /**
         * @private
         * 初始化所有视图状态
         */
        private initializeStates(stage);
    }
    /**
     * @private
     */
    class StateValues {
        /**
         * @private
         */
        intialized: boolean;
        /**
         * @private
         */
        statesMap: any;
        /**
         * @private
         */
        states: swan.State[];
        /**
         * @private
         */
        oldState: string;
        /**
         * @private
         */
        explicitState: string;
        /**
         * @private
         */
        currentState: string;
        /**
         * @private
         */
        parent: egret.DisplayObjectContainer;
        /**
         * @private
         */
        stateIsDirty: boolean;
    }
}

declare module swan {
    /**
     * @language en_US
     * Register a property for a class definition in running,
     * so that the Swan can get type of property accurate when parsing a EXML.
     * This need not be called directly in most of time. Only when you have a custom UI
     * component need to be described in EXML, you may invoke this method explicitly.
     *
     * Contains no following：
     * When the property is the basic data type(boolean, number, string or Array), you only need set a correct initial value
     * for he custom property then the EXML parser can get the correct property type in running.
     *
     * If you can not set the correct initial value (such as <code>null</code>), the EXML parser will treat this property as
     * <code>string</code>. If there is no inital value, Swan will throw an error. But you can invoked this method to register
     * a property in this case.
     *
     *
     * @param classDefinition The class definition need to be registered.
     * @param property The property need to be registered. Note that the property
     * name cannot start with "_" or "$".
     * @param type The type need to be registered,
     * such as “boolean","number","string","Array","egret.Rectangle" and so on.
     * @param asDefault Whether register this property as a default property of component.
     * One component can register only on default property. And the default property can be spare in an EXML.
     *
     * @example：
     * <pre>
     *      <s:Scroller>
     *          <s:viewport>
     *          <s:Group/>
     *          </e:viewport>
     *      </e:Scroller>
     * </pre>
     * Cuz <code>viewport</code> is the default property of Scroller. So you can write as follow:
     * <pre>
     *      <s:Scroller>
     *          <s:Group/>
     *      </e:Scroller>
     * </pre>
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     */
    /**
     * @language zh_CN
     * 为一个类定义注册运行时属性类型，以便运行时的EXML文件解析过程能获取准确的属性类型。大多数情况下，您都不需要手动调用此方法显式注册属性类型。
     * 仅当您有一个自定义的 UI 组件，需要在EXML中用标签描述时可能需要显式注册，但以下情况除外：
     * 当属性类型为基本数据类型：boolean,number,string,Array这四种其中之一时，您只需要为自定义的属性赋值上正确的初始值，
     * 运行时EXML解析器就能通过初始值自动分析出正确的属性类型。
     * 若您无法为属性赋值上正确的初始值时(有初始值，比如null),运行时EXML解析器会把此属性当做string来处理，若完全没有初始值，将会报错找不到节点属性，
     * 这种情况下可以手动调用此方法显式注册属性类型。
     *
     * @param classDefinition 要注册的类定义。
     * @param property 要注册的属性,注意属性名不能以 _ 或 $ 符开头。
     * @param type 要注册的类型,例如：“boolean","number","string","Array","egret.Rectangle"
     * @param asDefault 是否将此属性注册为组件的默认属性,一个组件只可以设置一个默认属性。注册了组件默认属性后，在EXML中可以使用省略属性节点的写法，
     * @example：
     * <pre>
     * <s:Scroller>
     *     <s:viewport>
     *         <s:Group/>
     *     </e:viewport>
     * </e:Scroller>
     * </pre>
     * 因为 viewport 已经注册为 Scroller 的默认属性，上面的例子可以等效为：
     * <pre>
     * <s:Scroller>
     *     <s:Group/>
     * </e:Scroller>
     * </pre>
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     */
    function registerProperty(classDefinition: any, property: string, type: string, asDefault?: boolean): void;
}

declare module swan.sys {
    const enum ComponentKeys {
        hostComponentKey = 0,
        skinName = 1,
        explicitState = 2,
        enabled = 3,
        stateIsDirty = 4,
        skinNameExplicitlySet = 5,
        explicitTouchChildren = 6,
        explicitTouchEnabled = 7,
        skin = 8,
    }
}
declare module swan {
    /**
     * @language en_US
     *
     * @copy swan.UIComponents
     * @event egret.Event.COMPLETE Emit when <code>skinName</code> property is set the path of external EXML file and the EXML file is resolved.
     *
     * @includeExample examples/Samples/src/extension/swan/components/ComponentExample.ts
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     */
    /**
     * @language zh_CN
     *
     * @copy swan.UIComponents
     * @event egret.Event.COMPLETE 当设置skinName为外部exml文件路径时，加载并完成EXML解析后调度。
     *
     * @includeExample examples/Samples/src/extension/swan/components/ComponentExample.ts
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     */
    class Component extends egret.DisplayObjectContainer implements UIComponent {
        /**
         * Constructor.
         *
         * @language en_US
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * 构造函数。
         *
         * @language zh_CN
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        constructor();
        $Component: Object;
        /**
         * @language en_US
         * A identifier of host component which can determine only one component names.
         * Usually used for quering a default skin name in theme.
         * @default null
         * @see swan.Theme#getSkinName()
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 主机组件标识符。用于唯一确定一个组件的名称。通常用于在主题中查询默认皮肤名。
         *
         * @default null
         * @see swan.Theme#getSkinName()
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        hostComponentKey: string;
        /**
         * @language en_US
         * Identifier of skin. Valid values: class definition of skin,
         * class name of skin, instance of skin, EXML or external EXML file path.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 皮肤标识符。有效值可为：皮肤类定义,皮肤类名,皮肤实例,EXML文件内容,或外部EXML文件路径，
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        skinName: any;
        /**
         * @private
         * 解析skinName
         */
        $parseSkinName(): void;
        /**
         * @private
         * @param clazz
         * @param url
         */
        private onExmlLoaded(clazz, url);
        /**
         * @language en_US
         * The instance of the skin class for this component instance.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 皮肤对象实例。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        skin: Skin;
        /**
         * @language en_US
         * Setter for the skin instance.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 设置皮肤实例
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected setSkin(skin: Skin): void;
        /**
         * @language en_US
         * Find the skin parts in the skin class and assign them to the properties of the component.
         * You do not call this method directly. This method will be invoked automatically when using a EXML as skin.
         * The ID for a tag in an EXML will be passed in as <code>partName</code>, and the instance of the tag will be
         * passed in as <code>instance</code>.
         * @param partName name of a skin part
         * @param instance instance of a skin part
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 关联一个对象到逻辑组件的指定皮肤部件上。通常您不需要手动调用此方法，当使用EXML文件作为组件皮肤，此方法将会被自动调用。
         * 在运行时，EXML文件内声明的id名称将作为此方法的partName参数，而id所对应的节点对象，将作为此方法的instance参数被依次传入。
         * @param partName 皮肤部件名称
         * @param instance 皮肤部件实例
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        setSkinPart(partName: string, instance: any): void;
        /**
         * @language en_US
         * Called when a skin part is added.
         * You do not call this method directly.
         * Swan calls it automatically when it calls the <code>setSkinPart()</code> method.<p/>
         *
         * Override this function to attach behavior to the part, such as add event listener or
         * assign property values cached.
         * @param partName name of a skin part to add.
         * @param instance instance of a skin part to add.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 添加皮肤部件时调用。
         * 您无需直接调用此方法。
         * Swan 会在调用 setSkinPart()方法时自动调用此方法。<p/>
         *
         * 子类覆盖此方法，以在皮肤部件第一次附加时对其执行一些初始化操作，例如添加事件监听，赋值缓存的属性值等。
         * @param partName 要附加的皮肤部件名称。
         * @param instance 要附加的皮肤部件实例。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected partAdded(partName: string, instance: any): void;
        /**
         * @language en_US
         * Called when an instance of a skin part is being removed.
         * You do not call this method directly.
         * Swan calls it automatically when it calls the <code>setSkinPart()</code> method.<p/>
         *
         * Override this function to clean behavior of the part, such as remove event listener or
         * disconnect the cache reference
         * @param partName name of a skin part to remove.
         * @param instance instance of a skin part to remove.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 正删除外观部件的实例时调用。
         * 您无需直接调用此方法。
         * Swan 会在调用 setSkinPart()方法时自动调用此方法。<p/>
         *
         * 子类覆盖此方法，以在皮肤部件从逻辑组件卸载时对其执行一些清理操作，例如移除事件监听，断开缓存的引用等。
         * @param partName 要卸载的皮肤部件名称
         * @param instance 要卸载的皮肤部件实例
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected partRemoved(partName: string, instance: any): void;
        /**
         * @private
         *
         * @param value
         */
        $setTouchChildren(value: boolean): void;
        /**
         * @private
         *
         * @param value
         */
        $setTouchEnabled(value: boolean): void;
        /**
         * @language en_US
         * Whether the component can accept user interaction.
         * After setting the <code>enabled</code> property to <code>false</code>, components will disabled touch event
         * (set <code>touchEnabled</code> and <code>touchChildren</code> to false) and set state of skin to "disabled".
         *
         * @default true
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 组件是否可以接受用户交互。
         * 将 enabled 属性设置为 false 后，
         * 组件会自动禁用触摸事件(将 touchEnabled 和 touchChildren 同时设置为 false)，
         * 部分组件可能还会将皮肤的视图状态设置为"disabled",使其所有子项的颜色变暗。
         *
         * @default true
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        enabled: boolean;
        /**
         * @private
         *
         * @param value
         */
        $setEnabled(value: boolean): void;
        /**
         * @language en_US
         * The current view state of the component. When you use this property to set a component's state,
         * Swan will explicit update state of skin and ignore the return of <code>getCurrentState()</code>.
         *
         * Set to <code>""</code> or <code>null</code> to reset the component back to its base state.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 组件的当前视图状态。显式设置此属性，
         * 将采用显式设置的值去更新皮肤状态，而忽略组件内部 getCurrentState() 方法返回的值。
         *
         * 将其设置为 "" 或 null 可将取消组件外部显式设置的视图状态名称，从而采用内部 getCurrentState() 方法返回的状态。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        currentState: string;
        /**
         * @language en_US
         * Marks the component so that the new state of the skin is set during a later screen update.
         * A subclass of SkinnableComponent must override <code>getCurrentState()</code> to return a value.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 标记组件当前的视图状态失效，调用此方法后，子类应该覆盖 <code>getCurrentState()</code> 方法来返回当前的视图状态名称。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        invalidateState(): void;
        /**
         * @language en_US
         * Returns the name of the state to be applied to the skin.<p/>
         * A subclass of SkinnableComponent must override this method to return a value.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 返回组件当前的皮肤状态名称,子类覆盖此方法定义各种状态名
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected getCurrentState(): string;
        /**
         * @private
         * UIComponentImpl 定义的所有变量请不要添加任何初始值，必须统一在此处初始化。
         */
        private initializeUIValues;
        /**
         * @language en_US
         * Create child objects of the component. This is an advanced method that you might override
         * when creating a subclass of Component. This method will be called once it be added to stage.
         * You must invoke <code>super.createChildren()</code> to complete initialization of the parent class
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 子类覆盖此方法可以执行一些初始化子项操作。此方法仅在组件第一次添加到舞台时回调一次。
         * 请务必调用super.createChildren()以完成父类组件的初始化
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected createChildren(): void;
        /**
         * @language en_US
         * Performs any final processing after child objects are created.
         * This is an advanced method that you might override
         * when creating a subclass of Component.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 创建子对象后执行任何最终处理。此方法在创建 Component 的子类时覆盖。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected childrenCreated(): void;
        /**
         * @language en_US
         * Processes the properties set on the component.
         * You can override this method when creating a subclass of Component.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 提交属性，子类在调用完invalidateProperties()方法后，应覆盖此方法以应用属性
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected commitProperties(): void;
        /**
         * @language en_US
         * Calculates the default size.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 测量组件尺寸
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected measure(): void;
        /**
         * @language en_US
         * Draws the object and/or sizes and positions its children.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 更新显示列表
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected updateDisplayList(unscaledWidth: number, unscaledHeight: number): void;
        /**
         * @language en_US
         * Method to invalidate parent size and display list if
         * this object affects its layout (includeInLayout is true).
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 此对象影响其布局时（includeInLayout 为 true），使父代大小和显示列表失效的方法。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected invalidateParentLayout(): void;
        /**
         * @private
         */
        $UIComponent: Object;
        /**
         * @private
         */
        $includeInLayout: boolean;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        includeInLayout: boolean;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        left: number;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        right: number;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        top: number;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        bottom: number;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        horizontalCenter: number;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        verticalCenter: number;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        percentWidth: number;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        percentHeight: number;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        explicitWidth: number;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        explicitHeight: number;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        minWidth: number;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        maxWidth: number;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        minHeight: number;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        maxHeight: number;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        setMeasuredSize(width: number, height: number): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        invalidateProperties(): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        validateProperties(): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        invalidateSize(): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        validateSize(recursive?: boolean): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        invalidateDisplayList(): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        validateDisplayList(): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        validateNow(): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        setLayoutBoundsSize(layoutWidth: number, layoutHeight: number): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        setLayoutBoundsPosition(x: number, y: number): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        getLayoutBounds(bounds: egret.Rectangle): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        getPreferredBounds(bounds: egret.Rectangle): void;
    }
}

declare module swan {
    /**
     * @language en_US
     * The Group class is defines the base class for layout component.
     * If the contents of the sub items are too large to scroll to show, you can wrap a Scroller component outside the
     * group (Give the instance of Group to <code>viewport</code> property of Scroller component).
     * The scroller component can adds a scrolling touch operation for the Group.
     *
     * @includeExample examples/Samples/src/extension/swan/components/GroupExample.ts
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     */
    /**
     * @language zh_CN
     * Group 是自动布局的容器基类。如果包含的子项内容太大需要滚动显示，可以在在 Group 外部包裹一层 Scroller 组件
     * (将 Group 实例赋值给 Scroller 组件的 viewport 属性)。Scroller 会为 Group 添加滚动的触摸操作功能，并显示垂直或水平的滚动条。
     *
     * @includeExample examples/Samples/src/extension/swan/components/GroupExample.ts
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     */
    class Group extends egret.DisplayObjectContainer implements IViewport {
        /**
         * @language en_US
         * Constructor.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 构造函数。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        constructor();
        $Group: Object;
        /**
         * @language en_US
         * This property is Usually invoked in resolving an EXML for adding multiple children quickly.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 此属性通常在 EXML 的解析器中调用，便于快速添加多个子项。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        elementsContent: egret.DisplayObject[];
        /**
         * @private
         */
        $layout: LayoutBase;
        /**
         * @language en_US
         * The layout object for this container.
         * This object is responsible for the measurement and layout of
         * the UIcomponent in the container.
         *
         * @default swan.BasicLayout
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 此容器的布局对象。
         *
         * s@default swan.BasicLayout
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        layout: LayoutBase;
        /**
         * @private
         *
         * @param value
         */
        $setLayout(value: LayoutBase): void;
        /**
         * @copy swan.IViewport#contentWidth
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        contentWidth: number;
        /**
         * @copy swan.IViewport#contentHeight
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        contentHeight: number;
        /**
         * @language en_US
         *
         * Sets the <code>contentWidth</code> and <code>contentHeight</code>
         * properties.
         *
         * This method is intended for layout class developers who should
         * call it from <code>updateDisplayList()</code> methods.
         *
         * @param width The new value of <code>contentWidth</code>.
         * @param height The new value of <code>contentHeight</code>.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         *
         * 设置 <code>contentWidth</code> 和 <code>contentHeight</code> 属性。
         * 此方法由布局来调用，开发者应该在布局类的 <code>updateDisplayList()</code> 方法中对其进行调用。
         *
         * @param width <code>contentWidth</code> 的新值。
         * @param height <code>contentHeight</code> 的新值。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        setContentSize(width: number, height: number): void;
        /**
         * @copy swan.IViewport#scrollEnabled
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        scrollEnabled: boolean;
        /**
         * @copy swan.IViewport#scrollH
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        scrollH: number;
        /**
         * @copy swan.IViewport#scrollV
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        scrollV: number;
        /**
         * @private
         *
         * @returns
         */
        private updateScrollRect();
        /**
         * @language en_US
         * The number of layout element in this container.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 布局元素子项的数量。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        numElements: number;
        /**
         * @language en_US
         * Returns the layout element at the specified index.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 获取一个布局元素子项。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        getElementAt(index: number): egret.DisplayObject;
        /**
         * @language en_US
         * Set the index range of the sub Visual element in container which support virtual layout.
         * This method is invalid in container which do not support virtual layout.
         * This method is usually invoked before layout. Override this method to release the invisible elements.
         *
         * @param startIndex the start index of sub visual elements（include）
         * @param endIndex the end index of sub visual elements（include）
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 在支持虚拟布局的容器中，设置容器内可见的子元素索引范围。此方法在不支持虚拟布局的容器中无效。
         * 通常在即将重新布局子项之前会被调用一次，容器覆盖此方法提前释放已经不可见的子元素。
         *
         * @param startIndex 可视元素起始索引（包括）
         * @param endIndex 可视元素结束索引（包括）
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        setVirtualElementIndicesInView(startIndex: number, endIndex: number): void;
        /**
         * @language en_US
         * When <code>true</code>, this property
         * ensures that the entire bounds of the Group respond to
         * touch events such as begin.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 触摸组件的背景透明区域是否可以穿透。设置为true表示可以穿透，反之透明区域也会响应触摸事件。默认 false。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        touchThrough: boolean;
        /**
         * @private
         */
        $hitTest(stageX: number, stageY: number): egret.DisplayObject;
        /**
         * @private
         */
        $stateValues: sys.StateValues;
        /**
         * @language en_US
         * The list of state for this component.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 为此组件定义的视图状态。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        states: State[];
        /**
         * @copy swan.Component#currentState
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        currentState: string;
        /**
         * @copy swan.Skin#hasState()
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        hasState: (stateName: string) => boolean;
        /**
         * @private
         * 初始化所有视图状态
         */
        private initializeStates;
        /**
         * @private
         * 应用当前的视图状态。子类覆盖此方法在视图状态发生改变时执行相应更新操作。
         */
        private commitCurrentState;
        /**
         * @copy swan.Component#invalidateState()
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        invalidateState(): void;
        /**
         * @copy swan.Component#getCurrentState()
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected getCurrentState(): string;
        /**
         * @private
         * UIComponentImpl 定义的所有变量请不要添加任何初始值，必须统一在此处初始化。
         */
        private initializeUIValues;
        /**
         * @copy swan.Component#createChildren()
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected createChildren(): void;
        /**
         * @copy swan.Component#childrenCreated()
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected childrenCreated(): void;
        /**
         * @copy swan.Component#commitProperties()
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected commitProperties(): void;
        /**
         * @copy swan.Component#measure()
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected measure(): void;
        /**
         * @copy swan.Component#updateDisplayList()
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected updateDisplayList(unscaledWidth: number, unscaledHeight: number): void;
        /**
         * @copy swan.Component#invalidateParentLayout()
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected invalidateParentLayout(): void;
        /**
         * @private
         */
        $UIComponent: Object;
        /**
         * @private
         */
        $includeInLayout: boolean;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        includeInLayout: boolean;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        left: number;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        right: number;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        top: number;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        bottom: number;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        horizontalCenter: number;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        verticalCenter: number;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        percentWidth: number;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        percentHeight: number;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        explicitWidth: number;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        explicitHeight: number;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        minWidth: number;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        maxWidth: number;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        minHeight: number;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        maxHeight: number;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        setMeasuredSize(width: number, height: number): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        invalidateProperties(): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        validateProperties(): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        invalidateSize(): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        validateSize(recursive?: boolean): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        invalidateDisplayList(): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        validateDisplayList(): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        validateNow(): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        setLayoutBoundsSize(layoutWidth: number, layoutHeight: number): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        setLayoutBoundsPosition(x: number, y: number): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        getLayoutBounds(bounds: egret.Rectangle): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        getPreferredBounds(bounds: egret.Rectangle): void;
    }
}

declare module swan {
    /**
     * @language en_US
     * Register a property of an instance is can be bound.
     * This method is ususally invoked by Watcher class.
     *
     * @param instance the instance to be registered.
     * @param property the property of specified instance to be registered.
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     */
    /**
     * @language zh_CN
     * 标记实例的一个属性是可绑定的,此方法通常由 Watcher 类调用。
     *
     * @param instance 要标记的实例
     * @param property 可绑定的属性。
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     */
    function registerBindable(instance: any, property: string): void;
}

declare module swan {
    /**
     * @language en_US
     * The Button component is a commonly used rectangular button.
     * The Button component looks like it can be pressed.
     * The default skin has a text label and a icon display object.
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/components/ButtonExample.ts
     */
    /**
     * @language zh_CN
     * Button 组件是常用的矩形按钮。Button 组件看起来可以按压。默认外观具有一个文本标签和图标显示对象。
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/components/ButtonExample.ts
     */
    class Button extends Component {
        /**
         * @language en_US
         * Constructor.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 创建一个按钮实例
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        constructor();
        /**
         * @language en_US
         * [SkinPart] A skin part that defines the label of the button.
         * @skinPart
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * [SkinPart] 按钮上的文本标签。
         * @skinPart
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        labelDisplay: IDisplayText;
        /**
         * @private
         */
        private _label;
        /**
         * @language en_US
         * Text to appear on the Button control.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 要在按钮上显示的文本。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        label: string;
        /**
         * @language en_US
         * [SkinPart] A skin part that defines an optional icon for the button.
         * @skinPart
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * [SkinPart] 按钮上的图标显示对象。
         * @skinPart
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        iconDisplay: Image;
        /**
         * @private
         */
        private _icon;
        /**
         * @language en_US
         * Icon to appear on the Button control.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 要在按钮上显示的图标数据
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        icon: string | egret.Texture;
        /**
         * @private
         * 指示第一次分派 TouchEvent.TOUCH_BEGIN 时，触摸点是否在按钮上。
         */
        private touchCaptured;
        /**
         * @language en_US
         * This method handles the touch events
         * @param  The <code>egret.TouchEvent</code> object.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 触碰事件处理。
         * @param event 事件 <code>egret.TouchEvent</code> 的对象。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected onTouchBegin(event: egret.TouchEvent): void;
        /**
         * @private
         * 舞台上触摸弹起事件
         */
        private onStageTouchEnd(event);
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected getCurrentState(): string;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected partAdded(partName: string, instance: any): void;
        /**
         * @language en_US
         * This method is called when handling a <code>egret.TouchEvent.TOUCH_END</code> event
         * when the user touches on the button. It is only called when the button
         * is the target and when <code>touchCaptured</code> is <code>true</code>.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 当在用户单击按钮之后处理 <code>egret.TouchEvent.TOUCH_END</code> 事件时，将调用此方法。
         * 仅当以按钮为目标，并且 <code>touchCaptured</code> 为 <code>true</code> 时，才会调用此方法。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected buttonReleased(): void;
    }
}

declare module swan {
    /**
     * @language en_US
     * The DataGroup class is the base container class for data items.
     * The DataGroup class converts data items to visual elements for display.
     * While this container can hold visual elements, it is often used only
     * to hold data items as children.
     *
     * @see swan.Group
     *
     * @includeExample examples/Samples/src/extension/swan/components/DataGroupExample.ts
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     */
    /**
     * @language zh_CN
     * DataGroup 类将数据项目转换为可视元素以进行显示。
     * 尽管此容器可以包含可视元素，但它通常仅用于包含作为子项的数据项目。
     *
     * @see swan.Group
     *
     * @includeExample examples/Samples/src/extension/swan/components/DataGroupExample.ts
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     */
    class DataGroup extends Group {
        /**
         * @language en_US
         * Constructor.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 构造函数。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        constructor();
        $DataGroup: Object;
        /**
         * @copy swan.LayoutBase#useVirtualLayout
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        useVirtualLayout: boolean;
        /**
         * @private
         *
         * @param value
         */
        $setLayout(value: LayoutBase): void;
        /**
         * @private
         * 是否使用虚拟布局标记改变
         */
        private onUseVirtualLayoutChanged(event?);
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        setVirtualElementIndicesInView(startIndex: number, endIndex: number): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        getElementAt(index: number): egret.DisplayObject;
        /**
         * @private
         * 释放指定索引处的项呈示器
         */
        private freeRendererByIndex(index);
        /**
         * @private
         *
         * @param renderer
         */
        private doFreeRenderer(renderer);
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        invalidateSize(): void;
        /**
         * @private
         * 为指定索引创建虚拟的项呈示器
         */
        private createVirtualRenderer(item);
        /**
         * @private
         * 根据rendererClass创建一个Renderer,并添加到显示列表
         */
        private createOneRenderer(rendererClass);
        /**
         * @private
         */
        $dataProviderChanged: boolean;
        /**
         * @private
         */
        $dataProvider: ICollection;
        /**
         * @language en_US
         * The data provider for this DataGroup.
         * It must be an ICollection, such as ArrayCollection
         *
         * @see swan.ICollection
         * @see swan.ArrayCollection
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 列表数据源，请使用实现了ICollection接口的数据类型，例如 ArrayCollection
         *
         * @see swan.ICollection
         * @see swan.ArrayCollection
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        dataProvider: ICollection;
        /**
         * @private
         *
         * @param value
         */
        $setDataProvider(value: ICollection): void;
        /**
         * @private
         * 移除数据源监听
         */
        private removeDataProviderListener();
        /**
         * @language en_US
         * Called when contents within the dataProvider changes.  We will catch certain
         * events and update our children based on that.
         *
         * @param event 事件<code>swan.CollectionEvent</code>的对象。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 数据源改变事件处理。
         *
         * @param event 事件<code>swan.CollectionEvent</code>的对象。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected onCollectionChange(event: CollectionEvent): void;
        /**
         * @private
         * 数据源添加项目事件处理
         */
        private itemAddedHandler(items, index);
        /**
         * @private
         * 数据源移除项目事件处理
         */
        private itemRemovedHandler(items, location);
        /**
         * @language en_US
         * Adds the item for the specified dataProvider item to this DataGroup.
         *
         * This method is called as needed by the DataGroup implementation,
         * it should not be called directly.
         *
         * @param item The item that was added, the value of dataProvider[index].
         * @param index The index where the dataProvider item was added.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 添加一个指定的数据到数据源。
         *
         * 这个方法不应该由开发者直接调用，而用于本类自动内调用。
         *
         * @param item 添加的数据项。
         * @param index 被添加到的索引。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected itemAdded(item: any, index: number): void;
        /**
         * @language en_US
         * Removes the itemRenderer for the specified dataProvider item from this DataGroup.
         *
         * This method is called as needed by the DataGroup implementation,
         * it should not be called directly.
         *
         * @param item The item that is being removed.
         * @param index The index of the item that is being removed.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 删除数据源中指定的项。
         *
         * 这个方法不应该由开发者直接调用，而用于本类自动内调用。
         *
         * @param item 移除的数据项。
         * @param index 被移除的索引。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected itemRemoved(item: any, index: number): void;
        /**
         * @private
         * 更新当前所有项的索引
         */
        private resetRenderersIndices();
        /**
         * @private
         * 数据源更新或替换项目事件处理
         */
        private itemUpdatedHandler(item, location);
        /**
         * @private
         * 调整指定项呈示器的索引值
         */
        private resetRendererItemIndex(index);
        /**
         * @language en_US
         * The item renderer to use for data items.
         * The class must implement the IItemRenderer interface.
         * If defined, the <code>itemRendererFunction</code> property
         * takes precedence over this property.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 用于数据项目的项呈示器。您应该直接为此属性赋值自定义类的类定义，而不是一个实例。注意：该类必须实现 IItemRenderer 接口。<br/>
         * rendererClass获取顺序：itemRendererFunction > itemRenderer > 默认ItemRenerer。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        itemRenderer: any;
        /**
         * @language en_US
         * Function that returns an item renderer for a
         * specific item.
         *
         * If defined, this property
         * takes precedence over the <code>itemRenderer</code> property.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 为某个特定数据项返回一个项呈示器类定义的函数。
         * rendererClass获取顺序：itemRendererFunction > itemRenderer > 默认ItemRenerer。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        itemRendererFunction: (item: any) => any;
        /**
         * @private
         * 为特定的数据项返回项呈示器的工厂实例
         */
        private itemToRendererClass(item);
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected createChildren(): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected commitProperties(): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected measure(): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected updateDisplayList(unscaledWidth: number, unscaledHeight: number): void;
        /**
         * @private
         * 确保测量过默认条目大小。
         */
        private ensureTypicalLayoutElement();
        /**
         * @private
         * 测量项呈示器默认尺寸
         */
        private measureRendererSize();
        /**
         * @private
         * 设置项目默认大小
         */
        private setTypicalLayoutRect(rect);
        /**
         * @private
         * 索引到项呈示器的转换数组
         */
        $indexToRenderer: IItemRenderer[];
        /**
         * @private
         * 移除所有项呈示器
         */
        private removeAllRenderers();
        /**
         * @private
         * 为数据项创建项呈示器
         */
        private createRenderers();
        /**
         * @language en_US
         * Updates the renderer for reuse.
         * This method first prepares the item
         * renderer for reuse by cleaning out any stale properties
         * as well as updating it with new properties.<p/>
         *
         * The last thing this method should do is set the <code>data</code> property
         * of the item renderer.
         *
         * @param renderer The item renderer.
         * @param itemIndex The index of the data in the data provider.
         * @param data The data object this item renderer is representing.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 此方法首先会准备项呈示器以重用，方法是清除任何旧属性，同时使用新属性进行更新。<p/>
         *
         * 最后，此方法应对项呈示器设置 data 属性。
         *
         * @param renderer 项呈示器。
         * @param itemIndex 数据提供程序中的数据索引。
         * @param data 此项呈示器正在表示的数据对象。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        updateRenderer(renderer: IItemRenderer, itemIndex: number, data: any): IItemRenderer;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        numElements: number;
        /**
         * @language en_US
         * Adds the itemRenderer for the specified dataProvider item to this DataGroup.
         *
         * This method is called as needed by the DataGroup implementation,
         * it should not be called directly.
         *
         * @param renderer The renderer that was added.
         * @param index The index where the dataProvider item was added.
         * @param item The item that was added, the value of dataProvider[index].
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 项呈示器被添加.
         *
         * 这个方法不能直接调用，它是由该类自身自动调用的。
         *
         * @param renderer 添加的项呈示器
         * @param index 项呈示器的索引
         * @param item 项呈示器对应的数据
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected rendererAdded(renderer: IItemRenderer, index: number, item: any): void;
        /**
         * @language en_US
         * Removes the itemRenderer for the specified dataProvider item from this DataGroup.
         *
         * This method is called as needed by the DataGroup implementation,
         * it should not be called directly.
         *
         * @param renderer The renderer that is being removed.
         * @param index The index of the item that is being removed.
         * @param item The item that is being removed.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 项呈示器被移除。
         * 这个方法不能直接调用，它是由该类自身自动调用的。
         *
         * @param renderer 移除的项呈示器
         * @param index 项呈示器的索引
         * @param item 项呈示器对应的数据
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected rendererRemoved(renderer: IItemRenderer, index: number, item: any): void;
    }
}

declare module swan.sys {
    const enum RangeKeys {
        maximum = 0,
        maxChanged = 1,
        minimum = 2,
        minChanged = 3,
        value = 4,
        changedValue = 5,
        valueChanged = 6,
        snapInterval = 7,
        snapIntervalChanged = 8,
        explicitSnapInterval = 9,
    }
}
declare module swan {
    /**
     * @language en_US
     * The Range class holds a value and an allowed range for that
     * value, defined by <code>minimum</code> and <code>maximum</code> properties.
     *
     * The <code>value</code> property
     * is always constrained to be between the current <code>minimum</code> and
     * <code>maximum</code>, and the <code>minimum</code>,
     * and <code>maximum</code> are always constrained
     * to be in the proper numerical order, such that
     * <code>(minimum <= value <= maximum)</code> is <code>true</code>.
     *
     * If the value of the <code>snapInterval</code> property is not 0,
     * then the <code>value</code> property is also constrained to be a multiple of
     * <code>snapInterval</code>.
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/components/supportClasses/RangeExample.ts
     */
    /**
     * @language zh_CN
     * 范围选取组件,该组件包含一个值和这个值所允许的最大最小约束范围。
     *
     * <code>value</code>属性的值永远被限制于当前的<code>minimum</code>和
     * <code>maximum</code>之间，并且<code>minimum</code>和 <code>maximum</code>永远按照固定的顺序排列，
     * 即<code>(minimum <= value <= maximum)</code> 为真。
     *
     * 如果<code>snapInterval</code>属性的值不是0，那么<code>value</code>的值也会被<code>snapInterval</code>所约束。
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/components/supportClasses/RangeExample.ts
     */
    class Range extends Component {
        /**
         * @language en_US
         * Constructor.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 创建一个 Range 实例。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        constructor();
        /**
         * @private
         */
        $Range: Object;
        /**
         * @language en_US
         * The maximum valid <code>value</code>.<p/>
         *
         * Changes to the value property are constrained
         * by <code>commitProperties()</code> to be less than or equal to
         * maximum with the <code>nearestValidValue()</code> method.
         *
         * @default 100
         * @see #nearestValidValue()
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 最大有效值。<p/>
         *
         * 规定<code>value</code>属性的值不能够超过的最大值。该修正过程
         * 将在<code>nearestValidValue()</code>方法中进行。
         *
         * @default 100
         * @see #nearestValidValue()
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        maximum: number;
        /**
         * @language en_US
         * The minimum valid <code>value</code>.<p/>
         *
         * Changes to the value property are constrained
         * by <code>commitProperties()</code> to be greater than or equal to
         * minimum with the <code>nearestValidValue()</code> method.
         *
         * @default 0
         * @see #nearestValidValue()
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 最小有效值<p/>
         *
         * 规定<code>value</code>属性的值不能够低于的最小值。该修正过程
         * 将在<code>nearestValidValue()</code>方法中进行。
         *
         * @default 0
         * @see #nearestValidValue()
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        minimum: number;
        /**
         * @language en_US
         * The current value for this range.<p/>
         *
         * Changes to the value property are constrained
         * by <code>commitProperties()</code> to be greater than or equal to
         * the <code>minimum</code> property, less than or equal to the <code>maximum</code> property, and a
         * multiple of <code>snapInterval</code> with the <code>nearestValidValue()</code>
         * method.
         *
         * @default 0
         * @see #setValue()
         * @see #nearestValidValue()
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 此范围的当前值。<p/>
         *
         * 改变的<code>value</code>属性将在<code>commitProperties()</code>方法中被<code>minimum</code>属性
         * 和<code>minimum</code>属性所限制。此修正过程将在<code>nearestValidValue()</code>方法中进行。
         *
         * @default 0
         * @see #setValue()
         * @see #nearestValidValue()
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        value: number;
        /**
         * @private
         *
         * @param newValue
         */
        $setValue(newValue: number): void;
        /**
         * @language en_US
         * The snapInterval property controls the valid values of the <code>value</code> property.
         *
         * If nonzero, valid values are the sum of the <code>minimum</code> and integer multiples
         * of this property, for all sums that are less than or equal to the <code>maximum</code>.<p/>
         *
         * For example, if <code>minimum</code> is 10, <code>maximum</code> is 20, and this property is 3, then the
         * valid values of this Range are 10, 13, 16, 19, and 20.<p/>
         *
         * If the value of this property is zero, then valid values are only constrained
         * to be between minimum and maximum inclusive.
         *
         * @default 1
         * @see #nearestValidValue()
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * snapInterval 属性定义 value 属性的有效值。
         * 如果为非零，则有效值为 minimum 与此属性的整数倍数之和，且小于或等于 maximum。</p>
         *
         * 例如，如果 minimum 为 10，maximum 为 20，而此属性为 3，则可能的有效值为 10、13、16、19 和 20.</p>
         *
         * 如果此属性的值为零，则仅会将有效值约束到介于 minimum 和 maximum 之间（包括两者）。
         *
         * @default 1
         * @see #nearestValidValue()
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        snapInterval: number;
        /**
         * @language en_US
         * Processes the properties set on the component.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 处理对组件设置的属性
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected commitProperties(): void;
        /**
         * @private
         * 修正size到最接近snapInterval的整数倍
         */
        private nearestValidSize(size);
        /**
         * @language en_US
         * Returns the sum of the minimum with an integer multiple of <code>interval</code> that's
         * closest to <code>value</code>, unless <code>value</code> is closer to the maximum limit,
         * in which case the maximum is returned.<p/>
         *
         * If <code>interval</code> is equal to 0, the value is clipped to the minimum and maximum
         * limits.<p/>
         *
         * The valid values for a range are defined by the sum of the <code>minimum</code> property
         * with multiples of the <code>interval</code> and also defined to be less than or equal to the
         * <code>maximum</code> property.
         * The maximum need not be a multiple of <code>snapInterval</code>.<p/>
         *
         * For example, if <code>minimum</code> is equal to 1, <code>maximum</code> is equal to 6,
         * and <code>snapInterval</code> is equal to 2, the valid
         * values for the Range are 1, 3, 5, 6.
         *
         * Similarly, if <code>minimum</code> is equal to 2, <code>maximum</code> is equal to 9,
         * and <code>snapInterval</code> is equal to 1.5, the valid
         * values for the Range are 2, 3.5, 5, 6.5, 8, and 9.
         *
         * @param value The input value.
         * @param interval The value of snapInterval or an integer multiple of snapInterval.
         * @return The valid value that's closest to the input.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 返回 <code>minimum</code> 与最接近 <code>value</code> 的 <code>interval</code> 的整数倍数之和，
         * 除非 <code>value</code> 接近最大值限制的时候会返回 maximum。<p/>
         *
         * 如果 <code>interval</code> 等于 0，则会将该值剪裁到限制的最小值和最大值。<p/>
         *
         * 范围的有效值由 <code>minimum</code> 属性与 <code>interval</code> 的倍数之和决定，
         * 与此同时也要小于等于 <code>maximum</code> 属性。
         * 最大值不能是 <code>snapInterval</code> 属性的倍数。<p/>
         *
         * 例如，如果 <code>minimum</code> 等于 1，<code>maximum</code> 等于 6，且 <code>snapInterval</code> 等于 3，
         * 则 Range 的有效值有 1、2、5、6。
         *
         * 类似地，如果 <code>minimum</code> 等于 2，<code>maximum</code> 等于 9，
         * 且 <code>snapInterval</code> 等于 1.5，则 Range 的有效值有 2、3.5、5、6.5、8 和 9。
         *
         *
         * @param value 输入值。
         * @param interval snapInterval 的值，或 snapInterval 的整数倍数。
         * @return 最近接输入值的有效值。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected nearestValidValue(value: number, interval: number): number;
        /**
         * @language en_US
         * Sets the current value for the <code>value</code> property.<p/>
         *
         * This method assumes that the caller has already used the <code>nearestValidValue()</code> method
         * to constrain the value parameter
         *
         * @param value The new value of the <code>value</code> property.
         * @see #nearestValidValue()
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 设置当前值。<p/>
         *
         * 此方法假定调用者已经使用了 nearestValidValue() 方法来约束 value 参数。
         *
         * @param value value属性的新值
         * @see #nearestValidValue()
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected setValue(value: number): void;
        /**
         * @language en_US
         * Draws the object and/or sizes and positions its children.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 绘制对象和/或设置其子项的大小和位置
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected updateDisplayList(w: number, h: number): void;
        /**
         * @language en_US
         * Update size and visible of skin parts.<p/>
         * Subclasses override this method to update skin parts display based on <code>minimum</code>, <code>maximum</code>
         * and <code>value</code> properties.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 更新皮肤部件（通常为滑块）的大小和可见性。<p/>
         * 子类覆盖此方法以基于 minimum、maximum 和 value 属性更新滑块的大小、位置和可见性。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected updateSkinDisplayList(): void;
    }
}

declare module swan {
    /**
     * @language en_US
     * The LayoutBase class defines the base class for all Spark layouts.
     * To create a custom layout that works with the Spark containers,
     * you must extend <code>LayoutBase</code> or one of its subclasses.
     *
     * <p>Subclasses must implement the <code>updateDisplayList()</code>
     * method, which positions and sizes the <code>target</code> GroupBase's elements, and
     * the <code>measure()</code> method, which calculates the default
     * size of the <code>target</code>.</p>
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     */
    /**
     * @language zh_CN
     * 容器布局基类。若要创建使用 Group 容器的自定义布局，必须扩展 <code>LayoutBase</code> 或其子类之一。
     *
     * <p>子类必须实现 <code>updateDisplayList()</code> 方法
     * （定位 <code>target</code> Group 的子项并调整这些子项的大小）和 <code>measure()</code> 方法
     * （计算 <code>target</code> 的默认大小）。</p>
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     */
    class LayoutBase extends egret.EventDispatcher {
        /**
         * @language en_US
         * Constructor.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 构造函数。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        constructor();
        /**
         * @private
         */
        $target: Group;
        /**
         * @language en_US
         * The Group container whose elements are measured, sized and positioned
         * by this layout.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 此布局将测量其元素、调整其元素的大小并定位其元素的 Group 容器。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        target: Group;
        /**
         * @private
         */
        $useVirtualLayout: boolean;
        /**
         * @language en_US
         * To configure a container to use virtual layout, set the <code>useVirtualLayout</code> property
         * to <code>true</code> for the layout associated with the container.
         * Only DataGroup with layout set to VerticalLayout,
         * HorizontalLayout, or TileLayout supports virtual layout.
         * Layout subclasses that do not support virtualization must prevent changing
         * this property.
         *
         * @default false
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 若要配置容器使用虚拟布局，请为与容器关联的布局的 <code>useVirtualLayout</code> 属性设置为 <code>true</code>。
         * 只有布局设置为 VerticalLayout、HorizontalLayout 或 TileLayout 的 DataGroup 才支持虚拟布局。
         * 不支持虚拟化的布局子类必须禁止更改此属性。
         *
         * @default false
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        useVirtualLayout: boolean;
        /**
         * @private
         */
        $typicalWidth: number;
        /**
         * @private
         */
        $typicalHeight: number;
        /**
         * @language en_US
         * Set this size of a typical element
         *
         * @param width the height of element
         * @param height the width of element
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 设置一个典型元素的大小
         *
         * @param width 元素的宽
         * @param height 元素的高
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        setTypicalSize(width: number, height: number): void;
        /**
         * @language en_US
         * Called when the <code>verticalScrollPosition</code> or
         * <code>horizontalScrollPosition</code> properties change.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * <code>verticalScrollPosition</code> 或 <code>horizontalScrollPosition</code>
         * 属性更改时调用。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        scrollPositionChanged(): void;
        /**
         * @language en_US
         * When <code>useVirtualLayout</code> is <code>true</code>,
         * this method can be used by the layout target
         * to clear cached layout information when the target changes.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 如果 <code>useVirtualLayout</code> 为 <code>true</code>，
         * 则当布局目标改变时，布局目标可以使用此方法来清除已缓存布局信息。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        clearVirtualLayoutCache(): void;
        /**
         * @language en_US
         * Called by the target after a layout element
         * has been added and before the target's size and display list are
         * validated.
         * Layouts that cache per element state, like virtual layouts, can
         * override this method to update their cache.
         *
         * @param index The index of the element that was added.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 在已添加布局元素之后且在验证目标的大小和显示列表之前，由目标调用。
         * 按元素状态缓存的布局（比如虚拟布局）可以覆盖此方法以更新其缓存。
         *
         * @param index 发生改变的子项索引
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        elementAdded(index: number): void;
        /**
         * @language en_US
         * This method must is called by the target after a layout element
         * has been removed and before the target's size and display list are
         * validated.
         * Layouts that cache per element state, like virtual layouts, can
         * override this method to update their cache.
         *
         * @param index The index of the element that was added.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         *
         * 必须在已删除布局元素之后且在验证目标的大小和显示列表之前，由目标调用此方法。
         * 按元素状态缓存的布局（比如虚拟布局）可以覆盖此方法以更新其缓存。
         *
         * @param index 发生改变的子项索引
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        elementRemoved(index: number): void;
        /**
         * @language en_US
         * Return the indices of the element visible within this Group.
         *
         * @return The indices of the visible element.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 返回此 Group 中可见的元素的索引。
         *
         * @return 可见的元素的索引。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        getElementIndicesInView(): number[];
        /**
         * @language en_US
         * Measures the target's default size based on its content.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 基于目标的内容测量其默认大小
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        measure(): void;
        /**
         * @language en_US
         * Sizes and positions the target's elements.
         *
         * @param unscaledWidth Specifies the width of the target, in pixels,
         * in the targets's coordinates.
         *
         * @param unscaledHeight Specifies the height of the component, in pixels,
         * in the target's coordinates.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 调整目标的元素的大小并定位这些元素。
         *
         * @param unscaledWidth 指定目标在目标坐标中的宽度（以像素为单位）。
         * @param unscaledHeight 指定组件在目标坐标中的高度（以像素为单位）。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        updateDisplayList(width: number, height: number): void;
    }
}

declare module swan {
    /**
     * @language en_US
     * The ToggleButton component defines a toggle button.
     * Clicking the button toggles it between the up and an down states.
     * If you click the button while it is in the up state,
     * it toggles to the down state. You must click the button again
     * to toggle it back to the up state.
     * <p>You can get or set this state programmatically
     * by using the <code>selected</code> property.</p>
     *
     * @event egret.Event.CHANGE Emitted when the <code>selected</code> property
     * changes for the ToggleButton control.
     * This event is emitted only when the
     * user interacts with the control by touching.
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/components/ToggleButtonExample.ts
     */
    /**
     * @language zh_CN
     * ToggleButton 组件定义切换按钮。单击该按钮会在弹起状态和按下状态之间进行切换。
     * 如果在按钮处于弹起状态时单击该按钮，则它会切换到按下状态。必须再次单击该按钮才可将其切换回弹起状态。
     * <p>可以使用 <code>selected</code> 属性以编程方式获取或设置此状态。</p>
     *
     * @event egret.Event.CHANGE ToggleButtonBase 控件的 <code>selected</code> 属性更改时分派。
     * 仅当用户通过触摸与控件交互时，才分派此事件。

     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/components/ToggleButtonExample.ts
     */
    class ToggleButton extends Button {
        /**
         * @private
         */
        $selected: boolean;
        /**
         * @language en_US
         * Contains <code>true</code> if the button is in the down state,
         * and <code>false</code> if it is in the up state.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 按钮处于按下状态时为 <code>true</code>，而按钮处于弹起状态时为 <code>false</code>。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        selected: boolean;
        /**
         * @private
         *
         * @param value
         */
        $setSelected(value: boolean): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected getCurrentState(): string;
        /**
         * @private
         * 是否根据触摸事件自动变换选中状态,默认true。仅框架内使用。
         */
        $autoSelected: boolean;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected buttonReleased(): void;
    }
}

declare module swan {
    /**
     * @language en_US
     * Default instance of interface <code>IAssetAdapter</code>.
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/components/supportClasses/DefaultAssetAdapterExample.ts
     */
    /**
     * @language zh_CN
     * 默认的IAssetAdapter接口实现。
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/components/supportClasses/DefaultAssetAdapterExample.ts
     */
    class DefaultAssetAdapter implements IAssetAdapter {
        /**
         * @language en_US
         * resolve asset.
         * @param source the identifier of new asset need to be resolved
         * @param callBack callback function when resolving complete
         * example：callBack(content:any,source:string):void;
         * @param thisObject <code>this</code> object of callback method
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 解析素材
         * @param source 待解析的新素材标识符
         * @param callBack 解析完成回调函数，示例：callBack(content:any,source:string):void;
         * @param thisObject callBack的 this 引用
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        getAsset(source: string, callBack: (data: any, source: string) => void, thisObject: any): void;
        /**
         * @private
         *
         * @param event
         */
        private onLoadFinish(event);
    }
}

declare module swan.sys {
    /**
     * @private
     */
    const enum ListBaseKeys {
        /**
         * @private
         */
        requireSelection = 0,
        /**
         * @private
         */
        requireSelectionChanged = 1,
        /**
         * @private
         */
        proposedSelectedIndex = 2,
        /**
         * @private
         */
        selectedIndex = 3,
        /**
         * @private
         */
        emitChangeAfterSelection = 4,
        /**
         * @private
         */
        pendingSelectedItem = 5,
        /**
         * @private
         */
        selectedIndexAdjusted = 6,
        /**
         * @private
         */
        touchDownItemRenderer = 7,
    }
}
declare module swan {
    /**
     * @language en_US
     * The ListBase class is the base class for list component.
     * It can display items of list as vertical or horizontal such as SELECT of HTML.
     * @event egret.Event.CHANGE Emitted after the selection has changed.
     * This event is emitted when the user interacts with the control.
     * @event egret.Event.CHANGING Emitted when the selection is going to change.
     * Calling the <code>preventDefault()</code> method
     * on the event prevents the selection from changing.<p/>
     * This event is emitted when the user interacts with the control.
     *
     * @event swan.ItemTapEvent.ITEM_TAP emitted when the user tap an item in the control.
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     */
    /**
     * @language zh_CN
     * ListBase 是列表控件基类。可显示垂直或水平的项目列表。其功能与 HTML 中的 SELECT 表单元素的功能相似。
     * @event egret.Event.CHANGE 选中的索引已经发生改变,注意：此事件仅在索引改变是由用户触摸操作引起时才抛出。
     * @event egret.Event.CHANGING 选中的索引即将发生改变，可以通过调用事件对象的 preventDefault() 方法来阻止改变。<p/>
     * 注意：此事件仅在索引改变是由用户触摸操作引起时才抛出。
     *
     * @event swan.ItemTapEvent.ITEM_TAP 项呈示器单击事件。
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     */
    class ListBase extends DataGroup {
        /**
         * @language en_US
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        constructor();
        /**
         * @private
         */
        $ListBase: Object;
        /**
         * @language en_US
         * Static constant representing the value "no selection".
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 未选中任何项时的索引值
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        static NO_SELECTION: number;
        /**
         * @language en_US
         * Static constant representing no proposed selection.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 未设置缓存选中项的值
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        static NO_PROPOSED_SELECTION: number;
        /**
         * @language en_US
         * If <code>true</code>, a data item must always be selected in the control.
         * If the value is <code>true</code>, the <code>selectedIndex</code> property
         * is always set to a value between 0 and (<code>dataProvider.length</code> - 1).
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 如果为 true，则控件中必须含有选中的数据项目。
         * 如果该值为 true，则始终将 selectedIndex 属性设置为 0 和 (dataProvider.length - 1) 之间的一个值。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        requireSelection: boolean;
        /**
         * @language en_US
         * he 0-based index of the selected item, or -1 if no item is selected.
         * Setting the <code>selectedIndex</code> property deselects the currently selected
         * item and selects the data item at the specified index.<p/>
         *
         * The value is always between -1 and (<code>dataProvider.length</code> - 1).
         * If items at a lower index than <code>selectedIndex</code> are
         * removed from the component, the selected index is adjusted downward
         * accordingly. <p/>
         *
         * If the selected item is removed, the selected index is set to:<p/>
         *
         * <ul>
         *   <li>-1 if <code>requireSelection == false</code> or there are no remaining items.</li>
         *   <li>0 if <code>requireSelection == true</code> and there is at least one item.</li>
         * </ul><p/>
         *
         * When the user changes the <code>selectedIndex</code> property by interacting with the control,
         * the control emits the <code>change</code> and <code>changing</code> events.
         * When you change the value of the <code>selectedIndex</code> property programmatically,
         * it does not emits the <code>change</code> and <code>changing</code> events.</p>
         *
         * @default -1
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 选中项目的基于 0 的索引。
         * 或者如果未选中项目，则为-1。设置 selectedIndex 属性会取消选择当前选定的项目并选择指定索引位置的数据项目。<p/>
         *
         * 这个值会之中在-1到<code>(dataProvider.length - 1)</code>之间。如果从该组件中删除一个低于
         * <code>selectedIndex</code>的值，则<code>selectedIndex</code>也会相应的调节选定的索引。<p/>
         *
         * 如果删除的项为当前选中项，则该值会变为：<p/>
         *
         * <ul>
         *    <li>-1: 如果 <code>requireSelection == false</code> 或者已经没有剩余项目。</li>
         *    <li> 0: 如果 <code>requireSelection == true</code> 并且当前至少还有一个剩余项目。</li>
         * </ul><p/>
         * 当用户通过与控件交互来更改 selectedIndex 属性时，此控件将分派 change 和 changing 事件。
         * 当以编程方式更改 selectedIndex 属性的值时，此控件不分派 change 和 changing 事件。
         *
         * @default -1
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        selectedIndex: number;
        /**
         * @private
         *
         * @returns
         */
        $getSelectedIndex(): number;
        /**
         * @language en_US
         * Used internally to specify whether the selectedIndex changed programmatically or due to
         * user interaction.
         * @param value the new index need to select.
         * @param emitChangeEvent if true, the component will emit a "change" event if the
         * value has changed.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 由程序或者用户设置选中项。
         * @param value 索引值。
         * @param emitChangeEvent 当索引值发生改变，且该参数为true的时候，组件派发出一个“change”事件。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected setSelectedIndex(value: number, emitChangeEvent?: boolean): void;
        /**
         * @language en_US
         * The item that is currently selected.
         * Setting this property deselects the currently selected
         * item and selects the newly specified item.<p/>
         *
         * Setting <code>selectedItem</code> to an item that is not
         * in this component results in no selection,
         * and <code>selectedItem</code> being set to <code>undefined</code>.<p/>
         *
         * If the selected item is removed, the selected item is set to:<p/>
         * <ul>
         *   <li><code>undefined</code> if <code>requireSelection == false</code>
         *     or there are no remaining items.</li>
         *   <li>The first item if <code>requireSelection</code> = <code>true</code>
         *     and there is at least one item.</li>
         * </ul><p/>
         *
         * When the user changes the <code>selectedItem</code> property by interacting with the control,
         * the control emits the <code>change</code> and <code>changing</code> events.
         * When you change the value of the <code>selectedIndex</code> property programmatically,
         * it does not emits the <code>change</code> and <code>changing</code> events.</p>
         *
         * @default undefined
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 当前已选中的项目。设置此属性会取消选中当前选定的项目并选择新指定的项目。<p/>
         *
         * 如果设置的<code>selectedItem</code>不在当前列表里那么<code>selectedItem</code>将被设置
         * 为<code>undefined</code>。<p/>
         *
         * 如果选择项目被移除，那选择项会被设置为：<p/>
         * <ul>
         *   <li><code>undefined</code>: 如果 <code>requireSelection == false</code>
         *     或者已经没有剩余项。</li>
         *   <li>第一项: 当 <code>requireSelection == true</code>
         *     并且列表中还至少存有一项.</li>
         * </ul><p/>
         *
         * 当用户通过与控件交互来更改 selectedItem 属性时，此控件将分派 change 和 changing 事件。
         * 当以编程方式更改 selectedItem 属性的值时，此控件不分派 change 和 changing 事件。<p/>
         *
         * @default undefined
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        selectedItem: any;
        /**
         * @language en_US
         * Used internally to specify whether the selectedItem changed programmatically or due to
         * user interaction.
         * @param value the new item need to select.
         * @param emitChangeEvent if true, the component will emit a "change" event if the
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 由程序或用户设置选中项数据源。
         * @param value 要选中的项。
         * @param emitChangeEvent 当索引值发生改变，且该参数为true的时候，组件派发出一个“change”事件。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected setSelectedItem(value: any, emitChangeEvent?: boolean): void;
        /**
         * @language en_US
         * Processes the properties set on the component.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 处理对组件设置的属性
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected commitProperties(): void;
        /**
         * @language en_US
         * Updates an item renderer for use or reuse.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 更新项呈示器，以备使用或重用
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        updateRenderer(renderer: IItemRenderer, itemIndex: number, data: any): IItemRenderer;
        /**
         * @language en_US
         * Called when an item is selected or deselected.
         * Subclasses must override this method to display the selection.
         * @param index The item index that was selected.
         * @param selected <code>true</code> if the item is selected,
         * and <code>false</code> if it is deselected.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 选中或取消选中项目时调用。子类必须覆盖此方法才可设置选中项。
         * @param index 已选中的项目索引。
         * @param selected <code>true</code>为选中，<code>false</code>取消选中
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected itemSelected(index: number, selected: boolean): void;
        /**
         * @private
         * 返回指定索引是否等于当前选中索引
         */
        $isItemIndexSelected(index: number): boolean;
        /**
         * @language en_US
         * The selection validation and commitment workhorse method.
         * Called to commit the pending selected index. This method emits
         * the "changing" event, and if the event is not cancelled,
         * commits the selection change and then emits the "change"
         * event.
         * @param emitChangedEvents if emit a "changed" event.
         * @return true if the selection was committed, or false if the selection
         * was cancelled.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 提交选中项属性。该方法会派发一个“changing”事件，如果该事件没有被阻止，
         * 该方法将会提交选择项病根据参数派发“change”事件。
         * @param emitChangedEvents 是否派发一个“changed”事件。
         * @return true 表示提交成功, false表示被取消
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected commitSelection(emitChangedEvents?: boolean): boolean;
        /**
         * @language en_US
         * Adjusts the selected index to account for items being added to or
         * removed from this component.
         * It does not emit a <code>change</code> event because the change did not
         * occur as a direct result of user-interaction.  Moreover,
         * it does not emit a <code>changing</code> event
         * or allow the cancellation of the selection.
         * It also does not call the <code>itemSelected()</code> method,
         * since the same item is selected;
         * @param newIndex The new index.
         * @param add <code>true</code> if an item was added to the component,
         *  and <code>false</code> if an item was removed.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 仅调整选中索引值而不更新选中项,即在提交属性阶段itemSelected方法不会被调用，也不会触发changing和change事件。
         * @param newIndex 新索引。
         * @param add 如果已将项目添加到组件，则为<code>true</code>；如果已删除项目，则为<code>false</code>。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected adjustSelection(newIndex: number, add?: boolean): void;
        /**
         * @language en_US
         * Called when an item has been added to this component. Selection
         * and caret related properties are adjusted accordingly.
         * @param item The item being added.
         * @param index The index of the item being added.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 数据项添加
         * @param item 被添加的项。
         * @param index 被添加的项的索引。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected itemAdded(item: any, index: number): void;
        /**
         * @language en_US
         * Called when an item has been removed from this component.
         * Selection and caret related properties are adjusted
         * accordingly.
         * @param item The item being removed.
         * @param index The index of the item being removed.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 数据项移除
         * @param item 被移除的项。
         * @param index 被移除的项的索引。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected itemRemoved(item: any, index: number): void;
        /**
         * @language en_US
         * Event Listener of source data changed.
         * @param The <code>egret.CollectionEvent</code> object.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 数据源改变事件处理。
         * @param event 事件 <code>egret.CollectionEvent</code> 的对象。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected onCollectionChange(event: CollectionEvent): void;
        /**
         * @language en_US
         * Default response to dataProvider refresh events: clear the selection and caret.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 数据源刷新
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected dataProviderRefreshed(): void;
        /**
         * @language en_US
         * Called when an item has been added to this component.
         * @param renderer the renderer being added.
         * @param index the index of renderer
         * @param item the data of renderer
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 项呈示器被添加
         * @param renderer 添加的项呈示器
         * @param index 项呈示器的索引
         * @param item 项呈示器对应的数据
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected rendererAdded(renderer: IItemRenderer, index: number, item: any): void;
        /**
         * @language en_US
         * Called when an item has been removed to this component.
         * @param renderer the renderer being removed.
         * @param index the index of renderer.
         * @param item the data of renderer.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 项呈示器被移除
         * @param renderer 移除的项呈示器
         * @param index 项呈示器的索引
         * @param item 项呈示器对应的数据
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected rendererRemoved(renderer: IItemRenderer, index: number, item: any): void;
        /**
         * @language en_US
         * Handles <code>egret.TouchEvent.TOUCH_BEGIN</code> events from any of the
         * item renderers. This method handles <code>egret.TouchEvent.TOUCH_END</code>.
         * @param event The <code>egret.TouchEvent</code> object.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 侦听项呈示器<code>egret.TouchEvent.TOUCH_BEGIN</code>事件的方法。同时会添加对舞台<code>egret.TouchEvent.TOUCH_END</code>
         * 事件的侦听。
         * @param event 事件<code>egret.TouchEvent</code>的对象。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected onRendererTouchBegin(event: egret.TouchEvent): void;
        /**
         * @language en_US
         * Handles <code>egret.TouchEvent.TOUCH_END</code> events and emit <code>ItemTapEvent.ITEM_TAP</code> event.
         * @param event The <code>egret.TouchEvent</code> object.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 触摸在项呈示器上结束，抛出<code>ItemTapEvent.ITEM_TAP</code>事件。
         * @param event 事件<code>egret.TouchEvent</code>的对象。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected onRendererTouchEnd(event: egret.TouchEvent): void;
        /**
         * @private
         * 触摸在舞台上结束
         */
        private stage_touchEndHandler(event);
    }
}

declare module swan {
    /**
     * @language en_US
     * The ScrollBarBase class helps to position
     * the portion of data that is displayed when there is too much data
     * to fit in a display area.
     * The ScrollBarBase class displays a pair of viewport and a thumb.
     * viewport is a instance that implements IViewport.
     *
     * @see swan.IViewport
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample src/extension/swan/components/HScrollBar.ts
     */
    /**
     * @language zh_CN
     * <code>ScrollBarBase</code> 滚动条基类，该类帮助在因数据太多而不能在显示区域完全显示时定位显示的数据部分。
     * ScrollBarBase 类显示视区的一部分和一个指示滑块。
     * 视区是一个IViewport接口实现的实例。
     *
     * @see swan.IViewport
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample src/extension/swan/components/HScrollBar.ts
     */
    class ScrollBarBase extends Component {
        /**
         * @language en_US
         * Constructor.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 创建一个ScrollBarBase实例。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        constructor();
        /**
         * @language en_US
         * [SkinPart] Thumb display object.
         * @skinPart
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * [SkinPart]滑块显示对象。
         * @skinPart
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        thumb: swan.UIComponent;
        /**
         * @private
         */
        $viewport: IViewport;
        /**
         * @language en_US
         * The viewport controlled by this scrollbar.
         *
         * If a viewport is specified, then changes to its actual size, content
         * size, and scroll position cause the corresponding ScrollBarBase methods to
         * run:
         * <ul>
         *     <li><code>onViewportResize()</code></li>
         *     <li><code>onPropertyChanged()</code></li>
         * </ul><p/>
         *
         * The VScrollBar and HScrollBar classes override these methods to keep their properties in
         * sync with the viewport.
         *
         * @default null
         * @see swan.VScrollBar
         * @see swan.HScrollBar
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 由该滚动条控制的视区。
         *
         * 如果指定了视区，则对其实际大小、内容大小和滚动位置的更改会导致运行相对应的 ScrollBarBase 方法：
         * <ul>
         *     <li><code>onViewportResize()</code></li>
         *     <li><code>onPropertyChanged()</code></li>
         * </ul><p/>
         *
         * VScrollBar 和 HScrollBar 类需要重写这些方法以保证属性与视区的同步。
         *
         * @default null
         * @see swan.VScrollBar
         * @see swan.HScrollBar
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        viewport: IViewport;
        /**
         * @private
         *
         * @param event
         */
        private onViewportResize(event?);
        /**
         * @language en_US
         * Properties of viewport changed.
         * @param event
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 视区属性发生改变。
         * @param event
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected onPropertyChanged(event: swan.PropertyEvent): void;
    }
}

declare module swan {
    const enum Keys {
        clickOffsetX = 0,
        clickOffsetY = 1,
        moveStageX = 2,
        moveStageY = 3,
        touchDownTarget = 4,
        animation = 5,
        slideDuration = 6,
        pendingValue = 7,
        slideToValue = 8,
        liveDragging = 9,
    }
    /**
     * @language en_US
     * The SliderBase class lets users select a value by moving a slider thumb between
     * the end points of the slider track.
     * The current value of the slider is determined by the relative location of
     * the thumb between the end points of the slider,
     * corresponding to the slider's minimum and maximum values.
     * The SliderBase class is a base class for HSlider and VSlider.
     *
     * @see swan.HSlider
     * @see swan.VSlider
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     */
    /**
     * @language zh_CN
     * 滑块控件基类，通过使用 SliderBase 类，用户可以在滑块轨道的端点之间移动滑块来选择值。
     * 滑块的当前值由滑块端点（对应于滑块的最小值和最大值）之间滑块的相对位置确定。
     * SliderBase 类是 HSlider 和 VSlider 的基类。
     *
     * @see swan.HSlider
     * @see swan.VSlider
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     */
    class SliderBase extends Range {
        /**
         * @language en_US
         * Constructor
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 创建一个 SliderBase 实例
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        constructor();
        /**
         * @private
         */
        $SliderBase: Object;
        /**
         * @language en_US
         * [SkinPart] Highlight of track.
         * @skinPart
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * [SkinPart] 轨道高亮显示对象。
         * @skinPart
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        trackHighlight: egret.DisplayObject;
        /**
         * @language en_US
         * [SkinPart] Thumb display object.
         * @skinPart
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * [SkinPart]滑块显示对象。
         * @skinPart
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        thumb: swan.UIComponent;
        /**
         * @language en_US
         * [SkinPart] Track display object.
         * @skinPart
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * [SkinPart]轨道显示对象。
         * @skinPart
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        track: swan.UIComponent;
        /**
         * @language en_US
         * Duration in milliseconds for the sliding animation when you tap on the track to move a thumb.
         *
         * @default 300
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 在轨道上单击以移动滑块时，滑动动画持续的时间（以毫秒为单位）。设置为0将不执行缓动。
         *
         * @default 300
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        slideDuration: number;
        /**
         * @language en_US
         * Converts a track-relative x,y pixel location into a value between
         * the minimum and maximum, inclusive.
         *
         * @param x The x coordinate of the location relative to the track's origin.
         * @param y The y coordinate of the location relative to the track's origin.
         * @return A value between the minimum and maximum, inclusive.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 将相对于轨道的 x,y 像素位置转换为介于最小值和最大值（包括两者）之间的一个值。
         *
         * @param x 相对于轨道原点的位置的x坐标。
         * @param y 相对于轨道原点的位置的y坐标。
         * @return 介于最小值和最大值（包括两者）之间的一个值。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected pointToValue(x: number, y: number): number;
        /**
         * @language en_US
         * Specifies whether live dragging is enabled for the slider. If true, sets the value
         * and values properties and emits the change event continuously as
         * the user moves the thumb.
         *
         * @default true
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 如果为 true，则将在沿着轨道拖动滑块时，而不是在释放滑块按钮时，提交此滑块的值。
         *
         * @default true
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        liveDragging: boolean;
        /**
         * @language en_US
         * The value the slider will have when the touch is end.
         * This property is updated when the slider thumb moves, even if <code>liveDragging</code> is false.<p/>
         * If the <code>liveDragging</code> style is false, then the slider's value is only set
         * when the touch is end.
         *
         * @default 0
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 触摸结束时滑块将具有的值。
         * 无论 liveDragging 是否为 true，在滑块拖动期间始终更新此属性。
         * 而 value 属性在当 liveDragging 为 false 时，只在触摸释放时更新一次。
         *
         * @default 0
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        pendingValue: number;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected setValue(value: number): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected partAdded(partName: string, instance: any): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected partRemoved(partName: string, instance: any): void;
        /**
         * @private
         * 滑块或轨道尺寸改变事件
         */
        private onTrackOrThumbResize(event);
        /**
         * @language en_US
         * Handle touch-begin events on the scroll thumb. Records the touch begin point in clickOffset.
         *
         * @param The <code>egret.TouchEvent</code> object.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 滑块触摸开始事件，记录触碰开始的坐标偏移量。
         *
         * @param event 事件 <code>egret.TouchEvent</code> 的对象.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected onThumbTouchBegin(event: egret.TouchEvent): void;
        /**
         * @private
         * 舞台上触摸移动事件
         */
        private onStageTouchMove(event);
        /**
         * @language en_US
         * Capture touch-move events anywhere on or off the stage.
         * @param newValue new value
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 监听舞台的触碰移动事件。
         * @param newValue 新的值
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected updateWhenTouchMove(newValue: number): void;
        /**
         * @language en_US
         * Handle touch-end events anywhere on or off the stage.
         *
         * @param The <code>egret.Event</code> object.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 触摸结束事件
         *
         * @param event 事件 <code>egret.Event</code> 的对象。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected onStageTouchEnd(event: egret.Event): void;
        /**
         * @private
         * 当在组件上按下时记录被按下的子显示对象
         */
        private onTouchBegin(event);
        /**
         * @private
         * 当结束时，若不是在 touchDownTarget 上弹起，而是另外的子显示对象上弹起时，额外抛出一个触摸单击事件。
         */
        private stageTouchEndHandler(event);
        /**
         * @private
         * 动画播放更新数值
         */
        $animationUpdateHandler(animation: sys.Animation): void;
        /**
         * @private
         * 动画播放完毕
         */
        private animationEndHandler(animation);
        /**
         * @private
         * 停止播放动画
         */
        private stopAnimation();
        /**
         * @language en_US
         * Handle touch-begin events for the slider track. We
         * calculate the value based on the new position and then
         * move the thumb to the correct location as well as
         * commit the value.
         * @param The <code>egret.TouchEvent</code> object.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 轨道的触碰开始事件。我们会在这里根据新的坐标位置计算value，然后移动滑块到当前位置。
         *
         * @param event 事件 <code>egret.TouchEvent</code> 的对象.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected onTrackTouchBegin(event: egret.TouchEvent): void;
    }
}

declare module swan {
    /**
     * @private
     */
    class ScrollerThrowEvent extends egret.Event {
        static THROW: string;
        /**
         * 滚动区域当前滚动位置
         */
        currentPos: number;
        /**
         * 要滚动到的位置
         * 修改当前值会修改要滚动到得位置，但是当 moveFlag 为 false 时修改此值依然不会滚动，若此时依然要调整滚动区域的位置可以自己设置
         */
        toPos: number;
        /**
         * 动画信息，可调节或修改
         */
        constructor(type: string, bubbles?: boolean, cancelable?: boolean, currentPos?: number, toPos?: number);
    }
}

declare module swan.sys {
    /**
     * @private
     * Swan 命名空间
     */
    var NS_S: string;
    /**
     * @private
     * Wing命名空间
     */
    var NS_W: string;
    /**
     * @private
     */
    class EXMLConfig {
        /**
         * @private
         */
        $describe(instance: any): any;
        /**
         * @private
         * 根据类的短名ID和命名空间获取完整类名(以"."分隔)
         * @param id 类的短名ID
         * @param ns 命名空间
         */
        getClassNameById(id: string, ns: string): string;
        /**
         * @private
         * 根据ID获取对应的默认属性
         * @param id 类的短名ID
         * @param ns 命名空间
         * @return 默认属性名
         */
        getDefaultPropById(id: string, ns: string): string;
        /**
         * @private
         * 获取指定属性的类型,返回基本数据类型："boolean","string","number","any"。
         * @param property 属性名
         * @param className 要查询的完整类名
         */
        getPropertyType(property: string, className: string): string;
    }
}

declare module swan {
    /**
     * @language en_US
     * Linear layout base class, usually as the parent class of
     * <code>HorizontalLayout</code> and <code>VerticalLayout</code>.
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     */
    /**
     * @language zh_CN
     * 线性布局基类，通常作为 <code>HorizontalLayout</code> 和 <code>VerticalLayout</code> 的父类。
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     */
    class LinearLayoutBase extends LayoutBase {
        /**
         * @private
         */
        $horizontalAlign: string;
        /**
         * @language en_US
         * The horizontal alignment of layout elements.
         * <p>The <code>egret.HorizontalAlign</code> and <code>swan.JustifyAlign</code> class
         * defines the possible values for this property.</p>
         *
         * @default "left"
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 布局元素的水平对齐策略。
         * <p><code>egret.HorizontalAlign</code> 和
         * <code>swan.JustifyAlign</code>类定义此属性的可能值。<p>
         *
         * @default "left"
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        horizontalAlign: string;
        /**
         * @private
         */
        $verticalAlign: string;
        /**
         * @language en_US
         * The vertical alignment of layout elements.
         * <p>The <code>egret.VerticalAlign</code> and <code>swan.JustifyAlign</code> class
         * defines the possible values for this property.</p>
         *
         * @default "top"
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 布局元素的垂直对齐策略。请使用 VerticalAlign 定义的常量。
         * <p><code>egret.VerticalAlign</code> 和
         * <code>swan.JustifyAlign</code>类定义此属性的可能值。<p>
         *
         * @default "top"
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        verticalAlign: string;
        /**
         * @private
         */
        $gap: number;
        /**
         * @language en_US
         * The space between layout elements, in pixels.
         *
         * @default 6
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 布局元素之间的间隔（以像素为单位）。
         *
         * @default 6
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        gap: number;
        /**
         * @private
         */
        $paddingLeft: number;
        /**
         * @language en_US
         * Number of pixels between the container's left edge
         * and the left edge of the first layout element.
         *
         * @default 0
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 容器的左边缘与第一个布局元素的左边缘之间的像素数。
         *
         * @default 0
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        paddingLeft: number;
        /**
         * @private
         */
        $paddingRight: number;
        /**
         * @language en_US
         * Number of pixels between the container's right edge
         * and the right edge of the last layout element.
         *
         *  @default 0
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 容器的右边缘与最后一个布局元素的右边缘之间的像素数。
         *
         * @default 0
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        paddingRight: number;
        /**
         * @private
         */
        $paddingTop: number;
        /**
         * @language en_US
         * The minimum number of pixels between the container's top edge and
         * the top of all the container's layout elements.
         *
         * @default 0
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 容器的顶边缘与所有容器的布局元素的顶边缘之间的最少像素数。
         *
         * @default 0
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        paddingTop: number;
        /**
         * @private
         */
        $paddingBottom: number;
        /**
         * @language en_US
         * The minimum number of pixels between the container's bottom edge and
         * the bottom of all the container's layout elements.
         *
         * @default 0
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 容器的底边缘与所有容器的布局元素的底边缘之间的最少像素数。
         *
         * @default 0
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        paddingBottom: number;
        /**
         * @language en_US
         * Convenience function for subclasses that invalidates the
         * target's size and displayList so that both layout's <code>measure()</code>
         * and <code>updateDisplayList</code> methods get called.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 失效目标容器的尺寸和显示列表的简便方法，调用目标容器的
         * <code>measure()</code>和<code>updateDisplayList</code>方法
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected invalidateTargetLayout(): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        measure(): void;
        /**
         * @language en_US
         * Compute exact values for measuredWidth and measuredHeight.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 计算目标容器 measuredWidth 和 measuredHeight 的精确值
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected measureReal(): void;
        /**
         * @language en_US
         * Compute potentially approximate values for measuredWidth and measuredHeight.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 计算目标容器 measuredWidth 和 measuredHeight 的近似值
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected measureVirtual(): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        updateDisplayList(width: number, height: number): void;
        /**
         * @language en_US
         * An Array of the virtual layout elements size cache.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 虚拟布局使用的尺寸缓存。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected elementSizeTable: number[];
        /**
         * @language en_US
         * Gets the starting position of the specified index element
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 获取指定索引元素的起始位置
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected getStartPosition(index: number): number;
        /**
         * @language en_US
         * Gets the size of the specified index element
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 获取指定索引元素的尺寸
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected getElementSize(index: number): number;
        /**
         * @language en_US
         * Gets the sum of the size of cached elements
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 获取缓存的子对象尺寸总和
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected getElementTotalSize(): number;
        /**
         * @inheritDoc
         *
         * @param index
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        elementRemoved(index: number): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        clearVirtualLayoutCache(): void;
        /**
         * @language en_US
         * The binary search to find the specified index position of the display object
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 折半查找法寻找指定位置的显示对象索引
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected findIndexAt(x: number, i0: number, i1: number): number;
        /**
         * @language en_US
         * The first element index in the view of the virtual layout
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 虚拟布局使用的当前视图中的第一个元素索引
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected startIndex: number;
        /**
         * @language en_US
         * The last element index in the view of the virtual layout
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 虚拟布局使用的当前视图中的最后一个元素的索引
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected endIndex: number;
        /**
         * @language en_US
         * A Flag of the first element and the end element has been calculated.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 视图的第一个和最后一个元素的索引值已经计算好的标志
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected indexInViewCalculated: boolean;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        scrollPositionChanged(): void;
        /**
         * @language en_US
         * Get the index of the first and last element in the view,
         * and to return whether or not to change.
         *
         * @return has the index changed
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 获取视图中第一个和最后一个元素的索引,返回是否发生改变。
         *
         * @return 索引是否已改变
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected getIndexInView(): boolean;
        /**
         * @language en_US
         * The maximum size of elements
         *
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 子元素最大的尺寸
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected maxElementSize: number;
        /**
         * @language en_US
         * Update the layout of the virtualized elements
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 更新虚拟布局的显示列表
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected updateDisplayListVirtual(width: number, height: number): void;
        /**
         * @language en_US
         * Update the layout of the reality elements
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 更新真实布局的显示列表
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected updateDisplayListReal(width: number, height: number): void;
        /**
         * @language en_US
         * Allocate blank area for each variable size element.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 为每个可变尺寸的子项分配空白区域。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected flexChildrenProportionally(spaceForChildren: number, spaceToDistribute: number, totalPercent: number, childInfoArray: Array<any>): void;
    }
}
declare module swan.sys {
    /**
     * @private
     */
    class ChildInfo {
        /**
         * @private
         */
        layoutElement: swan.UIComponent;
        /**
         * @private
         */
        size: number;
        /**
         * @private
         */
        percent: number;
        /**
         * @private
         */
        min: number;
        /**
         * @private
         */
        max: number;
    }
}

declare module swan {
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
    class PropertyEvent extends egret.Event {
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
        static PROPERTY_CHANGE: string;
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
        constructor(type: string, bubbles?: boolean, cancelable?: boolean, property?: string);
        /**
         * @language en_US
         * Name of the property that changed.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 发生改变的属性名称。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        property: string;
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
        static emitPropertyEvent(target: egret.IEventDispatcher, eventType: string, property?: string): boolean;
    }
}

declare module swan {
    /**
     * @language en_US
     * The Watcher class defines utility method that you can use with bindable properties.
     * These methods let you define an event handler that is executed whenever a bindable property is updated.
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/binding/WatcherExample.ts
     */
    /**
     * @language zh_CN
     * Watcher 类能够监视可绑定属性的改变，您可以定义一个事件处理函数作为 Watcher 的回调方法，在每次可绑定属性的值改变时都执行此函数。
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/binding/WatcherExample.ts
     */
    class Watcher {
        /**
         * @language en_US
         * Creates and starts a Watcher instance.
         * The Watcher can only watch the property of a Object which host is instance of IEventDispatcher.
         * @param host The object that hosts the property or property chain to be watched.
         * You can use the use the <code>reset()</code> method to change the value of the <code>host</code> argument
         * after creating the Watcher instance.
         * The <code>host</code> maintains a list of <code>handlers</code> to invoke when <code>prop</code> changes.
         * @param chain A value specifying the property or chain to be watched.
         * For example, to watch the property <code>host.a.b.c</code>,
         * call the method as: <code>watch(host, ["a","b","c"], ...)</code>.
         * @param handler  An event handler function called when the value of the watched property
         * (or any property in a watched chain) is modified.
         * @param thisObject <code>this</code> object of which binding with handler
         * @returns he ChangeWatcher instance, if at least one property name has been specified to
         * the <code>chain</code> argument; null otherwise.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 创建并启动 Watcher 实例。注意：Watcher 只能监视 host 为 IEventDispatcher 对象的属性改变。若属性链中某个属性所对应的实例不是 IEventDispatcher，
         * 则属性链中在它之后的属性改变将无法检测到。
         * @param host 用于承载要监视的属性或属性链的对象。
         * 创建Watcher实例后，您可以利用<code>reset()</code>方法更改<code>host</code>参数的值。
         * 当<code>prop</code>改变的时候，会使得host对应的一系列<code>handlers</code>被触发。
         * @param chain 用于指定要监视的属性链的值。例如，要监视属性 host.a.b.c，需按以下形式调用此方法：watch¬(host, ["a","b","c"], ...)。
         * @param handler 在监视的目标属性链中任何属性的值发生改变时调用的事件处理函数。
         * @param thisObject handler 方法绑定的this对象
         * @returns 如果已为 chain 参数至少指定了一个属性名称，则返回 Watcher 实例；否则返回 null。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        static watch(host: any, chain: string[], handler: (value: any) => void, thisObject: any): Watcher;
        /**
         * @private
         * 检查属性是否可以绑定。若还未绑定，尝试添加绑定事件。若是只读或只写属性，返回false。
         */
        private static checkBindable(host, property);
        /**
         * @language en_US
         * Constructor.
         * Not for public use. This method is called only from the <code>watch()</code> method.
         * See the <code>watch()</code> method for parameter usage.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 构造函数，非公开。只能从 watch() 方法中调用此方法。有关参数用法，请参阅 watch() 方法。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        constructor(property: string, handler: (value: any) => void, thisObject: any, next?: Watcher);
        /**
         * @private
         */
        private host;
        /**
         * @private
         */
        private property;
        /**
         * @private
         */
        private handler;
        /**
         * @private
         */
        private thisObject;
        /**
         * @private
         */
        private next;
        /**
         * @private
         */
        private isExecuting;
        /**
         * @language en_US
         * Detaches this Watcher instance, and its handler function, from the current host.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 从当前宿主中断开此 Watcher 实例及其处理函数。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        unwatch(): void;
        /**
         * @language en_US
         * Retrieves the current value of the watched property or property chain, or null if the host object is null.
         * @example
         * <pre>
         * watch(obj, ["a","b","c"], ...).getValue() === obj.a.b.c
         * </pre>
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 检索观察的属性或属性链的当前值，当宿主对象为空时此值为空。
         * @example
         * <pre>
         * watch(obj, ["a","b","c"], ...).getValue() === obj.a.b.c
         * </pre>
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        getValue(): any;
        /**
         * @language en_US
         * Sets the handler function.s
         * @param handler The handler function. This argument must not be null.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 设置处理函数。
         * @param handler 处理函数，此参数必须为非空。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        setHandler(handler: (value: any) => void, thisObject: any): void;
        /**
         * @language en_US
         * Resets this ChangeWatcher instance to use a new host object.
         * You can call this method to reuse a watcher instance on a different host.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 重置此 Watcher 实例使用新的宿主对象。
         * 您可以通过该方法实现一个Watcher实例用于不同的宿主。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        reset(newHost: egret.IEventDispatcher): void;
        /**
         * @private
         *
         * @returns
         */
        private getHostPropertyValue();
        /**
         * @private
         *
         * @param event
         */
        private wrapHandler(event);
    }
}

declare module swan {
    /**
     * @language en_US
     * The Skin class defines the base class for all skins.
     * You typically don't need to manually create the instance of this class.
     * It can be created by resolving a EXML.<p/>
     *
     * @example You typically write the skin classes in EXML, as the followiong example shows:<p/>
     * <pre>
     *      <?xml version="1.0" encoding="utf-8"?>
     *      <s:Skin xmlns:s="http://ns.egret.com/swan" xmlns:w="http://ns.egret.com/wing">
     *          <states>
     *              <!-- Specify the states controlled by this skin. -->
     *          </states>
     *          <!-- Define skin. -->
     *      </s:Skin>
     * </pre>
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/components/SkinExample.ts
     */
    /**
     * @language zh_CN
     * 皮肤基类。通常情况下，您不需要手动创建这个类的实例，而是通过解析EXML文件后自动生成。<p/>
     *
     * @example 通常您可以按照如下方式写EXML代码：<p/>
     * <pre>
     *      <?xml version="1.0" encoding="utf-8"?>
     *      <s:Skin xmlns:s="http://ns.egret.com/swan" xmlns:w="http://ns.egret.com/wing">
     *          <states>
     *              <!-- Specify the states controlled by this skin. -->
     *          </states>
     *          <!-- Define skin. -->
     *      </s:Skin>
     * </pre>
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/components/SkinExample.ts
     */
    class Skin extends egret.HashObject {
        /**
         * @language en_US
         * The list of skin parts name
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 皮肤部件名称列表
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        skinParts: string[];
        /**
         * @language en_US
         * The maximum recommended width of the component to be considered.
         * This property can only affect measure result of host component.
         *
         * @default 100000
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 皮肤的最大宽度。仅影响主机组件的测量结果。
         *
         * @default 100000
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        maxWidth: number;
        /**
         * @language en_US
         * The minimum recommended width of the component to be considered.
         * This property can only affect measure result of host component.
         *
         * @default 0
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 皮肤的最小宽度,此属性设置为大于maxWidth的值时无效。仅影响主机组件的测量结果。
         *
         * @default 0
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        minWidth: number;
        /**
         * @language en_US
         * The maximum recommended height of the component to be considered.
         * This property can only affect measure result of host component.
         *
         * @default 100000
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 皮肤的最大高度。仅影响主机组件的测量结果。
         *
         * @default 100000
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        maxHeight: number;
        /**
         * @language en_US
         * The minimum recommended height of the component to be considered.
         * This property can only affect measure result of host component.
         *
         * @default 0
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 皮肤的最小高度,此属性设置为大于maxHeight的值时无效。仅影响主机组件的测量结果。
         *
         * @default 0
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        minHeight: number;
        /**
         * @language en_US
         * Number that specifies the explicit width of the skin.
         * This property can only affect measure result of host component.
         * @default NaN
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 皮肤显式设置宽度,设置为 NaN 表示不显式设置。仅影响主机组件的测量结果。
         *
         * @default NaN
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        width: number;
        /**
         * @language en_US
         * Number that specifies the explicit height of the skin.
         * This property can only affect measure result of host component.
         *
         * @default NaN
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 皮肤显式设置高度,设置为 NaN 表示不显式设置。仅影响主机组件的测量结果。
         *
         * @default NaN
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        height: number;
        /**
         * @private
         */
        $elementsContent: egret.DisplayObject[];
        elementsContent: egret.DisplayObject[];
        /**
         * @private
         */
        private _hostComponent;
        /**
         * @language en_US
         * The host component which the skin will be attached.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 此皮肤附加到的主机组件
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        hostComponent: Component;
        /**
         * @private
         *
         * @param event
         */
        private onAddedToStage(event?);
        /**
         * @private
         */
        $stateValues: sys.StateValues;
        /**
         * @language en_US
         * The list of state for host component.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 为此组件定义的视图状态。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        states: State[];
        /**
         * @language en_US
         * The current state of host component.
         * Set to <code>""</code> or <code>null</code> to reset the component back to its base state.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 组件的当前视图状态。将其设置为 "" 或 null 可将组件重置回其基本状态。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        currentState: string;
        /**
         * @language en_US
         * Check if contains the specifies state name.
         * @param stateName the state name need to be checked
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 返回是否含有指定名称的视图状态
         * @param stateName 要检查的视图状态名称
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        hasState: (stateName: string) => boolean;
        /**
         * @private
         * 初始化所有视图状态
         */
        private initializeStates;
        /**
         * @private
         * 应用当前的视图状态。子类覆盖此方法在视图状态发生改变时执行相应更新操作。
         */
        private commitCurrentState;
    }
}

declare module swan {
    /**
     * @language en_US
     * The IOverride interface is used for view state overrides.
     * All entries in the State class <code>overrides</code>
     * property array must implement this interface.
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     */
    /**
     * @language zh_CN
     * IOverride 接口定义视图状态的覆盖操作。State 类 overrides 属性数组中的所有条目均必须实现此接口。
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     */
    interface IOverride {
        /**
         * @language en_US
         * Applies the override. Retains the original value, so that it can
         * restore the value later in the <code>remove()</code> method.<p/>
         *
         * This method is called automatically when the state is entered.
         * It should not be called directly.
         *
         * @param host A component that contains view states.
         * @param parent The parent that a sub element be added.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 应用覆盖。将保留原始值，以便以后可以在 remove() 方法中恢复该值。<p/>
         *
         * 该方法是当进入状态的时候自动调用的，请不要直接调用此方法。
         * @param host 含有视图状态的组件。
         * @param parent 子项添加到的父级容器。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        apply(host: any, parent: egret.DisplayObjectContainer): void;
        /**
         * @language en_US
         * Removes the override. The value remembered in the <code>apply()</code>
         * method is restored. </p>
         *
         * This method is called automatically when the state is entered.
         * It should not be called directly.
         * @param host A component that contains view states.
         * @param parent The parent that a sub element be added.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 删除覆盖。在 apply() 方法中记住的值将被恢复。
         * @param host 含有视图状态的组件。
         * @param parent 子项添加到的父级容器。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        remove(host: any, parent: egret.DisplayObjectContainer): void;
    }
}

declare module swan {
    /**
     * @language en_US
     * The Binding class defines utility methods for performing data binding.
     * You can use the methods defined in this class to configure data bindings.
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/binding/BindingExample.ts
     */
    /**
     * @language zh_CN
     * 绑定工具类，用于执行数据绑定用的方法集。您可以使用此类中定义的方法来配置数据绑定。
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/binding/BindingExample.ts
     */
    class Binding {
        /**
         * @language en_US
         * Binds a property, <prop>prop</code> on the <code>target</code> Object, to a bindable property or peoperty chain.
         * @param host The object that hosts the property or property chain to be watched.
         * The <code>host</code> maintains a list of <code>targets</code> to update theirs <code>prop</code> when <code>chain</code> changes.
         * @param chain A value specifying the property or chain to be watched. For example, when watch the property <code>host.a.b.c</code>,
         * you need call the method like this: <code>indProperty(host, ["a","b","c"], ...)</code>
         * @param target The Object defining the property to be bound to <code>chain</code>.
         * @param prop The name of the public property defined in the <code>site</code> Object to be bound.
         * @returns A ChangeWatcher instance, if at least one property name has been specified
         * to the <code>chain</code> argument; null otherwise.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 绑定一个对象的属性值到要监视的对象属性上。
         * @param host 用于承载要监视的属性或属性链的对象。
         * 当 <code>host</code>上<code>chain</code>所对应的值发生改变时，<code>target</code>上的<code>prop</code>属性将被自动更新。
         * @param chain 用于指定要监视的属性链的值。例如，要监视属性 <code>host.a.b.c</code>，需按以下形式调用此方法：<code>bindProperty(host, ["a","b","c"], ...)。</code>
         * @param target 本次绑定要更新的目标对象。
         * @param prop 本次绑定要更新的目标属性名称。
         * @returns 如果已为 chain 参数至少指定了一个属性名称，则返回 Watcher 实例；否则返回 null。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        static bindProperty(host: any, chain: string[], target: any, prop: string): Watcher;
        /**
         * @language en_US
         * Binds a callback, <prop>handler</code> on the <code>target</code> Object, to a bindable property or peoperty chain.
         * Callback method to invoke with an argument of the current value of <code>chain</code> when that value changes.
         * @param host The object that hosts the property or property chain to be watched.
         * @param chain A value specifying the property or chain to be watched. For example, when watch the property <code>host.a.b.c</code>,
         * you need call the method like this: <code>indProperty(host, ["a","b","c"], ...)</code>
         * @param handler method to invoke with an argument of the current value of <code>chain</code> when that value changes.
         * @param thisObject <code>this</code> object of binding method
         * @returns A ChangeWatcher instance, if at least one property name has been  specified to the <code>chain</code> argument; null otherwise.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 绑定一个回调函数到要监视的对象属性上。当 host上 chain 所对应的值发生改变时，handler 方法将被自动调用。
         * @param host 用于承载要监视的属性或属性链的对象。
         * @param chain 用于指定要监视的属性链的值。例如，要监视属性 host.a.b.c，需按以下形式调用此方法：bindSetter(host, ["a","b","c"], ...)。
         * @param handler 在监视的目标属性链中任何属性的值发生改变时调用的事件处理函数。
         * @param thisObject handler 方法绑定的this对象
         * @returns 如果已为 chain 参数至少指定了一个属性名称，则返回 Watcher 实例；否则返回 null。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        static bindHandler(host: any, chain: string[], handler: (value: any) => void, thisObject: any): Watcher;
    }
}

declare module swan.sys {
    /**
     * @private
     */
    const enum AddPosition {
        /**
         * @private
         * 添加父级容器的底层
         */
        FIRST = 0,
        /**
         * @private
         * 添加在父级容器的顶层
         */
        LAST = 1,
        /**
         * @private
         * 添加在相对对象之前
         */
        BEFORE = 2,
        /**
         * @private
         * 添加在相对对象之后
         */
        AFTER = 3,
    }
}
declare module swan {
    /**
     * @language en_US
     * The operation of adding a state to view.
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     */
    /**
     * @language zh_CN
     * 视图添加状态显示元素操作
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     */
    class AddItems implements IOverride {
        /**
         * @language en_US
         * Constructor.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 创建一个AddItems实例
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        constructor(target: string, propertyName: string, position: number, relativeTo: string);
        /**
         * @language en_US
         * The name of the property that is being added.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 要添加到的属性
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        propertyName: string;
        /**
         * @language en_US
         * The position to be added. Valid values: "first","last","before","after"
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 添加的位置，有效值为: "first","last","before","after"
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        position: number;
        /**
         * @language en_US
         * an instance name of relative visual element.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 相对的显示元素的实例名
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        relativeTo: string;
        /**
         * @language en_US
         * The target instance name.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 目标实例名
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        target: string;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        apply(host: any, parent: egret.DisplayObjectContainer): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        remove(host: any, parent: egret.DisplayObjectContainer): void;
    }
}

declare module swan {
    /**
     * @language en_US
     * The SetProperty class specifies a property value that is in effect only
     * during the parent view state.
     * You use this class in the <code>overrides</code> property of the State class.
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     */
    /**
     * @language zh_CN
     * SetProperty 类指定只在父视图状态期间有效的属性值。可以在 State 类的 overrides 属性中使用该类。
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     */
    class SetProperty implements IOverride {
        /**
         * @language en_US
         * Constructor.
         *
         * @param target The object whose property is being set.
         * By default, Swan uses the immediate parent of the State object.
         * @param name The property to set.
         * @param value The value of the property in the view state.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 创建一个SetProperty实例。
         *
         * @param target 要设置其属性的对象。默认情况下，Swan 使用 State 对象的直接父级。
         * @param name 要设置的属性。
         * @param value 视图状态中的属性值。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        constructor(target: string, name: string, value: any);
        /**
         * @language en_US
         * he name of the property to change.
         * You must set this property, either in
         * the SetProperty constructor or by setting
         * the property value directly.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 要更改的属性的名称。
         * 这个属性必须设置，在 SetProperty 构造函数中设置或通过直接设置该属性值设置。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        name: string;
        /**
         * @language en_US
         * The object containing the property to be changed.
         * If the property value is <code>null</code>, Swan uses the
         * immediate parent of the State object.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 包含要更改的属性的对象。如果属性值为 null，则 Swan 将使用 State 对象的直接父级。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        target: string;
        /**
         * @language en_US
         * The new value for the property.
         *
         * @default undefined
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 属性的新值。
         *
         * @default undefined
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        value: any;
        /**
         * @private
         * 旧的属性值
         */
        private oldValue;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        apply(host: Skin, parent: egret.DisplayObjectContainer): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        remove(host: Skin, parent: egret.DisplayObjectContainer): void;
        /**
         * @private
         * 设置属性值
         */
        private setPropertyValue(obj, name, value, valueForType);
        /**
         * @private
         * 转成Boolean值
         */
        private toBoolean(value);
    }
}

declare module swan {
    /**
     * @language en_US
     * An <code>ICollectionView</code> is a view onto a collection of data.
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     */
    /**
     * @language zh_CN
     *
     * <code>ICollection</code>是一个列表的集合类数据源对象的查看接口。
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     */
    interface ICollection extends egret.IEventDispatcher {
        /**
         * @language en_US
         * The number of items in this view.
         * 0 means no items, while -1 means that the length is unknown.
         * @readOnly
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 此集合中的项目数。0 表示不包含项目。
         * @readOnly
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        length: number;
        /**
         * @language en_US
         * Gets the item at the specified index.
         * @param index The index in the list from which to retrieve the item.
         * @return The item at that index, or <code>null</code> if there is none.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 获取指定索引处的项目。
         * @param index 要得到的项的指定位置。
         * @return 在索引位置的项，如果没有该项则返回null。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        getItemAt(index: number): any;
        /**
         * @language en_US
         * Returns the index of the item if it is in the list。-1 otherwise.
         * @param item The item to find.
         * @return The index of the item, or -1 if the item is not in the list.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 如果项目位于列表中,返回该项目的索引。否则返回-1。
         * @param item 要查找的项。
         * @return 项的索引，如果该项没有在列表中将返回-1.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        getItemIndex(item: any): number;
    }
}
interface ICollection extends egret.IEventDispatcher {
    /**
     *  此集合中的项目数。0 表示不包含项目。
     *  @readOnly
     */
    length: number;
}

declare module swan.sys {
    /**
     * @private
     * 数值缓动工具类
     */
    class Animation {
        /**
         * @private
         */
        constructor(updateFunction: (animation: Animation) => void, thisObject: any);
        /**
         * @private
         * 此动画的缓动行为。设置为null意味着不使用缓动，默认值为 sineInOut
         */
        easerFunction: (fraction: number) => number;
        /**
         * @private
         */
        private thisObject;
        /**
         * @private
         * 是否正在播放动画，不包括延迟等待和暂停的阶段
         */
        isPlaying: boolean;
        /**
         * @private
         * 动画持续时间,单位毫秒，默认值500
         */
        duration: number;
        /**
         * @private
         * 动画到当前时间对应的值。
         */
        currentValue: number;
        /**
         * @private
         * 起始值
         */
        from: number;
        /**
         * @private
         * 终点值。
         */
        to: number;
        /**
         * @private
         * 动画启动时刻
         */
        private startTime;
        /**
         * @private
         * 动画播放结束时的回调函数
         */
        endFunction: (animation: Animation) => void;
        /**
         * @private
         * 动画更新时的回调函数
         */
        updateFunction: Function;
        /**
         * @private
         * 开始正向播放动画,无论何时调用都重新从零时刻开始，若设置了延迟会首先进行等待。
         */
        play(): void;
        /**
         * @private
         * 开始播放动画
         */
        private start();
        /**
         * @private
         * 停止播放动画
         */
        stop(): void;
        /**
         * @private
         * 计算当前值并返回动画是否结束
         */
        private doInterval(currentTime);
    }
}

declare module swan {
    /**
     * @language en_US
     * The IDisplayText interface defines the properties
     * for simple text display.。
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     */
    /**
     * @language zh_CN
     * IDisplayText 接口定义简单文本显示的属性.
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     */
    interface IDisplayText {
        /**
         * @language en_US
         * The text displayed by this text component.
         * @readOnly
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 此文本组件所显示的文本。
         * @readOnly
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        text: string;
    }
}

declare module swan {
    /**
     * @language en_US
     * The IItemRenderer interface defines the basic set of APIs
     * that used for List class.
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     */
    /**
     * @language zh_CN
     * 列表类组件的项呈示器接口。
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     */
    interface IItemRenderer extends UIComponent {
        /**
         * @language en_US
         * The data to render or edit.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 要呈示或编辑的数据。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        data: any;
        /**
         * @language en_US
         * Contains <code>true</code> if the item renderer
         * can show itself as selected.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 如果项呈示器可以将其自身显示为已选中，则为 true。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        selected: boolean;
        /**
         * @language en_US
         * The index of the item in the data provider
         * of the host component of the item renderer.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 项呈示器的数据提供程序中的项目索引。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        itemIndex: number;
    }
}

declare module swan {
    /**
     * @language en_US
     * The swan.CollectionEvent class represents an event that is
     * emitted when the associated collection changes.
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/events/CollectionEventExample.ts
     */
    /**
     * @language zh_CN
     * 集合类型数据改变事件
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/events/CollectionEventExample.ts
     */
    class CollectionEvent extends egret.Event {
        /**
         * @language en_US
         * Emitted when a collection has changed.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 集合类数据发生改变
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        static COLLECTION_CHANGE: string;
        /**
         * @language en_US
         * Constructor.
         *
         * @param type The event type; indicates the action that triggered the event.
         * @param bubbles Specifies whether the event can bubble
         * up the display list hierarchy.
         * @param cancelable Specifies whether the behavior
         * associated with the event can be prevented.
         * @param kind Indicates the kind of event that occured.
         * The parameter value can be one of the values in the CollectionEventKind
         * class, or <code>null</code>, which indicates that the kind is unknown.
         * @param location When the <code>kind</code> is
         * <code>CollectionEventKind.ADD</code>,
         * <code>CollectionEventKind.REMOVE</code>,
         * <code>CollectionEventKind.REPLACE</code>,or
         * <code>CollectionEventKind.UPDATE</code>
         * this value indicates at what location the item(s) specified
         * in the <code>items property</code> can be found
         * within the target collection.
         * @param oldLocation this value indicates
         * the old location within the target collection
         * of the item(s) specified in the <code>items</code> property.
         * @param items Array of objects with information about the items
         * affected by the event.
         * @param oldItems When the <code>kine</code> is <code>CollectionEventKind.REPLACE</code> the value represents
         * a list of items before replaced.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 创建一个 CollectionEvent 实例
         *
         * @param type 事件类型；指示触发事件的动作。
         * @param bubbles 指定该事件是否可以在显示列表层次结构得到冒泡处理。
         * @param cancelable 指定是否可以防止与事件相关联的行为。
         * @param kind 指示发生的事件类型。此属性值可以是 CollectionEventKind 类中的一个值，也可以是 null，用于指示类型未知。
         * @param location 如果 kind 值为 <code>CollectionEventKind.ADD</code>,
         * <code>CollectionEventKind.REMOVE</code>,
         * <code>CollectionEventKind.REPLACE</code>,或
         * <code>CollectionEventKind.UPDATE</code>
         * 则此属性为 items 属性中指定的项目集合中零号元素的的索引。
         * @param oldLocation 此值指示 <code>items</code> 属性中指定的项目在目标集合中的原位置。
         * @param items 受事件影响的项目的列表。
         * @param oldItems 仅当kind的值为CollectionEventKind.REPLACE时，表示替换前的项目列表。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        constructor(type: string, bubbles?: boolean, cancelable?: boolean, kind?: string, location?: number, oldLocation?: number, items?: any[], oldItems?: any[]);
        /**
         * @private
         *
         * @param kind
         * @param location
         * @param oldLocation
         * @param items
         * @param oldItems
         */
        $setTo(kind?: string, location?: number, oldLocation?: number, items?: any[], oldItems?: any[]): void;
        /**
         * @language en_US
         * Indicates the kind of event that occured.
         * The parameter value can be one of the values in the CollectionEventKind
         * class, or <code>null</code>, which indicates that the kind is unknown.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 指示发生的事件类型。此属性值可以是 CollectionEventKind 类中的一个值，也可以是 null，用于指示类型未知。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        kind: string;
        /**
         * @language en_US
         * Array of objects with information about the items.
         * affected by the event.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 受事件影响的项目的列表。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        items: any[];
        /**
         * @language en_US
         * When the <code>kine</code> is <code>CollectionEventKind.REPLACE</code> the value represents
         * a list of items before replaced.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 仅当kind的值为CollectionEventKind.REPLACE时，表示替换前的项目列表。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        oldItems: any[];
        /**
         * @language en_US
         * When the <code>kind</code> is
         * <code>CollectionEventKind.ADD</code>,
         * <code>CollectionEventKind.REMOVE</code>,
         * <code>CollectionEventKind.REPLACE</code>,or
         * <code>CollectionEventKind.UPDATE</code>
         * this value indicates at what location the item(s) specified
         * in the <code>items property</code> can be found
         * within the target collection.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 如果 kind 值为 CollectionEventKind.ADD、
         * CollectionEventKind.REMOVE 或 CollectionEventKind.REPLACE，
         * CollectionEventKind.UPDATE
         * 则此属性为 items 属性中指定的项目集合中零号元素的的索引。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        location: number;
        /**
         * @language en_US
         * this value indicates
         * the old location within the target collection
         * of the item(s) specified in the <code>items</code> property.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 此属性为 items 属性中指定的项目在目标集合中原来位置的从零开始的索引。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        oldLocation: number;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected clean(): void;
        /**
         * @language en_US
         * Emit an event with specified EventDispatcher. The emitted event will be cached in the object pool,
         * for the next cycle of reuse.
         *
         * @param target the target of event emitter.
         * @param eventType The event type; indicates the action that triggered the event.
         * @param kind Indicates the kind of event that occured.
         * The parameter value can be one of the values in the CollectionEventKind
         * class, or <code>null</code>, which indicates that the kind is unknown.
         * @param location When the <code>kind</code> is
         * <code>CollectionEventKind.ADD</code>,
         * <code>CollectionEventKind.REMOVE</code>,
         * <code>CollectionEventKind.REPLACE</code>,or
         * <code>CollectionEventKind.UPDATE</code>
         * this value indicates at what location the item(s) specified
         * in the <code>items property</code> can be found
         * within the target collection.
         * @param oldLocation this value indicates
         * the old location within the target collection
         * of the item(s) specified in the <code>items</code> property.
         * @param items Array of objects with information about the items
         * affected by the event.
         * @param oldItems When the <code>kine</code> is <code>CollectionEventKind.REPLACE</code> the value represents
         * a list of items before replaced.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 使用指定的EventEmitter对象来抛出事件对象。抛出的对象将会缓存在对象池上，供下次循环复用。
         *
         * @param target 事件派发目标。
         * @param eventType 事件类型；指示触发事件的动作。
         * @param kind 指示发生的事件类型。此属性值可以是 CollectionEventKind 类中的一个值，也可以是 null，用于指示类型未知。
         * @param location 如果 kind 值为 <code>CollectionEventKind.ADD</code>,
         * <code>CollectionEventKind.REMOVE</code>,
         * <code>CollectionEventKind.REPLACE</code>,或
         * <code>CollectionEventKind.UPDATE</code>
         * 则此属性为 items 属性中指定的项目集合中零号元素的的索引。
         * @param oldLocation 此值指示 <code>items</code> 属性中指定的项目在目标集合中的原位置。
         * @param items 受事件影响的项目的列表。
         * @param oldItems 仅当kind的值为CollectionEventKind.REPLACE时，表示替换前的项目列表。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        static emitCollectionEvent(target: egret.IEventDispatcher, eventType: string, kind?: string, location?: number, oldLocation?: number, items?: any[], oldItems?: any[]): boolean;
    }
}

declare module swan {
    /**
     * @language en_US
     * The CollectionEventKind class contains constants for the valid values
     * of the <code>CollectionEvent</code> class <code>kind</code> property.
     * These constants indicate the kind of change that was made to the collection.
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     */
    /**
     * @language zh_CN
     * 定义 <code>CollectionEvent</code> 类 <code>kind</code> 属性的有效值的常量。
     * 这些常量指示对集合进行的更改类型。

     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     */
    class CollectionEventKind {
        /**
         * @language en_US
         * Indicates that the collection added an item or items.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 指示集合添加了一个或多个项目。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        static ADD: string;
        /**
         * @language en_US
         * Indicates that the collection applied a sort, a filter, or both.
         * This change can potentially be easier to handle than a RESET.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 指示集合应用了排序或/和筛选。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        static REFRESH: string;
        /**
         * @language en_US
         * Indicates that the collection removed an item or items.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 指示集合删除了一个或多个项目。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        static REMOVE: string;
        /**
         * @language en_US
         * Indicates that the item at the position identified by the
         * CollectionEvent <code>location</code> property has been replaced.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 指示已替换由 CollectionEvent.location 属性确定的位置处的项目。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        static REPLACE: string;
        /**
         * @language en_US
         * Indicates that the collection has changed so drastically that
         * a reset is required.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 指示集合已彻底更改，需要进行重置。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        static RESET: string;
        /**
         * @language en_US
         * Indicates that one or more items were updated within the collection.
         * The affected item(s)
         * are stored in the <code>CollectionEvent.items</code> property.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 指示集合中一个或多个项目进行了更新。受影响的项目将存储在  CollectionEvent.items 属性中。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        static UPDATE: string;
    }
}

declare module swan.sys {
    /**
     * @private
     * 代码生成工具基类
     */
    class CodeBase {
        /**
         * @private
         *
         * @returns
         */
        toCode(): string;
        /**
         * @private
         */
        indent: number;
        /**
         * @private
         * 获取缩进字符串
         */
        getIndent(indent?: number): string;
    }
    /**
     * @private
     */
    class EXClass extends CodeBase {
        /**
         * @private
         * 构造函数代码块
         */
        constructCode: EXCodeBlock;
        /**
         * @private
         * 类名,不包括模块名
         */
        className: string;
        /**
         * @private
         * 父类类名,包括完整模块名
         */
        superClass: string;
        /**
         * @private
         * 内部类区块
         */
        private innerClassBlock;
        /**
         * @private
         * 添加一个内部类
         */
        addInnerClass(clazz: EXClass): void;
        /**
         * @private
         * 变量定义区块
         */
        private variableBlock;
        /**
         * @private
         * 添加变量
         */
        addVariable(variableItem: EXVariable): void;
        /**
         * @private
         * 根据变量名获取变量定义
         */
        getVariableByName(name: string): EXVariable;
        /**
         * @private
         * 函数定义区块
         */
        private functionBlock;
        /**
         * @private
         * 添加函数
         */
        addFunction(functionItem: EXFunction): void;
        /**
         * @private
         * 根据函数名返回函数定义块
         */
        getFuncByName(name: string): EXFunction;
        /**
         * @private
         *
         * @returns
         */
        toCode(): string;
    }
    /**
     * @private
     */
    class EXCodeBlock extends CodeBase {
        /**
         * @private
         * 添加变量声明语句
         * @param name 变量名
         * @param value 变量初始值
         */
        addVar(name: string, value?: string): void;
        /**
         * @private
         * 添加赋值语句
         * @param target 要赋值的目标
         * @param value 值
         * @param prop 目标的属性(用“.”访问)，不填则是对目标赋值
         */
        addAssignment(target: string, value: string, prop?: string): void;
        /**
         * @private
         * 添加返回值语句
         */
        addReturn(data: string): void;
        /**
         * @private
         * 添加一条空行
         */
        addEmptyLine(): void;
        /**
         * @private
         * 开始添加if语句块,自动调用startBlock();
         */
        startIf(expression: string): void;
        /**
         * @private
         * 开始else语句块,自动调用startBlock();
         */
        startElse(): void;
        /**
         * @private
         * 开始else if语句块,自动调用startBlock();
         */
        startElseIf(expression: string): void;
        /**
         * @private
         * 添加一个左大括号，开始新的语句块
         */
        startBlock(): void;
        /**
         * @private
         * 添加一个右大括号,结束当前的语句块
         */
        endBlock(): void;
        /**
         * @private
         * 添加执行函数语句块
         * @param functionName 要执行的函数名称
         * @param args 函数参数列表
         */
        doFunction(functionName: string, args: string[]): void;
        /**
         * @private
         */
        private lines;
        /**
         * @private
         * 添加一行代码
         */
        addCodeLine(code: string): void;
        /**
         * @private
         * 添加一行代码到指定行
         */
        addCodeLineAt(code: string, index: number): void;
        /**
         * @private
         * 是否存在某行代码内容
         */
        containsCodeLine(code: string): boolean;
        /**
         * @private
         * 在结尾追加另一个代码块的内容
         */
        concat(cb: EXCodeBlock): void;
        /**
         * @private
         *
         * @returns
         */
        toCode(): string;
    }
    /**
     * @private
     */
    class EXFunction extends CodeBase {
        /**
         * @private
         * 代码块
         */
        codeBlock: EXCodeBlock;
        /**
         * @private
         */
        isGet: boolean;
        /**
         * @private
         * 函数名
         */
        name: string;
        /**
         * @private
         *
         * @returns
         */
        toCode(): string;
    }
    /**
     * @private
     */
    class EXVariable extends CodeBase {
        /**
         * @private
         */
        constructor(name: string, defaultValue?: string);
        /**
         * @private
         * 变量名
         */
        name: string;
        /**
         * @private
         * 默认值
         */
        defaultValue: string;
        /**
         * @private
         *
         * @returns
         */
        toCode(): string;
    }
    /**
     * @private
     */
    class EXState extends CodeBase {
        /**
         * @private
         */
        constructor(name: string, stateGroups?: Array<any>);
        /**
         * @private
         * 视图状态名称
         */
        name: string;
        /**
         * @private
         */
        stateGroups: Array<any>;
        /**
         * @private
         */
        addItems: Array<any>;
        /**
         * @private
         */
        setProperty: Array<any>;
        /**
         * @private
         * 添加一个覆盖
         */
        addOverride(item: CodeBase): void;
        /**
         * @private
         *
         * @returns
         */
        toCode(): string;
    }
    /**
     * @private
     */
    class EXAddItems extends CodeBase {
        /**
         * @private
         */
        constructor(target: string, property: string, position: number, relativeTo: string);
        /**
         * @private
         * 要添加的实例
         */
        target: string;
        /**
         * @private
         * 要添加到的属性
         */
        property: string;
        /**
         * @private
         * 添加的位置
         */
        position: number;
        /**
         * @private
         * 相对的显示元素
         */
        relativeTo: string;
        /**
         * @private
         *
         * @returns
         */
        toCode(): string;
    }
    /**
     * @private
     */
    class EXSetProperty extends CodeBase {
        /**
         * @private
         */
        constructor(target: string, name: string, value: string);
        /**
         * @private
         * 要修改的属性名
         */
        name: string;
        /**
         * @private
         * 目标实例名
         */
        target: string;
        /**
         * @private
         * 属性值
         */
        value: string;
        /**
         * @private
         *
         * @returns
         */
        toCode(): string;
    }
    /**
     * @private
     */
    class EXBinding extends CodeBase {
        /**
         * @private
         */
        constructor(target: string, property: string, expression: string);
        /**
         * @private
         * 目标实例名
         */
        target: string;
        /**
         * @private
         * 目标属性名
         */
        property: string;
        /**
         * @private
         * 绑定表达式
         */
        expression: string;
        /**
         * @private
         *
         * @returns
         */
        toCode(): string;
    }
}

declare module swan {
    /**
     * @language en_US
     * The JustifyAlign class defines the possible values for the
     * <code>horizontalAlign</code> 和 <code>verticalAlign</code> property of
     * Layout class.
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/layout/JustifyAlignExample.ts
     */
    /**
     * @language zh_CN
     * JustifyAlign 定义布局类中 horizontalAlign 与 verticalAlign 属性需要的两端对齐常量值。
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/layout/JustifyAlignExample.ts
     */
    class JustifyAlign {
        /**
         * @language en_US
         * Justify the children with respect to the container.
         * This uniformly sizes all children to be the same size as the
         * container.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 相对于容器对齐子代。这会将所有子代的大小统一调整为与容器相同的尺寸。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        static JUSTIFY: string;
        /**
         * @language en_US
         * Content justify the children width/height respect to the container.
         * This uniformly sizes all children to be the content width/height of the container.
         * The content width/height of the container is the size of the largest child.
         * If all children are smaller than the width/height of the container, then
         * all the children will be sized to the width/height of the container.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 相对于容器对子代进行内容对齐。这会将所有子代的大小统一调整为容器的内容宽度/高度。
         * 容器的内容宽度/高度是最大子代的大小。如果所有子代都小于容器的宽度/高度，则会将所有子代的大小调整为容器的宽度/高度。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        static CONTENT_JUSTIFY: string;
    }
}

declare module swan {
    /**
     * @language en_US
     * The HScrollBar (horizontal scrollbar) control lets you control
     * the portion of data that is displayed when there is too much data
     * to fit horizontally in a display area.
     *
     * <p>Although you can use the HScrollBar control as a stand-alone control,
     * you usually combine it as part of another group of components to
     * provide scrolling functionality.</p>
     *
     * @includeExample examples/Samples/src/extension/swan/components/HScrollBarExample.ts
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     */
    /**
     * @language zh_CN
     * HScrollBar（水平 ScrollBar）控件可以在因数据太多而不能在显示区域中以水平方向完全显示时控制显示的数据部分。
     * <p>虽然 HScrollBar 控件可以单独使用，但通常将它与其他组件一起使用来提供滚动功能。</p>
     *
     * @includeExample examples/Samples/src/extension/swan/components/HScrollBarExample.ts
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     */
    class HScrollBar extends ScrollBarBase {
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected updateDisplayList(unscaledWidth: number, unscaledHeight: number): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected onPropertyChanged(event: swan.PropertyEvent): void;
    }
}

declare module swan {
    /**
     * @language en_US
     * Label is an UIComponent that can render one or more lines of text.
     * The text to be displayed is determined by the <code>text</code> property.
     * The formatting of the text is specified by the styles，
     * such as <code>fontFamily</code> and <code>fontSize</code>.
     *
     * <p>Because Label is fast and lightweight, it is especially suitable
     * for use cases that involve rendering many small pieces of non-interactive
     * text, such as item renderers and labels in Button skins.</p>
     *
     * <p>In Label, three character sequences are recognized
     * as explicit line breaks: CR (<code>"\r"</code>), LF (<code>"\n"</code>),
     * and CR+LF (<code>"\r\n"</code>).</p>
     *
     * <p>If you don't specify any kind of width for a Label,
     * then the longest line, as determined by these explicit line breaks,
     * determines the width of the Label.</p>
     *
     * <p>If you do specify some kind of width, then the specified text is
     * word-wrapped at the right edge of the component's bounds.
     * If the text extends below the bottom of the component,
     * it is clipped.</p>
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/components/LabelExample.ts
     */
    /**
     * @language zh_CN
     * Label 是可以呈示一行或多行统一格式文本的UI组件。要显示的文本由 text 属性确定。文本格式由样式属性指定，例如 fontFamily 和 fontSize。
     * 因为 Label 运行速度快且占用内存少，所以它特别适合用于显示多个小型非交互式文本的情况，例如，项呈示器和 Button 外观中的标签。
     * 在 Label 中，将以下三个字符序列识别为显式换行符：CR（“\r”）、LF（“\n”）和 CR+LF（“\r\n”）。
     * 如果没有为 Label 指定宽度，则由这些显式换行符确定的最长行确定 Label 的宽度。
     * 如果指定了宽度，则指定文本将在组件边界的右边缘换行，如果文本扩展到低于组件底部，则将被剪切。
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/components/LabelExample.ts
     */
    class Label extends egret.TextField implements UIComponent, IDisplayText {
        /**
         * @language en_US
         * Constructor.
         *
         * @param text The text displayed by this text component.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 构造函数。
         *
         * @param text 此文本组件所显示的文本。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        constructor(text?: string);
        /**
         * @private
         *
         */
        $invalidateContentBounds(): void;
        /**
         * @private
         *
         * @param value
         */
        $setWidth(value: number): void;
        /**
         * @private
         *
         * @param value
         */
        $setHeight(value: number): void;
        /**
         * @private
         *
         * @param value
         */
        $setText(value: string): void;
        /**
         * @private
         */
        private _widthConstraint;
        /**
         * @private
         * UIComponentImpl 定义的所有变量请不要添加任何初始值，必须统一在此处初始化。
         */
        private initializeUIValues;
        /**
         * @copy swan.UIComponent#createChildren
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected createChildren(): void;
        /**
         * @copy swan.UIComponent#childrenCreated
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected childrenCreated(): void;
        /**
         * @copy swan.UIComponent#commitProperties
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected commitProperties(): void;
        /**
         * @copy swan.UIComponent#measure
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected measure(): void;
        /**
         * @copy swan.UIComponent#updateDisplayList
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected updateDisplayList(unscaledWidth: number, unscaledHeight: number): void;
        /**
         * @copy swan.UIComponent#invalidateParentLayout
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected invalidateParentLayout(): void;
        /**
         * @private
         */
        $UIComponent: Object;
        /**
         * @private
         */
        $includeInLayout: boolean;
        /**
         * @copy swan.UIComponent#includeInLayout
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        includeInLayout: boolean;
        /**
         * @copy swan.UIComponent#left
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        left: number;
        /**
         * @copy swan.UIComponent#right
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        right: number;
        /**
         * @copy swan.UIComponent#top
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        top: number;
        /**
         * @copy swan.UIComponent#bottom
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        bottom: number;
        /**
         * @copy swan.UIComponent#horizontalCenter
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        horizontalCenter: number;
        /**
         * @copy swan.UIComponent#verticalCenter
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        verticalCenter: number;
        /**
         * @copy swan.UIComponent#percentWidth
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        percentWidth: number;
        /**
         * @copy swan.UIComponent#percentHeight
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        percentHeight: number;
        /**
         * @copy swan.UIComponent#explicitWidth
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        explicitWidth: number;
        /**
         * @copy swan.UIComponent#explicitHeight
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        explicitHeight: number;
        /**
         * @copy swan.UIComponent#minWidth
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        minWidth: number;
        /**
         * @copy swan.UIComponent#maxWidth
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        maxWidth: number;
        /**
         * @copy swan.UIComponent#minHeight
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        minHeight: number;
        /**
         * @copy swan.UIComponent#maxHeight
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        maxHeight: number;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        setMeasuredSize(width: number, height: number): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        invalidateProperties(): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        validateProperties(): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        invalidateSize(): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        validateSize(recursive?: boolean): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        invalidateDisplayList(): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        validateDisplayList(): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        validateNow(): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        setLayoutBoundsSize(layoutWidth: number, layoutHeight: number): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        setLayoutBoundsPosition(x: number, y: number): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        getLayoutBounds(bounds: egret.Rectangle): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        getPreferredBounds(bounds: egret.Rectangle): void;
    }
}

declare module swan {
    /**
     * @language en_US
     * The RadioButtonGroup component defines a group of RadioButton components
     * that act as a single mutually exclusive component; therefore,
     * a user can select only one RadioButton component at a time.
     *
     * @event egret.Event.CHANGE Emitted when the value of the selected RadioButton component in
     * this group changes.
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/components/RadioButtonGroupExample.ts
     */
    /**
     * @language zh_CN
     * RadioButtonGroup 组件定义一组 RadioButton 组件，这些组件相互排斥；因此，用户每次只能选择一个 RadioButton 组件
     *
     * @event egret.Event.CHANGE 此组中所选 RadioButton 组件的值更改时分派。
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/components/RadioButtonGroupExample.ts
     */
    class RadioButtonGroup extends egret.EventDispatcher {
        /**
         * @language en_US
         * Constructor.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 构造函数。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        constructor();
        /**
         * @private
         * 组名
         */
        $name: string;
        /**
         * @private
         * 单选按钮列表
         */
        private radioButtons;
        /**
         * @language en_US
         * Returns the RadioButton component at the specified index.
         *
         * @param index The 0-based index of the RadioButton in the
         * RadioButtonGroup.
         *
         * @return The specified RadioButton component if index is between
         * 0 and <code>numRadioButtons</code> - 1.  Returns
         * <code>null</code> if the index is invalid.
         *
         * @see swan.RadioButtonGroup#numRadioButtons
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 返回指定索引处的 RadioButton 组件。
         *
         * @param index RadioButtonGroup 中的 RadioButton 的从零开始的索引。
         *
         * @return 当索引位于 0 和 <code>numRadioButtons</code> 之间时，指定的 RadioButton 组件为 1。
         * 如果索引无效，则返回 <code>null</code>。
         *
         * @see swan.RadioButtonGroup#numRadioButtons
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        getRadioButtonAt(index: number): RadioButton;
        /**
         * @private
         */
        $enabled: boolean;
        /**
         * @language en_US
         * Determines whether selection is allowed.  Note that the value returned
         * only reflects the value that was explicitly set on the
         * <code>RadioButtonGroup</code> and does not reflect any values explicitly
         * set on the individual RadioButtons.
         *
         * @default true
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 确定是否允许选择。请注意，返回的值仅反映对 <code>RadioButtonGroup</code> 显式设置的值，
         * 而不反映对各个 RadioButton 显式设置的任何值。
         *
         * @default true
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        enabled: boolean;
        /**
         * @language en_US
         * The number of RadioButtons that belong to this RadioButtonGroup.
         *
         * @default 0
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         *  属于此 RadioButtonGroup 的 RadioButton 数。
         *
         * @default 0
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        numRadioButtons: number;
        /**
         * @private
         */
        private _selectedValue;
        /**
         * @language en_US
         * The <code>value</code> property of the selected
         * RadioButton component in the group, if it has been set,
         * otherwise, the <code>label</code> property of the selected RadioButton.
         * If no RadioButton is selected, this property is <code>null</code>.
         *
         * <p>If you set <code>selectedValue</code>, selects the
         * first RadioButton component whose <code>value</code> or
         * <code>label</code> property matches this value.</p>
         *
         * @default null
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 组中所选 RadioButton 组件的 <code>value</code> 属性（如果未设置），
         * 否则为所选 RadioButton 组件的 <code>label</code> 属性。
         * 如果未选择任何 RadioButton，则此属性为 <code>null</code>。
         *
         * <p>如果设置了 <code>selectedValue</code>，则会选择 <code>value</code> 或 <code>label</code> 属性
         * 与此值匹配的第一个 RadioButton 组件。</p>
         *
         * @default null
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        selectedValue: any;
        /**
         * @private
         */
        private _selection;
        /**
         * @language en_US
         * Contains a reference to the currently selected
         * RadioButton component in the group.This property is valid only
         * when the target RadioButton is displayed on the display list
         *
         * @default null
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 当前被选中的单选按钮引用。此属性仅当目标RadioButton在显示列表时有效。
         *
         * @default null
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        selection: RadioButton;
        /**
         * @private
         * 添加单选按钮到组内
         */
        $addInstance(instance: RadioButton): void;
        /**
         * @private
         * 从组里移除单选按钮
         */
        $removeInstance(instance: RadioButton, addListener?: boolean): void;
        /**
         * @private
         * 设置选中的单选按钮
         */
        $setSelection(value: RadioButton, fireChange?: boolean): void;
        /**
         * @private
         * 改变选中项
         */
        private changeSelection(index, fireChange?);
        /**
         * @private
         * 单选按钮添加到显示列表
         */
        private addedHandler(event);
        /**
         * @private
         * 单选按钮从显示列表移除
         */
        private removedHandler(event);
    }
}

declare module swan {
    /**
     * @language en_US
     * The VScrollBar (vertical scrollbar) control lets you control
     * the portion of data that is displayed when there is too much data
     * to fit vertically in a display area.
     *
     * <p>Although you can use the VScrollBar control as a stand-alone control,
     * you usually combine it as part of another group of components to
     * provide scrolling functionality.</p>
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/components/VScrollBarExample.ts
     */
    /**
     * @language zh_CN
     * VScrollBar（垂直 ScrollBar）控件可以在因数据太多而不能在显示区域中以垂直方向完全显示时控制显示的数据部分。
     * <p>虽然 VScrollBar 控件可以单独使用，但通常将它与其他组件一起使用来提供滚动功能。</p>
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/components/VScrollBarExample.ts
     */
    class VScrollBar extends ScrollBarBase {
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected updateDisplayList(unscaledWidth: number, unscaledHeight: number): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected onPropertyChanged(event: swan.PropertyEvent): void;
    }
}

declare module swan {
    /**
     * @language en_US
     * An ViewStack navigator container consists of a collection of child
     * containers stacked on top of each other, where only one child
     * at a time is visible.
     * When a different child container is selected, it seems to replace
     * the old one because it appears in the same location.
     * However, the old child container still exists; it is just invisible.
     *
     * @event swan.CollectionEvent.COLLECTION_CHANGE Emitted when the ICollection has been updated in some way.
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/components/ViewStackExample.ts
     */
    /**
     * @language zh_CN
     * ViewStack 导航器容器由一组彼此上下堆叠的子容器组成，其中一次只可以显示一个子容器。
     * 选择另一个子容器后，它将显示在原来子容器的位置处，所以看起来好像此子容器替换了原来的子容器。
     * 但是，原来的子容器仍然存在，只不过它现在处于不可见状态。
     *
     * @event swan.CollectionEvent.COLLECTION_CHANGE 以某种方式更新 ICollection 后分派。
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/components/ViewStackExample.ts
     */
    class ViewStack extends Group implements ICollection {
        /**
         * @language en_US
         * Constructor.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 构造函数。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        constructor();
        /**
         * @language en_US
         * The layout object for this container.
         * This object is responsible for the measurement and layout of
         * the visual elements in the container.
         *
         * @default swan.BasicLayout
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 此容器的 layout 对象。此对象负责容器中可视元素的测量和布局。
         *
         * @default swan.BasicLayout
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        layout: LayoutBase;
        /**
         * @private
         */
        private _selectedChild;
        /**
         * @language en_US
         * A reference to the currently visible child container.
         * The default is a reference to the first child.
         * If there are no children, this property is <code>null</code>.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 对当前可见子容器的引用。默认设置为对第一个子容器的引用。如果没有子项，则此属性为 <code>null</code>。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        selectedChild: egret.DisplayObject;
        /**
         * @private
         * 在属性提交前缓存选中项索引
         */
        private proposedSelectedIndex;
        /**
         * @private
         */
        _selectedIndex: number;
        /**
         * @language en_US
         * The zero-based index of the currently visible child container.
         * Child indexes are in the range 0, 1, 2, ..., n - 1,
         * where <code>n</code> is the number of children.
         * The default value is 0, corresponding to the first child.
         * If there are no children, the value of this property is <code>-1</code>.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 当前可见子容器的从零开始的索引。子索引的范围是 0、1、2、...、n - 1，其中 <code>n</code> 是子项的数目。
         * 默认值是 0，对应于第一个子项。如果不存在子容器，则此属性的值为 -1。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        selectedIndex: number;
        /**
         * @private
         * 设置选中项索引
         */
        private setSelectedIndex(value);
        /**
         * @private
         * 一个子项被添加到容器内，此方法不仅在操作addChild()时会被回调，在操作setChildIndex()或swapChildren时也会回调。
         * 当子项索引发生改变时，会先触发$childRemoved()方法，然后触发$childAdded()方法。
         */
        $childAdded(child: egret.DisplayObject, index: number): void;
        /**
         * @private
         * 一个子项从容器内移除，此方法不仅在操作removeChild()时会被回调，在操作setChildIndex()或swapChildren时也会回调。
         * 当子项索引发生改变时，会先触发$childRemoved()方法，然后触发$childAdded()方法。
         */
        $childRemoved(child: egret.DisplayObject, index: number): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected commitProperties(): void;
        /**
         * @private
         *
         * @param newIndex
         */
        private commitSelection(newIndex);
        /**
         * @private
         *
         * @param child
         * @param visible
         */
        private showOrHide(child, visible);
        /**
         * @language en_US
         * number of children
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 子项数量
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        length: number;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        getItemAt(index: number): any;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        getItemIndex(item: any): number;
    }
}

declare module swan.sys {
    /**
     * @private
     * 一个工具类,用于容器的滚屏拖动操作，计算在一段时间持续滚动后释放，应该继续滚动到的值和缓动时间。
     * 使用此工具类，您需要创建一个 ScrollThrown 实例,并在滚动发生时调用start()方法，然后在触摸移动过程中调用update()更新当前舞台坐标。
     * 内部将会启动一个计时器定时根据当前位置计算出速度值，并缓存下来最后4个值。当停止滚动时，再调用finish()方法，
     * 将立即停止记录位移，并将计算出的最终结果存储到 Thrown.scrollTo 和 Thrown.duration 属性上。
     */
    class TouchScroll {
        /**
         * @private
         * 创建一个 TouchScroll 实例
         * @param updateFunction 滚动位置更新回调函数
         */
        constructor(updateFunction: (scrollPos: number) => void, endFunction: () => void, target: egret.IEventDispatcher);
        /**
         * @private
         * 当前容器滚动外界可调节的系列
         */
        $scrollFactor: number;
        /**
         * @private
         */
        private target;
        /**
         * @private
         */
        private updateFunction;
        /**
         * @private
         */
        private endFunction;
        /**
         * @private
         */
        private velocity;
        /**
         * @private
         */
        private previousVelocity;
        /**
         * @private
         */
        private currentPosition;
        /**
         * @private
         */
        private previousPosition;
        /**
         * @private
         */
        private currentScrollPos;
        /**
         * @private
         */
        private maxScrollPos;
        /**
         * @private
         * 触摸按下时的偏移量
         */
        private offsetPoint;
        /**
         * @private
         * 停止触摸时继续滚动的动画实例
         */
        private animation;
        /**
         * @private
         * 正在播放缓动动画的标志。
         */
        isPlaying(): boolean;
        /**
         * @private
         * 如果正在执行缓动滚屏，停止缓动。
         */
        stop(): void;
        private started;
        /**
         * @private
         * true表示已经调用过start方法。
         */
        isStarted(): boolean;
        /**
         * @private
         * 开始记录位移变化。注意：当使用完毕后，必须调用 finish() 方法结束记录，否则该对象将无法被回收。
         * @param touchPoint 起始触摸位置，以像素为单位，通常是stageX或stageY。
         */
        start(touchPoint: number, scrollValue: number, maxScrollValue: number): void;
        /**
         * @private
         * 更新当前移动到的位置
         * @param touchPoint 当前触摸位置，以像素为单位，通常是stageX或stageY。
         */
        update(touchPoint: number, maxScrollValue: number): void;
        /**
         * @private
         * 停止记录位移变化，并计算出目标值和继续缓动的时间。
         * @param currentScrollPos 容器当前的滚动值。
         * @param maxScrollPos 容器可以滚动的最大值。当目标值不在 0~maxValue之间时，将会应用更大的摩擦力，从而影响缓动时间的长度。
         */
        finish(currentScrollPos: number, maxScrollPos: number): void;
        /**
         * @private
         *
         * @param timeStamp
         * @returns
         */
        private onTick(timeStamp);
        /**
         * @private
         *
         * @param animation
         */
        private finishScrolling(animation?);
        /**
         * @private
         * 缓动到水平滚动位置
         */
        private throwTo(hspTo, duration?);
        /**
         * @private
         * 更新水平滚动位置
         */
        private onScrollingUpdate(animation);
    }
}

declare module swan {
    /**
     * @language en_US
     * Defines values for setting the <code>direction</code> property
     * of the <code>ProgressBar</code> class.
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/core/DirectionExample.ts
     */
    /**
     * @language zh_CN
     * 定义进度条等控件增长方向的常量
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/core/DirectionExample.ts
     */
    class Direction {
        /**
         * @language en_US
         * Specifies left-to-right direction.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 水平从左到右增长
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        static LTR: string;
        /**
         * @language en_US
         * Specifies right-to-left direction.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 水平从右到左增长
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        static RTL: string;
        /**
         * @language en_US
         * Specifies top-to-bottom direction.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 竖直从上到下增长
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        static TTB: string;
        /**
         * @language en_US
         * Specifies bottom-to-top direction.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 竖直从下到上增长
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        static BTT: string;
    }
}

declare module swan {
    /**
     * @language en_US
     * Interface of asset adapter.
     * If your project need to custom the resource parsing rule, you need to implement the <code>IAssetAdapter</code>.
     * And use the following code to inject it to the system:
     * <pre>
     *      var assetAdapter = new YourAssetAdapter();
     *      Stage.registerImplementation("swan.IAssetAdapter",assetAdapter)
     * </pre>
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     */
    /**
     * @language zh_CN
     * 素材适配器接口。
     * 若项目需要自定义 Image.source的解析规则，需要实现这个接口，
     * 然后调用如下代码注入自定义实现到框架即可：
     * <pre>
     *      var assetAdapter = new YourAssetAdapter();
     *      Stage.registerImplementation("swan.IAssetAdapter",assetAdapter)
     * </pre>
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     */
    interface IAssetAdapter {
        /**
         * @language en_US
         * parsing a source to asset.
         * @param source identifier of a new asset need to be resolved.
         * @param callBack called when complete resolving. Example：callBack(content:any,source:string):void;
         * @param thisObject <code>this</code> object of callback.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 解析素材。
         * @param source 待解析的新素材标识符。
         * @param callBack 解析完成回调函数，示例：callBack(content:any,source:string):void;。
         * @param thisObject callBack的this引用。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        getAsset(source: string, callBack: (content: any, source: string) => void, thisObject: any): void;
    }
}

declare module swan {
    /**
     * @language en_US
     * The IViewport interface is implemented by components that support a viewport.
     *
     * If a component's children are larger than the component,
     * and you want to clip the children to the component boundaries, you can define a viewport.
     *
     * A viewport is a rectangular subset of the area of a component that you want to display,
     * rather than displaying the entire component.
     *
     * @see swan.Scroller
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     */
    /**
     * @language zh_CN
     * 支持视区的组件接口。
     *
     * 如果组件的内容子项比组件要大，而且您向往子项可以在父级组件的边缘处被裁减，您可以定义一个视区。
     *
     * 视区是您希望显示的组件的区域的矩形子集，而不是显示整个组件。
     *
     * @see swan.Scroller
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     */
    interface IViewport extends UIComponent {
        /**
         * @language en_US
         * The width of the viewport's contents.
         *
         * If <code>scrollEnabled</code> is true, the viewport's
         * <code>contentWidth</code> defines the limit for horizontal scrolling
         * and the viewport's actual width defines how much of the content is visible.
         *
         * To scroll through the content horizontally, vary the
         * <code>scrollH</code> between 0 and
         * <code>contentWidth - width</code>.
         *
         * @readOnly
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 视域的内容的宽度。
         *
         * 如果 <code>scrollEnabled</code> 为 true， 则视域的 <code>contentWidth</code> 为水平滚动定义限制，
         * 且视域的实际宽度定义可见的内容量。
         *
         * 要在内容中水平滚动， 请在 0 和 contentWidth - width 之间更改 <code>scrollH</code> 。
         *
         * @readOnly
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        contentWidth: number;
        /**
         * @language en_US
         * The height of the viewport's content.
         *
         * If <code>scrollEnabled</code> is true, the viewport's
         * <code>contentHeight</code> defines the limit for vertical scrolling
         * and the viewport's actual height defines how much of the content is visible.
         *
         * To scroll through the content vertically, vary the
         * <code>scrollV</code> between 0 and
         * <code>contentHeight - height</code>.
         *
         * @readOnly
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 视域的内容的高度。
         *
         * 如果 <code>scrollEnabled</code> 为 true，则视域的 <code>contentHeight</code> 为垂直滚动定义限制，
         * 且视域的实际高度定义可见的内容量。要在内容中垂直滚动，请在 0 和 contentHeight - height
         * 之间更改 <code>scrollV</code>。
         *
         * @readOnly
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        contentHeight: number;
        /**
         * @language en_US
         * The x coordinate of the origin of the viewport in the component's coordinate system,
         * where the default value is (0,0) corresponding to the upper-left corner of the component.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 可视区域水平方向起始点。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        scrollH: number;
        /**
         * @language en_US
         * The y coordinate of the origin of the viewport in the component's coordinate system,
         * where the default value is (0,0) corresponding to the upper-left corner of the component.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 可视区域竖直方向起始点。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        scrollV: number;
        /**
         * @language en_US
         * If <code>true</code>, specifies to clip the children to the boundaries of the viewport.
         * If <code>false</code>, the container children extend past the container boundaries,
         * regardless of the size specification of the component.
         *
         * @default false
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 是否启用容器滚动。如果为 true，则将子项剪切到视区的边界，配合设置scrollH和scrollV属性将能滚动视区。
         * 如果为 false，则容器子代会从容器边界扩展过去，而设置scrollH和scrollV也无效。默认false。
         *
         * @default false
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        scrollEnabled: boolean;
    }
}

declare module swan {
    /**
     * @language en_US
     * Represents events that are emitted when a item has been touched.
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/events/ItemTapEventExample.ts
     */
    /**
     * @language zh_CN
     * 列表项触碰事件
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/events/ItemTapEventExample.ts
     */
    class ItemTapEvent extends egret.Event {
        /**
         * @language en_US
         * The type of the event object for an <code>itemTap</code> event.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * <code>itemTap</code> 事件的对象类型。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        static ITEM_TAP: string;
        /**
         * @language en_US
         * The item in the data provider of the associated item.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 触发触摸事件的项呈示器数据源项。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        item: any;
        /**
         * @language en_US
         * The item renderer in the list of the associated item.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 触发触摸事件的项呈示器。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        itemRenderer: IItemRenderer;
        /**
         * @language en_US
         * The index of the associated navigation item.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 触发触摸事件的项索引
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        itemIndex: number;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected clean(): void;
        /**
         * @language en_US
         * Emit an event with specified EventDispatcher. The emitted event will be cached in the object pool,
         * for the next cycle of reuse.
         *
         * @param target the target of event emitter.
         * @param eventType The event type; indicates the action that triggered the event.
         * @param itemRenderer The item renderer in the list of the associated item.
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
         * @param itemRenderer 触发触摸事件的项呈示器。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        static emitItemTapEvent(target: egret.IEventDispatcher, eventType: string, itemRenderer?: IItemRenderer): boolean;
    }
}

declare module swan {
    /**
     * @language en_US
     * The UIEvent class represents the event object passed to
     * the event listener for many UI events.
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/events/UIEventExample.ts
     */
    /**
     * @language zh_CN
     * UI事件
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/events/UIEventExample.ts
     */
    class UIEvent extends egret.Event {
        /**
         * @language en_US
         * Constructor.
         *
         * @param type The event type; indicates the action that triggered the event.
         * @param bubbles Specifies whether the event can bubble
         * up the display list hierarchy.
         * @param cancelable Specifies whether the behavior
         * associated with the event can be prevented.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 创建一个 UIEvent 实例
         *
         * @param type 事件类型；指示触发事件的动作。
         * @param bubbles 指定该事件是否可以在显示列表层次结构得到冒泡处理。
         * @param cancelable 指定是否可以防止与事件相关联的行为。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        constructor(type: string, bubbles?: boolean, cancelable?: boolean);
        /**
         * @language en_US
         * creation complete of component.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 组件创建完成
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        static CREATION_COMPLETE: string;
        /**
         * @language en_US
         * the ending of change.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 改变结束
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        static CHANGE_END: string;
        /**
         * @language en_US
         * The beginning of change.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 改变开始
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        static CHANGE_START: string;
        /**
         * @language en_US
         * Before close the panel.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 即将关闭面板事件
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        static CLOSING: string;
        /**
         * @language en_US
         * The coordinates of the UI components changed in it's parent.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * UI组件在父级容器中的坐标发生改变事件
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        static MOVE: string;
        /**
         * @language en_US
         * Emit an event with specified EventDispatcher. The emitted event will be cached in the object pool,
         * for the next cycle of reuse.
         *
         * @param target the target of event emitter.
         * @param eventType The event type; indicates the action that triggered the event.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 使用指定的EventEmitter对象来抛出事件对象。抛出的对象将会缓存在对象池上，供下次循环复用。
         *
         * @param target 事件派发目标。
         * @param eventType 事件类型；指示触发事件的动作。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        static emitUIEvent(target: egret.IEventDispatcher, eventType: string): boolean;
    }
}

declare module swan.sys {
    /**
     * @private
     * EXML配置管理器实例
     */
    var exmlConfig: EXMLConfig;
    /**
     * @private
     */
    class EXMLParser {
        /**
         * @private
         */
        constructor();
        /**
         * @private
         * 获取重复的ID名
         */
        getRepeatedIds: (xml: egret.XML) => string[];
        /**
         * @private
         */
        private getIds;
        /**
         * @private
         */
        private repeatedIdMap;
        /**
         * @private
         */
        private checkDeclarations;
        /**
         * @private
         * 当前类
         */
        private currentClass;
        /**
         * @private
         * 当前编译的类名
         */
        private currentClassName;
        /**
         * @private
         * 当前要编译的EXML文件
         */
        private currentXML;
        /**
         * @private
         * id缓存字典
         */
        private idDic;
        /**
         * @private
         * 状态代码列表
         */
        private stateCode;
        /**
         * @private
         */
        private stateNames;
        /**
         * @private
         * 需要单独创建的实例id列表
         */
        private stateIds;
        /**
         * @private
         */
        private idToNode;
        /**
         * @private
         */
        private skinParts;
        /**
         * @private
         */
        private bindings;
        /**
         * @private
         */
        private declarations;
        /**
         * @private
         * 延迟赋值字典
         */
        private delayAssignmentDic;
        /**
         * @private
         * 编译指定的XML对象为JavaScript代码。
         * @param xmlData 要编译的EXML文件内容
         * @param className 要编译成的完整类名，包括模块名。
         */
        parse(text: string): {
            new (): any;
        };
        /**
         * @private
         * 编译指定的XML对象为CpClass对象。
         */
        private parseClass(xmlData, className);
        /**
         * @private
         * 开始编译
         */
        private startCompile();
        /**
         * @private
         * 添加必须的id
         */
        private addIds(items);
        /**
         * @private
         * 是否为内部类。
         */
        private isInnerClass(node);
        /**
         * @private
         * 检测指定节点的属性是否含有视图状态
         */
        private containsState(node);
        /**
         * @private
         * 为指定节点创建id属性
         */
        private createIdForNode(node);
        /**
         * @private
         * 获取节点ID
         */
        private getNodeId(node);
        /**
         * @private
         * 为指定节点创建变量
         */
        private createVarForNode(node);
        /**
         * @private
         * 为指定节点创建初始化函数,返回函数名引用
         */
        private createFuncForNode(node);
        /**
         * @private
         * 检查目标类名是否是基本数据类型
         */
        private isBasicTypeData(className);
        /**
         * @private
         * 为指定基本数据类型节点实例化,返回实例化后的值。
         */
        private createBasicTypeForNode(node);
        /**
         * @private
         * 将节点属性赋值语句添加到代码块
         */
        private addAttributesToCodeBlock(cb, varName, node);
        /**
         * @private
         * 初始化子项
         */
        private initlizeChildNode(node, cb, varName);
        /**
         * @private
         * 解析内部类节点，并返回类名。
         */
        private parseInnerClass(node);
        /**
         * @private
         * 添加多个子节点到指定的属性
         */
        private addChildrenToProp(children, type, prop, cb, varName, errorInfo, propList, node);
        /**
         * @private
         * 指定节点是否是属性节点
         */
        private isProperty(node);
        /**
         * @private
         * 是否是普通赋值的key
         */
        private isNormalKey(key);
        /**
         * @private
         * 格式化key
         */
        private formatKey(key, value);
        /**
         * @private
         * 格式化值
         */
        private formatValue(key, value, node);
        /**
         * @private
         * 格式化字符串
         */
        private formatString(value);
        /**
         * @private
         /**
         * 转换HTML实体字符为普通字符
         */
        private unescapeHTMLEntity(str);
        /**
         * @private
         * 创建构造函数
         */
        private createConstructFunc();
        /**
         * @private
         * 是否含有includeIn和excludeFrom属性
         */
        private isStateNode(node);
        /**
         * @private
         * 获取视图状态名称列表
         */
        private getStateNames();
        /**
         * @private
         * 解析视图状态代码
         */
        private createStates(parentNode);
        /**
         * @private
         * 检查指定的ID是否创建了类成员变量，若没创建则为其创建。
         */
        private checkIdForState(node);
        /**
         * @private
         * 通过视图状态名称获取对应的视图状态
         */
        private getStateByName(name, node);
        /**
         * @private
         * 寻找节点的临近节点ID和位置
         */
        private findNearNodeId(node);
        /**
         * @private
         * 获取节点的完整类名，包括模块名
         */
        private getClassNameOfNode(node);
    }
}

declare module swan {
    /**
     * @language en_US
     * The ColumnAlign class defines the possible values for the
     * <code>columnAlign</code> property of the TileLayout class.
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/layout/ColumnAlignExample.ts
     */
    /**
     * @language zh_CN
     * ColumnAlign 类为 TileLayout 类的 <code>columnAlign</code> 属性定义可能的值。
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/layout/ColumnAlignExample.ts
     */
    class ColumnAlign {
        /**
         * @language en_US
         * Do not justify the rows.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 不将行两端对齐。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        static LEFT: string;
        /**
         * @language en_US
         * Justify the rows by increasing the vertical gap.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 通过增大水平间隙将行两端对齐。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        static JUSTIFY_USING_GAP: string;
        /**
         * @language en_US
         * Justify the rows by increasing the row height.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 通过增大行高度将行两端对齐。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        static JUSTIFY_USING_WIDTH: string;
    }
}

declare module swan {
    /**
     * @language en_US
     * The HorizontalLayout class arranges the layout elements in a horizontal sequence,
     * left to right, with optional gaps between the elements and optional padding
     * around the elements.
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/layout/HorizontalLayoutExample.ts
     */
    /**
     * @language zh_CN
     * HorizontalLayout 类按水平顺序从左到右排列布局元素，在元素和围绕元素的可选填充之间带有可选间隙。
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/layout/HorizontalLayoutExample.ts
     */
    class HorizontalLayout extends LinearLayoutBase {
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected measureReal(): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected measureVirtual(): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected updateDisplayListReal(width: number, height: number): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected updateDisplayListVirtual(width: number, height: number): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected getStartPosition(index: number): number;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected getElementSize(index: number): number;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected getElementTotalSize(): number;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        elementAdded(index: number): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected getIndexInView(): boolean;
    }
}

declare module swan {
    /**
     * @language en_US
     * The RowAlign class defines the possible values for the
     * <code>rowAlign</code> property of the TileLayout class.
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/layout/RowAlignExample.ts
     */
    /**
     * @language zh_CN
     * RowAlign 类为 TileLayout 类的 <code>rowAlign</code> 属性定义可能的值。
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/layout/RowAlignExample.ts
     */
    class RowAlign {
        /**
         * @language en_US
         * Do not justify the rows.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 不进行两端对齐。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        static TOP: string;
        /**
         * @language en_US
         * Justify the rows by increasing the vertical gap.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 通过增大垂直间隙将行两端对齐。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        static JUSTIFY_USING_GAP: string;
        /**
         * @language en_US
         * Justify the rows by increasing the row height.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 通过增大行高度将行两端对齐。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        static JUSTIFY_USING_HEIGHT: string;
    }
}

declare module swan {
    /**
     * @language en_US
     * The TileOrientation class defines the possible values for the
     * <code>orientation</code> property of the TileLayout class.
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/layout/TileOrientationExample.ts
     */
    /**
     * @language zh_CN
     * TileOrientation 类为 TileLayout 类的 <code>orientation</code> 属性定义可能的值。
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/layout/TileOrientationExample.ts
     */
    class TileOrientation {
        /**
         * @language en_US
         * Arranges elements row by row.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 逐行排列元素。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        static ROWS: string;
        /**
         * @language en_US
         * Arranges elements column by column.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 逐列排列元素。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        static COLUMNS: string;
    }
}

declare module swan {
    /**
     * @language en_US
     * The ArrayCollection class is a wrapper class that exposes an <code>any[]</code> as a collection that can be
     * accessed and manipulated using the methods and properties of the <code>ICollection</code> interfaces.
     * ArrayCollection can notify the view to update item when data source changed.
     *
     * @event swan.CollectionEvent.COLLECTION_CHANGE Emited when the ArrayCollection has been updated in some way.
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/collections/ArrayCollectionExample.ts
     */
    /**
     * @language zh_CN
     * ArrayCollection 类是数组的集合类数据结构包装器，可使用<code>ICollection</code>接口的方法和属性对其进行访问和处理。
     * 使用这种数据结构包装普通数组，能在数据源发生改变的时候主动通知视图刷新变更数据项。
     *
     * @event swan.CollectionEvent.COLLECTION_CHANGE 当 ArrayCollection 更新的的时候会派发此事件。
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/collections/ArrayCollectionExample.ts
     */
    class ArrayCollection extends egret.EventDispatcher implements ICollection {
        /**
         * @language en_US
         * Constructor. <p/>
         * Creates a new ArrayCollection using the specified source array.
         * If no array is specified an empty array will be used.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 构造函数。<p/>
         * 用指定的原始数组创建一个 ArrayCollection 实例。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        constructor(source?: any[]);
        /**
         * @private
         */
        private _source;
        /**
         * @language en_US
         * The source of data in the ArrayCollection.
         * The ArrayCollection object does not represent any changes that you make
         * directly to the source array. Always use the ICollection methods to view the collection.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 数据源
         * 通常情况下请不要直接调用Array的方法操作数据源，否则对应的视图无法收到数据改变的通知。通常都是通过ICollection的接口方法来查看数据。
         * 若对数据源进行了修改，请手动调用refresh()方法刷新数据。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        source: any[];
        /**
         * @language en_US
         * Applies the sort and filter to the view.
         * The ArrayCollection does not detect source data changes automatically,
         * so you must call the <code>refresh()</code>
         * method to update the view after changing the source data.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 在对数据源进行排序或过滤操作后可以手动调用此方法刷新所有数据,以更新视图。
         * ArrayCollection 不会自动检原始数据进行了改变,所以你必须调用<code>refresh()</code>方法去更新显示。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        refresh(): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        length: number;
        /**
         * @language en_US
         * Adds the specified item to the end of the list.
         * Equivalent to <code>addItemAt(item, length)</code>.
         * @param item The item to add.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 向列表末尾添加指定项目。等效于 <code>addItemAt(item, length)</code>。
         * @param item 要被添加的项。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        addItem(item: any): void;
        /**
         * @language en_US
         * Adds the item at the specified index.
         * The index of any item greater than the index of the added item is increased by one.
         * If the the specified index is less than zero or greater than the length
         * of the list, a Error which code is 1007 is thrown.
         * @param item The item to place at the index.
         * @param index The index at which to place the item.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 在指定的索引处添加项目。
         * 任何大于已添加项目的索引的项目索引都会增加 1。
         * 如果指定的索引比0小或者比最大长度要大。则会抛出1007异常。
         * @param item 要添加的项
         * @param index 要添加的指定索引位置
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        addItemAt(item: any, index: number): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        getItemAt(index: number): any;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        getItemIndex(item: any): number;
        /**
         * @language en_US
         * Notifies the view that an item has been updated.
         * @param item The item within the view that was updated.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 通知视图，某个项目的属性已更新。
         * @param item 视图中需要被更新的项。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        itemUpdated(item: any): void;
        /**
         * @language en_US
         * Removes all items from the list.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 删除列表中的所有项目。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        removeAll(): void;
        /**
         * @language en_US
         * Removes the item at the specified index and returns it.
         * Any items that were after this index are now one index earlier.
         * @param index The index from which to remove the item.
         * @return The item that was removed.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 删除指定索引处的项目并返回该项目。原先位于此索引之后的所有项目的索引现在都向前移动一个位置。
         * @param index 要被移除的项的索引。
         * @return 被移除的项。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        removeItemAt(index: number): any;
        /**
         * @language en_US
         * Replaces the item at the specified index.
         * @param item The new item to be placed at the specified index.
         * @param index The index at which to place the item.
         * @return The item that was replaced, or <code>null</code> if none.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 替换在指定索引处的项目，并返回该项目。
         * @param item 要在指定索引放置的新的项。
         * @param index 要被替换的项的索引位置。
         * @return 被替换的项目，如果没有该项则返回<code>null</code> 。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        replaceItemAt(item: any, index: number): any;
        /**
         * @language en_US
         * Replaces all items with a new source data, this method can not reset the scroller position of view.
         * @param newSource new source data.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 用新数据源替换原始数据源，此方法与直接设置source不同，它不会导致目标视图重置滚动位置。
         * @param newSource 新数据。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        replaceAll(newSource: any[]): void;
        /**
         * @private
         * 抛出事件
         */
        private emitCoEvent(kind, location?, oldLocation?, items?, oldItems?);
    }
}

declare module swan {
    /**
     * @language en_US
     * The CheckBox component consists of an optional label and a small box
     * that can contain a check mark or not.<p/>
     *
     * When a user clicks a CheckBox component or its associated text,
     * the CheckBox component sets its <code>selected</code> property
     * to <code>true</code> for checked, and to <code>false</code> for unchecked.
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/components/CheckboxExample.ts
     */
    /**
     * @language zh_CN
     * CheckBox 组件包含一个可选标签和一个小方框，该方框内可以包含/不包含复选标记。<p/>
     * 用户单击 CheckBox 组件或其关联文本时，CheckBox 组件会将其 selected 属性设置为 true（表示选中）或 false（表示取消选中）。
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/components/CheckboxExample.ts
     */
    class CheckBox extends ToggleButton {
        /**
         * @language en_US
         * Constructor.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 创建一个CheckBox
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        constructor();
    }
}

declare module swan {
    /**
     * @language en_US
     * Editable text for displaying,
     * scrolling, selecting, and editing text.
     * @includeExample examples/Samples/src/extension/swan/components/EditablTextExample.ts
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     */
    /**
     * @language zh_CN
     * 可编辑文本，用于显示、滚动、选择和编辑文本。
     * @includeExample examples/Samples/src/extension/swan/components/EditablTextExample.ts
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     */
    class EditableText extends egret.TextField implements UIComponent, IDisplayText {
        /**
         * @language en_US
         * Constructor.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 构造函数。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        constructor();
        /**
         * @private
         *
         */
        $invalidateContentBounds(): void;
        /**
         * @private
         *
         * @param value
         */
        $setWidth(value: number): void;
        /**
         * @private
         *
         * @param value
         */
        $setHeight(value: number): void;
        /**
         * @private
         *
         * @param value
         */
        $setText(value: string): void;
        /**
         * @private
         */
        private _widthConstraint;
        /**
         * @private
         * UIComponentImpl 定义的所有变量请不要添加任何初始值，必须统一在此处初始化。
         */
        private initializeUIValues;
        /**
         * @copy swan.Component#createChildren()
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected createChildren(): void;
        /**
         * @copy swan.Component#childrenCreated()
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected childrenCreated(): void;
        /**
         * @copy swan.Component#commitProperties()
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected commitProperties(): void;
        /**
         * @copy swan.Component#measure()
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected measure(): void;
        /**
         * @copy swan.Component#updateDisplayList()
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected updateDisplayList(unscaledWidth: number, unscaledHeight: number): void;
        /**
         * @copy swan.Component#invalidateParentLayout()
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected invalidateParentLayout(): void;
        /**
         * @private
         */
        $UIComponent: Object;
        /**
         * @private
         */
        $includeInLayout: boolean;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        includeInLayout: boolean;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        left: number;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        right: number;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        top: number;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        bottom: number;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        horizontalCenter: number;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        verticalCenter: number;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        percentWidth: number;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        percentHeight: number;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        explicitWidth: number;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        explicitHeight: number;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        minWidth: number;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        maxWidth: number;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        minHeight: number;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        maxHeight: number;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        setMeasuredSize(width: number, height: number): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        invalidateProperties(): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        validateProperties(): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        invalidateSize(): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        validateSize(recursive?: boolean): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        invalidateDisplayList(): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        validateDisplayList(): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        validateNow(): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        setLayoutBoundsSize(layoutWidth: number, layoutHeight: number): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        setLayoutBoundsPosition(x: number, y: number): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        getLayoutBounds(bounds: egret.Rectangle): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        getPreferredBounds(bounds: egret.Rectangle): void;
    }
}

declare module swan {
    /**
     * @language en_US
     * The HSlider (horizontal slider) control lets users select a value
     * by moving a slider thumb between the end points of the slider track.
     * The current value of the slider is determined by the relative location of the thumb between
     * the end points of the slider, corresponding to the slider's minimum and maximum values.
     *
     * @includeExample examples/Samples/src/extension/swan/components/HSliderExample.ts
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     */
    /**
     * @language zh_CN
     * 使用 HSlider（水平滑块）控件，用户可通过在滑块轨道的端点之间移动滑块来选择值。
     * 滑块的当前值由滑块端点（对应于滑块的最小值和最大值）之间滑块的相对位置确定。
     *
     * @includeExample examples/Samples/src/extension/swan/components/HSliderExample.ts
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     */
    class HSlider extends SliderBase {
        /**
         * @language en_US
         * Constructor.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 构造函数。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        constructor();
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected pointToValue(x: number, y: number): number;
        /**
         * @private
         *
         * @returns
         */
        private getThumbRange();
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected updateSkinDisplayList(): void;
    }
}

declare module swan {
    /**
     * @language en_US
     * The Image control lets you show JPEG, PNG, and GIF files
     * at runtime. Image inherit Bitmap，so you can set the <code>bitmapData</code> property
     * to show the data. you can also set the <code>source</code> property, Image will auto load
     * and show the url image or the bitmapData.
     *
     * @event egret.Event.COMPLETE Emitted when the image loaded complete.
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/components/ImageExample.ts
     */
    /**
     * @language zh_CN
     * Image 控件允许您在运行时显示 JPEG、PNG 等图片文件文件。Image 继承至 Bitmap，因此您可以直接对其 bitmapData 属性，
     * 赋值从外部加载得到的位图数据以显示对应图片。同时，Image 还提供了更加方便的 source 属性，source 属性可以接受一个网络图片url作为值，
     * 赋值为url后，它内部会自动去加载并显示图片。并且您同样也可以直接把 Texture 对象赋值给 source 属性以显示图片。
     *
     * @event egret.Event.COMPLETE 当图片加载完成后调度
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/components/ImageExample.ts
     */
    class Image extends egret.Bitmap implements UIComponent {
        /**
         * @language en_US
         * Constructor.
         *
         * @param source The source used for the bitmap fill. the value can be
         * a string or an instance of <code>Texture</code>
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 构造函数。
         *
         * @param source 用于位图填充的源。可以是一个字符串或者 <code>Texture</code> 对象
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        constructor(source?: string | egret.Texture);
        /**
         * @language en_US
         * Represent a Rectangle Area that the 9 scale area of Image.
         * Notice: This property is valid only when <code>fillMode</code>
         * is <code>BitmapFillMode.SCALE</code>.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 矩形区域，它定义素材对象的九个缩放区域。
         * 注意:此属性仅在<code>fillMode</code>为<code>BitmapFillMode.SCALE</code>时有效。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        scale9Grid: egret.Rectangle;
        fillMode: string;
        $setFillMode(value: string): void;
        /**
         * @private
         */
        private sourceChanged;
        /**
         * @private
         */
        private _source;
        /**
         * @language en_US
         * The source used for the bitmap fill. the value can be
         * a string or an instance of <code>Texture</code>
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 用于位图填充的源。可以是一个字符串或者 <code>Texture</code> 对象
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        source: string | egret.Texture;
        /**
         * @private
         *
         * @param value
         */
        $setBitmapData(value: egret.Texture): void;
        /**
         * @private
         * 解析source
         */
        private parseSource();
        /**
         * @private
         * 资源发生改变
         */
        private contentChanged(data, source);
        /**
         * @private
         *
         * @param bounds
         */
        $measureContentBounds(bounds: egret.Rectangle): void;
        /**
         * @private
         *
         * @param context
         */
        $render(context: egret.sys.RenderContext): void;
        /**
         * @private
         * UIComponentImpl 定义的所有变量请不要添加任何初始值，必须统一在此处初始化。
         */
        private initializeUIValues;
        /**
         * @copy swan.UIComponent#createChildren
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected createChildren(): void;
        /**
         * @copy swan.UIComponent#childrenCreated
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected childrenCreated(): void;
        /**
         * @copy swan.UIComponent#commitProperties
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected commitProperties(): void;
        /**
         * @copy swan.UIComponent#measure
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected measure(): void;
        /**
         * @copy swan.UIComponent#updateDisplayList
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected updateDisplayList(unscaledWidth: number, unscaledHeight: number): void;
        /**
         * @copy swan.UIComponent#invalidateParentLayout
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected invalidateParentLayout(): void;
        /**
         * @private
         */
        $UIComponent: Object;
        /**
         * @private
         */
        $includeInLayout: boolean;
        /**
         * @copy swan.UIComponent#includeInLayout
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        includeInLayout: boolean;
        /**
         * @copy swan.UIComponent#left
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        left: number;
        /**
         * @copy swan.UIComponent#right
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        right: number;
        /**
         * @copy swan.UIComponent#top
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        top: number;
        /**
         * @copy swan.UIComponent#bottom
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        bottom: number;
        /**
         * @copy swan.UIComponent#horizontalCenter
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        horizontalCenter: number;
        /**
         * @copy swan.UIComponent#verticalCenter
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        verticalCenter: number;
        /**
         * @copy swan.UIComponent#percentWidth
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        percentWidth: number;
        /**
         * @copy swan.UIComponent#percentHeight
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        percentHeight: number;
        /**
         * @copy swan.UIComponent#explicitWidth
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        explicitWidth: number;
        /**
         * @copy swan.UIComponent#explicitHeight
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        explicitHeight: number;
        /**
         * @copy swan.UIComponent#minWidth
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        minWidth: number;
        /**
         * @copy swan.UIComponent#maxWidth
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        maxWidth: number;
        /**
         * @copy swan.UIComponent#minHeight
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        minHeight: number;
        /**
         * @copy swan.UIComponent#maxHeight
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        maxHeight: number;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        setMeasuredSize(width: number, height: number): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        invalidateProperties(): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        validateProperties(): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        invalidateSize(): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        validateSize(recursive?: boolean): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        invalidateDisplayList(): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        validateDisplayList(): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        validateNow(): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        setLayoutBoundsSize(layoutWidth: number, layoutHeight: number): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        setLayoutBoundsPosition(x: number, y: number): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        getLayoutBounds(bounds: egret.Rectangle): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        getPreferredBounds(bounds: egret.Rectangle): void;
    }
}

declare module swan {
    /**
     * @language en_US
     * The ItemRenderer class is the base class for item renderers.
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/components/ItemRendererExample.ts
     */
    /**
     * @language zh_CN
     * ItemRenderer 类是项呈示器的基类。
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/components/ItemRendererExample.ts
     */
    class ItemRenderer extends Group implements IItemRenderer {
        /**
         * @language en_US
         * Constructor.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 构造函数。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        constructor();
        /**
         * @private
         */
        private _data;
        /**
         * @language en_US
         * The data to render or edit.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 要呈示或编辑的数据。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        data: any;
        /**
         * @language en_US
         * Update the view when the <code>data</code> property changes.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 当数据改变时，更新视图。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected dataChanged(): void;
        /**
         * @private
         */
        private _selected;
        /**
         * @language en_US
         * Contains <code>true</code> if the item renderer
         * can show itself as selected.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 如果项呈示器可以将其自身显示为已选中，则为 true。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        selected: boolean;
        /**
         * @language en_US
         * The index of the item in the data provider
         * of the host component of the item renderer.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 项呈示器的数据提供程序中的项目索引。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        itemIndex: number;
        /**
         * @private
         * 指示第一次分派 TouchEvent.TOUCH_BEGIN 时，触摸点是否在按钮上。
         */
        private touchCaptured;
        /**
         * @language en_US
         * Handles <code>TouchEvent.TOUCH_BEGIN</code> events
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 触碰开始时触发事件
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected onTouchBegin(event: egret.TouchEvent): void;
        /**
         * @private
         * 舞台上触摸弹起事件
         */
        private onStageTouchEnd(event);
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected getCurrentState(): string;
    }
}

declare module swan {
    /**
     * @language en_US
     * The List control displays a vertical or horizontal list of items.
     * The user can select one or more items from the list, depending
     * on the value of the <code>allowMultipleSelection</code> property.
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/components/ListExample.ts
     */
    /**
     * @language zh_CN
     * List 控件可显示垂直或水平的项目列表。用户可以根据 <code>allowMultipleSelection</code> 属性的值从列表中选择一个或多个项目。
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/components/ListExample.ts
     */
    class List extends ListBase {
        /**
         * @language en_US
         * whether are allowed to multiple selection.
         * If <code>true</code> tap an unselected item will be selected,
         * and tap the item again will cancel selection.
         *
         * @default false
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 是否允许同时选中多项,设置为 <code>true</code> 时，触摸按下未选中的项呈示器，将会设置该项选中，再次按下将会取消选中。
         * 可以设置多项为选中状态。
         *
         * @default false
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        allowMultipleSelection: boolean;
        /**
         * @private
         */
        private _selectedIndices;
        /**
         * @private
         */
        private _proposedSelectedIndices;
        /**
         * @language en_US
         * An Array of numbers representing the indices of the currently selected
         * item or items.
         *
         * @default []
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 当前选中的一个或多个项目的索引列表。
         *
         * @default []
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        selectedIndices: number[];
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        selectedIndex: number;
        /**
         * @language en_US
         * An Array representing the currently selected data items.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 表示当前选定数据项的列表
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        selectedItems: any[];
        /**
         * @language en_US
         * Specify whether the selectedIndices changed programmatically or due to
         * user interaction.
         *
         * @param value An array of numbers representing the indices of the selected
         * @param emitChangeEvent whether emitted a change event.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 设置多个选中项。
         *
         * @param value 选中项索引的数组
         * @param emitChangeEvent 是否派发changed事件
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected setSelectedIndices(value: number[], emitChangeEvent?: boolean): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected commitProperties(): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected commitSelection(emitChangedEvents?: boolean): boolean;
        /**
         * @private
         * 是否是有效的索引
         */
        private isValidIndex;
        /**
         * @language en_US
         * Given a new selection interval, figure out which
         * items are newly added/removed from the selection interval and update
         * selection properties and view accordingly.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 从给定的选择区间中找出新增或者移除的项，并更新属性。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected commitMultipleSelection(): void;
        /**
         * @private
         *
         * @param index
         * @returns
         */
        $isItemIndexSelected(index: number): boolean;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        dataProviderRefreshed(): void;
        /**
         * @private
         * 计算当前的选中项列表
         */
        private calculateSelectedIndices(index);
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected onRendererTouchEnd(event: egret.TouchEvent): void;
    }
}

declare module swan {
    /**
     * @language en_US
     * The Panel class defines a container that includes a title bar,
     * a closeButton, a moveArea, and a content area for its children.
     *
     * @event swan.UIEvent.CLOSING Emitted when the close button is taped
     * you can use <code>event.preventDefault()</code> to prevent close.
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/components/PanelExample.ts
     */
    /**
     * @language zh_CN
     * Panel 类定义一个容器，该容器为其子代提供标题栏、关闭按钮、可移动区域和内容区域。
     *
     * @event swan.UIEvent.CLOSING 面板即将关闭事件，在关闭按钮被点击后抛出，
     * 监听此事件并调用<code>event.preventDefault()</code>能够阻止面板被关闭。
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/components/PanelExample.ts
     */
    class Panel extends Component {
        /**
         * @language en_US
         * Constructor.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 构造函数。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        constructor();
        /**
         * @private
         * 在窗体上按下时前置窗口
         */
        private onWindowTouchBegin(event);
        /**
         * @language en_US
         * [write-only] This property is Usually invoked in resolving an EXML for adding multiple children quickly.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * [只写] 此属性通常在 EXML 的解析器中调用，便于快速添加多个子项。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        elementsContent: egret.DisplayObject[];
        /**
         * @language en_US
         * The skin part that defines the appearance of the close button.
         * When taped, the close button emits a <code>closing</code> event.
         *
         * @skinPart
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 关闭按钮
         *
         * @skinPart
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        closeButton: Button;
        /**
         * @language en_US
         * The area where the user must drag to move the window.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 可移动区域
         *
         * @skinPart
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        moveArea: egret.DisplayObject;
        /**
         * @language en_US
         * The skin part that defines the appearance of the
         * title text in the container.
         *
         * @skinPart
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 标题显示对象
         *
         * @skinPart
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        titleDisplay: IDisplayText;
        /**
         * @private
         */
        private _title;
        /**
         * @language en_US
         * Title or caption displayed in the title bar.
         *
         * @default ""
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 标题栏中显示的标题。
         *
         * @default ""
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        title: string;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected partAdded(partName: string, instance: any): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected partRemoved(partName: string, instance: any): void;
        /**
         * @language en_US
         * Emites the "closing" event when the closeButton is clicked.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 当 closeButton 被点击时派发 “closing” 事件
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected onCloseButtonClick(event: egret.TouchEvent): void;
        /**
         * @language en_US
         * Close the panel and remove from the parent container.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 关闭面板，从父级容器移除自身。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        close(): void;
        /**
         * @private
         * 触摸按下时的偏移量
         */
        private offsetPointX;
        /**
         * @private
         */
        private offsetPointY;
        /**
         * @language en_US
         * Called when the user starts dragging a Panel.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 在可移动区域按下
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected onTouchBegin(event: egret.TouchEvent): void;
        /**
         * @language en_US
         * Called when the user drags a Panel.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 触摸拖拽时的移动事件
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected onTouchMove(event: egret.TouchEvent): void;
        /**
         * @language en_US
         * Called when the user releases the Panel.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 在舞台上弹起事件
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected onTouchEnd(event: egret.TouchEvent): void;
    }
}

declare module swan {
    /**
     * @language en_US
     * The ProgressBar control provides a visual representation of the progress of a task over time.
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/components/ProgressBarExample.ts
     */
    /**
     * @language zh_CN
     * ProgressBar 控件为随时间而变的任务进度提供了形象化的表示。
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/components/ProgressBarExample.ts
     */
    class ProgressBar extends Range {
        /**
         * @language en_US
         * Constructor.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 构造函数。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        constructor();
        /**
         * @language en_US
         * this hightlight component of the progressbar.
         *
         * @skinPart
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 进度高亮显示对象。
         *
         * @skinPart
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        thumb: swan.UIComponent;
        /**
         * @language en_US
         * the label of the progressbar.
         *
         * @skinPart
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 进度条文本
         *
         * @skinPart
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        labelDisplay: Label;
        /**
         * @private
         */
        private _labelFunction;
        /**
         * @language en_US
         * a text format callback function。example：
         * <code>labelFunction(value:Number,maximum:Number):String;</code>
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 进度条文本格式化回调函数。示例：
         * <code>labelFunction(value:Number,maximum:Number):String;</code>
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        labelFunction: (value: number, maximum: number) => string;
        /**
         * @language en_US
         * Convert the current value to display text
         *
         * @param value the current value
         * @param maximum the maximum value
         *
         * @return a converted text
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 将当前value转换成文本
         *
         * @param value 当前值
         * @param maximum 最大值
         *
         * @return 转换后的文本
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected valueToLabel(value: number, maximum: number): string;
        /**
         * @private
         */
        private _slideDuration;
        /**
         * @language en_US
         * Duration in milliseconds for a sliding animation
         * when the value changing. If the vlaue is 0, no animation will be done.
         *
         * @default 500
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * value改变时更新视图的缓动动画时间(毫秒为单位)。设置为0则不执行缓动。
         *
         * @default 500
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        slideDuration: number;
        /**
         * @private
         */
        private _direction;
        /**
         * @language en_US
         * Direction in which the fill of the ProgressBar expands toward completion.
         * you should use the <code>Direction</code> class constants to set the property.
         *
         * @default Direction.LTR
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * ProgressBar 填充在逐步完成过程中扩展的方向。使用 <code>Direction</code> 类定义的常量。
         *
         * @default Direction.LTR
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        direction: string;
        /**
         * @private
         * 动画实例
         */
        private animation;
        /**
         * @private
         * 动画播放结束时要到达的value。
         */
        private slideToValue;
        /**
         * @private
         *
         * @param newValue
         */
        $setValue(newValue: number): void;
        /**
         * @private
         */
        private animationValue;
        /**
         * @private
         * 动画播放更新数值
         */
        private animationUpdateHandler(animation);
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected partAdded(partName: string, instance: any): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected partRemoved(partName: string, instance: any): void;
        /**
         * @private
         * thumb的位置或尺寸发生改变
         */
        private onThumbResize(event);
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected updateSkinDisplayList(): void;
    }
}

declare module swan {
    /**
     * @language en_US
     * The RadioButton component allows the user make a single choice
     * within a set of mutually exclusive choices.
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/components/RadioButtonExample.ts
     */
    /**
     * @language zh_CN
     * RadioButton 组件使用户可在一组互相排斥的选择中做出一种选择
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/components/RadioButtonExample.ts
     */
    class RadioButton extends ToggleButton {
        /**
         * @language en_US
         * Constructor.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 构造函数。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        constructor();
        /**
         * @private
         * 在RadioButtonGroup中的索引
         */
        $indexNumber: number;
        /**
         * @private
         * 所属的RadioButtonGroup
         */
        $radioButtonGroup: RadioButtonGroup;
        /**
         * @language en_US
         * The RadioButton component is enabled if the
         * RadioButtonGroup is enabled and the RadioButton itself is enabled.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 如果 RadioButtonGroup 启用且 RadioButton 本身也启用，则 RadioButton 组件启用。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        enabled: boolean;
        /**
         * @private
         */
        private _group;
        /**
         * @language en_US
         * The RadioButtonGroup component to which this RadioButton belongs.
         * If this property is not set,
         * a unique RadioButtonGroup is created automatically based on the groupName property.
         *
         * @see swan.RadioButton#groupName
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 此 RadioButton 所属的 RadioButtonGroup 组件。
         * 若不设置此属性，则根据groupName属性自动创建一个唯一的RadioButtonGroup。
         *
         * @see swan.RadioButton#groupName
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        group: RadioButtonGroup;
        /**
         * @private
         */
        private groupChanged;
        /**
         * @private
         */
        private _groupName;
        /**
         * @language en_US
         * Specifies the name of the group to which this RadioButton component belongs
         *
         * @default “radioGroup”
         *
         * @see swan.RadioButton#group
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * RadioButton 组件所属的组的名称
         *
         * @default “radioGroup”
         *
         * @see swan.RadioButton#group
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        groupName: string;
        /**
         * @private
         *
         * @param value
         */
        $setSelected(value: boolean): void;
        /**
         * @private
         */
        private _value;
        /**
         * @language en_US
         * Optional user-defined value
         * that is associated with a RadioButton component.
         *
         * @default null
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 与 RadioButton 组件关联的可选用户定义值。
         *
         * @default null
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        value: any;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected commitProperties(): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected updateDisplayList(unscaledWidth: number, unscaledHeight: number): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected buttonReleased(): void;
        /**
         * @private
         * 添此单选按钮加到组
         */
        private addToGroup();
    }
}

declare module swan {
    /**
     * @language en_US
     * The Scroller component displays a single scrollable component,
     * called a viewport, and horizontal and vertical scroll bars.
     * The viewport must implement the IViewport interface.
     * <p>The Group components implement the IViewport interface
     * and can be used as the children of the Scroller control,
     * as the following example shows:</p>
     * <pre>
     *       <s:Scroller width="100" height="100">
     *           <s:Group>
     *               <s:Image width="300" height="400" source="assets/logo.jpg"/>
     *           </s:Group>
     *       </s:Scroller>
     * </pre>
     * <p>The size of the Image control is set larger than that of its parent Group container.
     * By default, the child extends past the boundaries of the parent container.
     * Rather than allow the child to extend past the boundaries of the parent container,
     * the Scroller specifies to clip the child to the boundaries and display scroll bars.</p>
     *
     * @event swan.UIEvent.CHANGE_START Emitted when the scroll position is going to change
     * @event swan.UIEvent.CHANGE_END Emitted when the scroll position changed complete
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/components/ScrollerExample.ts
     */
    /**
     * @language zh_CN
     * Scroller 组件显示一个称为视域的单个可滚动组件，以及水平滚动条和垂直滚动条。该视域必须实现 IViewport 接口。
     * <p>Group 组件实现 IViewport 接口，且可以用作 Scroller 控件的子代，如下例所示：</p>
     * <pre>
     *       <s:Scroller width="100" height="100">
     *           <s:Group>
     *               <s:Image width="300" height="400" source="assets/logo.jpg"/>
     *           </s:Group>
     *       </s:Scroller>
     * </pre>
     * Image 控件的大小比其父 Group 容器设置得大。默认情况下，子代超过父容器的边界。
     * Scroller 会指定将子代剪切到边界并显示滚动条，而不是让子代超过父容器的边界。
     *
     * @event swan.UIEvent.CHANGE_START 滚动位置改变开始
     * @event swan.UIEvent.CHANGE_END 滚动位置改变结束
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/components/ScrollerExample.ts
     */
    class Scroller extends Component {
        /**
         * @language en_US
         * The threshold value(in pixels) trigger the rolling.
         * when the touch points deviate from the initial touch point than this value will trigger the rolling.
         *
         * @default 5
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 开始触发滚动的阈值（以像素为单位），当触摸点偏离初始触摸点的距离超过这个值时才会触发滚动。
         *
         * @default 5
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        static scrollThreshold: number;
        /**
         * @language en_US
         * Constructor.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 构造函数。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        constructor();
        /**
         * @language en_US
         * Adjust the speed to get out of the slide end.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 调节滑动结束时滚出的速度。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        throwSpeed: number;
        /**
         * @private
         */
        $getThrowInfo(currentPos: number, toPos: number): swan.ScrollerThrowEvent;
        /**
         * @private
         */
        $Scroller: Object;
        /**
         * @language en_US
         * the horizontal scroll bar
         *
         * @skinPart
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 水平滚动条
         *
         * @skinPart
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        horizontalScrollBar: swan.HScrollBar;
        /**
         * @language en_US
         * the vertical scroll bar
         *
         * @skinPart
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 垂直滚动条
         *
         * @skinPart
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        verticalScrollBar: swan.VScrollBar;
        /**
         * @language en_US
         * Indicates under what conditions the vertical scroll bar is displayed.
         * <p><code>ScrollPolicy.ON</code> - the scroll bar is always displayed.</p>
         * <p><code>ScrollPolicy.OFF</code> - the scroll bar is never displayed.</p>
         * <p><code>ScrollPolicy.AUTO</code> - the scroll bar is displayed when
         *  the viewport's contentHeight is larger than its height.
         *
         * @default ScrollPolicy.AUTO
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 指示在哪些条件下会显示垂直滑动条。
         * <p><code>ScrollPolicy.ON</code> - 始终显示滚动条。</p>
         * <p><code>ScrollPolicy.OFF</code> - 从不显示滚动条。</p>
         * <p><code>ScrollPolicy.AUTO</code> - 当视域的 contentHeight 大于其自身的高度时显示滚动条。</p>
         *
         * @default ScrollPolicy.AUTO
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        scrollPolicyV: string;
        /**
         * @language en_US
         * Indicates under what conditions the horizontal scroll bar is displayed.
         * <p><code>ScrollPolicy.ON</code> - the scroll bar is always displayed.</p>
         * <p><code>ScrollPolicy.OFF</code> - the scroll bar is never displayed.</p>
         * <p><code>ScrollPolicy.AUTO</code> - the scroll bar is displayed when
         *  the viewport's contentWidth is larger than its width.
         *
         * @default ScrollPolicy.AUTO
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 指示在哪些条件下会显示水平滑动条。
         * <p><code>ScrollPolicy.ON</code> - 始终显示滚动条。</p>
         * <p><code>ScrollPolicy.OFF</code> - 从不显示滚动条。</p>
         * <p><code>ScrollPolicy.AUTO</code> - 当视域的 contentWidth 大于其自身的宽度时显示滚动条。</p>
         *
         * @default ScrollPolicy.AUTO
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        scrollPolicyH: string;
        /**
         * @language en_US
         * The viewport component to be scrolled.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 要滚动的视域组件。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        viewport: IViewport;
        /**
         * @private
         * 安装并初始化视域组件
         */
        private installViewport();
        /**
         * @private
         * 卸载视域组件
         */
        private uninstallViewport();
        private onViewPortRemove(event);
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected setSkin(skin: Skin): void;
        /**
         * @private
         *
         * @param event
         */
        private onTouchEndCapture(event);
        /**
         * @private
         * 若这个Scroller可以滚动，阻止当前事件，延迟100ms再抛出。
         */
        private onTouchBeginCapture(event);
        /**
         * @private
         *
         * @param event
         */
        private delayEmitEvent(event);
        /**
         * @private
         *
         * @param e
         */
        private onDelayTouchEventTimer(e?);
        /**
         * @private
         * 检查当前滚动策略，若有一个方向可以滚动，返回true。
         */
        private checkScrollPolicy();
        /**
         * @private
         *
         * @param event
         */
        private onTouchBegin(event);
        /**
         * @private
         *
         * @param event
         */
        private onTouchMove(event);
        /**
         * @private
         *
         * @param event
         */
        private onTouchEnd(event);
        /**
         * @private
         *
         * @param scrollPos
         */
        private horizontalUpdateHandler(scrollPos);
        /**
         * @private
         *
         * @param scrollPos
         */
        private verticalUpdateHandler(scrollPos);
        /**
         * @private
         *
         */
        private horizontalEndHandler();
        /**
         * @private
         *
         */
        private verticalEndHanlder();
        /**
         * @private
         *
         */
        private onChangeEnd();
        /**
         * @private
         *
         * @param event
         */
        private onAutoHideTimer(event);
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected updateDisplayList(unscaledWidth: number, unscaledHeight: number): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected partAdded(partName: string, instance: any): void;
    }
}

declare module swan {
    /**
     * @language en_US
     * The TabBar class displays a set of identical tabs.
     * One tab can be selected at a time, and the first tab is selected by default.
     * <p>The set of tabs is defined by the <code>dataProvider</code> property.
     * The appearance of each tab is defined by the <code>ItemRenderer</code> class.</p>
     * <p>You can use the TabBar control to set the active child of a ViewStack container,
     * as the following example shows:</p>
     * <pre>
     *       <s:TabBar dataProvider="{viewStack}"/>
     *       <s:ViewStack id="viewStack">
     *          <s:Group name="tab1"/>
     *          <s:Group name="tab2"/>
     *          <s:Group name="tab3"/>
     *       </s:ViewStack>
     * </pre>
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/components/TabBarExample.ts
     */
    /**
     * @language zh_CN
     * TabBar 类显示一组相同的选项卡。一次可以选择一个选项卡，且默认情况下选择第一个选项卡。
     * <p>该组选项卡由 <code>dataProvider</code> 属性定义。
     * 每个选项卡的外观由 <code>ItemRenderer</code> 定义。</p>
     * <p>可以使用 TabBar 控件设置 ViewStack 容器的活动子代，如下例所示：</p>
     * <pre>
     *       <s:TabBar dataProvider="{viewStack}"/>
     *       <s:ViewStack id="viewStack">
     *          <s:Group name="tab1"/>
     *          <s:Group name="tab2"/>
     *          <s:Group name="tab3"/>
     *       </s:ViewStack>
     * </pre>
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/components/TabBarExample.ts
     */
    class TabBar extends ListBase {
        /**
         * @language en_US
         * Constructor.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 构造函数。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        constructor();
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected createChildren(): void;
        /**
         * @private
         *
         * @param value
         */
        $setDataProvider(value: ICollection): void;
        /**
         * @private
         */
        private indexBeingUpdated;
        /**
         * @private
         * 触摸点击的选中项改变
         */
        private onIndexChanged(event);
        /**
         * @private
         * ViewStack选中项发生改变
         */
        private onViewStackIndexChange(event);
    }
}

declare module swan {
    /**
     * @language en_US
     * The ToggleSwitch control defines an on-off control.
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/components/ToggleSwitchExample.ts
     */
    /**
     * @language zh_CN
     * ToggleSwitch 表示一个开关组件。
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/components/ToggleSwitchExample.ts
     */
    class ToggleSwitch extends ToggleButton {
        /**
         * @language en_US
         * Constructor.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 构造函数。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        constructor();
    }
}

declare module swan {
    /**
     * @language en_US
     * The VSlider (vertical slider) control lets users select a value
     * by moving a slider thumb between the end points of the slider track.
     * The current value of the slider is determined by the relative location of the thumb between
     * the end points of the slider, corresponding to the slider's minimum and maximum values.
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/components/VSliderExample.ts
     */
    /**
     * @language zh_CN
     * 使用 VSlider（垂直滑块）控件，用户可通过在滑块轨道的端点之间移动滑块来选择值。
     * 滑块的当前值由滑块端点（对应于滑块的最小值和最大值）之间滑块的相对位置确定。
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/components/VSliderExample.ts
     */
    class VSlider extends SliderBase {
        /**
         * @language en_US
         * Constructor.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 构造函数。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        constructor();
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected pointToValue(x: number, y: number): number;
        /**
         * @private
         *
         * @returns
         */
        private getThumbRange();
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        updateSkinDisplayList(): void;
    }
}

declare module EXML {
    /**
     * @language en_US
     * Parsing a text of EXML file for a definition of class. You can declare the <code>class</code> property in the root
     * node of the EXML to register to the global as a class name.
     *
     * It will be fail to register and output a warning if the specified name already exists. You can get a definition
     * of a class through <code>egret.getDefinitionByName(className)</code>.
     *
     * @param text the text of a EXML file.
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     */
    /**
     * @language zh_CN
     * 解析一个 EXML 文件的文本内容为一个类定义。您可以在 EXML 文件的根节点上声明 class 属性作为要注册到全局的类名。
     * 若指定的类名已经存在，将会注册失败，并输出一个警告。注册成功后，您也可以通过 egret.getDefinitionByName(className) 方法获取这个 EXML 文件对应的类定义。
     *
     * @param text 要解析的 EXML 文件内容。
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     */
    function parse(text: string): {
        new (): any;
    };
    /**
     * @language en_US
     * Load and parse an external EXML file for a class definition. You can declare the <code>class</code> property in the root
     * node of the EXML to register to the global as a class name.
     *
     * It will be fail to register and output a warning if the specified name already exists. You can get a definition
     * of a class through <code>egret.getDefinitionByName(className)</code>.
     *
     * @param url the path of an EXML file
     * @param callBack method to invoke with an argument of the result when load and parse completed or failed. The argument will be
     * <code>undefined</code> if load or parse failed.
     * @param thisObject <code>this</code> object of callBack
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     */
    /**
     * @language zh_CN
     * 加载并解析一个外部的 EXML 文件为一个类定义。您可以在 EXML 文件的根节点上声明 class 属性作为要注册到全局的类名。
     * 若指定的类名已经存在，将会注册失败，并输出一个警告。注册成功后，您也可以通过 egret.getDefinitionByName(className) 方法获取这个 EXML 文件对应的类定义。
     *
     * @param url 要加载的 EXML 文件路径
     * @param callBack 加载并解析完成后的回调函数，无论加载成功还是失败，此函数均会被回调。失败时将传入 undefined 作为回调函数参数。
     * @param thisObject 回调函数的 this 引用。
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     */
    function load(url: string, callBack?: (clazz: any, url: string) => void, thisObject?: any): void;
}

declare module swan {
}

declare module swan {
}

declare module swan {
    /**
     * @language en_US
     * The BasicLayout class arranges the layout elements according to their individual settings,
     * independent of each-other. BasicLayout, also called absolute layout, requires that you
     * explicitly position each container child.
     * You can use the <code>x</code> and <code>y</code> properties of the child,
     * or constraints to position each child.
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/layout/BasicLayoutExample.ts
     */
    /**
     * @language zh_CN
     * BasicLayout 类根据其各个设置彼此独立地排列布局元素。
     * BasicLayout（也称为绝对布局）要求显式定位每个容器子代。
     * 可以使用子代的 <code>x</code> 和 <code>y</code> 属性，或使用约束来定位每个子代。
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/layout/BasicLayoutExample.ts
     */
    class BasicLayout extends LayoutBase {
        /**
         * @language en_US
         * Constructor.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 构造函数。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        constructor();
        /**
         * @language en_US
         * BasicLayout does not support virtual layout, setting this property is invalid.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * BasicLayout不支持虚拟布局，设置这个属性无效。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        useVirtualLayout: boolean;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        measure(): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        updateDisplayList(unscaledWidth: number, unscaledHeight: number): void;
    }
}
declare module swan.sys {
    /**
     * @private
     * 一个工具方法，使用BasicLayout规则测量目标对象。
     */
    function measure(target: swan.Group | swan.Component): void;
    /**
     * @private
     * 一个工具方法，使用BasicLayout规则布局目标对象。
     */
    function updateDisplayList(target: swan.Group | swan.Component, unscaledWidth: number, unscaledHeight: number): egret.Point;
}

declare module swan {
    /**
     * @language en_US
     * The TileLayout class arranges layout elements in columns and rows
     * of equally-sized cells.
     * The TileLayout class uses a number of properties that control orientation,
     * count, size, gap and justification of the columns and the rows
     * as well as element alignment within the cells.
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/layout/TileLayoutExample.ts
     */
    /**
     * @language zh_CN
     * TileLayout 类在单元格大小相等的列和行中排列布局元素。
     * TileLayout 类使用许多属性来控制列和行的方向、计数、大小、间隙和两端对齐以及单元格内的元素对齐。
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/layout/TileLayoutExample.ts
     */
    class TileLayout extends LayoutBase {
        /**
         * @language en_US
         * Constructor.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 构造函数。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        constructor();
        /**
         * @private
         * 标记horizontalGap被显式指定过
         */
        private explicitHorizontalGap;
        /**
         * @private
         */
        private _horizontalGap;
        /**
         * @language en_US
         * Horizontal space between columns, in pixels.
         *
         * @default 6
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 列之间的水平空间（以像素为单位）。
         *
         * @default 6
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        horizontalGap: number;
        /**
         * @private
         * 标记verticalGap被显式指定过
         */
        private explicitVerticalGap;
        /**
         * @private
         */
        private _verticalGap;
        /**
         * @language en_US
         * Vertical space between rows, in pixels.
         *
         * @default 6
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 行之间的垂直空间（以像素为单位）。
         *
         * @default 6
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        verticalGap: number;
        /**
         * @private
         */
        private _columnCount;
        /**
         * @language en_US
         * Contain the actual column count.
         *
         * @default -1
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         *  实际列计数。
         *
         * @default -1
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        columnCount: number;
        /**
         * @private
         */
        private _requestedColumnCount;
        /**
         * @language en_US
         * Number of columns to be displayed.
         * <p>Set to 0 to allow the TileLayout to determine
         * the column count automatically.</p>
         * <p>If the <code>orientation</code> property is set to <code>TileOrientation.ROWS</code>,
         * then setting this property has no effect
         * In this case, the <code>rowCount</code> is explicitly set, and the
         * container width is explicitly set. </p>
         *
         * @default 0
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 要显示的列数。
         * <p>设置为 0 会允许 TileLayout 自动确定列计数。</p>
         * <p>如果将 <code>orientation</code> 属性设置为 <code>TileOrientation.ROWS</code>，
         * 则设置此属性不会产生任何效果。这种情况下，会显式设置 code>rowCount</code>，并显式设置容器宽度。</p>
         *
         * @default 0
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        requestedColumnCount: number;
        /**
         * @private
         */
        private _rowCount;
        /**
         * @language en_US
         * The row count.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         *  行计数。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        rowCount: number;
        /**
         * @private
         */
        private _requestedRowCount;
        /**
         * @language en_US
         * Number of rows to be displayed.
         * <p>Set to 0 to remove explicit override and allow the TileLayout to determine
         * the row count automatically.</p>
         * <p>If the <code>orientation</code> property is set to
         * <code>TileOrientation.COLUMNS</code>, setting this property has no effect.
         * in this case, <code>columnCount</code> is explicitly set, and the
         * container height is explicitly set.</p>
         *
         * @default 0
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 要显示的行数。
         * <code>设置为 -1 会删除显式覆盖并允许 TileLayout 自动确定行计数。</code>
         * <code>如果将 <code>orientation</code> 属性设置为 <code>TileOrientation.COLUMNS</code>，
         * 则设置此属性不会产生任何效果。这种情况下，会显式设置 <code>columnCount</code>，并显式设置容器高度。</code>
         *
         * @default 0
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        requestedRowCount: number;
        /**
         * @private
         * 外部显式指定的列宽
         */
        private explicitColumnWidth;
        /**
         * @private
         */
        private _columnWidth;
        /**
         * @language en_US
         * Contain the actual column width, in pixels.
         * <p>If not explicitly set, the column width is
         * determined from the width of the widest element. </p>
         *
         * @default NaN
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 包含实际列宽（以像素为单位）。
         * <p>若未显式设置，则从根据最宽的元素的宽度确定列宽度。</p>
         *
         * @default NaN
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        columnWidth: number;
        /**
         * @private
         * 外部显式指定的行高
         */
        private explicitRowHeight;
        /**
         * @private
         */
        private _rowHeight;
        /**
         * @language en_US
         * The row height, in pixels.
         * <p>If not explicitly set, the row height is
         * determined from the maximum of elements' height.</p>
         *
         * @default NaN
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 行高（以像素为单位）。
         * <p>如果未显式设置，则从元素的高度的最大值确定行高度。<p>
         *
         * @default NaN
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        rowHeight: number;
        /**
         * @private
         */
        private _paddingLeft;
        /**
         * @copy swan.LinearLayoutBase#paddingLeft
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        paddingLeft: number;
        /**
         * @private
         */
        private _paddingRight;
        /**
         * @copy swan.LinearLayoutBase#paddingRight
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        paddingRight: number;
        /**
         * @private
         */
        private _paddingTop;
        /**
         * @copy swan.LinearLayoutBase#paddingTop
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        paddingTop: number;
        /**
         * @private
         */
        private _paddingBottom;
        /**
         * @copy swan.LinearLayoutBase#paddingBottom
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        paddingBottom: number;
        /**
         * @private
         */
        private _horizontalAlign;
        /**
         * @language en_US
         * Specifies how to align the elements within the cells in the horizontal direction.
         * Supported values are
         * HorizontalAlign.LEFT、HorizontalAlign.CENTER、
         * HorizontalAlign.RIGHT、JustifyAlign.JUSTIFY。
         *
         * @default <code>JustifyAlign.JUSTIFY</code>
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 指定如何在水平方向上对齐单元格内的元素。支持的值有
         * HorizontalAlign.LEFT、HorizontalAlign.CENTER、
         * HorizontalAlign.RIGHT、JustifyAlign.JUSTIFY。
         *
         * @default <code>JustifyAlign.JUSTIFY</code>
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        horizontalAlign: string;
        /**
         * @private
         */
        private _verticalAlign;
        /**
         * @language en_US
         * 指定如何在垂直方向上对齐单元格内的元素。
         * 支持的值有 VerticalAlign.TOP、VerticalAlign.MIDDLE、
         * VerticalAlign.BOTTOM、JustifyAlign.JUSTIFY。
         * 默认值：JustifyAlign.JUSTIFY。
         *
         * @default <code>swan.JustifyAlign.JUSTIFY</code>
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * Specifies how to align the elements within the cells in the vertical direction.
         * Supported values are
         * VerticalAlign.TOP、VerticalAlign.MIDDLE、
         * VerticalAlign.BOTTOM、JustifyAlign.JUSTIFY。
         *
         * @default <code>swan.JustifyAlign.JUSTIFY</code>
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        verticalAlign: string;
        /**
         * @private
         */
        private _columnAlign;
        /**
         * @language en_US
         * Specifies how to justify the fully visible columns to the container width.
         *
         * <p>When set to <code>ColumnAlign.LEFT</code> it turns column justification off.
         *  There may be partially visible columns or whitespace between the last column and
         *  the right edge of the container.  This is the default value.</p>
         *
         * <p>When set to <code>ColumnAlign.JUSTIFY_USING_GAP</code> the <code>horizontalGap</code>
         * actual value increases so that
         * the last fully visible column right edge aligns with the container's right edge.
         * In case there is only a single fully visible column, the <code>horizontalGap</code> actual value
         * increases so that it pushes any partially visible column beyond the right edge
         * of the container.
         * Note that explicitly setting the <code>horizontalGap</code> property does not turn off
         * justification. It only determines the initial gap value.
         * Justification may increases it.</p>
         *
         * <p>When set to <code>ColumnAlign.JUSTIFY_USING_WIDTH</code> the <code>columnWidth</code>
         * actual value increases so that
         * the last fully visible column right edge aligns with the container's right edge.
         * Note that explicitly setting the <code>columnWidth</code> property does not turn off justification.
         * It only determines the initial column width value.
         * Justification may increases it.</p>
         *
         * @default ColumnAlign.LEFT
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 指定如何将完全可见列与容器宽度对齐。
         *
         * <p>设置为 <code>ColumnAlign.LEFT</code> 时，它会关闭列两端对齐。
         * 在容器的最后一列和右边缘之间可能存在部分可见的列或空白。这是默认值。</p>
         *
         * <p>设置为 <code>ColumnAlign.JUSTIFY_USING_GAP</code> 时，<code>horizontalGap</code> 的实际值将增大，
         * 这样最后一个完全可见列右边缘会与容器的右边缘对齐。仅存在一个完全可见列时，
         * <code>horizontalGap</code> 的实际值将增大，这样它会将任何部分可见列推到容器的右边缘之外。
         * 请注意显式设置 <code>horizontalGap</code> 属性不会关闭两端对齐。它仅确定初始间隙值。两端对齐可能会增大它。</p>
         *
         * <p>设置为 <code>ColumnAlign.JUSTIFY_USING_WIDTH</code> 时，<code>columnWidth</code> 的实际值将增大，
         * 这样最后一个完全可见列右边缘会与容器的右边缘对齐。请注意显式设置 <code>columnWidth</code> 属性不会关闭两端对齐。
         * 它仅确定初始列宽度值。两端对齐可能会增大它。</p>
         *
         * @default ColumnAlign.LEFT
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        columnAlign: string;
        /**
         * @private
         */
        private _rowAlign;
        /**
         * @language en_US
         * Specifies how to justify the fully visible rows to the container height.
         *
         * <p>When set to <code>RowAlign.TOP</code> it turns column justification off.
         * There might be partially visible rows or whitespace between the last row and
         * the bottom edge of the container.  This is the default value.</p>
         *
         * <p>When set to <code>RowAlign.JUSTIFY_USING_GAP</code> the <code>verticalGap</code>
         * actual value increases so that
         * the last fully visible row bottom edge aligns with the container's bottom edge.
         * In case there is only a single fully visible row, the value of <code>verticalGap</code>
         * increases so that it pushes any partially visible row beyond the bottom edge
         * of the container.  Note that explicitly setting the <code>verticalGap</code> does not turn off
         * justification, but just determines the initial gap value.
         * Justification can then increases it.</p>
         *
         * <p>When set to <code>RowAlign.JUSTIFY_USING_HEIGHT</code> the <code>rowHeight</code>
         * actual value increases so that
         * the last fully visible row bottom edge aligns with the container's bottom edge.  Note that
         * explicitly setting the <code>rowHeight</code> does not turn off justification, but
         * determines the initial row height value.
         * Justification can then increase it.</p>
         *
         * @default RowAlign.TOP
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 指定如何将完全可见行与容器高度对齐。
         *
         * <p>设置为 <code>RowAlign.TOP</code> 时，它会关闭列两端对齐。
         * 在容器的最后一行和底边缘之间可能存在部分可见的行或空白。这是默认值。</p>
         *
         * <p>设置为 <code>RowAlign.JUSTIFY_USING_GAP</code> 时，<code>verticalGap</code> 的实际值会增大，
         * 这样最后一个完全可见行底边缘会与容器的底边缘对齐。仅存在一个完全可见行时，<code>verticalGap</code> 的值会增大，
         * 这样它会将任何部分可见行推到容器的底边缘之外。请注意，显式设置 <code>verticalGap</code>
         * 不会关闭两端对齐，而只是确定初始间隙值。两端对齐接着可以增大它。</p>
         *
         * <p>设置为 <code>RowAlign.JUSTIFY_USING_HEIGHT</code> 时，<code>rowHeight</code> 的实际值会增大，
         * 这样最后一个完全可见行底边缘会与容器的底边缘对齐。请注意，显式设置 <code>rowHeight</code>
         * 不会关闭两端对齐，而只是确定初始行高度值。两端对齐接着可以增大它。</p>
         *
         * @default RowAlign.TOP
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        rowAlign: string;
        /**
         * @private
         */
        private _orientation;
        /**
         * @language en_US
         * Specifies whether elements are arranged row by row or
         * column by column.
         *
         * @default TileOrientation.ROWS
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 指定是逐行还是逐列排列元素。
         *
         * @default TileOrientation.ROWS
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        orientation: string;
        /**
         * @private
         * 标记目标容器的尺寸和显示列表失效
         */
        private invalidateTargetLayout();
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        measure(): void;
        /**
         * @private
         * 计算行和列的尺寸及数量
         */
        private calculateRowAndColumn(explicitWidth, explicitHeight);
        /**
         * @private
         * 缓存的最大子对象宽度
         */
        private maxElementWidth;
        /**
         * @private
         * 缓存的最大子对象高度
         */
        private maxElementHeight;
        /**
         * @private
         * 更新最大子对象尺寸
         */
        private updateMaxElementSize();
        /**
         * @private
         * 更新虚拟布局的最大子对象尺寸
         */
        private doUpdateMaxElementSize(startIndex, endIndex);
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        clearVirtualLayoutCache(): void;
        /**
         * @private
         * 当前视图中的第一个元素索引
         */
        private startIndex;
        /**
         * @private
         * 当前视图中的最后一个元素的索引
         */
        private endIndex;
        /**
         * @private
         * 视图的第一个和最后一个元素的索引值已经计算好的标志
         */
        private indexInViewCalculated;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        scrollPositionChanged(): void;
        /**
         * @private
         * 获取视图中第一个和最后一个元素的索引,返回是否发生改变
         */
        private getIndexInView();
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        updateDisplayList(width: number, height: number): void;
        /**
         * @private
         * 为单个元素布局
         */
        private sizeAndPositionElement(element, cellX, cellY, cellWidth, cellHeight);
        /**
         * @private
         * 为两端对齐调整间隔或格子尺寸
         */
        private adjustForJustify(width, height);
    }
}

declare module swan {
    /**
     * @language en_US
     * The VerticalLayout class arranges the layout elements in a vertical sequence,
     * top to bottom, with optional gaps between the elements and optional padding
     * around the sequence of elements.
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/layout/VerticalLayoutExample.ts
     */
    /**
     * @language zh_CN
     * VerticalLayout 类按垂直顺序从上向下排列布局元素，在元素和围绕元素顺序的可选填充之间带有可选间隙。
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/layout/VerticalLayoutExample.ts
     */
    class VerticalLayout extends LinearLayoutBase {
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected measureReal(): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected measureVirtual(): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected updateDisplayListReal(width: number, height: number): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected updateDisplayListVirtual(width: number, height: number): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected getStartPosition(index: number): number;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected getElementSize(index: number): number;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected getElementTotalSize(): number;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        elementAdded(index: number): void;
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        protected getIndexInView(): boolean;
    }
}

declare module swan.sys {
    /**
     * @private
     */
    class MatrixUtil {
        /**
         * @private
         */
        static fitBounds(width: number, height: number, matrix: egret.Matrix, explicitWidth: number, explicitHeight: number, preferredWidth: number, preferredHeight: number, minWidth: number, minHeight: number, maxWidth: number, maxHeight: number): egret.Point;
    }
}

