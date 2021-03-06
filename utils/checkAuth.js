function checkAuth(resolve, reject) {
  var cookie = wx.getStorageSync('cookie');
  var bindPhoneData = wx.getStorageSync('bindPhoneData');
  var bindInviteCodeSucc = wx.getStorageSync('BindInviteCodeSucc');
  if (cookie == undefined || cookie == "") {
    reject("login");
  } else if (bindPhoneData == undefined || bindPhoneData == "") {
    reject("bindPhone");
  } else if (bindInviteCodeSucc == undefined || bindInviteCodeSucc == "") {
    reject("bindInviteCode");
  } else {
    resolve("ok");
  }
}
exports.checkAuth = checkAuth;