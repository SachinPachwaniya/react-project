import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import {signInWithEmailAndPassword} from "firebase/auth"
import { auth } from "../../lib/firebase"
import { useNavigate } from "react-router-dom"
 
const formSchema = z.object({
  email:z.string().email({
    message:'invalid email.com'
  }),
  password:z.string().min(5,{
  message:"password should be at least 8 character"
  }),
//   confirmPassword:z.string(),
  
})
  const  loginform = ()=> {
    const navigate = useNavigate()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
    email:"",
    password:"",
    // confirmPassword:""
    },
  })
  async function onSubmit(values: z.infer<typeof formSchema>) {
 const user =  await signInWithEmailAndPassword(auth,values.email,values.password)
   .then((userCredential)=>{
    const user =userCredential.user;
    console.log(user)
    navigate('/')
   })
   .catch((error)=>{
      const errorCode:any = error.code;
      const errorMessage:string = error.message;
      console.log(errorCode,errorMessage)
   })
  
  }


  
  return (
    <>
     <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>email</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>password</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        /> 
        <Button type="submit" className="w-full">login</Button>
      </form>
    </Form>
    </>
  )
}

export default loginform