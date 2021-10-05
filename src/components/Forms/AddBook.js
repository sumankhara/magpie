import React, {useState} from "react";
import { Modal, Form, Button } from "react-bootstrap";

export default function AddBook() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        AddBook
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter book name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Authors</Form.Label>
              <Form.Control as="textarea" rows={3} />
              <Form.Text className="text-muted">
                For multiple authors, write them as a comma separated list
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formGridState">
              <Form.Label>Language</Form.Label>
              <Form.Control as="select" defaultValue="Bengali">
                <option>Bengali</option>
                <option>English</option>
                <option>Hindi</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formGridState">
              <Form.Label>Category</Form.Label>
              <Form.Control as="select" defaultValue="">
                <option>Fiction</option>
                <option>Economics</option>
                <option>History</option>
                <option>Social Science</option>
                <option>Science and Technology</option>
                <option>Travel</option>
                <option>Autobiography and Biography</option>
                <option>Politics</option>
              </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="publisher">
              <Form.Label>Publisher</Form.Label>
              <Form.Control type="text" placeholder="Enter publisher's name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="isbn">
              <Form.Label>ISBN</Form.Label>
              <Form.Control type="text" placeholder="Enter ISBN" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="edition">
              <Form.Label>Edition</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Submit</Button>
        </Modal.Footer>
    </Modal>
    </>
  );
}