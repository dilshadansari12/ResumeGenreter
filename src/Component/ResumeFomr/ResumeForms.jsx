import BasicInfo from "./BasicInfo";
import { Link, Outlet, Switch } from "react-router-dom";

const ResumeForms = () => {
  const linkcolor = ["#239ce2", "#48bb78", "#ed8955", "#ed8936"];


  return (
    <section style={{ background: " linear-gradient(125deg, rgba(175,208,254,1) 29%, rgba(234,221,243,1) 58%)", minHeight: "90vh", fontFamily: "sans-serif" }} >
      <h1 className='text-center  font-mono text-3xl pt-5 pb-5' >Resume Editer</h1>
      <div className='flex items-center justify-around ' >
        <div className="flex  justify-center items-center ">
          {linkcolor.map((el, key) => {
            return (
              <button key={key} className='w-10 h-10 rounded-full ml-3' onClick={() => { alert(el) }} style={{ background: el }} ></button>
            )
          })}
        </div>
        <Link to="/orgresume" className='button w-32' >Download <i className="fa-solid fa-down-long"></i> </Link>
      </div>
      <div className="border w-full flex justify-around items-center mt-5 pt-5 pb-5 xyzz"
        style={{ width: "50%", transform: " translateX(50%)" }}>
        <Link to="basicinfo"  >Basic Info</Link>
        <Link to="WorkEx"  >Work Experience</Link>
        <Link to="Projects"  >Eduation</Link>
        <Link to="Archivemenst"  >Skills</Link>
      </div>
      <div className="border" style={{ width: "50%", marginLeft: "50%", transform: "translateX(-50%)" }}  >
        <Outlet />
      </div>
    </section>
  )
}

export default ResumeForms;