
import { useState } from 'react'
import { LoginForm } from '@/components/LoginForm'
import { SignUpForm } from '@/components/SignUpForm'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">
            {isLogin ? 'Entrar' : 'Criar conta'}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-4">
          {isLogin ? <LoginForm /> : <SignUpForm />}
          
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">
              {isLogin ? 'Não tem uma conta?' : 'Já tem uma conta?'}
            </p>
            <Button
              variant="link"
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-600 hover:text-blue-800"
            >
              {isLogin ? 'Criar conta' : 'Fazer login'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
