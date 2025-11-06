import { appTasks } from '@ohos/hvigor-ohos-plugin';
import ascfPlugin, { signByBuildModePlugin } from '@atomicservice/ascf-toolkit-hvigor-plugin';

export default {
  system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */
  plugins:[
    ascfPlugin(),
    signByBuildModePlugin('default', 'release')      // need build-profile.json5 配置 signingConfigs 调试和发布的签名
  ]
}
