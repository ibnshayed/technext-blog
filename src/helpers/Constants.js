export const ROOT_URL = `https://jsonplaceholder.typicode.com`;

// GET	/posts
// GET	/posts/1
// GET	/posts/1/comments
// GET	/comments?postId=1
// POST	/posts
// PUT	/posts/1
// PATCH	/posts/1
// DELETE	/posts/1

// POST
export const GET_ALL_POST = `${ROOT_URL}/posts`;
export const GET_POST_BY_ID = `${ROOT_URL}/posts`;
export const CREATE_POST = `${ROOT_URL}/posts`;
export const UPDATE_POST_BY_ID = `${ROOT_URL}/posts`;
export const PARTIAL_UPDATE_POST_BY_ID = `${ROOT_URL}/posts`;
export const DELETE_POST_BY_ID = `${ROOT_URL}/posts`;
export const GET_ALL_POST_COMMENT_BY_POST_ID = `${ROOT_URL}/comments`;

// User
export const GET_ALL_USER = `${ROOT_URL}/users`;
export const GET_USER_BY_ID = `${ROOT_URL}/users`;
export const CREATE_USER = `${ROOT_URL}/users`;
export const UPDATE_USER_BY_ID = `${ROOT_URL}/users`;
export const PARTIAL_UPDATE_USER_BY_ID = `${ROOT_URL}/users`;
export const DELETE_USER_BY_ID = `${ROOT_URL}/users`;

// Comments
export const GET_ALL_COMMENT = `${ROOT_URL}/comments`;
export const GET_COMMENT_BY_ID = `${ROOT_URL}/comments`;
export const CREATE_COMMENT = `${ROOT_URL}/comments`;
export const UPDATE_COMMENT_BY_ID = `${ROOT_URL}/comments`;
export const PARTIAL_UPDATE_COMMENT_BY_ID = `${ROOT_URL}/comments`;
export const DELETE_COMMENT_BY_ID = `${ROOT_URL}/comments`;
