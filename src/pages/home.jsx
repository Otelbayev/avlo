import { useAuth } from "../context/auth-context";

export default function Home() {
  const { user, logout } = useAuth();
  return (
    <div>
      <h2>
        Welcome, {user.name} {user.surname}
      </h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
