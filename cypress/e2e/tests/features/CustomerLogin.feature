Feature: Đăng nhập khách hàng
    
    Scenario: Khách hàng đăng nhập vào Ngân hàng XYZ
        Given Truy cập vào màn hình trang chủ
        When  Tôi nhấp chuột vào button "Customer Login"
        Then  Hiển thị ra màn hình "Customer Login"
        When  Tôi chọn tên của họ từ danh sách thả xuống
        Then Hiển thị tên của họ được chọn từ danh sách thả xuống

