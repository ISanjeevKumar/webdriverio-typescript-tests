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

  public async login(username, password) {
    await this.username.setValue(username);
    await this.password.setValue(password);
    await this.submitBtn.click();
  }

  public async isUserLoggedIn() {
    await expect(this.inventoryContainer).toBePresent();
  }
}

export default new LoginPage();
