import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/experience.css";

const Experience = (props) => {
	const { logo, company, title, description, tools } = props;

	return (
		<React.Fragment>
			<div className="experience">
				
                <div className="experience-container">
                    <span className="experience-large-a">
                        <span className="experience-logo">
                            <img src={logo} alt="logo" />
                        </span>
                        <div className="experience-company">{company}</div>
                        <div className="experience-title">{title}</div>
                    </span>
                    <span className="experience-large-b">
                        <div className="experience-description"dangerouslySetInnerHTML={{__html: description}}></div>
                        <div className="experience-tools">
                            
                            {tools.map((tool, index) => (
                                <span className="experience-tool">{tool}</span>
                            ))}
                        </div>
                    </span>
                    
                </div>
                
			</div>
            
		</React.Fragment>
	);
};

export default Experience;
