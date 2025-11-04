App({
  onLaunch(options) {
    console.log('App onLaunch', JSON.stringify(options));
  },
  onShow(options) {
    console.log('App onShow', JSON.stringify(options));
  },
  onHide() {
    console.log('App onHide');
  },
  onError(msg) {
    console.log('App onError', JSON.stringify(msg));
  },
});
