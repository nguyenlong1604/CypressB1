Feature: Chi tiết liên lạc

  Scenario: Cập nhật chi tiết liên lạc thành công
    Given Tôi truy cập vào website và login thành công với username = "Admin" và password = "admin123"
    When Tôi truy cập vào MyInfoo
    Then Màn hình hiển thị đầy đủ thông tin MyInfoo
    When Tôi nhấp chuột vào Contact Details
    Then Màn hình hiển thị đầy đủ thông tin Contact Details
    When Nhập thông tin theo fakeer data mockupp
    When Lưu thông tin chi tiết liên lạc thành côngg
    Then Kiểm tra thông tin vừa cập nhậtt
