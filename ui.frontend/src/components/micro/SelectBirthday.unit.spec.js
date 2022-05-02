import { mount } from '@vue/test-utils'
import SelectBirthday from './SelectBirthday.vue'

describe('SelectBirthday - unit', () => {
  const mountSelectBirthday = () => {
    const wrapper = mount(SelectBirthday)

    return wrapper
  }

  it('should mount component', () => {
    const wrapper = mountSelectBirthday()
    expect(wrapper.vm).toBeTruthy()
  })

  it('should select date 1989-05-14 and return age 32 years', async () => {
    const wrapper = mountSelectBirthday()
    const dayOptions = wrapper.find('#day').findAll('option')
    await dayOptions.at(14).setSelected()

    const monthOptions = wrapper.find('#month').findAll('option')
    await monthOptions.at(5).setSelected()

    const yearOptions = wrapper.find('#year').findAll('option')
    await yearOptions.at(43).setSelected()

    expect(wrapper.find('#day').element.value).toBe('14')
    expect(wrapper.find('#month').element.value).toBe('5')
    expect(wrapper.find('#year').element.value).toBe('1989')
    expect(wrapper.vm.day).toBe(14)
    expect(wrapper.vm.month).toBe(5)
    expect(wrapper.vm.year).toBe(1989)
    expect(wrapper.vm.age).toBe(32)
  });
})
