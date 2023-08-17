import { useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap';
import { toast } from "react-toastify";
import CheckoutSteps from '../components/CheckoutSteps';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { useCreateOrderMutation } from '../slices/ordersApiSlice';
import { clearCartItems } from '../slices/cartSlice';

import React from 'react';
import emailjs from 'emailjs-com';


const PlaceOrderScreen = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    const [createOrder, { isLoading, error }] = useCreateOrderMutation();

    useEffect(() => {
        if(!cart.shippingAddress.address) {
            navigate('/shipping');
        } else if(!cart.paymentMethod) {
            navigate('/payment');
        }
    }, [cart.paymentMethod, cart.shippingAddress.address, navigate]);

    //---------------------------------------------------------------------------
/*

    const sendEmail = () => {
        emailjs.send('service_6zuiied', 'template_70k58fo', {
          to: 'israel.sepulveda95@gmail.com',
          subject: 'Frying Pan',
          message: 'This is a notification email from React.'
        }, 'h3upWqu_PqC1gGTvW')
          .then((response) => {
            console.log('Email sent successfully:', response);
          })
          .catch((error) => {
            console.error('Email error:', error);
          });
      };

*/
    //-------------------------------------------------------------------------
    

    const placeOrderHandler = async () => {
        try{                
            const res = await createOrder({
                orderItems: cart.cartItems,
                shippingAddress: cart.shippingAddress,
                paymentMethod: cart.paymentMethod,
                itemsPrice: cart.itemsPrice,
                shippingPrice: cart.shippingPrice,
                taxPrice: cart.taxPrice,
                totalPrice: cart.totalPrice,
            }).unwrap();
            emailjs.send('service_6zuiied', 'template_70k58fo', {
                to: 'israel.sepulveda95@gmail.com',
                subject: 'Frying Pan',
                message: 'Hello Israel, you can go ahead and pick up your order in your locker! Your code is: 1'
              }, 'h3upWqu_PqC1gGTvW')
                .then((response) => {
                  console.log('Email sent successfully:', response);
                })
                .catch((error) => {
                  console.error('Email error:', error);
                });
            dispatch(clearCartItems());
            navigate(`/order/${res._id}`);
             
        }catch(error){
            toast.error(error);
        }
    };

    return <>
      <CheckoutSteps step1 step2 step3 step4 />
      <Row>
         <Col md={8}>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <h2>Shipping</h2>
                    <p>
                        <strong>Address: </strong>
                        {cart.shippingAddress.address}, {' '}{cart.shippingAddress.postalCode}, 
                        {' '}{cart.shippingAddress.instructions}
                    </p>
                </ListGroup.Item>

                <ListGroup.Item>
                  <h2>Payment Method</h2>
                  <strong>Method: </strong>
                  {cart.paymentMethod}
                </ListGroup.Item>

                <ListGroup.Item>
                    <h2>Order Items</h2>
                    {cart.cartItems.length === 0 ? (
                        <Message>You cart is empty</Message>
                    ) : (
                        <ListGroup variant="flush">
                            { cart.cartItems.map((item, index) => (
                                <ListGroup.Item key={index}>
                                    <Row>
                                        <Col md={1}>
                                          <Image src={item.image} alt={item.name}
                                            fluid rounded />
                                        </Col>
                                        <Col>
                                         <Link to={`/products/${item.product}`}>
                                           {item.name}
                                         </Link>
                                        </Col>
                                        <Col md={4}>
                                          { item.qty } x ${ item.price } = ${ item.qty * item.price} 
                                        </Col>
                                        <Col md={4}>
                                          
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    )}
                </ListGroup.Item>
            </ListGroup>
         </Col>
         <Col md={4}>
            <Card>
                 <ListGroup variant="flush">
                    <ListGroup.Item>
                       <h2>Order Summary</h2>
                     </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                          <Col>Items: </Col>
                          <Col>${cart.itemsPrice}</Col>
                        </Row>
                     </ListGroup.Item>

                     <ListGroup.Item>
                        <Row>
                            <Col>Shipping: </Col>
                            <Col>{cart.shippingPrice}</Col>
                        </Row>
                     </ListGroup.Item>

                     <ListGroup.Item>
                        <Row>
                            <Col>Tax: </Col>
                            <Col>{cart.taxPrice}</Col>
                        </Row>
                     </ListGroup.Item>

                     <ListGroup.Item>
                        <Row>
                            <Col>Total: </Col>
                            <Col>{cart.totalPrice}</Col>
                        </Row>
                     </ListGroup.Item> 

                     <ListGroup.Item>
                       {error && <Message variant='danger'>{error}</Message>}    
                    </ListGroup.Item> 

                     <ListGroup.Item>
                        <Button
                          type="button"
                          classname='btn-block'
                          disabled={cart.cartItems.length === 0}
                          onClick= { placeOrderHandler }
                        >
                            Place Order
                        </Button>
                        {isLoading && <Loader />}
                    </ListGroup.Item>     
                  </ListGroup>
            </Card>
         </Col>
      </Row>
    </>;
}

export default PlaceOrderScreen;