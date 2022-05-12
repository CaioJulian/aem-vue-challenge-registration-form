import { mount } from '@vue/test-utils'
import InputGroup from './InputGroup.vue'

describe('InputGroup - unit', () => {
  const mountInputGroup = () => {
    const wrapper = mount(InputGroup)
    return wrapper
  }

  it('should mount component', () => {
    const wrapper = mountInputGroup()
    expect(wrapper.vm).toBeTruthy()
  })

  it('should setProps item', async () => {
    const wrapper = mountInputGroup()
    const props = { item: { label: 'Full Name', required: true, type: 'text' } }
    await wrapper.setProps(props)
    expect(wrapper.vm.item).toBe(props.item)
  })
})
