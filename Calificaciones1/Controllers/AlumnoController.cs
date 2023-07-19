using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Calificaciones1.Models;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics.Contracts;

namespace Calificaciones1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AlumnoController : ControllerBase
    {
        private readonly CalificacionesContext _dbcontext;

        public AlumnoController(CalificacionesContext context)
        {
            _dbcontext = context;
        }

        [HttpGet]
        [Route("ObtenerAlumno")]
        public async Task<ActionResult<IEnumerable<Alumno>>> ObtenerAlumno()
        {
            List<Alumno> lista = _dbcontext.Alumnos.ToList();
            return await _dbcontext.Alumnos.ToListAsync();
        }

        [HttpGet]
        [Route("ObtenerAlumnoPorIdentificador/{identificador}")]
        public async Task<ActionResult<Alumno>> ObtenerAlumnoPorIdentificador(string identificador)
        {
            if (_dbcontext.Alumnos == null)
            {
                return NotFound();
            }
            var alumno = await _dbcontext.Alumnos.Where(alumno => alumno.Identificador == identificador).FirstAsync();

            if (alumno == null)
            {
                return NotFound();
            }

            return alumno;
        }

        [HttpPost]
        [Route("Guardar")]
        public async Task<IActionResult> Guardar([FromBody] Alumno request)
        {
            await _dbcontext.Alumnos.AddAsync(request);
            await _dbcontext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }

        [HttpPut]
        [Route("Editar")]
        public async Task<IActionResult> Editar([FromBody] Alumno request)
        {
            _dbcontext.Alumnos.Update(request);
            await _dbcontext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }

        [HttpDelete]
        [Route("Eliminar/{id:int}")]
        public async Task<IActionResult> Eliminar(int id)
        {
            Alumno alumno = _dbcontext.Alumnos.Find(id)!;

            if (alumno == null) {
                return NotFound();
            }
            _dbcontext.Alumnos.Remove(alumno);
            await _dbcontext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }
    }
}
