import React from 'react';
import './styles/blogs-widget.css'
import RectImage from '../RectImage';
import TextThumbnail from '../TextThumbnail';
import Link from '../Link';
import Button from '../Button';
import { GiArmoredBoomerang } from 'react-icons/gi';
import { useFetchBlogsWidgetQuery } from '../../store';
import Datifier from '../Datifier';

const BlogsWidget = () => {

    const { data, error, isLoading } = useFetchBlogsWidgetQuery();

    if (isLoading) {
        return <h1>Loading</h1>
    } else if (error) {
        return <h1>{error.error}</h1>
    } else {
        const renderBlogsGridCard = data.slice(0, 3).map((blog, i) => {
            return (
                <a href={blog.link} rel='noreferrer' target='_blank' key={i}>
                    <div className='flex flex-col justify-between gap-7 cursor-pointer  blogs-widget-card' >
                        <div className='blogs-widget-card-rectimage'>
                            {
                                blog.image && blog.image.link ?
                                    <RectImage
                                        image={blog.image.link}
                                        alt={blog.image.alt}
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
                        <div className=' flex flex-col items-center  blogs-widget-card-content' >
                            <label>{blog.title}</label>
                            <span className='flex flex-row' > <Datifier type="dmy-b" day={blog.date.day} month={blog.date.month} year={blog.date.year} >{" |"}</Datifier>{'| ' + blog.topic} </span>
                        </div>
                    </div>
                </a>
            )
        })

        return (
            <div>
                <div className='flex flex-col items-center justify-between blogs-widget-container'>
                    <h1 className='text-5xl w-fit mb-20' >Blogs</h1>
                    <div className='blogs-widget-cards-container'>
                        {renderBlogsGridCard}
                    </div>
                    <Link to='/blogs'>
                        <Button primary
                            className="mb-52 px-6 font-mono rounded-lg"
                        >
                            More Blogs
                            <GiArmoredBoomerang className='ml-2' />
                        </Button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default BlogsWidget