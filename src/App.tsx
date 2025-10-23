import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import TrangDanhSach from './components/TrangDanhSach';
import TrangChiTiet from './components/TrangChiTiet';
import TrangForm from './components/TrangForm';
import ThanhDieuHuong from './components/ThanhDieuHuong';

// ✅ Export interface để các file khác (CardBaiViet, TrangForm, v.v.) có thể dùng
export interface BaiViet {
  id: number;
  tieuDe: string;
  tacGia: string;
  thumbnail?: string;
  ngayDang?: string;
  noiDung: string;
  theLoai: string;
}

// ✅ Dữ liệu khởi tạo
const duLieuKhoiTao: BaiViet[] = [
  {
    id: 1,
    tieuDe: 'Giới thiệu về React và vì sao nên học',
    tacGia: 'Nguyễn Văn A',
    thumbnail: 'https://picsum.photos/id/1011/400/250',
    ngayDang: '2025-09-01',
    noiDung: 'React là thư viện JavaScript phổ biến để xây dựng giao diện người dùng. '.repeat(20),
    theLoai: 'Công nghệ',
  },
  {
    id: 2,
    tieuDe: 'Du lịch Hà Giang - Hành trình không quên',
    tacGia: 'Lê Thị B',
    thumbnail: 'https://picsum.photos/id/1018/400/250',
    ngayDang: '2025-08-15',
    noiDung: 'Hà Giang có cảnh đẹp ấn tượng với đèo Mã Pí Lèng... '.repeat(20),
    theLoai: 'Du lịch',
  },
  {
    id: 3,
    tieuDe: 'Món phở Hà Nội - Bí quyết nấu ngon',
    tacGia: 'Phạm C',
    thumbnail: 'https://picsum.photos/id/1025/400/250',
    ngayDang: '2025-07-10',
    noiDung: 'Phở là món ăn đặc trưng của Việt Nam... '.repeat(20),
    theLoai: 'Ẩm thực',
  },
  {
    id: 4,
    tieuDe: 'Làm sao để học tốt lập trình',
    tacGia: 'Trần D',
    thumbnail: 'https://picsum.photos/id/1035/400/250',
    ngayDang: '2025-06-20',
    noiDung: 'Học lập trình cần sự kiên trì và thực hành nhiều... '.repeat(20),
    theLoai: 'Đời sống',
  },
  {
    id: 5,
    tieuDe: 'Mẹo nhỏ khi nấu ăn tại nhà',
    tacGia: 'Nguyễn E',
    thumbnail: 'https://picsum.photos/id/1045/400/250',
    ngayDang: '2025-05-10',
    noiDung: 'Để nấu ăn ngon hơn, bạn nên chuẩn bị nguyên liệu tươi và đủ vị... '.repeat(20),
    theLoai: 'Ẩm thực',
  },
];

function App() {
  const [baiViet, setBaiViet] = useState<BaiViet[]>(duLieuKhoiTao);

  // 🟩 Thêm bài viết
  const themBaiViet = (baiMoi: BaiViet) => {
    const baiVietMoi = {
      ...baiMoi,
      id: Date.now(),
      ngayDang: new Date().toLocaleDateString('vi-VN'),
    };
    setBaiViet([...baiViet, baiVietMoi]);
    alert('Đăng bài thành công!');
  };

  // 🟨 Cập nhật bài viết
  const capNhatBaiViet = (baiCapNhat: BaiViet) => {
    const dsMoi = baiViet.map((bai) =>
      bai.id === baiCapNhat.id ? { ...baiCapNhat } : bai
    );
    setBaiViet(dsMoi);
    alert('Cập nhật thành công!');
  };

  // 🟥 Xóa bài viết
  const xoaBaiViet = (id: number) => {
    if (window.confirm('Bạn có chắc muốn xóa bài viết này?')) {
      setBaiViet(baiViet.filter((bai) => bai.id !== id));
    }
  };

  return (
    <div className="App">
      <ThanhDieuHuong />
      <div style={{ padding: '20px' }}>
        <Routes>
          {/* Trang chủ */}
          <Route
            path="/"
            element={<TrangDanhSach dsBaiViet={baiViet} xoaBaiViet={xoaBaiViet} />}
          />

          {/* Chi tiết bài viết */}
          <Route
            path="/posts/:id"
            element={<TrangChiTiet dsBaiViet={baiViet} xoaBaiViet={xoaBaiViet} />}
          />

          {/* Trang tạo bài */}
          <Route
            path="/create"
            element={<TrangForm themBaiViet={themBaiViet} />}
          />

          {/* Trang sửa bài */}
          <Route
            path="/posts/edit/:id"
            element={
              <TrangForm dsBaiViet={baiViet} capNhatBaiViet={capNhatBaiViet} />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
