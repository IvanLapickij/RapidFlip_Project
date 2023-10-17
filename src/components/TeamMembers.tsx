import React from "react";

const teamMembersData = [
  {
    name: "Ken Yuzhou Shao",
    position: "Co Founder",
    description:
      "TUS & Trinity College Dublin, Ex-Microsoft Ex-Ericsson, A Youtuber with 1.98 million views.",
    imageUrl: "src/Media/Images/user.png",
  },
  {
    name: "Member 1",
    position: "",
    description:
      "Master at TU Hamburg 2 years of business & IT experience at Start-ups. Game enthusiast",
    imageUrl: "src/Media/Images/user.png",
  },
  {
    name: "Member 2",
    position: "",
    description:
      "UT Austin & Mary Immaculate College PhD Student in Linguistics for Pedagogy, Game enthusiast",
    imageUrl: "src/Media/Images/user.png",
  },
  {
    name: "Member 3",
    position: "",
    description:
      "Cambridge University and Kryvyi Rih state Pedagogical Institute 7 years of experience in Pedagogy and Psychology 1 year of entrepreneur experience for running a start-up",
    imageUrl: "src/Media/Images/user.png",
  },
];

const TeamMembers: React.FC = () => {
  return (
    <div className="team-members">
      <h1>Team</h1>
      <div className="row">
        {teamMembersData.map((member, index) => (
          <div key={index} className="col-md-3 mb-4">
            <div className="card">
              <img
                className="card-img-top"
                src={member.imageUrl}
                alt={member.name}
              />
              <div className="card-body">
                <h5 className="card-title">{member.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {member.position}
                </h6>
                <p className="card-text">{member.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
