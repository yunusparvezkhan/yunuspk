import React from 'react';
import '../styles/blogs-section.css'
import RectImage from '../../../components/RectImage';
import TextThumbnail from '../../../components/TextThumbnail';

const BlogsSection = () => {

    const blogsData = [
        {
            image: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
            alt: "something",
            title: "Blog no 1",
            subtitle: "25th July 2023 | Technology",
            link: 'https://github.com/ypkorg/Pushing_into_states_in_React'
        },
        {
            image: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
            alt: "something",
            title: "Blog no 2",
            subtitle: "25th July 2023 | Technology",
            link: 'https://github.com/ypkorg/slice-method-in-js'
        },
        {
            image: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
            alt: "something",
            title: "Blog no 3",
            subtitle: "25th July 2023 | Technology",
            link: 'https://github.com/ypkorg/delta-commits-convention'
        }
    ]

    const renderBlogsGridCard = blogsData.slice(0, 3).map((blog) => {
        return (
            <a href={blog.link} rel='noreferrer' target='_blank' key={blog.title}>
                <div className='flex flex-col justify-between cursor-pointer  blogs-section-card' >
                    <div className='blogs-sec-card-rectimage'>
                        <RectImage
                            image={blog.image}
                            alt={blog.alt}
                            width={300}
                            dataUnit='px'
                            aspectRatio={[16, 9]}
                            background="transparent"
                        />
                    </div>
                    <div className=' flex flex-col items-center  blogs-sec-card-content' >
                        <label>{blog.title}</label>
                        <span>{blog.subtitle}</span>
                    </div>
                </div>
            </a>
        )
    })

    return (
        <div>
            <div className='flex flex-col items-center justify-between blogs-sec-container'>
                <h1 className='text-5xl w-fit mb-10' >Blogs</h1>
                <div className='|| dev-> mb-20 || flex flex-row items-center justify-between gap-5  blogs-sec-cards-container'>
                    {renderBlogsGridCard}
                </div>
            </div>
        </div>
    )
}

export default BlogsSection