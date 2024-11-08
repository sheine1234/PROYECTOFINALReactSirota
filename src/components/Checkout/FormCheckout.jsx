

const FormCheckout = ({dataForm, handleChangeInput, handleSubmitForm}) => {
  return (
    <div>
        <form onSubmit={handleSubmitForm}>
            <label>Nombre completo:</label>
            <input type="text" name="fullname" value={dataForm.fullname} onChange={handleChangeInput} />

            <label>Telefono:</label>
            <input type="number" name="phone" value={dataForm.phone} onChange={handleChangeInput} />

            <label>Email:</label>
            <input type="text" name="email" value={dataForm.email} onChange={handleChangeInput} />

            <button type="sumbit">Enviar Orden</button>
        </form>
    </div>
  )
}

export default FormCheckout