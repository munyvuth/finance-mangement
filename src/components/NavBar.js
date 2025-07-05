import { Outlet, Link } from "react-router-dom";

function NavBar() {
    return (
        <>
            <div className="w-full h-[10vh] bg-[#E68FDE] relative font-mono">
                <Link to="/">
                    <h1 className="text-white lg:text-2xl text-md absolute top-1/2 -translate-y-1/2 px-[2vw]">Fernandez Finance</h1>

                </Link>
                <Link to="/sign-in">
                    <button className="absolute bg-white px-[1vw] py-[1vh] lg:text-md  text-sm rounded-lg text-[#E68FDE] font-bold top-1/2 -translate-y-1/2 right-[2vw]">Sign In</button>
                </Link>
            </div>

            <Outlet />
        </>
    );
}

export default NavBar;