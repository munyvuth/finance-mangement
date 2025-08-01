import { Link } from "react-router-dom";


function SignIn() {
    return (
        <form className="bg-[#E68FDE] lg:w-1/4 w-1/3 h-[60vh] rounded-3xl m-auto align-middle mt-[10vh]">
            <h1 className="text-white text-bold lg:text-2xl text-sm text-center pt-[5vh]">Track your Finances!</h1>
            <div className="w-3/4 m-auto lg:mt-[4vh] mt-[1vh]">
                <label className="lg:text-md text-white block my-1" for="email">Email</label>
                <input className="w-full h-[4vh] rounded-md text-[#E68FDE] font-bold p-2" id="email"></input>
            </div>
            <div className="w-3/4 m-auto lg:mt-[3vh] mt-[1vh]">
                <label className="lg:text-md text-white block my-1" for="password">Password</label>
                <input type="password" className="w-full h-[4vh] rounded-md text-[#E68FDE] font-bold p-2" id="password"></input>
            </div>
            <button className="block m-auto bg-white text-[#E68FDE] py-[1vh] px-[1.5vw] rounded-xl lg:mt-[6vh] mt-[2vh] hover:bg-[#FFE6FD]" type="submit">Sign in</button>
            <Link to="/sign-up" className="block text-white text-center lg:text-xl text-md lg:mt-[6vh] mt-[2vh] underline">
                Create a new account
            </Link>
        </form>
    );
}

export default SignIn;