import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import FormControl from 'react-bootstrap/FormControl';
import Modal from 'react-bootstrap/Modal';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ModalHeader from 'react-bootstrap/ModalHeader';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import axios from 'axios';


export default function Blogs () {
    
    return (
        <ListGroup>
            <ListGroupItem className='d-flex justify-content-between aligth-items-center'>
                Contenido

                <FaEdit size={20} style={{cursor: 'pointer'}}/>

                <FaTrashAlt size={20} style={{cursor: 'pointer'}}/>
                
            </ListGroupItem>
        </ListGroup>
    )
}

