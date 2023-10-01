import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../firebase/firebase.init';
import { useState } from 'react';

const Login = () => {

    const [user, setUser] = useState(null)

    const auth = getAuth(app);
    // console.log(app)
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider()

    const handleGoogleSignIn = () => {
        // console.log('google mama is coming')
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const logInUser = result.user;
                console.log(logInUser)
                setUser(logInUser)
            })
            .catch(error => {
                console.log('error', error.message)
            })
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result)
                setUser(null)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleGitHubSignIn = () =>{
        

        signInWithPopup(auth, gitHubProvider)
        .then(result => {
            const loggedUser = result.user
            console.log(loggedUser)
            setUser(loggedUser)
        })
        .catch(error => {
            console.log(error)
        })
        // console.log(user)
    }


    return (
        <div>
            {/*  user ? logout : sign in */}
            {   user ?         <button onClick={handleSignOut}>Sign Out</button> :
            <>
                <button onClick={handleGoogleSignIn}>Google Login</button>
                <button onClick={handleGitHubSignIn}>GitHub Login</button>
            </>
            }
            {user && <div>
                <h3>User: {user.displayName}</h3>
                <p>Email : {user.email}</p>
                <img src={user.photoURL} alt="" />
            </div>
            }
        </div>
    );
};

export default Login;