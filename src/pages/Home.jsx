import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { Col, Row } from 'antd';
import DataCard from '../components/DataCard';
import axios from 'axios';
import Loader from '../components/Loader';

const Home = () => {
    const [data, setData] = useState('');

    const fetchData = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleDelete = (id) => {
        console.log(id);
        console.log(data.filter( d => d.id !== id));
        setData(data.filter( d => d.id !== id));
    }

    useEffect(() => {
        fetchData();
    }, []);

    console.log(data);

    return (
        <main className='w-full h-auto'>
            <Navbar />
            <div className='w-full p-4'>
                {data ?
                    <Row gutter={[16, 16]}>
                        {data.map((detail) => (
                            <Col className="gutter-row"
                                key={detail.id}
                                xs={24}
                                sm={12}
                                md={8}
                                // lg={8}
                                xl={6}
                                // xxl={6}
                            >
                                <DataCard details={detail} cardDeleted={handleDelete} />
                            </Col>
                        ))}
                    </Row>
                    :
                    <div className='w-full flex flex-col items-center justify-center'>
                        <Loader />
                        <h3 className='text-xl font-medium -mt-14'>Loading</h3>
                    </div>}
            </div>
        </main>
    )
}

export default Home