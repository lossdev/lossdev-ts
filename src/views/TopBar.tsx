import React from 'react';

export const TopBar = ({children}: React.PropsWithChildren<{}>) => {
    return (
    <React.Fragment>
        <div className="flex justify-start flex-row w-full h-24">
            <div className="flex h-full w-3/5 content-center items-center">
                <h1 className="font-jbmono-bold tracking-tight text-slate-50 text-4xl ml-5">lossdev.com</h1>
            </div>
            <div className="flex flex-row-reverse h-full w-2/5 content-center"></div>
        </div>
    </React.Fragment>
    );
};