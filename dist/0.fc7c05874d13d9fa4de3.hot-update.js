webpackHotUpdate(0,{

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Listing = function (_Component) {\n  _inherits(Listing, _Component);\n\n  function Listing(props) {\n    _classCallCheck(this, Listing);\n\n    var _this = _possibleConstructorReturn(this, (Listing.__proto__ || Object.getPrototypeOf(Listing)).call(this, props));\n\n    _this.state = {\n      userid: window.localStorage.getItem('userid'),\n      posts: []\n    };\n    return _this;\n  }\n\n  _createClass(Listing, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      fetch('/api/getmyposts', { method: 'post', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(this.state) }).then(function (res) {\n        return res.json();\n      }).then(function (json) {\n        _this2.setState({ posts: json.posts });\n      });\n    }\n  }, {\n    key: 'postlitsing',\n    value: function postlitsing() {\n      var listItems = '';\n      if (this.state.posts.length == 0) {\n        listItems = _react2.default.createElement(\n          'div',\n          null,\n          'No record '\n        );\n      } else {\n\n        listItems = this.state.posts.forEach(function (obj, k) {\n          return _react2.default.createElement(\n            'div',\n            { className: 'well' },\n            _react2.default.createElement(\n              'h4',\n              { className: 'media-heading' },\n              obj.title\n            ),\n            _react2.default.createElement(\n              'p',\n              { className: 'text-right' },\n              'By you.'\n            ),\n            _react2.default.createElement(\n              'p',\n              null,\n              obj.body\n            ),\n            _react2.default.createElement(\n              'ul',\n              { className: 'list-inline list-unstyled' },\n              _react2.default.createElement(\n                'li',\n                null,\n                _react2.default.createElement(\n                  'span',\n                  null,\n                  _react2.default.createElement('i', { className: 'glyphicon glyphicon-calendar' }),\n                  new Date(obj.date).toLocaleString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' }),\n                  ' '\n                )\n              ),\n              _react2.default.createElement(\n                'li',\n                null,\n                '|'\n              ),\n              _react2.default.createElement(\n                'span',\n                null,\n                _react2.default.createElement('i', { className: 'glyphicon glyphicon-comment' }),\n                ' 0 comments'\n              ),\n              _react2.default.createElement(\n                'li',\n                null,\n                '|'\n              ),\n              _react2.default.createElement(\n                'li',\n                null,\n                _react2.default.createElement('span', { className: 'glyphicon glyphicon-star' }),\n                _react2.default.createElement('span', { className: 'glyphicon glyphicon-star' }),\n                _react2.default.createElement('span', { className: 'glyphicon glyphicon-star' }),\n                _react2.default.createElement('span', { className: 'glyphicon glyphicon-star' }),\n                _react2.default.createElement('span', { className: 'glyphicon glyphicon-star-empty' })\n              ),\n              _react2.default.createElement(\n                'li',\n                null,\n                '|'\n              ),\n              _react2.default.createElement(\n                'li',\n                null,\n                _react2.default.createElement(\n                  'span',\n                  { className: 'glyphicon glyphicon-tags' },\n                  '\\xA0'\n                ),\n                'Tags : ',\n                obj.tags\n              )\n            )\n          );\n        });\n      }\n      return listItems;\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        ' ',\n        this.postlitsing(),\n        ' '\n      );\n    }\n  }]);\n\n  return Listing;\n}(_react.Component);\n\nexports.default = Listing;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvbXlwb3N0L2xpc3RpbmcuanM/MGM0NSJdLCJuYW1lcyI6WyJMaXN0aW5nIiwicHJvcHMiLCJzdGF0ZSIsInVzZXJpZCIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwb3N0cyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsImpzb24iLCJzZXRTdGF0ZSIsImxpc3RJdGVtcyIsImxlbmd0aCIsImZvckVhY2giLCJvYmoiLCJrIiwidGl0bGUiLCJEYXRlIiwiZGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwiaG91ciIsImhvdXIxMiIsIm1pbnV0ZSIsInRhZ3MiLCJwb3N0bGl0c2luZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBQ01BLE87OztBQUVKLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsa0hBQ1ZBLEtBRFU7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxjQUFRQyxPQUFPQyxZQUFQLENBQW9CQyxPQUFwQixDQUE2QixRQUE3QixDQURHO0FBRVhDLGFBQU87QUFGSSxLQUFiO0FBRmlCO0FBTWxCOzs7O3dDQUVxQjtBQUFBOztBQUNwQkMsWUFBTyxpQkFBUCxFQUEwQixFQUFDQyxRQUFRLE1BQVQsRUFBaUJDLFNBQVMsRUFBQyxnQkFBZ0Isa0JBQWpCLEVBQTFCLEVBQWdFQyxNQUFNQyxLQUFLQyxTQUFMLENBQWdCLEtBQUtYLEtBQXJCLENBQXRFLEVBQTFCLEVBQ0dZLElBREgsQ0FDUztBQUFBLGVBQU9DLElBQUlDLElBQUosRUFBUDtBQUFBLE9BRFQsRUFFR0YsSUFGSCxDQUVTLGdCQUFRO0FBQ2IsZUFBS0csUUFBTCxDQUFlLEVBQUNWLE9BQU9TLEtBQUtULEtBQWIsRUFBZjtBQUNELE9BSkg7QUFNRDs7O2tDQUVhO0FBQ1osVUFBSVcsWUFBWSxFQUFoQjtBQUNBLFVBQUksS0FBS2hCLEtBQUwsQ0FBV0ssS0FBWCxDQUFpQlksTUFBakIsSUFBMkIsQ0FBL0IsRUFBa0M7QUFDaENELG9CQUFhO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBYjtBQUNELE9BRkQsTUFFTzs7QUFFTEEsb0JBQVksS0FBS2hCLEtBQUwsQ0FBV0ssS0FBWCxDQUFpQmEsT0FBakIsQ0FBMEIsVUFBQ0MsR0FBRCxFQUFNQyxDQUFOLEVBQVk7QUFDeEQsaUJBQ1E7QUFBQTtBQUFBLGNBQUssV0FBVSxNQUFmO0FBQ0U7QUFBQTtBQUFBLGdCQUFJLFdBQVUsZUFBZDtBQUErQkQsa0JBQUlFO0FBQW5DLGFBREY7QUFFRTtBQUFBO0FBQUEsZ0JBQUcsV0FBVSxZQUFiO0FBQUE7QUFBQSxhQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUlGLGtCQUFJVjtBQUFSLGFBSEY7QUFJRTtBQUFBO0FBQUEsZ0JBQUksV0FBVSwyQkFBZDtBQUNFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQTtBQUFNLHVEQUFHLFdBQVUsOEJBQWIsR0FBTjtBQUNLLHNCQUFJYSxJQUFKLENBQVVILElBQUlJLElBQWQsRUFBb0JDLGNBQXBCLENBQW9DLE9BQXBDLEVBQTZDLEVBQUNDLE1BQU0sU0FBUCxFQUFrQkMsUUFBUSxJQUExQixFQUFnQ0MsUUFBUSxTQUF4QyxFQUE3QyxDQURMO0FBQUE7QUFBQTtBQUFKLGVBREY7QUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEY7QUFJRTtBQUFBO0FBQUE7QUFBTSxxREFBRyxXQUFVLDZCQUFiLEdBQU47QUFBQTtBQUFBLGVBSkY7QUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEY7QUFNRTtBQUFBO0FBQUE7QUFDRSx3REFBTSxXQUFVLDBCQUFoQixHQURGO0FBRUUsd0RBQU0sV0FBVSwwQkFBaEIsR0FGRjtBQUdFLHdEQUFNLFdBQVUsMEJBQWhCLEdBSEY7QUFJRSx3REFBTSxXQUFVLDBCQUFoQixHQUpGO0FBS0Usd0RBQU0sV0FBVSxnQ0FBaEI7QUFMRixlQU5GO0FBYUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWJGO0FBY0U7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLG9CQUFNLFdBQVUsMEJBQWhCO0FBQUE7QUFBQSxpQkFBSjtBQUFBO0FBQ1VSLG9CQUFJUztBQURkO0FBZEY7QUFKRixXQURSO0FBMkJTLFNBNUJTLENBQVo7QUE2QkM7QUFDRCxhQUFPWixTQUFQO0FBQ0Q7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBTyxhQUFLYSxXQUFMLEVBQVA7QUFBQTtBQUFBLE9BREY7QUFHRDs7Ozs7O2tCQUlZL0IsTyIsImZpbGUiOiIyNTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5jbGFzcyBMaXN0aW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyIChwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHVzZXJpZDogd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtICgndXNlcmlkJyksXG4gICAgICBwb3N0czogW11cbiAgICB9O1xuICB9XG4gIDtcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBmZXRjaCAoJy9hcGkvZ2V0bXlwb3N0cycsIHttZXRob2Q6ICdwb3N0JywgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9LCBib2R5OiBKU09OLnN0cmluZ2lmeSAodGhpcy5zdGF0ZSl9KVxuICAgICAgLnRoZW4gKHJlcyA9PiByZXMuanNvbiAoKSlcbiAgICAgIC50aGVuIChqc29uID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSAoe3Bvc3RzOiBqc29uLnBvc3RzfSk7XG4gICAgICB9KTtcblxuICB9XG5cbiAgcG9zdGxpdHNpbmcoKSB7XG4gICAgbGV0IGxpc3RJdGVtcyA9ICcnO1xuICAgIGlmICh0aGlzLnN0YXRlLnBvc3RzLmxlbmd0aCA9PSAwKSB7XG4gICAgICBsaXN0SXRlbXMgPSAoPGRpdj5ObyByZWNvcmQgPC9kaXY+KTtcbiAgICB9IGVsc2Uge1xuXG4gICAgICBsaXN0SXRlbXMgPSB0aGlzLnN0YXRlLnBvc3RzLmZvckVhY2ggKChvYmosIGspID0+IHtcbnJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsbFwiPlxuICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJtZWRpYS1oZWFkaW5nXCI+e29iai50aXRsZX08L2g0PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5CeSB5b3UuPC9wPlxuICAgICAgICAgIDxwPntvYmouYm9keX08L3A+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtaW5saW5lIGxpc3QtdW5zdHlsZWRcIj5cbiAgICAgICAgICAgIDxsaT48c3Bhbj48aSBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLWNhbGVuZGFyXCI+PC9pPiBcbiAgICAgICAgICAgICAgICB7ICAgIG5ldyBEYXRlIChvYmouZGF0ZSkudG9Mb2NhbGVTdHJpbmcgKCdlbi1VUycsIHtob3VyOiAnbnVtZXJpYycsIGhvdXIxMjogdHJ1ZSwgbWludXRlOiAnbnVtZXJpYycgIH0gKX0gPC9zcGFuPjwvbGk+XG4gICAgICAgICAgICA8bGk+fDwvbGk+XG4gICAgICAgICAgICA8c3Bhbj48aSBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLWNvbW1lbnRcIj48L2k+IDAgY29tbWVudHM8L3NwYW4+XG4gICAgICAgICAgICA8bGk+fDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tc3RhclwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1zdGFyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXN0YXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tc3RhclwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1zdGFyLWVtcHR5XCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT58PC9saT5cbiAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXRhZ3NcIj4mbmJzcDs8L3NwYW4+XG4gICAgICAgICAgICAgIFRhZ3MgOiB7b2JqLnRhZ3N9XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICBcbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbik7XG5cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHJldHVybiBsaXN0SXRlbXM7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj4ge3RoaXMucG9zdGxpdHNpbmcgKCl9IDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG4gIH1cblxuICBleHBvcnQgZGVmYXVsdCBMaXN0aW5nO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9jb21wb25lbnRzL215cG9zdC9saXN0aW5nLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///253\n");

/***/ })

})