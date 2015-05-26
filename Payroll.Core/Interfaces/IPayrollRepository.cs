using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace Payroll.Core.Interfaces
{
    public interface IPayrollRepository<T>
    {
        IEnumerable<T> GetAll();
        void Add(T obj);
    }
}
