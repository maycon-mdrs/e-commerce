import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { MyButton } from '../buttons/MyButton';
import ButtonGroup from 'antd/es/button/button-group';
import { MinusOutlined, PlusOutlined, ShoppingCartOutlined } from '@ant-design/icons';

import './modal.css';

export function MyModal({ title, content, open, onCancel, imageUrl, productTitle, productPrice }: any) {
  const [count, setCount] = useState(1);

  const increase = () => {
    setCount(count + 1);
  };

  const decline = () => {
    let newCount = count - 1;
    if (newCount < 1) {
      newCount = 1;
    }
    setCount(newCount);
  };

  const totalValue = (count * parseFloat(productPrice)).toFixed(2);

  return (
    <>
      <Modal
        centered
        open={open}
        onCancel={onCancel}
        footer={null}
      >
        <div style={{ textAlign: 'center' }}>
          <img src={imageUrl} alt={productTitle} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
          <h3>{productTitle}</h3>
          <ButtonGroup className='align-items-center'>
            <Button onClick={decline} icon={<MinusOutlined />} style={{ maxHeight: '32px' }} />
            <input type="text" disabled value={count} className='count' />
            <Button onClick={increase} icon={<PlusOutlined />} style={{ maxHeight: '32px' }} />
          </ButtonGroup>
          <p>{`${count} x R$ ${productPrice} = `} <strong>{`R$ ${totalValue}`}</strong></p>

          <MyButton
            onClickHandler={()=>{}}
            text="PEDIR POR WHATSAPP"
            className="button-comprar"
          />
        </div>
      </Modal>

    </>
  );
};
