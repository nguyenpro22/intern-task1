import React, { useState } from 'react';
import { ClockCircleOutlined, HomeOutlined, MailOutlined, MedicineBoxOutlined, TeamOutlined, UserOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { Avatar, Layout, Menu, Typography } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Content as AntdContent, Header } from 'antd/es/layout/layout'; // Rename the Content import
import { useLocation, useNavigate } from 'react-router-dom';
import ContentRoutes from './routes';
function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const { Title } = Typography;

const items = [
    getItem('Dashboard', '', <HomeOutlined />),
    getItem(<Title level={5}>NHÂN VIÊN</Title>, 'sub2', null, [
        getItem('Phòng Ban', 'deps', <TeamOutlined />),
        getItem('Phòng Ban của tôi', 'mydep', <TeamOutlined />),
        getItem('Toàn Bộ Nhân Viên', 'emps', <TeamOutlined />),
        getItem('Tạo Nhân Viên Mới', 'newemp', <UsergroupAddOutlined />),
    ]),
    getItem(<Title level={5}>TĂNG CA</Title>, 'sub3', null, [
        getItem('Đơn Tăng Ca Nhân Viên', 'empOT', <ClockCircleOutlined />),
        getItem('Đơn Tăng Ca Của Tôi', 'myOT', <ClockCircleOutlined />),
    ]),
    getItem(<Title level={5}>NGHỈ PHÉP</Title>, 'sub4', null, [
        getItem('Đơn Nghỉ Phép Nhân Viên', 'empleave', <MedicineBoxOutlined />),
        getItem('Đơn Nghỉ Phép Của Tôi', 'myleave', <MedicineBoxOutlined />)
    ]),
    getItem(<Title level={5}>ĐƠN KHÁC</Title>, 'sub5', null, [
        getItem('Danh Sách Đơn Khác', 'allother', <MailOutlined />),
        getItem('Đơn Khác Của Tôi', 'myother', <MailOutlined />),
    ]),
    getItem(<Title level={5}>QUẢN LÝ LƯƠNG</Title>, 'sub6', null, [
        getItem('Lương Nhân Viên', 'empsalary', <TeamOutlined />),
        getItem('Lương Của Tôi', 'mysalary', <TeamOutlined />),
    ]),
    getItem(<Title level={5}>HỢP ĐỒNG</Title>, 'sub7', null, [
        getItem('Hợp Đồng Nhân Viên', 'empcontract', <MailOutlined />),
        getItem('Hợp Đồng Của Tôi', 'mycontract', <MailOutlined />),
    ]),
    getItem(<Title level={5}>TUYỂN DỤNG</Title>, 'sub8', null, [
        getItem('Danh sách ứng viên', 'career', <TeamOutlined />),
    ]),
];

const Dashboard = () => {
    const location = useLocation();
    const path = location.pathname.replace('/', '');
    const navigate = useNavigate();
    return (
        <div style={{ display: 'flex' }}>
            <div >
                <div style={{ padding: '10px 0  0 10px', textAlign: 'center', display: 'flex' }}>
                    <Avatar size={50} icon={<UserOutlined />} />
                    <Title level={5} style={{ margin: '20px', marginTop: '12px', }}>Your Name</Title>
                </div>
                <div style={{
                    width: '260px',
                    overflow: "auto",
                    height: "calc(100vh - 100px)",
                    textAlign: "left",
                    lineHeight: "auto",
                    color: "#fff",
                    backgroundColor: "#fff",
                    borderRight: "1px solid #ccc",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
                }}>

                    <Menu
                        inlineIndent={10}
                        onClick={({ key }) => {
                            navigate(`/${key}`);
                        }}
                        theme="light"
                        defaultSelectedKeys={[path]}
                        defaultOpenKeys={['sub2', 'sub3', 'sub4', 'sub5', 'sub6', 'sub7', 'sub8']}
                        mode="inline"
                        items={items}
                        style={{ textAlign: 'start' }}
                    >

                    </Menu>
                </div>
            </div>

            <Layout >
                <AntdContent>
                    <ContentRoutes />
                </AntdContent>
            </Layout>
        </div>
    );
};

export default Dashboard;
