import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

const TypeBar = observer(() => {
    const { instrument } = useContext(Context);

    return (
        <ListGroup>
            {instrument.types.map(type =>
                <ListGroup.Item
                    key={type.id}
                    action
                    active={type.id === instrument.selectedType?.id}
                    onClick={() => instrument.setSelectedType(type)}
                    className="custom-button2"
                    style={{
                        backgroundColor: type.id === instrument.selectedType?.id ? '#8B4513' : 'white',
                        borderColor: type.id === instrument.selectedType?.id ? '#8B4513' : '',
                        borderWidth: type.id === instrument.selectedType?.id ? '3px' : '1px',
                        color: type.id === instrument.selectedType?.id ? 'beige' : '#8B4513'
                    }}
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TypeBar;