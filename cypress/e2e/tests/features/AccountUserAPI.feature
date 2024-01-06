Feature: Kiểm thử trang đăng nhập
    
    Scenario: Đăng nhập thành công
        # Given Tôi đã tạo tài khoản với username là "LONG8" và password là "Long123456@"
        Then Tôi tạo một mã Token
        # Then Tôi kiểm tra mã Token vừa tạo
        # When Tôi lấy tất cả các Books
        # When Tôi Post Books
    
    Scenario: Đăng nhập thành công
        When Tôi đăng nhập bằng cookies
        When Set gia tri cho localstorage
        

    