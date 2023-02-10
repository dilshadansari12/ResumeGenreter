import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { six } from "../../App";

const Projects = () => {
  const SIX = useContext(six)
  const prevref = useNavigate();
  const nextref = useNavigate();


  const [education, seteducation] = useState({
    sname: "",
    from: "",
    to: "",
    course: "",
    aboutcourse: ""
  })

  const myedu = (e) => {
    if (e.target.name === "sname") {
      seteducation({ sname: e.target.value })
    } else if (e.target.name === "from") {
      seteducation({ ...education, from: e.target.value })
    } else if (e.target.name == "to") {
      seteducation({ ...education, to: e.target.value })
    } else if (e.target.name === "aboutcourse") {
      seteducation({ ...education, aboutcourse: e.target.value })

    } else if (e.target.name === "course") {
      seteducation({ ...education, course: e.target.value })

    }
  }


  const Mysubmitedu = () => {
    SIX(education)
    nextref("/resumenumber1/Archivemenst")
  }


  return (
    <div >

      {/* <div className='bg-white w-full flex justify-center items-center' >
        <div className=' w-full flex justify-start  items-center flex-col exper'  >

          <div >
            <label htmlFor="Companey">High Schoole details</label>
            <input type="text" name="" id="Companey" placeholder='eg: Schoole name ' />
          </div>

          <div className='flex justify-start items-center flex-row mt-5 ' style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row" }} >
            <input type="number" name="" id="" placeholder='eg: 2018' style={{ width: "200px" }} className="ml-2 mr-2" />
            To
            <input type="number" name="" id="" placeholder='eg: 2022' style={{ width: "200px" }} className="ml-2 mr-2" />
          </div>

          <div className='w-full' >
            <label htmlFor="position">about </label>
            <input type="text" placeholder='eg:about jurney' />
          </div>
        </div>
      </div> */}


      <div className='bg-white w-full flex justify-center flex-col items-center pb-10' >
        <div className=' w-full flex justify-start  items-center flex-col exper'  >

          <div >
            <label htmlFor="Companey"> greguation details </label>
            <input type="text" name="sname" value={education.sname} onChange={myedu} id="Companey" placeholder='eg university name' />
          </div>

          <div className='flex justify-start items-center flex-row mt-5 ' style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row" }} >
            <input type="number" name="from" value={education.from} onChange={myedu} id="" placeholder='eg: 2018' style={{ width: "200px" }} className="ml-2 mr-2" />
            To
            <input type="number" name="to" value={education.to} onChange={myedu} id="" placeholder='eg: 2022' style={{ width: "200px" }} className="ml-2 mr-2" />
          </div>

          <div className='w-full' >

            <label htmlFor="position" >education course </label>
            <input type="text" name="course" value={education.course} onChange={myedu} placeholder='eg:course name' />

            <label htmlFor="position">about </label>
            <input type="text" name="aboutcourse" value={education.aboutcourse} onChange={myedu} placeholder='eg:about jurney' />
          </div>
        </div>


        <div className="flex justify-around items-center mt-5" >

          <button onClick={() => { prevref("/resumenumber1/WorkEx") }} className="button" style={{ width: "100px" }} > <i className="fa-solid fa-arrow-left"></i> prev </button>


          <button onClick={Mysubmitedu} className="button" style={{ width: "100px" }} >Next <i className="fa-solid fa-arrow-right"></i> </button>
        </div>
      </div>

    </div>
  )
}

export default Projects