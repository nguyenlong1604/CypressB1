Feature: Đăng nhập My_bizfly

  # Scenario: Đăng nhập thành công với tài khoản và mật khẩu hợp lệ từ VietID
  #   Given Tôi đã mở trang đăng nhập My_bizfly
  #   When Tôi login thành công vào trang My_bizfly với tài khoản "0855662472" và mật khẩu "Long1604@@"
  #   Then Tôi đăng nhập vào tài khoản thành công

  Scenario: Tôi tạo dự án mới
    Given Tôi đã mở trang đăng nhập My_bizfly
    When Tôi login thành công vào trang My_bizfly với tài khoản "0855662472" và mật khẩu "Long1604@@"
    Then Tôi đăng nhập vào tài khoản thành công
    When Tôi tạo dự án mới
    # Then Dự án mới của tôi tạo thành công

  # Scenario: Đăng nhập không thành công với tài khoản không tồn tại
  #   Given Tôi đã mở trang đăng nhập My_bizfly
  #   When Tôi login thành công vào trang My_bizfly với tài khoản "22255252205" và mật khẩu ""
  #   Then Tôi nhìn thấy msg với lỗi tài khoản không tồn tại "Vui lòng nhập đúng định dạng của SĐT hoặc Email"

  # Scenario: Đăng nhập không thành công với mật khẩu không tồn tại
  #   Given Tôi đã mở trang đăng nhập My_bizfly
  #   When Tôi login thành công vào trang My_bizfly với tài khoản "0855662472" và mật khẩu "+-+-+--+--6"
  #   Then Tôi nhìn thấy msg với lỗi mật khẩu không tồn tại "Mật khẩu không chính xác."



  
