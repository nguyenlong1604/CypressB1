Feature: Chỉnh sửa thông tin MyInfo
  @smoke
  Scenario: Chỉnh sửa thông tin MyInfo thành công
    Given Tôi truy cập vào website và login thành công với username = "Admin" và password = "admin123"
    When Tôi truy cập vào MyInfo
    Then Màn hình hiển thị đầy đủ thông tin MyInfo
    When Nhập thông tin theo fakeer data mockup
    When Lưu thông tin thành công
    Then Kiểm tra thông tin vừa cập nhật
