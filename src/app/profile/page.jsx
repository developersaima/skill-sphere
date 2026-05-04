import Image from "next/image";
import { auth } from "../../lib/auth/auth";
import { headers } from "next/headers";
import {
  FaEnvelope,
  FaCalendarAlt,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";
import EditProfile from "../../components/EditProfile";

const MyProfile = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;
  if (!user) return null;

  const { image, name, email, emailVerified, createdAt, updatedAt } = user;

  const initials = name
    ?.split(" ")
    .slice(0, 2)
    .map((i) => i[0].toUpperCase())
    .join("");

  return (
    <section className="min-h-screen flex items-center justify-center bg-base-200 px-4">

      {/* ID CARD */}
      <div className="w-[340px] bg-base-100 rounded-3xl shadow-2xl overflow-hidden border border-base-300">

        {/* TOP DESIGN */}
        <div className="h-28 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-500 relative">

          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
            <div className="w-20 h-20 rounded-full ring-4 ring-white overflow-hidden bg-white shadow-md">
              {image ? (
                <Image
                  src={image}
                  alt={name}
                  width={80}
                  height={80}
                  className="object-cover rounded-full"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-pink-500 text-white font-bold text-lg">
                  {initials}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* BODY */}
        <div className="pt-14 px-6 pb-6 text-center">

          <h2 className="text-lg font-bold">{name}</h2>

          <p className="text-xs text-gray-500 flex items-center justify-center gap-1 mt-1">
            <FaEnvelope className="text-pink-500" />
            {email}
          </p>

          {emailVerified && (
            <span className="inline-flex items-center gap-1 mt-3 text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
              <FaCheckCircle /> Verified
            </span>
          )}

          {/* INFO GRID */}
          <div className="mt-6 space-y-3 text-left">

            <div className="flex justify-between text-xs">
              <span className="text-gray-500 flex items-center gap-1">
                <FaCalendarAlt className="text-pink-500" />
                Created
              </span>
              <span>{new Date(createdAt).toLocaleDateString()}</span>
            </div>

            <div className="flex justify-between text-xs">
              <span className="text-gray-500 flex items-center gap-1">
                <FaClock className="text-pink-500" />
                Updated
              </span>
              <span>{new Date(updatedAt).toLocaleDateString()}</span>
            </div>

            <div className="flex justify-between text-xs">
              <span className="text-gray-500 flex items-center gap-1">
                <FaCheckCircle className="text-pink-500" />
                Status
              </span>
              <span className={emailVerified ? "text-green-600" : "text-yellow-500"}>
                {emailVerified ? "Verified" : "Pending"}
              </span>
            </div>

          </div>

          {/* EDIT BUTTON */}
          <div className="mt-6">
            <EditProfile user={user} />
          </div>

        </div>
      </div>

    </section>
  );
};

export default MyProfile;