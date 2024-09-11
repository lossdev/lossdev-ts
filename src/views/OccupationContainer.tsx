import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faLocationDot } from "@fortawesome/free-solid-svg-icons";

export const OccupationContainer = ({children}: React.PropsWithChildren<{}>) => {
    return (
    <React.Fragment>
        <div className="flex flex-col w-full">
            <ul className="ml-5 md:ml-40 my-14 md:my-20 flex flex-col gap-y-3 list-outside text-2xl md:text-3xl">
                <li className="font-jbmono-light text-slate-50">
                    <FontAwesomeIcon icon={faCode} className="mr-4 w-12" />Software Engineer
                </li>
                <li className="font-jbmono-light text-slate-50">
                    <FontAwesomeIcon icon={faLocationDot} className="mr-4 w-12" />
                    <a href="https://www.linkedin.com/company/indica-labs/" 
                        target="_blank" rel="noreferrer" className="hover:text-slate-400">@IndicaLabs</a>
                </li>
            </ul>
        </div>
    </React.Fragment>
    );
};