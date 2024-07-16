import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import RegisterForm from '../components/moucles/registerForm'

function register() {
  return (
    <main className="flex flex-col h-screen justify-center items-center gap-4">
    <h1 className='text-4xl font bold'>Registration</h1>
    <p>enter your email to login</p>
    <Card className="w-1/3">
    <CardHeader>
      <CardTitle>
        hello user
      </CardTitle>
    </CardHeader>
    <CardContent>
    <RegisterForm></RegisterForm>
    </CardContent>
    </Card>
  </main>
  )
}

export default register