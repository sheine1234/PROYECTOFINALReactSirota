const FormCheckout = ({ dataForm, handleChangeInput, handleSubmitForm }) => {
  return (
    <div className="form-container">
      <form onSubmit={handleSubmitForm} className="checkout-form">
        <label>Nombre completo:</label>
        <input
          type="text"
          name="fullname"
          value={dataForm.fullname}
          onChange={handleChangeInput}
          required
        />

        <label>Teléfono:</label>
        <input
          type="number"
          name="phone"
          value={dataForm.phone}
          onChange={handleChangeInput}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={dataForm.email}
          onChange={handleChangeInput}
          required
        />

        <button type="submit" className="submit-button">Enviar Orden</button>
      </form>
    </div>
  );
};

export default FormCheckout;
