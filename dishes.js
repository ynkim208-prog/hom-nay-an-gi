// Back-End API: Vercel Serverless Function
const defaultDishes = [
  // Việt Nam
  { id: 1, name: "Phở Bò Hà Nội", category: "Nước", origin: "Việt Nam", meal: ["Sáng", "Trưa", "Tối"] },
  { id: 2, name: "Bún Chả Hà Nội", category: "Nướng", origin: "Việt Nam", meal: ["Trưa", "Tối"] },
  { id: 3, name: "Cơm Tấm Sườn Bì Chả", category: "Cơm", origin: "Việt Nam", meal: ["Sáng", "Trưa", "Tối"] },
  { id: 4, name: "Bánh Mỳ Thịt Nướng", category: "Ăn vặt", origin: "Việt Nam", meal: ["Sáng", "Trưa"] },
  { id: 5, name: "Bún Bò Huế", category: "Nước", origin: "Việt Nam", meal: ["Sáng", "Trưa", "Tối"] },
  { id: 6, name: "Mì Quảng Tôm Thịt", category: "Nước", origin: "Việt Nam", meal: ["Trưa", "Tối"] },
  { id: 7, name: "Hủ Tiếu Nam Vang", category: "Nước", origin: "Việt Nam", meal: ["Sáng", "Tối"] },
  { id: 8, name: "Gà Nướng Mật Ong", category: "Nướng", origin: "Việt Nam", meal: ["Trưa", "Tối"] },
  { id: 9, name: "Bánh Xèo Miền Tây", category: "Chiên", origin: "Việt Nam", meal: ["Trưa", "Tối"] },
  { id: 10, name: "Bún Riêu Cua Đồng", category: "Nước", origin: "Việt Nam", meal: ["Sáng", "Trưa"] },
  { id: 11, name: "Bò Lúc Lắc Hạt Tiêu", category: "Xào", origin: "Việt Nam", meal: ["Trưa", "Tối"] },
  { id: 12, name: "Lẩu Cá Lăng Thủy Nguyên", category: "Lẩu", origin: "Việt Nam", meal: ["Tối"] },
  { id: 13, name: "Cơm Gà Hải Nam", category: "Cơm", origin: "Việt Nam", meal: ["Trưa", "Tối"] },
  { id: 14, name: "Bánh Cuốn Nóng", category: "Ăn vặt", origin: "Việt Nam", meal: ["Sáng"] },
  { id: 15, name: "Bún Đậu Mắm Tôm", category: "Chiên", origin: "Việt Nam", meal: ["Trưa", "Tối"] },

  // Hàn Quốc
  { id: 16, name: "Tokbokki Bánh Gạo Sốt Cay", category: "Ăn vặt", origin: "Hàn Quốc", meal: ["Trưa", "Tối"] },
  { id: 17, name: "Kimbap Chiên Xù", category: "Cơm", origin: "Hàn Quốc", meal: ["Sáng", "Trưa"] },
  { id: 18, name: "Cơm Trộn Bibimbap", category: "Cơm", origin: "Hàn Quốc", meal: ["Trưa", "Tối"] },
  { id: 19, name: "Thịt Nướng Samgyeopsal", category: "Nướng", origin: "Hàn Quốc", meal: ["Tối"] },
  { id: 20, name: "Canh Kim Chi Sườn Heo", category: "Nước", origin: "Hàn Quốc", meal: ["Trưa", "Tối"] },
  { id: 21, name: "Mì Tương Đen Jajangmyeon", category: "Xào", origin: "Hàn Quốc", meal: ["Trưa", "Tối"] },

  // Nhật Bản
  { id: 22, name: "Ramen Tonkotsu Xương Heo", category: "Nước", origin: "Nhật Bản", meal: ["Trưa", "Tối"] },
  { id: 23, name: "Sushi Cá Hồi Na Uy", category: "Cơm", origin: "Nhật Bản", meal: ["Trưa", "Tối"] },
  { id: 24, name: "Cơm Thịt Heo Chiên Xù Tonkatsu", category: "Chiên", origin: "Nhật Bản", meal: ["Trưa", "Tối"] },
  { id: 25, name: "Bánh Xèo Okonomiyaki", category: "Chiên", origin: "Nhật Bản", meal: ["Trưa", "Tối"] },
  { id: 26, name: "Mì Udon Bò Mỹ", category: "Nước", origin: "Nhật Bản", meal: ["Trưa", "Tối"] },

  // Trung Quốc
  { id: 27, name: "Dimsum Hà Cảo Tôm", category: "Ăn vặt", origin: "Trung Quốc", meal: ["Sáng", "Trưa"] },
  { id: 28, name: "Cơm Chiên Dương Châu", category: "Cơm", origin: "Trung Quốc", meal: ["Trưa", "Tối"] },
  { id: 29, name: "Lẩu Tứ Xuyên Siêu Cay", category: "Lẩu", origin: "Trung Quốc", meal: ["Tối"] },
  { id: 30, name: "Vịt Quay Bắc Kinh", category: "Nướng", origin: "Trung Quốc", meal: ["Trưa", "Tối"] },

  // Thái Lan
  { id: 31, name: "Pad Thai Tôm Tươi", category: "Xào", origin: "Thái Lan", meal: ["Trưa", "Tối"] },
  { id: 32, name: "Tom Yum Hải Sản Cay Nồng", category: "Nước", origin: "Thái Lan", meal: ["Trưa", "Tối"] },
  { id: 33, name: "Cà Rê Xanh Gà Thái", category: "Nước", origin: "Thái Lan", meal: ["Trưa", "Tối"] },
  { id: 34, name: "Xôi Xoài Nước Cốt Dừa", category: "Ăn vặt", origin: "Thái Lan", meal: ["Trưa", "Tối"] },

  // Âu Mỹ
  { id: 35, name: "Spaghetti Bò Bằm Sốt Cà", category: "Xào", origin: "Âu Mỹ", meal: ["Trưa", "Tối"] },
  { id: 36, name: "Pizza Phô Mai Hai Tầng", category: "Chiên", origin: "Âu Mỹ", meal: ["Trưa", "Tối"] },
  { id: 37, name: "Burger Bò Mỹ Phô Mai", category: "Chiên", origin: "Âu Mỹ", meal: ["Sáng", "Trưa", "Tối"] },
  { id: 38, name: "Bít Tết Bò Sốt Tiêu Đen", category: "Nướng", origin: "Âu Mỹ", meal: ["Tối"] }
];

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'GET') {
    return res.status(200).json({
      success: true,
      source: 'Vercel Serverless API',
      total: defaultDishes.length,
      data: defaultDishes,
      timestamp: new Date().toISOString()
    });
  }

  if (req.method === 'POST') {
    const { dishes } = req.body || {};
    return res.status(200).json({
      success: true,
      message: 'Đã nhận dữ liệu đồng bộ thành công!',
      count: Array.isArray(dishes) ? dishes.length : 0,
      timestamp: new Date().toISOString()
    });
  }

  res.status(405).json({ error: 'Method Not Allowed' });
};
