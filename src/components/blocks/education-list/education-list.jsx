import React from "react";
import Title, { TitleSize, TitleLevel } from "/src/components/ui/title/title";
import EducationCard from "/src/components/ui/education-card/education-card";
import arrowLeft from "/src/assets/arrowLeft.svg";
import arrowRight from "/src/assets/arrowRight.svg";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useSwiper } from "swiper/react";
import "./style.css";
import {
  StyledSection,
  TitleWrapper,
  ButtonWrapper,
  StyledButtonSwiper,
  ArrowImage,
} from "./styles";

export default ({ educations }) => {
  const swiper = useSwiper();
  return (
    <StyledSection>
      <TitleWrapper>
        <Title size={TitleSize.SMALL} title={TitleLevel.h2}>
          Профессиональные курсы HTML Academy:
        </Title>
        <ButtonWrapper>
          <StyledButtonSwiper
            className="educations__button-swiper-prev"
            type="button"
          >
            <span className="visually-hidden">Slide to the prev slide</span>
            <ArrowImage src={arrowLeft} alt="стрелка назад" />
          </StyledButtonSwiper>
          <StyledButtonSwiper
            className="educations__button-swiper-next"
            type="button"
          >
            <span className="visually-hidden">Slide to the Next slide</span>
            <ArrowImage src={arrowRight} alt="стрелка назад" />
          </StyledButtonSwiper>
        </ButtonWrapper>
      </TitleWrapper>
      <Swiper
        className="educations__swiper"
        // install Swiper modules
        breakpoints={{
          768: {
            spaceBetween: 50,
            slidesPerView: 2,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Navigation]}
        spaceBetween={15}
        slidesPerView={1}
        navigation={{
          nextEl: ".educations__button-swiper-next",
          prevEl: ".educations__button-swiper-prev",
          clickable: true,
        }}
      >
        {educations?.length ? (
          <>
            <div className="educations__list swiper-wrapper">
              {educations.map((education) => (
                <SwiperSlide
                  className="educations__item swiper-slide"
                  key={education.id}
                >
                  <EducationCard {...education} />
                </SwiperSlide>
              ))}
            </div>
          </>
        ) : null}
      </Swiper>
    </StyledSection>
  );
};
