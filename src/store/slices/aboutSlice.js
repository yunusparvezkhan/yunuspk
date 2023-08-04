import { createSlice } from "@reduxjs/toolkit";

const aboutSlice = createSlice({
    name: 'about',
    initialState: {
        images: [],
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