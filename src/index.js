// import { Nuro } from './nuro'

class App {
  name = 'world'
  template = `
    <div id="app">
      Name: <input $bind="name"/> 
      Hello, {{name}}!
    </div>
  `
}

Nuro.mount(App)