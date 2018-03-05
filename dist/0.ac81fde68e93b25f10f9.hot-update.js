webpackHotUpdate(0,{

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _pubsubJs = __webpack_require__(9);\n\nvar _pubsubJs2 = _interopRequireDefault(_pubsubJs);\n\n__webpack_require__(4);\n\nvar _reactRouterDom = __webpack_require__(8);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Auth = function () {\n  function Auth() {\n    _classCallCheck(this, Auth);\n\n    // 1 min =60000\n    // 10 min=600000\n    this.newTokenInmin = 60000;\n    this.interval = null;\n  }\n\n  _createClass(Auth, [{\n    key: 'validateToken',\n    value: function validateToken(pathtorediect) {\n      fetch('/api/authvalidate', {\n        method: 'post',\n        headers: {\n          'Content-Type': 'application/json',\n          'x-access-token': window.localStorage.getItem('accessToken')\n        },\n        body: JSON.stringify({})\n      }).then(function (res) {\n        return res.json();\n      }).then(function (json) {\n        if (json.statuscode === 403) {\n          _pubsubJs2.default.publish('IS_LOGIN', { status: false, token: window.localStorage.getItem('accessToken') });\n        }\n      });\n    }\n  }, {\n    key: 'distroyedToken',\n    value: function distroyedToken(pathtorediect) {\n      fetch('/api/invalidate', {\n        method: 'post',\n        body: JSON.stringify({})\n      }).then(function (res) {\n        return res.json();\n      }).then(function (json) {\n        console.log(json);\n        if (json.statuscode === 403) {\n          pathtorediect();\n        }\n      });\n    }\n  }, {\n    key: 'requestNewToken',\n    value: function requestNewToken() {\n\n      this.interval = setInterval(function () {\n        fetch('/api/newtoken', {\n          method: 'post',\n          body: JSON.stringify({})\n        }).then(function (res) {\n          return res.json();\n        }).then(function (json) {\n          console.log(\"newToken>>>>>>>>>\", json);\n          window.localStorage.setItem('accessToken', json.accesstoken);\n        });\n      }, this.newTokenInmin);\n    }\n  }, {\n    key: 'clearInterval',\n    value: function (_clearInterval) {\n      function clearInterval() {\n        return _clearInterval.apply(this, arguments);\n      }\n\n      clearInterval.toString = function () {\n        return _clearInterval.toString();\n      };\n\n      return clearInterval;\n    }(function () {\n\n      clearInterval(this.interval);\n    })\n  }]);\n\n  return Auth;\n}();\n\nexports.default = Auth;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbW1vbi9hdXRoLmpzPzM5YzciXSwibmFtZXMiOlsiQXV0aCIsIm5ld1Rva2VuSW5taW4iLCJpbnRlcnZhbCIsInBhdGh0b3JlZGllY3QiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzIiwianNvbiIsInN0YXR1c2NvZGUiLCJwdWJsaXNoIiwic3RhdHVzIiwidG9rZW4iLCJjb25zb2xlIiwibG9nIiwic2V0SW50ZXJ2YWwiLCJzZXRJdGVtIiwiYWNjZXNzdG9rZW4iLCJjbGVhckludGVydmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7OztJQUdRQSxJO0FBRU4sa0JBQWM7QUFBQTs7QUFFWjtBQUNBO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQixLQUFyQjtBQUNBLFNBQUtDLFFBQUwsR0FBYyxJQUFkO0FBRUQ7Ozs7a0NBRWFDLGEsRUFBZTtBQUMzQkMsWUFBTyxtQkFBUCxFQUE0QjtBQUMxQkMsZ0JBQVEsTUFEa0I7QUFFMUJDLGlCQUFTO0FBQ1AsMEJBQWdCLGtCQURUO0FBRVAsNEJBQWtCQyxPQUFPQyxZQUFQLENBQW9CQyxPQUFwQixDQUE2QixhQUE3QjtBQUZYLFNBRmlCO0FBTTFCQyxjQUFNQyxLQUFLQyxTQUFMLENBQWdCLEVBQWhCO0FBTm9CLE9BQTVCLEVBUUVDLElBUkYsQ0FRUTtBQUFBLGVBQU9DLElBQUlDLElBQUosRUFBUDtBQUFBLE9BUlIsRUFRNEJGLElBUjVCLENBUWtDLGdCQUFRO0FBQ3hDLFlBQUlFLEtBQUtDLFVBQUwsS0FBb0IsR0FBeEIsRUFBNkI7QUFDNUIsNkJBQU9DLE9BQVAsQ0FBZ0IsVUFBaEIsRUFBNEIsRUFBQ0MsUUFBUSxLQUFULEVBQWdCQyxPQUFPWixPQUFPQyxZQUFQLENBQW9CQyxPQUFwQixDQUE2QixhQUE3QixDQUF2QixFQUE1QjtBQUNBO0FBQ0YsT0FaRDtBQWNEOzs7bUNBRWdCTixhLEVBQWU7QUFDOUJDLFlBQU8saUJBQVAsRUFBMEI7QUFDeEJDLGdCQUFRLE1BRGdCO0FBRXhCSyxjQUFNQyxLQUFLQyxTQUFMLENBQWdCLEVBQWhCO0FBRmtCLE9BQTFCLEVBSUVDLElBSkYsQ0FJUTtBQUFBLGVBQU9DLElBQUlDLElBQUosRUFBUDtBQUFBLE9BSlIsRUFJNEJGLElBSjVCLENBSWtDLGdCQUFRO0FBQ3hDTyxnQkFBUUMsR0FBUixDQUFhTixJQUFiO0FBQ0EsWUFBSUEsS0FBS0MsVUFBTCxLQUFvQixHQUF4QixFQUE2QjtBQUMzQmI7QUFDRDtBQUNGLE9BVEQ7QUFXRDs7O3NDQUVtQjs7QUFFbEIsV0FBS0QsUUFBTCxHQUFnQm9CLFlBQWEsWUFBTTtBQUNqQ2xCLGNBQU8sZUFBUCxFQUF3QjtBQUN0QkMsa0JBQVEsTUFEYztBQUV0QkssZ0JBQU1DLEtBQUtDLFNBQUwsQ0FBZ0IsRUFBaEI7QUFGZ0IsU0FBeEIsRUFJRUMsSUFKRixDQUlRO0FBQUEsaUJBQU9DLElBQUlDLElBQUosRUFBUDtBQUFBLFNBSlIsRUFJNEJGLElBSjVCLENBSWtDLGdCQUFRO0FBQ3hDTyxrQkFBUUMsR0FBUixDQUFhLG1CQUFiLEVBQWtDTixJQUFsQztBQUNBUixpQkFBT0MsWUFBUCxDQUFvQmUsT0FBcEIsQ0FBNkIsYUFBN0IsRUFBNENSLEtBQUtTLFdBQWpEO0FBQ0QsU0FQRDtBQVFELE9BVGUsRUFTYixLQUFLdkIsYUFUUSxDQUFoQjtBQVdEOzs7Ozs7Ozs7Ozs7O2tCQUVjOztBQUVid0Isb0JBQWUsS0FBS3ZCLFFBQXBCO0FBRUQsSzs7Ozs7O2tCQUlZRixJIiwiZmlsZSI6IjYwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFB1YlN1YiBmcm9tICdwdWJzdWItanMnO1xuaW1wb3J0ICd3aGF0d2ctZmV0Y2gnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5cbiAgY2xhc3MgQXV0aCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgIFxuICAgIC8vIDEgbWluID02MDAwMFxuICAgIC8vIDEwIG1pbj02MDAwMDBcbiAgICB0aGlzLm5ld1Rva2VuSW5taW4gPSA2MDAwMDtcbiAgICB0aGlzLmludGVydmFsPW51bGw7XG5cbiAgfVxuXG4gIHZhbGlkYXRlVG9rZW4ocGF0aHRvcmVkaWVjdCkge1xuICAgIGZldGNoICgnL2FwaS9hdXRodmFsaWRhdGUnLCB7XG4gICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ3gtYWNjZXNzLXRva2VuJzogd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtICgnYWNjZXNzVG9rZW4nKVxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5ICh7fSlcbiAgICB9XG4gICAgKS50aGVuIChyZXMgPT4gcmVzLmpzb24gKCkpLnRoZW4gKGpzb24gPT4ge1xuICAgICAgaWYgKGpzb24uc3RhdHVzY29kZSA9PT0gNDAzKSB7XG4gICAgICAgUHViU3ViLnB1Ymxpc2ggKCdJU19MT0dJTicsIHtzdGF0dXM6IGZhbHNlLCB0b2tlbjogd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtICgnYWNjZXNzVG9rZW4nKX0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gIH1cbiAgO1xuICAgIGRpc3Ryb3llZFRva2VuKHBhdGh0b3JlZGllY3QpIHtcbiAgICBmZXRjaCAoJy9hcGkvaW52YWxpZGF0ZScsIHtcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkgKHt9KVxuICAgIH1cbiAgICApLnRoZW4gKHJlcyA9PiByZXMuanNvbiAoKSkudGhlbiAoanNvbiA9PiB7XG4gICAgICBjb25zb2xlLmxvZyAoanNvbik7XG4gICAgICBpZiAoanNvbi5zdGF0dXNjb2RlID09PSA0MDMpIHtcbiAgICAgICAgcGF0aHRvcmVkaWVjdCAoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICB9XG4gIDtcbiAgICByZXF1ZXN0TmV3VG9rZW4oKSB7XG5cbiAgICB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwgKCgpID0+IHtcbiAgICAgIGZldGNoICgnL2FwaS9uZXd0b2tlbicsIHtcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5ICh7fSlcbiAgICAgIH1cbiAgICAgICkudGhlbiAocmVzID0+IHJlcy5qc29uICgpKS50aGVuIChqc29uID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cgKFwibmV3VG9rZW4+Pj4+Pj4+Pj5cIiwganNvbik7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSAoJ2FjY2Vzc1Rva2VuJywganNvbi5hY2Nlc3N0b2tlbik7XG4gICAgICB9KTtcbiAgICB9LCB0aGlzLm5ld1Rva2VuSW5taW4pO1xuXG4gIH07XG4gIFxuICBjbGVhckludGVydmFsKCl7XG4gICAgXG4gICAgY2xlYXJJbnRlcnZhbCggdGhpcy5pbnRlcnZhbCk7XG4gICAgXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBBdXRoIDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL2NvbW1vbi9hdXRoLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///60\n");

/***/ })

})