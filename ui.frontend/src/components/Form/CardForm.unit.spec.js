import { mount } from '@vue/test-utils'
import CardForm from './CardForm.vue'

describe('CardForm - unit', () => {
  const mountCardForm = () => {
    const wrapper = mount(CardForm)
    return wrapper
  }

  it('should mount component', () => {
    const wrapper = mountCardForm()
    expect(wrapper.vm).toBeTruthy()
  })

  it('should setProps inputs one item', async () => {
    const wrapper = mountCardForm()
    const props = {
      inputs: [{ label: 'Full Name', required: true, type: 'text' }]
    }
    await wrapper.setProps(props)
    expect(wrapper.vm.inputs).toBe(props.inputs)
  })
})
