import { useAuth } from "../components/AuthProvider";

function Home() { 

    const auth = useAuth();

    console.log(JSON.stringify(auth.user));
    return (
        <h1>Homepage</h1>
    );
}

export default Home;