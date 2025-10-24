import { GlobalStyle } from "./assets/global/global-style";
import HomePage from "./pages/home";
import MainLayout from "./ui/layout";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
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
