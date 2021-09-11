import React, { useState } from "react";
import { useHistory } from "react-router";
import Index from "../pages/Index.js";

const IndexContainer = () => {
    //posible cambio
    const history = useHistory();

    const [form, setForm] = useState({
        user: '',
        born_date: '',
        degree: ''
    });

    const onChange = (e) => {
        setForm({
            ...form,
            [e.target.id]: e.target.value
        });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        history.push("/home");
    }


    return (
        <Index form={form} onChange={onChange} onSubmit={onSubmit}></Index>
    )
};
export default IndexContainer;