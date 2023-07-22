import { createSlice } from "@reduxjs/toolkit";

const aboutSlice = createSlice({
    name: 'about',
    initialState: {
        image1: {
            link: 'https://lh3.google.com/u/0/d/1q-IlDz06QSIhClhbYp0cytZ7P9wI1ztx=w1920-h975-iv2',
            alt: 'Yunus Parvez Khan'
        },
        image2: {
            link: '',
            alt: 'Yunus Parvez Khan'
        },
        image3: {
            link: '',
            alt: 'Yunus Parvez Khan'
        },
        image4: {
            link: '',
            alt: 'Yunus Parvez Khan'
        },
        image5: {
            link: '',
            alt: 'Yunus Parvez Khan'
        },
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