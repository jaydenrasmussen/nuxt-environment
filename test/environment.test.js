jest.setTimeout(60000)
const { Nuxt, Builder } = require('nuxt-edge')
const config = require('./fixture/nuxt.config')

let nuxt, addTemplate

const url = path => `http://localhost:3000${path}`

const setupNuxt = async (config) => {
  nuxt = new Nuxt(config)

  addTemplate = nuxt.moduleContainer.addTemplate = jest.fn(
    nuxt.moduleContainer.addTemplate
  )

  const build = new Builder(nuxt)

  await build.validatePages()
  await build.generateRoutesAndFiles()
  await nuxt.listen(3000)
}
const testSuite = () => {
  test('init', async () => {
    const window = await nuxt.renderAndGetWindow(url('/mounted'))
    expect(window.$nuxt.$env).toBeDefined()
  })
}
describe('module', () => {
  beforeAll(async () => {
    nuxt = new Nuxt(config)

    // Spy addTemplate
    addTemplate = nuxt.moduleContainer.addTemplate = jest.fn(
      nuxt.moduleContainer.addTemplate
    )

    await new Builder(nuxt).build()
    await nuxt.listen(3000)
  })

  afterAll(async () => {
    await nuxt.close()
  })

  testSuite()
})
describe('empty config', () => {
  beforeAll(async () => {
    config.stages = {}

    await setupNuxt(config)
  })

  afterAll(async () => {
    await nuxt.close()
  })

  test('preset baseURL and browserBaseURL', () => {
    expect(addTemplate).toBeDefined()
  })
})
