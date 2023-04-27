import {
  BrowserRouter,
  Routes,
  Route,
  useSearchParams,
} from "react-router-dom";
import "./styles/Student.scss";
import StudentMainPage from "./pages/StudentMainPage";
import StudentPage from "./pages/StudentPage";
import NotFound from "./pages/NotFound";

function PracticeApp() {
  return (
    <div className="PracticeApp">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudentMainPage />} />
          <Route path="/student/:name" element={<StudentPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default PracticeApp;
