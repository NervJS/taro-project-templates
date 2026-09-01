import React, { useState } from "react";
import { ConfigProvider } from "@nutui/nutui-react-taro";
import enUS from "../../locales/en-US";
import zhCN from "../../locales/zh-CN";
import Demo from "../demo";

function App() {
  const [locale, setLocale] = useState(zhCN);
  const handleSwitchLocale = () => {
    setLocale(locale === zhCN ? enUS : zhCN);
  };

  return (
    <ConfigProvider locale={locale}>
      <Demo {...{ locale, handleSwitchLocale }} />
    </ConfigProvider>
  );
}

export default App;
