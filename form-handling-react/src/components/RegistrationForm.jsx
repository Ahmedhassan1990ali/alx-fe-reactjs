import { useState } from "react";

const RegistrationForm = () =>{
    const [username,setUserName] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const [errors,setErrors] = useState([])

    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!username){setErrors(...errors,"username needed")}
        if (!email)   {setErrors(...errors,"email needed")}
        if (!password){setErrors(...errors,"password needed")}
    }

    const handleChangeUsername = (e) => {
        const { value } = e.target;
        setUserName(value);
    };
    const handleChangeEmail = (e) => {
        const { value } = e.target;
        setEmail(value);
    };
    const handleChangePassword = (e) => {
        const { value } = e.target;
        setPassword(value);
    };



    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={username} onChange={handleChangeUsername}/><br />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={handleChangeEmail}/><br />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={handleChangePassword}/><br />

        </form>
    )
}

export default RegistrationForm