import React, { useState, useCallback, useEffect, useRef } from 'react';

const App = () => {
  const [length, setLength] = useState(8);
  const [na, setNa] = useState(false);
  const [ca, setCa] = useState(false);
  const [pass, setPass] = useState("");

  const passRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (na) str += "0123456789";
    if (ca) str += "!@#$%^&*()-_=+`~";

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      password += str.charAt(char);
    }

    setPass(password);
  }, [length, na, ca]);

  const copy = useCallback(() => {
    window.navigator.clipboard.writeText(pass);
    passRef.current?.select(); // optional: highlight text when copied
  }, [pass]);

  useEffect(() => {
    passwordGenerator();
  }, [length, na, ca, passwordGenerator]);

  return (
    <div className="w-full max-w-md mx-auto rounded-lg px-4 my-8 text-black-900 bg-gray-800">
      <h1 className="text-4xl text-center text-white my-3">Password Generator</h1>

     
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={pass}
          className="outline-none w-full py-2 px-3 bg-white text-black"
          placeholder="Password"
          readOnly
          ref={passRef}
        />
        <button
          onClick={copy}
          className="bg-blue-600 text-white px-4 hover:bg-blue-700 transition-colors"
        >
          Copy
        </button>
      </div>

      {/* Length slider */}
      <div className="flex text-sm gap-x-2 items-center">
        <input
          type="range"
          min={8}
          max={50}
          value={length}
          className="cursor-pointer"
          onChange={(e) => setLength(Number(e.target.value))}
        />
        <label className="text-white">Length: {length}</label>
      </div>

      {/* Numbers checkbox */}
      <div className="flex items-center gap-x-1 text-white mt-3">
        <input
          type="checkbox"
          id="numberInput"
          checked={na}
          onChange={() => setNa((prev) => !prev)}
        />
        <label htmlFor="numberInput">Include Numbers</label>
      </div>

      {/* Characters checkbox */}
      <div className="flex items-center gap-x-1 text-white mt-2">
        <input
          type="checkbox"
          id="characterInput"
          checked={ca}
          onChange={() => setCa((prev) => !prev)}
        />
        <label htmlFor="characterInput">Include Special Characters</label>
      </div>
    </div>
  );
};

export default App;
