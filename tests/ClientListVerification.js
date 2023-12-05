import { CoPilotLoginPage } from '../pages/CoPilotLoginPage'
import { ClientListPage } from '../pages/ClientListPage'


const login = new CoPilotLoginPage()
const client = new ClientListPage()

fixture `Getting Started`// declare the fixture
  .page `https://copilotweb-test.docker.foc.zone`;  // specify the start page

//then create a test and place your code there
test('CoPilot Client Verification', async t => {
  let data = {
    username: 'edgoff.idetdpci@mailosaur.io',
    password: 'Test1234!'
  };
  await login.submitLoginForm(data);
  await client.VerifyNewButtons();
});
