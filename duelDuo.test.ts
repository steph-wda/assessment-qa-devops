
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

test('Draw button displays choices', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(2000)
    const choices = await driver.findElement(By.id('choices'))
    const display = await choices.isDisplayed()
    expect(display).toBeTruthy()
})

test('Add to Duo button moves card to player duo div', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(2000)
    await driver.findElement(By.className('bot-btn')).click()
    const robotContent = await driver.findElement(By.className('bot-btn'))
    const duelDuo = await driver.findElement(By.id('player-duo'))
    const display = await duelDuo.isDisplayed()
    expect(display).toBeTruthy()


    
})

