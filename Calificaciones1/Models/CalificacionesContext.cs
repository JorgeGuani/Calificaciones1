using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Calificaciones1.Models;

public partial class CalificacionesContext : DbContext
{
    public CalificacionesContext()
    {
    }

    public CalificacionesContext(DbContextOptions<CalificacionesContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Alumno> Alumnos { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=(localdb)\\MSSQLLocalDB; DataBase=Calificaciones; Integrated Security=true");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Alumno>(entity =>
        {
            entity.ToTable("Alumno");

            entity.Property(e => e.Apellidos).HasMaxLength(50);
            entity.Property(e => e.CalifMatematicas).HasColumnName("Calif_Matematicas");
            entity.Property(e => e.CalifProgramacion).HasColumnName("Calif_Programacion");
            entity.Property(e => e.CalifRedes).HasColumnName("Calif_Redes");
            entity.Property(e => e.CalifSoftware).HasColumnName("Calif_Software");
            entity.Property(e => e.Identificador).HasMaxLength(10);
            entity.Property(e => e.Nombre).HasMaxLength(50);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
