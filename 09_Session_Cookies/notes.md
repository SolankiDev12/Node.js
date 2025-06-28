# 🔐 Authentication, Sessions, Tokens & Storage

---

## 🧭 Introduction

In a web application, it's inefficient and inconvenient to ask the user to enter their credentials on every request. This is why **sessions** and **token-based authentication** are implemented. They allow users to log in once and remain authenticated across different routes and pages.

---

## 🧾 What is a Session?

A **session** allows the server to remember the user's state across multiple requests.

- After login, a **session** is created on the server.
- A **session ID** is sent to the client and stored in a **cookie**.
- On future requests, the client sends back the cookie with the session ID, so the server knows who the user is.

### 🔁 Session Flow:
Client -----> Request Login -----> Server -----> Validates via DB
Stores Session ID in DB
<----- Sends back Cookie with Session ID


- The session stores user info (usually in JSON format).
- The cookie acts as a reference to the server-side session.

---

## 🍪 Cookies: Session vs Persistent

Cookies are small files stored in the browser to maintain user state.

### 🔸 Types of Cookies:

| Type               | Description                                   |
|--------------------|-----------------------------------------------|
| **Session Cookies** | Temporary. Deleted when the browser is closed. |
| **Persistent Cookies** | Remain for a defined period. Useful for "Remember Me" |

---

## 💾 Storage Options in the Browser

| Storage Type       | Purpose                                      | Lifespan                        | Notes                            |
|--------------------|----------------------------------------------|----------------------------------|----------------------------------|
| **Cookies**         | Server communication, authentication         | Controlled by server             | Can be sent with every request   |
| **Local Storage**   | Long-term storage of data                    | Persists until manually cleared  | Not sent automatically with requests |
| **Session Storage** | Temporary data for a browser tab/session     | Cleared on tab/browser close     | Isolated per tab                 |

---

## 🔑 Token-Based Authentication

**Token-based authentication** (typically with JWTs) is **stateless**, meaning the server doesn’t need to remember the user session.

- After login, the server generates a **token**.
- The token is **signed** and optionally **encrypted**.
- The client stores the token and sends it with each request.

### 🔁 Token Flow:
Client -----> Sends Credentials -----> Server
<----- Sends Back Token (JWT)

Future Requests:
Client -----> Sends Token (e.g., in header) -----> Server
Server verifies token using secret key

markdown
Copy
Edit

### 🔐 Token Storage

- Tokens can be stored in:
  - **Cookies** (recommended if using `HttpOnly`)
  - **Local Storage** (less secure; vulnerable to XSS)
  - **Session Storage** (cleared on tab/browser close)

---

## ⚖️ Session vs Token Authentication

| Feature                        | Session-Based Auth                 | Token-Based Auth (e.g. JWT)       |
|-------------------------------|------------------------------------|------------------------------------|
| **Where is data stored?**     | Server stores session              | Token stored on client             |
| **Client stores**             | Cookie with session ID             | Token (in cookie or localStorage)  |
| **Authentication**            | Server checks session ID in DB     | Server decrypts/verifies token     |
| **Modifiable by Admin**       | Yes (can kill session from server) | No (token is immutable)            |
| **Statefulness**              | Stateful                           | Stateless                          |
| **Scalability**               | Harder (requires server memory/DB) | Easier (no DB lookup required)     |
| **Security**                  | More secure if server-controlled   | Secure but harder to revoke        |
| **Use Cases**                 | Web apps (traditional)             | APIs, SPAs, Mobile apps            |

---

## 📘 Summary

- **Session Authentication**:
  - Server maintains state.
  - Uses cookies to store session ID.
  - Easier to revoke or control from the backend.

- **Token Authentication**:
  - Stateless.
  - Auth info inside the token.
  - Easier to scale, harder to revoke.
  - Usually implemented using JWT.

- **Cookies**:
  - Can be `HttpOnly`, `Secure`.
  - Can store either session ID or token.

- **Web Storage**:
  - Use localStorage for non-sensitive long-term data.
  - Use sessionStorage for temporary session data.
  - Avoid storing sensitive data (like tokens) in JS-accessible storage.


# 📘 JSON Web Token (JWT) Notes

## 🔹 What is JWT?

JWT (JSON Web Token) is a compact and self-contained way to securely transmit information between parties as a **JSON object**.

It is widely used for:

- **Authentication** (e.g., login sessions)
- **Authorization** (e.g., checking user permissions)

### ✅ Key Feature: Statelessness
JWTs are **stateless**, meaning:
- The **server does not need to store session info**.
- All necessary data is contained in the token itself.
- The server simply verifies the token using a secret key.

---

## 🔸 Structure of a JWT

A JWT consists of **three parts**, separated by dots (`.`):

1️⃣ Header
Specifies the token type and signing algorithm.

```javaScript
{
  "alg": "HS256",
  "typ": "JWT"
}
```

2️⃣ Payload
Contains claims — statements about the user and additional metadata.

Standard claims:

sub (Subject)

iat (Issued At)

exp (Expiration Time)

You can also define custom claims like:

userId, role, email, etc.

```
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}
```

3️⃣ Signature
Ensures the token hasn't been tampered with.

Generated by hashing the header and payload using a secret key.

```javaScript
HMACSHA256(
  base64UrlEncode(header) + "." + base64UrlEncode(payload),
  secret
)
```

🔁 Authentication Flow Using JWT
User logs in with credentials.

Authentication server validates credentials and returns a JWT.

On future requests, the client sends the JWT, usually in the HTTP Authorization header:

makefile
Copy
Edit
Authorization: Bearer <token>
Server verifies the token using the secret key.

If valid, the server processes the request based on token data.

🔧 JWT in Node.js
🔐 Generate a Token
```javaScript
const jwt = require('jsonwebtoken');

const payload = {
  userId: 'abc123',
  role: 'admin'
};

const secretKey = 'mySecretKey';

const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });

console.log(token);

```

🛡️ Verify a Token

```javaScript
jwt.verify(token, secretKey, (err, decoded) => {
  if (err) {
    console.error('Token is invalid or expired');
  } else {
    console.log('Decoded payload:', decoded);
  }
});

```

📌 Summary
✅ JWT is a secure, self-contained token format for transmitting data.

🧠 Composed of: Header, Payload, Signature.

💾 Stateless: No need to store sessions on the server.

🔐 Must be signed using a secret key (HMAC) or public/private keys (RSA/EC).

📦 Commonly used in API authentication, SPAs, mobile apps, and microservices.

