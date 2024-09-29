import { request } from "http";
import { NextApiResponse } from "next";

export async function PUT(req:Request,res:NextApiResponse){
  const formData = await req.formData();
  const name = formData.get('data')
  return Response.json({updateData: name }) 
}
