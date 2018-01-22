import React from 'react';

const JobDetails= (props) => {
  return (
    <section id="job-details">
      <h2>Job Details</h2>
      <h4>{props.listing.title}</h4>
      <p>{props.listing.description}</p>
    </section>
  );
}

export default JobDetails;
