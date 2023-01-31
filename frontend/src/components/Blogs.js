import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import FormControl from 'react-bootstrap/FormControl';
import Modal from 'react-bootstrap/Modal';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalFooter from 'react-bootstrap/ModalFooter';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import axios from 'axios';


export default function Blogs ({ blogs = [], setBlogs }) {
    
    return (
        <div>
            <ListGroup>
                {blogs.map( blog => {
                    return (
                <ListGroupItem key={blog.id} className='d-flex justify-content-between aligth-items-center'>
                    
                    {blog.body}
                    <div>
                        <FaEdit size={20} style={{cursor: 'pointer'}}/>
                        <FaTrashAlt size={20} style={{cursor: 'pointer'}}/>
                    </div>

                </ListGroupItem>
                    )
                })}
            </ListGroup>

            <Modal>

                <ModalHeader>
                    <Modal.Title>
                        EDIT BLOG
                    </Modal.Title>
                </ModalHeader>

                <Modal.Body>
                    <FormControl/>
                </Modal.Body>

                <ModalFooter>
                    <Button variant='dark'>
                        CERRAR
                    </Button>

                    <Button variant='dark'>
                        SAVE
                    </Button>
                </ModalFooter>

            </Modal>
        </div>

    )
}

