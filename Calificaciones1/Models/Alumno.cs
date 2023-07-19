using System;
using System.Collections.Generic;

namespace Calificaciones1.Models;

public partial class Alumno
{
    public int Id { get; set; }

    public string Identificador { get; set; } = null!;

    public string Nombre { get; set; } = null!;

    public string Apellidos { get; set; } = null!;

    public double? CalifMatematicas { get; set; }

    public double? CalifProgramacion { get; set; }

    public double? CalifRedes { get; set; }

    public double? CalifSoftware { get; set; }
}
