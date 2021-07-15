const express = require("express");
const router = express.Router();
const friendController = require("../../controller/friends/friend-controller");

router.post("/add/friend", friendController.addFriendController);

router.get("/get/friendById", friendController.getFriendControllerById);

router.get("/get/documents", friendController.getFriendController);

router.delete("/delete/documentById", friendController.deleteFriendController);

router.put("/update/documentById", friendController.putFriendController); 

module.exports = router;