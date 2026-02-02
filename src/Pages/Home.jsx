import React from 'react';
import Banner from "../Components/HeroSection/Banner"
import LatestProduct from '../Components/LatestProduct/LatestProduct';
import ProdWorkFlow from '../Components/WorkFlow/ProdWorkFlow';

const Home = () => {
    return (
        <div>
            <div className='mt-10'>
                <Banner/>
            </div>
            <div>
                <LatestProduct/>
            </div>
            <div>
                <ProdWorkFlow/>
            </div>
        </div>
    );
};

export default Home;