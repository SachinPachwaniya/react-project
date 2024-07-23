import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import {createUserWithEmailAndPassword} from "firebase/auth"
import { auth,db } from "../../lib/firebase"
import {  useNavigate } from "react-router-dom"
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group"
import { collection, addDoc, doc } from "firebase/firestore";
import { Description } from "@radix-ui/react-dialog"
 


const formSchema = z.object({
    title: z.string().min(2,{
        message:'2 character at least'
    }),
    description:z.string().optional(),
    amount: z.string(),
    transactionType: z.string(),
    date: z.string()
  
})

  const  transactionsForm = ()=> {
    const Navigate = useNavigate()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
    title:"",
    description:"",
    amount:"",
    transactionType:"",
    
    },
  })
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const docRef = await addDoc(collection(db, "transaction"), {
        uid:auth.currentUser?.uid,
        title:values.title,
        description:values.description,
        amount:values.amount,
        transactionType:values.transactionType,

      });
     console.log(values,auth.currentUser);
  }


  
  return (
    <>
     <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product</FormLabel>
              <FormControl>
                <Input placeholder="Enter your product " {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Amount</FormLabel>
              <FormControl>
                <Input placeholder="Amount" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="transactionType"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Notify me about...</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="all" />
                    </FormControl>
                    <FormLabel className="font-normal">
                     Income
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="mentions" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Expense
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="none" />
                    </FormControl>
                    <FormLabel className="font-normal"></FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />      
        <Button type="submit" className="w-full">Submit</Button>
      </form>
    </Form>
    </>
  )
}

export default transactionsForm