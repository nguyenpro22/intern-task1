import React from "react";
import Header from "../pages/Header";
import { Table, Button, Typography, Space, Badge, Avatar } from "antd";
import {
    EllipsisOutlined,
    ArrowUpOutlined,
    ContactsOutlined,
    PhoneOutlined,
    MoreOutlined,
    ContainerOutlined,
    PlusOutlined,
    BorderlessTableOutlined,
} from "@ant-design/icons";
import { MdOutlineAccountCircle } from 'react-icons/md'
import departmentsData from "../../data/Departments";
import employeesData from "../../data/Employees";

const { Title } = Typography;

const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const columns = [
    {
        render: () => <EllipsisOutlined />,
    },
    {
        title: () => {
            return <span className="text-sm">ID</span>;
        },
        dataIndex: "id",
    },
    {
        title: () => {
            return (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <MdOutlineAccountCircle
                        style={{
                            fontSize: '24px',
                            fontWeight: 'bold',
                            margin: '5px'
                        }}
                    />
                    <span >Các Phòng Ban</span>
                </div>
            );
        },
        dataIndex: 'name',
        render: (text, record) => (
            <Space >
                <Badge color={getRandomColor()} />
                <Typography.Text underline strong>
                    {text}
                </Typography.Text>
            </Space>
        ),
    },
    {
        title: () => {
            return (
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <MdOutlineAccountCircle
                            style={{
                                fontSize: '24px',
                                fontWeight: 'bold',
                                margin: '5px'
                            }}
                        />
                        <span className="text-sm">Quản lý</span>
                        <ArrowUpOutlined style={{
                            margin: '5px'
                        }} />
                    </div>
                    <MoreOutlined style={{
                        fontSize: '24px',
                        fontWeight: 'bold',
                        margin: '5px'
                    }} />
                </div>
            );
        },
        render: (text, record) => (
            <>
                {record?.avatar ? <Avatar src={record.avatar} style={{ marginRight: "10px" }} /> : ""}
                {text}
            </>
        ),
        dataIndex: "nameManagement",
    },
    {
        title: <div ><BorderlessTableOutlined /> Số nhân viên</div>,
        dataIndex: "employees",
        width: 150,
    },
    {
        title: () => {
            return (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <ContainerOutlined style={{
                        fontSize: '24px',
                        fontWeight: 'bold',
                        margin: '5px'
                    }} />
                    <span className="text-sm">Email quản lý</span>
                </div>
            );
        },
        dataIndex: "email",
    },
    {
        title: () => {
            return (
                <div className="flex flex-row items-center gap-2" style={{ minWidth: '300px' }}>
                    <PhoneOutlined style={{
                        fontSize: '24px',
                        fontWeight: 'bold',
                        margin: '5px'
                    }} />
                    <span className="text-sm">Số điện thoại</span>
                </div>
            );
        },
        dataIndex: "phone",
        width: 150
    },
];

function updateEmployeeCount(departmentsData, employeesData) {
    departmentsData.forEach((department) => {
        department.employees = employeesData.filter(
            (employee) => employee.department === department.name
        ).length;
    });
}

const Departments = () => {
    updateEmployeeCount(departmentsData, employeesData);
    return (
        <div>
            <Header content={'Danh Sách Phòng Ban'} />
            <div className="table" style={{ margin: '0 5% 0 5%', maxWidth: '80vw', overflowX: 'auto', overflowY: 'hidden' }}>
                <div style={{ height: '80px', borderBottom: '1px solid', marginBottom: '20px', display: 'flex', alignItems: 'end', justifyContent: 'flex-end', paddingBottom: '5px' }}>
                    <Button type="primary" icon={<PlusOutlined />}>Thêm Phòng Ban</Button>
                </div>
                <Table
                    columns={columns}
                    dataSource={departmentsData}
                    scroll={{ x: 'max-content', y: 'calc(80vh - 180px)' }}
                    pagination={{
                        showTotal: (total, range) =>
                            `${range[0]}-${range[1]} of ${total}`,
                        pageSize: 11,
                    }}
                />
            </div>
        </div>
    );
}

export default Departments;