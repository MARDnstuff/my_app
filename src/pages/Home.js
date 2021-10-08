import React from "react";

const Home = ({ form, goBack, data, onChange, item, add, deleteItem }) => (
    <div className="principal">
        <div className="text-center pt-5">
            <h1 style={{ color: "white" }}>Bienvenido {form.user}</h1>
        </div>
        <div className="text-center mt-4">
            <button onClick={goBack} className="btn btn-outline-dark">Volver</button>
        </div>
        <div className="container mt-4">
            <form onSubmit={add}>
                <div className="row">
                    <div className=" col-md-4 form-group">
                        <label>ID:</label>
                        <input required autoComplete="off" name="id" onChange={onChange} value={item.id} className="form-control" type="text" placeholder="ID"></input>
                    </div>
                    <div className=" col-md-8 form-group">
                        <label>Nombre:</label>
                        <input required autoComplete="off" name="name" onChange={onChange} value={item.name} className="form-control" type="text" placeholder="Nombre"></input>
                    </div>
                    <div className="text-end mt-4">
                        <button className="btn btn-outline-light">Añadir</button>
                    </div>
                </div>
            </form>

        </div>
        <div className="container mt-5">
            <table className="table table-light table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">ID</th>
                        <th scope="col">nombre</th>
                        <th className="text-center" scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(
                            (item, i) => (
                                <tr key={i}>
                                    <th scope="row">{i + 1}</th>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td className="text-center"><button id={item.id} onClick={(e) => deleteItem(item)} className="btn btn-outline-danger">X</button></td>
                                </tr>
                            )
                        )
                    }

                </tbody>
            </table>
        </div>

    </div>

);
export default Home;