import { useContext, createContext, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const login = useMutation(
        {
            mutationFn: async (params) => {
                const response = await fetch(process.env.REACT_APP_LOGIN_URL, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(params)
                });

                if (!response.ok) {
                    throw new Error("Authentication failed, please check your request");
                }

                return response.json();
            },
            onSuccess: (data) => {
                console.log("Login successful", data);
                setUser(data.user);
                navigate("/");
            },
            onError: (error) => {
                console.error("Login unsuccessful:", error.message);
                alert("The email or password you entered is incorrect!")
            }
        }
    );

    return <AuthContext.Provider value={{ user, login }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
    return useContext(AuthContext);
}
