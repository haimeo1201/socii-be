const express = require("express");
const route = express.Router();

const postController = require("../app/controller/postController");

const { isAuth } = require("../app/authentication/authMiddleware");

route.post("/addPost", isAuth, postController.addPost);
route.post("/removePost", isAuth, postController.removePost);
route.post("/addCommentToPost", isAuth, postController.addCommentToPost);
route.post(
    "/removeCommentFromPost",
    isAuth,
    postController.removeCommentFromPost
);
route.post("/togglePostLike", isAuth, postController.togglePostLike);
route.post("/sharePost", isAuth, postController.sharePost);

module.exports = route;