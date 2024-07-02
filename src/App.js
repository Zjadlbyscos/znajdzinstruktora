import { Routes, Route } from "react-router-dom";

import { Main } from "./pages/Main";
import { Register } from "./pages/Register";
import { AreYouIns } from "./pages/AreYouInstructor";
import { ShareedLayout } from "./components/SharedLayout/SharedLayout";
import { Login } from "./pages/Login";
import ResetPasswordPage from "./pages/ResetPasswordPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ShareedLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/czyInstruktor" element={<AreYouIns />} />
          <Route path="/zarejestruj" element={<Register />} />
          <Route path="/zaloguj" element={<Login />} />
          <Route
            path="resetowanie-hasla/:resetToken"
            element={<ResetPasswordPage />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
