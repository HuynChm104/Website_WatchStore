document.addEventListener('DOMContentLoaded', function() {
    //Cập nhật giỏ hàng từ local Storage
    function updateCartUI() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartItemsList = document.getElementById('cart-items-list');
        const cartQuantity = document.getElementById('cart-quantity');
        const cartTotal = document.getElementById('cart-total');

        // Kiểm tra xem phần tử có tồn tại hay không
        if (!cartItemsList || !cartQuantity || !cartTotal) {
            console.error("Các phần tử giỏ hàng không tồn tại!");
            return; // Dừng hàm nếu phần tử không tồn tại
        }

        // Xóa các mục cũ trong giỏ hàng
        cartItemsList.innerHTML = '';

        let totalQuantity = 0;
        let totalPrice = 0;

        // Duyệt qua tất cả các sản phẩm trong giỏ hàng và hiển thị lên giao diện
        cart.forEach(item => {
            const li = document.createElement('li');
            li.classList.add('cart-item');

            // Ảnh sản phẩm
            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.name;
            img.classList.add('cart-item-image');

            // Tên và số lượng sp
            const itemInfo = document.createElement('div');
            itemInfo.classList.add('cart-item-info');
            itemInfo.innerHTML = `
                <p class="cart-item-name">${item.name}</p>
                <p class="cart-item-quantity">Số lượng: ${item.quantity}</p>
                <p class="cart-item-price">${item.price.toLocaleString()}₫</p>
            `;

            // Xóa sp
            const removeBtn = document.createElement('button');
            removeBtn.textContent ='Xóa sản phẩm';
            removeBtn.classList.add('remove-item');
            removeBtn.addEventListener('click', function() {
                removeItemFromCart(item.sku);
            });

            li.appendChild(img);
            li.appendChild(itemInfo);
            li.appendChild(removeBtn);

            cartItemsList.appendChild(li);

            totalQuantity += item.quantity;
            totalPrice += item.quantity * item.price;
        });

        // Cập nhật tổng số lượng và tổng giá trị của giỏ hàng
        cartQuantity.textContent = totalQuantity;
        cartTotal.textContent = totalPrice.toLocaleString() + '₫';
    }

    // Hàm xóa sản phẩm khỏi giỏ hàng
    function removeItemFromCart(sku) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(item => item.sku !== sku);
        localStorage.setItem('cart', JSON.stringify(cart));

        updateCartUI(); // Cập nhật lại giao diện giỏ hàng
    }

    // Gọi hàm cập nhật giỏ hàng khi trang được tải
    updateCartUI();
});




document.addEventListener('DOMContentLoaded', function() {
    const addToCartButton = document.querySelector('.add-to-cart');

    // Kiểm tra nếu nút "Thêm vào giỏ hàng" tồn tại
    if (addToCartButton) {
        addToCartButton.addEventListener('click', function() {
            // Kiểm tra nếu các phần tử sản phẩm tồn tại
            const productName = document.getElementById('product-name');
            const productPrice = document.getElementById('product-price');
            const productOriginalPrice = document.querySelector('.product-price2 .giagoc');
            const productImage = document.getElementById('product-image');
            const productSku = document.getElementById('product-sku');

            // Kiểm tra xem tất cả các phần tử đều tồn tại trước khi lấy dữ liệu
            if (productName && productPrice && productOriginalPrice && productImage && productSku) {
                const product = {
                    name: document.getElementById('product-name').textContent,
                    price: parseInt(document.getElementById('product-price').textContent.replace('₫', '').replace(/\./g, '').trim()), // Loại bỏ ₫ và dấu chấm
                    //originalPrice: parseInt(document.getElementById('product-original-price').querySelector('.giagoc').textContent.replace('₫', '').replace(/\./g, '').trim()), // Loại bỏ ₫ và dấu chấm
                    //discount: parseInt(document.getElementById('product-original-price').querySelector('.percent').textContent.replace('%', '').trim()), // Lấy phần trăm giảm giá
                    quantity: 1, // Mặc định số lượng là 1
                    image: document.getElementById('product-image').src, // Lấy ảnh sản phẩm
                    sku: document.getElementById('product-sku').textContent, // Lấy mã sản phẩm
                    //availability: 'Còn hàng' // Trạng thái có thể thay đổi tùy vào trang
                };
                

                // Lấy giỏ hàng từ local Storage
                let cart = JSON.parse(localStorage.getItem('cart')) || [];

                // Kiểm tra xem sản phẩm đã có trong giỏ hàng hay chưa
                const existingProductIndex = cart.findIndex(item => item.sku === product.sku);
                if (existingProductIndex !== -1) {
                    // Nếu có, tăng số lượng
                    cart[existingProductIndex].quantity += product.quantity;
                } else {
                    // Nếu chưa, thêm vào giỏ
                    cart.push(product);
                }

                // Lưu giỏ hàng lại vào local Storage
                localStorage.setItem('cart', JSON.stringify(cart));

                // Thông báo đã thêm sp vào giỏ
                alert('Sản phẩm đã được thêm vào giỏ hàng!');
            } else {
                console.error("Một số phần tử không tồn tại trong HTML!");
            }
        });
    } else {
        console.error("Nút 'Thêm vào giỏ hàng' không tồn tại!");
    }
});
