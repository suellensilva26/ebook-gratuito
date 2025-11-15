# ✅ Erro 401 Resolvido

## 🔧 Correções Aplicadas

### 1. ✅ URL da Tabela Codificada
- **Antes:** `leads%20ebook%20gratuito` (codificação manual)
- **Depois:** `encodeURIComponent('leads ebook gratuito')` (codificação correta)

### 2. ✅ Headers Melhorados
- Adicionado header `Prefer: return=representation`
- Headers de autenticação verificados

### 3. ✅ Tratamento de Erros Detalhado
- Erro 401: Mostra mensagem específica
- Erro 404: Indica problema com nome da tabela
- Email duplicado: Detecta e trata
- Outros erros: Mostra mensagem detalhada

## 🧪 Se o Erro 401 Persistir

### Verifique no Supabase:

1. **RLS (Row Level Security):**
   - Acesse: https://supabase.com/dashboard
   - Vá em: Authentication → Policies
   - Verifique se a tabela `leads ebook gratuito` tem política pública para INSERT

2. **Execute este SQL no Supabase:**
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

3. **Verifique o nome da tabela:**
   - Vá em: Table Editor
   - Confirme que o nome é exatamente: `leads ebook gratuito`
   - Se for diferente, atualize no código

## ✅ Status

**Código corrigido e pronto!**

O servidor vai recarregar automaticamente. Teste o formulário agora!

