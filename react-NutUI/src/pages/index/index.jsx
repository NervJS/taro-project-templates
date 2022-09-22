import { Component } from "react";
import {
  Button,
  Cell,
} from "@nutui/nutui-react-taro";
import "./index.scss";

class Index extends <% if (typescript) {%>Component<PropsWithChildren><%} else {%>Component<%}%> {
   constructor(props: any) {
     super(props);
   }

   componentWillMount() {}

   componentDidMount() {}

   componentWillUnmount() {}

   componentDidShow() {}

   componentDidHide() {}

   render() {
     return (
       <div>
         <div className="index">
          欢迎使用 NutUI React 开发 Taro 多端项目。
         </div>
         <div className="index">
           <div className="title">Cell:</div>
           <Cell title="我是标题" desc="描述文字" />
           <Cell title="我是标题" subTitle="副标题描述" desc="描述文字" />
         </div>
         <div className="index">
           <div className="title">Button:</div>
           <Button type="primary" className="btn">
             主要按钮
           </Button>
           <Button type="info" className="btn">
             信息按钮
           </Button>
         </div>
       </div>
     );
   }
}
export default Index