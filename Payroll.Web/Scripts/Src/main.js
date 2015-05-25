import * as employee from './employee';

employee.init($("#form-add-employee"));

employee.get().then(function(data){
    $("#employee-list").html(data);
});