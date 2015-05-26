import * as employee from './employee';
import * as employeeList from './employeeList';
import * as estimator from './estimator';

employee.init($("#form-add-employee"), $("#employee-list"), $("#estimator-container"));
