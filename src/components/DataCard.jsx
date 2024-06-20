import React, { useState } from 'react';
import { Button, Card, Divider } from 'antd';
import { MailOutlined, PhoneOutlined, GlobalOutlined, HeartOutlined, HeartFilled, DeleteFilled } from '@ant-design/icons';
import BasicModal from './BasicModal';

const DataCard = ({ details, cardDeleted }) => {
    const [liked, setLiked] = useState(false);
    const [cardValues, setCardValues] = useState(details);

    const handleLike = () => {
        setLiked(!liked);
    };


    const handleCardValuesChange = (values) => {
        console.log(cardValues);
       setCardValues(values);
       console.log(values);
    }

    const handleCardDelete = () => {
        cardDeleted(cardValues.id);
    }

    console.log(cardValues);

    return (
        <Card
            className='w-full border border-slate-200 rounded-md'
            styles={{
                body: {
                    padding: 0
                }
            }}
        >
            <div className='flex flex-col w-full'>
                <img
                    src={`https://api.dicebear.com/9.x/pixel-art/svg?seed=${cardValues.username}`}
                    alt="avatar"
                    className='h-[180px] w-full'
                />
                <div className='flex flex-col p-6 h-[200px] justify-center'>
                    <h3 className='text-xl font-medium mb-2'>{cardValues.name}</h3>
                    <p className='text-lg text-slate-600 w-full'><span className='mr-2'><MailOutlined /></span>{cardValues.email}</p>
                    <p className='text-lg text-slate-600'><span className='mr-2'><PhoneOutlined /></span>{cardValues.phone}</p>
                    <p className='text-lg text-slate-600'><span className='mr-2'><GlobalOutlined /></span>{cardValues.website}</p>
                </div>
                <div className='w-full flex items-center justify-evenly border-t border-slate-200 bg-gray-100 py-1'>
                    <Button
                        onClick={handleLike}
                        type='link'
                        icon={liked ? <HeartFilled style={{ fontSize: '20px' }} className='text-red-500' /> : <HeartOutlined style={{ fontSize: '20px' }} className='text-red-500' />}
                    />
                    <Divider type='vertical' className='border-gray-500' />
                    <BasicModal key={cardValues.id} formValues={cardValues} handleChange={handleCardValuesChange} />
                    <Divider type='vertical' className='border-gray-500' />
                    <Button
                        onClick={handleCardDelete}
                        type='link'
                        icon={<DeleteFilled style={{ fontSize: '20px' }} className='text-slate-500 hover:text-red-500' />}

                    />
                </div>
            </div>
        </Card>)
};
export default DataCard;