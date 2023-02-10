import Home from "./Component/Home";
import { Route, Routes } from "react-router-dom";
import LogIn from "./Component/LogIn";
import Singin from "./Component/Singin";
import ResumeTemplate from "./Component/ResumeTemplate";
import ResumeForms from "./Component/ResumeFomr/ResumeForms";
import BasicInfo from "./Component/ResumeFomr/BasicInfo";
import WorkEx from "./Component/ResumeFomr/WorkEx";
import Projects from "./Component/ResumeFomr/Projects";
import Archivemenst from "./Component/ResumeFomr/Achievemnets";
import OrgResume from "./Component/OrgResume/OrgResume";
import Header from "./Component/Header";
import { Nine } from "./App";
import { useContext } from "react";

const Master = () => {
   
   const verify = useContext(Nine);

  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={verify ? <Home /> : <LogIn />} />
        <Route exact path="/singup" element={verify ? <Home /> :<Singin />} />
        <Route exact path="/resumetemplate" element={verify ?<ResumeTemplate /> : <Home />  } />


        <Route exact path="/resumenumber1/" element={verify ? <ResumeForms /> : <Home />} >
          <Route index path="basicinfo" element={<BasicInfo />} />
          <Route path="WorkEx" element={<WorkEx />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="Archivemenst" element={<Archivemenst />} />
        </Route>
        <Route path="/orgresume" element={<OrgResume />} />
        <Route  path="*" element={<Home />} />




      </Routes>
    </>
  )
}

export default Master;