/**
 * @language en_US
 * The following example uses the class ArrayCollectionExample to show how to use a wrapper class
 * that exposes an any[] as a collection.
 */
/**
 * @language zh_CN
 * 以下示例使用 ArrayCollectionExample 类来说明如何使用数组的集合类数据结构包装器
 */
var ArrayCollectionExample = (function (_super) {
    __extends(ArrayCollectionExample, _super);
    function ArrayCollectionExample() {
        _super.call(this);
        var arr = [2, 1, 3];
        var arrayCollection = new eui.ArrayCollection();
        arrayCollection.source = arr;
        arrayCollection.addEventListener(eui.CollectionEvent.COLLECTION_CHANGE, this.onCollectionChange, this);
        arrayCollection.addItem(5); //add
        arrayCollection.addItemAt(6, 1); //add
        arrayCollection.source.sort();
        arrayCollection.refresh(); //refersh
        arrayCollection.removeItemAt(2); //remove
        arrayCollection.removeAll(); //remove
        arrayCollection.source = [1, 2, 3]; //reset
        arrayCollection.replaceItemAt(7, 1); //replace
        arrayCollection.source[1] = 8;
        arrayCollection.itemUpdated(1); //update
    }
    var d = __define,c=ArrayCollectionExample,p=c.prototype;
    p.onCollectionChange = function (e) {
        switch (e.kind) {
            case eui.CollectionEventKind.ADD:
                console.log("arrayCollection add", e.currentTarget.source, e.location);
                break;
            case eui.CollectionEventKind.REFRESH:
                console.log("arrayCollection refersh", e.currentTarget.source, e.location);
                break;
            case eui.CollectionEventKind.REMOVE:
                console.log("arrayCollection remove", e.currentTarget.source, e.location);
                break;
            case eui.CollectionEventKind.REPLACE:
                console.log("arrayCollection replace", e.currentTarget.source, e.location);
                break;
            case eui.CollectionEventKind.RESET:
                console.log("arrayCollection reset", e.currentTarget.source, e.location);
                break;
            case eui.CollectionEventKind.UPDATE:
                console.log("arrayCollection update", e.currentTarget.source, e.location);
                break;
        }
    };
    return ArrayCollectionExample;
}(egret.DisplayObjectContainer));
egret.registerClass(ArrayCollectionExample,'ArrayCollectionExample');
