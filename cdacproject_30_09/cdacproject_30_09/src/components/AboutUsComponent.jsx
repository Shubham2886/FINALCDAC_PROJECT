import React from 'react';

const About = () => {

    return (
        <div>
            {/* <NavBar/> */}
            <div className="container">
                <div className="py-4">
                    <h2>About Us</h2>
                    <br></br>
                    <p>
                        <marquee width="60%" direction="right" height="100px">
                            <h3>
                                welcome to our Book4U website
                            </h3>
                        </marquee>
                    </p>
                    <p>
                        This is the online platform where book readers can get books for exchange.
                        Also users can posts their books for the same.
                    </p>
                </div >
                <div> <p>Contact us :</p>
                    <p>email : Book4U@gmail.com</p>
                    <p>contact person : Mr.Sujit Khirsagar</p>
                    <p>conatct no. :7038669393</p>
                 </div>

            </div>



        </div>



    );
};

export default About;

