
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useProfile } from '@/hooks/useProfile'
import { useToast } from '@/hooks/use-toast'

export function ProfileCard() {
  const { profile, loading, updateProfile } = useProfile()
  const { toast } = useToast()
  const [editing, setEditing] = useState(false)
  const [fullName, setFullName] = useState('')
  const [saving, setSaving] = useState(false)

  const handleEdit = () => {
    setFullName(profile?.full_name || '')
    setEditing(true)
  }

  const handleSave = async () => {
    try {
      setSaving(true)
      await updateProfile({ full_name: fullName })
      setEditing(false)
      toast({
        title: "Perfil atualizado!",
        description: "Suas informações foram salvas com sucesso.",
      })
    } catch (error) {
      toast({
        title: "Erro ao atualizar perfil",
        description: "Tente novamente.",
        variant: "destructive",
      })
    } finally {
      setSaving(false)
    }
  }

  const handleCancel = () => {
    setEditing(false)
    setFullName('')
  }

  if (loading) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Informações do Perfil</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Label className="text-sm font-medium">Email</Label>
            <p className="text-sm text-gray-600">{profile?.email}</p>
          </div>
          
          <div>
            <Label className="text-sm font-medium">Nome Completo</Label>
            {editing ? (
              <div className="space-y-2 mt-1">
                <Input
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Digite seu nome completo"
                />
                <div className="flex space-x-2">
                  <Button size="sm" onClick={handleSave} disabled={saving}>
                    {saving ? 'Salvando...' : 'Salvar'}
                  </Button>
                  <Button size="sm" variant="outline" onClick={handleCancel}>
                    Cancelar
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-between mt-1">
                <p className="text-sm text-gray-600">
                  {profile?.full_name || 'Não informado'}
                </p>
                <Button size="sm" variant="outline" onClick={handleEdit}>
                  Editar
                </Button>
              </div>
            )}
          </div>

          <div>
            <Label className="text-sm font-medium">Membro desde</Label>
            <p className="text-sm text-gray-600">
              {profile?.created_at ? new Date(profile.created_at).toLocaleDateString('pt-BR') : 'N/A'}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
