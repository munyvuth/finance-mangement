
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";


function SignUp() {

    const [firstName, updateFirstName] = useState("");
    const [lastName, updateLastName] = useState("");
    const [email, updateEmail] = useState("");
    const [password, updatePassword] = useState("");

    const register = useMutation({
        mutationFn: async (params) => {
            const result = await fetch(process.env.REACT_APP_REGISTER_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(params)
            });

            if (!result.ok) { 
                throw new Error("Unable to register new user");
            }

            return result.json();
        },
        onSuccess: (result) => {
            console.log("Successful registration!", result);
            window.location.href = "/";
        },
        onError: (result) => {
            console.error("Registration failed", result.message);
            alert("Email address must be unique, try signing in if you are already registered!")
        }
    })

    const handleRegistration = (event) => {
        event.preventDefault();
        const params = {
            "firstName": firstName, 
            "lastName": lastName, 
            "email": email, 
            "password": password
        }
        register.mutate(params);
    }

    return (
        <form className="bg-[#E68FDE] lg:w-1/4 w-1/3 h-[65vh] rounded-3xl m-auto align-middle mt-[10vh]" onSubmit={handleRegistration}>
            <h1 className="text-white text-bold lg:text-2xl text-sm text-center pt-[5vh]">Create a new account</h1>
            <div className="w-3/4 m-auto lg:mt-[3vh] mt-[1vh]">
                <label className="lg:text-md text-white block my-1" for="firstname">First Name</label>
                <input required className="w-full h-[4vh] rounded-md text-[#E68FDE] font-bold p-2" id="firstname" value={firstName} onChange={(event) => {
                    updateFirstName(event.target.value);
                }}></input>
            </div>
            <div className="w-3/4 m-auto lg:mt-[3vh] mt-[1vh]">
                <label className="lg:text-md text-white block my-1" for="lastname">Last Name</label>
                <input required className="w-full h-[4vh] rounded-md text-[#E68FDE] font-bold p-2" id="lastname" value={lastName} onChange={(event) => {
                    updateLastName(event.target.value);
                }}></input>
            </div>
            <div className="w-3/4 m-auto lg:mt-[3vh] mt-[1vh]">
                <label className="lg:text-md text-white block my-1" for="email">Email</label>
                <input required type="email" className="w-full h-[4vh] rounded-md text-[#E68FDE] font-bold p-2" id="email" value={email} onChange={(event) => {
                    updateEmail(event.target.value);
                }}></input>
            </div>
            <div className="w-3/4 m-auto lg:mt-[3vh] mt-[1vh]">
                <label className="lg:text-md text-white block my-1" for="password">Password</label>
                <input required type="password" className="w-full h-[4vh] rounded-md text-[#E68FDE] font-bold p-2" id="password" value={password} onChange={(event) => {
                    updatePassword(event.target.value);
                }}></input>
            </div>
            <button className="block m-auto bg-white text-[#E68FDE] py-[1vh] px-[1.5vw] rounded-xl lg:mt-[5vh] mt-[2vh] hover:bg-[#FFE6FD]" type="submit">Sign Up</button>
        </form>
    );
}

export default SignUp;