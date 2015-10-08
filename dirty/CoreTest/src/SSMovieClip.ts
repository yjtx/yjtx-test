module ss {
    export class SSMovieClip extends egret.MovieClip {

        public mLayerValue:number = 0;

        private mPlayTimes:number = 0;//MovieClip中_playTimes为私有的，这里自己保存一份，便于动画的暂停恢复处理

        private mFrameWhenPause:number = 0;//记录暂停时的帧,回来继续播

        private mIsPlayingBeforePause:boolean = false;//暂停时，是否正在播动画

        private mSpecFrame:number = -1;//指定特定帧
        private mListener:Function;
        private mThisObject:any;

        /**
         * 根据前缀名称创建
         */
        public static createWithPrefix(resPrefix:string):SSMovieClip {
            var data = RES.getRes(resPrefix + "_json");
            var txtr = RES.getRes(resPrefix + "_png");
            var mcFactory:egret.MovieClipDataFactory = new egret.MovieClipDataFactory(data, txtr);
            var mcData:egret.MovieClipData = mcFactory.generateMovieClipData(resPrefix);
            var mc:SSMovieClip = new ss.SSMovieClip(mcData);
            data = null;
            txtr = null;
            mcFactory = null;
            mcData = null;
            return mc;
        }

        public constructor(movieClipData?:egret.MovieClipData) {
            super(movieClipData);
        }

        public setAnchor(anchorOffsetX:number = 0, anchorOffsetY:number = 0):void {
            this.anchorOffsetX = anchorOffsetX;
            this.anchorOffsetY = anchorOffsetY;
        }

        public setPosition(x:number = 0, y:number = 0):void {
            this.x = x;
            this.y = y;
        }

        public setAnchorAndPosition(anchorOffsetX:number = 0, anchorOffsetY:number = 0, x:number = 0, y:number = 0):void {
            this.setAnchor(anchorOffsetX, anchorOffsetY);
            this.setPosition(x, y);
        }
        
        /**
         * 继续播放当前动画
         * @method egret.MovieClip#play
         * @param playTimes {number} 播放次数。 参数为整数，可选参数，>=1：设定播放次数，<0：循环播放，默认值 0：不改变播放次数(MovieClip初始播放次数设置为1)，
         */
        public play(playTimes:number = 0): void {
            super.play(playTimes);
            this.mPlayTimes = playTimes;
        }

        /**
         * 如果从舞台移除时是播动画的，重新添加时继续播放
         */
        $onAddToStage(stage:egret.Stage, nestLevel:number):void {
            super.$onAddToStage(stage, nestLevel);

            this.resume();
        }

        /**
         * 从舞台移除时，保存是否正在播动画
         * @private
         */
        $onRemoveFromStage():void {
            this.pause();

            super.$onRemoveFromStage();
        }

        /**
         * 暂停动画
         */
        public pause():void {
            this.mIsPlayingBeforePause = this.isPlaying;
            if (this.mIsPlayingBeforePause) {
                this.stop();
                this.mFrameWhenPause = this.currentFrame;
            }
        }

        /**
         * 继续动画
         */
        public resume():void {
            if (this.mIsPlayingBeforePause) {
                this.gotoAndPlay(this.mFrameWhenPause, this.mPlayTimes);    
            }            
        }

        /**
         * 添加监听特定帧
         * @param specFrame 指定帧
         * @param listener
         * @param thisObject
         */
        public addSpecFrameEvent(specFrame:number, listener:Function, thisObject:any):void {
            this.mSpecFrame = specFrame;
            this.mListener = listener;
            this.mThisObject = thisObject;
            //this.addEventListener(ss.MCFrameEvent.SPEC_FRAME, this.checkSpecFrame, this);
        }

        /**
         * 判断是否在特定帧
         */
        private checkSpecFrame():void {
            //if (this.isPlaying) {
            //    if (this.currentFrame == this.mSpecFrame) {
            //        this.removeEventListener(ss.MCFrameEvent.SPEC_FRAME, this.checkSpecFrame, this);
            //        this.mListener.call(this.mThisObject, this.mSpecFrame);
            //    }
            //}
        }
    }
}
