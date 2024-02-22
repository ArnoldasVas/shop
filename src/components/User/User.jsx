import React, { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Offcanvas from 'react-bootstrap/Offcanvas';

import './user.scss';

function User() {
  const [user, setUser] = useState('');
  const [show, setShow] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users/6'
        );
        if (!response.ok) throw new Error('Something went wrong');

        const data = await response.json();

        setUser(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {loading && (
        <Spinner className="spinner-size" animation="border" role="status" />
      )}
      {!loading && user && (
        <>
          <div className="user" onClick={handleShow}>
            {user.username[0]}
          </div>
          <Offcanvas
            className="offcanvas"
            show={show}
            onHide={handleClose}
            placement="end"
          >
            <Offcanvas.Header closeButton closeVariant="white">
              <Offcanvas.Title>{user.name}</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <p> {user.name} </p>
              <p> {user.email} </p>
            </Offcanvas.Body>
          </Offcanvas>
        </>
      )}
    </>
  );
}

export default User;
