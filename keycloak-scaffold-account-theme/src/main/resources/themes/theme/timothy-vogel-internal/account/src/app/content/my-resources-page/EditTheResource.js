"use strict";
/*
 * Copyright 2019 Red Hat, Inc. and/or its affiliates.
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditTheResource = void 0;
var React = require("react");
var react_core_1 = require("@patternfly/react-core");
var react_icons_1 = require("@patternfly/react-icons");
var resource_model_1 = require("./resource-model");
var Msg_1 = require("../../widgets/Msg");
var AccountServiceContext_1 = require("../../account-service/AccountServiceContext");
var ContentAlert_1 = require("../ContentAlert");
var PermissionSelect_1 = require("./PermissionSelect");
var EditTheResource = /** @class */ (function (_super) {
    __extends(EditTheResource, _super);
    function EditTheResource(props, context) {
        var _this = _super.call(this, props) || this;
        _this.handleToggleDialog = function () {
            if (_this.state.isOpen) {
                _this.setState({ isOpen: false });
                _this.props.onClose();
            }
            else {
                _this.clearState();
                _this.setState({ isOpen: true });
            }
        };
        _this.updateChanged = function (row) {
            var changed = _this.state.changed;
            changed[row] = !changed[row];
            _this.setState({ changed: changed });
        };
        _this.context = context;
        _this.state = {
            changed: [],
            isOpen: false,
        };
        return _this;
    }
    EditTheResource.prototype.clearState = function () {
        this.setState({});
    };
    EditTheResource.prototype.savePermission = function (permission) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.context.doPut("/resources/".concat(encodeURIComponent(this.props.resource._id), "/permissions"), [permission])];
                    case 1:
                        _a.sent();
                        ContentAlert_1.ContentAlert.success(Msg_1.Msg.localize('updateSuccess'));
                        return [2 /*return*/];
                }
            });
        });
    };
    EditTheResource.prototype.render = function () {
        var _this = this;
        return (React.createElement(React.Fragment, null,
            this.props.children(this.handleToggleDialog),
            React.createElement(react_core_1.Modal, { title: 'Edit the resource - ' + this.props.resource.name, variant: react_core_1.ModalVariant.large, isOpen: this.state.isOpen, onClose: this.handleToggleDialog, actions: [
                    React.createElement(react_core_1.Button, { key: "done", variant: "link", id: "done", onClick: this.handleToggleDialog },
                        React.createElement(Msg_1.Msg, { msgKey: 'done' })),
                ] },
                React.createElement(react_core_1.Form, { isHorizontal: true }, this.props.permissions.map(function (p, row) { return (React.createElement(React.Fragment, null,
                    React.createElement(react_core_1.FormGroup, { fieldId: "username-".concat(row), label: Msg_1.Msg.localize('User') },
                        React.createElement(react_core_1.TextInput, { id: "username-".concat(row), type: "text", value: p.username, isDisabled: true })),
                    React.createElement(react_core_1.FormGroup, { fieldId: "permissions-".concat(row), label: Msg_1.Msg.localize('permissions'), isRequired: true },
                        React.createElement(react_core_1.InputGroup, null,
                            React.createElement(PermissionSelect_1.PermissionSelect, { scopes: _this.props.resource.scopes, selected: p.scopes.map(function (s) { return new resource_model_1.Scope(s); }), direction: row === _this.props.permissions.length - 1 ? "up" : "down", onSelect: function (selection) {
                                    p.scopes = selection.map(function (s) { return s.name; });
                                    _this.updateChanged(row);
                                } }),
                            React.createElement(react_core_1.Button, { id: "save-".concat(row), isDisabled: !_this.state.changed[row], onClick: function () { return _this.savePermission(p); } },
                                React.createElement(react_icons_1.OkIcon, null)))),
                    React.createElement("hr", null))); })))));
    };
    EditTheResource.defaultProps = { permissions: [] };
    EditTheResource.contextType = AccountServiceContext_1.AccountServiceContext;
    return EditTheResource;
}(React.Component));
exports.EditTheResource = EditTheResource;
