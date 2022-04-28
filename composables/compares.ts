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
]
