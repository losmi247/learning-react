import React from 'react';

import { NavigationBar} from "../components/NavigationBar";

import { Outlet } from 'react-router-dom';

export const HomePage = () => {
    return (
        <>
            <NavigationBar />
            <Outlet/>
        </>
    );
}