import { Selector , t} from 'testcafe';

export class CoPilotLoginPage {
  constructor () {
    this.username = Selector('#username');
    this.password = Selector('#password');
    this.submitButton = Selector('#submit');
    this.NewLoanButton = Selector('#sidenavNewLoanLink');
  }

  async submitLoginForm (data) {
    await t
      .typeText(this.username, data['username'])
      .typeText(this.password, data['password'])
      .click(this.submitButton)
      .expect(this.NewLoanButton.innerText).contains('New Loan');
  }
}