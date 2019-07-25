import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'


class Login extends Component {
    state = {
        datos : []
    }

    ObtenerDatos(){

    }
    render() {
        return (
    
            
                <Row className="justify-content-md-center degradado alto flex">
                    <Col md="4">
                        <Card>
                            <Card.Img variant="top" src="https://via.placeholder.com/731x180.png?text=Visit+WhoIsHostingThis.com+Buyers+GuideC/O https://placeholder.com/" />
                            <Card.Body>
                                <Card.Text>
                                    
                                        <Form
                                        // datos a procesar del formulario
                                        >
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Email: </Form.Label>
                                                <Form.Control type="email" placeholder="ejemplo@ejemplo.com" />
                                            </Form.Group>

                                            <Form.Group controlId="formBasicPassword">
                                                <Form.Label>Contraseña: </Form.Label>
                                                <Form.Control type="password" placeholder="********" />
                                            </Form.Group>

                                            <Button variant="outline-primary" block className="boton-login border color">Inicia Sesion ...!!</Button>

                                        </Form>
                                
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

           
        );
    }
}

export default Login;
