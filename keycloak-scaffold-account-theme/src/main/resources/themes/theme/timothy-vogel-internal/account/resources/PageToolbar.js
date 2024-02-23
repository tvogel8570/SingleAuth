function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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

import * as React from "../timothy-vogel-internal/web_modules/react.js";
import { Toolbar, ToolbarGroup, ToolbarItem } from "../timothy-vogel-internal/web_modules/@patternfly/react-core.js";
import { ReferrerLink } from "./widgets/ReferrerLink.js";
import { LogoutButton } from "./widgets/Logout.js";
export class PageToolbar extends React.Component {
  constructor(props) {
    super(props);
    _defineProperty(this, "hasReferrer", typeof referrerName !== 'undefined');
    _defineProperty(this, "onKebabDropdownToggle", isKebabDropdownOpen => {
      this.setState({
        isKebabDropdownOpen
      });
    });
    this.state = {
      isKebabDropdownOpen: false
    };
  }
  render() {
    return /*#__PURE__*/React.createElement(Toolbar, null, this.hasReferrer && /*#__PURE__*/React.createElement(ToolbarGroup, {
      key: "referrerGroup",
      alignment: {
        default: "alignRight"
      }
    }, /*#__PURE__*/React.createElement(ToolbarItem, {
      className: "pf-m-icons",
      key: "referrer"
    }, /*#__PURE__*/React.createElement(ReferrerLink, null))), /*#__PURE__*/React.createElement(ToolbarGroup, {
      key: "secondGroup",
      alignment: {
        default: "alignRight"
      }
    }, /*#__PURE__*/React.createElement(ToolbarItem, {
      className: "pf-m-icons",
      key: "logout"
    }, /*#__PURE__*/React.createElement(LogoutButton, null))));
  }
}
//# sourceMappingURL=PageToolbar.js.map