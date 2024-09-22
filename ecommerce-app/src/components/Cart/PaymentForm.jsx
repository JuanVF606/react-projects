import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import usePaymentStore from "../../store/usePaymentStore";
import { toast } from "react-toastify";
import useCartStore from "../../store/useCartStore";

const PaymentForm = ({ onPaymentSuccess }) => {
  const { paymentInfo, setPaymentInfo } = usePaymentStore();
  const { clearCart } = useCartStore();

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
    toast.success("Payment information submitted successfully!");

    setTimeout(() => {
      setPaymentInfo({ cardNumber: "", expiryDate: "", cvv: "", paymentMethod: "creditCard" });
      clearCart();
      onPaymentSuccess();
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
              <Field
                name="cardNumber"
                render={({ field }) => (
                  <input
                    {...field}
                    className="border w-full p-2 rounded"
                    placeholder="1234 5678 9123 4567"
                  />
                )}
              />
              <ErrorMessage name="cardNumber" component="div" className="text-red-600" />
            </div>

            <div>
              <label className="block text-gray-700">Expiry Date (MM/YY)</label>
              <Field
                name="expiryDate"
                render={({ field }) => (
                  <input
                    {...field}
                    className="border w-full p-2 rounded"
                    placeholder="MM/YY"
                  />
                )}
              />
              <ErrorMessage name="expiryDate" component="div" className="text-red-600" />
            </div>

            <div>
              <label className="block text-gray-700">CVV</label>
              <Field
                type="text"
                name="cvv"
                className="border w-full p-2 rounded"
                placeholder="123"
              />
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
