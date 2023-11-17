// import axios from "axios";
// import {useContext} from "react";
// import {AuthContext} from "../../context/AuthContext.jsx";

function ProfilePage() {

    // const {userId} = useContext(AuthContext);
    //
    // async function fetchUser() {
    //     try {
    //         const response = await axios.get(`https://frontend-educational-backend.herokuapp.com/api/${userId}`)
    //     console.log(response);
    //     } catch(e) {
    //         console.error(e);
    //     }
    // }


    return (
        <>
            <h3>Profile</h3>
            <div>
                <p>Username</p>
                <p>Email address</p>
            </div>
            <h2>Favourites</h2>
            <p>These are your favourite recipes!</p>
        </>
    )
}

export default ProfilePage;