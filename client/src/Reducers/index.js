import axios from "axios";
import {
  GET_POSTS_PENDING,
  GET_POSTS_SUCCESS,
  GET_POSTS_ERROR,
  getPostsPending,
  getPostsSuccess,
  getPostsError,
  UPDATE_JOBS_FREELANCE,
  UPDATE_JOBS_FULLTIME,
  UPDATE_SEARCH_TERM,
  UPDATE_JOBS_QUERY,
} from "../Actions";

const baseUrl = "http://localhost:5000";

const initState = {
  pending: true,
  posts: [],
  page_number: 1,
  freelance: false,
  fullTime: true,
  searchTerm: "driver",
  error: null,
};

export const postsReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_POSTS_PENDING:
      return { ...state, pending: true };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        pending: false,
        posts: action.payload,
      };
    case UPDATE_SEARCH_TERM:
      return { ...state, searchTerm: action.val };
    case UPDATE_JOBS_QUERY:
      console.log(action, "payload");
      return { ...state, posts: action.payload };
    case UPDATE_JOBS_FREELANCE:
      return { ...state, freelance: action.val };
    case UPDATE_JOBS_FULLTIME:
      return { ...state, fullTime: action.val };
    case GET_POSTS_ERROR:
      return { ...state, error: action.payload, pending: true };
    default:
      return state;
  }
};

export function fetchPostsWithRedux(keyword, length) {
  return async (dispatch, getState) => {
    const state = getState();
    const URL = `${baseUrl}/?search=${state.searchTerm}&employment_type=${
      state.freelance === true ? `contract` : `full time`
    }&page${state.page_number}`;
    dispatch(getPostsPending());
    setTimeout(() => {
      axios
        .get(URL)
        .then((res) => {
          console.log(res);
          dispatch(getPostsSuccess(res.data));
        })
        .catch((err) => {
          dispatch(getPostsError(err));
        });
    }, 2000);
  };
}

export function updateJobs(keyword, length) {
  return async (dispatch, getState) => {
    let pageNum = 0;
    const state = getState();
    const URL = `${baseUrl}/?search=${state.searchTerm}&employment_type=${
      state.freelance === true ? `contract` : `full time`
    }&page${pageNum}`;
    dispatch(getPostsPending());
    setTimeout(() => {
      axios
        .get(URL)
        .then((res) => {
          console.log(res);
          dispatch(getPostsSuccess(res.data));
        })
        .catch((err) => {
          dispatch(getPostsError(err));
        });
    }, 2000);

    pageNum += 1;
  };
}
