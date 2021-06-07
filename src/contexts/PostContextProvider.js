import { createContext, useState } from "react";

export const PostContext = createContext();

const PostContextProvider = ({ children }) => {
  const [posts, setPosts] = useState(null);
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  return (
    <PostContext.Provider
      value={{
        loading,
        errorMsg,
        posts,
        post,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostContextProvider;
