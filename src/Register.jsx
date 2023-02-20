import React, { useState } from "react";

export const Register =() =>{
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName]= useState('');

    const handleSubmit = (e)=> {
        e.preventDefault();
        console.log(email);
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Full-Name</label>
                <input value={name}  placeholder="fullname" id="name" name="name"></input><br></br>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremai@.com" id="email" name="email"></input>
                <br></br>
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e)=> setPass.apply(e.target.value)} type="password" placeholder="********" id="password" name="password"></input>
                <br></br><button type="submit"> LogIn</button>
            </form>
            <button>Ya tienes una cuenta? Ingresa</button>
        </>
    )
}