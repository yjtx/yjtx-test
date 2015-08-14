/**
 * Created by yjtx on 15-8-10.
 */
class LoadResources {
    private _stage:egret.Stage;
    private _callback;
    private _thisObj;
    private _skins;

    constructor(callback, thisObj, stage:egret.Stage, skins:Array<string>) {
        this._stage = stage;
        this._callback = callback;
        this._thisObj = thisObj;
        this._skins = skins;

        this.loadTheme();
    }

    private loadTheme():void {
        TempLoader.load(this._skins, () => this.loaded());
    }

    loaded() {
        new swan.Theme("resource/theme/blue-theme.json", this._stage);

        this._callback.call(this._thisObj);
    }
}

class TempLoader {
    static load(urls:string[], callback:() => void) {
        var total = urls.length;
        var got = 0;
        urls.forEach(url => {
            EXML.load(url, ()=> {
                got++;
                if (got == total)
                    callback();
            }, this)
        });
    }
}