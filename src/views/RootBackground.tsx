import React from 'react';

export const RootBackground = ({children}: React.PropsWithChildren<{}>) => {
    return (
    <React.Fragment>
        <div className="flex flex-col min-h-screen min-w-full h-dvh mix-blend-multiply bg-dark-grayblue">
            {children}
        </div>
    </React.Fragment>
    );
};