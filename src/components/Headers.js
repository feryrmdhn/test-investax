import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { Button, Modal, Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { addPhotos } from "../store/action/upload";

import "../assets/style/header.scss";

const Header = () => {
    const dispatch = useDispatch()
    const [show, setShow] = useState(false)
    const [uploadImage, setUploadImage] = useState([])


    const openModal = () => setShow(true)
    const closeModal = () => setShow(false)

    const menuAlbum = (
        <Menu>
            <Menu.Item key="1">
                Travel
            </Menu.Item>
            <Menu.Item key="2">
                Personal
            </Menu.Item>
            <Menu.Item key="3">
                Food
            </Menu.Item>
            <Menu.Item key="4">
                Nature
            </Menu.Item>
            <Menu.Item key="5">
                Other
            </Menu.Item>
        </Menu>
    )

    const onChangeImage = e => {
        setUploadImage(
            e.target.files
        )
    }

    const sendUpload = () => {
        let data = new FormData()
        data.append("album", "Personal")
        console.log(uploadImage)
        Object.values(uploadImage).map(image =>
            data.append("documents", image)
        )
        dispatch(addPhotos(data))
    }

    return (
        <div>
            <Modal className="modal-upload"
                title="Upload photos"
                visible={show}
                onCancel={closeModal}
                footer={[
                    <Button key="submit" className="upload" onClick={sendUpload}>Upload</Button>
                ]}
            >

                <input type="file" className="input_image"
                    onChange={onChangeImage} name="image" id="image" multiple />
                <label for="image"  >
                    <div
                        listType="picture-card"
                    >
                    </div>
                </label>
                <Dropdown overlay={menuAlbum}>
                    <Button>
                        Select Album <DownOutlined />
                    </Button>
                </Dropdown>

            </Modal>

            <div className="header">
                <h2>Photos</h2>
                <Button onClick={openModal}>Upload</Button>
            </div>
        </div>
    )
}

export default Header;