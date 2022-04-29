interface CompareType {
  id: string
  label: string
  data: {
    title: 'Vue' | 'React'
    html: string
    code: string
  }[]
}

const helloWorld: CompareType = {
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
}

const vIf: CompareType = {
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
}

const vShow: CompareType = {
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
      <div style={{display: isShow ? '' : 'none'}}>HelloWorld</div>
    </div>
    )
}`,
    },
  ],
}

const vFor: CompareType = {
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
}

const computed: CompareType = {
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
}

const watch: CompareType = {
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
}

const vBind: CompareType = {
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
}

const vOn: CompareType = {
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
}

const vModel: CompareType = {
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
}

const clickStop: CompareType = {
  id: 'click-stop',
  label: '@click.stop',
  data: [
    {
      title: 'Vue',
      html: '/clickStop/vue.html',
      code: `
const App = {
  template: \`
  <div>{{count}}</div>
  <button @click="count += 1">
    +1
    <button @click.stop="count *= 10">×10</button>
  </button>
  \`,
  data() {
    return {
      count: 1,
    }
  },
}`,
    },
    {
      title: 'React',
      html: '/clickStop/react.html',
      code: `
const App = () => {
  const [count, setCount] =  useState(1)
  const add = () => {
    setCount(count + 1)
  }

  const multi = (e) => {
    e.stopPropagation()
    setCount(count * 10)
  }
  
  return (
    <div>
      <div>{ count }</div>
      <button onClick={add}>
        +1
        <button onClick={multi}>×10</button>
      </button>
    </div>
    )
}`,
    },
  ],
}

const props: CompareType = {
  id: 'props',
  label: 'props',
  data: [
    {
      title: 'Vue',
      html: '/props/vue.html',
      code: `
const Comp = {
  name: 'Comp',
  template: '<h1>{{msg}}</h1>',
  props: ['msg']
}

const App = {
  template: '<Comp msg="HelloWorld" />',
  components: { Comp },
}`,
    },
    {
      title: 'React',
      html: '/props/react.html',
      code: `
const Comp = (props) => {
  return (<h1>{ props.msg }</h1>)
}

const App = () => {
  return (<Comp msg="HelloWorld" />)
}`,
    },
  ],
}

const emit: CompareType = {
  id: 'emit',
  label: 'emit',
  data: [
    {
      title: 'Vue',
      html: '/emit/vue.html',
      code: `
const Comp = {
  name: 'Comp',
  template: '<button @click="add">Add</button>',
  methods: {
    add() {
      this.$emit('add')
    }
  }
}

const App = {
  template: \`
  <div>{{ count }}</div>
  <Comp @add="count++" />
  \`,
  components: { Comp },
  data() {
    return {
      count: 1
    }
  }
}`,
    },
    {
      title: 'React',
      html: '/emit/react.html',
      code: `
const Comp = (props) => {
  const add = () => {
    props.onAdd()
  }
  return (<button onClick={add}>Add</button>)
}

const App = () => {
  const [count, setCount] = React.useState(1)
  return (
    <div>
      <div>{ count }</div>
      <Comp onAdd={() => setCount(count + 1)} />
    </div>
    )
}`,
    },
  ],
}

const refs: CompareType = {
  id: 'refs',
  label: 'refs',
  data: [
    {
      title: 'Vue',
      html: '/refs/vue.html',
      code: `
const Comp = {
  name: 'Comp',
  template: '<div>{{ count }}</div>',
  data() {
    return {
      count: 1
    }
  },
  methods: {
    add() {
      this.count++
    }
  }
}

const App = {
  template: \`
  <Comp ref="compEl" />
  <button @click="add">Add</button>
  \`,
  components: { Comp },
  methods: {
    add() {
      this.$refs.compEl.add()
    }
  }
}`,
    },
    {
      title: 'React',
      html: '/refs/react.html',
      code: `
const Comp = (props, ref) => {
  const [count, setCount] = React.useState(1)
  const add = () => {
    setCount(count + 1)
  }
  useImperativeHandle(ref, () => ({
    add
  }))
  return (<div>{ count }</div>)
}

const WrappedComp = forwardRef(Comp)

const App = () => {
  const compEl = useRef()

  const add = () => {
    compEl.current.add()
  }

  return (
    <div>
      <WrappedComp ref={compEl}  />
      <button onClick={add}>Add</button>
    </div>
    )
}`,
    },
  ],
}

const provideAndInject: CompareType = {
  id: 'provideAndInject',
  label: 'provide/inject',
  data: [
    {
      title: 'Vue',
      html: '/provideAndInject/vue.html',
      code: `
const Comp = {
  name: 'Comp',
  template: '<h1>{{msg}}</h1>',
  inject: ['msg'],
}

const App = {
  template: '<Comp />',
  components: {Comp},
  provide: {
    msg: 'HelloWorld'
  }
}`,
    },
    {
      title: 'React',
      html: '/provideAndInject/react.html',
      code: `
const MsgContext = createContext({
  msg: ''
})

const Comp = () => {
  const {msg} = useContext(MsgContext)
  return (<h1>{ msg }</h1>)
}

const App = () => {
  return (
    <MsgContext.Provider value={{msg: 'HelloWorld'}}>
      <Comp />
    </MsgContext.Provider>
  )
}`,
    },
  ],
}

export const compares: CompareType[] = [
  helloWorld, vIf, vShow, vFor, computed, watch, vBind, vOn, vModel, clickStop, props, emit, refs, provideAndInject,
]
