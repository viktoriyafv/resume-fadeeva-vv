import React from "react";
import { StyledWorkCard, JobDate, JobValue, JobInfo } from "./styles";
import Title, { TitleSize, TitleLevel } from "/src/components/ui/title/title";

function JobCard({ date, job, value, info }) {
  return (
    <StyledWorkCard>
      <JobDate>{date}</JobDate>
      <Title size={TitleSize.VALUE} title={TitleLevel.h3}>
        {job}
      </Title>
      <JobValue>{value}</JobValue>
      <JobInfo>{info}</JobInfo>
    </StyledWorkCard>
  );
}

export default JobCard;
