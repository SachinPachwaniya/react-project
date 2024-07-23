import React from 'react'
import { Button } from '../components/ui/button'
import {Input} from '../components/ui/input'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog"
import TransactionsForm from '../components/moucles/transactionsForm'
import {signOut} from "firebase/auth"
import { auth } from '../lib/firebase'
import { useNavigate } from 'react-router-dom'



const home = () => {
  const Navigate = useNavigate();
async function signout(){
signOut(auth).then(
()=>Navigate('/login')
) 
}
  return (
    <>
    
    <h1>Expense Tracker</h1>
    <Button onClick={signout}>signOut</Button>  
    
    <Dialog>
  <DialogTrigger><Button> New Transaction</Button></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Add Transaction</DialogTitle>
      <DialogDescription>
        manage your finances, keep updating your transactions
      </DialogDescription>
    </DialogHeader>
    <TransactionsForm></TransactionsForm>
  </DialogContent>
</Dialog>


    </>
  )
}

export default home