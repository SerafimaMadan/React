import React from 'react';

import Wrapper from './Wrapper'
import Video from "./Video";
import Article from "./Article";

const WrappedVideo = Wrapper(Video);
const WrappedArticle = Wrapper(Article);

export default function List(props) {
    return props.list.map((item, i) => {
        switch (item.type) {
            case 'video':
                return (
                    <WrappedVideo {...item} key={i}/>
                );
            case 'article':
                return (
                    <WrappedArticle {...item} key={i}/>
                );
        }
    });
};
