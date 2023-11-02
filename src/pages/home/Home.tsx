import React from 'react'
import Category from '../../components/home/sidebar/Category';
import BannerSlider from '../../components/home/outlet/BannerSlider';

const Home: React.FC = () => {
    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-8 gap-4'>
                {/* sidebar */}
                <div className='col-span-2 border'>
                    <Category />
                </div>
                {/* outlet */}
                <div className='col-span-6'>
                    <BannerSlider />
                </div>
            </div>
        </div>
    );
};

export default Home;