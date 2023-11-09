import React, { useState } from 'react';
import { Button, Modal } from 'antd';

export function MyModal({ title, content, modalOpen, onCancel, imageUrl, productTitle, productPrice }: any) {
  return (
    <>
      {/* <Modal
        title={title}
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal> */}

      <Modal
        title={title}
        centered
        open={modalOpen}
        onCancel={onCancel}
      >
        <div style={{ textAlign: 'center' }}>
          <img src={imageUrl} alt={productTitle} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
          <h3>{productTitle}</h3>
          <p>{`Preço: R$ ${productPrice}`}</p>
          {content}
        </div>
      </Modal>

    </>
  );
};
