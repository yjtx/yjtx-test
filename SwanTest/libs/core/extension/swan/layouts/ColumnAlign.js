//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-2015, Egret Technology Inc.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var swan;
(function (swan) {
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
    var ColumnAlign = (function () {
        function ColumnAlign() {
        }
        var __egretProto__ = ColumnAlign.prototype;
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
        ColumnAlign.LEFT = "left";
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
        ColumnAlign.JUSTIFY_USING_GAP = "justifyUsingGap";
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
        ColumnAlign.JUSTIFY_USING_WIDTH = "justifyUsingWidth";
        return ColumnAlign;
    })();
    swan.ColumnAlign = ColumnAlign;
    ColumnAlign.prototype.__class__ = "swan.ColumnAlign";
    egret.registerClass(ColumnAlign,"swan.ColumnAlign");
})(swan || (swan = {}));