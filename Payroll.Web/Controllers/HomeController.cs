using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Payroll.Web.Controllers
{
    public class HomeController : Controller
    {
        // GET: ome
        public ActionResult Index()
        {
            return View();
        }
    }
}