import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { app } from "./Firebase/Firebase";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { Watch } from "react-loader-spinner";

const Singin = () => {
  const nav = useNavigate();
  const auth = getAuth();
  const [newuser, setnewuser] = useState({ name: "", email: "", password: "" });
  const [loader, setloder] = useState(false);

  const Mysingin = (e) => {
    e.preventDefault();
    if (e.target.name === "name") {
      setnewuser({ name: e.target.value })
    } else if (e.target.name === "email") {
      setnewuser({ ...newuser, email: e.target.value })

    } else if (e.target.name === "password") {
      setnewuser({ ...newuser, password: e.target.value })
    }
  }


  const mynewacc = (e) => {
    e.preventDefault();
    console.log(newuser)
    setloder(true)
    createUserWithEmailAndPassword(auth, newuser.email, newuser.password).then((succ) => {
      swal({
        title: "Account Created",
        icon: "success",
        buttons: false,
        timer: 3000
      })
      setloder(false)
      nav("/login");

    }).catch((eroor) => {
      setloder(false)
      swal({
        title: eroor.message,
        icon: "error",
        buttons: false,
        timer: 3000
      })
    })
  }



  return (
    <section className='h-full  flex justify-center items-center' style={{ background: " linear-gradient(125deg, rgba(175,208,254,1) 29%, rgba(234,221,243,1) 58%)", minHeight: "90vh", fontFamily: "sans-serif" }}>
      <form style={{
        background: "#0000009c"
      }}  onSubmit={mynewacc}  >
        <h3  > Create account Here</h3>

        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" value={newuser.name
        } name="name" onChange={Mysingin} required />

        <label htmlFor="username">Username</label>
        <input type="email" placeholder="Email or Phone" id="username" value={newuser.email
        } name="email" onChange={Mysingin} required />

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" value={newuser.password
        } name="password" onChange={Mysingin} required />

        <button className="text-white mt-5" onSubmit={mynewacc} style={{ backgroundImage: "linear-gradient(#0dccea, #0d70ea)" }} >
          {loader ? <div className="w-full h-full flex justify-center items-center" > <Watch height={35} width={35} color="white" /> </div> 
          : "Create account"}
        </button>
        <div className="social">
          <div className="go" style={{ backgroundImage: "linear-gradient(#0dccea, #0d70ea)" }} ><i className="fab fa-google"></i>  Google</div>
          <div className="fb" style={{ backgroundImage: "linear-gradient(#0dccea, #0d70ea)" }} ><i className="fab fa-facebook"></i>  Facebook</div>
        </div>
      </form>
    </section >
  )
}

export default Singin