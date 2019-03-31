# API USAGE

### reseta o dict no servidor
/reset_parties   

### verificando que limpou
/get_parties

### cria uma pt chamada "torre0f" para as 9h, e me bota como primeiro membro dela
/create_party/torre0f/9h/moriartie/hw   

### colocando o char 'linnoro' na pt de codigo __ 
/join_party/linnoro/hw/f9d83ca4-5342-41ae-8e19-caa6ff4379c7

### verificando que linnoro entrou na pt
/get_parties

### remove o char 'linnoro' da pt de codigo __
/leave_party/linnoro/f9d83ca4-5342-41ae-8e19-caa6ff4379c7
##### se este for o último membro, a party é deletada

### ...
#### /join_party tem 3 possiveis outputs

'success'

'pt full'

'no pt found'

# Estrutura dos dados
geral: 
```python
{'name':'grupos','children':[]}
```
party:
```python
{'name':partyname, 'pt_time':partytime, 'party':True, 'pid':str(uid()), 'children':[]}
```
user:
```python
{'name':charname, 'class':charclass, 'party':False}
```

--------------
```
+--geral [name]
   +--party1 [name, pt_time, pid]
   |  +--user1 [name, class]
   |  +--user2 [name, class]
   |
   +--party2 [name, pt_time, pid]
      +--user3 [name, class]
```
