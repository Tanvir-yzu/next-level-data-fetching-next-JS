const { NextResponse } = require("next/server")

export const GET = () =>{
return  NextResponse.json({ message : "Hello Next JS"})
}