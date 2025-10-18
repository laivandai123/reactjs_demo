import VideoHomePage from "../../assets/video-homepage.mp4";
const Homepage = (props) => {
    return (
        <div>
            <video autoPlay muted loop>
                <source src={VideoHomePage} type="video/mp4" />
            </video>
        </div>
    );
};
export default Homepage;
