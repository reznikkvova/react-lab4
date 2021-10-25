import React, {useState} from 'react';

const Login = ({checkLoggedIn}) => {
    const [userName, setUserName] = useState('');
    const [userPass, setUserPass] = useState('');
    const handleChangeUserNameValue = (event) => {
        setUserName(event.target.value);
    }
    const handleChangeUserPassValue = (event) => {
        setUserPass(event.target.value);
    }
    const handleFormAccept = () => {
        if (userName === 'Admin' && userPass === '12345') {
            localStorage.setItem('loggedIn', 'true');
        } else {
            alert('Incorrect username or password, try again')
        }
        checkLoggedIn();
    }
    const handleFormClear = () => {
        setUserName('');
        setUserPass('');
    }
    return (
        <div className="login">
            <div className="login-body">
                <div className="login-input_wrap">
                    <span>Username</span>
                    <input type="text" value={userName} onChange={handleChangeUserNameValue}/>
                </div>
                <div className="login-input_wrap">
                    <span>Password</span>
                    <input type="password" value={userPass} onChange={handleChangeUserPassValue}/>
                </div>
                <div className="login-buttons_wrap">
                    <div className="login-button" onClick={() => handleFormAccept()}>
                        Увійти
                    </div>
    
                    <div className="login-button" onClick={() => handleFormClear()}>
                        Очистити
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;