USE [Calificaciones]
GO
/****** Object:  Table [dbo].[Alumno]    Script Date: 18/07/2023 08:10:59 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Alumno](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Identificador] [nvarchar](10) NOT NULL,
	[Nombre] [nvarchar](50) NOT NULL,
	[Apellidos] [nvarchar](50) NOT NULL,
	[Calif_Matematicas] [float] NULL,
	[Calif_Programacion] [float] NULL,
	[Calif_Redes] [float] NULL,
	[Calif_Software] [float] NULL,
 CONSTRAINT [PK_Alumno] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Alumno] ON 

INSERT [dbo].[Alumno] ([Id], [Identificador], [Nombre], [Apellidos], [Calif_Matematicas], [Calif_Programacion], [Calif_Redes], [Calif_Software]) VALUES (2, N'IECA-001', N'Jorge', N'Aguado', 9.8, 9.5, 8.5, 8.2)
INSERT [dbo].[Alumno] ([Id], [Identificador], [Nombre], [Apellidos], [Calif_Matematicas], [Calif_Programacion], [Calif_Redes], [Calif_Software]) VALUES (3, N'IECA-002', N'Juan', N'Perez', 8.5, 7.7, 5.9, 8.3)
INSERT [dbo].[Alumno] ([Id], [Identificador], [Nombre], [Apellidos], [Calif_Matematicas], [Calif_Programacion], [Calif_Redes], [Calif_Software]) VALUES (4, N'IECA-003', N'Ana', N'Gutierrez', 10, 10, 9.3, 9.7)
INSERT [dbo].[Alumno] ([Id], [Identificador], [Nombre], [Apellidos], [Calif_Matematicas], [Calif_Programacion], [Calif_Redes], [Calif_Software]) VALUES (5, N'IECA-004', N'Juan Carlos', N'Hernandez', 7.5, 8.8, 10, 5.8)
INSERT [dbo].[Alumno] ([Id], [Identificador], [Nombre], [Apellidos], [Calif_Matematicas], [Calif_Programacion], [Calif_Redes], [Calif_Software]) VALUES (6, N'IECA-005', N'Itzel', N'Escalante', 8.9, 8.2, 9, 8)
INSERT [dbo].[Alumno] ([Id], [Identificador], [Nombre], [Apellidos], [Calif_Matematicas], [Calif_Programacion], [Calif_Redes], [Calif_Software]) VALUES (7, N'IECA-006', N'Luis Pedro', N'Bueno Perez', 8.4, 8.2, 9.5, 9.1)
INSERT [dbo].[Alumno] ([Id], [Identificador], [Nombre], [Apellidos], [Calif_Matematicas], [Calif_Programacion], [Calif_Redes], [Calif_Software]) VALUES (1002, N'IECA-007', N'Albertoooo', N'Aguilar', 8.4, 7.1, 6.3, 8)
INSERT [dbo].[Alumno] ([Id], [Identificador], [Nombre], [Apellidos], [Calif_Matematicas], [Calif_Programacion], [Calif_Redes], [Calif_Software]) VALUES (1004, N'IECA-008', N'Julia', N'Sanchez', 9, 8, 7, 8)
SET IDENTITY_INSERT [dbo].[Alumno] OFF
GO
