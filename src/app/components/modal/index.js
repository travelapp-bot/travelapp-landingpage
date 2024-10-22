"use client";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import AppButton from "../buttons";
import Image from "next/image";
import email from "../../assets/images/email.png";
import { useDispatch, useSelector } from "react-redux";
import { waitlistAction } from "@/app/redux/waitlist.action";
import { ModalToggle } from "@/app/redux/waitlist.slice";

const AppModal = () => {
  const [validated, setValidated] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
  });

  const modalToggle = useSelector(state => state?.clients?.openModal);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      setValidated(true);
      await dispatch(waitlistAction(formData));
      setFormData({
        name: '',
        username: '',
        email: '',
      });
    }
  };

  const handleClose = () => {
    dispatch(ModalToggle(false));
    setValidated(false);
    setFormData({
      name: '',
      username: '',
      email: '',
    });
  };

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={modalToggle}
      onHide={handleClose}
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Image src={email} alt="Join our waitlist" className="modal-img" />
        <div className="modal-title-stack">
          <h1>Join our waitlist</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="input-stack">
            <Form.Group as={Col} sm="6" controlId="validationCustom01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                size="lg"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} sm="6" controlId="validationCustom02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
                name="username"
                value={formData.username}
                onChange={handleChange}
                size="lg"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="12" controlId="validationCustom02">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="johndoe@travel.ai"
                name="email"
                value={formData.email}
                onChange={handleChange}
                size="lg"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <AppButton className="modal-btn" type="submit">
            Join Waitlist
          </AppButton>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AppModal;
