import { Routes, Route } from "react-router-dom";

import { MainPage } from "./pages/MainPage";
import { Register } from "./pages/Register";
import { AreYouIns } from "./pages/AreYouInstructor";
import { ShareedLayout } from "./components/SharedLayout/SharedLayout";
import { Login } from "./pages/Login";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import { EditInstructorProfile } from "./pages/EditInstructorProfile";
import { Activate } from "./components/Auth/Activate/Activate";
import { InstructorsPage } from "./pages/Instructors";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ShareedLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/czyInstruktor" element={<AreYouIns />} />
          <Route path="/edit-profile" element={<EditInstructorProfile />} />
          <Route path="/zarejestruj" element={<Register />} />
          <Route path="/zaloguj" element={<Login />} />
          <Route
            path="resetowanie-hasla/:resetToken"
            element={<ResetPasswordPage />}
          />
          <Route path="/instruktorzy" element={<InstructorsPage />} />
          <Route path="/aktywacja/:verificationToken" element={<Activate />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
