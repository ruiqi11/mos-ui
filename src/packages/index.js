import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
import Input from './input.vue'

const component = [
  Button,
  Icon,
  ButtonGroup,
  Input
]


export default (app) => {
  component.forEach(item => {
    app.component(item.name, item)
  })
}