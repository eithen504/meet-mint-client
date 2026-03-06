import { Navigate, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import ProblemesPage from "./pages/ProblemesPage";
import { useUser } from "@clerk/clerk-react";
import { Toaster } from "react-hot-toast";
import DashboardPage from "./pages/DashboardPage";
import ProblemPage from "./pages/ProblemPage";
import SessionPage from "./pages/SessionPage";

function App() {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) return null;

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/dashboard"
          element={
            isSignedIn ? <DashboardPage /> : <Navigate to="/" />
          }
        />

        <Route
          path="/problems"
          element={
            isSignedIn ? <ProblemesPage /> : <Navigate to="/" />
          }
        />

        <Route
          path="/problem/:id"
          element={
            isSignedIn ? <ProblemPage /> : <Navigate to={"/"} />
          }
        />

        <Route
          path="/session/:id"
          element={
            isSignedIn ? <SessionPage /> : <Navigate to={"/"} />
          }
        />
      </Routes>

      <Toaster toastOptions={{ duration: 3000 }} />
    </>
  );
}

export default App;