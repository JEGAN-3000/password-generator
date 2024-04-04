import React, { useState } from "react";


const PasswordGenerator = () => {
  const [length, setLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState("");
  const generatePassword = () => {
    let characters = "";
    if (includeUppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLowercase) characters += "abcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) characters += "0123456789";
    if (includeSymbols) characters += "!@#$%^&*()_+";
    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedPassword += characters[randomIndex];
      setPassword(generatedPassword);
    }
  };
  function copyToClipboard() {
    navigator.clipboard.writeText(password);
    alert("Password copied");    
  }
  return (
    <div className="password_Generator">   
      <h2 data-aos="fade-down" data-aos-duration="1000">Strong Password Generator</h2>
      <div className="input_Group" data-aos="fade-right"  data-aos-duration="1000">
        <label htmlFor="passwordLength" data-aos="fade-down" data-aos-duration="1000">Password Length: </label>
        <input
          type="number"
          name="passwordLength"
          id="passwordLength"
          value={length}
          onChange={(e) => setLength(parseInt(e.target.value))}
        />
      </div>
      <div className="checkBox_Group" data-aos="fade-right"  data-aos-duration="1000">
        <input
          type="checkbox"
          name="upperCase"
          id="upperCase"
          checked={includeUppercase}
          onChange={(e) => setIncludeUppercase(e.target.checked)}
        />
        <label htmlFor="upperCase">Include Uppercase</label>
      </div>
      <div className="checkBox_Group" data-aos="fade-right"  data-aos-duration="1000">
        <input
          type="checkbox"
          name="lowerCase"
          id="lowerCase"
          checked={includeLowercase}
          onChange={(e) => setIncludeLowercase(e.target.checked)}
        />
        <label htmlFor="lowerCase">Include Lowercase</label>
      </div>
      <div className="checkBox_Group" data-aos="fade-right"  data-aos-duration="1000">
        <input
          type="checkbox"
          name="numbers"
          id="numbers"
          checked={includeNumbers}
          onChange={(e) => setIncludeNumbers(e.target.checked)}
        />
        <label htmlFor="numbers">Include Numbers</label>
      </div>
      <div className="checkBox_Group" data-aos="fade-right"  data-aos-duration="1000">
        <input
          type="checkbox"
          name="symbol"
          id="symbol"
          checked={includeSymbols}
          onChange={(e) => setIncludeSymbols(e.target.checked)}
        />
        <label htmlFor="symbol">Include Symbol</label>
      </div>
      <button className="generate_btn" onClick={generatePassword} data-aos="flip-up" data-aos-duration="1000">
        Generate Password
      </button>
      <div className="generated_Password"   data-aos="fade-left" data-aos-duration="1000">
        <input type="text" readOnly value={password} />
        <button className="copy_btn" onClick={copyToClipboard}>
          Copy
        </button>
      </div>
      <p className='copyright' data-aos="fade-up"
     data-aos-duration="1000">
          Designed by <span>Jegan</span>
        </p>
    </div>
  );
};

export default PasswordGenerator;
