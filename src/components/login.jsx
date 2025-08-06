// import React from "react";
// import { Link } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import toast from "react-hot-toast";

// const Login = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const onSubmit = async (data) => {
//     const userInfo = {
//       Email: data.Email,
//       Password: data.Password,
//     };
//     await axios
//       .post("http://localhost:5001/user/loginUser", userInfo)
//       .then((res) => {
//         console.log("full reponse data", res.data);
//         if (res.data) {
//           toast.success("Login Successfully ");
//           setTimeout(() => {
//             document.getElementById("my_modal_3").close();
//           }, 3000);
//           window.location.reload();
//         }
//         localStorage.setItem("users", JSON.stringify(res.data.user));
//       })
//       .catch((err) => {
//         if (err.response) {
//           console.log(err);
//           toast.error("Login Error:" + err.response.data.message);
//         }
//       });
//   };
//   return (
//     <div>
//       <dialog id="my_modal_3" className="modal">
//         <div className="modal-box">
//           <form onSubmit={handleSubmit(onSubmit)} method="dialog">
//             {/* if there is a button in form, it will close the modal */}
//             <Link
//               to="/"
//               className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
//               onAuxClick={() => document.getElementById("my_modal_3").close()}
//             >
//               ✕
//             </Link>

//             <h3 className="font-bold text-lg">Login</h3>
//             <div className="mt-4 space-y-2">
//               <span>Email</span>
//               <br />
//               <input
//                 type="Email"
//                 placeholder="Enter your email"
//                 className=" w-80 px-3 py-1 border rounded-md outline-none"
//                 {...register("Email", { required: true })}
//               />
//               <br />
//               {errors.Email && (
//                 <span className="text-sm text-red-500">
//                   This field is required
//                 </span>
//               )}
//             </div>
//             <div className="mt-4 space-y-2">
//               <span>Password</span>
//               <br />
//               <input
//                 type="Password"
//                 placeholder="Enter your password"
//                 className=" w-80 px-3 py-1 border rounded-md outline-none"
//                 {...register("Password", { required: true })}
//               />
//               <br />
//               {errors.Password && (
//                 <span className="text-sm text-red-500">
//                   This field is required
//                 </span>
//               )}
//             </div>
//             <div className="flex justify-around mt-4">
//               <button className=" bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
//                 Login
//               </button>
//               <div>
//                 <p>
//                   Not registered?
//                   <Link
//                     to="/singup"
//                     className="underline text-blue-500 cursor-pointer"
//                   >
//                     {" "}
//                     signup
//                   </Link>
//                 </p>
//               </div>
//             </div>
//           </form>
//         </div>
//       </dialog>
//     </div>
//   );
// };

// export default Login;
import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      Email: data.Email,
      Password: data.Password,
    };
    await axios
      .post("http://localhost:5001/user/loginUser", userInfo)
      .then((res) => {
        console.log("full response data", res.data);
        if (res.data && res.data.user) {
          toast.success("Login Successfully");
          document.getElementById("my_modal_3").close();

          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("users", JSON.stringify(res.data.user));
          }, 1000);
        } else {
          toast.error("Login failed: Invalid user data");
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Login Error: " + err.response.data.message);
          setTimeout(() => {}, 1000);
        }
      });
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Login</h3>
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("Email", { required: true })}
              />
              {errors.Email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("Password", { required: true })}
              />
              {errors.Password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="flex justify-around mt-4">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Login
              </button>
              <div>
                <p>
                  Not registered?{" "}
                  <Link
                    to="/singup"
                    className="underline text-blue-500 cursor-pointer"
                  >
                    signup
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
