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

  public async login(username, password) {
    await this.username.setValue(username);
    await this.password.setValue(password);
    await this.submitBtn.click();
  }
}

export default new LoginPage();
