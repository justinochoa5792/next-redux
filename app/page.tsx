"use client";
import Login from "./log-in";
import { useAppSelector } from "./redux/features/authSlice";

export default function Home() {
  const username = useAppSelector((state) => state.authReducer.value.username);
  const isModerator = useAppSelector(
    (state) => state.authReducer.value.isModerator
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Login />
      Username: {username}
      {isModerator && <h1>This user is a moderator</h1>}
    </main>
  );
}
