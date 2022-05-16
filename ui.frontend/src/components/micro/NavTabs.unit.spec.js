import { mount } from '@vue/test-utils'
import NavTabs from './NavTabs.vue'

describe('NavTabs - unit', () => {
  const mountNavTabs = () => {
    const wrapper = mount(NavTabs, {
      propsData: {
        navs: [{ name: 'Basic' }]
      }
    })
    return wrapper
  }

  it('should mount component', () => {
    const wrapper = mountNavTabs()
    expect(wrapper.text()).toBe('Basic')
  })

  it('should click nav-tab 1', async () => {
    const wrapper = mountNavTabs()
    const props = {
      navs: [{ name: 'Basic' }, { name: 'Social' }, { name: 'Certificates' }]
    }
    await wrapper.setProps(props)


    const link = wrapper.find('[data-testid="nav-tabs-1"]')
    await link.trigger('click')

    expect(wrapper.vm.activeItem).toBe('social')
  })

  it('should setProps navs array empty', async () => {
    const wrapper = mountNavTabs()
    const props = {
      navs: []
    }
    await wrapper.setProps(props)

    expect(wrapper.vm.navs).toBe(props.navs)
  })

  it('should setProps navs one name empty', async () => {
    const wrapper = mountNavTabs()
    const props = {
      navs: [{name:''}]
    }
    await wrapper.setProps(props)

    expect(wrapper.vm.navs).toBe(props.navs)
  })
})
