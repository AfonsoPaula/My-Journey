# SQL 🛢️ Structure Query Language

A base de dados utilizada foi criada a partir da query ```db_socios.sql``` disponibilizada no repositório, onde todas operações feitas, para consolidar os conhecimentos relativamente, foram realizadas na mesma.

## Comments:
- De uma linha ```--```
- De várias linhas ```/*   */```

## Utilização básica da instrução ```SELECT```:

1. Selecionar tudo (**\***) a partir da tabela da **sócios**
```sql
SELECT * FROM socios
```

2. Selecionar apenas 3 colunas (também é possível editar a ordem das colunas)
```sql
SELECT id_socio, nome, telefone FROM socios
```
```sql
SELECT nome, telefone, id_socio FROM socios
```

3. Adicionar um alias com o objetivo de mudar o nome de uma dada coluna
```sql
SELECT nome as nome1 FROM socios
```
```sql
SELECT nome as 'novo nome' FROM socios
```

4. Utilizar o ```SELECT``` para saber a data e hora atual
```sql
SELECT NOW()
```

5. Obter uma chave encriptada em MD5
```sql
SELECT MD5('abcdef') as chave
```

6. Realizar operações matemáticas
```sql
SELECT 10+20 as total
```
