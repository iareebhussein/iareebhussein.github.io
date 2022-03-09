import "./Intro.css";
import Me from "../../img/me.png";

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className='i-intro'>Hello, my name is</h2>
                    <h1 className='i-name'>Areeb Hussein</h1>
                    <div className="i-title">
                       <div className="i-title-wrapper">
                           <div className="i-title-item">Web Developer</div>
                           <div className="i-title-item">UI/UX Designer</div>
                           <div className="i-title-item">Photographer</div>
                           <div className="i-title-item">Writer</div>
                           <div className="i-title-item">Content Creator</div>
                           </div> 
                        </div>
                        <p className="i-desc">
                            i design and develop services for customers of all sizes,
                            specializing in creating stylish, modern websites, web services and online stores.
                            </p>
                    </div>
                    <svg 
                    className="i-scroll" 
                    xmlns="http://www.w3.org/2000/svg"
                    width="75" 
                    height="75"
                    stroke="black" 
                    viewBox="-285 377 40 40">
	    <g id="scroll">
		<g>
			<path class="st0" d="M-265,388.1c-0.9,0-1.6,0.7-1.6,1.6v4.1c0,0.9,0.7,1.6,1.6,1.6s1.6-0.7,1.6-1.6v-4.1
                C-263.4,388.8-264.1,388.1-265,388.1" />
		</g>
	</g>
	<g id="wheel">
		<g>
			<path class="st0" d="M-264,378.2h-1.9c-6.2,0.5-10.9,5.5-10.9,11.6v14.3c0,6.5,5.3,11.7,11.8,11.7
                s11.8-5.3,11.8-11.7v-14.3C-253.1,383.7-257.9,378.7-264,378.2z M-255.1,404.2c0,5.4-4.4,9.8-9.9,9.8c-5.4,0-9.9-4.4-9.9-9.8
                v-14.4c0-5.4,4.5-9.8,9.9-9.8s9.9,4.4,9.9,9.8V404.2z" />
		</g>
	</g>
</svg>
                </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Me} alt="" className="i-img" /></div>
        </div>
    ) 
}

export default Intro