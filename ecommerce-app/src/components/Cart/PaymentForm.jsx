// src/components/PaymentForm.js
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import usePaymentStore from "../../store/usePaymentStore";
import { toast } from "react-toastify";
import useCartStore from "../../store/useCartStore";
import useStore from "../../store/useStore";
import useOrderStore from "../../store/useOrderStore"; // Importar el store de órdenes
import { useNavigate } from "react-router-dom";

const PaymentForm = ({ onPaymentSuccess }) => {
  const { paymentInfo, setPaymentInfo } = usePaymentStore();
  const { clearCart, cart } = useCartStore();
  const { products, updateStock } = useStore();
  const { addOrder } = useOrderStore(); // Hook del store de órdenes
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    cardNumber: Yup.string()
      .required("Card number is required")
      .matches(/^\d{16}$/, "Card number must be 16 digits"),
    expiryDate: Yup.string()
      .required("Expiry date is required")
      .matches(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, "Invalid expiry date format (MM/YY)"),
    cvv: Yup.string()
      .required("CVV is required")
      .matches(/^\d{3}$/, "CVV must be 3 digits"),
  });

  const handleSubmit = (values, { resetForm }) => {
    const outOfStockItems = cart.filter(cartItem => {
      const product = products.find(prod => prod.id === cartItem.id);
      return product && product.stock < cartItem.quantity;
    });

    if (outOfStockItems.length > 0) {
      toast.error("Some items are out of stock. Please adjust your cart.");
      return;
    }

    toast.success("Payment information submitted successfully!");

    setTimeout(() => {
      const orderDetails = cart.map(item => ({
        id: item.id,
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        image: item.image, // Asegúrate de que la imagen esté incluida
      }));

      // Agregar la orden al store
      addOrder({ orderDetails, total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0) });

      cart.forEach(item => {
        updateStock(item.id, item.quantity);
      });

      setPaymentInfo({ cardNumber: "", expiryDate: "", cvv: "", paymentMethod: "creditCard" });
      clearCart();
      onPaymentSuccess({ orderDetails }); // Puedes pasar el orderDetails si lo necesitas

      navigate('/order-confirmation', { state: { orderDetails, orderId: Date.now() } }); // Navegar a la página de confirmación con el ID de la orden
    }, 1000);
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Payment Information</h2>
      <Formik
        initialValues={paymentInfo}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="space-y-4">
            <div>
              <label className="block text-gray-700">Card Number</label>
              <Field name="cardNumber">
                {({ field }) => (
                  <input
                    {...field}
                    className="border w-full p-2 rounded"
                    placeholder="1234 5678 9123 4567"
                  />
                )}
              </Field>
              <ErrorMessage name="cardNumber" component="div" className="text-red-600" />
            </div>

            <div>
              <label className="block text-gray-700">Expiry Date (MM/YY)</label>
              <Field name="expiryDate">
                {({ field }) => (
                  <input
                    {...field}
                    className="border w-full p-2 rounded"
                    placeholder="MM/YY"
                  />
                )}
              </Field>
              <ErrorMessage name="expiryDate" component="div" className="text-red-600" />
            </div>

            <div>
              <label className="block text-gray-700">CVV</label>
              <Field name="cvv">
                {({ field }) => (
                  <input
                    {...field}
                    className="border w-full p-2 rounded"
                    placeholder="123"
                  />
                )}
              </Field>
              <ErrorMessage name="cvv" component="div" className="text-red-600" />
            </div>

            <button
              type="submit"
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300 ease-in-out focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 shadow-md hover:shadow-lg cursor-pointer"
            >
              Confirm Purchase
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PaymentForm;
