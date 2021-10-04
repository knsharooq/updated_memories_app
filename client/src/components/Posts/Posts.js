import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import './Posts.css';

export const Posts = ( {postData} ) => {
    const postsList = useSelector((state) => state.posts)
    return (
        <Row className="d-flex justify-content-center post">
                <Col sm={12} className="text-center mb-4 heading">
                    <p>Memories Dashboard</p>
                </Col>
                {!postsList.length ? <Col sm={12} className="mt-3">Add some memories to be displayed here.</Col> :
                     <Col sm={12}>
                         <Row>
                    {
                        postsList.map((post,index)=>{
                            return(
                                <Col sm={4}>
                                    <div key={post._id} className="mx-3 mb-5 post-card p-3 d-flex flex-column justify-content-between">
                                        <div className="mb-2">
                                            <p className="title mb-0">{post.title}</p>
                                            <div className="message">{post.message}</div>
                                        </div>
                                        <p className="sign mb-0">Created by {post.creator}</p>
                                    </div>
                                </Col>
                            )
                        })
                    }
                        </Row>
                    </Col>
                }
        </Row>
    )
 }