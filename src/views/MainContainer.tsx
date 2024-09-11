import React from 'react';

export const MainContainer = ({children}: React.PropsWithChildren<{}>) => {
    return (
    <React.Fragment>
        <div className="flex flex-col w-full h-85pct md:h-5/6">
            {children}
        </div>
    </React.Fragment>
    );
};