import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function AddMovies({ movies, setmovies }) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newmovie, setnewmovie] = useState({
    name: "",
    posterurl: "",
    description: "",
    rating: "",
  });
  const add=()=>{
  setmovies([...movies, newmovie])
  }

  return (
    <div>
        <>
      <Button variant="primary" onClick={handleShow} style={{backgroundColor:'red', color:'white', border:'none'}}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Movie Name" onChange={(e)=>setnewmovie({...newmovie, name:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie Image</Form.Label>
        <Form.Control type="text" placeholder="Enter Movie image" onChange={(e)=>setnewmovie({...newmovie, posterurl:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie description</Form.Label>
        <Form.Control type="text" placeholder="Enter Movie description" onChange={(e)=>setnewmovie({...newmovie, description:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie rate</Form.Label>
        <Form.Control type="text" placeholder="Enter Movie rate" onChange={(e)=>setnewmovie({...newmovie, rating:e.target.value})} />
      </Form.Group>
      </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{add(); handleClose(); }} style={{backgroundColor:'red', color:'white', border:'none'}}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    </div>
  )
}

export default AddMovies