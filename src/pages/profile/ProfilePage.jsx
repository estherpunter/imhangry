import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {AuthContext} from "../../context/AuthContext.jsx";
import {jwtDecode} from "jwt-decode";

function ProfilePage() {

    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [userData, setUserData] = useState({});

    const {user} = useContext(AuthContext)

    useEffect(() => {
        async function fetchUserData() {
            toggleError(false);
            toggleLoading(true);

            const token = localStorage.getItem('token');

            try {
                const response = await axios.get(`https://frontend-educational-backend.herokuapp.com/api/${user}`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    }
                });
                console.log(response);
            } catch (e) {
                console.error(e);
                toggleError(true);
            }
        }

        void fetchUserData();

    }, []);

    return (
        <>
            <main>
                <h3>Profile</h3>
                <div>
                    <p>Username</p>
                    <p>Email address</p>
                </div>
            </main>
            <section>
                <h2>Favourites</h2>
                <p>These are your favourite recipes!</p>
            </section>
        </>
    )
}

export default ProfilePage;