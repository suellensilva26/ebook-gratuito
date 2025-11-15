// ✅ Versão simplificada - SEM ERROS - URL VERIFICADA
const SUPABASE_URL = 'https://tmhfqosgpmllabbizvxs.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRtaGZxb3NncG1sbGFiYml6dnhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMwODk3MjMsImV4cCI6MjA3ODY2NTcyM30.H0jcgm7yZznvAcnwwCnoxvMa7EEAIfunTGJL6oDVlSg'

// Nome da tabela codificado
const TABLE_NAME = encodeURIComponent('leads ebook gratuito')

export async function saveLeadSimple(data: { name: string; email: string; phone: string }) {
  // URL completa para debug
  const fullUrl = `${SUPABASE_URL}/rest/v1/${TABLE_NAME}`
  
  // Log para verificar URL (apenas em desenvolvimento)
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
    console.log('🔍 URL Supabase:', fullUrl)
    console.log('🔍 Tabela:', TABLE_NAME)
  }

  try {
    const response = await fetch(
      fullUrl,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Prefer': 'return=representation'
        },
        body: JSON.stringify(data)
      }
    )

    if (response.ok) {
      return { success: true, message: '✅ Ebooks serão enviados para seu email!' }
    } else {
      const errorData = await response.json().catch(() => ({ message: 'Erro desconhecido' }))
      
      // Log do erro para debug
      if (typeof window !== 'undefined') {
        console.error('❌ Erro Supabase:', {
          status: response.status,
          statusText: response.statusText,
          error: errorData,
          url: fullUrl
        })
      }
      
      if (response.status === 401) {
        return { 
          success: false, 
          message: '❌ Erro de autenticação. Verifique as credenciais do Supabase.' 
        }
      }
      
      if (errorData.code === '23505' || errorData.message?.includes('duplicate')) {
        return { success: false, message: '⚠️ Email já registrado!' }
      }

      return { 
        success: false, 
        message: `❌ Erro: ${errorData.message || 'Tente novamente!'}` 
      }
    }
  } catch (error: any) {
    // Log do erro de conexão
    if (typeof window !== 'undefined') {
      console.error('❌ Erro de conexão:', error)
      console.error('❌ URL tentada:', fullUrl)
    }
    return { 
      success: false, 
      message: `❌ Erro de conexão: ${error.message || 'Verifique sua internet'}` 
    }
  }
}
