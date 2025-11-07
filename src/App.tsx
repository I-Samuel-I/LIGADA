import { GlobalStyle } from "./assets/global/global-style";
import { useEmailJs } from "./hooks/emailjs";
import HomePage from "./pages/home";
import MainLayout from "./ui/layout";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  useEmailJs("Nh5wSYe6y_LeweE-S");
  return (
    <>
      <GlobalStyle />
      <MainLayout>
        <HomePage />
      </MainLayout>
    </>
  );
}

export default App;
