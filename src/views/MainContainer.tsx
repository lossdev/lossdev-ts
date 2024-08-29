import React from 'react';

export const MainContainer = ({children}: React.PropsWithChildren<{}>) => {
    return (
    <React.Fragment>
        <div className="flex flex-col w-full">
            {children}
        </div>
    </React.Fragment>
    );
};