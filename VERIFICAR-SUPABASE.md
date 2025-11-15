# 🔍 Verificar Configuração do Supabase

## ✅ Chave Atualizada no Código

A chave já está no código:
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRtaGZxb3NncG1sbGFiYml6dnhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMwODk3MjMsImV4cCI6MjA3ODY2NTcyM30.H0jcgm7yZznvAcnwwCnoxvMa7EEAIfunTGJL6oDVlSg
```

## ⚠️ Se Ainda Der Erro 401

### 1. Verifique RLS (Row Level Security)

No Supabase Dashboard:
1. Vá em: **Authentication** → **Policies**
2. Selecione a tabela: `leads ebook gratuito`
3. Verifique se existe uma política para INSERT

**Se não existir, execute este SQL:**

```sql
-- Habilitar RLS
ALTER TABLE "leads ebook gratuito" ENABLE ROW LEVEL SECURITY;

-- Criar política para permitir INSERT público
CREATE POLICY "Allow public insert" 
ON "leads ebook gratuito" 
FOR INSERT 
TO anon 
WITH CHECK (true);
```

### 2. Verifique o Nome da Tabela

1. Vá em: **Table Editor**
2. Confirme que o nome é exatamente: `leads ebook gratuito`
3. Se for diferente, atualize no código `lib/supabase-simple.ts`

### 3. Verifique os Campos

A tabela deve ter:
- `name` (TEXT)
- `email` (TEXT)
- `phone` (TEXT)

### 4. Teste a API Diretamente

No Supabase Dashboard:
1. Vá em: **API** → **REST**
2. Teste o endpoint manualmente

## ✅ Código Limpo

- ✅ Arquivo `lib/supabase.ts` antigo removido
- ✅ Usando apenas `lib/supabase-simple.ts`
- ✅ Chave atualizada
- ✅ Sem conflitos

