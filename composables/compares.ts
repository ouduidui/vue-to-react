interface CompareType {
  id: string
  label: string
  data: {
    title: 'Vue' | 'React'
    html: string
    code: string
  }[]
}

export const compares: CompareType[] = [
  {
    id: 'hello-world',
    label: 'Hello World',
    data: [
      {
        title: 'Vue',
        html: '/helloworld/vue.html',
        code: `
const App = {
  template: <h1>Hello, world!</h1>',
}`,
      },
      {
        title: 'React',
        html: '/helloworld/react.html',
        code: `
const App = () => {
  return (<h1>Hello, world!</h1>)
}`,
      },
    ],
  },
  {
    id: 'v-if',
    label: 'v-if',
    data: [
      {
        title: 'Vue',
        html: '/vIf/vue.html',
        code: `
const App = {
  template: \`
    <button @click="isShow = !isShow">Toggle</button>
    <div v-if="isShow">HelloWorld</div>
  \`,
  data() {
    return {
      isShow: true
    }
  },
}`,
      },
      {
        title: 'React',
        html: '/vIf/react.html',
        code: `
const App = () => {
  const [isShow, setIsShow] = useState(true);
  return (
    <div>
      <button onClick={() => setIsShow(!isShow)}>Toggle</button>
      {isShow ? <div>HelloWorld</div> : '' }
    </div>
    )
}`,
      },
    ],
  },
  {
    id: 'v-show',
    label: 'v-show',
    data: [
      {
        title: 'Vue',
        html: '/vShow/vue.html',
        code: `
const App = {
  template: \`
    <button @click="isShow = !isShow">Toggle</button>
    <div v-show="isShow">HelloWorld</div>
  \`,
  data() {
    return {
      isShow: true
    }
  },
}`,
      },
      {
        title: 'React',
        html: '/vShow/react.html',
        code: `
const App = () => {
  const [isShow, setIsShow] = useState(true);
  return (
    <div>
      <button onClick={() => setIsShow(!isShow)}>Toggle</button>
      {isShow ? <div>HelloWorld</div> : '' }
    </div>
    )
}`,
      },
    ],
  },
  {
    id: 'v-for',
    label: 'v-for',
    data: [
      {
        title: 'Vue',
        html: '/vFor/vue.html',
        code: `
const App = {
  template: \`
    <li v-for="(item, index) in arr" :key="key">
      {{item}}
    </li>
  \`,
  data() {
    return {
      arr: [1,2,3,4,5]
    }
  }
}`,
      },
      {
        title: 'React',
        html: '/vFor/react.html',
        code: `
const App = () => {
  const arr = [1,2,3,4,5]
  return arr.map((item, index) => (
      <li key={index}>
        {item}
      </li>
    ))
}`,
      },
    ],
  },
  {
    id: 'computed',
    label: 'computed',
    data: [
      {
        title: 'Vue',
        html: '/computed/vue.html',
        code: `
const App = {
  template: \`
    <div>count: {{count}}</div>
    <div>doubleCount: {{doubleCount}}</div>
    <button @click="count++">Add</button>
  \`,
  data() {
    return {
      count: 1
    }
  },
  computed: {
    doubleCount() {
      return this.count * 2
    }
  }
}`,
      },
      {
        title: 'React',
        html: '/computed/react.html',
        code: `
const App = () => {
  const [count, setCount] = useState(1)
  const doubleCount = useMemo(() => count * 2, [count])
  return (
    <div>
      <div>count: {count}</div>
      <div>doubleCount: {doubleCount}</div>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  )
}`,
      },
    ],
  },
  {
    id: 'watch',
    label: 'watch',
    data: [
      {
        title: 'Vue',
        html: '/watch/vue.html',
        code: `
const App = {
  template: \`
    <div>count: {{count}}</div>
    <div>doubleCount: {{doubleCount}}</div>
    <button @click="count++">Add</button>
  \`,
  data() {
    return {
      count: 1,
      doubleCount: 2
    }
  },
  watch: {
    count(val) {
      this.doubleCount = val * 2
    }
  }
}`,
      },
      {
        title: 'React',
        html: '/watch/react.html',
        code: `
const App = () => {
  const [count, setCount] = useState(1)
  const [doubleCount, setDoubleCount] = useState(1)
  useEffect(() => {
    setDoubleCount(count * 2)
  }, [count])
  return (
    <div>
      <div>count: {count}</div>
      <div>doubleCount: {doubleCount}</div>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  )
}`,
      },
    ],
  },
  {
    id: 'v-bind',
    label: 'v-bind',
    data: [
      {
        title: 'Vue',
        html: '/vBind/vue.html',
        code: `
const App = {
  template: '<h1 v-bind:style="{color, background}">HelloWorld</h1>',
  data() {
    return {
      color: 'red',
      background: '#333'
    }
  },
}`,
      },
      {
        title: 'React',
        html: '/vBind/react.html',
        code: `
const App = () => {
  const [color, setColor] =  useState('red')
  const [background, setBackground] = useState('#333')
  return (
    <h1 style={{color, background}}>HelloWorld</h1>
    )
}`,
      },
    ],
  },
  {
    id: 'v-on',
    label: 'v-on',
    data: [
      {
        title: 'Vue',
        html: '/vOn/vue.html',
        code: `
const App = {
  template: \`
  <div>{{count}}</div>
  <button @click="add">Add</button>
  \`,
  data() {
    return {
      count: 1,
    }
  },
  methods: {
    add() {
      this.count++
    }
  }
}`,
      },
      {
        title: 'React',
        html: '/vOn/react.html',
        code: `
const App = () => {
  const [count, setCount] =  useState(1)
  const add = () => {
    setCount(count + 1)
  }
  return (
    <div>
      <div>{ count }</div>
      <button onClick={add}>Add</button>
    </div>
    )
}`,
      },
    ],
  },
  {
    id: 'v-model',
    label: 'v-model',
    data: [
      {
        title: 'Vue',
        html: '/vModel/vue.html',
        code: `
const App = {
  template: \`
  <input type="text" v-model="msg" />
  <div>msg: {{ msg }}</div>
  \`,
  data() {
    return {
      msg: '',
    }
  },
}`,
      },
      {
        title: 'React',
        html: '/vModel/react.html',
        code: `
const App = () => {
  const [msg, setMsg] =  useState('')
  const change = (e) => {
    setMsg(e.target.value)
  }
  return (
    <div>
      <input type="text" value={msg} onChange={change} />
      <div>msg: { msg }</div>
    </div>
    )
}`,
      },
    ],
  },
]
