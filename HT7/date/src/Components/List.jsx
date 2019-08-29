import React from 'react';

import Wrapper from './Wrapper'
import Video from "./Video";
import Article from "./Article";

export default function List(props) {
    const WrappedVideo = Wrapper(Video);
    const WrappedArticle = Wrapper(Article);

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
