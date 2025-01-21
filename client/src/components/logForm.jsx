import '../styles/login/logform.css'

function LogForm () {
  return(
    <div className="log-container">
      <form className='login-form' action="">
        <input type="text" className='user-input' placeholder='Usuario o mail'></input>
        <input type="text" className='user-password' placeholder='Contraseña'></input>
        <input type="submit" value='Ingresar'/>
      </form>
    </div>
  );
}


export default LogForm;