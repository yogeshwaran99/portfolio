import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Hackerrank from '../../assets/hackerrank.png';
import Leetcode from '../../assets/leetcode.png';
import Geeksforgeeks from '../../assets/geeksforgeeks.png';
import Codeforces from '../../assets/codeforces.png';
import { useMediaQuery } from 'react-responsive';

import './code.css';

import 'swiper/css';
import 'swiper/css/pagination';

const Code = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

  const code = [
    {
      id: 1,
      img: Hackerrank,      
      platform: 'HackerRank',
      problemssolved: '142',
      star: '5 (Java)',
      link: 'https://www.hackerrank.com/profile/yogeshwaran99',      
    },
    {
      id: 2,
      img: Leetcode,      
      platform: 'LeetCode',
      rating: '1464',
      problemssolved: '67',      
      link: 'https://leetcode.com/u/yogeshwaran99/',
    },
    {
      id: 3,
      img: Geeksforgeeks,      
      platform: 'GeeksforGeeks',
      rating: '1785',
      problemssolved: '263',
      link: 'https://www.geeksforgeeks.org/user/yogeshwaran99/',
    },
    {
      id: 4,
      img: Codeforces,      
      platform: 'Codeforces',
      rating: '588',
      problemssolved: '31',
      link: 'https://codeforces.com/profile/yogeshwaran99',
    },
  ];

  return (
    <section id="code">
      <h3>Coding Profiles</h3>      
      <Swiper 
        className="container code__container"
        modules={[Pagination]}
        spaceBetween={isMobile ? 40 : (isDesktop ? 20 : 30)} 
        slidesPerView={isMobile ? 1 : (isDesktop ? 4 : 2)}
        pagination={{ clickable: true }}
        loop={isMobile} 
      >
        {code.map((coding) => (
          <SwiperSlide className="code" key={coding.id}>
            <div className="code__img-name">
              <div className="code__img">
                <img src={coding.img} alt={coding.platform} />
              </div>
              <h5 className="code__name">{coding.platform}</h5>
            </div>
            
            <h4 className="code_name">
              {coding.id === 1 ? `Stars: ${coding.star}` : `Contest Rating: ${coding.rating}`}
            </h4>
            <h4 className="code_name">Problems Solved: {coding.problemssolved}</h4>
            <a href={coding.link} target="_blank" className="btn" rel="noreferrer">
              Visit
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Code;
