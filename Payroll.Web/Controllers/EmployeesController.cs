using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Payroll.Service;

namespace Payroll.Web.Controllers
{
    
    public class EmployeesController : Controller
    {
        private EmployeeService _employeeService = new EmployeeService();
        // GET: Employees
        public ActionResult Index()
        {
            var employees =  _employeeService.GetEmployees();
            return View(employees);
        }
    }
}