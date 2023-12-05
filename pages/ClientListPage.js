import { Selector , t} from 'testcafe';

export class ClientListPage {
  constructor () {
    this.NewLoanButton = Selector('#sidenavNewLoanLink');
    this.NewReferral = Selector('#headerNewReferralLink');
  }

  async VerifyNewButtons (data) {
    await t
      .expect(this.NewLoanButton.innerText).contains('New Loan')
      .expect(this.NewReferral.innerText).contains('New Referral');
  }
}