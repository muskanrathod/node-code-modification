const friendmodel = require("../../models/friends/friend-model");

exports.addFriendController = (req, res) => {
    const data = req.body;
    const friend = new friendmodel({
        name: data.name,
        mobno: data.mobno,
        address: data.address,
    });

    if(data.name || data.address || data.mobno){    
    friend.save()
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        res.send("Unable to fetch user");
    });
    }else{
        res.send("Need to provide details");
    };
};

exports.getFriendControllerById = (req,res) => {
    const _id = req.query._id;
    if(_id){
        friendmodel.findById({ _id: _id})
        .then((data) => {
            if(!data){
                res.send("Document does not exist");
            }else{
                res.send(data);
            }
        })
        .catch((err) => {
            res.send("Couldn't find user");
        });
    }else{
        res.send("Need to provide Id");
    }
};

exports.getFriendController = (req,res) => {
    friendmodel.find()
        .then((data) => {
            if(data === null || data === undefined || data === '' || data.length === 0){
                res.send("There is no document in this collection");
            }else{
                res.status(200).send(data);
            }
        })
        .catch((err) => {
            res.status(500).send("Something went wrong");;
        });
};

exports.deleteFriendController = (req,res) => {
    const _id = req.query._id;
    if(_id){
    friendmodel.findByIdAndDelete({_id: _id})
    .then((data) => {
        if(!data){
            res.send("Document does not exist")
        }else{
            res.status(200).send("Deleted successfully");
        }
    })
    .catch((err) => {
        res.status(500).send("Something went wrong");
    });
    }else{
        res.send("Need to provide id");
    }
};

exports.putFriendController = (req,res) => {
    const _id = req.query._id;
    const data = req.body;
    if(_id){
    friendmodel.findByIdAndUpdate(
        {_id: _id}, 
        {$set: {name: data.name, address: data.address, mobno: data.mobno}},
        {new : true})
        .then((data) => {
            if(!(data.name || data.address || data.mobno)){
                res.send("Need to provide updatable details");
            }else{
                res.send("Updated successfully");
            }
        })
        .catch((err) => {
            res.send("Something went wrong");
        });
    }else{
        res.send("Need to provide id");
    }    
};











