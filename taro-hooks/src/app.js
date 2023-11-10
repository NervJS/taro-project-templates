import { Component } from "react";
import "./app.{{ cssExt }}";
class App extends {{#if typescript }}Component<PropsWithChildren> {{else}} Component{{/if}} {
  componentDidMount() {}

  componentDidShow () {}

  componentDidHide () {}

  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children;
  }
}

export default App;
