import React from 'react';

export const TopBar = ({children}: React.PropsWithChildren<{}>) => {
    return (
    <React.Fragment>
        <div className="flex justify-start flex-row w-full h-15pct md:h-1/6">
            <div className="flex h-full content-center items-center">
                <h1 className="font-jbmono-bold tracking-tight text-slate-50 text-4xl md:text-5xl ml-5 md:ml-32">lossdev.com</h1>
            </div>
            <div className="flex flex-row-reverse h-full w-2/5 content-center"></div>
        </div>
    </React.Fragment>
    );
};