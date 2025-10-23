import { GlobalStyle } from "./assets/global/global-style";
import HomePage from "./pages/home";
import MainLayout from "./ui/layout";

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
