import "./learn.css"
import BasicButtons from './LearnButton'
import 'animate.css';
const LearnTemplate = (props) => {
    return (
        <div>
            <div className={`learn-container-background-${props.background}`}>
                <div className={`"overlay" ${props.overlay}`}>
                    <div className="learn-container">
                        <div className={`learn-img-container-${props.img}`}>
                            <div className={`img-overlay-${props.overlay2}`}></div>
                            <h4>intermidate advance </h4>
                            <h1>
                                {props.title1} <br /> {props.title2}
                                <br /> {props.title3}
                            </h1>
                            <div className="paragraph-section">
                                <h4>hypertrophy program</h4>
                            </div>
                        </div>
                        <div className="button-header ">
                            <h1>
                                Buy one <br /> and get
                                <span style={{ color: "orange" }}> one free</span>
                            </h1>
                            <div className="addtocartbutton">
                                <BasicButtons />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section2-container">
                <h3>
                    Jeff Nippard’s Push Pull Legs Program is designed for intermediate to
                    advanced lifters looking to take their muscle and strength goals to
                    the next level
                </h3>
                <h1 style={{ color: "orange" }}>
                    WHY IS THIS PROGRAM BETTER THAN OTHER <br /> PUSH PULL LEGS PROGRAMS?
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam natus
                    voluptas doloribus. Voluptatum libero modi rem veritatis possimus
                    laboriosam, veniam non ducimus, voluptatibus quibusdam expedita in
                    repellendus praesentium pariatur culpa.
                </p>
            </div>
        </div>
    )
}

export default LearnTemplate