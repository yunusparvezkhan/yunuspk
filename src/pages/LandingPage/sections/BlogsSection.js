import React from 'react';
import '../styles/blogs-section.css'
import RectImage from '../../../components/RectImage';

const BlogsSection = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-between blogs-sec-container'>
                <h1 className='text-5xl w-fit mb-10' >Blogs</h1>
                <div className='border mb-10 flex flex-row items-center justify-between gap-5  blogs-sec-cards-container'>
                    <div className='' >
                        <RectImage
                            image="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
                            alt="something"
                            width={300}
                            dataUnit='px'
                            aspectRatio={[16, 9]}
                            background="transparent"
                        />
                    </div>
                    <div className=' w-72 border h-80' >

                    </div>
                    <div className=' w-72 border h-80' >

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogsSection