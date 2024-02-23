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
var React = require("react");
var react_core_1 = require("@patternfly/react-core");
var Msg_1 = require("./Msg");
var EmptyMessageState = /** @class */ (function (_super) {
    __extends(EmptyMessageState, _super);
    function EmptyMessageState(props) {
        return _super.call(this, props) || this;
    }
    EmptyMessageState.prototype.render = function () {
        return (React.createElement(react_core_1.EmptyState, { variant: react_core_1.EmptyStateVariant.full },
            React.createElement(react_core_1.EmptyStateIcon, { icon: this.props.icon }),
            React.createElement(react_core_1.Title, { headingLevel: "h5", size: "lg" },
                React.createElement(Msg_1.Msg, { msgKey: this.props.messageKey })),
            React.createElement(react_core_1.EmptyStateBody, null, this.props.children)));
    };
    return EmptyMessageState;
}(React.Component));
exports.default = EmptyMessageState;