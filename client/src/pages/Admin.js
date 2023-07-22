import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import './style.css';
import CreateBrand from "../components/modals/CreateBrand";
import CreateInstrument from "../components/modals/CreateInstrument";
import CreateType from "../components/modals/CreateType";

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [instrumentVisible, setInstrumentVisible] = useState(false)

    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-secondary"}
                className="mt-4 p-2 custom-button"
                onClick={() => setTypeVisible(true)}
            >
            <span className="custom-button-text">Добавить тип</span>
            </Button>
            <Button
                variant={"outline-secondary"}
                className="mt-4 p-2 custom-button"
                onClick={() => setBrandVisible(true)}
            >
            <span className="custom-button-text">Добавить бренд</span>
            </Button>
            <Button
                variant={"outline-secondary"}
                className="mt-4 p-2 custom-button"
                onClick={() => setInstrumentVisible(true)}
            >
            <span className="custom-button-text">Добавить товар</span>
            </Button>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateInstrument show={instrumentVisible} onHide={() => setInstrumentVisible(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
        </Container>
    );
};

export default Admin;