import React from 'react';
import somethingWentWrong from '../../images/somethingWentWrong.png';

export const ErrorBoundary = (props) => {
    const SomethingWentWrong = () => { 
        return (
            <h2 className="">
                Something went wrong...

                <img src={somethingWentWrong} alt="Something went wrong"/>
            </h2>
        )
    }

    let isEverythingOk = true;

    return <>{ isEverythingOk ? props.children : <SomethingWentWrong /> }</>
}