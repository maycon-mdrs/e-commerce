import { useEffect, useState } from "react";
import { ItemCard } from "../../components/itemCard/ItemCard";
import { MainHome } from "../../components/mainHome/MainHome";
import { MyNav } from "../../components/nav/MyNav";
import { SideBar } from "../../components/sideBar/SideBar";
import products from "../../database/data";

import './home.css';

export function HomePage() {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [sortedData, setSortedData] = useState(products);

    useEffect(() => {
        let sortedProducts = [...products]; // Copia os produtos para evitar mutações diretas
        if (selectedCategory === 'menor-preco') {
            sortedProducts.sort((a, b) => parseFloat(a.price.replace(',', '.')) - parseFloat(b.price.replace(',', '.')));
        } else if (selectedCategory === 'maior-preco') {
            sortedProducts.sort((a, b) => parseFloat(b.price.replace(',', '.')) - parseFloat(a.price.replace(',', '.')));
        } else if (selectedCategory === 'a-z') {
            sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
        } else if (selectedCategory === 'z-a') {
            sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
        }
        setSortedData(sortedProducts);
    }, [selectedCategory]); // Este código é executado sempre que `selectedCategory` muda

    const handleChange = (event:any) => {
        setSelectedCategory(event.target.value);
    };


    return (
        <>
            <MyNav />
            <div className="main-container">
                <div className="container d-flex mt-4">
                    <SideBar handleChange={handleChange} />
                    <MainHome products={sortedData} />
                </div>
            </div>
        </>
    );
}
