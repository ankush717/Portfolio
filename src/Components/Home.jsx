import React from 'react';
import img1 from '../images/ank11.png';
import './Home.css';

const Home = () => {

    function DownloadFile(fileName) {
        //Set the File URL.
        var url = "Files/" + fileName;
  
        //Create XMLHTTP Request.
        var req = new XMLHttpRequest();
        req.open("GET", url, true);
        req.responseType = "blob";
        req.onload = function () {
            //Convert the Byte Data to BLOB object.
            var blob = new Blob([req.response], { type: "application/octetstream" });
  
            //Check the Browser type and download the File.
            var isIE = false || !!document.documentMode;
            if (isIE) {
                window.navigator.msSaveBlob(blob, fileName);
            } else {
                var url = window.URL || window.webkitURL;
                var link = url.createObjectURL(blob);
                var a = document.createElement("a");
                a.setAttribute("download", fileName);
                a.setAttribute("href", link);
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            }
        };
        req.send();
    };



    return (
        <>
            <div className="conatiner">

                <div className="row d-flex ">

                    <div className="col-sm-4  mx-auto">


                        <div className="row ">

                            <div className="col-sm-4  mx-auto">
                                <img src={img1} className="img-fluid rounded-circle"></img>
                            </div>

                        </div>

                        <div className="row mt-3 info">

                            <div className="col-sm-8 bgc mx-auto ">
                                <h1>Ankush Sonone</h1>
                                <h3>Full Stack Java Developer</h3>

                            </div>

                        </div>

                        <div className="row mt-3">

                            <div className="col-sm-8  mx-auto d-flex">

                                <div className="row d-flex">

                                    <div className="wrapper">
                                    <a href="https://www.facebook.com/login/" > 
                                     <div className="icon facebook">
                                      <div  className="tooltip" >Facebook</div> 
                                          <span><i className="fab fa-facebook-f" ></i>  </span>
                                        </div> </a>
                                                   
                                        <a href="https://github.com/ankush717" > 
                                        <div className="icon github">
                                            <div className="tooltip">Github</div>
                                            <span><i className="fab fa-github"></i></span>
                                        </div></a>
                                        <a href="https://www.linkedin.com/feed/?trk=homepage-basic_google-one-tap-submit" > 
                                        <div className="icon linkedin">
                                            <div className="tooltip">LinkedIn</div>
                                            <span><i className="fab fa-linkedin"></i></span>
                                        </div></a>
                                        <a href="https://www.youtube.com/channel/UC69rOXs5ekbBmPsV3h_ZSRA" > 
                                        <div className="icon youtube">
                                            <div className="tooltip">Youtube</div>
                                            <span><i className="fab fa-youtube"></i></span>
                                        </div></a>

                                    </div>
                                </div>

                            </div>

                        </div>


                        <div className="row mt-5 addr">

                            <div className="col-sm-8 bg-success mx-auto">

                                Location:Indore <br />
                                Email: ankush.sonone07@gmail.com <br />
                                Mobile:-7972422250 <br />
                            </div>

                        </div>

                        <div className="row mt-5">

                            <div className="col-sm-8 mx-auto">

                            <div className="row mt-5">


                            <div className="col-sm-6  mx-auto">
                                <button className="btn btn-warning" > <a
                                            href="mailto:ankush.sonone07@gmail.com" className="dec">Email me</a> </button>
                             
                            </div>

                            <div className="col-sm-6  mx-auto">
                                <button className="btn btn-primary"  onClick ={ ()=>{DownloadFile('resume-sample.pdf')} } > Download CV </button>

                                {/* onClick ={ ()=>{DownloadFile('Sample.pdf')} } */}


                                {/* <input type="button" onclick="DownloadFile('Sample.pdf')" /> */}

                            </div>

                            </div>

                            </div>

                        </div>




                    </div>
                    <div className="col-sm-1  ">


                    </div>

                    <div className="col-sm-7  mt-5 ml-3 ">

                        <h1> <u>About</u></h1>
                        <p>
                            Full stack java developer with
                            Strong problem solving and coding skills.
                            Excellent communication skills.
                            Extensive experience with Spring Framework.
                            Experience with JavaScript, CSS and HTML.
                            Experience with test driven development.
                        </p>

                        <h1> <u>What i am doing </u></h1>

                        <div className="row d-flex mt-5 ">

                            <div className="col-sm-5 bg-success info" >
                                <h4>Frontend Development</h4>
                                I can build a beautiful and scalable website using HTML, CSS and React js.
                            </div>
                            <div className="col-sm-2 bg-dark">

                            </div>
                            <div className="col-sm-5 bg-primary info">
                                <h4>Back end Development</h4>
                                handale databse server, api using Express and other populer Framework.

                            </div>



                            <div className="col-sm-5 bg-success mt-5 info" >
                                <h4>API Development</h4>
                                I can develop robust rest api.
                            </div>
                            <div className="col-sm-2 bg-dark mt-5">

                            </div>
                            <div className="col-sm-5 bg-primary mt-5 info">
                                <h4>Competative Coder</h4>
                                A daily problem solver in Hankcerrank and leetCode.

                            </div>

                            <div className="col-sm-5 bg-success mt-5 info" >
                                <h4>UI/UX Designer</h4>
                                Stunning  user interface Designer usign figma and adobe.
                            </div>
                            <div className="col-sm-2 bg-dark mt-5">

                            </div>
                            <div className="col-sm-5 bg-primary mt-5 info">
                                <h4>Microservices Writter</h4>
                               Biliding a microservices for a projects.
                            </div>

                        </div>


 

                        </div>  {/* COL EMD */}

                </div>        {/* ROW  EMD */}


                  

            </div>  {/* CONATINER  EMD */}

            
        </>
    )
}

export default Home;
