import './Profile.css'

function Profile({username, email}) {
    return (
        <>
            <main className="profile-card">
                <h3>Profile</h3>
                <div>
                    <p>Username: {username}</p>
                    <p>Email address: {email}</p>
                </div>
            </main>
            <section className="favourite-section">
                <h2>Favourites</h2>
                <p>These are your favourite recipes!</p>
            </section>
        </>
    )
}

export default Profile;