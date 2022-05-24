import App from "../pageobjects/App";

describe("Login Test", function () {
  it("should be able to login with valid credentials", async function () {
    await App.HomePage.visit();
    await App.LoginPage.login("standard_user", "secret_sauce");
    await App.LoginPage.isUserLoggedIn();
  });

  it("should not be able to login with invalid credentials", async function () {
    await App.HomePage.visit();
    await App.LoginPage.login("standard_user", "secret_sauce1");
    await App.LoginPage.isErrorMessageAvailable();
  });
});
