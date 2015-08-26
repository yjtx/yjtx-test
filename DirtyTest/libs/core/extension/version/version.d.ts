declare module egret {
    /**
     * @private
     * @version Egret 2.0
     * @platform Web,Native
     */
    interface IVersionController extends egret.IEventDispatcher {
        /**
         *
         * @version Egret 2.0
         * @platform Web,Native
         */
        fetchVersion(): void;
        /**
         *
         * @param url
         * @returns
         * @version Egret 2.0
         * @platform Web,Native
         */
        checkIsNewVersion(url: string): boolean;
        /**
         *
         * @param url
         * @version Egret 2.0
         * @platform Web,Native
         */
        saveVersion(url: string): void;
        /**
         * 获取所有有变化的文件
         * @returns {Array<string>}
         * @version Egret 2.0
         * @platform Web,Native
         */
        getChangeList(): Array<string>;
        /**
         *
         * @param url
         * @returns
         * @version Egret 2.0
         * @platform Web,Native
         */
        getVirtualUrl(url: string): string;
    }
    /**
     * @version Egret 2.0
     * @platform Web,Native
     */
    interface VersionController extends IVersionController {
    }
    /**
     * @version Egret 2.0
     * @platform Web,Native
     */
    var VersionController: {
        new (stage: egret.Stage): VersionController;
    };
}

declare module egret {
    /**
     * @private
     */
    class DefaultLoadingView extends DisplayObjectContainer implements ILoadingView {
        private textField;
        constructor();
        private onAddToStage();
        setProgress(current: any, total: any): void;
        loadError(): void;
    }
}

declare module egret {
    /**
     * @private
     */
    interface ILoadingView {
        setProgress(current: any, total: any): void;
        loadError(): void;
    }
}

declare module egret {
    /**
     * @private
     */
    class Html5VersionController extends egret.EventDispatcher implements VersionController {
        constructor(stage: egret.Stage);
        private _versionInfo;
        fetchVersion(): void;
        checkIsNewVersion(virtualUrl: string): boolean;
        saveVersion(virtualUrl: string): void;
        /**
         * 获取所有有变化的文件
         * @returns {Array<string>}
         */
        getChangeList(): Array<string>;
        getVirtualUrl(url: string): string;
    }
}

