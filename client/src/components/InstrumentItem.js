import React from 'react';
import {Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { useNavigate } from "react-router-dom"
import {INSTRUMENT_ROUTE} from "../utils/consts";

const InstrumentItem = ({instrument}) => {
    const navigate = useNavigate()
    return (
        <Col md={3} className={"mt-3"} onClick={() => navigate(INSTRUMENT_ROUTE + '/' + instrument.id)}>
            <Card style={{width: 200, cursor: 'pointer'}} border={"light"}>
                <Image width={200} height={200} src={process.env.REACT_APP_API_URL + instrument.img}/>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>Оставшееся количество:</div>
                    <div className="d-flex align-items-center">
                        <div>{instrument.amount}</div>
                    </div>
                </div>
                <div>{instrument.name}</div>
            </Card>
        </Col>
    );
};

export default InstrumentItem;