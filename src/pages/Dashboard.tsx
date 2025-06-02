
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ProfileCard } from '@/components/ProfileCard'
import { useAuth } from '@/hooks/useAuth'
import { useToast } from '@/hooks/use-toast'

export default function Dashboard() {
  const { user, signOut } = useAuth()
  const { toast } = useToast()

  const handleSignOut = async () => {
    try {
      await signOut()
      toast({
        title: "Logout realizado com sucesso!",
        description: "Até logo!",
      })
    } catch (error) {
      toast({
        title: "Erro ao fazer logout",
        description: "Tente novamente.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <Button onClick={handleSignOut} variant="outline">
            Sair
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Bem-vindo!</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Olá, <span className="font-semibold">{user?.email}</span>!
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Você está logado no sistema.
              </p>
            </CardContent>
          </Card>

          <div className="md:col-span-2">
            <ProfileCard />
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Ações Rápidas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button className="w-full" variant="outline">
                  Configurações
                </Button>
                <Button className="w-full" variant="outline">
                  Ajuda
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
