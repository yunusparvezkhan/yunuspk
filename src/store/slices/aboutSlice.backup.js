import { createSlice } from "@reduxjs/toolkit";

const aboutSlice = createSlice({
    name: 'about',
    initialState: {
        images: [
            {
                link: 'https://mediabase.netlify.app/ypk/photos/selfies/20190000_01.jpg',
                alt: 'Yunus Parvez Khan'
            },
            {
                link: 'https://mediabase.netlify.app/ypk/photos/selfies/20220922_01.jpg',
                alt: 'Yunus Parvez Khan'
            },
            {
                link: 'https://mediabase.netlify.app/ypk/photos/selfies/20230202_01.jpg',
                alt: 'Yunus Parvez Khan'
            },
            {
                link: 'https://mediabase.netlify.app/ypk/photos/selfies/20230509_01.jpg',
                alt: 'Yunus Parvez Khan'
            },
            {
                link: 'https://mediabase.netlify.app/ypk/photos/selfies/20230509_03.jpg',
                alt: 'Yunus Parvez Khan'
            },
            {
                link: 'https://mediabase.netlify.app/ypk/photos/selfies/20230509_04.jpg',
                alt: 'Yunus Parvez Khan'
            },
        ],
        // Do not put more than 450 charecters.
        paragraph: {
            text: `I am a Bharatiya scholar. I'm a Full Stack Web Developer, UI/UX Designer, YouTuber,
			Filmmaker. I have an adventurous life and a lots of experiences. I love to
			research things by digging deep onto the topics. My fields of expertise are
			Web Development, Network Architecture, Computer Architecture, Blockchain,
			Web - 3 etc. And I'm also pretty much into Physics, Psychology, Philosophy,
			Geo - Politics, Economics, Socialism.`,
        }

    },
})

export const aboutReducer = aboutSlice.reducer;