import { Builder, Capabilities, By } from "selenium-webdriver";

require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeAll(async () => {
  driver.get("http://localhost:3000/");
});

afterAll(async () => {
  driver.quit();
});

test("Title shows up when page loads", async () => {
  const title = await driver.findElement(By.id("title"));
  const displayed = await title.isDisplayed();
  expect(displayed).toBe(true);
});

test('clicking the draw button displays div with id="choices', async () => {
  await driver.findElement(By.id("draw")).click();
  await driver.sleep(2000);
  const choiceDiv = driver.findElement(By.id("choices"));
  let displayed = choiceDiv.isDisplayed();
  expect(displayed).toBeTruthy();
});

test(`add to duo button displays div with id player duo`, async () => {
  await driver.findElement(By.xpath("//*[@class='bot-btn'][1]")).click();
  await driver.sleep(2000);
  const playerDuoDiv = driver.findElement(By.id("player-duo"));
  let displayed = playerDuoDiv.isDisplayed();
  expect(displayed).toBeTruthy();
});
