import { Request, Response } from "express"

export const getConfirm =async (req: Request , res: Response) => {
    res.send("Api Version 1 is working")
}

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
        res.status(200).json({
            status: false,
            data: ["No Data Found"]
        })
    }
}