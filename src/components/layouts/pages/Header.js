import React from 'react';
import { Header as Antd } from 'antd/es/layout/layout';
import { Button, Typography } from 'antd';
import { FiLogOut } from 'react-icons/fi';

const Header = ({ content }) => {
    const { Title } = Typography;
    return (
        <Antd style={{
            backgroundColor: '#fff',
            border: '1px solid #ccc',
            display: 'flex',
            // height: '96px',
            alignItems: 'center',
            justifyContent: 'space-between',
        }}>
            <Title level={3} style={{ margin: '0', textAlign: 'end' }}>
                {content}
            </Title>
            <Button
                type="ghost" // set type to "ghost"
                size={"large"}
                icon={<FiLogOut />}
                style={{
                    fontSize: '24px',
                    color: 'blue',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: "0 -2px 8px rgba(0, 0, 0, 0.15)",
                }}
            />
        </Antd>
    );
};

export default Header;
