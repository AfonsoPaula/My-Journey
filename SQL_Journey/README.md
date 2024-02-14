# SQL 🛢️ Structure Query Language

A base de dados utilizada foi criada a partir da query ```db_socios.sql``` disponibilizada no repositório, onde todas operações feitas, para consolidar os conhecimentos relativamente, foram realizadas na mesma.

## Comments:
- De uma linha ```--```
- De várias linhas ```/*   */```

<br><br>
<table>
  <tr>
    <th>Comando SQL</th>
    <th>Descrição</th>
    <th>Exemplo</th>
  </tr>
  <tr>
    <td rowspan="6">SELECT</td>
    <td>Seleciona dados da tabela sócios</td>
    <td><code>SELECT * FROM socios;</code></td>
  </tr>
  <tr>
    <td>Selecionar apenas 3 colunas (também é possível editar a ordem das colunas)</td>
    <td><code>SELECT id_socio, nome, telefone FROM socios;</code></td>
  </tr>
  <tr>
    <td>Adicionar um alias com o objetivo de mudar o nome de uma dada coluna</td>
    <td><code>SELECT nome as nome1 FROM socios;</code> ou também <code>SELECT nome as 'novo nome' FROM socios;</code></td>
  </tr>
  <tr>
    <td>Saber a data e hora atual</td>
    <td><code>SELECT NOW();</code></td>
  </tr>
  <tr>
    <td>Obter uma chave encriptada em MD5</td>
    <td><code>SELECT MD5('abcdef') as chave;</code></td>
  </tr>
  <tr>
    <td>Realizar operações matemáticas</td>
    <td><code>SELECT 10+20 as total;</code></td>
  </tr>
  <tr>
    <td rowspan="9">SELECT ... WHERE</td>
    <td>Selecionar todos os dados a partir da tabela socios, mas onde (where) o id_socio seja 10</td>
    <td><code>SELECT * FROM socios WHERE id_socio = 10;</code></td>
  </tr>
  <tr>
    <td>Selecionar apenas a coluna 'nome' da tabela socios, onde (where) o id_socio seja 10</td>
    <td><code>SELECT nome FROM socios WHERE id_socio = 10;</code></td>
  </tr>
  <tr>
    <td>Selecionar as colunas id_socio e nome da tabela socios, onde (where) o id_socio seja inferior a 10</td>
    <td><code>SELECT id_socio, nome FROM socios WHERE id_socio < 10;</code></td>
  </tr>
  <tr>
    <td>Selecionar as colunas id_socio e nome da tabela socios, onde (where) o id_socio seja igual ou inferior a 10</td>
    <td><code>SELECT id_socio, nome FROM socios WHERE id_socio <= 10;</code></td>
  </tr>
  <tr>
    <td>Selecionar as colunas id_socio e nome da tabela socios, onde (where) o id_socio seja diferente a 10</td>
    <td><code>SELECT id_socio, nome FROM socios WHERE id_socio <> 10;</code> <br><br> <code>SELECT id_socio, nome FROM socios WHERE NOT id_socio = 10;</code></td>
  </tr>
  <tr>
    <td>Apresentar todas as informações dos socios 10 e 20</td>
    <td><code>SELECT * FROM socios WHERE id_socio = 10 OR id_socio = 20;</code> *1</td>
  </tr>
  <tr>
    <td>Selecionar todos os dados que tenham o id_socio igual a 3 e que seja da Amadora</td>
    <td><code>SELECT * FROM socios WHERE id_socio = 3 AND cidade = 'Amadora';</code></td>
  </tr>
  <tr>
    <td>Primeiros 100 sócios que pertencem à cidade Lisboa</td>
    <td><code>SELECT * FROM socios WHERE id_socio <= 100 AND cidade = 'Lisboa';</code></td>
  </tr>
  <tr>
    <td>Procurar sócios com id entre 100 e 400 que sejam da cidade de Lisboa </td>
    <td><code>SELECT * FROM socios WHERE id_socio >= 100 AND id_socio <= 400 AND cidade = 'Lisboa';</code></td>
  </tr>
  <tr>
    <td rowspan="6">LIKE</td>
    <td>Selecionar todos os sócios cujo nome comece pela letra 'a'</td>
    <td><code>SELECT * FROM socios WHERE nome LIKE 'a%';</code><br><code>-- % wildcard</code> *2</td>
  </tr>
  <tr>
    <td>Selecionar todos os sócios cujo nome tenha 'Garcia' no meio</td>
    <td><code>SELECT * FROM socios WHERE nome LIKE '%Garcia%';</code></td>
  </tr>
  <tr>
    <td>Selecionar todos os sócios cujo telefone comece pelo indicativo '93'</td>
    <td><code>SELECT * FROM socios WHERE telefone LIKE '93%';</code></td>
  </tr>
  <tr>
    <td>Selecionar todos os sócios cujo telefone comece pelo indicativo '93' e que termine em '6'</td>
    <td><code>SELECT * FROM socios WHERE telefone LIKE '93%6';</code></td>
  </tr>
  <tr>
    <td>Selecionar todos os sócios cujo telefone comece pelo indicativo '93' e que tenha '6' na quarta posição</td>
    <td><code>SELECT * FROM socios WHERE telefone LIKE '93_6%';</code><br><code>-- _ wildcard</code></td>
  </tr>
  <tr>
    <td>Selecionar os sócios entre o id 100 e 200 cujo telefone comece pelo indicativo '93'</td>
    <td><code>SELECT * FROM socios WHERE telefone LIKE '93%' AND id_socio >= 100 AND id_socio <=200;</code></td>
  </tr>
  <tr>
    <td rowspan="3">NOT LIKE</td>
    <td>Selecionar todos os sócios em que o número de telefone não comece por '93'</td>
    <td><code>SELECT * FROM socios WHERE telefone NOT LIKE '93%';</code></td>
  </tr>
  <tr>
    <td>Selecionar todos os sócios em que o nome não comece pela letra 'a'</td>
    <td><code>SELECT * FROM socios WHERE telefone NOT LIKE 'a%';</code></td>
  </tr>
  <tr>
    <td>Selecionar todos os sócios em que o nome não contenha o nome 'Nunes'</td>
    <td><code>SELECT * FROM socios WHERE telefone NOT LIKE '%Nunes%';</code></td>
  </tr>
  <tr>
    <td rowspan="2">LIMIT *3</td>
    <td>Selecionar as primeiras 3 sócias chamadas 'Ana'</td>
    <td><code>SELECT * FROM socios WHERE nome LIKE 'ana %' LIMIT 3;</code></td>
  </tr>
  <tr>
    <td>Selecionar as 3 últimas sócias chamadas 'Ana'</td>
    <td><code>SELECT * FROM socios WHERE nome LIKE 'ana %' ORDER BY id_socio desc limit 3;</code></td>
  </tr>
  <tr>
    <td rowspan="5">BETWEEN</td>
    <td>Exemplo de uma query sem o operador 'BETWEEN'</td>
    <td><code>SELECT * FROM socios WHERE id_socio >= 100 AND id_socio <= 200;</code></td>
  </tr>
  <tr>
    <td>O mesmo resultado aplicando o operador 'BETWEEN'</td>
    <td><code>SELECT * FROM socios WHERE id_socio BETWEEN 100 AND 200;</code></td>
  </tr>
  <tr>
    <td>Selecionar todos os sócios com id's entre 100 e 200 ou entre 300 e 400</td>
    <td><code>SELECT * FROM socios WHERE id_socio BETWEEN 100 AND 200 OR id_socio BETWEEN 300 AND 400;</code></td>
  </tr>
  <tr>
    <td>Selecionar todos os sócios que nasceram entre a década de 1960 e 1970</td>
    <td><code>SELECT * FROM socios WHERE data_nascimento BETWEEN '1960-01-01' AND '1969-12-31';</code></td>
  </tr>
  <tr>
    <td>Selecionar todos os sócios cujo nome comece em 'Carla' e acabe em 'Fernanda'</td>
    <td><code>SELECT * FROM socios WHERE nome BETWEEN 'carla' AND 'fernanda' ORDER BY nome;</code></td>
  </tr>
  <tr>
    <td rowspan="4">IN</td>
    <td>Selecionar três sócios com id's específicos sem o operador 'in'</td>
    <td><code>SELECT * FROM socios WHERE id_socio = 10 OR id_socio = 20 OR id_socio = 30;</code></td>
  </tr>
  <tr>
    <td>Selecionar três sócios com id's específicos com o operador 'in'</td>
    <td><code>SELECT * FROM socios WHERE id_socio in (10,20,30);</code></td>
  </tr>
  <tr>
    <td>Selecionar os sócios de Lisboa e Porto sem o operador 'in'</td>
    <td><code>SELECT * FROM socios WHERE cidade = 'Lisboa' OR cidade = 'Porto';</code></td>
  </tr>
  <tr>
    <td>Selecionar os sócios de Lisboa e Porto com o operador 'in'</td>
    <td><code>SELECT * FROM socios WHERE cidade in ('Lisboa', 'Porto');</code></td>
  </tr>
  <tr>
    <td rowspan="2">NOT IN</td>
    <td>Selecionar os sócios que não possuam id's específicos</td>
    <td><code>SELECT * FROM socios WHERE id_socio NOT IN (1, 2, 3, 4, 5, 6, 7);</code></td>
  </tr>
  <tr>
    <td>Selecionar os sócios que não sejam de Lisboa e Porto</td>
    <td><code>SELECT * FROM socios WHERE cidade NOT IN ('Lisboa', 'Porto');</code></td>
  </tr>
  <tr>
    <td rowspan="5">SELECT...MIN...MAX</td>
    <td>Selecionar o sócio mais antigo</td>
    <td><code>SELECT min(data_nascimento) FROM socios;</code></td>
  </tr>
  <tr>
    <td>Selecionar o sócio mais novo</td>
    <td><code>SELECT max(data_nascimento) FROM socios;</code></td>
  </tr>
  <tr>
    <td>Selecionar o sócio mais novo dos primeiros 50 sócios</td>
    <td><code>SELECT max(data_nascimento) FROM socios WHERE id_socio<=50;</code></td>
  </tr>
  <tr>
    <td>Selecionar na tabela dos donativos a quantia mais baixa</td>
    <td><code>SELECT min(quantia) FROM donativos;</code></td>
  </tr>
  <tr>
    <td>Selecionar na tabela dos donativos a quantia mais alta</td>
    <td><code>SELECT max(quantia) FROM donativos;</code></td>
  </tr>
  <tr>
    <td rowspan="3">ALIASES</td>
    <td>Obter o donativo máximo e mínimo com aliases</td>
    <td><code>SELECT min(quantia) AS minimo, max(quantia) AS maximo FROM donativos;</code></td>
  </tr>
  <tr>
    <td>Obter a data de nascimento mais antiga e mais recente</td>
    <td><code>SELECT min(data_nascimento) AS mais_velho, max(data_nascimento) AS mais_novo FROM socios;</code></td>
  </tr>
  <tr>
    <td>Obter todos os nomes, moradas e cidades no caso de ter mais que uma tabela com colunas com o mesmo nome</td>
    <td><code>SELECT s.nome, s.morada, s.cidade FROM socios s;</code></td>
  </tr>
  <tr>
    <td rowspan="3">SELECT COUT, AVG, SUM</td>
    <td></td>
    <td><code></code></td>
  </tr>
  <tr>
      <td></td>
      <td><code></code></td>
  </tr>
  <tr>
      <td></td>
      <td><code></code></td>
  </tr>
  <tr>
      <td></td>
      <td><code></code></td>
  </tr>
  <tr>
      <td></td>
      <td><code></code></td>
  </tr>
  <tr>
      <td></td>
      <td><code></code></td>
  </tr>
  <tr>
      <td></td>
      <td><code></code></td>
  </tr>
  <tr>
      <td></td>
      <td><code></code></td>
  </tr>
  <tr>
      <td></td>
      <td><code></code></td>
  </tr>
  <tr>
      <td></td>
      <td><code></code></td>
  </tr>
  <tr>
      <td></td>
      <td><code></code></td>
  </tr>
  <tr>
      <td></td>
      <td><code></code></td>
  </tr>
</table>

  <tr>
      <td></td>
      <td><code></code></td>
  </tr>

## Utilização básica da instrução ```SELECT```:
## ```SELECT``` jutamente com a cláusula ```WHERE```:
<h2>Utilização da cláusula <strong>'LIKE'</strong></h2>
<h2>Utilização da cláusula <strong>'NOT LIKE'</strong></h2>
<h2>Utilização da cláusula <strong>'LIMIT'</strong></h2>
<h2>Utilização do operador <strong>'BETWEEN'</strong></h2>
<h2>Utilização do operador <strong>'IN'</strong></h2>
<h2>Utilização do operador <strong>'NOT IN'</strong></h2>

1* ❌ **Se substituirmos pela condição "AND" vai dar erro, pois esta condição é utilizada para encontrar valores que pertencem à mesma linha**
```sql
SELECT * FROM socios WHERE id_socio = 10 AND id_socio = 20
```

2* 📝 **Nota: Entre os parênteses o _case sensitive_ não funciona**

3* 📝 **Nota: Existem outros sistemas de gestão de bases de dados que não utilização o LIMIT, mas sim outras opções como o caso do 'TOP' ou 'NUMROW'. Consultar as documentações respetivas.**
