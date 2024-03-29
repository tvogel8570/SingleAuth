"use strict";
/*
 * Copyright 2018 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Msg = void 0;
var React = require("react");
var Msg = /** @class */ (function (_super) {
    __extends(Msg, _super);
    function Msg(props) {
        return _super.call(this, props) || this;
    }
    Msg.prototype.render = function () {
        if (this.props.children) {
            return Msg.localizeWithChildren(this.props.msgKey, this.props.children);
        }
        return (React.createElement(React.Fragment, null, Msg.localize(this.props.msgKey, this.props.params)));
    };
    Msg.localizeWithChildren = function (msgKey, children) {
        var message = l18nMsg[this.processKey(msgKey)];
        var parts = message.split(/\{\{param_\d*}}/);
        var count = React.Children.count(children);
        return React.Children.map(children, function (child, i) {
            return [parts[i], child, count === i + 1 ? parts[count] : ''];
        });
    };
    Msg.localize = function (msgKey, params) {
        var _this = this;
        var message = l18nMsg[this.processKey(msgKey)];
        if (message === undefined)
            message = msgKey;
        if ((params !== undefined) && (params.length > 0)) {
            params.forEach(function (value, index) {
                value = _this.processParam(value);
                message = message.replace('{{param_' + index + '}}', value);
            });
        }
        return message;
    };
    // if the message key has Freemarker syntax, remove it
    Msg.processKey = function (msgKey) {
        if (!(msgKey.startsWith('${') && msgKey.endsWith('}')))
            return msgKey;
        // remove Freemarker syntax
        return msgKey.substring(2, msgKey.length - 1);
    };
    // if the param has Freemarker syntax, try to look up its value
    Msg.processParam = function (param) {
        if (!(param.startsWith('${') && param.endsWith('}')))
            return param;
        // remove Freemarker syntax
        var key = param.substring(2, param.length - 1);
        var value = l18nMsg[key];
        if (value === undefined)
            return param;
        return value;
    };
    return Msg;
}(React.Component));
exports.Msg = Msg;
