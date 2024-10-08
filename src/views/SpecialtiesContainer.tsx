import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMicrochip } from "@fortawesome/free-solid-svg-icons";

export const SpecialtiesContainer = ({children}: React.PropsWithChildren<{}>) => {
    return (
    <React.Fragment>
        <div className="flex flex-col w-full">
            <ul className="ml-5 md:ml-40 flex flex-col gap-y-2 list-outside text-md md:text-lg">
                <li className="font-jbmono-light text-slate-50">
                    <FontAwesomeIcon icon={faUser} className="mr-4 w-12" />Web & Backend Programming
                </li>
                <li className="font-jbmono-light text-slate-50">
                    <FontAwesomeIcon icon={faUser} className="mr-4 w-12 opacity-0 select-none" />Cybersecurity
                </li>
                <li className="font-jbmono-light text-slate-50">
                    <FontAwesomeIcon icon={faUser} className="mr-4 w-12 opacity-0 select-none" />DevOps
                </li>
                <li className="font-jbmono-light text-slate-50 mt-4">
                    <FontAwesomeIcon icon={faMicrochip} className="mr-4 w-12" />Golang, TypeScript, C#/.NET,
                </li>
                <li className="font-jbmono-light text-slate-50">
                    <FontAwesomeIcon icon={faMicrochip} className="mr-4 w-12 opacity-0 select-none" />Docker, Kubernetes, SQL
                </li>
            </ul>
        </div>
    </React.Fragment>
    );
};