import React from 'react';


export default function News() {
    const NewsColumn = props =>(
        <div className="rows"><i>{props.icon}</i><a href={props.link}>{props.title}</a></div>
    );
    return (
        <div>Отвечает за список новостей
            <NewsColumn title="The most interesting news" link="#" icon="&#10026;"/>
            <NewsColumn title="The most interesting news2" link="#" icon="&#10026;"/>
            <NewsColumn title="The most interesting news3" link="#" icon="&#10026;"/>
            <NewsColumn title="The most interesting news4" link="#" icon="&#10026;"/>
            <NewsColumn title="The most interesting news5" link="#" icon="&#10026;"/>
            <NewsColumn title="The most interesting news6" link="#" icon="&#10026;"/>
        </div>
    )
}