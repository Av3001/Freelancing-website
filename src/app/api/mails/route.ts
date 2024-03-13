const nodemailer=require("nodemailer")
import { NextResponse,NextRequest } from "next/server";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  service:"gmail",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main(address:string,message:string) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: "queries regarding services 😉", // sender address
    to: `${process.env.TO},${process.env.TO1}`, // list of receivers
    subject: "Someone came to your website", // Subject line
    text: `Customer mail id is ----->\n${address}\n
    ${message}`, // plain text body
  });
  
}

export async function OPTIONS(req: Request) {
 
  try {
    const {email,message} =await req.json();    
    main(email,message);
    return NextResponse.json("message sent successfully",{status:200})
  } catch (error) {
    console.log("[SERVERS_POST]",error);
    return new NextResponse("Internal Error",{status:500})
  }
  
}

export async function POST(req:NextRequest) {
  try {
    const {email,message} =await req.json();    
    main(email,message);
    return NextResponse.json("message sent successfully",{status:200})
  } catch (error) {
    console.log("[SERVERS_POST]",error);
    return new NextResponse("Internal Error",{status:500})
  }
}