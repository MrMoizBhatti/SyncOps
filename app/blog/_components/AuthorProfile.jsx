import Image from "next/image";

function AuthorProfile({
  author = "SyncOps",
  role = "Tech Innovators",
  avatar = "/favicon.ico",
  className = "",
}) {
  return (
    <div
      className={`flex items-center gap-4 text-[#042638] ${className}`}
      aria-label={`Article written by ${author}`}
    >
      <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white">
        <Image
          src={avatar}
          alt={author}
          fill
          sizes="56px"
          className="object-cover"
        />
      </div>
      <div>
        <h3 className="font-semibold text-base">{author}</h3>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  );
}

export default AuthorProfile;
