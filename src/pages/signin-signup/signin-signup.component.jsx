import React from 'react';

import SignIn from '../../components/signin/signin.component';
import SignUp from '../../components/signup/signup.component';

import './signin-signup.styles.scss';

const SignInAndSignUpPage = () => (
    <div className="signin-signup">
        <SignIn />
        <SignUp />
    </div>
);

export default SignInAndSignUpPage;