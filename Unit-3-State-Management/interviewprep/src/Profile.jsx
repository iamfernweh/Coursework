

function Profile({ bioText, imgUrl }) {
    return (
        <>
            <section>
                <h1>Profile</h1>
                <p>{bioText}</p>
                <img src={imgUrl}></img>
            </section>
        </>
    );
}

export default Profile;