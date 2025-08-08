import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import LoginForm from '../../../app/pages/login/index.vue'
import PrimeVue from 'primevue/config'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Button from 'primevue/button'

const mockPush = vi.fn()

vi.mock('vue-router', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}))

describe('LoginForm', () => {
  const mountOptions = {
    global: {
      plugins: [PrimeVue],
    },
  }
  it('deve renderizar os componentes de formulário corretamente', () => {
    const wrapper = mount(LoginForm, mountOptions)

    expect(wrapper.findComponent(InputText).exists()).toBe(true)
    expect(wrapper.findComponent(Password).exists()).toBe(true)
    expect(wrapper.findComponent(Button).exists()).toBe(true)

    const usernameInput = wrapper.findComponent(InputText)
    const passwordComponent = wrapper.findComponent(Password)

    expect(usernameInput.exists()).toBe(true)
    expect(passwordComponent.exists()).toBe(true)

    expect(wrapper.findComponent(Button).props('label')).toBe('Entrar')
  })

  it('deve apresentar mensagem de erro para email invalido', async () => {
    const wrapper = mount(LoginForm, mountOptions)

    const usernameInput = wrapper.findComponent(InputText)
    const passwordInput = wrapper.findComponent(Password).find('input')

    expect(usernameInput.exists()).toBe(true)
    expect(passwordInput.exists()).toBe(true)

    await usernameInput.setValue('usuario')
    await passwordInput.setValue('senhaSegura123')

    await wrapper.find('form').trigger('submit.prevent')

    expect(wrapper.find('small').text()).toBe('E-mail inválido.')
  })

  it('deve apresentar mensagem de erro para senha invalida', async () => {
    const wrapper = mount(LoginForm, mountOptions)

    const usernameInput = wrapper.findComponent(InputText)
    const passwordInput = wrapper.findComponent(Password).find('input')

    expect(usernameInput.exists()).toBe(true)
    expect(passwordInput.exists()).toBe(true)

    await usernameInput.setValue('usuario@teste.com')
    await passwordInput.setValue('senha')

    await wrapper.find('form').trigger('submit.prevent')

    expect(wrapper.find('small').text()).toBe(
      'A senha deve ter no mínimo 6 caracteres.',
    )
  })

  it('deve preencher os campos e redirecionar na submissão', async () => {
    const wrapper = mount(LoginForm, mountOptions)

    const usernameInput = wrapper.findComponent(InputText)
    const passwordInput = wrapper.findComponent(Password).find('input')

    expect(usernameInput.exists()).toBe(true)
    expect(passwordInput.exists()).toBe(true)

    await usernameInput.setValue('usuario@teste.com')
    await passwordInput.setValue('senhaSegura123')

    await wrapper.find('form').trigger('submit.prevent')

    expect(mockPush).toHaveBeenCalledWith('/dashboard')
    expect(usernameInput.element.value).toBe('usuario@teste.com')
    expect(passwordInput.element.value).toBe('senhaSegura123')
  })
})
