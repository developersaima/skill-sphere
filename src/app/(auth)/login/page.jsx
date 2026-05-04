"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";
import { motion } from "motion/react";
import { authClient, signInGoogle } from "../../../lib/auth/auth-client";
import toast from "react-hot-toast";

const Login = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [err, setErr] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    setErr("");

    const { error } = await authClient.signIn.email(
      {
        email: data.email,
        password: data.password,
        callbackURL: "/",
      },
      {
        onSuccess: () => {
          toast.success("Welcome back");
          router.push("/");
        },
        onError: (e) => setErr(e?.error?.message || "Login failed"),
      }
    );

    if (error) setErr(error.message);
  };

  return (
    <div className="min-h-screen flex items-center justify-center  px-4">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card w-full max-w-md bg-base-100 shadow-xl border border-pink-100"
      >

        <div className="card-body">

          <h2 className=" text-2xl font-bold mb-4 text-pink-500">
            Login
          </h2>

          {err && (
            <div className="alert alert-error text-sm">
              <MdErrorOutline />
              <span>{err}</span>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">

            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full focus:outline-pink-400"
              {...register("email", { required: "Email required" })}
            />
            {errors.email && (
              <p className="text-xs text-red-500">{errors.email.message}</p>
            )}

            <div className="relative">
              <input
                type={show ? "text" : "password"}
                placeholder="Password"
                className="input input-bordered w-full pr-10 focus:outline-pink-400"
                {...register("password", {
                  required: "Password required",
                  minLength: 6,
                })}
              />

              <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute right-3 top-3 text-gray-400"
              >
                {show ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {errors.password && (
              <p className="text-xs text-red-500">
                Min 6 characters required
              </p>
            )}

            <motion.button
              whileTap={{ scale: 0.97 }}
              className="btn w-full bg-pink-500 hover:bg-pink-600 text-white border-none"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                "Login"
              )}
            </motion.button>

          </form>

          <div className="divider text-xs">OR</div>

          <button
            onClick={() => signInGoogle()}
            className="btn btn-outline w-full gap-2 hover:border-pink-400"
          >
            <FaGoogle /> Continue with Google
          </button>

          <p className="text-center text-sm mt-4">
            No account?{" "}
            <Link href="/register" className="text-pink-500 font-medium">
              Register
            </Link>
          </p>

        </div>

      </motion.div>

    </div>
  );
};

export default Login;