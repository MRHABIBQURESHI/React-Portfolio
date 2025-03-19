import { FC } from 'react';
import IMG1 from '/p1.png';
import IMG2 from '/p2.png';
import IMG3 from '/p3.png';
import IMG4 from '/p4.png';
import IMG5 from '/p5.png';
import IMG6 from '/p6.png';
import IMG7 from '/p7.png';
import IMG8 from '/p8.png';
import IMG9 from '/p9.png';


import './portfolio.css';

interface Project {
  id: number;
  title: string;
  img: string;
  description: string;
  technologies: string;
  link: string;
  github: string;
}

const Portfolio: FC = () => {
  const soloProjects: Project[] = [
    {
      id: 1,
      title: '3D Portfolio',
      img: IMG1,
      description:
        'I Create 3D protfolio using Three.Js & React',
      technologies: 'React | Three.JS',
      link: 'https://calm-valkyrie-efaa89.netlify.app/',
      github: 'https://github.com/MRHABIBQURESHI?page=2&tab=repositories',
    },
    {
      id: 2,
      title: 'Snake Game',
      img: IMG2,
      description:
        'I Create Snake Game Using JavaScript',
      technologies: 'HTML , CSS | Javascript',
      link: 'https://melodic-hotteok-65160a.netlify.app/',
      github: 'https://github.com/MRHABIBQURESHI/Snake-Game-',
    },
    {
      id: 3,
      title: 'Electronix',
      img: IMG3,
      description: 'I Create Electronix E-Com Webiste Using React Redux Javascript with Firebase Auth',
      technologies: 'JavaScript | React | Firebase',
      link: 'https://comforting-speculoos-fbb9ee.netlify.app/',
      github: 'https://github.com/MRHABIBQURESHI/E-Commerce-React-Redux',
    },
    {
      id: 4,
      title: 'Movies Hub',
      img: IMG4,
      description:
        'I Create Moives Hub Forntend Using React',
      technologies: 'JavaScript | React',
      link: 'https://genuine-brigadeiros-d3e162.netlify.app/',
      github: 'https://github.com/habibqureshi488/Streming',
    },
    {
      id: 5,
      title: 'Portfolio',
      img: IMG5,
      description:
        'I Create Portfolio Using HTML , CSS , Javascript',
      technologies: 'JavaScript | HTML , CSS',
       link:'https://mrhabibqureshi.netlify.app/',
       github:'https://github.com/MRHABIBQURESHI/Portfolio'
     },
     {
       id :6 ,
       title :'Wining Era' ,
       img :IMG6 ,
       description :
         "I Create Wining Era Using React" ,
       technologies :'JavaScript | React' ,
       link :'https://silver-churros-d7f0c6.netlify.app/' ,
       github :'https://silver-churros-d7f0c6.netlify.app/'
     },
     {
       id :8 ,
       title :'Cars Hub' ,
       img :IMG8 ,
       description :
         "I Create Car Hub Using React , Javascript" ,
       technologies :'JavaScript | React' ,
       link :'https://wonderful-pithivier-cf3c04.netlify.app/' ,
       github :'https://github.com/MRHABIBQURESHI/Food-Hub'
     },
     {
       id :9 ,
       title :'Resume Builder' ,
       img :IMG7 ,
       description :
         "I Create Resume Builder with HTML , Css , Javascript" ,
       technologies :'JavaScript | HTML , CSS' ,
       link :'https://relaxed-sfogliatella-e4f259.netlify.app/' ,
       github :'https://github.com/habibqureshi488/Resume-Builder'
     },
     {
      id :7 ,
      title :'Tech 20 Four' ,
      img :IMG9 ,
      description :
        "I Create Tech20Four" ,
      technologies :'JavaScript | NextJS' ,
      link :'https://tech20four.com/' ,
      github :'https://tech20four.com/'
    },
   ];

   return (
     <section id="portfolio">
       <h5>My Recent Work</h5>
       <h2>Portfolio</h2>

       <div className="container portfolio__container">
         {soloProjects.map((pro) => (
           <article className="portfolio__item" key={pro.id}>
             <div className="portfolio__item-image">
               <img src={pro.img} alt={pro.title} />
             </div>
             <div className="portfolio__item-content">
               <h3>{pro.title}</h3>
               <p>{pro.description}</p>
               <p>{pro.technologies}</p>
             </div>
             <div className="portfolio__item-cta">
               <a
                 href={pro.github}
                 target="_blank"
                 className="btn"
                 rel="noreferrer"
               >
                 GitHub
               </a>
               <a
                 href={pro.link}
                 target="_blank"
                 className="btn btn-primary"
                 rel="noreferrer"
               >
                 Visit Website
               </a>
             </div>
           </article>
         ))}
       </div>
     </section>
   );
};

export default Portfolio;