import App from "../pageobjects/App";

describe("User should be able to login", function () {
  it("should be able to login with valid credentials", async function () {
    await App.HomePage.visit();
    await App.LoginPage.login("standard_user", "secret_sauce");
  });
});
