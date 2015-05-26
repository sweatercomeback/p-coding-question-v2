using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Payroll.Repository.Entities
{
    public class PayrollContext : DbContext
    {
        public DbSet<Employee> Employees { get; set; }
    }
}
