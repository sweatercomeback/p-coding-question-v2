using System.Web.Mvc;
using Payroll.Service;

namespace Payroll.Web.Controllers
{
    public class EstimatorController : Controller
    {
        private EmployeeService _employeeService = new EmployeeService();
        // GET: api/Estimator
        public ActionResult Index()
        {
            var employees = _employeeService.GetEmployees();
            var model = new CostEstimator(employees);
            return View(model);
        }

    }
}
