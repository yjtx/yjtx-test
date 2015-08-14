declare module egret {
    /**
     * @private
     */
    class DefaultLoadingView extends DisplayObjectContainer implements ILoadingView {
        private textField;
        constructor();
        init(): void;
        setProgress(current: any, total: any): void;
        loadError(): void;
    }
}

declare module egret {
    /**
     * @private
     */
    interface ILoadingView {
        init(): void;
        setProgress(current: any, total: any): void;
        loadError(): void;
    }
}

declare module egret {
    /**
     * @private
     */
    class Html5VersionController extends egret.EventDispatcher implements VersionController {
        constructor();
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

