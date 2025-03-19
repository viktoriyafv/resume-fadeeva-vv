import React from "react";
import JobCard from "/src/components/ui/job-card/job-card";
import { InfoList, InfoItem } from "./styles";

export default ({ works }) => {
  return (
    <div>
      {works?.length ? (
        <>
          <InfoList>
            {works.map((job) => (
              <InfoItem key={job.id}>
                <JobCard {...job} />
              </InfoItem>
            ))}
          </InfoList>
        </>
      ) : null}
    </div>
  );
};
