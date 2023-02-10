import { Link } from "react-router-dom";
import ResumeForms from "../ResumeFomr/ResumeForms";
const ResumeTemCard = ({ img }) => {


    return (
        <>

            <Link to="/resumenumber1"   >
                <div style={{ width: "300px", height: "453px", position: "relative" }} className="Tdiv pb-6 pt-6 pl-2 pr-2" >
                    <img src={img} alt="Resume Demo" title="Select Template" className="Timg" />
                    <h1 className="overlay" >Select Template</h1>
                </div>
            </Link>
        </>
    )
}

export default ResumeTemCard;

