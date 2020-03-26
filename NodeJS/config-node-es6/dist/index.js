'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express2.default)();

const port = 3000;
app.listen(port, () => console.log(`Started on port ${port}`));

exports.default = app;
//# sourceMappingURL=index.js.map