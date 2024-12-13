function toggleDetails(button) {
    const parent = button.closest('.content');
    const shortText = parent.querySelector('.short-text');
    const detailedText = parent.querySelector('.detailed-text');

    if (detailedText.classList.contains('hidden')) {
        // Hiện nội dung chi tiết
        detailedText.classList.remove('hidden');
        shortText.classList.add('hidden');
        button.textContent = 'Rút gọn';
    } else {
        // Thu gọn nội dung
        detailedText.classList.add('hidden');
        shortText.classList.remove('hidden');
        button.textContent = 'Xem chi tiết';
    }
}


