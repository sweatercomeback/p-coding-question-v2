(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _employee = require('./employee');

var employee = _interopRequireWildcard(_employee);

var _employeeList = require('./employeeList');

var employeeList = _interopRequireWildcard(_employeeList);

employee.init($('#form-add-employee'), $('#employee-list'));
employeeList.get($('#employee-list'));

},{"./employee":3,"./employeeList":4}],2:[function(require,module,exports){
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
exports.init = init;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _CommonLogger = require('./Common/logger');

var logger = _interopRequireWildcard(_CommonLogger);

var _employeeList = require('./employeeList');

var employeeList = _interopRequireWildcard(_employeeList);

var $theForm, $theListContainer;
function postAdd(data) {
    return $.ajax({
        url: '/api/employees',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: JSON.stringify(data),
        method: 'POST'
    });
}

function add(e) {
    e.preventDefault();
    var employee = {};
    employee.firstName = $('#firstname').val();
    employee.lastname = $('#lastname').val();
    employee.dependentCount = parseInt($('#dependents').val());
    if ($('#spouse:checked').size() > 0) {
        employee.dependentCount++;
    }
    return postAdd(employee).then(function () {
        $theForm[0].reset();
        employeeList.get($theListContainer);
    });
}

function init($form, $container) {
    $theForm = $form;
    $theListContainer = $container;
    $form.on('submit', add);
}

},{"./Common/logger":2,"./employeeList":4}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.get = get;

function get($container) {
    return $.ajax({
        url: '/employees',
        contentType: 'text/html; charset=utf-8',
        method: 'GET'
    }).then(function (data) {
        $container.html(data);
    });
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJEOi9EZXZlbG9wbWVudC9QbGF5L3BheWxvY2l0eS1jb2RpbmctcXVlc3Rpb24vUGF5cm9sbC5XZWIvU2NyaXB0cy9TcmMvbWFpbi5qcyIsIkQ6L0RldmVsb3BtZW50L1BsYXkvcGF5bG9jaXR5LWNvZGluZy1xdWVzdGlvbi9QYXlyb2xsLldlYi9TY3JpcHRzL1NyYy9Db21tb24vbG9nZ2VyLmpzIiwiRDovRGV2ZWxvcG1lbnQvUGxheS9wYXlsb2NpdHktY29kaW5nLXF1ZXN0aW9uL1BheXJvbGwuV2ViL1NjcmlwdHMvU3JjL2VtcGxveWVlLmpzIiwiRDovRGV2ZWxvcG1lbnQvUGxheS9wYXlsb2NpdHktY29kaW5nLXF1ZXN0aW9uL1BheXJvbGwuV2ViL1NjcmlwdHMvU3JjL2VtcGxveWVlTGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7d0JDQTJCLFlBQVk7O0lBQTFCLFFBQVE7OzRCQUNTLGdCQUFnQjs7SUFBbEMsWUFBWTs7QUFFeEIsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0FBQzVELFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7UUNKckIsR0FBRyxHQUFILEdBQUc7O0FBQVosU0FBUyxHQUFHLENBQUMsT0FBTyxFQUFFO0FBQzFCLFNBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztDQUNsQjs7Ozs7Ozs7UUM0Qm1CLElBQUksR0FBSixJQUFJOzs7OzRCQTlCQyxpQkFBaUI7O0lBQTdCLE1BQU07OzRCQUNXLGdCQUFnQjs7SUFBbEMsWUFBWTs7QUFFeEIsSUFBSSxRQUFRLEVBQUUsaUJBQWlCLENBQUM7QUFDN0IsU0FBUyxPQUFPLENBQUMsSUFBSSxFQUFFO0FBQ2xCLFdBQU8sQ0FBQyxDQUFDLElBQUksQ0FBQztBQUNWLFdBQUcsRUFBRSxnQkFBZ0I7QUFDckIsbUJBQVcsRUFBRSxpQ0FBaUM7QUFDOUMsZ0JBQVEsRUFBRSxNQUFNO0FBQ2hCLFlBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztBQUMxQixjQUFNLEVBQUUsTUFBTTtLQUNqQixDQUFDLENBQUM7Q0FDTjs7QUFFRixTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUU7QUFDWixLQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDbEIsUUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQ2xCLFlBQVEsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQzNDLFlBQVEsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ3pDLFlBQVEsQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQzNELFFBQUksQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFO0FBQ2pDLGdCQUFRLENBQUMsY0FBYyxFQUFFLENBQUM7S0FDN0I7QUFDRCxXQUFPLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBVztBQUNyQyxnQkFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ3BCLG9CQUFZLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7S0FDdkMsQ0FBQyxDQUFDO0NBRU47O0FBRU0sU0FBUyxJQUFJLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRTtBQUNwQyxZQUFRLEdBQUcsS0FBSyxDQUFDO0FBQ2pCLHFCQUFpQixHQUFHLFVBQVUsQ0FBQztBQUMvQixTQUFLLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztDQUMzQjs7Ozs7Ozs7UUNsQ1ksR0FBRyxHQUFILEdBQUc7O0FBQVosU0FBUyxHQUFHLENBQUMsVUFBVSxFQUFFO0FBQzdCLFdBQU8sQ0FBQyxDQUFDLElBQUksQ0FBQztBQUNWLFdBQUcsRUFBRSxZQUFZO0FBQ2pCLG1CQUFXLEVBQUUsMEJBQTBCO0FBQ3ZDLGNBQU0sRUFBRSxLQUFLO0tBQ2hCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJLEVBQUU7QUFDbkIsa0JBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDekIsQ0FBQyxDQUFDO0NBQ04iLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwi77u/aW1wb3J0ICogYXMgZW1wbG95ZWUgZnJvbSAnLi9lbXBsb3llZSc7XHJcbmltcG9ydCAqIGFzIGVtcGxveWVlTGlzdCBmcm9tICcuL2VtcGxveWVlTGlzdCc7XHJcblxyXG5lbXBsb3llZS5pbml0KCQoXCIjZm9ybS1hZGQtZW1wbG95ZWVcIiksICQoXCIjZW1wbG95ZWUtbGlzdFwiKSk7XHJcbmVtcGxveWVlTGlzdC5nZXQoJChcIiNlbXBsb3llZS1saXN0XCIpKTtcclxuIiwi77u/ZXhwb3J0IGZ1bmN0aW9uIGxvZyhtZXNzYWdlKSB7XHJcbiAgICBhbGVydChtZXNzYWdlKTtcclxufSIsIu+7v2ltcG9ydCAqIGFzIGxvZ2dlciBmcm9tICcuL0NvbW1vbi9sb2dnZXInO1xyXG5pbXBvcnQgKiBhcyBlbXBsb3llZUxpc3QgZnJvbSAnLi9lbXBsb3llZUxpc3QnO1xyXG5cclxudmFyICR0aGVGb3JtLCAkdGhlTGlzdENvbnRhaW5lcjtcclxuICAgZnVuY3Rpb24gcG9zdEFkZChkYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogJy9hcGkvZW1wbG95ZWVzJyxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgZnVuY3Rpb24gYWRkKGUpIHtcclxuICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgZW1wbG95ZWUgPSB7fTtcclxuICAgICAgICBlbXBsb3llZS5maXJzdE5hbWUgPSAkKFwiI2ZpcnN0bmFtZVwiKS52YWwoKTtcclxuICAgICAgICBlbXBsb3llZS5sYXN0bmFtZSA9ICQoXCIjbGFzdG5hbWVcIikudmFsKCk7XHJcbiAgICAgICAgZW1wbG95ZWUuZGVwZW5kZW50Q291bnQgPSBwYXJzZUludCgkKFwiI2RlcGVuZGVudHNcIikudmFsKCkpO1xyXG4gICAgICAgIGlmICgkKFwiI3Nwb3VzZTpjaGVja2VkXCIpLnNpemUoKSA+IDApIHtcclxuICAgICAgICAgICAgZW1wbG95ZWUuZGVwZW5kZW50Q291bnQrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBvc3RBZGQoZW1wbG95ZWUpLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICR0aGVGb3JtWzBdLnJlc2V0KCk7XHJcbiAgICAgICAgICAgIGVtcGxveWVlTGlzdC5nZXQoJHRoZUxpc3RDb250YWluZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGluaXQoJGZvcm0sICRjb250YWluZXIpIHtcclxuICAgICAgICAkdGhlRm9ybSA9ICRmb3JtO1xyXG4gICAgICAgICR0aGVMaXN0Q29udGFpbmVyID0gJGNvbnRhaW5lcjtcclxuICAgICAgICAkZm9ybS5vbihcInN1Ym1pdFwiLCBhZGQpO1xyXG4gICAgfVxyXG5cclxuIiwi77u/ZXhwb3J0IGZ1bmN0aW9uIGdldCgkY29udGFpbmVyKSB7XHJcbiAgICByZXR1cm4gJC5hamF4KHtcclxuICAgICAgICB1cmw6ICcvZW1wbG95ZWVzJyxcclxuICAgICAgICBjb250ZW50VHlwZTogXCJ0ZXh0L2h0bWw7IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICBtZXRob2Q6ICdHRVQnXHJcbiAgICB9KS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAkY29udGFpbmVyLmh0bWwoZGF0YSk7XHJcbiAgICB9KTtcclxufSJdfQ==
