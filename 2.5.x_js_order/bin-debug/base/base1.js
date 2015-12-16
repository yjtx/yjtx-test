/**
 * Created by SmallAiTT on 2015/10/12.
 */
var base;
(function (base) {
    function testBase1() {
        console.log('testBase1');
    }
    base.testBase1 = testBase1;
})(base || (base = {}));
