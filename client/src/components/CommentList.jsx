import CommentCard from "./CommentCard";

export default function CommentList({ comments = [] }) {
  if (!comments.length) {
    return (
      <div className="rounded-xl border border-white/10 bg-white/2 px-6 py-10 text-center">
        <p className="text-sm text-gray-500">No comments yet.</p>

        <p className="mt-1 text-xs text-gray-600">
          Be the first one to share your thoughts!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {comments.map((comment) => (
        <CommentCard key={comment._id} comment={comment} />
      ))}
    </div>
  );
}
