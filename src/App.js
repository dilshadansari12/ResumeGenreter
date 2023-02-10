import Master from "./Master";
import Header from "./Component/Header";
import { createContext, useState } from "react";

const First = createContext();
const Secand = createContext();
const Third = createContext();
const Four = createContext();
const Five = createContext();
const six = createContext();
const Seven = createContext();
const Eight = createContext();
const Nine = createContext();
const Ten = createContext();


function App() {

  const [BASIC, SETBASIC] = useState({});
  const [WORKEX, SETWORKEX] = useState({});
  const [EDU, SETEDU] = useState({});
  const [SKILL, SETSKILL] = useState([]);
  const [olreaduuser, setolreaduuser] = useState(false);

  console.log(SKILL)

  return (
    <>
      {/* <Header /> */}
      <First.Provider value={BASIC} >
        <Secand.Provider value={SETBASIC} >
          <Third.Provider value={WORKEX} >
            <Four.Provider value={SETWORKEX} >
              <Five.Provider value={EDU} >
                <six.Provider value={SETEDU} >
                  <Seven.Provider value={SKILL}>
                    <Eight.Provider value={SETSKILL} >
                      <Nine.Provider value={olreaduuser} >
                        <Ten.Provider value={setolreaduuser} >
                          <Master />
                        </Ten.Provider>
                      </Nine.Provider>
                    </Eight.Provider>
                  </Seven.Provider>
                </six.Provider>
              </Five.Provider>
            </Four.Provider>
          </Third.Provider>
        </Secand.Provider>
      </First.Provider>
    </>
  );
}

export default App;
export { First, Secand, Third, Four, Five, six, Seven, Eight,Nine,Ten};          
