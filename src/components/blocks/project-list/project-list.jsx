import React from "react";
import Title, { TitleSize, TitleLevel } from "/src/components/ui/title/title";
import ProjectCard from "/src/components/ui/project-card/project-card";
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

export default ({ projects }) => {
  const swiper = useSwiper();
  return (
    <StyledSection>
      <TitleWrapper>
        <Title size={TitleSize.SMALL} title={TitleLevel.h2}>
          Проекты:
        </Title>
        <ButtonWrapper>
          <StyledButtonSwiper
            className="projects__button-swiper-prev"
            type="button"
          >
            <span className="visually-hidden">Slide to the prev slide</span>
            <ArrowImage src={arrowLeft} alt="стрелка назад" />
          </StyledButtonSwiper>
          <StyledButtonSwiper
            className="projects__button-swiper-next"
            type="button"
          >
            <span className="visually-hidden">Slide to the Next slide</span>
            <ArrowImage src={arrowRight} alt="стрелка назад" />
          </StyledButtonSwiper>
        </ButtonWrapper>
      </TitleWrapper>
      <Swiper
        className="projects__swiper"
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
          nextEl: ".projects__button-swiper-next",
          prevEl: ".projects__button-swiper-prev",
          clickable: true,
        }}
      >
        {projects?.length ? (
          <>
            <div className="projects__list swiper-wrapper">
              {projects.map((project) => (
                <SwiperSlide
                  className="projects__item swiper-slide"
                  key={project.id}
                >
                  <ProjectCard {...project} />
                </SwiperSlide>
              ))}
            </div>
          </>
        ) : null}
      </Swiper>
    </StyledSection>
  );
};
