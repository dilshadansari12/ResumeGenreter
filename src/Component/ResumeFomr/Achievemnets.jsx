import React, { useContext, useState } from 'react';
import { Seven, Eight } from '../../App';

const Achievemnets = () => {
  
  const SKILL = useContext(Seven);
  const SETSKILL = useContext(Eight);
  const [skill, setskill] = useState("");
  const [setlist, editsetlist] = useState([]);


  const Myskill = (e) => {
    setskill(e.target.value)
  }

  const mydub = () => {
    skill === "" ? alert("nothing toadd") : editsetlist([...setlist, skill]);
    SETSKILL([...setlist, skill])
    setskill("")
  }




  return (
    <div className='bg-white min-h-80 flex justify-start items-center flex-col' >
      <h1 className='pt-5 text-center text-2xl text' style={{ color: "#777777", fontWeight: "bold" }} >Add Skills</h1>

      <div className='flex justify-center pt-10 item-center' >
        <input type="text" placeholder='eg: pytone' style={{ width: "250px", border: "2px solid rgb(116, 116, 222)" }} name="skill" value={skill} onChange={Myskill} />
        <span onClick={mydub} className='flex justify-center items-center mt-2 text-white text-3xl ml-5'
          style={{ width: "50px", height: "50px", borderRadius: "50%", background: "linear-gradient(#0dccea, #0d70ea)" }}
        ><i className="fa-solid fa-plus" ></i></span>
      </div>

      {/* skill writen area */}

      <div className='w-10/12 border mt-5 flex justify-center items-center flex-col ' >


        {setlist.map((ele, ind) => {
          return <>

            <h4 className=' border mb-5 pt-2 pb-2 pl-10 pr-10' key={ind} style={{ backgroundColor: "#183153", color: "white", borderRadius: "5px" }} onClick={() => {
              setlist.splice(ind, 1)
              editsetlist([...setlist])
              SETSKILL([[...setlist]])

            }}>{ele}  <i className="fa-solid fa-trash" ></i></h4>
          </>
        })}



      </div>
    </div>
  )
}

export default Achievemnets
