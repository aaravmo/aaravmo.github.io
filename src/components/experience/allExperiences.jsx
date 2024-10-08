import React from "react";

import INFO from "../../data/user";


import Experience from "./experience";

import "./styles/allExperiences.css";

const AllExperiences = () => {
	return (
		<div className="all-experiences-container">
			{INFO.experiences.map((exp, index) => (
				<div className="all-experiences-experience" key={index}>
                    <div className="experience-super">
                        <Experience
                            logo={exp.logo}
                            company = {exp.company}
                            title={exp.title}
                            description={exp.description}
                            tools={exp.tools}
                        />
                    </div>
                    {index < 3? <span class="dot"></span> : <span></span>}
                    {index < 3? <div className="vertical-line"></div> : <div></div>}
                    {index < 3? <span class="dot"></span> : <span></span>}
                    
                    
				</div>
                
			))}
		</div>
	);
};

export default AllExperiences;