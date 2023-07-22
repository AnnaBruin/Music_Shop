import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Container, Form, Card } from 'react-bootstrap';
import './style_components.css';

const BrandBar = observer(() => {
    const { instrument } = useContext(Context);

    return (
        <Form className="d-flex">
            {instrument.brands.map(brand =>
                <Card
                    style={{backgroundColor: brand.id === instrument.selectedBrand?.id ? 'beige' : 'white',
                            borderColor: brand.id === instrument.selectedBrand?.id ? '#8B4513' : '',
                            borderWidth: brand.id === instrument.selectedBrand?.id ? '3px' : '1px',
                            color: brand.id === instrument.selectedBrand?.id ? 'beige' : '#8B4513' }}
                    key={brand.id}
                    className="p-3 brand-card"
                    onClick={() => instrument.setSelectedBrand(brand)}
                >
                    <span className="custom-button-text">{brand.name}</span>
                </Card>
            )}
        </Form>
    );
});

export default BrandBar;