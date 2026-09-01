import React, { useState } from "react";
import { View } from "@tarojs/components";
import { Button, TextArea, Dialog } from "@nutui/nutui-react-taro";
import './index.{{ cssExt }}'
function Demo({ locale, handleSwitchLocale }) {
  const [visible, setVisible] = useState(false);
  return (
    <View className="nutui-react-demo">
      <View>{locale.welcome}</View>
      <View>
        <Button type="primary" onClick={handleSwitchLocale}>
          {locale.button}
        </Button>
        <Button type="success" onClick={() => setVisible(true)}>
          {locale.open}
        </Button>
        <Dialog
          visible={visible}
          onConfirm={() => setVisible(false)}
          onCancel={() => setVisible(false)}
        >
          {locale.welcome}
        </Dialog>
        <TextArea disabled showCount maxLength={20} />
      </View>
    </View>
  );
}

export default Demo;

