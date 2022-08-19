
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Draw button displays div with id choices', async() => {
    const drawButton = await driver.findElement(By.id('draw'))
    drawButton.click()
    await driver.sleep(3000)
    const drawButtonChanged = await driver.findElement(By.id('choices'))
    expect(drawButtonChanged).toBe(true)
})

test('See all bots button id displays div see-all',async () => {
    const seeAllBotsButton =  await driver.findElement(By.id('see-all'))
    seeAllBotsButton.click()
    await driver.sleep(3000)
    expect(seeAllBotsButton).toEqual('see-all')
})