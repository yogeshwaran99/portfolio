import './about.css';
import React, { useEffect, useState } from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Leetcode from '../../assets/leetcode.png';
import Codeforces from '../../assets/codeforces.png';
import { useMediaQuery } from 'react-responsive';
import './about.css';
import 'swiper/css';
import 'swiper/css/pagination';

const About = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

  const [codeforcesData, setCodeforcesData] = useState({
    rating: '...',
    rank: '...',
    problemssolved: '...',
  });

  const [leetcodeData, setLeetcodeData] = useState({
    rating: '...',
    problemssolved: '...',
  });

  useEffect(() => {

    const fetchCodeforcesData = async () => {
      try {
        const userInfoResponse = await fetch(
          'https://codeforces.com/api/user.info?handles=yogeshwaran99'
        );
        const userInfoData = await userInfoResponse.json();

        let rating = 'N/A';
        let rank = 'N/A';
        if (userInfoData.status === 'OK') {
          const userInfo = userInfoData.result[0];
          rating = userInfo.rating || 'N/A';
          rank = userInfo.rank || 'N/A';
        }

        const submissionsResponse = await fetch(
          'https://codeforces.com/api/user.status?handle=yogeshwaran99'
        );
        const submissionsData = await submissionsResponse.json();

        let problemsSolvedCount = 'N/A';
        if (submissionsData.status === 'OK') {
          const solvedProblems = new Set();
          submissionsData.result.forEach((submission) => {
            if (submission.verdict === 'OK') {
              const problemId = `${submission.problem.contestId}-${submission.problem.index}`;
              solvedProblems.add(problemId);
            }
          });
          problemsSolvedCount = solvedProblems.size;
        }

        setCodeforcesData({
          rating,
          rank,
          problemssolved: problemsSolvedCount,
        });
      } catch (error) {
        console.error('Error fetching Codeforces data:', error);
      }
    };

    const fetchLeetcodeData = async () => {
  try {
    const contestResponse = await fetch(
      'https://alfa-leetcode-api.onrender.com/yogeshwaran99/contest'
    );
    const contestData = await contestResponse.json();

    const solvedResponse = await fetch(
      'https://alfa-leetcode-api.onrender.com/yogeshwaran99/solved'
    );
    const solvedData = await solvedResponse.json();

    const rating = contestData.contestRating ? Math.round(contestData.contestRating) : 'N/A';
      
    const problemsSolved = solvedData.solvedProblem || 'N/A';

    setLeetcodeData({
      rating,
      problemssolved: problemsSolved,
    });
  } catch (error) {
    console.error('Error fetching LeetCode data:', error);
  }
};

    fetchCodeforcesData();
    fetchLeetcodeData();
  }, []);

  const code = [
    {
      id: 1,
      img: Leetcode,
      platform: 'LeetCode',
      rating: leetcodeData.rating,
      problemssolved: leetcodeData.problemssolved,
      link: 'https://leetcode.com/u/yogeshwaran99/',
    },
    {
      id: 2,
      img: Codeforces,
      platform: 'Codeforces',
      rating: codeforcesData.rating,
      rank: codeforcesData.rank,
      problemssolved: codeforcesData.problemssolved,
      link: 'https://codeforces.com/profile/yogeshwaran99',
    },
  ];

  return (
    <section id="about">      
      <h5>Get to know more</h5>
      <h2>About Me</h2>
      <div className="container about__container">        
        <div className="about__content">
        <p>Aspiring Software Developer with a<span className="highlight"> Bachelor of Engineering</span> degree in Electronics and Communication Engineering. Driven by a passion for technology and innovation, particularly in <span className="highlight">Java</span>, I stay updated with the latest trends. My strength lies in problem-solving and creativity, and I am eager to work with teams to craft solutions.</p>
        </div>      
        <h3>Coding Profile</h3>
      </div>  
      <Swiper
        className="container code__container"
        modules={[Pagination]}
        spaceBetween={isMobile ? 40 : isDesktop ? 25 : 30}
        slidesPerView={isMobile ? 1 : isDesktop ? 4 : 2}
        pagination={{ clickable: true }}
        loop={isMobile}
      >
        {code.map((coding) => (
          <SwiperSlide className="code" key={coding.id}>
            <div className="code__left">
              <div className="code__img">
                <img src={coding.img} alt={coding.platform} />
              </div>
              <h5 className="code__name">{coding.platform}</h5>
            </div>
            <div className="code__right">
              <h4 className="code_name">
                {`Contest Rating: ${coding.rating}`}
                {/*{coding.platform === 'Codeforces'
                  ? `Contest Rating: ${coding.rating} (${coding.rank})`
                  : `Contest Rating: ${coding.rating}`} */}
              </h4>
              <h4 className="code_name">Problems Solved: {coding.problemssolved}</h4>
            </div>
            <a href={coding.link} target="_blank" className="btn" rel="noreferrer">
              Visit
            </a>
          </SwiperSlide>
        ))}
      </Swiper>    
    </section>
  )
}

export default About