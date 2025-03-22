import "./App.css";
import { useState, useEffect, useRef } from "react";
// use Sate effect ref
function App() {
  const [etaxt, setteaxt] = useState(""); // Ensure default value is a string
  const [checked, setChecked] = useState(false);
  const [charchec, setcharchecked] = useState(false);
  const [rangeValue, setRangeValue] = useState(50);

  const changeno = () => {
    let pass = "";
    let str = "qwertyuiopasdfghjklSDFGHJKLERTYUIOP";
    let num = "1234567890";
    let specialChars = "!@#$%^&*()_+";

    if (checked) str += num;
    if (charchec) str += specialChars;

    for (let i = 0; i < rangeValue; i++) {
      let index = Math.floor(Math.random() * str.length);
      pass += str[index];
    }

    setteaxt(pass);
  };

  useEffect(() => {
    changeno();
  }, [checked, charchec, rangeValue]); // ✅ Fixed dependencies

const passRef=useRef(null)
  const copyclip=()=>{
    passRef.current?.select();

    window.navigator.clipboard.writeText(etaxt);
  }

  return (
    <>
      <div className="passgen">
        <h1>Password Generator</h1>
        <br />
        <input type="text" value={etaxt} className="border-amber-50 inlu" 
        readOnly
        ref={passRef}
        />
        <button onClick={changeno}>Generate</button>
        <button onClick={copyclip}>Copy</button>
        
        {/* Slider */}
        <div>
          <input
            className="w-full cursor-pointer"
            type="range"
            min="0"
            max="100"
            value={rangeValue}
            onChange={(e) => setRangeValue(Number(e.target.value))} // Ensure value is a number
          />
        </div>
        <p>Slider Value: {rangeValue}</p>

        {/* Checkboxes */}
        <div className="lulu">
          <label className="flex items-center space-x-2 mt-2">
            <input
              type="checkbox"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              className="cursor-pointer"
            />
            <span>Include Numbers</span>
          </label>

          <label className="flex items-center space-x-2 mt-2">
            <input
              type="checkbox"
              checked={charchec}
              onChange={(e) => setcharchecked(e.target.checked)} // ✅ Fixed
              className="cursor-pointer"
            />
            <span>Include Special Characters</span>
          </label>
        </div>
      </div>
    </>
  );
}

export default App;










// import "./App.css";
// import { useState, useCallback, useEffect } from "react";

// function App() {
//   const [etaxt, setteaxt] = useState();
//   const [value, setValue] = useState(50);
//   const [checked, setChecked] = useState(false);
//   const [charchec, setcharchecked] = useState(false);
//   const [rangeValue, setRangeValue] = useState(50);

//   const changeno = () => {
//     let pass=""
//     let str="qwertyuiopasdfghjklSDFGHJKLERTYUIOP";
//     let num= 1234567890;
//     // let char="!@#$%^&*()_+";
//     if(checked){str+=num}
//     if(clhcharchec){str+="!@#$%^&*()_+"}
//     for(let i=0; i<rangeValue; i++){
//       let index = Math.floor(Math.random()*str.length);
//       pass+=str[index];
//     }
//     setteaxt(pass)
//   };
//   // useCallback(() => {});

//   useEffect(() => {
//     changeno();
//   }, [checked, clhecked]);
//   return (
//     <>
//       {/* <div className=" w-150 h-20 bg-sky-50 text-2xl text-gray-900 rounded">
//         My name is "Abhishek Tripathi".
//       </div> */}

//       <div className="passgen">
//         <h1>Password Generator</h1>
//         <br />
//         <input type="text" value={etaxt} className="border-amber-50  inlu" />
//         <button onClick={changeno}>Generate</button>
//         <div>

//           {/* slider */}
//           <input
//             className="w-full cursor-pointer"
//             type="range"
//             min="0"
//             max="100"
//             value={rangeValue} // Controlled by state
//             onChange={(e) => setRangeValue(e.target.value)} // Update state on change
          
//           />
//         </div>
//         <p>Slider Value: {rangeValue}</p>
//         {/* number */}
//         <div className="lulu">
//           <label className="flex items-center space-x-2 mt-2">
//             <input
//               type="checkbox"
       
//                onChange={(e) => setChecked(e.target.checked)}
//               className="cursor-pointer"
//             />
//             <span>Number</span>
//             {/* charcter */}
//           </label>
//           <label className="flex items-center space-x-2 mt-2">
//             <input
//               type="checkbox"
            
//               onChange={(e) => setcharchecked(e.target.charchec)}
//               className="cursor-pointer"
//             />
//             <span>Characters</span>
//           </label>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
