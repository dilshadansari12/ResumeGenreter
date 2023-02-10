import { createContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { Watch } from "react-loader-spinner";
import { app } from "./Firebase/Firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import swal from "sweetalert";


const LogIn = () => {
  const auth = getAuth();
  const navi = useNavigate()
  const [logv, setlogv] = useState({ email: "", password: "" });
  const [loder, setloder] = useState(false);


  const mylogin = (e) => {
    e.target.name === "email" ? setlogv({ email: e.target.value }) : setlogv({ ...logv, password: e.target.value })
  }




  const Mylogsub = (e) => {
    setloder(true)
    e.preventDefault();

    signInWithEmailAndPassword(auth, logv.email, logv.password).then((res) => {
      swal({
        title: "loged In",
        icon: "success",
        buttons: false,
        timer: 3000
      });

      navi("/resumetemplate");
    setloder(false)

    }).catch((eroor) => {
    setloder(false)
      swal({
        title: eroor.message,
        icon: "error",
        buttons: false,
        timer: 3000
      });


    })

  }

  return (
    <section className='h-full  flex justify-center items-center' style={{ background: " linear-gradient(125deg, rgba(175,208,254,1) 29%, rgba(234,221,243,1) 58%)", minHeight: "90vh", fontFamily: "sans-serif", overflowX: "hidden" }}>
      <form style={{
        background: "#0000009c"
      }} onSubmit={Mylogsub} >
        <h3  >Login Here</h3>

        <label for="username">Username</label>
        <input type="email" required placeholder=" User Email" value={logv.email} name="email" onChange={mylogin} id="username" />

        <label for="password">Password</label>
        <input type="password" placeholder="Password" value={logv.password} onChange={mylogin} id="password" required />

        <button className="text-white mt-5" style={{ backgroundImage: "linear-gradient(#0dccea, #0d70ea)" }} type={"submit"} onSubmit={Mylogsub} >{loder ? <div className="w-full h-full flex justify-center items-center" ><Watch height={25} width={25} color="white" /></div> : " Log In"}</button>
        <div className="social">
          <div className="go" style={{ backgroundImage: "linear-gradient(#0dccea, #0d70ea)" }} ><i className="fab fa-google"></i>  Google</div>
          <div className="fb" style={{ backgroundImage: "linear-gradient(#0dccea, #0d70ea)" }} ><i className="fab fa-facebook"></i>  Facebook</div>
        </div>
      </form>
    </section >
  )
}

export default LogIn