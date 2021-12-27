import React, {useState} from 'react'
import axios from 'axios'
import Hero from '../components/components/Hero/Hero'
import Testimontial from '../components/components/Testimontial/Testimontial'
import Newsletter from '../components/components/Newsletter/Newsletter'

const Home = () => {

    // const [sections, setSections] = useState([]);
    axios.get('https://adchitects-cms.herokuapp.com/page/MPz3uDxgKR',{
        auth: {
            username: 'adchitects',
            password: 'jsrulezzz'
        }
    }).then(el => {
        sections = el.data.sections
    })
    
    return (
        <>
            <Hero imgSrc={'test'} title={'test'}/>
            <Testimontial />
            <Newsletter />
        </>
    )
}

export default Home;