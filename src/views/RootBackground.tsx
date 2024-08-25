import React from 'react';

export const RootBackground = ({children}: React.PropsWithChildren<{}>) => {
    return (
    <React.Fragment>
        <div className="flex min-h-screen min-w-full bg-[#262c33]">
            {children}
        </div>
    </React.Fragment>
    );
};