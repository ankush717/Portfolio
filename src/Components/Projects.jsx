import React from 'react';
import './Resume.css';
import img1 from '../images/p1.png';
import img2 from '../images/p4.png';
import img3 from '../images/p7.png';
import img4 from '../images/p11.png';
import img5 from '../images/p12.png';
import img6 from '../images/p9.png';
import img7 from '../images/p1.png';
import img8 from '../images/p1.png';
import img9 from '../images/p1.png';

const Projects = () => {
    return (
        <>

            <div className="conatiner">

                <div className="row">

                    <div className="col-sm-4  ">

                        <h1>Portfolio </h1>
                        <a href="https://prateekdoliya.netlify.app/" >
                            <img src={img1} ></img>
                        </a>

                    </div>


                    <div className="col-sm-4  ">

                        <h1>Resume maker </h1>
                        <img src={img2} ></img>
                    </div>
                    <div className="col-sm-4 ">
                        <h1>Study tutorial </h1>
                        <img src={img3} ></img>
                    </div>

                </div>


                <div className="row">

                    <div className="col-sm-4  ">

                        <h1>Gym website </h1>
                        <img src={img4} ></img>
                    </div>


                    <div className="col-sm-4  ">

                        <h1>State city drop down </h1>
                        <img src={img5} ></img>
                    </div>
                    <div className="col-sm-4  ">
                        <h1>Ecommerce shopmart</h1>
                        <img src={img6} ></img>
                    </div>

                </div>


                {/* <div className="row">

                    <div className="col-sm-4 bg-success ">

                        <h1>left</h1>
                        <img src={img7} ></img>

                    </div>
                    
                    <div className="col-sm-4 bg-danger ">

                        <h1>center</h1>
                        <img src={img8} ></img>
                    </div>
                    <div className="col-sm-4 bg-warning ">
                        <h1>right</h1>
                        <img src={img9} ></img>
                    </div>

                </div> */}

            </div>


        </>
    )
}

export default Projects;
