import prisma from "@repo/db/prisma"
import { NextRequest, NextResponse } from "next/server"


export const GET=async(req:NextRequest)=>{

    const email= req.nextUrl.searchParams.get("email")

    const data=await prisma.alumniConnection.findMany({
        where:{
            alumniemail:email ||""
        }
    })

    return NextResponse.json({data})



}


export const POST=async(req:NextRequest)=>{

    const {alumniemail,otheralumniemail,otheralumniname}=await req.json()


    const data=await prisma.alumniConnection.create({
        data:{
            alumniemail,
            otheralumniemail,
            otheralumniname
            
        }
    })

    return NextResponse.json({msg:"done"})



}