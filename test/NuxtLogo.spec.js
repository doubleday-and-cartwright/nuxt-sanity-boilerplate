import { mount } from '@vue/test-utils'
import TheNavigation from '@/components/TheNavigation.vue'

describe('TheNavigation', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(TheNavigation)
    expect(wrapper.vm).toBeTruthy()
  })
})
