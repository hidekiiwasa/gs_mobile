# Documentação da API - Global Solution

API RESTful para gerenciamento de usuários e eventos de queda de energia.

## Sumário

- [Usuários](#usuários)
  - [Criar Usuário](#criar-usuário)
  - [Atualizar Usuário](#atualizar-usuário)
  - [Listar Usuários](#listar-usuários)
  - [Buscar Usuário por ID](#buscar-usuário-por-id)
  - [Deletar Usuário](#deletar-usuário)
- [Eventos](#eventos)
  - [Criar Evento](#criar-evento)
  - [Atualizar Evento](#atualizar-evento)
  - [Listar Eventos](#listar-eventos)
  - [Buscar Evento por ID](#buscar-evento-por-id)
  - [Buscar Eventos por Estado](#buscar-eventos-por-estado)
  - [Buscar Eventos por Região e Estado](#buscar-eventos-por-região-e-estado)
  - [Deletar Evento](#deletar-evento)
- [Modelos](#modelos)
- [Status HTTP](#status-http)

---

## Usuários

### Criar Usuário

- **POST** `/usuarios`
- **Request Body:**
  ```json
  {
    "nome": "string",
    "username": "string",
    "senha": "string"
  }
  ```
- **Response:** 201 Created  
  ```json
  {
    "id": 1,
    "nome": "string",
    "username": "string"
  }
  ```

---

### Atualizar Usuário

- **PUT** `/usuarios/{id}`
- **Request Body:**
  ```json
  {
    "nome": "string",
    "username": "string",
    "senha": "string"
  }
  ```
- **Response:** 200 OK  
  ```json
  {
    "id": 1,
    "nome": "string",
    "username": "string"
  }
  ```
- **404 Not Found** se o usuário não existir.

---

### Listar Usuários

- **GET** `/usuarios`
- **Response:** 200 OK  
  ```json
  [
    {
      "id": 1,
      "nome": "string",
      "username": "string"
    }
  ]
  ```

---

### Buscar Usuário por ID

- **GET** `/usuarios/{id}`
- **Response:** 200 OK  
  ```json
  {
    "id": 1,
    "nome": "string",
    "username": "string"
  }
  ```
- **404 Not Found** se o usuário não existir.

---

### Deletar Usuário

- **DELETE** `/usuarios/{id}`
- **Response:** 204 No Content  
- **404 Not Found** se o usuário não existir.

---

## Eventos

### Criar Evento

- **POST** `/eventos`
- **Request Body:**
  ```json
  {
    "idUsuario": 1,
    "endereco": {
      "logradouro": "string",
      "numero": "string",
      "complemento": "string",
      "bairro": "string",
      "cidade": "string"
    },
    "cep": "string",
    "regiao": "string",
    "estado": "string",
    "causa": "string",
    "descricao": "string"
  }
  ```
- **Response:** 201 Created  
  ```json
  {
    "id": 1,
    "usuario": { ... },
    "endereco": "string",
    "cep": "string",
    "regiao": "string",
    "estado": "string",
    "causa": "string",
    "descricao": "string",
    "status": "OCORRENDO",
    "quandoComecou": "2025-06-06T12:00:00"
  }
  ```
- **400 Bad Request** se o usuário não existir.

---

### Atualizar Evento

- **PUT** `/eventos/{id}`
- **Request Body:**
  ```json
  {
    "endereco": { ... },
    "cep": "string",
    "regiao": "string",
    "estado": "string",
    "causa": "string",
    "descricao": "string",
    "status": "OCORRENDO" | "ENCERRADO"
  }
  ```
- **Response:** 200 OK  
  ```json
  {
    "id": 1,
    ...
  }
  ```
- **404 Not Found** se o evento não existir.

---

### Listar Eventos

- **GET** `/eventos`
- **Response:** 200 OK  
  ```json
  [
    {
      "id": 1,
      ...
    }
  ]
  ```

---

### Buscar Evento por ID

- **GET** `/eventos/{id}`
- **Response:** 200 OK  
  ```json
  {
    "id": 1,
    ...
  }
  ```
- **404 Not Found** se o evento não existir.

---

### Buscar Eventos por Estado

- **GET** `/eventos/estado?estado=SP`
- **Response:** 200 OK  
  ```json
  [
    {
      "id": 1,
      ...
    }
  ]
  ```

---

### Buscar Eventos por Região e Estado

- **GET** `/eventos/regiaoestado?estado=SP&regiao=Sul`
- **Response:** 200 OK  
  ```json
  [
    {
      "id": 1,
      ...
    }
  ]
  ```

---

### Deletar Evento

- **DELETE** `/eventos/{id}`
- **Response:** 204 No Content  
- **404 Not Found** se o evento não existir.

---

## Modelos

### Usuário

```json
{
  "id": 1,
  "nome": "string",
  "username": "string"
}
```

### Evento

```json
{
  "id": 1,
  "usuario": { ... },
  "endereco": "string",
  "cep": "string",
  "regiao": "string",
  "estado": "string",
  "causa": "string",
  "descricao": "string",
  "status": "OCORRENDO" | "ENCERRADO",
  "quandoComecou": "2025-06-06T12:00:00"
}
```

---

## Status HTTP

- **200 OK** – Sucesso na requisição.
- **201 Created** – Recurso criado com sucesso.
- **204 No Content** – Recurso deletado com sucesso.
- **400 Bad Request** – Erro de validação ou dados inválidos.
- **404 Not Found** – Recurso não encontrado.

---

**Observação:**  
Todos os endpoints seguem o padrão RESTful, utilizando os métodos HTTP adequados para cada operação (GET, POST, PUT, DELETE).
