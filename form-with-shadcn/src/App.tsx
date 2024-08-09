import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Button } from "./components/ui/button";

import { useState } from "react";
import { Eye } from "lucide-react";

function App() {
  
// const [passwordVisibility,setPasswordVisibility] = useState("password");
  return (
    <> 
      {/* <main className="flex  h-screen justify-center items-center">
        <Card className="w-1/3">
          <CardHeader>
            <CardTitle>Hello User</CardTitle>
          </CardHeader>
          <CardContent>
            <Label>Enter your email</Label>
            <Input></Input>    
          </CardContent>
          <CardFooter>
            <div  className="flex flex-col"> 
            <Label>Password</Label>
            <Input type={passwordVisibility} className="w-80 "></Input>
            <Button className="w-20 bg-slate-60" onClick={()=>
            {
              if(passwordVisibility ==="password"){
                 setPasswordVisibility("text")
              }else{
                setPasswordVisibility("password")
              }
            }}><Eye></Eye></Button>
            </div>
            <Button className="flex flex-col">Login</Button>
          </CardFooter>
        </Card>
      </main> */}
      <div className="flex flex-col justify-center items-center  bg-slate-950 h-screen ">
      <Card className="flex flex-col  items-center ">
        <CardHeader>
          <h1 className="text-2xl font-bold">Form with shadcn</h1>
          <h2>Email</h2>
          <Input placeholder="enter your email here"></Input>
        </CardHeader>
        <CardContent>
          <h1>Password</h1>
          <Input placeholder="enter your password"></Input>
        </CardContent>
        <CardFooter>
          <Button >submit</Button>
        </CardFooter>
      </Card>
      </div>
    </>
  )
}

export default App
