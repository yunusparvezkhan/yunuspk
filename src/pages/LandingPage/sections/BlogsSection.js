import React from 'react';
import '../styles/blogs-section.css'
import RectImage from '../../../components/RectImage';

const BlogsSection = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-between blogs-sec-container'>
                <h1 className='text-5xl w-fit mb-10' >Blogs</h1>
                <div className='border mb-10 flex flex-row items-center justify-between gap-5  blogs-sec-cards-container'>
                    <div className='flex flex-col justify-between  blogs-section-card' >
                        <RectImage
                            image="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
                            alt="something"
                            width={300}
                            dataUnit='px'
                            aspectRatio={[16, 9]}
                            background="transparent"
                        />
                        <div className=' flex flex-col items-center  blogs-sec-card-content' >
                            <label>Blog Title</label>
                            <span>ddth mm yyyy || Topic</span>
                        </div>
                    </div>
                    <div className=' flex flex-col justify-between blogs-section-card' >
                        <RectImage
                            image="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
                            alt="something"
                            width={300}
                            dataUnit='px'
                            aspectRatio={[16, 9]}
                            background="transparent"
                        />
                        <div className=' flex flex-col items-center  blogs-sec-card-content' >
                            <label>Blog Title</label>
                            <span>ddth mm yyyy || Topic</span>
                        </div>
                    </div>
                    <div className='flex flex-col justify-between blogs-section-card' >
                        <RectImage
                            image="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
                            alt="something"
                            width={300}
                            dataUnit='px'
                            aspectRatio={[16, 9]}
                            background="transparent"
                        />
                        <div className=' flex flex-col items-center  blogs-sec-card-content' >
                            <label>Blog Title</label>
                            <span>ddth mm yyyy || Topic</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogsSection