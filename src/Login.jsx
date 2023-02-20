import React, {useState}  from "react";

export const Login =(props) =>{
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    

    const handleSubmit = (e)=> {
        e.preventDefault();
        console.log(user);
        console.log(pass);
        console.log("creado");     
    }

    return(
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="user">Username</label>
                <input value={user} onChange={(e) => setUser(e.target.value)} type="text" placeholder="user" id="user" name="user"></input>
                <br></br>
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e)=> setPass.apply(e.target.value)} type="password" placeholder="********" id="password" name="password"></input>
                <br></br><button type="submit"> LogIn</button>
            </form>
            
            
        </>
    )
}