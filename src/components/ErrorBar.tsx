import React from 'react';

import Alert from "react-bootstrap/Alert";

interface ErrorBarProps {
    error: Error;
}

export const ErrorBar = ({error}: ErrorBarProps) => {
    return (<div className="text-center"><Alert variant="danger"> {error.message} </Alert></div>);
}