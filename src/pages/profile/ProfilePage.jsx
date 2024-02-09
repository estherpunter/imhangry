import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {AuthContext} from "../../context/AuthContext.jsx";

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
                const response = await axios.get("https://frontend-educational-backend.herokuapp.com/api/user", {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    }
                });
                setUserData(response.data);
            } catch (e) {
                console.error(e);
                toggleError(true);
            } finally {
                toggleLoading(false);
            }
        }

        void fetchUserData();

    }, [user]);

    return (
        <>
            <main>
                <h3>Profile</h3>
                <div>
                    <p>Username: {userData.username}</p>
                    <p>Email address: {userData.email}</p>
                </div>
            </main>
            <section>
                <h2>Favourites</h2>
                <p>These are your favourite recipes!</p>
            </section>

            {error && <p className="error">Something went wrong with loading the page</p>}
            {loading && <p className="loading">Loading...</p>}

        </>
    )
}

export default ProfilePage;