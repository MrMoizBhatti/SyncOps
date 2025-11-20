import Image from "next/image";

function AuthorProfile() {
  return (
    <div className="flex items-center space-x-4 mb-4">
      <Image
        src="/favicon.ico"
        alt="SyncOps"
        width={30}
        height={30}
        className="rounded-full"
      />
      <div>
        <h3 className="font-semibold text-[#042638]">SyncOps</h3>
        <p className="text-sm text-gray-600">Tech Innovators</p>
      </div>
    </div>
  );
}

export default AuthorProfile;
