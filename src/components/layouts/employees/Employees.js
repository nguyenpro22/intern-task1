import React, { useState } from "react";
import {
    Table,
    Button,
    Typography,
    Space,
    Badge,
    Avatar,
    Tag,
    Select,
    Input,
} from "antd";

import {
    EllipsisOutlined,
    PlusOutlined,
    PhoneOutlined,
    MailOutlined,
    BankOutlined,
    CalendarOutlined,
    HomeOutlined,
    GlobalOutlined,
    UnorderedListOutlined,
    BorderlessTableOutlined,
} from "@ant-design/icons";
import employeesData from "../../data/Employees";
import Header from "../pages/Header";
import { MdAccountCircle } from "react-icons/md";

const renderText = (text) => (
    <Typography.Text style={{ color: 'grey' }}>{text}</Typography.Text>
);

const columns = [
    {
        title: "",
        dataIndex: "",
        key: "",
        render: () => <Button type="text" icon={<EllipsisOutlined />} />,
        width: 50,
    },
    {
        title: "",
        dataIndex: "active",
        key: "active",
        width: 50,
        render: (record) => <MdAccountCircle style={{
            fontSize: '24px',
            fontWeight: 'bold',
            marginTop: '7px',
            color: record ? 'blue' : ''
        }} />,
    },
    {
        title: "ID",

        dataIndex: "id",
        key: "id",
        width: 100,
        render: renderText,
    },
    {
        title: (
            <Space>
                <UnorderedListOutlined />
                Tên Nhân Viên
            </Space>
        ),
        dataIndex: "name",
        key: "name",
        render: (text, record) => (
            <>
                <Avatar src={record.avatar} style={{ marginRight: "10px" }} />
                {renderText(text)}
            </>
        ),
    },

    {
        title: (
            <Space>
                <UnorderedListOutlined />
                Phòng Ban
            </Space>
        ),
        dataIndex: "department",
        key: "department",
        render: (record) => (
            <Space>
                <Badge color={record.color} />
                <Typography.Text underline style={{ color: 'grey' }}>
                    {record.name}
                </Typography.Text>
            </Space>
        ),
    },

    {
        title: (
            <Space>
                <PhoneOutlined />
                Số điện thoại
            </Space>
        ),
        dataIndex: "phone",
        key: "phone",
        width: 150,
        render: renderText,
    },

    {
        title: (
            <Space>
                <UnorderedListOutlined />
                Giới tính
            </Space>
        ),
        dataIndex: "gender",
        key: "gender",
        width: 150,
        render: (text) => (
            <Tag color={text === "Nam" ? "processing" : "error"} style={{ fontWeight: '500' }}>{text}</Tag>
        ),
    },

    {
        title: (
            <Space>
                <MailOutlined />
                Email
            </Space>
        ),
        dataIndex: "email",
        key: "email",
        render: renderText,
    },
    {
        title: (
            <Space>
                <BankOutlined />
                Ngân hàng
            </Space>
        ),
        dataIndex: "bank",
        key: "bank",
        width: 150,
        render: renderText,
    },
    {
        title: (
            <Space>
                <CalendarOutlined />
                Ngày sinh
            </Space>
        ),
        dataIndex: "birthdate",
        key: "birthdate",
        width: 150,
        render: renderText,
    },
    {
        title: (
            <Space>
                <HomeOutlined />
                Địa chỉ
            </Space>
        ),
        dataIndex: "address",
        key: "address",
        render: renderText,
    },
    {
        title: (
            <Space>
                <GlobalOutlined />
                Quốc gia
            </Space>
        ),
        dataIndex: "country",
        key: "country",
        width: 150,
        render: renderText,
    },
    {
        title: <div ><BorderlessTableOutlined /> Tài Khoản Ngân Hàng</div>,
        dataIndex: "account",
        key: "account",
        width: 200,
        render: renderText,
    },
];

const Employees = () => {
    const [searchText, setSearchText] = useState("");
    const [filterDepartment, setFilterDepartment] = useState("");



    const filteredData = employeesData.filter((employee) => {
        if (searchText && !employee.name.toLocaleLowerCase().includes(searchText)) {
            return false;
        }
        if (filterDepartment && employee.department.name !== filterDepartment) {
            return false;
        }
        return true;
    });

    const departmentOptions = [
        { value: '', label: 'Toàn Bộ Phòng Ban' },
        { value: 'Sales', label: 'Sales' },
        { value: 'Marketing', label: 'Marketing' },
        { value: 'Finance', label: 'Finance' },
        { value: 'Human Resource', label: 'Human Resource' },
        { value: 'Operations', label: 'Operations' },
        { value: 'Engineering', label: 'Engineering' },
        { value: 'Customer Support', label: 'Customer Support' },
        { value: 'Research & Development', label: 'Research & Development' },
        { value: 'Quality Assurance', label: 'Quality Assurance' },
        { value: 'Design', label: 'Design' },
        { value: 'Chăm sóc khách hàng', label: 'Chăm sóc khách hàng' },
    ]
    return (
        <>
            <Header content={'Danh Sách Nhân Viên'} />
            <div className="table" style={{ margin: '15px 5% 0 5%', maxWidth: '80vw', overflowX: 'auto', overflowY: 'hidden' }}>
                <div style={{ height: '80px', borderBottom: '1px solid', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '5px' }}>
                    {/* search */}
                    <Input placeholder="Tìm kiếm" bordered={false} value={searchText} style={{ borderBottom: '1px solid', width: '300px' }} onChange={(e) => setSearchText(e.target.value)} />
                    <div>
                        <Select
                            defaultValue={filterDepartment}
                            value={filterDepartment}
                            options={departmentOptions}
                            onSelect={(e) => setFilterDepartment(e)}
                        />
                        <Button type="primary" ghost style={{ marginLeft: '5px', color: "#73d13d", borderColor: "#73d13d" }} onClick={() => setFilterDepartment('')}>
                            Làm mới
                        </Button>
                    </div>
                    <Button type="primary" icon={<PlusOutlined />}>Thêm Nhân Viên</Button>
                </div>
                <Table
                    size="large"
                    dataSource={filteredData}
                    columns={columns}
                    scroll={{
                        x: "max-content",
                        y: 'calc(80vh - 180px)'
                    }}
                    style={{
                        border: "1px solid #ccc",
                        boxShadow: "0 -2px 8px rgba(0, 0, 0, 0.15)",
                    }}
                    pagination={{
                        showTotal: (total, range) =>
                            `${range[0]}-${range[1]} of ${total}`,
                        pageSize: 10,
                    }}
                />
            </div>
        </>
    );
};

export default Employees;
