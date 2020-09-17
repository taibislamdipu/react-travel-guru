import React, { useContext } from 'react';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";
// Add the Firebase products that you want to use
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation()
    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {

        // Initialize Firebase
        // if (firebase.app.length === 0) {
        //     firebase.initializeApp(firebaseConfig);
        // }
        firebase.initializeApp(firebaseConfig);

        //Google sign-in provider
        var provider = new firebase.auth.GoogleAuthProvider();

        //Authenticate with Firebase using the Google provider object.
        firebase.auth().signInWithPopup(provider).then(function (result) {

            var { displayName, email } = result.user;
            const signedInUser = { name: displayName, email }
            setLoggedInUser(signedInUser);
            history.replace(from);

        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });


    }



    return (
        <div>
            <form >
                <input type="text" name="fname" placeholder="First Name" required />
                <br />
                <input type="text" name="lname" placeholder="Last Name" required />
                <br />
                <input type="email" name="email" placeholder="Username or Email" required />
                <br />
                <input type="password" name="password" placeholder="Password" required />
                <br />
                <input type="password" name="confirmPassword" placeholder="Confirm Password" required />
                <br />
                <input type="submit" value="Create an account" />
                {/* <input type="submit" value={ ? 'Sign up' : 'Sign in'} /> */}
            </form>
            <br />
            <button onClick={handleGoogleSignIn} className="btn btn-outline-dark ">Google Sign In</button>
            <br />
            <br />



            {
                <button>Sign in using Facebook</button>
            }
        </div>
    );
};

export default Login;
