Feature: Login tài khoản Orange

  # Scenario: Login tài khoản thành công
  #   Given Tôi đã mở trang đăng nhập
  #   When Tôi nhập "Admin" và "admin123"
  #   When Tôi nhấn nút "Login"
  #   Then Tôi nên nhìn thấy trang chào mừng

  # Scenario: Login tài khoản thất bại
  #   Given Tôi đã mở trang đăng nhập
  #   When Tôi nhập thông tin nhập sai
  #     | username | password |
  #     |          |          |
  #     |          |          |
  #     |          | admin 23 |
  #     | Admin    |          |
  #     |          |          |
  #   When Tôi nhấn nút "Login"
  #   Then Tôi nên nhìn thấy trang chào mừng

  Scenario: Login tài khoản không thành công
    Given Tôi đã mở trang đăng nhập
    When Tôi nhập '<username>' và '<password>'
    When Tôi nhấn nút "Đăng nhập"
    Then Tôi nên nhìn thấy trang chào mừng
    Examples:
      | username | password |
      | Admin    | admin23  |
      |          |          |
      |          | admin12  |
      | Admin    |          |
      | Admin    | admin12  |
