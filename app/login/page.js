'use client'; // Mark as a Client Component

import { useRouter } from 'next/navigation'; // Use navigation from App Router

export default function LoginPage() {
  const router = useRouter(); // Initialize useRouter from next/navigation

  const handleLogin = () => {
    // Simulate setting a token in localStorage
    localStorage.setItem(
      'user',
      JSON.stringify({ token: 'test-token', role: 'admin' })
    );
    router.push('/admin'); // Redirect to admin page
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login as Admin</button>
    </div>
  );
}
