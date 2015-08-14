declare module egret.web {
    /**
     * @classdesc
     * @extends egret.StageText
     * @private
     */
    class HTML5StageText extends EventDispatcher implements StageText {
        /**
         * @private
         */
        private htmlInput;
        /**
         * @private
         */
        constructor();
        /**
         * @private
         */
        $textfield: egret.TextField;
        /**
         * @private
         *
         * @param textfield
         */
        $setTextField(textfield: egret.TextField): void;
        /**
         * @private
         */
        private _isNeedShow;
        /**
         * @private
         */
        private inputElement;
        /**
         * @private
         */
        private inputDiv;
        /**
         * @private
         */
        private _gscaleX;
        /**
         * @private
         */
        private _gscaleY;
        /**
         * @private
         *
         */
        $addToStage(): void;
        /**
         * @private
         *
         */
        private _initElement();
        /**
         * @private
         *
         */
        $show(): void;
        /**
         * @private
         *
         */
        private onBlurHandler();
        /**
         * @private
         *
         */
        private executeShow();
        /**
         * @private
         */
        private _isNeesHide;
        /**
         * @private
         *
         */
        $hide(): void;
        /**
         * @private
         */
        private textValue;
        /**
         * @private
         *
         * @returns
         */
        $getText(): string;
        /**
         * @private
         *
         * @param value
         */
        $setText(value: string): void;
        /**
         * @private
         *
         */
        private resetText();
        /**
         * @private
         *
         */
        _onInput(): void;
        private setAreaHeight();
        /**
         * @private
         *
         * @param e
         */
        _onClickHandler(e: any): void;
        /**
         * @private
         *
         */
        _onDisconnect(): void;
        /**
         * @private
         */
        private _styleInfoes;
        /**
         * @private
         *
         * @param style
         * @param value
         */
        private setElementStyle(style, value);
        /**
         * @private
         *
         */
        $removeFromStage(): void;
        /**
         * 修改位置
         * @private
         */
        $resetStageText(): void;
    }
}
declare module egret.web {
    /**
     * @private
     */
    class HTMLInput {
        /**
         * @private
         */
        private _stageText;
        /**
         * @private
         */
        private _simpleElement;
        /**
         * @private
         */
        private _multiElement;
        /**
         * @private
         */
        private _inputElement;
        /**
         * @private
         */
        _inputDIV: any;
        /**
         * @private
         *
         * @returns
         */
        isInputOn(): boolean;
        /**
         * @private
         *
         * @param stageText
         * @returns
         */
        isCurrentStageText(stageText: any): boolean;
        /**
         * @private
         *
         * @param dom
         */
        private initValue(dom);
        /**
         * @private
         */
        _needShow: boolean;
        /**
         * @private
         */
        $scaleX: number;
        /**
         * @private
         */
        $scaleY: number;
        /**
         * @private
         *
         */
        $updateSize(): void;
        /**
         * @private
         */
        private StageDelegateDiv;
        /**
         * @private
         */
        private canvas;
        /**
         * @private
         *
         * @param container
         * @param canvas
         * @returns
         */
        _initStageDelegateDiv(container: any, canvas: any): any;
        private initInputElement(multiline);
        /**
         * @private
         *
         */
        show(): void;
        /**
         * @private
         *
         * @param stageText
         */
        disconnectStageText(stageText: any): void;
        /**
         * @private
         *
         */
        clearInputElement(): void;
        /**
         * @private
         *
         * @param stageText
         * @returns
         */
        getInputElement(stageText: any): any;
    }
}
declare module egret.web {
    /**
     * @private
     * 获取
     */
    function $getTextAdapter(textfield: TextField): HTMLInput;
    /**
     * @private
     */
    function $cacheTextAdapter(adapter: HTMLInput, stage: any, container: HTMLDivElement, canvas: any): void;
}

declare module egret.localStorage.web {
}

declare module egret.web {
    /**
     * @private
     */
    class WebExternalInterface implements ExternalInterface {
        /**
         * @private
         * @param functionName
         * @param value
         */
        static call(functionName: string, value: string): void;
        /**
         * @private
         * @param functionName
         * @param listener
         */
        static addCallback(functionName: string, listener: (value) => void): void;
    }
}

declare module egret.web {
    /**
     * @private
     */
    class CanvasFactory implements sys.SurfaceFactory {
        /**
         * @private
         */
        constructor();
        /**
         * @private
         * 从对象池取出或创建一个新的Surface实例
         * @param useOnce 表示对取出实例的使用是一次性的，用完后立即会释放。
         */
        create(useOnce?: boolean): sys.Surface;
        /**
         * @private
         * 释放一个Surface实例
         * @param surface 要释放的Surface实例
         */
        release(surface: sys.Surface): void;
        /**
         * @private
         * 检测创建的canvas是否有效，QQ浏览器对硬件内存小等于1G的手机，限制Canvas创建的数量为19个。
         * 针对这个限制,同时满足以下两个条件就不会对显示造成任何影响：
         * 1.不要嵌套使用BlendMode，即使用了混合模式的容器内部不要再设置另一个子项的混合模式。
         * 2.不要嵌套使用遮罩，即遮罩对象或被遮罩对象的内部子项不要再设置另一个遮罩。
         * cacheAsBitmap功能已经自动对这个限制做了兼容，即使设置cacheAsBitmap为true，若Canvas数量不足，将会放弃缓存，以保证渲染显示正确。
         * 另外，如果要销毁一个开启过cacheAsBitmap的显示对象，在断开引用前建议显式将cacheAsBitmap置为false，这样可以回收一个Canvas对象。
         */
        private testCanvasValid(canvas);
        /**
         * @private
         */
        private createSurface(canvas);
    }
}

declare module egret.web {
}

declare module egret.web {
    /**
     * @private
     * 转换 Image，Canvas，Video 为 Egret 框架内使用的 BitmapData 对象。
     */
    function toBitmapData(data: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement): BitmapData;
}

declare module egret.web {
    /**
     * @private
     */
    class WebCapability {
        /**
         * @private
         * 检测系统属性
         */
        static detect(): void;
        /**
         * @private
         *
         */
        private static checkHtml5Support();
    }
}

declare module egret.web {
    /**
     * @private
     */
    class WebPlayer extends egret.HashObject implements egret.sys.Screen {
        constructor(container: HTMLDivElement);
        private init(container);
        /**
         * 读取初始化参数
         */
        private readOption(container);
        /**
         * @private
         * 添加canvas到container。
         */
        private attachCanvas(container, canvas);
        private playerOption;
        /**
         * @private
         * 画布实例
         */
        private canvas;
        /**
         * @private
         * 播放器容器实例
         */
        private container;
        /**
         * @private
         * 舞台引用
         */
        private stage;
        private webTouchHandler;
        private player;
        private webInput;
        private webHide;
        /**
         * @private
         * 更新播放器视口尺寸
         */
        updateScreenSize(): void;
        /**
         * @private
         * 更新触摸数量
         */
        updateMaxTouches(): void;
    }
}

declare module egret.web {
    /**
     * @private
     */
    class WebTouchHandler extends HashObject {
        /**
         * @private
         */
        constructor(stage: egret.Stage, canvas: HTMLCanvasElement);
        /**
         * @private
         */
        private canvas;
        /**
         * @private
         */
        private touch;
        /**
         * @private
         * 添加事件监听
         */
        private addListeners();
        /**
         * @private
         *
         */
        private addMouseListener();
        /**
         * @private
         *
         */
        private addTouchListener();
        /**
         * @private
         */
        private prevent(event);
        /**
         * @private
         */
        private onTouchBegin;
        /**
         * @private
         */
        private onTouchMove;
        /**
         * @private
         */
        private onTouchEnd;
        /**
         * @private
         */
        private getLocation(event);
        /**
         * @private
         */
        private scaleX;
        /**
         * @private
         */
        private scaleY;
        /**
         * @private
         */
        private rotation;
        /**
         * @private
         * 更新屏幕当前的缩放比例，用于计算准确的点击位置。
         * @param scaleX 水平方向的缩放比例。
         * @param scaleY 垂直方向的缩放比例。
         */
        updateScaleMode(scaleX: number, scaleY: number, rotation: number): void;
        /**
         * @private
         * 更新同时触摸点的数量
         */
        $updateMaxTouches(): void;
    }
}

declare module egret.web {
    /**
     * @private
     * XML节点基类
     */
    class XMLNode {
        /**
         * @private
         */
        constructor(nodeType: number, parent: XML);
        /**
         * @private
         * 节点类型，1：XML，2：XMLAttribute，3：XMLText
         */
        nodeType: number;
        /**
         * @private
         * 节点所属的父级节点
         */
        parent: XML;
    }
    /**
     * @private
     * XML节点对象
     */
    class XML extends XMLNode {
        /**
         * @private
         */
        constructor(localName: string, parent: XML, prefix: string, namespace: string, name: string);
        /**
         * @private
         * 当前节点上的属性列表
         */
        attributes: {
            [key: string]: string;
        };
        /**
         * @private
         * 当前节点的子节点列表
         */
        children: XMLNode[];
        /**
         * @private
         * 节点完整名称。例如节点 <s:Button/> 的 name 为：s:Button
         */
        name: string;
        /**
         * @private
         * 节点的命名空间前缀。例如节点 <s:Button/> 的 prefix 为：s
         */
        prefix: string;
        /**
         * @private
         * 节点的本地名称。例如节点 <s:Button/> 的 localName 为：Button
         */
        localName: string;
        /**
         * @private
         * 节点的命名空间地址。例如节点 <s:Skin xmlns:s="http://ns.egret.com/swan"/> 的 namespace 为： http://ns.egret.com/swan
         */
        namespace: string;
    }
    /**
     * @private
     * XML文本节点
     */
    class XMLText extends XMLNode {
        /**
         * @private
         */
        constructor(text: string, parent: XML);
        /**
         * @private
         * 文本内容
         */
        text: string;
    }
}

declare module egret.web {
    /**
     * @class egret.HTML5NetContext
     * @classdesc
     * @extends egret.NetContext
     * @private
     */
    class HTML5NetContext extends HashObject implements NetContext {
        /**
         * @private
         */
        _versionCtr: egret.IVersionController;
        /**
         * @private
         */
        private _imageLoader;
        /**
         * @private
         */
        constructor();
        /**
         * @private
         *
         * @param versionCtr
         */
        initVersion(versionCtr: egret.IVersionController): void;
        /**
         * @private
         *
         * @param loader
         */
        proceed(loader: URLLoader): void;
        /**
         * @private
         *
         * @param loader
         */
        private loadSound(loader);
        /**
         * @private
         *
         * @returns
         */
        private getXHR();
        /**
         * @private
         *
         * @param xhr
         * @param responseType
         */
        private setResponseType(xhr, responseType);
        /**
         * @private
         *
         * @param loader
         */
        private loadTexture(loader);
        /**
         * @private
         *
         * @returns
         */
        getChangeList(): Array<any>;
        /**
         * @private
         * 获取虚拟url
         * @param url
         * @returns {string}
         */
        private getVirtualUrl(url);
        static _instance: HTML5NetContext;
        static getNetContext(): HTML5NetContext;
    }
}

declare module egret.web {
    /**
     * @private
     */
    class WebHideHandler extends HashObject {
        /**
         * @private
         */
        private stage;
        /**
         * @private
         */
        constructor(stage: egret.Stage);
        /**
         * @private
         */
        private isActivate;
        /**
         * @private
         *
         */
        private registerListener();
    }
}

declare module egret.web {
    /**
     * @private
     * ImageLoader 类可用于加载图像（JPG、PNG 或 GIF）文件。使用 load() 方法来启动加载。被加载的图像对象数据将存储在 ImageLoader.data 属性上 。
     */
    class WebImageLoader extends BaseImageLoader {
        /**
         * @private
         *
         * @param url
         * @param callback
         */
        load(url: string, callback: (code: number, bitmapData: any) => void): void;
        /**
         * @private
         *
         * @param bitmapData
         */
        static disposeBitmapData(bitmapData: any): void;
        /**
         * @private
         *
         * @param bitmapData
         */
        private static deleteWebGLTexture(bitmapData);
    }
}

declare module egret.web {
    /**
     * @private
     */
    class Html5Audio implements Audio {
        /**
         * @private
         * audio音频对象
         * @member {any} egret.Sound#audio
         */
        constructor();
        /**
         * @private
         */
        private _audio;
        /**
         * @private
         */
        private _loop;
        /**
         * @private
         * 播放声音
         * @method egret.Sound#play
         * @param loop {boolean} 是否循环播放，默认为false
         */
        $play(type?: string): void;
        /**
         * @private
         *
         */
        private clear();
        /**
         * @private
         */
        private paused;
        /**
         * @private
         * 暂停声音
         * @method egret.Sound#pause
         */
        $pause(): void;
        /**
         * @private
         * 重新加载声音
         * @method egret.Sound#load
         */
        $load(): void;
        /**
         * @private
         *
         * @param audio
         */
        $setAudio(audio: any): void;
        /**
         * @private
         *
         */
        private initStart();
        /**
         * @private
         */
        private _listeners;
        /**
         * @private
         */
        private _onEndedCall;
        /**
         * @private
         * 添加事件监听
         * @param type 事件类型
         * @param listener 监听函数
         */
        $addEventListener(type: string, listener: Function, useCapture?: boolean): void;
        /**
         * @private
         *
         */
        private removeListeners();
        /**
         * @private
         * 移除事件监听
         * @param type 事件类型
         * @param listener 监听函数
         */
        $removeEventListener(type: string, listener: Function, useCapture?: boolean): void;
        /**
         * @private
         *
         * @param type
         * @param callback
         * @param thisObj
         */
        $preload(type: string, callback?: Function, thisObj?: any): void;
        /**
         * @private
         *
         */
        $destroy(): void;
        /**
         * @private
         */
        private _volume;
        /**
         * @private
         * 获取当前音量值
         * @returns number
         */
        $getVolume(): number;
        /**
         * @private
         *
         * @param value
         */
        $setVolume(value: number): void;
        /**
         * @private
         *
         * @param value
         */
        $setLoop(value: boolean): void;
        /**
         * @private
         */
        private _startTime;
        /**
         * @private
         *
         * @returns
         */
        $getCurrentTime(): number;
        /**
         * @private
         *
         * @param value
         */
        $setCurrentTime(value: number): void;
        /**
         * @private
         *
         * @param virtualUrl
         * @param callback
         */
        $loadByUrl(virtualUrl: string, callback: (code: number) => void): void;
    }
}

declare module QZAppExternal {
    function playLocalSound(call: any, data: any): any;
    function playLocalBackSound(data: any): any;
    function preloadSound(call: any, data: any): any;
    function stopSound(): any;
    function stopBackSound(): any;
}
declare module egret.web {
    /**
     * @private
     */
    class QQAudio implements Audio {
        /**
         * @private
         */
        constructor();
        /**
         * @private
         */
        private _loop;
        /**
         * @private
         */
        private _type;
        /**
         * @private
         * 播放声音
         * @method egret.Sound#play
         * @param loop {boolean} 是否循环播放，默认为false
         */
        $play(type?: string): void;
        /**
         * @private
         * 暂停声音
         * @method egret.Sound#pause
         */
        $pause(): void;
        /**
         * @private
         * 添加事件监听
         * @param type 事件类型
         * @param listener 监听函数
         */
        $addEventListener(type: string, listener: Function, useCapture?: boolean): void;
        /**s
         * @private
         * 移除事件监听
         * @param type 事件类型
         * @param listener 监听函数
         */
        $removeEventListener(type: string, listener: Function, useCapture?: boolean): void;
        /**
         * @private
         * 重新加载声音
         * @method egret.Sound#load
         */
        $load(): void;
        /**
         * @private
         *
         * @param type
         * @param callback
         * @param thisObj
         */
        $preload(type: string, callback?: Function, thisObj?: any): void;
        /**
         * @private
         */
        private _path;
        /**
         * @private
         *
         * @param path
         */
        _setPath(path: string): void;
        /**
         * @private
         * 获取当前音量值
         * @returns number
         */
        $getVolume(): number;
        /**
         * @private
         *
         * @param value
         */
        $setVolume(value: number): void;
        /**
         * @private
         *
         * @param value
         */
        $setLoop(value: boolean): void;
        /**
         * @private
         */
        private _currentTime;
        /**
         * @private
         *
         * @returns
         */
        $getCurrentTime(): number;
        /**
         * @private
         *
         * @param value
         */
        $setCurrentTime(value: number): void;
        /**
         * @private
         *
         */
        $destroy(): void;
        /**
         * @private
         *
         * @param virtualUrl
         * @param callback
         */
        $loadByUrl(virtualUrl: string, callback: (code: number) => void): void;
    }
}

declare module egret.web {
    /**
     * @private
     */
    class WebAudio implements Audio {
        /**
         * @private
         */
        static canUseWebAudio: any;
        /**
         * @private
         */
        static ctx: any;
        /**
         * @private
         * audio音频对象
         * @member {any} egret.Sound#audio
         */
        private audioBuffer;
        /**
         * @private
         */
        private _arrayBuffer;
        /**
         * @private
         */
        private context;
        /**
         * @private
         */
        private gain;
        /**
         * @private
         */
        private bufferSource;
        /**
         * @private
         */
        private paused;
        /**
         * @private
         */
        private static decodeArr;
        /**
         * @private
         */
        private static isDecoding;
        /**
         * @private
         *
         */
        static decodeAudios(): void;
        /**
         * @private
         */
        constructor();
        /**
         * @private
         */
        private _loop;
        /**
         * @private
         * 播放声音
         * @method egret.Sound#play
         * @param loop {boolean} 是否循环播放，默认为false
         */
        $play(type?: string): void;
        /**
         * @private
         *
         */
        private clear();
        /**
         * @private
         *
         */
        private addListeners();
        /**
         * @private
         *
         */
        private removeListeners();
        /**
         * @private
         * 暂停声音
         * @method egret.Sound#pause
         */
        $pause(): void;
        /**
         * @private
         */
        private _listeners;
        /**
         * @private
         */
        private _onEndedCall;
        /**
         * @private
         * 添加事件监听
         * @param type 事件类型
         * @param listener 监听函数
         */
        $addEventListener(type: string, listener: Function, useCapture?: boolean): void;
        /**s
         * @private
         * 移除事件监听
         * @param type 事件类型
         * @param listener 监听函数
         */
        $removeEventListener(type: string, listener: Function, useCapture?: boolean): void;
        /**
         * @private
         * 重新加载声音
         * @method egret.Sound#load
         */
        $load(): void;
        /**
         * @private
         *
         * @param buffer
         * @param callback
         */
        _setArrayBuffer(buffer: ArrayBuffer, callback: Function): void;
        /**
         * @private
         *
         * @param type
         * @param callback
         * @param thisObj
         */
        $preload(type: string, callback?: Function, thisObj?: any): void;
        /**
         * @private
         */
        private _volume;
        /**
         * @private
         * 获取当前音量值
         * @returns number
         */
        $getVolume(): number;
        /**
         * @private
         *
         * @param value
         */
        $setVolume(value: number): void;
        /**
         * @private
         *
         * @param value
         */
        $setLoop(value: boolean): void;
        /**
         * @private
         */
        private _startTime;
        /**
         * @private
         */
        private _currentTime;
        /**
         * @private
         *
         * @returns
         */
        $getCurrentTime(): number;
        /**
         * @private
         *
         * @param value
         */
        $setCurrentTime(value: number): void;
        /**
         * @private
         *
         */
        $destroy(): void;
        private _url;
        /**
         * @private
         *
         * @param virtualUrl
         * @param callback
         */
        $loadByUrl(virtualUrl: string, callback: (code: number) => void): void;
    }
}
/**
 * @private
 */
interface AudioBuffer {
}
/**
 * @private
 */
interface AudioBufferSourceNodeEgret {
    buffer: any;
    context: any;
    onended: Function;
    stop(when?: number): void;
    noteOff(when?: number): void;
    addEventListener(type: string, listener: Function, useCapture?: boolean): any;
    removeEventListener(type: string, listener: Function, useCapture?: boolean): any;
    disconnect(): any;
}

declare module egret.web {
    /**
     * @private
     */
    function getOption(key: string): string;
}

declare module egret.web {
}

declare module egret.web {
    /**
     * @private
     */
    class AudioType {
        /**
         * @private
         */
        static QQ_AUDIO: number;
        /**
         * @private
         */
        static WEB_AUDIO: number;
        /**
         * @private
         */
        static HTML5_AUDIO: number;
    }
    /**
     * @private
     */
    class SystemOSType {
        /**
         * @private
         */
        static WPHONE: number;
        /**
         * @private
         */
        static IOS: number;
        /**
         * @private
         */
        static ADNROID: number;
    }
    /**
     * html5兼容性配置
     * @private
     */
    class Html5Capatibility extends HashObject {
        static _canUseBlob: boolean;
        static _audioType: number;
        /**
         * @private
         */
        static _AudioClass: any;
        static _audioMustLoad: boolean;
        /**
         * @private
         */
        static _QQRootPath: string;
        /**
         * @private
         */
        static _System_OS: number;
        /**
         * @private
         */
        static _WebPSupport: boolean;
        /**
         * @private
         */
        constructor();
        /**
         * @private
         */
        private static ua;
        /**
         * @private
         *
         */
        static _init(): void;
        /**
         * @private
         * 获取ios版本
         * @returns {string}
         */
        private static getIOSVersion();
        /**
         * @private
         *
         */
        private static checkHtml5Support();
    }
    /**
     * @private
     */
    function getPrefixStyleName(name: string, element?: any): string;
}

