import * as employee from './employee';
import * as employeeList from './employeeList';

employee.init($("#form-add-employee"), $("#employee-list"));
employeeList.get($("#employee-list"));
