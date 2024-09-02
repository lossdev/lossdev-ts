import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const SocialsContainer = ({children}: React.PropsWithChildren<{}>) => {
    return (
    <React.Fragment>
        <div className="flex flex-row grow items-end justify-center w-full gap-x-8 mb-16">
            <a href="https://github.com/lossdev" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} className="text-slate-50 text-3xl hover:text-slate-400" />
            </a>
            <a href="https://www.linkedin.com/in/brendan-wilson-41b761179/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="text-slate-50 text-3xl hover:text-slate-400" />
            </a>
            <a href="mailto:bmwilson.dev@gmail.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faEnvelope} className="text-slate-50 text-3xl hover:text-slate-400" /> 
            </a>
        </div>
    </React.Fragment>
    );
};