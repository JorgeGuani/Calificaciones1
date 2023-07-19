import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react"
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, ModalFooter, Button } from "reactstrap"

const App = () => {

    const modeloAlumno = {
        id: 0,
        nombre: "",
        apellidos: "",
        identificador: "",
        califMatematicas: 0,
        califProgramacion: 0,
        califRedes: 0,
        califSoftware: 0
    }

    const [alumnos, setAlumnos] = useState([]);

    const mostrarAlumnos = async () => {
        const currentUrl = window.location.pathname;
        let response = '';

        if (currentUrl == '/list' || currentUrl == '/list/') {
            response = await fetch("api/alumno/ObtenerAlumno");

            if (response.ok) {
                const data = await response.json();
                setAlumnos(data);
            }
        } else {
            const id = currentUrl.substring(currentUrl.lastIndexOf('/'), currentUrl.length);
            document.getElementById("title").innerHTML = 'Alumno';
            try {
                response = await fetch("api/alumno/ObtenerAlumnoPorIdentificador" + id);
                if (response.ok) {
                    const data = await response.json();
                    console.log(data);
                    if (document.getElementById('btn-add')) {
                        document.getElementById('btn-add').remove();
                    }
                    document.getElementById('students-table').classList.remove('table-striped');
                    setAlumnos([data]);
                } else {
                    document.getElementById("main-content").innerHTML = `
                    <div class="mt-5 m-auto text-center">
                        <h3>Usuario inexistente en la base de datos.</>
                    </div>
                `;
                }
            } catch (exception) {
            }
        }
        
    }

    const [alumno, setAlumno] = useState(modeloAlumno);
    const [modal, setModal] = useState(false);

    const actualizaDato = (e) => {
        setAlumno(
            {
                ...alumno,
                [e.target.name]: e.target.value
            }
        )
    }

    const abrirModal = (alumno) => {
        setModal(true);
        setAlumno(alumno ? alumno : modeloAlumno);
    }

    const cerrarModal = () => {
        setModal(false);
    }

    const enviarDatos = () => {

        if (alumno.id == 0) {
            guardarAlumno(alumno)
        } else {
            editarAlumno(alumno)
        }

    }

    const guardarAlumno = async (alumno) => {

        const response = await fetch("api/alumno/Guardar", {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(alumno)
        })

        if (response.ok) {
            setModal(!modal);
            mostrarAlumnos();
        }

    }

    const editarAlumno = async (alumno) => {

        const response = await fetch("api/alumno/Editar", {

            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(alumno)
        })

        if (response.ok) {
            setModal(!modal);
            mostrarAlumnos();
        }

    }

    const eliminarAlumno = async (id) => {

        var respuesta = window.confirm("Desea eliminar al alumno?")

        if (!respuesta) {
            return;
        }

        const response = await fetch("api/alumno/Eliminar/" + id, {
            method: 'DELETE'
        })

        if (response.ok) {
            mostrarAlumnos  ();
        }

    }

    useEffect(() => {
        mostrarAlumnos();
    }, [])

    return (
        <div>
            <div>
                <button className="btn btn-light mb-4">
                    <a href="/">Regresar</a>
                </button>
            </div>
            <div className="container-fluid" id="main-content">
                <h5 id="title">Lista de Alumnos</h5>
                <table id="students-table" className="table table-striped">
                    <thead>
                        <tr>
                            <th>Identificador</th>
                            <th>Nombre(s)</th>
                            <th>Apellidos</th>
                            <th>Calificacion Matematicas</th>
                            <th>Calificacion Programacion</th>
                            <th>Calificacion Redes</th>
                            <th>Calificacion Software</th>
                            <th>
                                <button id="btn-add" className="btn btn-success w-100" onClick={abrirModal }>Agregar</button> 
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            alumnos.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.identificador}</td>
                                    <td>{item.nombre}</td>
                                    <td>{item.apellidos}</td>
                                    <td>{item.califMatematicas}</td>
                                    <td>{item.califProgramacion}</td>
                                    <td>{item.califRedes}</td>
                                    <td>{item.califSoftware}</td>
                                    <td>
                                        <div className="d-flex gap-1">
                                            <button className="btn btn-primary" onClick={() => abrirModal(item)}>Editar</button>
                                            <button className="btn btn-danger" onClick={() => eliminarAlumno(item.id)}>Eliminar</button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

            <Modal isOpen={modal}>
                <ModalHeader>
                    {alumno.id == 0 ? "Nuevo Alumno" : "Editar Alumno"}
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label>Nombre</Label>
                            <Input name="nombre" onChange={(e) => actualizaDato(e)} value={alumno.nombre} />
                        </FormGroup>
                        <FormGroup>
                            <Label>Apellidos</Label>
                            <Input name="apellidos" onChange={(e) => actualizaDato(e)} value={alumno.apellidos} />
                        </FormGroup>
                        <FormGroup>
                            <Label>Identificador</Label>
                            <Input name="identificador" onChange={(e) => actualizaDato(e)} value={alumno.identificador} />
                        </FormGroup>
                        <FormGroup>
                            <Label>Calificacion en Matematicas</Label>
                            <Input type="number" name="califMatematicas" onChange={(e) => actualizaDato(e)} value={alumno.califMatematicas} />
                        </FormGroup>
                        <FormGroup>
                            <Label>Calificacion en Programacion</Label>
                            <Input type="number" name="califProgramacion" onChange={(e) => actualizaDato(e)} value={alumno.califProgramacion} />
                        </FormGroup>
                        <FormGroup>
                            <Label>Calificacion en Redes</Label>
                            <Input type="number" name="califRedes" onChange={(e) => actualizaDato(e)} value={alumno.califRedes} />
                        </FormGroup>
                        <FormGroup>
                            <Label>Calificacion en Software</Label>
                            <Input type="number" name="califSoftware" onChange={(e) => actualizaDato(e)} value={alumno.califSoftware} />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" size="sm" onClick={enviarDatos}>Guardar</Button>
                    <Button color="danger" size="sm" onClick={cerrarModal}>Cerrar</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default App;