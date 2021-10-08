import React from "react";
import Logo from "../images/Logo_Generico.png";

//El HTML se pone entre parentesis
const Index = ({ form, onChange, onSubmit }) => (
    <div className="principal">
        <div className="container-form">
            <form className="form-react" onSubmit={onSubmit}>
                <div className="text-center">
                    <img src={Logo} alt="Logo Generico" style={{ width: "200px", height: "200px" }}></img>
                    <h1>Bienvenido {form.user}</h1>
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="user" className="form-label">Nombre</label>
                    <input required onChange={onChange} value={form.email} name="user" type="text" className="form-control" id="user" placeholder="..." />
                </div>

                <div className="form-group mb-4">
                    <label htmlFor="born_date" className="form-label">Fecha de nacimiento</label>
                    <input required onChange={onChange} value={form.pass} name="born_date" type="date" className="form-control" id="born_date" placeholder="..." />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="degree" className="form-label">Licenciatura</label>
                    <input required onChange={onChange} value={form.email} name="degree" type="text" className="form-control" id="degree" placeholder="..." />
                </div>

                <div className="text-center mb-2">
                    <button className=" btn btn-outline-success">Enviar</button>
                </div>
            </form>
        </div>
    </div>
);

export default Index;
