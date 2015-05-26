using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Payroll.Core.Entities;
using Payroll.Core.Interfaces;
using Payroll.Repository;

namespace Payroll.Service
{
    public class EmployeeService
    {
        private List<Employee> employees = new List<Employee>();
        private IPayrollRepository<Employee> _repository = new EmployeeRepository();

        public List<Employee> GetEmployees()
        {
            return _repository.GetAll().ToList();
        }

        public void AddEmployee(Employee employee)
        {
            _repository.Add(employee);
        }
    }
}
