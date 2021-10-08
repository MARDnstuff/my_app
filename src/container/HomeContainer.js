import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router";
import Home from "../pages/Home";

const HomeContainer = () => {
    const location = useLocation();
    const history = useHistory();
    //recibo info
    const [form, setForm] = useState({});
    const [item, setItem] = useState({ id: '', name: '' });
    //Data para tabla (array)
    const [data, setData] = useState([
        { id: "001", name: "Vanessa Casas" },
        { id: "002", name: "Ricardo Perez" },
        { id: "003", name: "Valeria Rabiola" }
    ]);


    //ocurre antes del refresh
    useEffect(
        () => {
            setForm(location.state.form);
        }, [location]
    )

    const onChange = (e) => setItem({ ...item, [e.target.name]: e.target.value });
    //Funcion anonima --- compatible con cualquier navegador
    const goBack = () => history.goBack();

    const add = (e) => {
        e.preventDefault();
        setData([...data, item]); //corchetes para iterar
        setItem({ id: '', name: '' });
    }

    const deleteItem = (item) => {
        console.log(item);
        setData(data.filter(itemOld => !(itemOld.id === item.id && itemOld.name === item.name)));
    }

    return (
        //mando info
        <Home add={add} deleteItem={deleteItem} onChange={onChange} item={item} form={form} goBack={goBack} data={data}></Home>
    )
};

export default HomeContainer;