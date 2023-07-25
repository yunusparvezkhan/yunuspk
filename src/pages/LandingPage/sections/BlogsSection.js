import React from 'react';
import '../styles/blogs-section.css'
import RectImage from '../../../components/RectImage';

const BlogsSection = () => {

    const blogsData = [
        {
            image: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
            alt: "something",
            title: "Blog no 1",
            subtitle: "25th July 2023 | Technology"
        },
        {
            image: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
            alt: "something",
            title: "Blog no 2",
            subtitle: "25th July 2023 | Technology"
        },
        {
            image: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
            alt: "something",
            title: "Blog no 3",
            subtitle: "25th July 2023 | Technology"
        }
    ]

    const renderBlogsGridCard = blogsData.slice(0, 3).map((blog) => {
        return (
            <div key={blog.title} className='flex flex-col justify-between cursor-pointer  blogs-section-card' >
                <RectImage
                    image={blog.image}
                    alt={blog.alt}
                    width={300}
                    dataUnit='px'
                    aspectRatio={[16, 9]}
                    background="transparent"
                />
                <div className=' flex flex-col items-center  blogs-sec-card-content' >
                    <label>{blog.title}</label>
                    <span>{blog.subtitle}</span>
                </div>
            </div>
        )
    })

    return (
        <div>
            <div className='flex flex-col items-center justify-between blogs-sec-container'>
                <h1 className='text-5xl w-fit mb-10' >Blogs</h1>
                <div className='border mb-10 flex flex-row items-center justify-between gap-5  blogs-sec-cards-container'>
                    {renderBlogsGridCard}
                </div>
            </div>
        </div>
    )
}

export default BlogsSection