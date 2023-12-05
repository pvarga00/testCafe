import { CoPilotLoginPage } from '../pages/CoPilotLoginPage'


const steps = new CoPilotLoginPage()

fixture `Getting Started`// declare the fixture
  .page `https://copilotweb-test.docker.foc.zone`;  // specify the start page

//then create a test and place your code there
test('CoPilot Login Test', async t => {
  let data = {
    username: 'edgoff.idetdpci@mailosaur.io',
    password: 'Test1234!'
  };
  await steps.submitLoginForm(data);
});

/*
    URL: https://copilotweb-test.docker.foc.zone
    Username: Testing$.idetdpci@mailosaur.io (where $ is a number 1-7)
    Pass: Test1234

    username: 'edgoff.idetdpci@mailosaur.io',
    password: 'Test1234!'
*/