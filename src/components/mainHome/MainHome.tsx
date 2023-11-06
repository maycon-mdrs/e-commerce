import { Button, Flex } from "antd";
import { ItemCard } from "../itemCard/ItemCard";
import { Product } from "../../models/Product";
import { useState } from "react";

export function MainHome({ products }: any) {
    return (
        <Flex wrap="wrap" gap="large" justify="center">
            {products.map((p:any) => (
                <ItemCard
                    key={p.id}
                    id={p.id}
                    title={p.title}
                    price={p.price}
                    description={p.description}
                    imageUrl={p.imageUrl}
                    quantityAvailable={p.quantityAvailable}
                />
            ))}
        </Flex>
    );
}
