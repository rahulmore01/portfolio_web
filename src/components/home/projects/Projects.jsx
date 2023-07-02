import React from "react";
import "./Projects.scss";
import blog from "../../../assets/blog.png";
import { BsFillArrowUpRightCircleFill, BsGithub } from "react-icons/bs";

const Projects = () => {
  return (
    <>
      <div className="projects_main">
        <p className="projects_title monu_ex_reg">Best projects</p>

        {/* all the project cards */}
        <div className="projects_cards_wrapper">
          <ProjectsCard
            title="Trainity"
            subtitle="Learn from top 1%"
            para1="Revamping the track page to elevate its aesthetics and convey the
        right message."
            para2="Revamping the track page to elevate its aesthetics and convey the
        right message."
            projectImg={blog}
          />
          <ProjectsCard
            title="Trainity"
            subtitle="Learn from top 1%"
            para1="Revamping the track page to elevate its aesthetics and convey the
        right message."
            para2="Revamping the track page to elevate its aesthetics and convey the
        right message."
            projectImg={blog}
          />
          <ProjectsCard
            title="Trainity"
            subtitle="Learn from top 1%"
            para1="Revamping the track page to elevate its aesthetics and convey the
        right message."
            para2="Revamping the track page to elevate its aesthetics and convey the
        right message."
            projectImg={blog}
          />
        </div>
        <button className="project_cards_view_btn  monu_ex_reg">
          View all
        </button>
      </div>
    </>
  );
};

const ProjectsCard = ({ title, subtitle, para1, para2, projectImg }) => {
  return (
    <>
      <div className="projects_card">
        <div>
          <div className="projects_card_text">
            <h1 className="projects_card_title  monu_ex_reg">{title}</h1>
            <h3 className="projects_card_subtitle  monu_ex_reg">{subtitle}</h3>
            <p className="projects_card_para space_grotesk ">{para1}</p>
            <p className="projects_card_para space_grotesk ">{para2}</p>
            <div className="btn_wrapper">
              <a href="a_tag">
                <BsGithub className="projects_card_btn" />
              </a>
              <a href="a_tag">
                <BsFillArrowUpRightCircleFill className="projects_card_btn" />
              </a>
            </div>
          </div>
        </div>
        <img className="projects_card_img" src={projectImg} alt="" />
      </div>
    </>
  );
};

export { Projects, ProjectsCard };
