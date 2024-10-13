document.querySelectorAll('.question').forEach(item => {
    item.addEventListener('click', event => {
       item.classList.toggle('open');
       var img = item.querySelector('.toggle');
       if (item.classList.contains('open')) {
          img.src = "./images/minus-circle.png";
       } else {
          img.src = "./images/plus circle.png";
       }
    })
    })

// Giả sử tên đăng nhập được lưu trữ trong biến này
let currentUserName = "Dylan"; // Thay đổi theo tên người dùng thực tế

// Hàm này được gọi sau khi người dùng đăng nhập thành công
function updateUsername() {
    const usernameBtn = document.getElementById('username-btn');
    usernameBtn.textContent = currentUserName; // Cập nhật nội dung của nút
}

// Gọi hàm này khi người dùng đăng nhập thành công
updateUsername();

function navigateToDiary() {
   window.location.href = 'diary.html'; // Change 'diary.html' to the actual path of your diary page
}
