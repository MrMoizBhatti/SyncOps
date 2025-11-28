import Image from "next/image";

function AuthorProfile({
  author = "SyncOps",
  role = "Tech Innovators",
  avatar = "/favicon.ico",
  className = "",
}) {
  return (
    <div
      className={`flex items-center gap-3 sm:gap-4 ${className}`}
      aria-label={`Article written by ${author}`}
    >
      <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl overflow-hidden border-2 border-gray-200 shadow-sm bg-gradient-to-br from-[#0fbab1]/10 to-[#0fbab1]/5 ring-2 ring-white">
        <Image
          src={avatar}
          alt={author}
          fill
          sizes="(max-width: 640px) 48px, 56px"
          className="object-cover"
        />
      </div>
      <div>
        <h3 className="font-bold text-sm sm:text-base text-gray-900 leading-tight">{author}</h3>
        <p className="text-xs sm:text-sm text-gray-600 font-medium">{role}</p>
      </div>
    </div>
  );
}

export default AuthorProfile;
