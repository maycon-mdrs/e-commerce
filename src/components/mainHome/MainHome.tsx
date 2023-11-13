import { Button, Flex } from "antd";
import { ItemCard } from "../itemCard/ItemCard";
import { Product } from "../../models/Product";
import { useState } from "react";

export function MainHome({ products, handleBuyClick  }: any) {
    return (
        <Flex wrap="wrap" gap="large" justify="center">
            {products.map((product:any) => (
                <ItemCard
                    key={product.id}
                    {...product}
                    handleBuyClick ={() => handleBuyClick (product)}
                />
            ))}
        </Flex>
    );
}
