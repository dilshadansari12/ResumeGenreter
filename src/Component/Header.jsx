import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import swal from "sweetalert";
import { Watch } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { Ten, Nine } from "../App"

const Header = () => {

  const Nines = useContext(Nine);
  const Tens = useContext(Ten);
  const auth = getAuth();
  const navigation = useNavigate();
  const [Olready, SetOlready] = useState(false);
  const [loder, setloder] = useState(false);
  const [username, setusername] = useState("");

  useEffect(() => {
    if (Olready) {
      Tens(false)
    } else {
      Tens(true)
    }

  }, [Olready])


  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      if (data) {
        SetOlready(true);
        Tens(true)
        const user = auth.currentUser;
        setusername(user.email)

      } else {
        Tens(false)

      }
    })
  })

  // log out

  const mylogout = () => {
    signOut(auth).then((res) => {
      swal({
        title: "Log Out Sucees",
        icon: "success",
        buttons: false,
        timer: 3000
      });
      SetOlready(false);
      navigation("/login")

    }).catch((err) => {
      swal({
        title: err.message,
        icon: "error",
        buttons: false,
        timer: 3000
      });


    })
  }





  return (
    <div className='h-16 flex justify-around items-center header' style={{ background: " rgb(114,46,248)" }} >

      <Link to="/" ><img src="img/logo.png" alt="logopng" height="80px" width="50px" /></Link>


      <div className=' flex justify-around items-center  md:w-1/4 ' >
        <Link to="/resumetemplate" className="button text-xs" >ResumeTemplate</Link >
        {Olready ? <button className='button text-xs' >{username}</button> : <Link to="/singup" className='button text-xs' >signing up</Link>}
        {Olready ? <button className='button text-xs' onClick={mylogout}  >logout</button> : <Link to="/login" className='button text-xs' >Log In</Link>}
      </div>

    </div>
  )
}

export default Header;






/* CSS */