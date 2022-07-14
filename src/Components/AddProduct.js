import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, getImage, uploadImage } from "../JS/actions/upload";
import "./AddProduct.css";
const AddProduct = () => {
    const newImage = useSelector((state) => state.uploadReducer.image);

    const [product, setProduct] = useState({
        title: "",
        description: "",
        imageURL: "",
    });

    const [fileInputState, setFileInputState] = useState("");
    const [previewSource, setPreviewSource] = useState("");
    const [selectedFile, setSelectedFile] = useState();

    const [image, setImage] = useState("");
    const dispatch = useDispatch();
    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        previewFile(file);
        setSelectedFile(file);
        setFileInputState(e.target.value);
    };
    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        };
    };

    const handleSubmitFile = (e) => {
        e.preventDefault();
        if (!selectedFile) return;
        const reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = () => {
            const data = JSON.stringify({ data: reader.result });
            dispatch(uploadImage(data));
            dispatch(getImage());
            setImage(newImage.toString());
            console.log("reader.result", reader.result);
        };
        reader.onerror = () => {};
    };

    const handleSave = (e) => {
        e.preventDefault();
        dispatch(addProduct(product));
        setProduct({
            title: "",
            description: "",
            imageURL: "",
        });
    };
    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value,
            imageURL: newImage,
        });
    };

    //Get product
    return (
        <div className="addProduct">
            <form>
                <h2
                    class="about-heading"
                    style={{ marginLeft: 53, marginTop: 50, fontSize: 30 }}
                >
                    Add Product
                </h2>
                <div className="form-group3">
                    <label>Title</label>
                    <input
                        type="text"
                        placeholder="..."
                        required
                        onChange={handleChange}
                        name="title"
                        className="form-control"
                    />
                </div>

                <div className="form-group3">
                    <label>Description</label>
                    <input
                        placeholder="..."
                        type="text"
                        required
                        onChange={handleChange}
                        name="description"
                        className="form-control"
                    />
                </div>
                <div className="form-group3">
                    <div>
                        <label>Image</label>
                        <input
                            name="image"
                            type="file"
                            value={image}
                            onChange={handleFileInputChange}
                            className="form-control"
                        />
                    </div>
                    <br />

                    <button
                        className="HeroButton"
                        style={{ margin: 5 }}
                        onClick={handleSubmitFile}
                    >
                        Submit
                    </button>

                    <button
                        className="HeroButton"
                        style={{ margin: 5 }}
                        onClick={handleSave}
                    >
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    );
};
export default AddProduct;
