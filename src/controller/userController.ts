import { Request, Response } from "express";
import { ObjectId } from "mongodb";

// getConfirm Function is for checking that api is working or not
export const getConfirm =async (req: Request , res: Response) => {
    res.send("Api Version 1 is working")
}

/*---------------- Get Random Data --------------*/
export const getRandomUser =async (req: Request , res: Response) => {
    const data =await (req as any).db?.collection("userCollection").find().toArray();
    const random = Math.floor(Math.random() * data?.length); // Get Random Number Between 0 to data.length - 1
    if(data){
        res.status(200).json({
            status: true,
            data: data[random]
        })
    }else{
        res.status(404).json({
            status: false,
            data: ["No Data Found"]
        })
    }
}

/*------------ Get All User ------------*/
export const getAllUser =async (req: Request , res: Response) => {
    // Get Data From Database
    const result =await (req as any).db?.collection("userCollection").find().toArray();
    let data = result ;

    // Limit Data
    const {limit} = req.query;
    if(limit){data = result?.slice(0,Number(limit))}

    // Send Response
    if(data){
        res.status(200).json({
            status: true,
            data: data
        })
    }else{
        res.status(404).json({
            status: false,
            data: ["No Data Found"]
        })
    }
}

/*------------ Save a random user ------------*/
export const saveRandomUser =async (req: Request , res: Response) => {
    // get data from user 
    const data = req.body;
    if(data){
        const {gender,name,contact,address,photoUrl} = data;
        if(gender && name && contact && address && photoUrl){
            // Save Data to Database
            const result =await (req as any).db?.collection("userCollection").insertOne(data);
            if(result){
                res.status(200).json({
                    status: true,
                    data: ["Data Saved Successfully",result]
                })
            }else{
                res.status(404).json({
                    status: false,
                    data: ["Error in Saving Data"]
                })
            }
        }else{
            res.status(404).json({
                status: false,
                data: ["Some data missing to Save"]
            })
        }
    }
    else{
        res.status(404).json({
            status: false,
            data: ["No Data Found to Save"]
        })
    }
}

/*------------ Update a user ------------*/
export const updateRandomUser =async (req: Request , res: Response) => {
    // get id from user
    const id = req.params.id;
    const {gender , name, contact, address, photoUrl} = req.body;
 
    // Get all Data From Database
    const alldata =await (req as any).db?.collection("userCollection").find().toArray();

    //check if data is present or not
    const data = alldata?.filter((item:any) => item._id == id);
    
    //if user give data then update it
    if(gender && name && contact && address && photoUrl){
        if(data.length > 0){
            const result =await (req as any).db?.collection("userCollection").updateOne({_id: new ObjectId(id)},{$set: req.body});
            if(result){
            res.status(200).json({
                status: true,
                data: ["Data Updated Successfully",result]
            })
            }else{
                res.status(404).json({
                status: false,
                data: ["Error in Updating Data"]
                })
            }
        } else{ // if data is not present then send error
            res.status(404).json({
                status: false,
                data: ["No Data Found to Update"]
            })
        }
    } else{ // if user not give data then send error
        res.status(404).json({
            status: false,
            data: ["Some data missing to Update"]
        })
    }
}


/*------------ Delete a user ------------*/
export const deleteUser =async (req: Request , res: Response) => {
    // get id from user
    const id = req.params.id;

    // Get all Data From Database
    const alldata =await (req as any).db?.collection("userCollection").find().toArray();

    //check if data is present or not
    const data = alldata?.filter((item:any) => item._id == id);

    //if data is present then delete it
    if(data.length > 0){
        const result =await (req as any).db?.collection("userCollection").deleteOne({_id: new ObjectId(id)});
        if(result){
        res.status(200).json({
            status: true,
            data: ["Data Deleted Successfully",result]
        })
        }else{
            res.status(404).json({
            status: false,
            data: ["No Data Found to Delete"]
            })
        }
    } else{ // if data is not present then send error
        res.status(404).json({
            status: false,
            data: ["No Data Found to Delete"]
        })
    }
}