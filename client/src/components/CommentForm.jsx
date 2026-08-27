import { useState } from "react";

export default function CommentForm({ onSubmit, loading = false, loggeduser }) {
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedComment = comment.trim();

    if (!trimmedComment) {
      return;
    }

    try {
      await onSubmit(trimmedComment);

      // Clear input only after successful submission
      setComment("");
    } catch (error) {
      console.error("Failed to submit comment:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-white/10 bg-white/2 p-4"
    >
      <div className="mb-3">
        <label className="text-sm font-medium text-gray-300">
          Add a comment
        </label>

        <p className="mt-1 text-xs text-gray-600">
          Share your thoughts about this project.
        </p>
      </div>

      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write your comment..."
        rows={4}
        disabled={loading}
        className="w-full resize-none rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-purple-500/50 disabled:cursor-not-allowed disabled:opacity-50"
      />

      <div className="mt-3 flex justify-end">
        <button
          type="submit"
          disabled={loading || !comment.trim()}
          className="rounded-lg bg-linear-to-r from-purple-500 to-blue-500 px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {loading ? "Posting..." : "Post Comment"}
        </button>
      </div>
      {loggeduser ? (
        ""
      ) : (
        <p
          className="px-4 py-3 rounded-xl
                bg-red-500/10 border border-red-500/20
                text-red-400 text-sm mt-3"
        >
          Login to add comments on this project
        </p>
      )}
    </form>
  );
}
