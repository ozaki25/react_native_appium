import wd from 'wd';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
const PORT = 4723;
const config = {
  platformName: 'Android',
  deviceName: 'Android Emulator',
  app: './android/app/build/outputs/apk/app-debug.apk',
};
const driver = wd.promiseChainRemote('localhost', PORT);

beforeAll(async () => {
  await driver.init(config);
  await driver.sleep(2000); // wait for app to load
});

test('appium renders', async () => {
  expect(await driver.hasElementByAccessibilityId('screen1')).toBe(true);
  await driver.elementByAccessibilityId('screen1').click();
  expect(await driver.hasElementByAccessibilityId('screen2')).toBe(true);
  await driver.elementByAccessibilityId('screen2').click();
  expect(await driver.hasElementByAccessibilityId('screen3')).toBe(true);
  await driver.elementByAccessibilityId('screen3').click();
  expect(await driver.hasElementByAccessibilityId('screen1')).toBe(true);
});
