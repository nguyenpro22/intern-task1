import { Typography } from "antd";
import Header from "../pages/Header";

const MyContract = () => {
    const { Title } = Typography;
    return (
        <>
            <Header content={'Hợp đồng của tôi'} />

            <div style={{ width: '800px', margin: '0 auto' }}>
                <Title level={3} style={{ textAlign: 'start', margin: '50px 0 50px 0' }}>Thông tin hợp đồng</Title>

                <div style={{ width: '80%', margin: '0 auto' }}>
                    <div>
                        <Title level={4} style={{ textAlign: 'start', color: '#007bff' }}>Thông tin người lao động</Title>
                        <div style={{ width: '500px', margin: '0 auto', textAlign: 'start' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0 10px 0' }}>
                                <div>
                                    <span style={{ fontWeight: '600', display: 'inline-block', width: '100px' }}>Họ và tên:</span>Nguyen Van Quan Ly
                                </div>
                                <div>
                                    <span style={{ fontWeight: '600', display: 'inline-block', width: '100px' }}>Giới tính:</span>Nam
                                </div>
                            </div>
                            <div style={{ margin: '10px 0 10px 0' }}>
                                <span style={{ fontWeight: '600', display: 'inline-block', width: '100px' }}>Sinh ngày:</span>06-07-2003
                            </div>
                            <div style={{ margin: '10px 0 10px 0' }}>
                                <span style={{ fontWeight: '600', display: 'inline-block', width: '100px' }}>CMND|CCCD:</span>AAAA000002
                            </div>
                            <div style={{ margin: '10px 0 10px 0' }}>
                                <span style={{ fontWeight: '600', display: 'inline-block', width: '100px' }}>Địa chỉ:</span>String
                            </div>
                            <div style={{ margin: '10px 0 10px 0' }}>
                                <span style={{ fontWeight: '600', display: 'inline-block', width: '100px' }}>Số điện thoại:</span>String
                            </div>
                        </div>

                    </div>
                    <div>
                        <Title level={4} style={{ textAlign: 'start', color: '#007bff' }}>Hợp đồng lao động</Title>
                        <div style={{ width: '90%', margin: '0 auto' }}>
                            <Title level={5} style={{ textAlign: 'start', color: '#007bff', marginTop: '10px' }}>1. Công việc, phòng ban và thời hạn hợp đồng</Title>
                            <div style={{ width: '500px', margin: '0 auto', textAlign: 'start' }}>
                                <div style={{ margin: '10px 0 10px 0' }}>
                                    <span style={{ fontWeight: '600', display: 'inline-block', width: '150px' }}>Phòng ban công tác:</span>Sales
                                </div>
                                <div style={{ margin: '10px 0 10px 0' }}>
                                    <span style={{ fontWeight: '600', display: 'inline-block', width: '150px' }}>Loại hợp đồng:</span>Hợp đồng xác định hạn
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>
                                        <span style={{ fontWeight: '600', display: 'inline-block', width: '150px' }}>Từ ngày:</span>05-08-2023
                                    </div>
                                    <div>
                                        <span style={{ fontWeight: '600', display: 'inline-block', width: '100px' }}>Đến ngày:</span>30-11-2023
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ width: '90%', margin: '0 auto' }}>
                            <Title level={5} style={{ textAlign: 'start', color: '#007bff', marginTop: '10px' }}>2. Lương, phụ cấp và các khoản bổ sung khác</Title>
                            <div style={{ width: '500px', margin: '0 auto', textAlign: 'start' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0 10px 0' }}>
                                    <div>
                                        <span style={{ fontWeight: '600', display: 'inline-block', width: '150px' }}>Lương căn bản:</span>90,000,000
                                    </div>
                                    <div>
                                        <span style={{ fontWeight: '600', display: 'inline-block', width: '150px' }}>Lương tính thuế:</span>80,000,000
                                    </div>
                                </div>
                                <div style={{ margin: '10px 0 10px 0' }}>
                                    <span style={{ fontWeight: '600', display: 'inline-block', width: '200px' }}>Các phụ cấp(mỗi tháng):</span>
                                </div>
                                <div style={{ margin: '10px 0 10px 0' }}>
                                    <span style={{ fontWeight: '600', display: 'inline-block', width: '150px' }}>Hình thức trả lương:</span>Chuyển khoản
                                    <div style={{ width: '90%', margin: '0 auto', textAlign: 'start' }}>
                                        <div >
                                            <span style={{ fontSize: '1em', display: 'inline-block', width: '150px' }}>Số TK ngân hàng:</span>string
                                        </div>
                                        <div>
                                            <span style={{ fontSize: '1em', display: 'inline-block', width: '150px' }}>Chủ tài khoản:</span>string
                                        </div>
                                        <div>
                                            <span style={{ fontSize: '1em', display: 'inline-block', width: '150px' }}>Ngân hàng:</span>string
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ width: '90%', margin: '0 auto' }}>
                            <Title level={5} style={{ textAlign: 'start', color: '#007bff', marginTop: '10px' }}>3. Thời gian làm việc và ghi chú</Title>
                            <div style={{ width: '500px', margin: '0 auto', textAlign: 'start' }}>
                                <div style={{ margin: '10px 0 10px 0' }}>
                                    <span style={{ fontWeight: '600', display: 'inline-block', width: '200px' }}>Số ngày làm việc 1 tuần:</span>5
                                </div>
                                <div style={{ margin: '10px 0 10px 0' }}>
                                    <span style={{ fontWeight: '600', display: 'inline-block', width: '200px' }}>Số người phụ thuộc:</span>1
                                </div>
                                <div style={{ margin: '10px 0 10px 0' }}>
                                    <span style={{ fontWeight: '600', display: 'inline-block', width: '200px' }}>Ghi chú:</span>abc
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default MyContract;