import React, { useState, useRef } from "react";
import useCartStore from "../store/useCartStore";
import CartStepper from "../components/Cart/CartStepper";
import CartSummary from "../components/Cart/CartSummary";
import ShippingForm from "../components/Cart/ShippingForm";
import PaymentForm from "../components/Cart/PaymentForm";
import ReviewOrder from "../components/Cart/ReviewOrder";
import NavigationButtons from "../components/Cart/NavigationButtons";
import { toast } from "react-toastify";
import { FaCartShopping } from "react-icons/fa6";

const Cart = () => {
  const { removeFromCart, updateQuantity, cart, clearCart } = useCartStore();
  const [currentStep, setCurrentStep] = useState(0);
  const formikRef = useRef(null); // Reference to Formik

  const total = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);

  const goToNextStep = () => {
    if (currentStep === 0 && cart.length === 0) {
      toast.error("You must add products to the cart to proceed to the next step.");
      return;
    }
    setCurrentStep(prev => Math.min(prev + 1, 3));
  };

  const goToPreviousStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };

  const handlePaymentSuccess = () => {
    toast.success("Payment processed successfully!");
    clearCart();
    setCurrentStep(0);
  };

  return (
    <div className="container mx-auto my-16 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center mb-6 flex items-center justify-center">
        <FaCartShopping className="mr-2" />
        Shopping Cart
      </h1>

      <CartStepper currentStep={currentStep} />

      {currentStep === 0 && cart.length === 0 && (
        <p className="text-center text-gray-500 mt-4">
          Add products to cart to proceed to next step.
        </p>
      )}
      {currentStep === 0 && (
        <CartSummary
          cart={cart}
          handleQuantityChange={updateQuantity}
          handleRemove={removeFromCart}
        />
      )}

      {currentStep === 1 && cart.length > 0 ? <ShippingForm /> : null}
      {currentStep === 2 && <ReviewOrder cart={cart} total={total} />}
      {currentStep === 3 && <PaymentForm ref={formikRef} onPaymentSuccess={handlePaymentSuccess} />}

      <NavigationButtons
        currentStep={currentStep}
        goToNextStep={currentStep === 3 ? () => formikRef.current.submitForm() : goToNextStep}
        goToPreviousStep={goToPreviousStep}
        isNextDisabled={currentStep === 0 && cart.length === 0}
      />
    </div>
  );
};

export default Cart;
