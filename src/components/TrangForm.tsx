import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import type { BaiViet } from '../App'; // dùng type import để an toàn

interface TrangFormProps {
  dsBaiViet?: BaiViet[];
  themBaiViet?: (baiMoi: BaiViet) => void;
  capNhatBaiViet?: (baiCapNhat: BaiViet) => void;
}

const TrangForm: React.FC<TrangFormProps> = ({ dsBaiViet, themBaiViet, capNhatBaiViet }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const baiHienTai = dsBaiViet?.find(b => b.id === Number(id));

  const [form, setForm] = useState<BaiViet>(
    baiHienTai || {
      id: Date.now(),
      tieuDe: '',
      tacGia: '',
      thumbnail: '',
      ngayDang: new Date().toISOString().split('T')[0],
      noiDung: '',
      theLoai: '',
    }
  );

  useEffect(() => {
    if (baiHienTai) setForm(baiHienTai);
  }, [baiHienTai]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (id) {
      capNhatBaiViet?.(form);
    } else {
      themBaiViet?.(form);
    }

    navigate('/');
  };

  return (
    <div className="form-container">
      <h2>{id ? 'Chỉnh sửa bài viết' : 'Thêm bài viết mới'}</h2>
      <form onSubmit={handleSubmit}>
        <label>Tiêu đề</label>
        <input type="text" name="tieuDe" value={form.tieuDe} onChange={handleChange} required />

        <label>Tác giả</label>
        <input type="text" name="tacGia" value={form.tacGia} onChange={handleChange} required />

        <label>Ảnh Thumbnail (URL)</label>
        <input type="text" name="thumbnail" value={form.thumbnail} onChange={handleChange} />

        <label>Ngày đăng</label>
        <input type="date" name="ngayDang" value={form.ngayDang} onChange={handleChange} />

        <label>Thể loại</label>
        <input type="text" name="theLoai" value={form.theLoai} onChange={handleChange} />

        <label>Nội dung</label>
        <textarea name="noiDung" value={form.noiDung} onChange={handleChange} rows={6} />

        <button type="submit">Lưu bài viết</button>
      </form>
    </div>
  );
};

export default TrangForm;
