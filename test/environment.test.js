const { resolve } = require('path')
const { Nuxt, Builder } = require('nuxt-edge')
const config = require('./fixture/nuxt.config')

let nuxt

const url = path => `http://localhost:3000${path}`

describe('shape', () => {
  const module = require('../lib/module')
  test('Module is exported correctly', () => {
    expect(module).toBeFunction()
  })
  test('When mounted, moves options correctly', () => {
    const _addPlugin = jest.fn()
    const _module = {
      module,
      addPlugin: _addPlugin,
      options: { stages: {} }
    }
    _module.module()
    expect(_addPlugin).toBeCalledWith({
      filename: 'environment.js',
      options: {
        stages: {}
      },
      src: resolve(__dirname, '../lib', 'plugin.js')
    })
  })
})
describe('module', () => {
  beforeAll(async () => {
    nuxt = new Nuxt(config)

    await new Builder(nuxt).build()
    await nuxt.listen(3000)
  }, 60000)

  afterAll(async () => {
    await nuxt.close()
  })
  test('mounts inside the window', async () => {
    const window = await nuxt.renderAndGetWindow(url('/mounted'))
    window.onNuxtReady(() => {
      const $env = window.$nuxt.$env
      expect($env).toBeDefined()
      expect($env.client).toContainKeys([
        'os',
        'browser',
        'platform',
        'engine'
      ])
    })
  })
})
