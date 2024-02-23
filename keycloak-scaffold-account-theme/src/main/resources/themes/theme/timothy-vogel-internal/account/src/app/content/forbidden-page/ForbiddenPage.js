"use strict";
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
exports.ForbiddenPage = void 0;
/*
 * Copyright 2020 Red Hat, Inc. and/or its affiliates.
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
var React = require("react");
var react_icons_1 = require("@patternfly/react-icons");
var Msg_1 = require("../../widgets/Msg");
var EmptyMessageState_1 = require("../../widgets/EmptyMessageState");
var ForbiddenPage = /** @class */ (function (_super) {
    __extends(ForbiddenPage, _super);
    function ForbiddenPage() {
        return _super.call(this, {}) || this;
    }
    ForbiddenPage.prototype.render = function () {
        return (React.createElement(EmptyMessageState_1.default, { icon: react_icons_1.WarningTriangleIcon, messageKey: "forbidden" },
            React.createElement(Msg_1.Msg, { msgKey: "needAccessRights" })));
    };
    return ForbiddenPage;
}(React.Component));
exports.ForbiddenPage = ForbiddenPage;
;
