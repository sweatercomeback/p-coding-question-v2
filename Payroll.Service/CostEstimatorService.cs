using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Payroll.Core.Entities;

namespace Payroll.Service
{
    public class CostEstimator
    {
        protected List<Employee> _employees;
        protected List<EmployeeEstimatorBase> _estimators;
        public CostEstimator(IEnumerable<Employee> employees)
        {
            _employees = employees.ToList();
        }

        protected virtual List<EmployeeEstimatorBase> Estimators {
            get
            {
                if (_estimators != null)
                {
                    return _estimators;
                }

                _estimators = new List<EmployeeEstimatorBase>();
                foreach (var e in _employees)
                {
                    if (e.FirstName.StartsWith("a", true, CultureInfo.CurrentCulture))
                    {
                        _estimators.Add(new DiscountEmployeeEstimator(e));
                    }
                    else
                    {
                        _estimators.Add(new EmployeeEstimator(e));
                    }
                }
                return _estimators;
            }
        }

        public decimal YearlyTotalCost
        {
            get {
                return Estimators.Select(e => e.YearlyCost).Sum();
            }
        }
    }
}
