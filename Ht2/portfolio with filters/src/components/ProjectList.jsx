import React from 'react';


const ProjectList = (props) => {

    const projects = [
        {
            img: "./img/mon.jpg",
            category: "Business Cards"
        },
        {
            img: "./img/200.jpg",
            category: "Websites"
        },
        {
            img:
                "./img/emi_haze.jpg",
            category: "Websites"
        },
        {
            img:
                "./img/codystretch.jpg",
            category: "Websites"
        },
        {
            img:
                "./img/Triangle_003.jpg",
            category: "Business Cards"
        },
        {
            img:
                "./img/place200x290.png",
            category: "Websites"
        },
        {
            img: "./img/200.jpg",
            category: "Websites"
        },
        {
            img:
                "./img/transmission.jpg",
            category: "Business Cards"
        },
        {
            img:
                "./img/place200x290_1.png",
            category: "Websites"
        },
        {
            img:
                "./img/place200x290_2.png",
            category: "Flayers"
        },
        {
            img:
                "h./img/the_ninetys_brand.jpg",
            category: "Websites"
        },
        {
            img: "./img/dia.jpg",
            category: "Business Cards"
        },
        {
            img:
                "./img/Triangle_350x197.jpg",
            category: "Websites"
        },
        {
            img:
                "./img/emi_haze.jpg",
            category: "Websites"
        },
        {
            img:
                "./img/transmission.jpg",
            category: "Business Cards"
        },
        {
            img:
                "./img/Triangle_350x197_1.jpg",
            category: "Websites"
        },
        {
            img:
                "h./img/place200x290_3.png",
            category: "Flayers"
        }
    ];

    return(
        <div>
            {
                props.projects.map((project, i)=>{
                    return(
                        <div className="project" key={`project-${project.category}-${i}`}>
                            <img src={project.img} alt={`project-${project.category}-${i}`}/>
                        </div>
                    );
                })
            };
        </div>
    )
};
export default ProjectList;