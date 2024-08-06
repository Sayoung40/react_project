import React from 'react';
import './Main.css';
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Main = () => {
  return (
    <div className="main">
      <div className="title">
        <h2>개별 구매</h2>
        <div className="line2"></div>
      </div>
      <div className="section-category">
        <ul>
          <li>
            <button>추천</button>
          </li>
          <li>
            <button>숏드라마</button>
          </li>
          <li>
            <button>#왓챠의 발견</button>
          </li>
          <li>
            <button>#5.1채널 고음질</button>
          </li>
          <li>
            <button>#액션</button>
          </li>
          <li>
            <button>#키즈</button>
          </li>
          <li>
            <button>#한국</button>
          </li>
          <li>
            <button>#애니메이션</button>
          </li>
          <li>
            <button>#성인+</button>
          </li>
        </ul>
      </div>
      <div className="section-hero">
        <Swiper
          slidesPerView={3}
          spaceBetween={5}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="poster-wrapper"
        >
          <SwiperSlide className="poster">
            <img
              src="https://an2-img.amz.wtchn.net/image/v2/R6Bw8n-uwoCNJrZrK2G6Qw.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk1UUTBNSGc0TVRCeE1UQXdJbDBzSW5BaU9pSXZkakl2YzNSdmNtVXZhVzFoWjJVdk1UQXpPRFEyT0RBMk9ETTJNRFE0TVNKOS5VV3JTRHBDUGRqYmlTM3JxRHFnT0JtYURXVk5FdHpyMG1PbXE5MVdfTXRJ"
              className="hero-poster-img"
            />
            <div className="logo-detail">
              <img
                src="https://an2-img.amz.wtchn.net/image/v2/-DSuiCd0YkBjr2JiwhHV7A.png?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKb0lqb3lOakFzSW5BaU9pSXZkakl2YzNSdmNtVXZhVzFoWjJVdk9ESXpPRGM1T1RZMU56RXpPQ0o5LmxFVmlGSG1LWWs5LVJXTHBjbFJ6Unl0eDJiOEdfOUxBZ0ZQQzhDdEhjb1U"
                alt=""
                className="hero-poster-logo"
              />
              <div className="detail-text">
                <p className="detail">
                  차서원 X 공찬 X 원태민 X 도우 <br /> 코사무이로 떠난 네 청춘의 힐링 여행기!
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="poster">
            <img
              src="https://an2-img.amz.wtchn.net/image/v2/vLYQCi9EzCIRpZ028ZU_GQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk1UUTBNSGc0TVRCeE1UQXdJbDBzSW5BaU9pSXZkakl2YzNSdmNtVXZhVzFoWjJVdk1UY3pNell6TVRJNE5ETXpORGd6T1NKOS5mYjJ5TzBoZFRiSXl4RVFzLWtJeEdqWGdOdzg1akRHeE1iSDVMRU80Z0FZ"
              className="hero-poster-img"
            />
            <div className="logo-detail">
              <img
                src="https://an2-img.amz.wtchn.net/image/v2/FnrX8weur1akSCF9PT3SBg.png?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKb0lqb3lOakFzSW5BaU9pSXZkakl2YzNSdmNtVXZhVzFoWjJVdk9EZ3hOak0wTURJd05UVTVOalUzTWlKOS4xd3N4M1YwVFVLbnhYRkdqRUVkYUx1NXl1cVFwNWctMU14YWdndVljNXQ4"
                alt=""
                className="hero-poster-logo"
              />
              <div className="detail-text">
                <p className="detail">매월 1일, 백 원으로 누리는 최고의 가치!</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="poster">
            <img
              src="https://an2-img.amz.wtchn.net/image/v2/h6WjHo6HpMCX2NNQ83DG3Q.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk1UUTBNSGc0TVRCeE1UQXdJbDBzSW5BaU9pSXZkakl2YzNSdmNtVXZhVzFoWjJVdk5UazBOREUyTVRVMk1UVTNORFkySW4wLi0zRzZVTEgwNXBTTjVRYU1kd3l3NGpDSWpOdkR6eGhlekdqS3RFU0pIVmM"
              className="hero-poster-img"
            />
            <div className="logo-detail">
              <img
                src="https://an2-img.amz.wtchn.net/image/v2/3PDsa-vH5lQAex9QIsmc4w.png?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKb0lqb3lOakFzSW5BaU9pSXZkakl2YzNSdmNtVXZhVzFoWjJVdk1UWTFPVFEyT0RBek1USTFOVFEwSW4wLmpfaFYxX2Jqd3lQX1lQbXJsS3pidndIMW8zMzBfZXA3ZzZRN0haYk1oRms"
                alt=""
                className="hero-poster-logo"
              />
              <div className="detail-text">
                <p className="detail">
                  슈퍼배드, 미니언즈, 쿵푸팬더 등 <br />
                  20% 할인가에 패키지로 소장하세요!
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="poster">
            <img
              src="https://an2-img.amz.wtchn.net/image/v2/LfulHKe9x3EFzgYewEVodg.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk1UUTBNSGc0TVRCeE1UQXdJbDBzSW5BaU9pSXZkakl2YzNSdmNtVXZhVzFoWjJVdk5UZzNOak16T0RVeE1UTXdNalUySW4wLmFCcDdNNWliMnNiellZS2huVmVFYlNtc0FHRVNzRnQ0S1pyUWFkZVFaNmc"
              className="hero-poster-img"
            />
            <div className="logo-detail">
              <img
                src="https://an2-img.amz.wtchn.net/image/v2/lOeKEGskYRQnDVPqNBpUTw.png?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKb0lqb3lOakFzSW5BaU9pSXZkakl2YzNSdmNtVXZhVzFoWjJVdk5UZzJOakU1TkRJNU9UTTFNREkzSW4wLlJHZUF4aE9DQkdkUkFUa0h2TGRCLThoTXpFbENSaU1hUnEzN2liUUlfTDA"
                alt=""
                className="hero-poster-logo"
              />
              <div className="detail-text">
                <p className="detail">
                  "우리 비행기는 잠시 후 휴전선을 넘습니다"
                  <br />
                  여진구 X 하정우 주연, 항공기 납치 실화 스릴러
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="poster">
            <img
              src="https://an2-img.amz.wtchn.net/image/v2/uIEvXPYe5GNYp-G1fc5QYw.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk1UUTBNSGc0TVRCeE1UQXdJbDBzSW5BaU9pSXZkakl2YzNSdmNtVXZhVzFoWjJVdk1qUTBORE0yTkRJeE1qa3pOeUo5LnBEa2U5WElIOElvNGtWMDNobEdTQjRxQjdoNnY4ZlZZWjBKRGdJWVhXSHM"
              className="hero-poster-img"
            />
            <div className="logo-detail">
              <img
                src="https://an2-img.amz.wtchn.net/image/v2/rNJeCK_mmdz6UpiB_uYpsQ.png?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKb0lqb3lOakFzSW5BaU9pSXZkakl2YzNSdmNtVXZhVzFoWjJVdk16TXdOVFV3TVRBME5EQTJOekUySW4wLjFwSWQxM0FhT1kwNkdNRXZJYUFnNXFCUmhwWS1qbFNsS3lTdWplZFRYWXc"
                alt=""
                className="hero-poster-logo"
              />
              <div className="detail-text">
                <p className="detail">
                  더 커진 스케일, 변하지 않은 케미! <br />
                  최고의 코믹 액션 버디물이 돌아왔다
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="section-banner">
        <ul>
          <li>
            <a href="">
              <div class="banner">
                <div class="banner-img">
                  <img
                    src="https://an2-img.amz.wtchn.net/image/v2/0P8zSR8BtrkT4fqJba36XQ.png?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKd0lqb2lMM1l5TDNOMGIzSmxMM0J5YjIxdmRHbHZiaTgzTnpreE56QTJOemd6TkRneE5UY2lmUS5Ca1M4ckhLQjI4QWNHSlJfNUV2N3d3NFQ3THF0R0YwdGRNY2x1V2FqUUpr"
                    alt=""
                    class="event-banner"
                  />
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Main;
