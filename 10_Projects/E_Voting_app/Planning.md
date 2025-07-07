WHAT?

A functionality where a user can vote for a given set of candidates.

---

## Features

1. User Sign Up / Sign In.
2. View list of candidates
3. Vote for one candidate (Single voting)
4. Live vote counts shown on a particular route, results are sorted, etc.
5. User data must contain a unique Aadhar number.
6. Admin can post about elections, manage candidates, but cannot vote .
7. User can change password.
8. User can log in with Aadhar number and password.

9. There should be only one Admin
---

## Routes

### User Authentication
- **POST** `/signup` — Create a new user account
- **POST** `/login` — Log in to an existing account

### Voting
- **GET** `/candidates` — Get the list of candidates
- **POST** `/vote/:candidateId` — Vote for a specific candidate

### Vote Counts
- **GET** `/vote/counts` — Get the list of candidates sorted by their vote counts

### User Profile
- **GET** `/profile` — Get the user's profile information
- **PUT** `/profile/password` — Change the user's password

### Admin Candidate Management
- **POST** `/candidates` — Create a new candidate
- **PUT** `/candidates/:candidateId` — Update an existing candidate
- **DELETE** `/candidates/:candidateId` — Delete a candidate from the list



## Future Work
- Will Intergrate a ChatBot Specific to the Election


//Working on frontend link will be added soon of updated project