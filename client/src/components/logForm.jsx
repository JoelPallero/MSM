import '../styles/login/logform.css'

function LogForm () {
  return(
    <div className="log-container">
      <h1 className='log-title'>Bienvenido a <br/> <strong>Music Service Center</strong></h1>
      <form className='login-form' action="">
        <input type="text" className='user-input' placeholder='Usuario o mail'></input>
        <input type="text" className='user-password' placeholder='Contraseña'></input>
        <input type="submit" value='Ingresar'/>
      </form>
    </div>
  );
}


export default LogForm;