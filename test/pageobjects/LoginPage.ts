class LoginPage {
  protected get username() {
    return $('input[id="user-name"]');
  }

  protected get password() {
    return $('input[id="password"]');
  }

  protected get submitBtn() {
    return $('input[id="login-button"]');
  }

  protected get inventoryContainer() {
    return $("div[id=inventory_container]");
  }

  protected get errorMessage() {
    return $('h3[data-test="error"]');
  }

  public async login(username, password) {
    await this.username.setValue(username);
    await this.password.setValue(password);
    await this.submitBtn.click();
  }

  public async isUserLoggedIn() {
    await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
    await expect(this.inventoryContainer).toBePresent();
  }

  public async isErrorMessageAvailable() {
    console.log(this.errorMessage.getText());
    await expect(this.errorMessage).toBePresent();
    await expect(this.errorMessage).toHaveTextContaining(
      "Username and password do not match any user in this service"
    );
  }
}

export default new LoginPage();
