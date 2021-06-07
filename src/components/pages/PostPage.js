import { Box, Button, CircularProgress, Typography } from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import { PostContext } from "../../contexts/PostContextProvider";

const PostPage = () => {
  const postContext = useContext(PostContext);
  const [posts, setPosts] = useState(null);
  const [slicedPosts, setSlicedPosts] = useState(null);
  const [size, setSize] = useState(10);

  const allPost = async () => {
    const data = await postContext.getAllPost();
    setPosts(data);
    let newPosts = data.slice(0, size);
    setSlicedPosts(newPosts);
  };

  const getMorePost = () => {
    let prevSize = size;
    let newSize = prevSize + 10;
    console.log("==========> ", newSize);
    setSize(newSize);
    console.log("==========> ", size);
    let newPosts = posts.slice(0, newSize);
    setSlicedPosts(newPosts);
    console.log("===========> ", newPosts);
  };

  useEffect(() => {
    allPost();
  }, []);

  return (
    <div>
      <Box px={5} pb={5}>
        <Typography variant="h3">All Posts</Typography>
      </Box>

      {postContext.loading ? (
        <Box align="center">
          <CircularProgress />
        </Box>
      ) : postContext.errorMsg ? (
        <h1>{postContext.errorMsg}</h1>
      ) : (
        <div>
          {slicedPosts &&
            slicedPosts.map((post) => (
              <Box
                boxShadow={2}
                bgcolor="white"
                key={post.id}
                mx={2}
                p={2}
                borderRadius={16}
                mb={2}
              >
                <Typography variant="h6">User: {post.userId}</Typography>
                <Typography variant="h6">Post: {post.id}</Typography>
                <Typography variant="h5">Title: {post.title}</Typography>
                <Typography variant="h6">Body: {post.body}</Typography>
              </Box>
            ))}
          {size && size < 100 && (
            <Box align="center">
              <Button
                onClick={getMorePost}
                variant="contained"
                color={"primary"}
              >
                Load More
              </Button>
            </Box>
          )}
        </div>
      )}
    </div>
  );
};

export default PostPage;
