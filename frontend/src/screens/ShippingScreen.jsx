import { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FormContainer from '../components/FormContainer';
import { saveShippingAddress } from '../slices/cartSlice';
import CheckoutSteps from "../components/CheckoutSteps";


const ShippingScreen = () => {
    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;

    const [address, setAddress] = useState(shippingAddress?.address || '');
    const [postalCode, setPostalCode] = useState(shippingAddress?.postalCode || '');
    const [instructions, setInstructions] = useState(shippingAddress?.instructions || '');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveShippingAddress({ address, postalCode, instructions }));
        navigate('/payment');
    };

    return (
        <FormContainer>
            <CheckoutSteps step1 step2 />
        <h1>Shipping</h1>

        <Form onSubmit={submitHandler}>
            <Form.Group controlId="address" className="my-2">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter address'
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                ></Form.Control>
            </Form.Group>

            <Form.Group controlId="postalCode" className="my-2">
                <Form.Label>Postal Code</Form.Label>
                <Form.Control
                  type='text'
                  placeholder="Enter postal code"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                ></Form.Control>
            </Form.Group>

            <Form.Group controlId="instructions" className="my-2">
                <Form.Label>Instructions</Form.Label>
                <Form.Control
                  type='text'
                  placeholder="Example: Don't use the doorbell, knock the door instead."
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                ></Form.Control>
            </Form.Group>
            <Button type="submit" variant="primary" className="my-2">Continue</Button>
        </Form>
    </FormContainer>
    );
}

export default ShippingScreen;