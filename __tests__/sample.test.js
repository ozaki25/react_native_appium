import wd from 'wd';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
const PORT = 4723;
const config = {
  platformName: 'Android',
  deviceName: 'Android Emulator',
  app: './android/app/build/outputs/apk/app-debug.apk',
  unicodeKeyboard: true,
  resetKeyboard: true,
};
const driver = wd.promiseChainRemote('localhost', PORT);

const setup = async () => {
  await driver.init(config);
  await driver.sleep(4000); // wait for app to load
};

describe('e2e', () => {
  describe('page navigation', () => {
    beforeAll(setup);
    it('show screen1', async () => {
      expect(await driver.hasElementByAccessibilityId('screen1')).toBe(true);
    });
    it('show screen2', async () => {
      await driver.elementByAccessibilityId('sample1').click();
      expect(await driver.hasElementByAccessibilityId('screen2')).toBe(true);
    });
    it('show screen3', async () => {
      await driver.elementByAccessibilityId('sample2').click();
      expect(await driver.hasElementByAccessibilityId('screen3')).toBe(true);
    });
    it('show screen1 again', async () => {
      await driver.elementByAccessibilityId('sample3').click();
      expect(await driver.hasElementByAccessibilityId('screen1')).toBe(true);
    });
  });

  describe('input name', () => {
    beforeEach(setup);
    it('input alphabet', async () => {
      const name = 'ozaki';
      await driver.elementByAccessibilityId('inputName').type(name);
      const result = await driver.elementByAccessibilityId('name').text();
      expect(result).toBe(name);
    });
    it('input kana', async () => {
      const name = 'オザキ';
      await driver.elementByAccessibilityId('inputName').type(name);
      const result = await driver.elementByAccessibilityId('name').text();
      expect(result).toBe(name);
    });
    it('input kanji', async () => {
      const name = '尾崎';
      await driver.elementByAccessibilityId('inputName').type(name);
      const result = await driver.elementByAccessibilityId('name').text();
      expect(result).toBe(name);
    });
  });
});
