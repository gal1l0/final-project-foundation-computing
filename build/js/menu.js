"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FillElements = void 0;

require("babel-polyfill");

var _config = require("./config");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var fetchItems = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(query) {
    var response, responseJSON;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch({
              url: "".concat(_config.apiUrl, "?apiKey=").concat(_config.apiKey, "&query=").concat(query),
              method: 'GET',
              headers: {
                'Accept': 'application/json'
              }
            });

          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.json();

          case 5:
            responseJSON = _context.sent;
            return _context.abrupt("return", responseJSON.menuItems);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchItems(_x) {
    return _ref.apply(this, arguments);
  };
}();

var getMenuItems = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var query, menuItems;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            query = document.getElementById('search-box').value;
            _context2.next = 3;
            return fetchItems(query);

          case 3:
            menuItems = _context2.sent;
            return _context2.abrupt("return", menuItems());

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getMenuItems() {
    return _ref2.apply(this, arguments);
  };
}();

var setElementAttribute = function setElementAttribute(element, att, val) {
  element.setAttribute(att, val);
};

var FillElements = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var container, menuItems, MenuCards;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            container = document.getElementById('menu-content');
            _context3.next = 3;
            return getMenuItems();

          case 3:
            menuItems = _context3.sent;
            MenuCards = menuItems.forEach(function (item) {
              var card = "<div class=\"card\" style=\"width: 18rem;\">\n        <img src=\"".concat(item.image, "\" class=\"card-img-top\" alt=\"...\">\n        <div class=\"card-body\">\n          <p class=\"card-text\">").concat(item.title, "</p>\n          <a href=\"#\" class=\"btn btn-primary\">Add to cart</a>\n        </div>");
            });
            container.innerHTML = MenuCards;

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function FillElements() {
    return _ref3.apply(this, arguments);
  };
}();

exports.FillElements = FillElements;