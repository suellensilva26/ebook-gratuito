-- Script SQL para criar a tabela de leads no Supabase
-- Execute este script no SQL Editor do Supabase

-- Criar tabela leads_ebooks
CREATE TABLE leads_ebooks (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  nome TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  telefone TEXT,
  cupom_codigo TEXT DEFAULT 'NEURO100',
  cupom_valor NUMERIC DEFAULT 100,
  link_telegram_enviado BOOLEAN DEFAULT FALSE,
  data_criacao TIMESTAMP DEFAULT NOW(),
  origem TEXT DEFAULT 'landing_ebooks'
);

-- Índices para performance
CREATE UNIQUE INDEX leads_ebooks_email_idx ON leads_ebooks(email);
CREATE INDEX leads_ebooks_data_criacao_idx ON leads_ebooks(data_criacao);

-- RLS (Row Level Security) - permitir insert público
ALTER TABLE leads_ebooks ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public insert" ON leads_ebooks FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public read" ON leads_ebooks FOR SELECT WITH CHECK (true);
