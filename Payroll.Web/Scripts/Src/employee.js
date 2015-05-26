import * as logger from './Common/logger';
import * as employeeList from './employeeList';
import * as estimator from './estimator';

var $theForm, $theListContainer, $theEstimatorContainer;
   function postAdd(data) {
        return $.ajax({
            url: '/api/employees',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: JSON.stringify(data),
            method: 'POST'
        });
    }

   function add(e) {
       e.preventDefault();
        var employee = {};
        employee.firstName = $("#firstname").val();
        employee.lastname = $("#lastname").val();
        employee.dependentCount = parseInt($("#dependents").val());
        if ($("#spouse:checked").size() > 0) {
            employee.dependentCount++;
        }
        return postAdd(employee).then(function() {
            $theForm[0].reset();
            employeeList.get($theListContainer);
            estimator.get($theEstimatorContainer);
        });
       
    }

    export function init($form, $container, $estimator) {
        $theForm = $form;
        $theListContainer = $container;
        $theEstimatorContainer = $estimator;

        $form.on("submit", add);

        employeeList.get($theListContainer);
        estimator.get($theEstimatorContainer);
    }

