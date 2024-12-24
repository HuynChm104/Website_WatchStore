// TẠO CHUYỂN ĐỘNG CHO BANNER
let currentIndexbn = 0;
const slidesbn = document.querySelector('.slides');
const slides1 = document.querySelectorAll('.slide');
const totalSlides = slides1.length;

// Kiểm tra nếu slides tồn tại
if (slidesbn && totalSlides > 0) {
  // Thêm hiệu ứng chuyển mượt mà với CSS
  slidesbn.style.transition = 'transform 0.5s ease'; 

  // Clone slide đầu tiên và thêm vào cuối
  const firstSlideClone = slides1[0].cloneNode(true);
  slidesbn.appendChild(firstSlideClone);

  function showSlide() {
    slidesbn.style.transform = `translateX(-${currentIndexbn * 100}%)`;
  }

  function nextSlide() {
    currentIndexbn++;
    showSlide();

    // Kiểm tra nếu đến slide clone (cuối cùng)
    if (currentIndexbn > totalSlides) {
      setTimeout(() => {
        slidesbn.style.transition = 'none'; // Loại bỏ hiệu ứng transition
        currentIndexbn = 0; // Reset về slide đầu tiên thực sự
        showSlide();
        slidesbn.style.transition = 'transform 0.5s ease'; // Khôi phục hiệu ứng
      }, 500); // Đợi hiệu ứng kết thúc (phải khớp với thời gian transition)
    }
  }

  // Auto-slide every 5 seconds
  setInterval(() => {
    nextSlide();
  }, 5000);
}
/* Product*/
document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.sliderhot');
  const slides1 = document.querySelectorAll('.slidehot'); // Đảm bảo lấy đúng các phần tử slide
  const previousButton = document.getElementById('previousButton');
  const nextButton = document.getElementById('nextButton');

  let currentSlideIndex = 0;

  // Cập nhật vị trí slider
  function updateSliderPosition() {
      slider.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
  }

  // Xử lý khi nhấn nút Next
  nextButton.addEventListener('click', () => {
      currentSlideIndex = (currentSlideIndex + 1) % slides1.length; // Vòng lặp lại về đầu
      updateSliderPosition();
  });

  // Xử lý khi nhấn nút Previous
  previousButton.addEventListener('click', () => {
      currentSlideIndex = (currentSlideIndex - 1 + slides1.length) % slides1.length; // Vòng lặp lại về cuối
      updateSliderPosition();
  });
});



/* Thương hiệu nổi bật*/
document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");
    const slides = document.querySelectorAll(".carousel-slide");
    const leftButton = document.querySelector(".left");
    const rightButton = document.querySelector(".right");

    let currentIndex = 0; // Vị trí slide hiện tại
    const totalCarousels = slides.length; // Tổng số carousel (slide groups)

    // Hàm di chuyển carousel
    function moveToCarousel(index) {
        // Nếu chỉ số vượt quá số lượng carousel (đến cuối), quay lại carousel đầu tiên
        if (index >= totalCarousels) {
            currentIndex = 0; // Chuyển về slide đầu
        } else if (index < 0) { // Nếu đến đầu carousel, chuyển đến carousel cuối cùng
            currentIndex = totalCarousels - 1; // Chuyển về carousel cuối cùng
        } else {
            currentIndex = index;
        }
        track.style.transform = `translateX(-${currentIndex * 100}%)`; // Di chuyển carousel đến slide mong muốn
    }

    // Chuyển sang carousel tiếp theo
    function nextCarousel() {
        moveToCarousel(currentIndex + 1); // Tăng currentIndex lên 1
    }

    // Chuyển về carousel trước
    function prevCarousel() {
        moveToCarousel(currentIndex - 1); // Giảm currentIndex đi 1
    }

    // Đặt thời gian tự động chuyển carousel mỗi 5 giây
    let autoCarousel = setInterval(nextCarousel, 5000);

    // Lắng nghe sự kiện click vào nút trái (◀)
    leftButton.addEventListener("click", function () {
        prevCarousel();  // Quay lại carousel trước
        clearInterval(autoCarousel);  // Dừng tự động khi người dùng click
        autoCarousel = setInterval(nextCarousel, 5000);  // Thiết lập lại thời gian tự động
    });

    // Lắng nghe sự kiện click vào nút phải (▶)
    rightButton.addEventListener("click", function () {
        nextCarousel();  // Chuyển sang carousel tiếp theo
        clearInterval(autoCarousel);  // Dừng tự động khi người dùng click
        autoCarousel = setInterval(nextCarousel, 5000);  // Thiết lập lại thời gian tự động
    });

    // Khởi tạo lần đầu tiên
    moveToCarousel(currentIndex);
});
