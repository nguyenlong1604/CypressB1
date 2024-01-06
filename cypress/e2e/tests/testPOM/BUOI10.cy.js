/*Feature: Thêm khách hàng mới thành công khi nhấp chuột vào Bank Manager Login
    Mô tả: Kiểm tra quá trình thêm khách hàng mới thành công.

    Scenario: Thêm khách hàng mới thành công
        Given Không có khách hàng nào có cùng thông tin(First Name, Last Name, Post Code) đã nhập
        When  Nhấp chuột vào "Bank Manager Login"
        And   Nhấp chuột vào "Add Customer"
        And   Nhập đầy đủ thông tin vào trường "First Name"
        And   Nhập đầy đủ thông tin vào trường "Last Name"
        And   Nhập đầy đủ thông tin vào trường "Post Code"
        And   Nhấp chuột vào nút "Add Customer"
        Then  Hiển thị hộp thoại thông báo thành công và khách hàng mới được thêm vào hệ thống


    Scenario: Kiểm tra Thêm khách hàng với First Name và Last Name trống
            Given Không có khách hàng nào có cùng Post Code đã nhập
            When  Nhấp chuột vào "Bank Manager Login"
            And   Nhấp chuột vào "Add Customer"
            And   Bỏ trống trường "First Name"
            And   Bỏ trống trường "Last Name"
            And   Nhập đầy đủ thông tin vào trường "Post Code"
            And   Nhấp chuột vào nút "Add Customer"
            Then  Hiển thị msg "Vui lòng điền vào trường này" tại trường "First Name"
*/