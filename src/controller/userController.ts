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

/*------------ Delete a user ------------*/
export const deleteUser =async (req: Request , res: Response) => {
    const id = req.params.id;
    console.log(id);
    
    // Get Data From Database
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
}