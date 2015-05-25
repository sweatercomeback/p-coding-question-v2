(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

var _employee = require("./employee");

var employee = _interopRequireWildcard(_employee);

employee.init($("#form-add-employee"));

employee.get().then(function (data) {
    $("#employee-list").html(data);
});

},{"./employee":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.log = log;

function log(message) {
    alert(message);
}

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.get = get;
exports.init = init;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _CommonLogger = require('./Common/logger');

var logger = _interopRequireWildcard(_CommonLogger);

function postAdd(data) {
    return $.ajax({
        url: '/api/employees',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: data,
        method: 'POST'
    });
}

function add(e) {
    var employee = {};
    employee.firstName = $('#firstname').val();
    employee.lastname = $('#lastname').val();
    employee.dependents = parseInt($('#dependents').val());
    if ($('#spouse:checked').size() > 0) {
        employee.dependents++;
    }
    postAdd(employee).then(function () {
        logger.log('success');
    });
    e.preventDefault();
    return false;
}

function get() {
    return $.ajax({
        url: '/employees',
        contentType: 'text/html; charset=utf-8',
        method: 'GET'
    });
}

function init($form) {

    $form.on('submit', add);
}

},{"./Common/logger":2}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJEOi9EZXZlbG9wbWVudC9QbGF5L3BheWxvY2l0eS1jb2RpbmctcXVlc3Rpb24vUGF5cm9sbC5XZWIvU2NyaXB0cy9TcmMvbWFpbi5qcyIsIkQ6L0RldmVsb3BtZW50L1BsYXkvcGF5bG9jaXR5LWNvZGluZy1xdWVzdGlvbi9QYXlyb2xsLldlYi9TY3JpcHRzL1NyYy9Db21tb24vbG9nZ2VyLmpzIiwiRDovRGV2ZWxvcG1lbnQvUGxheS9wYXlsb2NpdHktY29kaW5nLXF1ZXN0aW9uL1BheXJvbGwuV2ViL1NjcmlwdHMvU3JjL2VtcGxveWVlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozt3QkNBMkIsWUFBWTs7SUFBMUIsUUFBUTs7QUFFckIsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDOztBQUV2QyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSSxFQUFDO0FBQzlCLEtBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztDQUNsQyxDQUFDLENBQUM7Ozs7Ozs7O1FDTmMsR0FBRyxHQUFILEdBQUc7O0FBQVosU0FBUyxHQUFHLENBQUMsT0FBTyxFQUFFO0FBQzFCLFNBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztDQUNsQjs7Ozs7Ozs7UUN5Qm1CLEdBQUcsR0FBSCxHQUFHO1FBUUgsSUFBSSxHQUFKLElBQUk7Ozs7NEJBbkNDLGlCQUFpQjs7SUFBN0IsTUFBTTs7QUFFaEIsU0FBUyxPQUFPLENBQUMsSUFBSSxFQUFFO0FBQ2xCLFdBQU8sQ0FBQyxDQUFDLElBQUksQ0FBQztBQUNWLFdBQUcsRUFBRSxnQkFBZ0I7QUFDckIsbUJBQVcsRUFBRSxpQ0FBaUM7QUFDOUMsZ0JBQVEsRUFBRSxNQUFNO0FBQ2hCLFlBQUksRUFBRSxJQUFJO0FBQ1YsY0FBTSxFQUFFLE1BQU07S0FDakIsQ0FBQyxDQUFDO0NBQ047O0FBRUQsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQ1osUUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQ2xCLFlBQVEsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQzNDLFlBQVEsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ3pDLFlBQVEsQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQ3ZELFFBQUksQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFO0FBQ2pDLGdCQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7S0FDekI7QUFDRCxXQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVU7QUFDN0IsY0FBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUN6QixDQUFDLENBQUM7QUFDSCxLQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDbkIsV0FBTyxLQUFLLENBQUM7Q0FDaEI7O0FBRU0sU0FBUyxHQUFHLEdBQUc7QUFDbEIsV0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQ1YsV0FBRyxFQUFFLFlBQVk7QUFDakIsbUJBQVcsRUFBRSwwQkFBMEI7QUFDdkMsY0FBTSxFQUFFLEtBQUs7S0FDaEIsQ0FBQyxDQUFDO0NBQ047O0FBRU0sU0FBUyxJQUFJLENBQUMsS0FBSyxFQUFFOztBQUV4QixTQUFLLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztDQUUzQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCLvu79pbXBvcnQgKiBhcyBlbXBsb3llZSBmcm9tICcuL2VtcGxveWVlJztcclxuXHJcbmVtcGxveWVlLmluaXQoJChcIiNmb3JtLWFkZC1lbXBsb3llZVwiKSk7XHJcblxyXG5lbXBsb3llZS5nZXQoKS50aGVuKGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgJChcIiNlbXBsb3llZS1saXN0XCIpLmh0bWwoZGF0YSk7XHJcbn0pOyIsIu+7v2V4cG9ydCBmdW5jdGlvbiBsb2cobWVzc2FnZSkge1xyXG4gICAgYWxlcnQobWVzc2FnZSk7XHJcbn0iLCLvu79pbXBvcnQgKiBhcyBsb2dnZXIgZnJvbSAnLi9Db21tb24vbG9nZ2VyJztcclxuXHJcbiAgIGZ1bmN0aW9uIHBvc3RBZGQoZGF0YSkge1xyXG4gICAgICAgIHJldHVybiAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6ICcvYXBpL2VtcGxveWVlcycsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZChlKSB7XHJcbiAgICAgICAgdmFyIGVtcGxveWVlID0ge307XHJcbiAgICAgICAgZW1wbG95ZWUuZmlyc3ROYW1lID0gJChcIiNmaXJzdG5hbWVcIikudmFsKCk7XHJcbiAgICAgICAgZW1wbG95ZWUubGFzdG5hbWUgPSAkKFwiI2xhc3RuYW1lXCIpLnZhbCgpO1xyXG4gICAgICAgIGVtcGxveWVlLmRlcGVuZGVudHMgPSBwYXJzZUludCgkKFwiI2RlcGVuZGVudHNcIikudmFsKCkpO1xyXG4gICAgICAgIGlmICgkKFwiI3Nwb3VzZTpjaGVja2VkXCIpLnNpemUoKSA+IDApIHtcclxuICAgICAgICAgICAgZW1wbG95ZWUuZGVwZW5kZW50cysrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwb3N0QWRkKGVtcGxveWVlKS50aGVuKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGxvZ2dlci5sb2coXCJzdWNjZXNzXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGdldCgpIHtcclxuICAgICAgICByZXR1cm4gJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiAnL2VtcGxveWVlcycsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcInRleHQvaHRtbDsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGluaXQoJGZvcm0pIHtcclxuXHJcbiAgICAgICAgJGZvcm0ub24oXCJzdWJtaXRcIiwgYWRkKTtcclxuXHJcbiAgICB9XHJcblxyXG4iXX0=
