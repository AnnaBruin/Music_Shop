import React, { useContext, useEffect } from 'react';
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import InstrumentList from "../components/InstrumentList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrands, fetchInstruments, fetchTypes} from "../http/instrumentAPI";
import Pages from "../components/Pages";

const Shop = observer(() => {
  const {instrument} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => instrument.setTypes(data))
        fetchBrands().then(data => instrument.setBrands(data))
        fetchInstruments().then(data => {
          instrument.setInstruments(data.rows)
          instrument.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
      fetchInstruments(instrument.selectedType.id, instrument.selectedBrand.id, instrument.page, 8).then(data => {
          instrument.setInstruments(data.rows)
          instrument.setTotalCount(data.count)
      })
  }, [instrument.page, instrument.selectedType, instrument.selectedBrand,])

  return (
    <Container fluid className="m-lg-2">
      <Row className="mt-2">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <InstrumentList />
          <Pages />
        </Col>
      </Row>
    </Container>
  );
})

export default Shop;