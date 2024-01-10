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
❌ **Se substituirmos pela condição "AND" vai dar erro, pois esta condição é utilizada para encontrar valores que pertencem à mesma linha**
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

<div align='center'>
  <h2>Utilização da cláusula <strong>'LIKE'</strong></h2>
</div>

1. Selecionar todos os sócios cujo nome comece pela letra 'a' 
```sql
SELECT * FROM socios WHERE nome LIKE 'a%'
-- % wildcard
```
📝 **Nota: Entre os parênteses o _case sensitive_ não funciona**

2. Selecionar todos os sócios cujo nome tenha 'Garcia' no meio
```sql
SELECT * FROM socios WHERE nome LIKE '%Garcia%'
-- % wildcard
```
3. Selecionar todos os sócios cujo telefone comece pelo indicativo '93'
```sql
SELECT * FROM socios WHERE telefone LIKE '93%'
```
4. Selecionar todos os sócios cujo telefone comece pelo indicativo '93' e que termine em '6'
```sql
SELECT * FROM socios WHERE telefone LIKE '93%6'
```
5. Selecionar todos os sócios cujo telefone comece pelo indicativo '93' e que tenha '6' na quarta posição
```sql
SELECT * FROM socios WHERE telefone LIKE '93_6%'
-- _ wildcard
```
6. Selecionar os sócios entre o id 100 e 200 cujo telefone comece pelo indicativo '93'
```sql
SELECT * FROM socios WHERE telefone LIKE '93%' AND id_socio >= 100 AND id_socio <=200
```

<hr>

<div align='center'>
  <h2>Utilização da cláusula <strong>'NOT LIKE'</strong></h2>
</div>

1. Selecionar todos os sócios em que o número de telefone não comece por '93'
```sql
SELECT * FROM socios WHERE telefone NOT LIKE '93%'
```
2. Selecionar todos os sócios em que o nome não comece pela letra 'a'
```sql
SELECT * FROM socios WHERE telefone NOT LIKE 'a%'
```
3. Selecionar todos os sócios em que o nome não contenha o nome 'Nunes'
```sql
SELECT * FROM socios WHERE telefone NOT LIKE '%Nunes%'
```

<hr>

<div align='center'>
  <h2>Utilização da cláusula <strong>'LIMIT'</strong></h2>
</div>

1. Selecionar as primeiras 3 sócias chamadas 'Ana'
```sql
SELECT * FROM socios WHERE nome LIKE 'ana %' LIMIT 3
```
2. Selecionar as 3 últimas sócias chamadas 'Ana'
```sql
SELECT * FROM socios WHERE nome LIKE 'ana %' ORDER BY id_socio desc limit 3
```

📝 **Nota: Existem outros sistemas de gestão de bases de dados que não utilização o LIMIT, mas sim outras opções como o caso do 'TOP' ou 'NUMROW'. Consultar as documentações respetivas.**

<hr>

<div align='center'>
  <h2>Utilização do operador <strong>'BETWEEN'</strong></h2>
</div>

1. Exemplo de uma query sem o operador ```BETWEEN```
```sql
SELECT * FROM socios WHERE id_socio >= 100 AND id_socio <= 200
```
2. O mesmo resultado aplicando o operador ```BETWEEN```
```sql
SELECT * FROM socios WHERE id_socio BETWEEN 100 AND 200
```
3. Selecionar todos os sócios com id's entre 100 e 200 ou entre 300 e 400
```sql
SELECT * FROM socios WHERE id_socio BETWEEN 100 AND 200 OR id_socio BETWEEN 300 AND 400
```
4. Selecionar todos os sócios que nasceram entre a década de 1960 e 1970
```sql
SELECT * FROM socios WHERE data_nascimento BETWEEN '1960-01-01' AND '1969-12-31'
```
5. Selecionar todos os sócios cujo nome comece em 'Carla' e acabe em 'Fernanda'
```sql
SELECT * FROM socios WHERE nome BETWEEN 'carla' AND 'fernanda' ORDER BY nome
```

📝 **Nota: ASC é assumido por defeito quando se utiliza somente o 'ORDER BY'**

<div align='center'>
  <h2>Utilização do operador <strong>'IN'</strong></h2>
</div>

1. Selecionar três sócios com id's específicos sem o operador ```ìn```
```sql
SELECT * FROM socios WHERE id_socio = 10 OR id_socio = 20 OR id_socio = 30
```
2. Selecionar três sócios com id's específicos com o operador ```ìn```
```sql
SELECT * FROM socios WHERE id_socio in (10,20,30)
```
3. Selecionar os sócios de Lisboa e Porto sem o operador ```ìn```
```sql
SELECT * FROM socios WHERE cidade = 'Lisboa' OR cidade = 'Porto'
```
4. Selecionar os sócios de Lisboa e Porto com o operador ```ìn```
```sql
SELECT * FROM socios WHERE cidade in ('Lisboa', 'Porto')
```

<div align='center'>
  <h2>Utilização do operador <strong>'NOT IN'</strong></h2>
</div>

1. Selecionar os sócios que não possuam id's específicos
```sql
SELECT * FROM socios WHERE id_socio NOT IN (1, 2, 3, 4, 5, 6, 7)
```
2. Selecionar os sócios que não sejam de Lisboa e Porto
```sql
SELECT * FROM socios WHERE cidade NOT IN ('Lisboa', 'Porto')
```
