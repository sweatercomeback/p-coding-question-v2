using System.Collections.Generic;
using System.Linq;

namespace Payroll.Core.Entities
{
    public class Employee
    {
        public string Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int DependentCount { get; set; }  
    }
}
