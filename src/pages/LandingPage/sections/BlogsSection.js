import React from 'react';
import '../styles/blogs-section.css'
import RectImage from '../../../components/RectImage';
import TextThumbnail from '../../../components/TextThumbnail';
import Link from '../../../components/Link';
import Button from '../../../components/Button';
import { GiArmoredBoomerang } from 'react-icons/gi';

const BlogsSection = ({ blogsData }) => {

    const renderBlogsGridCard = blogsData.slice(0, 3).map((blog) => {
        return (
            <a href={blog.link} rel='noreferrer' target='_blank' key={blog.title}>
                <div className='flex flex-col justify-between gap-7 cursor-pointer  blogs-section-card' >
                    <div className='blogs-sec-card-rectimage'>
                        {
                            blog.image ?
                                <RectImage
                                    image={blog.image}
                                    alt={blog.alt}
                                    width={300}
                                    dataUnit='px'
                                    aspectRatio={[16, 9]}
                                    background="transparent"
                                />
                                : <TextThumbnail
                                    title={blog.thumbnailTitle}
                                    width={300}
                                    dataUnit='px'
                                    aspectRatio={[16, 9]}
                                    background="#343434"
                                />
                        }
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
                <h1 className='text-5xl w-fit mb-20' >Blogs</h1>
                <div className='blogs-sec-cards-container'>
                    {renderBlogsGridCard}
                </div>
                <Link to='/blogs'>
                    <Button primary
                        className="|| dev-> mb-20 || px-6 font-mono rounded-lg"
                    >
                        More Blogs
                        <GiArmoredBoomerang className='ml-2' />
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default BlogsSection