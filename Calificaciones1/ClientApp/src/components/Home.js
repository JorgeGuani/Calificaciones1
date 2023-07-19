import React, { Component } from 'react';

const Home = () => {

    /*const [alumnos, setAlumno] = useState([]);

    const ConsumirAPI = async () => {
        const response = await fetch("api/alumno/ObtenerAlumno");

        if (response.ok) {
            const data = await response.json();
            console.log(data)
            setAlumno(data)
        }
    }*/
    const Busqueda = async () => {
        // const response = await fetch("api/alumno/ObtenerAlumnoPorIdentificador/"+id);
        const id = document.getElementById('search-input').value;
        
        window.location.href = '/list/' + id;

        /*if (response.ok) {
            const data = await response.json();
            console.log(data)
            setAlumno(data)
        }*/
    }

    return (
        <div className="m-auto mt-5">
            <div className="p-4 w-50 d-flex flex-column gap-3 m-auto border rounded bg-light  mb-4">
                <h4 className="text-center">Calificaciones</h4>
                <div className="form-group">
                    <label className="w-100 text-left">Busqueda de Alumno por identificador:</label><br />
                    <div className="d-flex gap-2">
                        <input className="form-control" type="text" id="search-input" name="identificador" placeholder="IECA-001" />
                        <button className="btn btn-primary" type="submit" onClick={Busqueda}>Buscar</button>
                    </div>
                </div>
            </div>
            <div className="m-auto d-flex justify-content-end w-50">
                <button className="btn btn-light mb-4">
                    <a href="/list">Ver todos</a>
                </button>
            </div>
        </div>
    )
}

export default Home;