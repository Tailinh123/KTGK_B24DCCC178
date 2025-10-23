import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { BaiViet } from '../App';
import CardBaiViet from './CardBaiViet';

interface TrangDanhSachProps {
  dsBaiViet: BaiViet[];
  xoaBaiViet: (id: number) => void;
}

function TrangDanhSach({ dsBaiViet, xoaBaiViet }: TrangDanhSachProps) {
  const [tuKhoa, setTuKhoa] = useState('');
  const navigate = useNavigate();

  const dsLoc = dsBaiViet.filter((bai) =>
    bai.tieuDe.toLowerCase().includes(tuKhoa.toLowerCase())
  );

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
        <h2>Tổng số bài viết: {dsLoc.length}</h2>
        <button onClick={() => navigate('/create')}>✍️ Viết bài mới</button>
      </div>

      <input
        type="text"
        placeholder="Tìm kiếm theo tiêu đề..."
        value={tuKhoa}
        onChange={(e) => setTuKhoa(e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
        }}
      >
        {dsLoc.map((bai) => (
          <CardBaiViet key={bai.id} bai={bai} xoaBaiViet={xoaBaiViet} />
        ))}
      </div>
    </div>
  );
}

export default TrangDanhSach;
