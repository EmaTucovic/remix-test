import { useParams } from "remix";

function PostItem() {
  const params = useParams();
  return <div>Post {params.postId}</div>;
}

export default PostItem;
