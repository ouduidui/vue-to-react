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
]
