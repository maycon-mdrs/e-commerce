import { Button, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useState } from "react";

interface MyButtonProps {
    onClickHandler: () => any;
    text: string;
    icon?: React.ReactNode;
    className: string;
    style?: React.CSSProperties;
}

export function MyButton({ onClickHandler, text, icon, className, style }: MyButtonProps) {
    const antIcon = <LoadingOutlined spin style={{color: 'white'}} />;
    const [loading, setLoading] = useState(false);  
    return (
        <Button
            type="primary"
            icon={loading ? '' : icon}
            className={`d-flex align-items-center justify-content-center ${className}`}
            style={style}
            onClick={onClickHandler}
        >
            {loading ? <Spin indicator={antIcon} /> : text}
        </Button>
    );
}