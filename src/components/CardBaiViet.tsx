// src/components/CardBaiViet.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { BaiViet } from "../types";

interface Props {
  bai: BaiViet;
  xoaBaiViet: (id: number) => void;
}

const CardBaiViet: React.FC<Props> = ({ bai, xoaBaiViet }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        width: "300px",
        backgroundColor: "white",
      }}
    >
      {bai.thumbnail && (
        <img
          src={bai.thumbnail}
          alt={bai.tieuDe}
          style={{ width: "100%", borderRadius: "8px" }}
        />
      )}
      <div>
        <h3>{bai.tieuDe}</h3>
        <p style={{ color: "#777", fontSize: "14px" }}>
          {bai.tacGia} • {bai.ngayDang || "Chưa có ngày"}
        </p>
        <p>
          {bai.noiDung.slice(0, 100)}
          {bai.noiDung.length > 100 ? "..." : ""}
        </p>
        <button onClick={() => navigate(`/posts/${bai.id}`)}>Đọc thêm</button>{" "}
        <button onClick={() => navigate(`/posts/edit/${bai.id}`)}>Sửa</button>{" "}
        <button onClick={() => xoaBaiViet(bai.id)}>Xóa</button>
      </div>
    </div>
  );
};

export default CardBaiViet;
