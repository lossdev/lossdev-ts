import React from 'react';

export const MainContainer = ({children}: React.PropsWithChildren<{}>) => {
    return (
    <React.Fragment>
        <div className="flex flex-col w-full h-85pct">
            {children}
        </div>
    </React.Fragment>
    );
};