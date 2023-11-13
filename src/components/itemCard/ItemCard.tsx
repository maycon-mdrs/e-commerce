import { Button, Card } from "antd";
import { MyButton } from "../buttons/MyButton";

import '../style.css';
import './style.css';
import Meta from "antd/es/card/Meta";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Product } from "../../models/Product";
import { useState } from "react";
import { MyModal } from "../modal/MyModal";

declare module 'react' {
    interface JSXIntrinsicElements {
        'myButton': any;
    }
}

export function ItemCard({ title, price, description, imageUrl, handleBuyClick }: any) {
    return (
        <Card
            className="item-card shadow-sm"
            style={{ width: 250 }}
            cover={
                <img alt={title}
                    src={imageUrl}
                    style={{ height: '150px', objectFit: 'cover' }}
                />
            }
        >
            <div className="d-flex flex-column" style={{ gap: '40px' }}>
                <div className="d-flex flex-column" style={{ gap: '10px' }}>
                    <div className="d-flex align-items-center justify-content-between">
                        <h6 className="m-0" style={{ fontSize: '1rem' }}>
                            {title}
                        </h6>
                        <h4 className="m-0" style={{ fontSize: '1.25rem' }}>
                            {`R\$ ${price}`}
                        </h4>
                    </div>

                    <span className="description">{description}</span>
                </div>

                <MyButton
                    onClickHandler={handleBuyClick}
                    text="Comprar"
                    icon={<ShoppingCartOutlined style={{ fontSize: '20px' }} />}
                    className="button-comprar"
                />
            </div>

        </Card>
    );
}