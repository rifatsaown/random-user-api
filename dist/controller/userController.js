"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.saveRandomUser = exports.getAllUser = exports.getRandomUser = exports.getConfirm = void 0;
const mongodb_1 = require("mongodb");
// getConfirm Function is for checking that api is working or not
const getConfirm = async (req, res) => {
    res.send("Api Version 1 is working");
};
exports.getConfirm = getConfirm;
/*---------------- Get Random Data --------------*/
const getRandomUser = async (req, res) => {
    const data = await req.db?.collection("userCollection").find().toArray();
    const random = Math.floor(Math.random() * data?.length); // Get Random Number Between 0 to data.length - 1
    if (data) {
        res.status(200).json({
            status: true,
            data: data[random]
        });
    }
    else {
        res.status(404).json({
            status: false,
            data: ["No Data Found"]
        });
    }
};
exports.getRandomUser = getRandomUser;
/*------------ Get All User ------------*/
const getAllUser = async (req, res) => {
    // Get Data From Database
    const result = await req.db?.collection("userCollection").find().toArray();
    let data = result;
    // Limit Data
    const { limit } = req.query;
    if (limit) {
        data = result?.slice(0, Number(limit));
    }
    // Send Response
    if (data) {
        res.status(200).json({
            status: true,
            data: data
        });
    }
    else {
        res.status(404).json({
            status: false,
            data: ["No Data Found"]
        });
    }
};
exports.getAllUser = getAllUser;
/*------------ Save a random user ------------*/
const saveRandomUser = async (req, res) => {
    // get data from user 
    const data = req.body;
    if (data) {
        const { gender, name, contact, address, photoUrl } = data;
        if (gender && name && contact && address && photoUrl) {
            // Save Data to Database
            const result = await req.db?.collection("userCollection").insertOne(data);
            if (result) {
                res.status(200).json({
                    status: true,
                    data: ["Data Saved Successfully", result]
                });
            }
            else {
                res.status(404).json({
                    status: false,
                    data: ["Error in Saving Data"]
                });
            }
        }
        else {
            res.status(404).json({
                status: false,
                data: ["Some data missing to Save"]
            });
        }
    }
    else {
        res.status(404).json({
            status: false,
            data: ["No Data Found to Save"]
        });
    }
};
exports.saveRandomUser = saveRandomUser;
/*------------ Delete a user ------------*/
const deleteUser = async (req, res) => {
    // get id from user
    const id = req.params.id;
    // Get all Data From Database
    const alldata = await req.db?.collection("userCollection").find().toArray();
    //check if data is present or not
    const data = alldata?.filter((item) => item._id == id);
    //if data is present then delete it
    if (data.length > 0) {
        const result = await req.db?.collection("userCollection").deleteOne({ _id: new mongodb_1.ObjectId(id) });
        if (result) {
            res.status(200).json({
                status: true,
                data: ["Data Deleted Successfully", result]
            });
        }
        else {
            res.status(404).json({
                status: false,
                data: ["No Data Found to Delete"]
            });
        }
    }
    else { // if data is not present then send error
        res.status(404).json({
            status: false,
            data: ["No Data Found to Delete"]
        });
    }
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=userController.js.map