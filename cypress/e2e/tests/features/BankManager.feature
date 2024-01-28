Feature: Thêm khách hàng mới thành công khi nhấp chuột vào Bank Manager Login
    @smoke
    Scenario: Thêm khách hàng mới thành công
        Given Truy cập vào màn hình trang chủ
        When  Tôi nhấp chuột vào button "Bank Manager Login"
        Then  Hiển thị ra màn hình "Bank Manager Login"
        When  Tôi nhấp chuột vào "Add Customer"
        Then  Hiển thị ra màn hình "Add Customer"
        When  Nhập đầy đủ thông tin vào Form
        Then  Thông tin được hiện đầy đủ trong Form
        When  Tôi nhấp chuột vào button "Add Customer" 
        Then  Kiểm tra thêm mới khách hàng thành công