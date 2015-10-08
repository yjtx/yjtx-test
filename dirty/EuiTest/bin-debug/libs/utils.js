/**
 * Created by yjtx on 15-8-10.
 */
var utils;
(function (utils) {
    function createClass(className) {
        return new (egret.getDefinitionByName(className))();
    }
    utils.createClass = createClass;
})(utils || (utils = {}));
