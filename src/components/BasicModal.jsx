import React, { useState } from 'react';
import { Button, Modal, Form, Input } from 'antd';
import { EditOutlined } from '@ant-design/icons';

const BasicModal = ({ formValues, handleChange }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();
    const [newValues, setNewValues] = useState(formValues);

    const initialValues = {
        name: formValues.name,
        email: formValues.email,
        phone: formValues.phone,
        website: formValues.website,
    };

    const handleValuesChange = (changedValues, allValues) => {
        const mergedObject = {...formValues, ...allValues};
        setNewValues(mergedObject);
    };

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onFinish = () => {
        setIsModalOpen(false);
        handleChange(newValues);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed: ', errorInfo);
    };

    console.log(newValues);

    return (
        <>
            <Button
                type='link'
                onClick={showModal}
                icon={<EditOutlined style={{ fontSize: '20px' }} className='text-slate-500 hover:text-blue-500' />}
            />
            <Modal title="Basic Modal" open={isModalOpen} onOk={onFinish} onCancel={handleCancel}>
                <Form
                    form={form}
                    initialValues={initialValues}
                    onValuesChange={handleValuesChange}
                    className='border-t border-b py-6'
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input value={formValues.name} />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input value={formValues.email} />
                    </Form.Item>
                    <Form.Item
                        label="Phone"
                        name="phone"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input value={formValues.phone} />
                    </Form.Item>
                    <Form.Item
                        label="Website"
                        name="website"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input value={formValues.website} />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};
export default BasicModal;