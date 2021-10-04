import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col, Container } from 'reactstrap'
import { readPosts } from './actions/posts';
import './App.css';
import { AddOrEditForm } from './components/Form/Form';
import { Posts } from './components/Posts/Posts';

const App = () =>{
    const [editId, setEditId] = useState(0)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(readPosts())
    },[editId,dispatch])

    return (
        <Container fluid className = "main-background p-0">
            <Row className="mx-0 pt-3">
                <Col sm={12} className="mt-3 p-0">
                    <Row className="m-0">
                        <Col sm={8}>
                            <Posts setEditId={setEditId}/>
                        </Col>
                        <Col sm={4} className="pt-4">
                            <AddOrEditForm editId={editId} setEditId={setEditId}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default App;