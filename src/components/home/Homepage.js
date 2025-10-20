import VideoHomePage from "../../assets/video-homepage.mp4";
const Homepage = (props) => {
    return (
        <div className="homepage-container">
            <video autoPlay muted loop>
                <source src={VideoHomePage} type="video/mp4" />
            </video>
            <div className="homepage-content">
                <div className="homepage-heading">
                    There's a better way to ask
                </div>
                <div className="homepage-title">
                    You don't want to make a boring form. And your audience
                    won't answerone. Create a typeform instead-andmake everyone
                    happy.
                </div>
                <div>
                    <button className="homepage-btn">
                        Get's started. It's free
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Homepage;
