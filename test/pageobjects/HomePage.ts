class HomePage {
  public async visit() {
    await browser.url("/");
  }
}

export default new HomePage();
