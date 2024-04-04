import React, { useState, useContext } from 'react';
import {
  Form,
  Container,
  Col,
  Row,
  Button,
  Spinner,
  Alert,
} from 'react-bootstrap';
import { cfg } from '../../cfg/cfg';
import { AppContext } from '../../context/AppContext';
import useAuth from '../../hooks/useAuth';

function Admin() {
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [status, setStatus] = useState({
    value: null, // 'success' | 'danger'
    message: '',
  });
  const { token, setToken } = useAuth();
  const { fetchData, setShowLogin } = useContext(AppContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setValidated(true);

    const form = event.currentTarget;

    if (!form.checkValidity()) return;

    try {
      setLoading(true);
      const data = {
        title,
        description,
      };

      if (imgUrl.trim()) data.img = imgUrl;

      const response = await fetch(`${cfg.API.HOST}/product`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      const product = await response.json();

      console.log(response);
      if (!response.ok) {
        if (response.status === 401) {
          setToken(null);
          setShowLogin(true);
        }

        throw new Error(product.error);
      }

      setStatus({ value: 'success', message: 'Product created successfully' });
      fetchData();
    } catch (error) {
      setStatus({
        value: 'danger',
        message:
          error.message || 'Failed creating product. Please try again later',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="my-container">
      <h1>Add product</h1>
      <Container>
        {status.value && (
          <Alert variant={status.value}> {status.message} </Alert>
        )}
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Title</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Description</Form.Label>
              <Form.Control
                required
                as="textarea"
                placeholder="Description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Image url</Form.Label>
              <Form.Control
                type="text"
                placeholder="Image url"
                value={imgUrl}
                onChange={(event) => setImgUrl(event.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Button type="submit" disabled={loading}>
            Create product
          </Button>
          {loading && <Spinner animation="border" variant="primary" />}
        </Form>
      </Container>
    </div>
  );
}

export default Admin;
