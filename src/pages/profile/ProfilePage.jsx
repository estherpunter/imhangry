import './ProfilePage.css';
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {AuthContext} from "../../context/AuthContext.jsx";
import Profile from "../../components/profile/Profile.jsx";

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
        <div className="profile-page">
            <Profile
                username={userData.username}
                email={userData.email}
            />

            {error && <p className="error">Something went wrong with loading the page</p>}
            {loading && <p className="loading">Loading...</p>}
        </div>
    )
}

export default ProfilePage;