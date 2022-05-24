import HomePage from "../pageobjects/HomePage";
import LoginPage from "../pageobjects/LoginPage";

class App {
  public get HomePage() {
    return HomePage;
  }

  public get LoginPage() {
    return LoginPage;
  }
}

export default new App();
