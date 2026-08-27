export default function CommentCard({ comment }) {
  const userName =
    comment?.user?.name || comment?.userName || comment?.name || "Anonymous";

  const content = comment?.content || comment?.text || comment?.comment || "";

  const createdAt = comment?.createdAt
    ? new Date(comment.createdAt).toLocaleString()
    : "";

  return (
    <div className="rounded-xl border border-white/10 bg-white/2 p-4">
      {/* User Info */}
      <div className="flex items-start gap-3">
        {/* Avatar */}
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-purple-500 to-blue-500 text-sm font-semibold text-white">
          {userName.charAt(0).toUpperCase()}
        </div>

        {/* Name + Date */}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-sm font-medium text-white">{userName}</p>

            {createdAt && (
              <>
                <span className="text-gray-700">•</span>

                <span className="text-xs text-gray-500">{createdAt}</span>
              </>
            )}
          </div>

          {/* Comment */}
          <p className="mt-2 text-sm leading-6 text-gray-400">{content}</p>
        </div>
      </div>
    </div>
  );
}
