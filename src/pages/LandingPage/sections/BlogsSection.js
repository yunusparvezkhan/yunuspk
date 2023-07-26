import React from 'react';
import '../styles/blogs-section.css'
import RectImage from '../../../components/RectImage';
import TextThumbnail from '../../../components/TextThumbnail';
import Link from '../../../components/Link';
import Button from '../../../components/Button';
import { GiArmoredBoomerang } from 'react-icons/gi';

const BlogsSection = () => {

    const blogsData = [
        {
            image: "https://github.com/ypkorg/slice-method-in-js/raw/masterdoc/Slice%20method%202.png",
            alt: "Slice Method in JS thumbnail",
            title: "Slice Method in Javascript",
            subtitle: "13th May 2023 | Javascript Programming",
            thumbnailTitle: "Slice Method in JS",
            link: 'https://github.com/ypkorg/slice-method-in-js'
        },
        {
            image: "",
            alt: "",
            title: "Pushing into states in React",
            subtitle: "11th May 2023 | ReactJS Programming",
            thumbnailTitle: "Pushing into states in ReactJS",
            link: 'https://github.com/ypkorg/Pushing_into_states_in_React'
        },
        {
            image: "https://miro.medium.com/v2/resize:fit:720/0*v1o4-S6vNyVznnBY",
            alt: "Jullian Assange",
            title: "Imaginary Interview with the future of transparency, Julian Assange",
            subtitle: "26th July 2023 | Cyber Security",
            thumbnailTitle: "Cyber Security Do's & Don't's",
            link: 'https://yunuspk.medium.com/imaginary-interview-with-the-future-of-transparency-julian-assange-714c5a251774'
        }
    ]

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