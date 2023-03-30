import React, {
  useState,
  useRef,
  useEffect,
  useContext,
  useReducer,
} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import Input from '../UI/Input/Input';

const emailReducer = (state, action) => {
  if (action.type === 'EMAIL_INPUT') {
    return {
      value: action.val,
      isValid: action.val.includes('@'),
    };
  }

  if (action.type === 'EMAIL_BLUR') {
    return {
      value: state.value,
      isValid: state.value.includes('@'),
    };
  }

  return {
    value: '',
    isValid: false,
  };
};

const passwordReducer = (state, action) => {
  if (action.type === 'PASSWORD_INPUT') {
    return {
      value: action.val,
      isValid: action.val.trim().length > 6,
    };
  }

  if (action.type === 'PASSWORD_BLUR') {
    return {
      value: state.value,
      isValid: state.value.trim().length > 6,
    };
  }

  return {
    value: '',
    isValid: false,
  };
};

const Login = () => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null,
  });

  const ctx = useContext(AuthContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispatchEmail({ type: 'EMAIL_INPUT', val: event.target.value });

    // setFormIsValid(event.target.value.includes('@') && passwordState.isValid);
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword({ type: 'PASSWORD_INPUT', val: event.target.value });

    // setFormIsValid(event.target.value.trim().length > 6 && emailState.isValid);
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.isValid);

    dispatchEmail({ type: 'EMAIL_BLUR' });
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);

    dispatchPassword({ type: 'PASSWORD_BLUR' });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (formIsValid) {
      ctx.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('User form validity input');
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      console.log('clean up');
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          type="email"
          id="email"
          label="E-mail"
          isValid={emailIsValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />

        <Input
          ref={passwordInputRef}
          type="password"
          id="password"
          label="Password"
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />

        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
