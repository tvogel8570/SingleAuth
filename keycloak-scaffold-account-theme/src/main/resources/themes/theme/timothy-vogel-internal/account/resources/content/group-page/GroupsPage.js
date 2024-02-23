function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import * as React from "../../../timothy-vogel-internal/web_modules/react.js";
import { Checkbox, DataList, DataListItem, DataListItemRow, DataListCell, DataListItemCells } from "../../../timothy-vogel-internal/web_modules/@patternfly/react-core.js";
import { ContentPage } from "../ContentPage.js";
import { AccountServiceContext } from "../../account-service/AccountServiceContext.js";
import { Msg } from "../../widgets/Msg.js";
export class GroupsPage extends React.Component {
  constructor(props, context) {
    super(props);
    _defineProperty(this, "context", void 0);
    _defineProperty(this, "changeDirectMembership", (checked, event) => {
      this.setState({
        isDirectMembership: checked
      });
    });
    this.context = context;
    this.state = {
      groups: [],
      directGroups: [],
      isDirectMembership: false
    };
    this.fetchGroups();
  }
  fetchGroups() {
    this.context.doGet("/groups").then(response => {
      const directGroups = response.data || [];
      const groups = [...directGroups];
      const groupsPaths = directGroups.map(s => s.path);
      directGroups.forEach(el => this.getParents(el, groups, groupsPaths));
      this.setState({
        groups: groups,
        directGroups: directGroups
      });
    });
  }
  getParents(el, groups, groupsPaths) {
    const parentPath = el.path.slice(0, el.path.lastIndexOf('/'));
    if (parentPath && groupsPaths.indexOf(parentPath) === -1) {
      el = {
        name: parentPath.slice(parentPath.lastIndexOf('/') + 1),
        path: parentPath
      };
      groups.push(el);
      groupsPaths.push(parentPath);
      this.getParents(el, groups, groupsPaths);
    }
  }
  emptyGroup() {
    return /*#__PURE__*/React.createElement(DataListItem, {
      key: "emptyItem",
      "aria-labelledby": "empty-item"
    }, /*#__PURE__*/React.createElement(DataListItemRow, {
      key: "emptyRow"
    }, /*#__PURE__*/React.createElement(DataListItemCells, {
      dataListCells: [/*#__PURE__*/React.createElement(DataListCell, {
        key: "empty"
      }, /*#__PURE__*/React.createElement("strong", null, /*#__PURE__*/React.createElement(Msg, {
        msgKey: "noGroupsText"
      })))]
    })));
  }
  renderGroupList(group, appIndex) {
    return /*#__PURE__*/React.createElement(DataListItem, {
      id: `${appIndex}-group`,
      key: 'group-' + appIndex,
      "aria-labelledby": "groups-list"
    }, /*#__PURE__*/React.createElement(DataListItemRow, null, /*#__PURE__*/React.createElement(DataListItemCells, {
      dataListCells: [/*#__PURE__*/React.createElement(DataListCell, {
        id: `${appIndex}-group-name`,
        width: 2,
        key: 'name-' + appIndex
      }, group.name), /*#__PURE__*/React.createElement(DataListCell, {
        id: `${appIndex}-group-path`,
        width: 2,
        key: 'path-' + appIndex
      }, group.path), /*#__PURE__*/React.createElement(DataListCell, {
        id: `${appIndex}-group-directMembership`,
        width: 2,
        key: 'directMembership-' + appIndex
      }, /*#__PURE__*/React.createElement(Checkbox, {
        id: `${appIndex}-checkbox-directMembership`,
        isChecked: group.id != null,
        isDisabled: true
      }))]
    })));
  }
  render() {
    return /*#__PURE__*/React.createElement(ContentPage, {
      title: Msg.localize('groupLabel')
    }, /*#__PURE__*/React.createElement(DataList, {
      id: "groups-list",
      "aria-label": Msg.localize('groupLabel'),
      isCompact: true
    }, /*#__PURE__*/React.createElement(DataListItem, {
      id: "groups-list-header",
      "aria-labelledby": "Columns names"
    }, /*#__PURE__*/React.createElement(DataListItemRow, null, /*#__PURE__*/React.createElement(DataListItemCells, {
      dataListCells: [/*#__PURE__*/React.createElement(DataListCell, {
        key: "directMembership-header"
      }, /*#__PURE__*/React.createElement(Checkbox, {
        label: Msg.localize('directMembership'),
        id: "directMembership-checkbox",
        isChecked: this.state.isDirectMembership,
        onChange: this.changeDirectMembership
      }))]
    }))), /*#__PURE__*/React.createElement(DataListItem, {
      id: "groups-list-header",
      "aria-labelledby": "Columns names"
    }, /*#__PURE__*/React.createElement(DataListItemRow, null, /*#__PURE__*/React.createElement(DataListItemCells, {
      dataListCells: [/*#__PURE__*/React.createElement(DataListCell, {
        key: "group-name-header",
        width: 2
      }, /*#__PURE__*/React.createElement("strong", null, /*#__PURE__*/React.createElement(Msg, {
        msgKey: "Name"
      }))), /*#__PURE__*/React.createElement(DataListCell, {
        key: "group-path-header",
        width: 2
      }, /*#__PURE__*/React.createElement("strong", null, /*#__PURE__*/React.createElement(Msg, {
        msgKey: "path"
      }))), /*#__PURE__*/React.createElement(DataListCell, {
        key: "group-direct-membership-header",
        width: 2
      }, /*#__PURE__*/React.createElement("strong", null, /*#__PURE__*/React.createElement(Msg, {
        msgKey: "directMembership"
      })))]
    }))), this.state.groups.length === 0 ? this.emptyGroup() : this.state.isDirectMembership ? this.state.directGroups.map((group, appIndex) => this.renderGroupList(group, appIndex)) : this.state.groups.map((group, appIndex) => this.renderGroupList(group, appIndex))));
  }
}
_defineProperty(GroupsPage, "contextType", AccountServiceContext);
;
//# sourceMappingURL=GroupsPage.js.map