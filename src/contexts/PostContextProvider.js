import axios from "axios";
import { createContext, useState } from "react";
import { GET_ALL_POST } from "../helpers/Constants";

export const PostContext = createContext();

const PostContextProvider = ({ children }) => {
  const [posts, setPosts] = useState(null);
  // const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
	const [errorMsg, setErrorMsg] = useState("");
	

	const getAllPost = async (size) => {
		try {
			setLoading(true);
			const { data } = await axios.get(GET_ALL_POST)
			console.log(data)
			setPosts(data)
			setLoading(false);
			return data
		} catch (error) {
			setLoading(false);
			setErrorMsg(error)
			return null
		}
	}

  return (
    <PostContext.Provider
      value={{
        loading,
        errorMsg,
        posts,
				getAllPost
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostContextProvider;
