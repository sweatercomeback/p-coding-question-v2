using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnit.Framework;
using Payroll.Core.Entities;

namespace Payroll.Service.Tests
{
    [TestFixture]
    public class EmployeeEstimatorTests
    {
        [Test]
        public void Totals1000_NoDependents()
        {
            var employee = new Employee()
            {
                DependentCount = 0
            };
            var estimator = new EmployeeEstimator(employee);
            Assert.AreEqual(1000, estimator.YearlyCost);
        }

        [Test]
        public void Totals1500_OneDependent()
        {
            var employee = new Employee()
            {
                DependentCount = 1
            };
            var estimator = new EmployeeEstimator(employee);
            Assert.AreEqual(1500, estimator.YearlyCost);
        }

        [Test]
        public void Totals0_EmployeeNull()
        {
            Employee employee = null;
            var estimator = new EmployeeEstimator(employee);
            Assert.AreEqual(0, estimator.YearlyCost);
        }
    }
}
