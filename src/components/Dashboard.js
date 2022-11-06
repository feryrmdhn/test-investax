import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from 'react-redux';
import { get, deletePhoto } from '../store/action/upload';

import '../assets/style/dashboard.scss';

const Dashboard = () => {
    const dispatch = useDispatch()
    const allPhotos = useSelector(state => state.upload.allphotos)
    const [skip, setSkip] = useState(20)


    useEffect(() => {
        for (let i = 0; i <= 20; i = i + 5) {
            dispatch(get(i))
        }
    }, [dispatch])

    const loadMore = () => {
        let num = skip + 5
        setSkip(
            skip + 5,
            dispatch(get(num))
        )
    }


    return (
        <div>
            <div className="images">
                <ul>
                    {allPhotos.map(item =>
                        <li key={item.id}>
                            <img src={item.raw} alt="" />
                            <p>{item.name}</p>
                            <h5>{item.album}</h5>
                            <button className="deleted" onClick={() => dispatch(deletePhoto(item.album, item.name))}>Delete</button>
                        </li>
                    )}
                </ul>
            </div>
            <button className="load" onClick={loadMore}>Load More</button>
        </div>
    )
}
export default Dashboard;