# 🍜 Hôm Nay Ăn Gì? - Fullstack Web App (Vercel Ready)

Dự án Web App **Hôm Nay Ăn Gì?** đầy đủ **Front-End (FE)** và **Back-End (BE API)**, sẵn sàng đẩy lên **GitHub** và tự động deploy qua **Vercel**.

## 🌟 Tính Năng Chính
1. **Front-End (FE)**:
   - Giao diện Light Mode tone xanh **Ocean Blue Gradient** sang trọng.
   - Phông chữ Google Fonts **Montserrat**.
   - **Quy trình 3 Bước**: Chọn Bữa Ăn -> Lọc Thực Đơn -> Random Quay Số 🎰 (Duy nhất 1 nút bấm quay/tìm món mới).
   - **Lưu LocalStorage**: Tự động lưu món ăn và các món tự thêm thủ công trên trình duyệt.
   - **Footer**: Bản quyền thuộc về Kim Yến.

2. **Back-End (BE)**:
   - API Serverless chuẩn Vercel (`/api/dishes` và `/api/health`).
   - Xử lý CORS và hỗ trợ lấy dữ liệu / đồng bộ danh sách món từ FE.

---

## 🚀 Hướng Dẫn Deploy Lên Vercel Qua GitHub

### Bước 1: Khởi tạo Git
Giải nén file zip này, mở Terminal/Command Prompt tại thư mục dự án và chạy:
```bash
git init
git add .
git commit -m "Initial commit - Hom Nay An Gi Fullstack"
```

### Bước 2: Đẩy lên GitHub
1. Truy cập [GitHub.com](https://github.com) -> Tạo một repository mới tên `hom-nay-an-gi`.
2. Chạy lệnh:
```bash
git remote add origin https://github.com/TênTàiKhoảnCủaBạn/hom-nay-an-gi.git
git branch -M main
git push -u origin main
```

### Bước 3: Deploy trên Vercel
1. Truy cập [Vercel.com](https://vercel.com) và đăng nhập bằng GitHub.
2. Bấm **"Add New..."** -> **"Project"**.
3. Chọn Repository `hom-nay-an-gi` từ GitHub.
4. Bấm **Deploy**. Vercel sẽ tự nhận diện cả FE (`/public`) và BE (`/api`).

---
*Bản quyền thuộc về Kim Yến*
