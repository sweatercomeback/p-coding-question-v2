(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _employee = require('./employee');

var employee = _interopRequireWildcard(_employee);

var _employeeList = require('./employeeList');

var employeeList = _interopRequireWildcard(_employeeList);

var _estimator = require('./estimator');

var estimator = _interopRequireWildcard(_estimator);

employee.init($('#form-add-employee'), $('#employee-list'), $('#estimator-container'));

},{"./employee":3,"./employeeList":4,"./estimator":5}],2:[function(require,module,exports){
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

var _estimator = require('./estimator');

var estimator = _interopRequireWildcard(_estimator);

var $theForm, $theListContainer, $theEstimatorContainer;
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
        estimator.get($theEstimatorContainer);
    });
}

function init($form, $container, $estimator) {
    $theForm = $form;
    $theListContainer = $container;
    $theEstimatorContainer = $estimator;

    $form.on('submit', add);

    employeeList.get($theListContainer);
    estimator.get($theEstimatorContainer);
}

},{"./Common/logger":2,"./employeeList":4,"./estimator":5}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.get = get;

function get($container) {
    return $.ajax({
        url: '/estimator',
        contentType: 'text/html; charset=utf-8',
        method: 'GET'
    }).then(function (data) {
        $container.html(data);
    });
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJEOi9EZXZlbG9wbWVudC9QbGF5L3BheWxvY2l0eS1jb2RpbmctcXVlc3Rpb24vUGF5cm9sbC5XZWIvU2NyaXB0cy9TcmMvbWFpbi5qcyIsIkQ6L0RldmVsb3BtZW50L1BsYXkvcGF5bG9jaXR5LWNvZGluZy1xdWVzdGlvbi9QYXlyb2xsLldlYi9TY3JpcHRzL1NyYy9Db21tb24vbG9nZ2VyLmpzIiwiRDovRGV2ZWxvcG1lbnQvUGxheS9wYXlsb2NpdHktY29kaW5nLXF1ZXN0aW9uL1BheXJvbGwuV2ViL1NjcmlwdHMvU3JjL2VtcGxveWVlLmpzIiwiRDovRGV2ZWxvcG1lbnQvUGxheS9wYXlsb2NpdHktY29kaW5nLXF1ZXN0aW9uL1BheXJvbGwuV2ViL1NjcmlwdHMvU3JjL2VtcGxveWVlTGlzdC5qcyIsIkQ6L0RldmVsb3BtZW50L1BsYXkvcGF5bG9jaXR5LWNvZGluZy1xdWVzdGlvbi9QYXlyb2xsLldlYi9TY3JpcHRzL1NyYy9lc3RpbWF0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O3dCQ0EyQixZQUFZOztJQUExQixRQUFROzs0QkFDUyxnQkFBZ0I7O0lBQWxDLFlBQVk7O3lCQUNHLGFBQWE7O0lBQTVCLFNBQVM7O0FBRXJCLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLEVBQUUsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7UUNKdEUsR0FBRyxHQUFILEdBQUc7O0FBQVosU0FBUyxHQUFHLENBQUMsT0FBTyxFQUFFO0FBQzFCLFNBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztDQUNsQjs7Ozs7Ozs7UUM4Qm1CLElBQUksR0FBSixJQUFJOzs7OzRCQWhDQyxpQkFBaUI7O0lBQTdCLE1BQU07OzRCQUNXLGdCQUFnQjs7SUFBbEMsWUFBWTs7eUJBQ0csYUFBYTs7SUFBNUIsU0FBUzs7QUFFckIsSUFBSSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsc0JBQXNCLENBQUM7QUFDckQsU0FBUyxPQUFPLENBQUMsSUFBSSxFQUFFO0FBQ2xCLFdBQU8sQ0FBQyxDQUFDLElBQUksQ0FBQztBQUNWLFdBQUcsRUFBRSxnQkFBZ0I7QUFDckIsbUJBQVcsRUFBRSxpQ0FBaUM7QUFDOUMsZ0JBQVEsRUFBRSxNQUFNO0FBQ2hCLFlBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztBQUMxQixjQUFNLEVBQUUsTUFBTTtLQUNqQixDQUFDLENBQUM7Q0FDTjs7QUFFRixTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUU7QUFDWixLQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDbEIsUUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQ2xCLFlBQVEsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQzNDLFlBQVEsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ3pDLFlBQVEsQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQzNELFFBQUksQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFO0FBQ2pDLGdCQUFRLENBQUMsY0FBYyxFQUFFLENBQUM7S0FDN0I7QUFDRCxXQUFPLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBVztBQUNyQyxnQkFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ3BCLG9CQUFZLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDcEMsaUJBQVMsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztLQUN6QyxDQUFDLENBQUM7Q0FFTjs7QUFFTSxTQUFTLElBQUksQ0FBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRTtBQUNoRCxZQUFRLEdBQUcsS0FBSyxDQUFDO0FBQ2pCLHFCQUFpQixHQUFHLFVBQVUsQ0FBQztBQUMvQiwwQkFBc0IsR0FBRyxVQUFVLENBQUM7O0FBRXBDLFNBQUssQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDOztBQUV4QixnQkFBWSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ3BDLGFBQVMsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztDQUN6Qzs7Ozs7Ozs7UUN6Q1ksR0FBRyxHQUFILEdBQUc7O0FBQVosU0FBUyxHQUFHLENBQUMsVUFBVSxFQUFFO0FBQzdCLFdBQU8sQ0FBQyxDQUFDLElBQUksQ0FBQztBQUNWLFdBQUcsRUFBRSxZQUFZO0FBQ2pCLG1CQUFXLEVBQUUsMEJBQTBCO0FBQ3ZDLGNBQU0sRUFBRSxLQUFLO0tBQ2hCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJLEVBQUU7QUFDbkIsa0JBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDekIsQ0FBQyxDQUFDO0NBQ047Ozs7Ozs7O1FDUmdCLEdBQUcsR0FBSCxHQUFHOztBQUFaLFNBQVMsR0FBRyxDQUFDLFVBQVUsRUFBRTtBQUM3QixXQUFPLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDVixXQUFHLEVBQUUsWUFBWTtBQUNqQixtQkFBVyxFQUFFLDBCQUEwQjtBQUN2QyxjQUFNLEVBQUUsS0FBSztLQUNoQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSSxFQUFFO0FBQ25CLGtCQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3pCLENBQUMsQ0FBQztDQUNOIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIu+7v2ltcG9ydCAqIGFzIGVtcGxveWVlIGZyb20gJy4vZW1wbG95ZWUnO1xyXG5pbXBvcnQgKiBhcyBlbXBsb3llZUxpc3QgZnJvbSAnLi9lbXBsb3llZUxpc3QnO1xyXG5pbXBvcnQgKiBhcyBlc3RpbWF0b3IgZnJvbSAnLi9lc3RpbWF0b3InO1xyXG5cclxuZW1wbG95ZWUuaW5pdCgkKFwiI2Zvcm0tYWRkLWVtcGxveWVlXCIpLCAkKFwiI2VtcGxveWVlLWxpc3RcIiksICQoXCIjZXN0aW1hdG9yLWNvbnRhaW5lclwiKSk7XHJcbiIsIu+7v2V4cG9ydCBmdW5jdGlvbiBsb2cobWVzc2FnZSkge1xyXG4gICAgYWxlcnQobWVzc2FnZSk7XHJcbn0iLCLvu79pbXBvcnQgKiBhcyBsb2dnZXIgZnJvbSAnLi9Db21tb24vbG9nZ2VyJztcclxuaW1wb3J0ICogYXMgZW1wbG95ZWVMaXN0IGZyb20gJy4vZW1wbG95ZWVMaXN0JztcclxuaW1wb3J0ICogYXMgZXN0aW1hdG9yIGZyb20gJy4vZXN0aW1hdG9yJztcclxuXHJcbnZhciAkdGhlRm9ybSwgJHRoZUxpc3RDb250YWluZXIsICR0aGVFc3RpbWF0b3JDb250YWluZXI7XHJcbiAgIGZ1bmN0aW9uIHBvc3RBZGQoZGF0YSkge1xyXG4gICAgICAgIHJldHVybiAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6ICcvYXBpL2VtcGxveWVlcycsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCdcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgIGZ1bmN0aW9uIGFkZChlKSB7XHJcbiAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIGVtcGxveWVlID0ge307XHJcbiAgICAgICAgZW1wbG95ZWUuZmlyc3ROYW1lID0gJChcIiNmaXJzdG5hbWVcIikudmFsKCk7XHJcbiAgICAgICAgZW1wbG95ZWUubGFzdG5hbWUgPSAkKFwiI2xhc3RuYW1lXCIpLnZhbCgpO1xyXG4gICAgICAgIGVtcGxveWVlLmRlcGVuZGVudENvdW50ID0gcGFyc2VJbnQoJChcIiNkZXBlbmRlbnRzXCIpLnZhbCgpKTtcclxuICAgICAgICBpZiAoJChcIiNzcG91c2U6Y2hlY2tlZFwiKS5zaXplKCkgPiAwKSB7XHJcbiAgICAgICAgICAgIGVtcGxveWVlLmRlcGVuZGVudENvdW50Kys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwb3N0QWRkKGVtcGxveWVlKS50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkdGhlRm9ybVswXS5yZXNldCgpO1xyXG4gICAgICAgICAgICBlbXBsb3llZUxpc3QuZ2V0KCR0aGVMaXN0Q29udGFpbmVyKTtcclxuICAgICAgICAgICAgZXN0aW1hdG9yLmdldCgkdGhlRXN0aW1hdG9yQ29udGFpbmVyKTtcclxuICAgICAgICB9KTtcclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBpbml0KCRmb3JtLCAkY29udGFpbmVyLCAkZXN0aW1hdG9yKSB7XHJcbiAgICAgICAgJHRoZUZvcm0gPSAkZm9ybTtcclxuICAgICAgICAkdGhlTGlzdENvbnRhaW5lciA9ICRjb250YWluZXI7XHJcbiAgICAgICAgJHRoZUVzdGltYXRvckNvbnRhaW5lciA9ICRlc3RpbWF0b3I7XHJcblxyXG4gICAgICAgICRmb3JtLm9uKFwic3VibWl0XCIsIGFkZCk7XHJcblxyXG4gICAgICAgIGVtcGxveWVlTGlzdC5nZXQoJHRoZUxpc3RDb250YWluZXIpO1xyXG4gICAgICAgIGVzdGltYXRvci5nZXQoJHRoZUVzdGltYXRvckNvbnRhaW5lcik7XHJcbiAgICB9XHJcblxyXG4iLCLvu79leHBvcnQgZnVuY3Rpb24gZ2V0KCRjb250YWluZXIpIHtcclxuICAgIHJldHVybiAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJy9lbXBsb3llZXMnLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBcInRleHQvaHRtbDsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgIG1ldGhvZDogJ0dFVCdcclxuICAgIH0pLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICRjb250YWluZXIuaHRtbChkYXRhKTtcclxuICAgIH0pO1xyXG59Iiwi77u/ZXhwb3J0IGZ1bmN0aW9uIGdldCgkY29udGFpbmVyKSB7XHJcbiAgICByZXR1cm4gJC5hamF4KHtcclxuICAgICAgICB1cmw6ICcvZXN0aW1hdG9yJyxcclxuICAgICAgICBjb250ZW50VHlwZTogXCJ0ZXh0L2h0bWw7IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICBtZXRob2Q6ICdHRVQnXHJcbiAgICB9KS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAkY29udGFpbmVyLmh0bWwoZGF0YSk7XHJcbiAgICB9KTtcclxufSJdfQ==
