import React from "react";
import { StyledEducationCard, ImgStyled } from "./styles";

function EducationCard({ image }) {
  return (
    <StyledEducationCard>
      <ImgStyled
        src={image}
        className="education-card__image"
        width={290}
        height={174}
        alt="Сертификат курсов HTML Academy"
      />
    </StyledEducationCard>
  );
}

export default EducationCard;
