# Quick Auth Integration Guide

## 🚀 Simple Authentication Setup

This project uses Auth0 for seamless authentication implementation. Follow these simple steps to get started.

## Prerequisites

- Node.js (v14 or higher)
- npm, yarn, or pnpm
- A free Auth0 account

## 🛠️ Setup Steps

### 1. Install Dependencies

```bash
# Using npm
npm install

# Using yarn
yarn

# Using pnpm
pnpm install
```

### 2. Environment Configuration

Create a `.env` file in the root directory of your project and add:

```env
VITE_CLIENT_ID=your_auth0_client_id
```

### 3. Where to Get Your Client ID

1. Log in to your [Auth0 Dashboard](https://manage.auth0.com/)
2. Create a new application or select an existing one
3. Go to Application Settings
4. Copy your Client ID

## 🔐 Authentication Features

- Single Sign-On (SSO)
- Social login providers (Google, GitHub, etc.)
- Secure token handling
- Automatic token refresh
- Protected routes
- User profile management

## 📝 Usage Example

```jsx
// App.jsx
import { Auth0Provider } from '@auth0/auth0-react';

function App() {
  return (
    <Auth0Provider
      domain="your-domain.auth0.com"
      clientId={import.meta.env.VITE_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      {/* Your app components */}
    </Auth0Provider>
  );
}
```

## 🔒 Protected Routes Example

```jsx
import { useAuth0 } from '@auth0/auth0-react';

function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;
  
  return isAuthenticated ? children : <Navigate to="/login" />;
}
```

## ⚡ Quick Authentication Hooks

```jsx
// Login
const { loginWithRedirect } = useAuth0();
<button onClick={() => loginWithRedirect()}>Log In</button>

// Logout
const { logout } = useAuth0();
<button onClick={() => logout()}>Log Out</button>

// Get User Info
const { user } = useAuth0();
```

## 🤝 Contributing

Feel free to contribute to this project by submitting issues or pull requests.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⭐ Support

If you found this helpful, please give it a ⭐️!

## 📫 Contact

For any questions or concerns, please open an issue in the repository.

---

Made with ❤️ by [Your Name/Organization]
