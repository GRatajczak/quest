import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Hero from '../components/components/Hero/Hero'
import Testimontial from '../components/components/Testimontial/Testimontial'
import Newsletter from '../components/components/Newsletter/Newsletter'

const getData = async () => {

    const page = await axios.get(`${process.env.REACT_APP_API_URL}page/MPz3uDxgKR`,{
            auth: {
                username: process.env.REACT_APP_USERNAME,
                password: process.env.REACT_APP_PASSWD
            }
        })
    return page.data;
}

const Home = () => {
    const [data, setData ] = useState([]);

    useEffect(
        ()=> {
            getData()
                .then(data => {
                    setData(data.sections)
                }
            )
            return;
        }
        , 
        []
    );
    return (
        <>
            <Hero imgSrc={data[0]?.img} title={data[0]?.text}/>
            <Testimontial text={data[1]?.text} author={data[1]?.author}/>
            <Newsletter />
        </>
    )
}

export default Home;