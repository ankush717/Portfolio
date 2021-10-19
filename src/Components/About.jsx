import React from 'react'
import './About.css';
import img1 from '../images/skl.png'; 
const About = () => {
    return (
        <>

            {/* <h1 className="bg-success">My  skills are</h1> */}


            <div className="Container1">

                <div className="row d-flex">

                    <div className="col-sm-4 my-5">

                        <img src={img1} ></img>

                    </div>


                    <div className="col-sm-8 mt-5 ml-2">

                        <div className="row d-flex">

                            <div className="col-sm-6 ">
                               <h1 className="">My Skils Are </h1>
                                <div class="container1 mt-5 ">
                                
                                    <div class="card1">
                                        <div class="box1">
                                            <div class="percent1">
                                                <svg>
                                                    <circle cx="70" cy="70" r="70"></circle>
                                                    <circle cx="70" cy="70" r="70"></circle>
                                                </svg>
                                                <div class="number1">
                                                    <h2>90<span>%</span></h2>
                                                </div>
                                            </div>
                                            <h2 class="text1">FrontEnd</h2>
                                        </div>
                                    </div>
                                    <div class="card1">
                                        <div class="box1">
                                            <div class="percent1">
                                                <svg>
                                                    <circle cx="70" cy="70" r="70"></circle>
                                                    <circle cx="70" cy="70" r="70"></circle>
                                                </svg>
                                                <div class="number1">
                                                    <h2>85<span>%</span></h2>
                                                </div>
                                            </div>
                                            <h2 class="text1">Backemd</h2>
                                        </div>
                                    </div>
                                    <div class="card1">
                                        <div class="box1">
                                            <div class="percent1">
                                                <svg>
                                                    <circle cx="70" cy="70" r="70"></circle>
                                                    <circle cx="70" cy="70" r="70"></circle>
                                                </svg>
                                                <div class="number1">
                                                    <h2>75<span>%</span></h2>
                                                </div>
                                            </div>
                                            <h2 class="text1">Database</h2>
                                        </div>
                                    </div>

                                    <div class="card1">
                                        <div class="box1">
                                            <div class="percent1">
                                                <svg>
                                                    <circle cx="70" cy="70" r="70"></circle>
                                                    <circle cx="70" cy="70" r="70"></circle>
                                                </svg>
                                                <div class="number1">
                                                    <h2>88<span>%</span></h2>
                                                </div>
                                            </div>
                                            <h2 class="text1">Git  Github</h2>
                                        </div>
                                    </div>

                                    <div class="card1">
                                        <div class="box1">
                                            <div class="percent1">
                                                <svg>
                                                    <circle cx="70" cy="70" r="70"></circle>
                                                    <circle cx="70" cy="70" r="70"></circle>
                                                </svg>
                                                <div class="number1">
                                                    <h2>82<span>%</span></h2>
                                                </div>
                                            </div>
                                            <h2 class="text1">Rest Api</h2>
                                        </div>
                                    </div>


                                    <div class="card1">
                                        <div class="box1">
                                            <div class="percent1">
                                                <svg>
                                                    <circle cx="70" cy="70" r="70"></circle>
                                                    <circle cx="70" cy="70" r="70"></circle>
                                                </svg>
                                                <div class="number1">
                                                    <h2>78<span>%</span></h2>
                                                </div>
                                            </div>
                                            <h2 class="text1">MicroServices</h2>
                                        </div>
                                    </div>



                                </div>



                                

                            </div>


                            <div className="row">

<div className="col-sm-12 mt-3">

  <h1> Skills on some Important tools</h1>




  <h3> Maven</h3>
  <div className="progress">
  <div className="progress-bar progress-bar-striped bg-success st" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
 </div>


 <h3> Docker</h3>
  <div className="progress">
  <div className="progress-bar progress-bar-striped bg-danger st1" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
 </div>

 <h3> Kubernetes</h3>
  <div className="progress">
  <div className="progress-bar progress-bar-striped bg-primary st2" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
 </div>



</div>






</div>
                           



                        </div>


                    </div>

                </div>

            </div>

        </>
    )
}

export default About;
