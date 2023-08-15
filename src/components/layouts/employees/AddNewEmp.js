import React, { useEffect, useState } from "react";
import Header from "../pages/Header";
import { Button, Card, DatePicker, Form, Input, Radio, Select, Space, Typography } from "antd";
import { PiNumberCircleOneFill, PiNumberCircleTwoFill } from 'react-icons/pi'
import { TbCircleCheckFilled } from 'react-icons/tb'
import moment from "moment/moment";
import departmentsData from "../../data/Departments";
import { toast } from "react-toastify";

const AddNewEmp = () => {
    const [form] = Form.useForm();
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [cfpassword, setCfPassword] = useState("");

    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [gender, setGender] = useState("");
    const [nationality, setNationality] = useState("");
    const [phone, setPhone] = useState("");
    const [birth, setBirth] = useState("");
    const [address, setAddress] = useState("");
    const [department, setDepartment] = useState("Sales");
    const [personID, setPersonID] = useState("");
    const [bank_account_name, setBank_account_name] = useState("");
    const [bank_account_number, setBank_account_number] = useState("");
    const [bank_name, setBank_name] = useState("");
    const values = Form.useWatch([], form);
    const [isFormValid, setIsFormValid] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);

    const options = departmentsData.map((department) => ({
        label: department.department.name,
        value: department.department.name,
    }));

    useEffect(() => {
        form
            .validateFields({
                validateOnly: true,
            })
            .then(
                () => {
                    if (username === '' || password === '' || email === '' || cfpassword === '')
                        setIsFormValid(false);
                    else if (currentStep === 2 && (lastName === '' || firstName === '' || gender === '' || nationality === ''
                        || phone === '' || birth === '' || address === '' || department === '' || personID === '' || bank_account_name === '' || bank_account_number === '' || bank_name === ''))
                        setIsFormValid(false);
                    else
                        setIsFormValid(true);

                },
                () => {
                    setIsFormValid(false);
                }
            );
    }, [values]);
    const renderFormStep = () => {
        if (currentStep === 1) {
            return (
                <>
                    <Form.Item
                        name="name"
                        label={<div style={{ fontWeight: "600" }}>Tên Đăng Nhập</div>}
                        rules={[
                            {
                                pattern: /^\S+$/,
                                message: 'Tên đăng nhập không được chứa khoảng trắng!',
                            }
                        ]}
                    >
                        <Input style={{ height: '40px' }} placeholder="Nhập tên đăng nhập" onChange={(e) => setUsername(e.target.value)} />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        label={<div style={{ fontWeight: "600" }}>Email</div>}
                        rules={[
                            { type: "email", message: "Email không hợp lệ!" },
                        ]}
                    >
                        <Input style={{ height: '40px' }} placeholder="Nhập email" onChange={(e) => setEmail(e.target.value)} />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        label={<div style={{ fontWeight: "600" }}>Mật khẩu</div>}
                        rules={[
                            {
                                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[a-zA-Z0-9!@#$%^&*()_+]{4,}$/gm,
                                message: "Mật khẩu cần ít nhất 1 ký tự đặc biệt, 1 chữ in hoa và 1 số",
                            },
                        ]}
                    >
                        <Input.Password style={{ height: '40px' }}
                            placeholder="Nhập mật khẩu"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item
                        name="cfpassword"
                        label={<div style={{ fontWeight: "600" }}>Xác nhận mật khẩu</div>}
                        rules={[
                            () => ({
                                validator(_, value) {
                                    if (!value || password === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(
                                        new Error("Mật khẩu không khớp với xác nhận mật khẩu!")
                                    );
                                },
                            }),
                        ]}
                    >
                        <Input.Password style={{ height: '40px' }} placeholder="Nhập lại mật khẩu" onChange={(e) => setCfPassword(e.target.value)} />
                    </Form.Item>

                </>
            );
        } else if (currentStep === 2) {
            const today = moment();

            const validateBirthDate = (_, value) => {
                if (value && value.isAfter(today)) {
                    return Promise.reject('Ngày sinh không được lớn hơn ngày hiện tại!');
                }
                return Promise.resolve();
            };
            const onSetDate = (date) => {
                setBirth(date?.format("DD/MM/YYYY"));
            }
            return (
                <div >
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                        <Form.Item
                            name="lastname"
                            label={<div style={{ fontWeight: "600" }}>Họ</div>}
                            rules={[
                            ]}
                        >
                            <Input style={{ height: '40px' }} placeholder="Nhập họ" onChange={(e) => setLastName(e.target.value)} />
                        </Form.Item>
                        <Form.Item
                            name="firstname"
                            label={<div style={{ fontWeight: "600" }}>Tên</div>}
                            rules={[
                            ]}
                        >
                            <Input style={{ height: '40px' }} placeholder="Nhập tên" onChange={(e) => setFirstName(e.target.value)} />
                        </Form.Item>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                        <Form.Item
                            name="gender"
                            label={<div style={{ fontWeight: "600" }}>Giới tính</div>}
                            rules={[
                            ]}
                        >
                            <Radio.Group onChange={(e) => setGender(e.target.value)} value={gender}>
                                <Radio value={'male'}>Nam</Radio>
                                <Radio value={'female'}>Nữ</Radio>
                            </Radio.Group>
                        </Form.Item >
                        <Form.Item
                            name="nationality"
                            label={<div style={{ fontWeight: "600" }}>Quốc tịch</div>}
                            rules={[
                            ]}
                        >
                            <Input style={{ height: '40px' }} placeholder="Nhập quốc tịch" onChange={(e) => setNationality(e.target.value)} />
                        </Form.Item>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                        <Form.Item
                            label={<div style={{ fontWeight: "600" }}>Số điện thoại</div>}
                            name="phone"
                            rules={[
                                {
                                    pattern: /^(\+?84|0)[3|5|7|8|9][0-9]{8}$/,
                                    message: 'Số điện thoại không hợp lệ!',
                                },
                            ]}
                        >
                            <Input style={{ height: '40px' }} placeholder="Nhập số điện thoại" onChange={(e) => setPhone(e.target.value)} />
                        </Form.Item>
                        <Form.Item
                            label={<div style={{ fontWeight: "600" }}>Ngày sinh</div>}
                            name="birth"
                            rules={[
                                {
                                    type: 'object',
                                    validator: validateBirthDate,
                                    message: 'Ngày không hợp lệ!',
                                },
                            ]}
                        >
                            <DatePicker
                                format="DD/MM/YYYY"
                                placeholder="Chọn ngày sinh"
                                style={{ width: '100%', height: '40px' }}
                                value={birth}
                                onChange={(date) => onSetDate(date)}
                            />
                        </Form.Item>
                    </div>
                    <Form.Item
                        label={<div style={{ fontWeight: "600" }}>Địa chỉ</div>}
                        name="address"
                        rules={[
                        ]}
                    >
                        <Input style={{ height: '40px' }} placeholder="Nhập địa chỉ" onChange={(e) => setAddress(e.target.value)} />
                    </Form.Item>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                        <Form.Item
                            label={<div style={{ fontWeight: "600" }}>Phòng ban</div>}
                            name="department"
                        >
                            <Select options={options} defaultValue={options.at(0)} onSelect={(e) => setDepartment(e)} />
                        </Form.Item>
                        <Form.Item
                            label={<div style={{ fontWeight: "600" }}>CCCD|CMND</div>}
                            name="personID"
                            rules={[
                            ]}
                        >
                            <Input style={{ height: '40px' }} placeholder="Nhập CCCD|CMND" onChange={(e) => setPersonID(e.target.value)} />
                        </Form.Item>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                        <Form.Item
                            label={<div style={{ fontWeight: "600" }}>Tên tài khoản ngân hàng</div>}
                            name="bank_account_name"
                        >
                            <Input style={{ height: '40px' }} placeholder="Nhập Tên tài khoản ngân hàng" onChange={(e) => setBank_account_name(e.target.value)} />
                        </Form.Item>
                        <Form.Item
                            label={<div style={{ fontWeight: "600" }}>Số tài khoản ngân hàng</div>}
                            name="bank_account_number"
                            rules={[
                            ]}
                        >
                            <Input style={{ height: '40px' }} placeholder="Nhập số tài khoản ngân hàng" onChange={(e) => setBank_account_number(e.target.value)} />
                        </Form.Item>
                    </div>
                    <Form.Item
                        label={<div style={{ fontWeight: "600" }}>Ngân hàng</div>}
                        name="bank_name"
                        rules={[
                        ]}
                    >
                        <Input style={{ height: '40px' }} placeholder="Nhập ngân hàng" onChange={(e) => setBank_name(e.target.value)} />
                    </Form.Item>

                </div>
            );
        }
    };
    const onFinish = () => {
        const formValues = {
            username: username,
            password: password,
            email: email,
            lastName: lastName,
            firstName: firstName,
            gender: gender,
            nationality: nationality,
            phone: phone,
            birth: birth,
            address: address,
            department: department,
            personID: personID,
            bank_account_name: bank_account_name,
            bank_account_number: bank_account_number,
            bank_name: bank_name,
        };

        console.log("All Form values:", formValues);
        toast.success("Thêm nhân viên thành công")
    };

    const dividerStyle = {
        flexGrow: 1,
        height: '1px',
        backgroundColor: '#ccc',
        margin: '0 10px',
    };
    return (
        <>
            <Header content={"Thêm Nhân Viên"} />
            <Card style={{ width: '100%' }}>
                <Form
                    form={form}
                    name="validateOnly"
                    layout="vertical"
                    autoComplete="off"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "start",
                        width: '700px',
                        margin: '3px auto'
                    }}
                    onFinish={onFinish}
                >
                    <div style={{ display: 'flex', alignItems: 'center', margin: '20px 0 40px 0' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            {currentStep === 1 ? <PiNumberCircleOneFill style={{ fontSize: '25px', color: '#0A95FF' }} />
                                :
                                <TbCircleCheckFilled style={{ fontSize: '25px', color: '#0A95FF' }} />} Tạo tài khoản
                        </div>
                        <div style={dividerStyle}></div>
                        <div style={{ display: 'flex', alignItems: 'center', color: currentStep === 1 ? 'grey' : '' }}>
                            <PiNumberCircleTwoFill style={{ fontSize: '25px', color: currentStep === 1 ? 'grey' : '#0A95FF' }} /> Thông tin cá nhân
                        </div>
                    </div>
                    {renderFormStep()}
                    <Form.Item>
                        <Space
                            style={{ display: "flex", justifyContent: "space-between" }}
                        >
                            <Button type="primary" ghost onClick={() => setCurrentStep(1)} disabled={currentStep === 1}>QUAY VỀ</Button>
                            {currentStep === 1 ? <Button type="primary" onClick={() => setCurrentStep(2)} disabled={!isFormValid}>
                                TIẾP
                            </Button> : <Button type="primary" htmlType="submit" disabled={!isFormValid}>
                                HOÀN THÀNH
                            </Button>}
                        </Space>
                    </Form.Item>
                </Form>
            </Card>
        </>
    );
};

export default AddNewEmp;
