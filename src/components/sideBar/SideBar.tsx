import './sideBar.css';
import type { RadioChangeEvent } from 'antd';
import { ConfigProvider, Input, Radio, Space } from 'antd';
import { MyInput } from '../input/MyInput';
import { MyRadio } from '../input/MyRadio';
import { useState } from 'react';

export function SideBar({ handleChange }: any) {
    return (
        <ConfigProvider
            theme={{
                components: {
                    Radio: {
                        colorPrimary: '#cf301a',
                    }
                },
            }}
        >
            <section className="sidebar shadow-sm">
                <h5 style={{ width: 'max-content' }}>Ordenar por</h5>
                <Radio.Group onChange={handleChange}>
                    <Space direction="vertical">
                        <Radio value={'menor-preco'}>Menor preço</Radio>
                        <Radio value={'maior-preco'}>Maior preço</Radio>
                        <Radio value={'a-z'}>A-Z</Radio>
                        <Radio value={'z-a'}>Z-A</Radio>
                    </Space>
                </Radio.Group>
                {/* 
                <div className='d-flex flex-column' style={{ gap: '10px' }}>

                    <MyInput
                        handleChange={handleChange}
                        value="menor-preco"
                        title="Menor preço"
                        name="input"
                    />
                    <MyInput
                        handleChange={handleChange}
                        value="maior-preco"
                        title="Maior preço"
                        name="input"
                    />
                    <MyInput
                        handleChange={handleChange}
                        value="a-z"
                        title="A-Z"
                        name="input"
                    />
                    <MyInput
                        handleChange={handleChange}
                        value="z-a"
                        title="Z-A"
                        name="input"
                    />
                </div> 
            */}
            </section>
        </ConfigProvider >
    );
}
