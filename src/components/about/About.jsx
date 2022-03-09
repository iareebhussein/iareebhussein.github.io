import "./About.css";
import Cool from "../../img/coolbg.png";
import Award from '../../img/designaward.jpg';

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={Cool} alt="" className="a-img" />
                    </div>
                </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">lorem ipsum dolor sit amet. lorem ipsum dolor sit amet</p>
                <p className="a-desc">
                    lorem ipsum dolor sit amet, lorem ipsum dolor sit amet,lorem ipsum dolor sit amet,lorem ipsum dolor sit amet,lorem ipsum dolor sit amet,
                    </p>
                <div className="a-award">
                    <img src={Award} alt="" className="a-award-img" />
                    <div className="a-award-texts">
                    <h4 className="a-award-title">International Design Award 2022</h4>
                    <p className="a-award-desc">Nemo enim ipsam volaptatem Nemo enim ipsam volaptatem Nemo enim ipsam volaptatem</p>    
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default About