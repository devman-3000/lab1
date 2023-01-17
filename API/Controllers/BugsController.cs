using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace API.Controllers
{
    public class BugsController : BaseApiController
    {
        [HttpGet("not-found")]
        public ActionResult GetNotFound() {
           return NotFound(); 
        }

        [HttpGet("bad-request")]
        public ActionResult GetBadRequest() {
           return BadRequest(new ProblemDetails{Title = "Bad Request"}); 
        }

        [HttpGet("unauthorized")]
        public ActionResult GetUnathorized() {
           return Unauthorized(); 
        }

        [HttpGet("validation-error")]
        public ActionResult GetValidationError() {
            return ValidationProblem();
        }

        [HttpGet("server-error")]
        public ActionResult GetServerError() {
           throw new Exception("Server error"); 
        }
    }
}