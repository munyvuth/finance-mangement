
function SignUp() {
    return (
        <form className="bg-[#E68FDE] lg:w-1/4 w-1/3 h-[65vh] rounded-3xl m-auto align-middle mt-[10vh]">
            <h1 className="text-white text-bold lg:text-2xl text-sm text-center pt-[5vh]">Create a new account</h1>
            <div className="w-3/4 m-auto lg:mt-[3vh] mt-[1vh]">
                <label className="lg:text-md text-white block my-1" for="firstname">First Name</label>
                <input className="w-full h-[4vh] rounded-md text-[#E68FDE] font-bold p-2" id="firstname"></input>
            </div>
            <div className="w-3/4 m-auto lg:mt-[3vh] mt-[1vh]">
                <label className="lg:text-md text-white block my-1" for="lastname">Last Name</label>
                <input type="password" className="w-full h-[4vh] rounded-md text-[#E68FDE] font-bold p-2" id="lastname"></input>
            </div>
            <div className="w-3/4 m-auto lg:mt-[3vh] mt-[1vh]">
                <label className="lg:text-md text-white block my-1" for="email">Email</label>
                <input className="w-full h-[4vh] rounded-md text-[#E68FDE] font-bold p-2" id="email"></input>
            </div>
            <div className="w-3/4 m-auto lg:mt-[3vh] mt-[1vh]">
                <label className="lg:text-md text-white block my-1" for="password">Password</label>
                <input type="password" className="w-full h-[4vh] rounded-md text-[#E68FDE] font-bold p-2" id="password"></input>
            </div>
            <button className="block m-auto bg-white text-[#E68FDE] py-[1vh] px-[1.5vw] rounded-xl lg:mt-[5vh] mt-[2vh] hover:bg-[#FFE6FD]" type="submit">Sign Up</button>
        </form>
    );
}

export default SignUp;