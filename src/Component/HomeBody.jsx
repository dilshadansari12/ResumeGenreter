import { useContext } from "react";
import { Link } from "react-router-dom";
import { Nine } from "../App";


const HomeBody = () => {
    const Nines = useContext(Nine)
    return (

        <section className=" w-screen" style={{ background: " linear-gradient(125deg, rgba(175,208,254,1) 29%, rgba(234,221,243,1) 58%)", height: "90vh", fontFamily: "sans-serif" }}  >

            <h1 className=" text-center text-xl md:text-4xl pt-8" style={{ lineHeight: "58px", fontWeight: "600", color: "#313b47" }} >The online
                <span style={{ color: "#0d70ea" }} > Resume </span>  builder getting folks  <span style={{ color: "#0d70ea" }} >hired</span> by <br />BBC, Google, Apple, Tesla, and Airbnb.
            </h1>

            <div className="flex justify-center items-top ">
                <img src="img/spg1.svg" className="mt-5" alt="resume svg" width="30%" />
            </div>

            <Link to={Nines ? "/resumetemplate" : "/login"} className="button1" style={{ marginLeft: "50%", transform: "translateX(-50%)", marginTop: "40px" }}  >Get Started Now &gt;</Link>

        </section>)
}

export default HomeBody;


