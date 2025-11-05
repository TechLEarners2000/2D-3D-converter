# TODO: Add User Registration with File-Based Storage

- [x] Create lib/users.ts for user management functions (read/write users.json)
- [x] Create app/register/page.tsx for registration form
- [x] Create app/api/register/route.ts to handle registration and save to users.json
- [x] Modify app/api/login/route.ts to read users from users.json instead of hardcoded array
- [x] Update app/login/page.tsx to add link to register page
- [x] Update middleware.ts to allow access to register page
- [x] Test registration and login functionality
