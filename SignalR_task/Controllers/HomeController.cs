using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using SignalRSample.Data;
using SignalRSample.Models;
using SignalRSample.Models.ViewModel;
using System.Diagnostics;
using System.Security.Claims;

namespace SignalRSample.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
   
      
        private readonly ApplicationDbContext _context;
        public HomeController(ILogger<HomeController> logger,
   
           
            ApplicationDbContext context)
        {
            _logger = logger;
              
            _context = context;
           
        }

        public IActionResult Index()
        {
            return View();
        
        }
        [Authorize]
     
      
        public IActionResult BasicChat()
        {
            return View();
        }
      

      
        public IActionResult HarryPotterHouse()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }


       

    }
}