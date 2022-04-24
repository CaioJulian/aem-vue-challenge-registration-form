import { mount, createLocalVue } from '@vue/test-utils'
import Vuex, { Store } from 'vuex'
import FooterHome from '~/components/home/FooterHome.vue'
import * as managerLogin from '@/store/loginManager'

const localVue = createLocalVue()
localVue.use(Vuex)

global.window = Object.create(window)
const url = 'http://example.com/home'
Object.defineProperty(window, 'location', {
  value: {
    href: url,
  },
})

describe('FooterHome - unit', () => {
  let store, loginManager

  beforeEach(() => {
    loginManager = {
      namespaced: true,
      ...managerLogin,
      state: {
        userLogin: {
          login: 'caio.barros',
          password: 12345678,
          local: '-28.9712132207349, -52.00882991155071',
        },
      },
    }

    store = new Store({
      modules: {
        loginManager,
      },
    })
  })

  const mountFooterHome = () => {
    const wrapper = mount(FooterHome, {
      localVue,
      store,
    })

    return wrapper
  }

  it('should mount component', () => {
    const wrapper = mountFooterHome()
    expect(wrapper.vm).toBeTruthy()
    expect(window.location.href).toEqual(url)
  })

  it('should count number for zero', async () => {
    const wrapper = mountFooterHome()
    await wrapper.setData({ number: 0 })

    expect(wrapper.text()).toContain('0')
    expect(wrapper.text()).toContain('second')
    expect(wrapper.vm.number).toEqual(0)
  })

  it('should click button logout', async () => {
    const wrapper = mountFooterHome()
    const button = wrapper.find('[data-testid="logout-button"]')
    await button.trigger('click')

    expect(store.state.loginManager.userLogin).toEqual({})
  })
})
