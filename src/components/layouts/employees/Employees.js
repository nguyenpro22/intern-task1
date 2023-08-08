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
    SelectOutlined,
} from "@ant-design/icons";
import employeesData from "../../data/Employees";
import Header from "../pages/Header";
import { MdAccountCircle } from "react-icons/md";

const { Title } = Typography;
const renderBoldText = (text) => (
    <Typography.Text strong>{text}</Typography.Text>
);
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
        render: renderBoldText,
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
        width: 200,
        render: (text, record) => (
            <>
                <Avatar src={record.avatar} style={{ marginRight: "10px" }} />
                {renderBoldText(text)}
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
        width: 200,
        render: (text) => (
            <Space>
                <Badge color={getRandomColor()} />
                <Typography.Text underline strong>
                    {text}
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
        render: renderBoldText,
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
            <Tag color={text === "Nam" ? "#1890ff" : "#eb2f96"}>{text}</Tag>
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
        width: 200,
        render: renderBoldText,
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
        render: renderBoldText,
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
        render: renderBoldText,
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
        width: 200,
        render: renderBoldText,
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
        render: renderBoldText,
    },
    {
        title: (
            <Space>
                <Title level={4} style={{ color: "#000", marginTop: 0 }}>
                    #
                </Title>
                Tài khoản ngân hàng
            </Space>
        ),
        dataIndex: "account",
        key: "account",
        width: 200,
        render: renderBoldText,
    },
];

const Employees = () => {
    const [searchText, setSearchText] = useState("");
    const [filterDepartment, setFilterDepartment] = useState("");



    const filteredData = employeesData.filter((employee) => {
        if (searchText && !employee.name.toLocaleLowerCase().includes(searchText)) {
            return false;
        }
        if (filterDepartment && employee.department !== filterDepartment) {
            return false;
        }
        return true;
    });

    return (
        <>
            <Header content={'Danh Sách Nhân Viên'} />
            <div className="table" style={{ margin: '0 5% 0 5%', maxWidth: '80vw', overflowX: 'auto', overflowY: 'hidden' }}>
                <div style={{ height: '80px', borderBottom: '1px solid', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '5px' }}>
                    {/* search */}
                    <Input placeholder="Tìm kiếm" bordered={false} style={{ borderBottom: '1px solid', width: '300px' }} />
                    <div>
                        <Select
                            defaultValue="Toàn Bộ Phòng Ban"
                            options={[{ value: 'Toàn Bộ Phòng Ban', label: 'Toàn Bộ Phòng Ban' }]}
                        />
                        <Button type="primary" ghost>
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
                        pageSize: 7,
                    }}
                    className="my-table offset-pagination"
                />
            </div>
        </>
    );
};

export default Employees;
