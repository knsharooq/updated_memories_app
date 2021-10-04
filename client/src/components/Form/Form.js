import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Button, Col, Input, Label, Row } from "reactstrap"
import { createPost } from "../../actions/posts"
import './Form.css';

export const AddOrEditForm = ( {editId, setEditId } ) => {
    const [formData, setFormData] = useState()
    const post = useSelector((state)=> editId ? state.posts.find(item=>item._id===editId) : null);
    useEffect(()=>{
        if(post) setFormData(post)
    },[post])
    const dispatch = useDispatch()
    const onSubmitPost = () => {
        const post = {title: formData?.title || "" , message: formData?.message || "", creator: formData?.sign || "" }
        dispatch(createPost(post))
    }
    return (
        <Row className="d-flex justify-content-center form">
            <Col sm={12} className="text-center"><h3>Add or Edit Memory</h3></Col>
            <Col sm={10} className="mt-3">
                <Label>Title:</Label>
                <Input className="mt-1" placeholder="Enter Title" value={formData?.title || ""} onChange={(e)=>setFormData({...formData,title:e.target.value})}/>
            </Col>
            <Col sm={10} className="mt-3">
                <Label>Message:</Label>
                <Input type="textarea" className="mt-1" placeholder="Enter Message" value={formData?.message || ""} onChange={(e)=>setFormData({...formData,message:e.target.value})} />
            </Col>
            <Col sm={10} className="mt-3">
                <Label>Author:</Label>
                <Input className="mt-1" placeholder="Sign Your Name" value={formData?.sign || ""} onChange={(e)=>setFormData({...formData,sign:e.target.value})} />
            </Col>
            <Col sm={12} className="mt-4 text-center">
                <Button color="primary" className="button" onClick={onSubmitPost}>Submit</Button>
            </Col>
        </Row>
    )
 }