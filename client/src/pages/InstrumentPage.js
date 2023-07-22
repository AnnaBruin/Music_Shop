import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from 'react-router-dom'
import { fetchOneInstrument } from "../http/instrumentAPI";

const InstrumentPage = () => {
  const [instrument, setInstrument] = useState({ info: [] })
  const { id } = useParams()
  
  useEffect(() => {
    fetchOneInstrument(id).then(data => setInstrument(data))
  }, [])

  return (
    <Container className="mt-3">
      <Row>
        <Col md={6}>
          <Image width={300} height={300} src={process.env.REACT_APP_API_URL + instrument.img} />

          <Row className="d-flex flex-column align-items-center">
            <h2>{instrument.name}</h2>
          </Row>

          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{ width: 300, height: 300, fontSize: 32, border: '5px solid lightgray' }}
          >
            <h3>{instrument.price} руб.</h3>
            
          </Card>
        </Col>
        <Col md={6}>
          <Row className="d-flex flex-column m-3">
            <h1>Характеристики</h1>
            {instrument.info.map((info, index) =>
              <Row key={info.id} style={{ background: index % 2 === 0 ? 'ivory' : 'transparent', padding: 10 }}>
                {info.title}: {info.description}
              </Row>
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default InstrumentPage;