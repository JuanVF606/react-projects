// src/components/CartStepper.js
import React from 'react';
import { Stepper, Step } from 'react-form-stepper';

const CartStepper = ({ currentStep }) => {
  const steps = [
    'Cart Summary',
    'Shipping Information',
    'Review and Confirmation',
    'Payment Method',
  ];

  return (
    <Stepper activeStep={currentStep}>
      {steps.map((label, index) => (
        <Step key={index} label={label} />
      ))}
    </Stepper>
  );
};

export default CartStepper;