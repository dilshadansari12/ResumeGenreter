import { First, Third, Five , Seven } from "../../App";
import { useContext } from "react";
import { Userimg } from "../../App";

const OrgResume = () => {

    const basic = useContext(First);
    const workex = useContext(Third);
    const education = useContext(Five);
    const skill = useContext(Seven);
    const Userimge = useContext(Userimg);

  
const myPrint = ()=>{
    window.print();
}

    return (
        <section className=" flex justify-center  items-center  flex-col prints" >
            <div className="border flex justify-start items-start " style={{ width: "550px", height: "800px" }} >

                <div style={{ width: "240px" }} className="border h-full"  >


                    <div className="w-full" style={{ height: "173px", background: "#253439" }} ></div>



                    <div className="w-full flex justify-center flex-col items-center" style={{ height: "238px", background: "#595651" }} >



                        <img src={Userimge ? Userimge : "img/user.png" } alt="user image" width="150px" height="150%" className="" style={{ marginTop: "-160px" , borderRadius:"50%" }} />

                        <h4 className="mt-5 text-xl text-white font-sans" >{basic.name ? basic.name : "dilsahd ansari"}</h4>
                        <p className="" style={{ color: "#ffffffbd" }} >{basic.jobtitle ? basic.jobtitle : "Front-End Develper"}</p>

                    </div>

                    <div className="w-full flex justify-start items-start flex-col pt-5 pb-5" style={{ background: "#253439" , height:"387px" }} >

                        <div className="pb-5" >
                            <h5 className="text-white text-center pt-2 pb-2" >About Me</h5>
                            <p className="text-sm text-center pl-2 pr-2" style={{ color: " rgb(255 255 255 / 49%)" }} >
                                {basic.about ? basic.about : "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Consequatur Quidem Dignissimos, Perferendis A Est Dolore Ut Eius"}
                            </p>
                        </div>

                        <div className="flex justify-center items-center w-full flex-col " >
                            <h5 className="text-white text-center pt-2 pb-5" >contact Me</h5>

                            <div className="flex justify-around items-center " >
                                <span className="flex justify-center items-center mr-2" style={{ width: "25px", height: "25px", backgroundColor: "white", borderRadius: "50%" }} ><i className="fa-solid fa-phone"></i></span>
                                <p className="" style={{ color: " rgb(255 255 255 / 69%)" }}  >+91{basic.number ? basic.number : 7903715443}</p>
                            </div>

                            <div className="flex justify-around items-center mt-3" >
                                <span className="flex justify-center items-center mr-2" style={{ width: "25px", height: "25px", backgroundColor: "white", borderRadius: "50%" }} ><i className="fa-solid fa-envelope"></i></span>
                                <p className="text-sm" style={{ color: " rgb(255 255 255 / 69%)" }}  >{basic.email ? basic.email : "demo@gmail.com"}</p>
                            </div>


                            <div className="flex justify-around items-center mt-3  " >
                                <span className="flex justify-center items-center mr-2" style={{ width: "25px", height: "25px", backgroundColor: "white", borderRadius: "50%" }} ><i className="fa-solid fa-globe"></i></span>
                                <p className="text-sm" style={{ color: " rgb(255 255 255 / 69%)" }}  >{basic.web ? basic.web : "developerdilshad.online"}</p>
                            </div>

                            <div className="flex justify-around items-center mt-3 " >
                                <span className="flex justify-center items-center mr-2" style={{ width: "25px", height: "25px", backgroundColor: "white", borderRadius: "50%" }} ><i className="fa-solid fa-location-dot"></i></span>
                                <p className="text-sm" style={{ color: " rgb(255 255 255 / 69%)" }}  >{basic.location ? basic.location : "Ranchi jaharkhad"}</p>
                            </div>


                            {/* bsaic over here */}


                        </div>

                    </div>



                </div>
                {/*  */}

                <div className="h-full border bg-white" style={{ width: "340px" }}  >




                    <div className="w-full" style={{ height: "15%", borderBottom: "1px solid grey", position: "relative" }} >
                        <p style={{ position: "absolute", right: "5%", bottom: "0" }} >resume</p>
                    </div>


                    <div >
                        <p className="pt-3 font-bold  text-center" style={{ color: "#62646a" }} >Work Experience</p>


                        <div className="ml-5" >
                            <li className="pt-1 pb-1 "  >{workex.companyname ? workex.companyname : "amazone"}</li>
                            <p className="pt-1 pb-1 pl-4" style={{ color: "#62646a" }} >{workex.from ? workex.from : 2018} to {workex.to ? workex.to : 2002}</p>
                            <h4 className="pt-2 pb-2" >{workex.position ? workex.position : "Front-End Developer"}</h4>
                            <p className="text-sm mt-1 " >{workex.aboutwork ? workex.aboutwork : "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Consequatur Quidem Dignissimos, Perferendis A Est Dolore Ut Eius"}</p>
                        </div>

                    </div>

                    {/* educaton area */}
                    <div >
                        <p className="pt-5 font-bold  text-center" style={{ color: "#62646a" }} >Education</p>


                        <div className="ml-5" >
                            <li className="pt-1 pb-1 "  >{education.sname ? education.sname : " Jharkhand acedmic council"}</li>
                            <p className="pt-1 pb-1 pl-4" style={{ color: "#62646a" }} >{education.from ? education.from : 2017} to {education.to ? education.to : 2022}</p>
                            <h4 className="pt-2 pb-2" >{education.course ? education.course : "Bechlore of art's"}</h4>
                            <p className="text-sm mt-1 " >{education.aboutcourse ? education.aboutcourse : "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Consequatur Quidem Dignissimos, Perferendis A Est Dolore Ut Eiuss Perspiciatis"}</p>
                        </div>

                    </div>

{/* skils */}

                    <div >
                        <p className="pt-5 font-bold  text-center" style={{ color: "#62646a" }} >Skills</p>


                        <div className="ml-5" >

                        {
                            skill.map((el)=>{
                                 console.log(el)
                                return  <p>{el ? el : "java script"}</p>
                            })
                        }
                           
                           

                        </div>

                    </div>




                </div>


            
            </div>
            <div>
            <button className="button" style={{width:"200px"}} onClick={myPrint} > Print </button>
            </div>
        </section>

    )
}

export default OrgResume;