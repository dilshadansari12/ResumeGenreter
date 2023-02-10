import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { First, Secand } from "../../App";
import { Storeg } from "../Firebase/Firebase";
import { listAll, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Watch } from "react-loader-spinner";

const BasicInfo = () => {
  const refs = useRef("");
  const BASIC = useContext(First);
  const SETBASIC = useContext(Secand);
  const [userimage, setuserimage] = useState(null);
  const [loader, setloader] = useState(false);
  const [dowloadurl, setdownloadurl] = useState();
  const nav = useNavigate();

  const imageupload = () => {
    setloader(true)
    if (userimage === null) {
      return;
    } else {
      const imageref = ref(Storeg, `iamge/`);
      uploadBytes(imageref, userimage).then((solve) => {
      }).catch((eroor) => {
        alert(eroor.message)
      })

    }
  }

  useEffect(() => {
    imageupload();
  }, [userimage]);


  // 

  useEffect(() => {
    if (dowloadurl) {
      setloader(false);
      ref.current.style.backgroundImage="dowloadurl"
    }
  }, [dowloadurl])


  const imageref = ref(Storeg, "iamge/")
  // acces a image

  useEffect(() => {
    listAll(imageref).then((res) => {
      res.getDownloadURL(res).then((aaa) => {
        setdownloadurl(aaa)
      }).catch((err) => {
        alert(err)
      })
    }).catch(() => {

    })
  })

  const [basicinfo, editbasicinfo] = useState({
    name: "",
    jobtitle: "",
    number: "",
    web: "",
    email: "",
    location: ""

  })


  const mychange = (e) => {

    console.log(e.target.name)

    if (e.target.name === "name") {
      editbasicinfo({ name: e.target.value })
    } else if (e.target.name === "title") {
      editbasicinfo({ ...basicinfo, jobtitle: e.target.value })

    } else if (e.target.name === "about") {
      editbasicinfo({ ...basicinfo, about: e.target.value })

    } else if (e.target.name === "number") {
      editbasicinfo({ ...basicinfo, number: e.target.value })

    } else if (e.target.name === "web") {
      editbasicinfo({ ...basicinfo, web: e.target.value })

    } else if (e.target.name === "email") {
      editbasicinfo({ ...basicinfo, email: e.target.value })

    } else if (e.target.name === "location") {
      editbasicinfo({ ...basicinfo, location: e.target.value })

    }

  }


  const Mysubmite = () => {
    SETBASIC(basicinfo)
    nav("/resumenumber1/WorkEx")
  }


  // image upload 









  return (
    <div className="bg-white" style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", position: "relative" }} >
      <div className="w-full flex justify-center items-center flex-col pt-4 pb-4 " >
        <div className='userpic' ref={refs} style={{ position: "relative" }} >
          {loader ? <div className="" style={{ position: "absolute", top: "30%", right: "30%" }} ><Watch width={80} height={80} color="black" /> </div> : ""}
          <input type="file" className='userpicinput' onChange={(e) => { setuserimage(e.target.files[0]) }} />
        </div>


        <div className="flex justify-around items-center w-full fnjt"  >

          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id='name' value={basicinfo.name} onChange={mychange} name="name" placeholder='eg. Dilshad Ansari' />
          </div>

          <div>
            <label htmlFor="job">Job Title</label>
            <input type="text" onChange={mychange} name="title" value={basicinfo.title} id='job' placeholder='eg. Front-End Developer' />
          </div>

        </div>
        {/* about us */}
        <div className='w-full txa'>
          <label htmlFor="about">About You</label>
          <textarea onChange={mychange} name="about" value={basicinfo.about} id="about" placeholder="eg. As a highly skilled front-end developer, I bring expertise in HTML, CSS, and JavaScript to develop and implement engaging and intuitive user experiences."  ></textarea>
        </div>
        {/* other contact */}
        <div className="flex justify-around items-center w-full fnjt" >

          <div>
            <label htmlFor="num">Number</label>
            <input type="number" onChange={mychange} name="number" value={basicinfo.number} id="num" placeholder="+917903715443" />

            <label htmlFor="email">Email</label>
            <input type="email" onChange={mychange} name="email" value={basicinfo.email} id="email" placeholder="eg demo@gmail.com" />
          </div>

          <div>
            <label htmlFor="web">web url</label>
            <input type="url" onChange={mychange} name="web" value={basicinfo.web} id="web" placeholder="web url" />

            <label htmlFor="location">Location</label>
            <input onChange={mychange} name="location" value={basicinfo.location} type="text" id='loation' placeholder='Short Location' />
          </div>


        </div>

      </div>

      <button onClick={Mysubmite} className="button" style={{ width: "150px", marginLeft: "65%" }} >Next <i className="fa-solid fa-arrow-right"></i> </button>

    </div>
  )
}

export default BasicInfo