import * as logger from './Common/logger';

   function postAdd(data) {
        return $.ajax({
            url: '/api/employees',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: data,
            method: 'POST'
        });
    }

    function add(e) {
        var employee = {};
        employee.firstName = $("#firstname").val();
        employee.lastname = $("#lastname").val();
        employee.dependents = parseInt($("#dependents").val());
        if ($("#spouse:checked").size() > 0) {
            employee.dependents++;
        }
        postAdd(employee).then(function(){
            logger.log("success");
        });
        e.preventDefault();
        return false;
    }

    export function get() {
        return $.ajax({
            url: '/employees',
            contentType: "text/html; charset=utf-8",
            method: 'GET'
        });
    }

    export function init($form) {

        $form.on("submit", add);

    }

