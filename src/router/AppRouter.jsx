import { Route, Routes } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { LandingPage } from "../website/pages/LandingPage";
import { QuizPage } from "../website/pages/QuizPage";

export function AppRouter() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<LandingPage />} />
          <Route path="/quiz" element={<QuizPage />} />
        </Route>
      </Routes>
    </main>
  );
}
