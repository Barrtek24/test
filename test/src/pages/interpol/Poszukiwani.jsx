import React, { useState } from "react";
import { db, storage } from "../../config/firebase";
import { child, ref as ref_db, set, get } from "firebase/database";
import { getDownloadURL, listAll, ref as ref_storage, uploadBytes } from "firebase/storage";
export default function Poszukiwani() {
    const storageRef = ref_storage(storage, "images/");
    console.log(storageRef);

    const [data, setData] = useState(null);
    const [image, setImage] = useState(null);

    const saveToDB = () => {
        const userId = Date.now();
        const connection = ref_db(db, "users/" + userId);
        set(connection, {
            name: "Maja2",
            surname: "W",
            image: "ssssscccs",
            isPartOfGroup: false,
        });
    };

    const uploadToStorage = async () => {
        const imgRef = ref_storage(storage, `images/${Date.now()}`);
        await uploadBytes(imgRef, image);
    };

    const readFromStorage = async () => {
        await listAll(storageRef).then((res) => {
            res.items.forEach(it => {console.log(getDownloadURL(it));})
        });
    };

    const readFromDB = async () => {
        const connection = ref_db(db);
        await get(child(connection, "users/")).then((child) => {
            child.forEach((element) => {
                setData((prev) => {
                    return { ...prev, [element.key]: element.val() };
                });
            });
        });
    };
    console.log(data);

    return (
        <div className="w-full">
            <button onClick={saveToDB}> o nie</button>
            <br />
            <button onClick={readFromDB}> o nie2</button>
            <br />
            <button onClick={readFromStorage}> o nie3</button>
            <br />
            <input
                type="file"
                name="zdj"
                id="zdj"
                onChange={(e) => setImage(e.target.files[0])}
            />
            <button onClick={uploadToStorage}> Upload Image</button>
        </div>
    );
}
