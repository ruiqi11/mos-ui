import Button from './button.vue'
import Icon from './icon.vue'

const component = [Button, Icon]


export default (app) => {
  component.forEach(item => {
    app.component(item.name, item)
  })
}