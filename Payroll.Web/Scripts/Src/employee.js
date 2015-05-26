import * as logger from './Common/logger';
import * as employeeList from './employeeList';

var $theForm, $theListContainer;
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
        });
       
    }

    export function init($form, $container) {
        $theForm = $form;
        $theListContainer = $container;
        $form.on("submit", add);
    }

