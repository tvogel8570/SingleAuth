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
exports.LogoutDropdownItem = exports.LogoutButton = void 0;
var React = require("react");
var Msg_1 = require("./Msg");
var KeycloakContext_1 = require("../keycloak-service/KeycloakContext");
var react_core_1 = require("@patternfly/react-core");
function handleLogout(keycloak) {
    keycloak.logout();
}
var LogoutButton = /** @class */ (function (_super) {
    __extends(LogoutButton, _super);
    function LogoutButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LogoutButton.prototype.render = function () {
        return (React.createElement(KeycloakContext_1.KeycloakContext.Consumer, null, function (keycloak) { return (React.createElement(react_core_1.Button, { id: "signOutButton", onClick: function () { return handleLogout(keycloak); } },
            React.createElement(Msg_1.Msg, { msgKey: "doSignOut" }))); }));
    };
    return LogoutButton;
}(React.Component));
exports.LogoutButton = LogoutButton;
var LogoutDropdownItem = /** @class */ (function (_super) {
    __extends(LogoutDropdownItem, _super);
    function LogoutDropdownItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LogoutDropdownItem.prototype.render = function () {
        return (React.createElement(KeycloakContext_1.KeycloakContext.Consumer, null, function (keycloak) { return (React.createElement(react_core_1.DropdownItem, { id: "signOutLink", key: "logout", onClick: function () { return handleLogout(keycloak); } }, Msg_1.Msg.localize('doSignOut'))); }));
    };
    return LogoutDropdownItem;
}(React.Component));
exports.LogoutDropdownItem = LogoutDropdownItem;
