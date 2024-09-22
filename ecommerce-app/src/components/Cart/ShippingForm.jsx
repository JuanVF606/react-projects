import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useShipping } from "../../context/ShippingContext";

const ShippingForm = () => {
  const { shippingInfo, setShippingInfo } = useShipping();

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Nombre completo es obligatorio"),
    address: Yup.string().required("Dirección es obligatoria"),
    city: Yup.string().required("Ciudad es obligatoria"),
    state: Yup.string().required("Estado/Región es obligatorio"),
    postalCode: Yup.string().required("Código Postal es obligatorio"),
    country: Yup.string().required("País es obligatorio"),
    phone: Yup.string().required("Teléfono es obligatorio"),
    email: Yup.string()
      .email("Email no válido")
      .required("Email es obligatorio"),
  });

  const handleSubmit = (values) => {
    setShippingInfo(values); // Actualiza el contexto con la información del formulario
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Información de Envío</h2>
      <Formik
        initialValues={shippingInfo}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Información del Envío */}
            <div className="col-span-1">
              <h3 className="text-xl font-semibold mb-2">Detalles de Envío</h3>
              <div className="mb-4">
                <label className="block text-gray-700">Nombre Completo</label>
                <Field
                  type="text"
                  name="fullName"
                  className="border w-full p-2 rounded"
                  placeholder="Ingresa tu nombre completo"
                />
                <ErrorMessage
                  name="fullName"
                  component="div"
                  className="text-red-600"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Dirección</label>
                <Field
                  type="text"
                  name="address"
                  className="border w-full p-2 rounded"
                  placeholder="Ingresa tu dirección"
                />
                <ErrorMessage
                  name="address"
                  component="div"
                  className="text-red-600"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Ciudad</label>
                <Field
                  type="text"
                  name="city"
                  className="border w-full p-2 rounded"
                  placeholder="Ingresa tu ciudad"
                />
                <ErrorMessage
                  name="city"
                  component="div"
                  className="text-red-600"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Estado/Región</label>
                <Field
                  type="text"
                  name="state"
                  className="border w-full p-2 rounded"
                  placeholder="Ingresa tu estado"
                />
                <ErrorMessage
                  name="state"
                  component="div"
                  className="text-red-600"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Código Postal</label>
                <Field
                  type="text"
                  name="postalCode"
                  className="border w-full p-2 rounded"
                  placeholder="Ingresa tu código postal"
                />
                <ErrorMessage
                  name="postalCode"
                  component="div"
                  className="text-red-600"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">País</label>
                <Field
                  type="text"
                  name="country"
                  className="border w-full p-2 rounded"
                  placeholder="Ingresa tu país"
                />
                <ErrorMessage
                  name="country"
                  component="div"
                  className="text-red-600"
                />
              </div>
            </div>

            {/* Información de Contacto */}
            <div className="col-span-1">
              <h3 className="text-xl font-semibold mb-2">
                Detalles de Contacto
              </h3>
              <div className="mb-4">
                <label className="block text-gray-700">Teléfono</label>
                <Field
                  type="tel"
                  name="phone"
                  className="border w-full p-2 rounded"
                  placeholder="Ingresa tu número de teléfono"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-600"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <Field
                  type="email"
                  name="email"
                  className="border w-full p-2 rounded"
                  placeholder="Ingresa tu correo electrónico"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-600"
                />
              </div>
            </div>

            {/* Métodos de Envío y Notas */}
            <div className="col-span-1">
              <h3 className="text-xl font-semibold mb-2">Métodos de Envío</h3>
              <div className="mb-4">
                <label className="block text-gray-700">Método de Envío</label>
                <Field
                  as="select"
                  name="shippingMethod"
                  className="border w-full p-2 rounded"
                >
                  <option value="">Selecciona un método</option>
                  <option value="standard">Envío Estándar</option>
                  <option value="express">Envío Exprés</option>
                </Field>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Notas de Entrega</label>
                <Field
                  as="textarea"
                  name="deliveryNotes"
                  className="border w-full p-2 rounded"
                  placeholder="Agrega notas especiales para la entrega"
                />
              </div>
              <div className="mb-4">
                <label className="flex items-center">
                  <Field type="checkbox" name="subscribe" className="mr-2" />
                  Suscribirme a boletines
                </label>
              </div>
            </div>

            {/* Botón de Envío */}
            <div className="col-span-2 mt-4">
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-4 rounded"
              >
                Enviar Información
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ShippingForm;
