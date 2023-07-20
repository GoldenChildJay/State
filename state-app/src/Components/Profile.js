

const Profile = (props) => {

    const { imgSrc, fullName, profession, bio } = props.person; //data is passed as props to person

            return (
                <div className="center">

                        <div className="avatar" >
                        {imgSrc} =  <img src={require("../images/Johnson.jpg")} style={{height: "150px", width: "150px"}} alt="img" />
                        </div>
                        
                    <div className="content" style={{ padding: "20px" }}>

                        <h1 style={{ color: "#7a5757" }}>{fullName}</h1>

                        <h2 style={{ color: "#7a5757" }}>{profession}</h2>

                        <p style={{ color: "#808000" }}>{bio}</p>
                    </div>
                </div>
            );
};
export default Profile;