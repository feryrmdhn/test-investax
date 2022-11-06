import {
    UPLOADED,
    FAILED_UPLOAD,
    GET_PHOTOS,
    FAILED_PHOTOS
} from './types';


import axios from 'axios';

const baseUrl = "http://localhost:8888/photos"


export const addPhotos = body => async dispatch => {
    try {
        const res = await axios.put(`${baseUrl}`, body, {

        })
        dispatch({
            type: UPLOADED,
            payload: res.data.data
        })
    }
    catch (error) {
        dispatch({
            type: FAILED_UPLOAD,
            payload: error
        })
    }
}

export const get = (i) => async dispatch => {
    try {
        const res = await axios.post(`${baseUrl}/list`, {
            "skip": i,
            "limit": 5
        })
        dispatch({
            type: GET_PHOTOS,
            payload: res.data.documents
        })
    }
    catch (error) {
        dispatch({
            type: FAILED_PHOTOS,
            payload: error
        })
    }
}

export const deletePhoto = (album, documents) => async  dispatch => {
    try {
        await axios.delete(`${baseUrl}`
        [
            {
                album,
                documents
            }
        ])
        dispatch({
            type: "Success",
            payload: album
        })
    } catch (error) {
        dispatch({
            type: "Failed",
            payload: error
        })
    }
}



