import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import type { BaiViet } from '../App';

interface TrangChiTietProps {
  dsBaiViet: BaiViet[];
  xoaBaiViet: (id: number) => void;
}

function TrangChiTiet({ dsBaiViet, xoaBaiViet }: TrangChiTietProps) {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const bai = dsBaiViet.find((b) => b.id === Number(id));

  if (!bai) {
    return <p>❌ Không tìm thấy bài viết!</p>;
  }

  return (
    <div style={{ maxWidth: 800, margin: '0 auto' }}>
      <h2>{bai.tieuDe}</h2>
      <p><b>Tác giả:</b> {bai.tacGia}</p>
      <p><b>Ngày đăng:</b> {bai.ngayDang}</p>
      <p><b>Thể loại:</b> {bai.theLoai}</p>
      {bai.thumbnail && (
        <img
          src={bai.thumbnail}
          alt={bai.tieuDe}
          style={{ width: '100%', borderRadius: 10, margin: '20px 0' }}
        />
      )}
      <p style={{ textAlign: 'justify' }}>{bai.noiDung}</p>

      <div style={{ marginTop: 20, display: 'flex', gap: 10 }}>
        <button onClick={() => navigate(-1)}>⬅️ Quay lại</button>
        <button onClick={() => navigate(`/posts/edit/${bai.id}`)}>✏️ Chỉnh sửa</button>
        <button onClick={() => xoaBaiViet(bai.id)}>🗑️ Xóa bài viết</button>
      </div>
    </div>
  );
}

export default TrangChiTiet;
