import React from 'react';
import img1 from '../images/cv.png';

import './Resume.css';


const Resume = () => {
    return (
        <>



            <div class="container">

                <div class="row d-flex">

                    <div class="col-sm-6 mt-5">

                        <img src={img1} ></img>

                    </div>

                    <div class="col-sm-6 ">

                        <h1 className="Green" ><u>Education</u></h1>

                        <h3 className="text-white"> Completed master in computer science (2020)</h3>

                        <h1 className="Green"><u>Experience</u></h1>

                        <h3 className="text-white"> 3 year experince in international bpo and technical support process with teleperformance </h3>

                        <h1 className="Green"> <u>Internship</u></h1>

                        <h3 className="text-white"> Doing 1 year full stack java developer internship with programmer point</h3>

                        <h1 className="Green"> <u>Strength</u></h1>

                        <h3 className="text-white"> I am team player with good communication skills with a positive attitude</h3>

                        <h1 className="Green"> <u>Weekness</u></h1>

                        <h3 className="text-white"> Shyness</h3>

                    </div>

                </div>


            </div>


        </>
    )
}

export default Resume;
