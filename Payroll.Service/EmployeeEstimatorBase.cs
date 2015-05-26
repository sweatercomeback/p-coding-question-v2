using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Payroll.Core.Entities;

namespace Payroll.Service
{
    public class EmployeeEstimatorBase
    {
        protected Employee _employee;
        protected const decimal Cost = 1000m;
        protected const decimal Dependent = 500m;

        public EmployeeEstimatorBase(Employee employee)
        {
            _employee = employee;
        }

        public string DisplayName
        {
            get { return string.Format("{0}, {1}", _employee.LastName, _employee.FirstName); }
        }

        public decimal YearlyCost
        {
            get
            {
                return DependentCost + EmployeeCost;
            }
        }

        public virtual decimal EmployeeCost
        {
            get
            {
                return _employee == null ? 0 : Cost;
            }
        }

        public virtual decimal DependentCost
        {
            get
            {
                if (_employee == null)
                {
                    return 0;
                }
                return _employee.DependentCount * Dependent;
            }
        }
    }

    public class EmployeeEstimator : EmployeeEstimatorBase
    {
        public EmployeeEstimator(Employee employee)
            : base(employee)
        {

        }
    }

    public class DiscountEmployeeEstimator : EmployeeEstimatorBase
    {

        private const decimal Discount = 0.1m;

        public DiscountEmployeeEstimator(Employee employee)
            : base(employee)
        {

        }

        public override decimal EmployeeCost
        {
            get
            {
                return _employee == null ? 0 : Cost - (Cost * Discount);
            }
        }

        public override decimal DependentCost
        {
            get
            {
                if (_employee == null)
                {
                    return 0;
                }
                return _employee.DependentCount * 500;
            }
        }
    }
}
