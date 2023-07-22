import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import InstrumentItem from "./InstrumentItem";
import {Row} from "react-bootstrap";


const InstrumentList = observer(() => {
    const {instrument} = useContext(Context)

    return (
        <Row className="d-flex">
            {instrument.instruments.map(instrument =>
                <InstrumentItem key={instrument.id} instrument={instrument}/>
            )}
        </Row >
    );
});

export default InstrumentList;