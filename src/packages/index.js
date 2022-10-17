import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
import Input from './input.vue'
import Tabs from './tabs/tabs.vue'
import TabsItem from './tabs/tabs-item.vue'

const component = [
  Button,
  Icon,
  ButtonGroup,
  Input,
  Tabs,
  TabsItem
]


export default (app) => {
  component.forEach(item => {
    app.component(item.name, item)
  })
}