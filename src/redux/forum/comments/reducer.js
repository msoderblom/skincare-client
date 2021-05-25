import * as actionTypes from "./types";

const initState = {
  comments: null,
  createdComment: null,
  loading: false,
  createCommentError: null,
  replyToCommentError: null,
  getCommentsError: null,
  likeCommentError: null,
};

const commentsReducer = (state = initState, action) => {
  switch (action.type) {
    // CREATE COMMENT
    case actionTypes.CREATE_COMMENT_REQUEST:
      return {
        ...state,
        loading: true,
        createCommentError: null,
      };
    case actionTypes.CREATE_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        createdComment: action.payload,
      };
    case actionTypes.CREATE_COMMENT_FAILURE:
      return {
        ...state,
        loading: false,
        createCommentError: action.error,
      };

    // REPLY TO COMMENT
    case actionTypes.REPLY_TO_COMMENT_REQUEST:
      return {
        ...state,
        loading: true,
        replyToCommentError: null,
      };
    case actionTypes.REPLY_TO_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.REPLY_TO_COMMENT_FAILURE:
      return {
        ...state,
        loading: false,
        replyToCommentError: action.error,
      };

    // GET COMMENTS
    case actionTypes.GET_COMMENTS_REQUEST:
      return {
        ...state,
        loading: true,
        getCommentsError: null,
      };
    case actionTypes.GET_COMMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        comments: action.payload,
      };
    case actionTypes.GET_COMMENTS_FAILURE:
      return {
        ...state,
        loading: false,
        getCommentsError: action.error,
      };

    // LIKE COMMENT
    case actionTypes.LIKE_COMMENT_REQUEST:
      return {
        ...state,
        likeCommentError: null,
      };
    case actionTypes.LIKE_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        comments: state.comments.map((comment) =>
          comment._id === action.payload._id
            ? { ...comment, ...action.payload }
            : comment
        ),
      };
    case actionTypes.LIKE_COMMENT_FAILURE:
      return {
        ...state,
        loading: false,
        likeCommentError: action.error,
      };

    // UPDATE
    case actionTypes.UPDATE_COMMENTS:
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };
    case actionTypes.UPDATE_PARENT_COMMENT:
      const updatedComments = state.comments.map((comment) =>
        comment._id === action.payload._id ? action.payload : comment
      );

      return {
        ...state,
        comments: updatedComments,
      };

    default:
      return state;
  }
};

export default commentsReducer;
