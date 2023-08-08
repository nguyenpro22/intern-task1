import React from 'react';
import { ClockCircleOutlined, HomeOutlined, MailOutlined, MedicineBoxOutlined, TeamOutlined, UserOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { Avatar, Layout, Menu, Typography } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Content as AntdContent, Header } from 'antd/es/layout/layout'; // Rename the Content import
import { useNavigate } from 'react-router-dom';
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

const items = [
    getItem('Dashboard', 'dashboard', <HomeOutlined />),
    getItem('NHÂN VIÊN', 'sub2', null, [
        getItem('Phòng Ban', 'deps', <TeamOutlined />),
        getItem('Phòng Ban của tôi', 'mydep', <TeamOutlined />),
        getItem('Toàn Bộ Nhân Viên', 'emps', <TeamOutlined />),
        getItem('Tạo Nhân Viên Mới', 'newemp', <UsergroupAddOutlined />),
    ]),
    getItem('TĂNG CA', 'sub3', null, [
        getItem('Đơn Tăng Ca Nhân Viên', 'empOT', <ClockCircleOutlined />),
        getItem('Đơn Tăng Ca Của Tôi', 'myOT', <ClockCircleOutlined />),
    ]),
    getItem('NGHỈ PHÉP', 'sub4', null, [
        getItem('Đơn Nghỉ Phép Nhân Viên', 'empleave', <MedicineBoxOutlined />),
        getItem('Đơn Nghỉ Phép Của Tôi', 'myleave', <MedicineBoxOutlined />)
    ]),
    getItem('ĐƠN KHÁC', 'sub5', null, [
        getItem('Danh Sách Đơn Khác', 'allother', <MailOutlined />),
        getItem('Đơn Khác Của Tôi', 'myother', <MailOutlined />),
    ]),
    getItem('QUẢN LÝ LƯƠNG', 'sub6', null, [
        getItem('Lương Nhân Viên', 'empsalary', <TeamOutlined />),
        getItem('Lương Của Tôi', 'mysalary', <TeamOutlined />),
    ]),
    getItem('HỢP ĐỒNG', 'sub7', null, [
        getItem('Hợp Đồng Nhân Viên', 'empcontract', <MailOutlined />),
        getItem('Hợp Đồng Của Tôi', 'mycontract', <MailOutlined />),
    ]),
    getItem('TUYỂN DỤNG', 'sub8', null, [
        getItem('Danh sách ứng viên', 'career', <TeamOutlined />),
    ]),
];

const Dashboard = ({ headerContent }) => {
    const navigate = useNavigate();
    return (
        <div style={{ display: 'flex' }}>
            <div>
                <div style={{ padding: '10px 0  0 10px', textAlign: 'center', display: 'flex' }}>
                    <Avatar size={50} icon={<UserOutlined />} />
                    <Typography style={{ margin: '20px', marginTop: '12px', color: 'grey' }}>Your Name</Typography>
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
                        defaultSelectedKeys={['sub1']}
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