import { Selector, t } from 'testcafe';

export default class dashboard {
  constructor () {
    this.ssnField = Selector('#last4ssn');
    this.submitButton = Selector('[data-analytics-click="Dashboard:Sign In:Verify Identity"]');
  }

  async submitSsnForm (data) {
    await t
      .typeText(this.ssnField, data['ssn'])
      .click(this.submitButton);
  }
}