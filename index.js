import { loadMicroApp } from 'qiankun'

class Go {
  constructor() {
    this.toReact()
    this.toPure()
    this.toVue()
  }

  toReact () {
    const react1 = document.querySelector('.react1')
    react1.onclick = () => {
      this.microApp = loadMicroApp({
        name: 'react1',
        entry: 'http://localhost:7100',
        container: '#subapp-container',
      }, {
        sandbox: true,
        singular: false,
      })
    }
  }
  toPure () {
    const purehtml = document.querySelector('.purehtml')
    purehtml.onclick = () => {
      this.microApp = loadMicroApp({
        name: 'purehtml',
        entry: 'http://localhost:7101',
        container: '#subapp-container',
      }, {
        sandbox: true,
        singular: false,
      })
    }
  }

  toVue () {
    const vue1 = document.querySelector('.vue1')
    vue1.onclick = () => {
      this.microApp = loadMicroApp({
        name: 'purehtml',
        entry: 'http://localhost:7103',
        container: '#subapp-container',
      }, {
        sandbox: true,
        singular: false,
      })
    }
  }
}

new Go()
