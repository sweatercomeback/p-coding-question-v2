using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Payroll.Core.Entities;
using Payroll.Service;

namespace Payroll.Web.Controllers.Api
{
    public class EmployeesController : ApiController
    {
        private EmployeeService _employeeService = new EmployeeService();
        // GET: api/Employees
        public IEnumerable<Employee> Get()
        {
            return _employeeService.GetEmployees();
        }
        
        // POST: api/Employees
        public void Post([FromBody]Employee value)
        {
            _employeeService.AddEmployee(value);
        }

        // DELETE: api/Employees/5
        public void Delete(int id)
        {
        }
    }
}
