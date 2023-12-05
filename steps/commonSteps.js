import rocketAccountPage from '../pages/rocketAccountPage'
import dashboardPage from '../pages/dashboard'

const ra = new rocketAccountPage();
const dashboard = new dashboardPage();

export class commonSteps {
  async login (data) {
    await ra.submitLoginForm(data);
    await dashboard.submitSsnForm(data);
  }
}