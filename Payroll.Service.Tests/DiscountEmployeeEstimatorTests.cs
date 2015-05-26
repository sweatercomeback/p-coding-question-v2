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
    public class DiscountEmployeeEstimatorTests
    {
        [Test]
        public void Totals1000_NoDependents()
        {
            var discount = 1000*.90;
            var employee = new Employee()
            {
                DependentCount = 0
            };
            var estimator = new DiscountEmployeeEstimator(employee);
            Assert.AreEqual(discount, estimator.YearlyCost);
        }
    }
}
