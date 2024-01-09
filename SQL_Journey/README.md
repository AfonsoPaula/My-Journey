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

<hr>

## ```SELECT``` jutamente com a cláusula ```WHERE```:

1. Selecionar todos os dados a partir da tabela socios, mas onde (where) o id_socio seja 10
```sql
SELECT * FROM socios WHERE id_socio = 10
```
2. Selecionar apenas a coluna 'nome' da tabela socios, onde (where) o id_socio seja 10
```sql
SELECT nome FROM socios WHERE id_socio = 10
```
3. Selecionar as colunas id_socio e nome da tabela socios, onde (where) o id_socio seja inferior a 10
```sql
SELECT id_socio, nome FROM socios WHERE id_socio < 10
```
4. Selecionar as colunas id_socio e nome da tabela socios, onde (where) o id_socio seja igual ou inferior a 10
```sql
SELECT id_socio, nome FROM socios WHERE id_socio <= 10
```
5. Selecionar as colunas id_socio e nome da tabela socios, onde (where) o id_socio seja diferente a 10
```sql
SELECT id_socio, nome FROM socios WHERE id_socio <> 10
```
```sql
SELECT id_socio, nome FROM socios WHERE NOT id_socio = 10
```
6. Apresentar todas as informações dos socios 10 e 20
```sql
SELECT * FROM socios WHERE id_socio = 10 OR id_socio = 20
```
❌ Se substituirmos pela condição "AND" vai dar erro, pois esta condição é utilizada para encontrar valores que pertencem à mesma linha
```sql
SELECT * FROM socios WHERE id_socio = 10 AND id_socio = 20
```
7. Selecionar todos os dados que tenham o id_socio igual a 3 e que seja da Amadora
```sql
SELECT * FROM socios WHERE id_socio = 3 AND cidade = 'Amadora'
```
8. Primeiros 100 sócios que pertencem à cidade Lisboa
```sql
SELECT * FROM socios WHERE id_socio <= 100 AND cidade = 'Lisboa'
```
9. Procurar sócios com id entre 100 e 400 que sejam de Lisboa
```sql
SELECT * FROM socios WHERE id_socio >= 100 AND id_socio <= 400 AND cidade = 'Lisboa'
```

<hr>
