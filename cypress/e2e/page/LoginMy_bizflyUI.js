const URL = "https://my.bizfly.vn/embed/login?type_view=&amp;is_login=0"
const USERNAME = "//input[@placeholder='Nhập Email hoặc SĐT tài khoản VietID của bạn']"
const NEXT_BUTTON = ".btn.btn-block.btn-blue.font-Sarabun-Bold.font16.btn-next-icon"
const ERR_ACC = "//span[@class='text-danger']"
const URLPASS = "https://go.vietid.net/oauth/bizfly2020/login/enterPassword"
const PASSWORD = "//input[@id='show-pass']"
const ERR_PASS = "//span[@class='text-danger']"
const BTN_LOGIN = "//button[contains(text(),'Đăng nhập bằng ViệtID')]"

export default class LoginMy_bizfly {
  get getURL() {
    return URL;
  }

  get getUserName() {
    return USERNAME;
  }

  get getNextButton() {
    return NEXT_BUTTON;
  }

  get getERR_ACC() {
    return ERR_ACC;
  }

  get getURL_PASS() {
    return URLPASS;
  }

  get getPassWord() {
    return PASSWORD;
  }

  get getERR_PASS() {
    return ERR_PASS;
  }

  get getBTN_Login() {
    return BTN_LOGIN;
  }
}


