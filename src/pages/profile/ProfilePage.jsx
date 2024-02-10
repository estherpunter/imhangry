import './ProfilePage.css';
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContext.jsx";
import Profile from "../../components/profile/Profile.jsx";

function ProfilePage() {
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    const {isAuthenticated, user} = useContext(AuthContext)

    useEffect(() => {
        async function fetchUserData() {
            if (isAuthenticated) {
                toggleError(false);
                toggleLoading(true);
            }
            try {
                console.log("User data: ", user);
            } catch (e) {
                console.error(e);
                toggleError(true);
            } finally {
                toggleLoading(false);
            }
        }

        void fetchUserData();

    }, [isAuthenticated, user]);

    return (
        <div className="profile-page-container">
            {isAuthenticated ? (
                <Profile
                    username={user.username}
                    email={user.email}
                />
            ) : (
                <p>Please log in to view your profile.</p>
            )}

            {error && <p className="error">Something went wrong with loading the page</p>}
            {loading && <p className="loading">Loading...</p>}
        </div>
    )
}

export default ProfilePage;