function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import * as React from "../timothy-vogel-internal/web_modules/react.js";
import { PageHeaderTools } from "../timothy-vogel-internal/web_modules/@patternfly/react-core.js";
import { ReferrerLink } from "./widgets/ReferrerLink.js";
import { LogoutButton } from "./widgets/Logout.js";
export class PageHeaderTool extends React.Component {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "hasReferrer", typeof referrerName !== 'undefined');
  }
  render() {
    const username = loggedInUserName();
    return /*#__PURE__*/React.createElement(PageHeaderTools, null, this.hasReferrer && /*#__PURE__*/React.createElement("div", {
      className: "pf-c-page__header-tools-group"
    }, /*#__PURE__*/React.createElement(ReferrerLink, null)), /*#__PURE__*/React.createElement("div", {
      className: "pf-c-page__header-tools-group"
    }, /*#__PURE__*/React.createElement(LogoutButton, null)), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: '10px'
      },
      id: "loggedInUser"
    }, username));
  }
}
//# sourceMappingURL=PageHeaderTool.js.map