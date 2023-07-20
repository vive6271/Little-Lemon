import { useNavigate } from 'react-router-dom';

const LoginPage = (props) => {
  const navigate = useNavigate();

  function handleSubmit(e) {
    props.setValue(!props.value);
    navigate('/');
  }

  return (
      <div className="box">
        <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className='lable'>
            <label htmlFor='email'>Email - id  : </label>
            <input type='email' id='email' required/>
        </div>
        <div className="lable">
            <label htmlFor="password">Password : </label>
            <input type="password" required/>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;