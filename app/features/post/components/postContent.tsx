import React from "react";
import type { PostType } from "shared/types/postType";
import MediaGalery from "../../../../shared/ui/galeries/mediaGalery";
type Props = {
  post: PostType;
};

export default function PostContent({ post }: Props) {
  return (
    <section className="flex flex-col gap-6 my-3">
      <p className="text-sm px-4 font-mono text-white/60 whitespace-pre-wrap break-words break-all text-left">
        {post.caption}
      </p>
      <MediaGalery post={post} />
    </section>
  );
}
