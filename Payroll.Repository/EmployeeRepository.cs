using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using AutoMapper;
using Payroll.Core.Interfaces;
using Payroll.Repository.Entities;
using Employee = Payroll.Core.Entities.Employee;

[assembly: PreApplicationStartMethod(typeof(Payroll.Repository.Startup), "Start")]
namespace Payroll.Repository
{
  
    public class Startup
    {
        public static void Start()
        {
            Mapper.CreateMap<Entities.Employee, Core.Entities.Employee>().ReverseMap();
           // Database.SetInitializer<PayrollContext>(null);
        }
    }
        
    public class EmployeeRepository : IPayrollRepository<Employee>
    {
        public IEnumerable<Employee> GetAll()
        {
            var employees = new List<Employee>();
            using (var context = new PayrollContext())
            {
                try
                {
                    var emps = (from e in context.Employees select e);
                    employees = Mapper.Map<List<Employee>>(emps);
                }
                catch (Exception ex)
                {
                    //TODO: Log It/Throw Something
                    employees = new List<Employee>();
                }
            }
            return employees;
        }

        public void Add(Employee obj)
        {
            using (var context = new PayrollContext())
            {
                var employee = Mapper.Map<Entities.Employee>(obj);
                context.Employees.Add(employee);
                context.SaveChanges();
            }
        }
    }
}
