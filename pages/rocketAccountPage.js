import { Selector , t} from 'testcafe';

export default class rocketAccountPage {
  constructor () {
    this.username = Selector('#username');
    this.password = Selector('#password');
    this.submitButton = Selector('#sign-in-submit').child();
  }

  async submitLoginForm (data) {
    await t
      .typeText(this.username, data['username'])
      .typeText(this.password, data['password'])
      .click(this.submitButton);
  }
}