import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faLocationDot } from "@fortawesome/free-solid-svg-icons";

export const OccupationContainer = ({children}: React.PropsWithChildren<{}>) => {
    return (
    <React.Fragment>
        <div className="flex flex-col w-full">
            <ul className="ml-5 my-14 flex flex-col gap-y-3 list-outside">
                <li className="font-jbmono-light text-slate-50 text-2xl">
                    <FontAwesomeIcon icon={faCode} className="mr-4 w-12" />Software Engineer
                </li>
                <li className="font-jbmono-light text-slate-50 text-2xl">
                    <FontAwesomeIcon icon={faLocationDot} className="mr-4 w-12" />
                    <a href="https://www.linkedin.com/company/indica-labs/" 
                        target="_blank" rel="noreferrer" className="hover:text-slate-400">@IndicaLabs</a>
                </li>
            </ul>
        </div>
    </React.Fragment>
    );
};