import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';


export default function ThanhDieuHuong() {
const navigate = useNavigate();
return (
<nav className="navbar">
<div className="logo" onClick={() => navigate('/')}>MyBlog</div>
<div className="menu">
<NavLink to="/" className={({ isActive }) => (isActive ? 'navlink active' : 'navlink')}>Trang chủ</NavLink>
<NavLink to="/posts/create" className={({ isActive }) => (isActive ? 'navlink active' : 'navlink')}>Viết bài</NavLink>
</div>
<button className="btn" onClick={() => navigate('/posts/create')}>Viết bài mới</button>
</nav>
);
}