import React from 'react';
import { Button, message, Space } from 'antd';

// Componente personalizado para exibir mensagens
type CustomMessageProps = {
    type: 'success' | 'error' | 'warning';
    content: string;
};

const CustomMessage = ({ type, content }: CustomMessageProps) => {
  const [messageApi, contextHolder] = message.useMessage();

  const showMessage = () => {
    messageApi.open({
      type,
      content,
    });
  };

  return (
    <>
      {contextHolder}
      <Button onClick={showMessage}>{type}</Button>
    </>
  );
};

const App: React.FC = () => {
  return (
    <Space>
      <CustomMessage type="success" content="This is a success message" />
      <CustomMessage type="error" content="This is an error message" />
      <CustomMessage type="warning" content="This is a warning message" />
    </Space>
  );
};

export { App };
