"use client";

import { FaEdit } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { authClient } from "../lib/auth/auth-client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const EditProfile = ({ user }) => {
  const router = useRouter();
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    defaultValues: {
      name: user?.name,
      image: user?.image,
    },
  });

  const onSubmit = async (data) => {
    setServerError("");

    const { error } = await authClient.updateUser(
      { name: data.name, image: data.image },
      {
        onSuccess: () => {
          toast.success("Profile updated");
          router.refresh();
          document.getElementById("edit_modal").close();
        },
        onError: (ctx) => setServerError(ctx?.error?.message),
      }
    );

    if (error) setServerError(error.message);
  };

  return (
    <>
      {/* Open Button */}
      <button
        className="btn btn-sm bg-pink-500 text-white hover:bg-pink-600"
        onClick={() => document.getElementById("edit_modal").showModal()}
      >
        <FaEdit /> Edit
      </button>

      {/* MODAL */}
      <dialog id="edit_modal" className="modal">
        <div className="modal-box">

          <h3 className="font-bold text-lg text-pink-500 mb-3">
            Edit Profile
          </h3>

          {serverError && (
            <div className="alert alert-error text-sm mb-3">
              <MdErrorOutline />
              {serverError}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">

            <input
              className="input input-bordered w-full"
              placeholder="Name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <p className="text-xs text-red-500">Name required</p>
            )}

            <input
              className="input input-bordered w-full"
              placeholder="Image URL"
              {...register("image")}
            />

            <div className="modal-action">
              <button
                type="button"
                className="btn"
                onClick={() => document.getElementById("edit_modal").close()}
              >
                Cancel
              </button>

              <button
                className="btn bg-pink-500 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Saving..." : "Save"}
              </button>
            </div>

          </form>

        </div>
      </dialog>
    </>
  );
};

export default EditProfile;