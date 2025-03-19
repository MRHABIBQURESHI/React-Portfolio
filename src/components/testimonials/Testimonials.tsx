import { FC } from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import './testimonials.css';

interface Testimonial {
  id: number;
  link: string;
  name: string;
  role: string;
  test: string;
}

const Testimonials: FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      link: 'https://www.linkedin.com/in/uzairali19/',
      name: 'Uzair Ali',
      role: 'Full-Stack Web Developer | JavaScript | Rails | React',
      test: 'As a developer and a problem solver, I think Meri is a great collaborative partner to have. I met Meri in some basic JavaScript & React projects, and since then, she has drastically progressed in her understanding of the development process.',
    },
    {
      id: 2,
      link: 'https://www.linkedin.com/in/yishak-wesego/',
      name: 'Yishak Wesego',
      role: 'Full-stack Developer | Technical Support Engineer at Microverse',
      test: "It was a pleasure collaborating with Meri on different projects. She never settles, even after completing projects, she finds other resources and strengthens her knowledge.",
    },
    {
      id: 3,
      link: 'https://www.linkedin.com/in/akuu-khan/',
      name: 'Akbar (Aku) Khan',
      role: 'Full Stack Developer | Ruby on Rails | JavaScript | React',
      test: 'I worked with Meri in the same team, and her communication skills are very strong. She is a great team player and has very good programming skills.',
    },
    {
      id: 4,
      link: 'https://www.linkedin.com/in/isaicespedes/',
      name: 'Isai Céspedes',
      role: 'Full-Stack Web Developer | JavaScript | Rails | React',
      test: "I mentored Meri some months ago, and I can say that she is one of those people that you love to work with. She is committed and always does her best.",
    },
    {
      id: 5,
      link: 'https://www.linkedin.com/in/hamzaalitarar/',
      name: 'Hamza Tarar',
      role: 'Software Developer',
      test: "Throughout all our collaborations, Meri has always conducted herself politely and kindly. She is always willing to help and puts the team ahead of herself.",
    },
    {
      id: 6,
      link: 'https://www.linkedin.com/in/rex9/',
      name: 'Htet (Rex) Naing',
      role: 'Full Stack Developer | Mentor | Team Player',
      test: "Meri is a really cheerful and supportive person. She helped me patiently with my resume review, even when she had no responsibility to do so.",
    },
  ];

  return (
    <section id="testimonials">
      <h5>Feedback from my peers</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
            <div className="client__avatar">
              <a href={test.link} target="_blank" rel="noopener noreferrer">
                <BsLinkedin />
              </a>
            </div>
            <h5 className="client__name">{test.name}</h5>
            <small className="client__review">{test.test}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
