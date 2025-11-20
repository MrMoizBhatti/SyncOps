import { MessageCircle } from "lucide-react";
function JoinDiscussion() {
  return (
    <section className="mt-12 bg-gray-100 p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-[#042638] mb-4">
        Join the Discussion
      </h2>
      <p className="text-gray-600 mb-4">
        We'd love to hear your thoughts on this post. Share your insights, ask
        questions, or start a conversation below.
      </p>
      <button className="bg-[#0fbab1] text-white px-4 py-2 rounded hover:bg-[#0d9d95] transition-colors flex items-center">
        <MessageCircle className="mr-2" size={16} />
        Leave a Comment
      </button>
    </section>
  );
}
export default JoinDiscussion;
