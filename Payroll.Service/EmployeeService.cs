using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Payroll.Core.Entities;

namespace Payroll.Service
{
    public class EmployeeService
    {
        private List<Employee> employees = new List<Employee>(); 

        public List<Employee> GetEmployees()
        {
            return employees;
        }

        public void AddEmployee(Employee employee)
        {
            employees.Add(employee);
        }
    }
}
