import { useLocation } from 'react-router-dom'
import React from "react";
// import { useDispatch } from "react-redux";
// import { setCode } from '../redux/actions/actions';

export default function Callback(props) {
    const search = useLocation().search;
    const code = new URLSearchParams(search).get('code');
    const state = new URLSearchParams(search).get('state')
    // const dispatch = useDispatch()
    console.log('code', code, 'state', state)
    // dispatch(setCode(code, state));


    return (
        <h1>You are logged in </h1>
    )
}
