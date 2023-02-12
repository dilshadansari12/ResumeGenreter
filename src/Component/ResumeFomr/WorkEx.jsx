import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Four } from "../../App";

const WorkEx = () => {
  const SETWORKEX = useContext(Four);
  const prevref = useNavigate();
  const NextRef = useNavigate();
  const [workex, setworkex] = useState({
    companyname: "",
    from: "",
    to: "",
    position: "",
    aboutwork: ""

  })




  const Mysubmitework = () => {
    SETWORKEX(workex);
    NextRef("/resumenumber1/Projects")
  }

  const mywork = (e) => {
    if (e.target.name === "companyname") {
      setworkex({ companyname: e.target.value })
    } else if (e.target.name === "from") {
      setworkex({ ...workex, from: e.target.value })
    } else if (e.target.name === "to") {
      setworkex({ ...workex, to: e.target.value })
    } else if (e.target.name === "position") {
      setworkex({ ...workex, position: e.target.value })
    } else if (e.target.name === "aboutwork") {
      setworkex({ ...workex, aboutwork: e.target.value })

    }
  }

  return (
    <div className='bg-white w-full flex justify-center items-center flex-col' >
      <div className=' w-full flex justify-start  items-center flex-col exper'  >

        <div >
          <label htmlFor="Companey">Companey Name</label>
          <input type="text" name="companyname" value={workex.companyname} onChange={mywork} id="Companey" placeholder='eg amazon , tesla' />
        </div>

        <div className='flex justify-start items-center flex-row mt-5 ' style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row" }} >
          <input type="number" name="from" value={workex.from} onChange={mywork} id="" placeholder='eg: 2018' style={{ width: "200px" }} className="ml-2 mr-2" />
          To
          <input type="number" name="to" value={workex.to} onChange={mywork} id="" placeholder='eg: 2022' style={{ width: "200px" }} className="ml-2 mr-2" />
        </div>

        <div className='w-full' >
          <label htmlFor="position">Position</label>
          <input type="text" placeholder='eg:Front-End Developer' />
        </div>

        <div>
          <label htmlFor="beref">About Experience</label>
          <textarea placeholder='eg:Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique commodi placeat quibusdam magnam sapiente quos facere doloremque! In, animi assumenda!' style={{ width: "80%", height: "100px", border: "2px solid rgb(116, 116, 222)" }} className="p-2 mb-10" name="aboutwork" value={workex.aboutwork} onChange={mywork} ></textarea>
        </div>

      </div>

      <div className="flex justify-around items-center " >

        {/* <button onClick={() => { prevref("/resumenumber1/basicinfo") }} className="button" style={{ width: "100px" }} > <i className="fa-solid fa-arrow-left"></i> prev </button> */}


        <button onClick={Mysubmitework} className="button" style={{ width: "100px" }} >Next <i className="fa-solid fa-arrow-right"></i> </button>
      </div>
    </div>
  )
}


export default WorkEx;