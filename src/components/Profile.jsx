import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refreshToken } from "../redux/actions/actions";

export default function Profile(props) {
    let state = useSelector(state => state.auth)
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(refreshToken())
        // eslint-disable-next-line
    }, [])
    console.log(state)
    return (
        <h1>{state.loading ? 'loading' : <p>Profile</p>}</h1>
    )
}