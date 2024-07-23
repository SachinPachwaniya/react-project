import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../components/ui/card'
import LoginForm from '../components/moucles/loginForm'
import { Link } from 'react-router-dom'


function login() {
  return (
    <main className="flex flex-col h-screen justify-center items-center gap-4">
    <h1 className='text-4xl font bold'>Login</h1>
    <p>enter your email to login</p>
    <Card className="w-1/3">
    <CardHeader>
      <CardTitle>
        hello user
      </CardTitle>
    </CardHeader>
    <CardContent>
    <LoginForm></LoginForm>
    </CardContent>
    <CardFooter>
      <Link to={"/register"}><u>new here ? create new account</u> </Link>
    </CardFooter>
    </Card>
  </main>
  )
}

export default login

