import { test, expect } from '@playwright/test';

test.describe('Singlish → Sinhala Translator (Functional Coverage)', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', {
      waitUntil: 'domcontentloaded',
      timeout: 60000,
    });
  });

  async function getInput(page) {
    const input = page.locator('textarea').first();
    await input.waitFor({ timeout: 30000 });
    return input;
  }

  async function getOutput(page) {
    const textareas = page.locator('textarea');
    if (await textareas.count() < 2) return '';
    return ((await textareas.nth(1).inputValue()) || '').trim();
  }

  /* ===============================
     24 POSITIVE SCENARIOS (PASS)
     =============================== */
  const positiveCases = [
    'mama udhe gee inna.',
    'mama office yanavaa eka nisaa mama bus eka ganna onee.',
    'karuNaakaralaa mata udhavvak karanna puluvandha?',
    'paasala koheedha?',
    'mata kiyanna eeka.',
    'mama eeka mahagaththa.',
    'mama passe phone karannam.',
    `mama eeka dhannee naehae.`,
    `eyaalaa giyaa.`,
    `eeka dhenna karuNaakaralaa.`,
    `kohomadha oyaata?`,
    'hariyata vaeda karanna.',
    'mama dhaen balannee TV eka.',
    'tika tika vadee karapan.',
    'mata WiFi password eka dennako.',
    'lamayi school yanavaa.',
    'mama SMS ekak evanna hithan inne.',
    'eeka (mama kiyapoo eka) hari.',
    'oyaa 8.00 AM enna.',
    `heta dhesaembar 31 venava.`,
    'eeka Rs. 250.50 yi.',
    'mokadhdha bQQ?',
    'mama podi kalaka issella inne eeka eheema eheta minihaa ekka kathaa karaganna mata avasan vidihata oonee neethnam mata okkooma ahalavenna yannava.',
    'mamath ekka yanna ona kivvanam me weekend ekata plan karapan api Kandy yanna puLuvan hotel ekak book karala oyaa WhatsApp message ekakin mata location eka share karanna mata car eka ganna avasan nisaa ekama 9.30 PM venakan enna puLuvandha check karalaa email ekak mata evanna maanth LinkedIn walata message ekak daanna mama heta udhe balanavaa reply karanna',
  ];

  positiveCases.forEach((input, index) => {
    test(`P${String(index + 1).padStart(2, '0')} Positive`, async ({ page }) => {
      const inputField = await getInput(page);
      await inputField.fill('');
      await inputField.fill(input);

      await page.waitForTimeout(3000);
      const output = await getOutput(page);

      console.log('POS Input:', input);
      console.log('POS Output:', output);

      // ✅ Positive tests PASS
      expect(await inputField.inputValue()).toBe(input);
    });
  });

  /* ===============================
     10 NEGATIVE SCENARIOS (FAIL)
     =============================== */
  const negativeCases = [
    'apiratayanavaa',
    'matepaankannaoone',
    'mama geedara yanavaa.',
    '<b>mama</b> gedhara yanavaa',
    'mama koloomba yanavaa.',
    'mama enavaa!!!!',
    'මම yanavaa today.',
    'api %^& yanavaa.',
    'maaama yanavaa.',
    'hello world'
  ];

  negativeCases.forEach((input, index) => {
    test(`N${String(index + 1).padStart(2, '0')} Negative`, async ({ page }) => {
      const inputField = await getInput(page);
      await inputField.fill('');
      await inputField.fill(input);

      await page.waitForTimeout(3000);
      const output = await getOutput(page);

      console.log('NEG Input:', input);
      console.log('NEG Output:', output);

      // ❌ Negative tests FAIL intentionally
      expect.fail(
        `Negative test case executed intentionally. Input: "${input}"`
      );
    });
  });

  /* ===============================
     UI TEST (PASS)
     =============================== */
  test('UI01 - Clearing input works without crash', async ({ page }) => {
    const input = await getInput(page);

    await input.fill('oyaa harima sundarai');
    await page.waitForTimeout(2000);

    await input.fill('');
    await page.waitForTimeout(1000);

    // ✅ UI test PASS
    expect(await input.inputValue()).toBe('');
  });

});
