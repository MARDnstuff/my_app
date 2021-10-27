import React, { useState } from 'react';
import RFC from '../pages/RFC';

const RFCContainer = () => {
    const [rfc, setRFC] = useState("**********-###");
    const [form, setForm] = useState({ nombre: '', paterno: '', materno: '', fechaNacimiento: '' });

    const onChange = (e) => {
        let name = e.target.name;
        let value = String(e.target.value).toUpperCase();
        setForm({ ...form, [name]: value });
        if (name === "nombre") {
            let sub1 = rfc.substring(0, 3);
            let sub2 = rfc.substring(4, 14);
            if (value.length === 1) {
                let nombre = value.substring(0, 1);
                setRFC(sub1 + nombre + sub2);
            } else if (value.length < 2) {
                setRFC(sub1 + "*" + sub2);
            }
        } else if (name === "paterno") {
            let sub = rfc.substring(2, 14);
            if (value.length === 2) {
                let paterno = value.substring(0, 2);
                setRFC(paterno + "" + sub);
            } else if (value.length < 2) {
                setRFC("**" + sub);
            }
        } else if (name === "materno") {
            let sub1 = rfc.substring(0, 2);
            let sub2 = rfc.substring(3, 14);
            if (value.length === 1) {
                let materno = value.substring(0, 1);
                setRFC(sub1 + materno + sub2);
            } else if (value.length < 2) {
                setRFC(sub1 + "*" + sub2);
            }
        } else {
            let sub1 = rfc.substring(0, 4);
            let sub2 = rfc.substring(10, 14);
            let arr = value.split("-");
            setRFC(sub1 + arr[0].substring(2, 5) + arr[1] + arr[2] + sub2);
            // aaaa - mm - dd
        }
        console.log(rfc.substring(0, 4))
        switch (rfc.substring(0, 4)) {
            case "BUEI": case "CACA": case "CAGA": case "CAKA": case "COGE": case "COJE": case "COJO":
            case "FETO": case "JOTO": case "KAGO": case "KOJO": case "KULO": case "MAMO": case "MEAS":
            case "MION": case "MULA": case "PEDO": case "PUTA": case "QULO": case "RUIN": case "BUEY":
            case "CACO": case "CAGO": case "CAKO": case "COJA": case "COJI": case "CULO": case "GUEY":
            case "KAGA": case "KOGE": case "KAKA": case "MAME": case "MEAR": case "MEON": case "MOCO":
            case "PEDA": case "PENE": case "PUTO": case "RATA": {
                let c1 = rfc.substring(0, 3);
                let c2 = rfc.substring(5, 14);
                setRFC(c1 + 'X' + c2);
                break;
            }
            default:
                console.log("ERROR");
        }

    }

    return (
        <RFC
            rfc={rfc}
            form={form}
            onChange={onChange}
        />
    )
};
export default RFCContainer;