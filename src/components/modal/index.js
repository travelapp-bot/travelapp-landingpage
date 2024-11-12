"use client";
import { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import AppButton from "../buttons";
import Image from "next/image";
import email from "../../assets/images/email.png";
import success from '../../assets/images/success.svg'
import { useDispatch, useSelector } from "react-redux";
import { waitlistAction } from "../../redux/waitlist.action";
import { ModalToggle } from "../../redux/waitlist.slice";
import data from "../../content";

const AppModal = () => {
  const [validated, setValidated] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // State to manage success message

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
  });

  const modalToggle = useSelector((state) => state?.clients?.openModal);
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
    if (!formData.email) {
      // If email is empty, prevent form submission and show validation
      event.stopPropagation();
      setValidated(true);
    } else {
      setValidated(false);
      await dispatch(waitlistAction(formData));
      setFormData({
        name: "",
        username: "",
        email: "",
      });
      setShowSuccessMessage(true); // Show success message
      // Hide the success message after 3 seconds
      setTimeout(() => {
        setShowSuccessMessage(false);
        dispatch(ModalToggle(false)); // Close the modal after the success message is shown
      }, 3000); // Adjust the delay time as needed
    }
  };

  const handleClose = () => {
    dispatch(ModalToggle(false));
    setValidated(false);
    setFormData({
      name: "",
      username: "",
      email: "",
    });
    setShowSuccessMessage(false); // Hide success message when modal closes
  };

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={modalToggle}
      onHide={handleClose}
      className="p-0"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Image src={showSuccessMessage ? success : email} alt="Join our waitlist" className="modal-img" />
        {showSuccessMessage ? (
          <div className="modal-title-stack"  >
            <h1>{data.website.modal.successTitle}</h1>
            <AppButton onClick={handleClose} style={{margin:"40px auto 10px", minWidth:'150px'}} >
              {data.website.modal.successbutton}
            </AppButton>
          </div>
        ) : (
          <>
            <div className="modal-title-stack">
              <h1>{data.website.modal.heading}</h1>
              <p>{data.website.modal.description}</p>
            </div>
            <Form noValidate onSubmit={handleSubmit}>
              <Row className="input-stack">
                <Form.Group as={Col} sm="6" controlId="validationCustom01">
                  <Form.Control
                    type="text"
                    placeholder="First name (optional)"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    size="lg"
                  />
                </Form.Group>
                <Form.Group as={Col} sm="6" controlId="validationCustom02">
                  <Form.Control
                    type="text"
                    placeholder="Last name (optional)"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    size="lg"
                  />
                </Form.Group>
                <Form.Group as={Col} md="12" controlId="validationCustom03">
                  <Form.Control
                    required
                    type="email"
                    placeholder="johndoe@travel.ai"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    size="lg"
                    isInvalid={validated && !formData.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a valid email address.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <AppButton className="modal-btn" onClick={handleSubmit}>
                {data.website.modal.buttonTxt}
              </AppButton>
            </Form>
          </>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default AppModal;
