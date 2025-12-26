import React, { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

const PassManager = () => {
  const ref = useRef();
  const passwordRef = useRef();

  const [passvalidation, setpassvalidation] = useState(true);
  const [uservalidation, setuservalidation] = useState(true);
  const [form, setform] = useState({
    site: "",
    username: "",
    password: "",
  });
  const [passwordArray, setpasswordArray] = useState([]);

  const getpasswords = async () => {
    let req = await fetch("http://localhost:3000/");
    let passwords = await req.json();
    // console.log(passwords);
    setpasswordArray(passwords);
  };

  useEffect(() => {
    // to load data from backend
    getpasswords();
  }, []);

  const savepassword = async () => {
    if (form.username.length >= 4) {
      setuservalidation(true);

      if (form.password.length >= 8) {
        setpassvalidation(true);

        const newform = { ...form, id: uuidv4() };
        setpasswordArray([...passwordArray, newform]);

        // save password to backend

        let res = await fetch("http://localhost:3000/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newform),
        });
        // console.log(newform);

        setform({
          site: "",
          username: "",
          password: "",
        });
      } else {
        setpassvalidation(false);
      }
    } else {
      setuservalidation(false);
      setpassvalidation(false);
    }
  };
  const handlechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };
  const copy = (text) => {
    // console.log(text);
    navigator.clipboard.writeText(text);
    // console.log("copied");
    toast("copied");
  };
  const edithadler = (id) => {
    passwordArray.map((element) => {
      if (element.id === id) {
        setform({
          site: element.site,
          username: element.username,
          password: element.password,
          id: element.id,
        });
      }
    });
    deletehadler(id);
  };



const deletehadler = async (id) => {
  await fetch(`http://localhost:3000/${id}`, {
    method: "DELETE",
  });

  setpasswordArray(passwordArray.filter(p => p.id !== id));
};





  const passeyehandler = () => {
    if (ref.current.src.includes("icons/eye.png")) {
      ref.current.src = "icons/eyecross.png";
      passwordRef.current.type = "text";
    } else {
      ref.current.src = "icons/eye.png";
      passwordRef.current.type = "password";
    }
  };

  return (
    <div>
      <Toaster position="bottom-center" reverseOrder={false} />
      {/* background color */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-77.5 w-77.5 rounded-full bg-green-400 opacity-20 blur-[100px]"></div>
      </div>

      {/* container start */}
      <div className="Mycontainer flex justify-center m-4">
        {/* div for input 1 */}
        <div className="inputs w-full flex items-center flex-col ">
          <input
            onChange={handlechange}
            value={form.site}
            className="border-2 lg:w-1/2 sm:w-[75%] pl-2 rounded-full  border-green-500 p-4 py-1"
            type="text"
            placeholder="Paste Web URL here"
            name="site"
          />

          <div className=" w-full flex justify-center mt-5 gap-5">
            <div className="lg:w-1/3 sm:w-[35%]">
              {/* div for input 2 */}
              <input
                onChange={handlechange}
                value={form.username}
                className="border-2  rounded-full w-full  border-green-500 pl-2.5 pr-6"
                type="text"
                placeholder="Enter Username"
                name="username"
              />
              <span
                className={`text-red-500 font-bold sm:text-[10px] text-[12px] ml-6 ${
                  uservalidation ? "hidden" : ""
                }`}
              >
                minimum 4 character required
              </span>
            </div>

            <div className="lg:w-1/6 sm:w-[30%] relative">
              {/* div for input 3 */}
              <input
                ref={passwordRef}
                onChange={handlechange}
                value={form.password}
                placeholder="Enter Password"
                className="rounded-full border-2 border-green-500 w-full pl-2.5 pr-6"
                type="password"
                name="password"
              />
              <span
                className="absolute right-0.75 top-px cursor-pointer"
                onClick={passeyehandler}
              >
                <img
                  ref={ref}
                  className="p-1"
                  width={26}
                  src="icons/eye.png"
                  alt="eye"
                />
              </span>
              <div
                className={`text-red-500 font-bold sm:text-[10px]  text-[12px]  ${
                  passvalidation ? "hidden" : ""
                }`}
              >
                minimum 8 character required
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* save button */}
      <div className="flex justify-center items-center">
        <button
          onClick={savepassword}
          className="flex justify-center items-center gap-2 bg-green-400 hover:bg-green-300 rounded-full px-8 py-1 w-fit border border-green-900 "
        >
          <lord-icon
            src="https://cdn.lordicon.com/jgnvfzqg.json"
            trigger="hover"
          ></lord-icon>
          Save
        </button>
      </div>

      <div className="text-center flex lg:justify-around sm:justify-end sm:mr-10 mb-1">
        <div></div>
        <div className="bg-purple-300 rounded-3xl px-2">
          click on the text to copy
        </div>
      </div>

      {/* table section  */}
      <div className="lg:w-[60%] mx-auto sm:w-[95%]">
        <table className="table-auto w-1/1">
          <thead className="bg-green-200">
            <tr>
              <th className="w-1/4">Site</th>
              <th className="w-1/4">Username</th>
              <th className="w-1/4">Password</th>
              <th className="w-1/4">Action</th>
            </tr>
          </thead>

          <tbody>
            {/* map start from here */}
            {passwordArray.map((element, index) => (
              <tr
                key={index}
                className={`border-y-2 border-white 
                  ${index % 2 === 0 ? "bg-amber-100" : "bg-amber-200"}`}
              >
                <td
                  onClick={(e) => copy(element.site)}
                  className="text-center hover:bg-amber-50 pl-1"
                >
                  {element.site}
                </td>
                <td
                  onClick={(e) => copy(element.username)}
                  className="text-center hover:bg-amber-50"
                >
                  {element.username}
                  <span className="pl-2"></span>
                </td>
                <td
                  onClick={(e) => copy(element.password)}
                  className="text-center hover:bg-amber-50"
                >
                  {element.password}
                  <span className="pl-2"></span>
                </td>
                <td
                  // onClick={(e) => copy(element.password)}
                  className="text-center "
                >
                  {/* edit button */}
                  <span
                    onClick={() => {
                      edithadler(element.id);
                    }}
                    className="mr-2 hover:bg-green-300 rounded-4xl px-1 py-0.5"
                  >
                    <i className="fa-solid fa-pen-to-square"></i>
                  </span>
                  {/* delete button */}
                  <span
                    onClick={() => {
                      deletehadler(element.id);
                    }}
                    className="hover:bg-red-400 rounded-4xl px-1 py-0.5"
                  >
                    <i className="fa-solid fa-trash "></i>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PassManager;
