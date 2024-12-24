let tabs = document.querySelectorAll('.tab');
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabs li');
    const tabContents = document.querySelectorAll('.tab-pane');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Loại bỏ lớp active khỏi tất cả các tab và nội dung
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Thêm lớp active vào tab được nhấp
            tab.classList.add('active');

            // Hiển thị nội dung tương ứng
            const target = tab.getAttribute('data-tab');
            document.getElementById(target).classList.add('active');
        });
    });
});
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        console.log(`Tab clicked: ${tab.getAttribute('data-tab')}`);
        const target = tab.getAttribute('data-tab');
        const targetElement = document.getElementById(target);
        if (!targetElement) {
            console.error(`No element found with ID: ${target}`);
        }
    });
});

