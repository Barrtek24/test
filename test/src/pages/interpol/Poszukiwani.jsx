import React, { useState } from "react";
import { db, storage } from "../../config/firebase";
import { child, ref as ref_db, set, get } from "firebase/database";
import {
    ref as ref_storage,
} from "firebase/storage";
export default function Poszukiwani() {
    const storageRef = ref_storage(storage, "images/");
    console.log(storageRef);

    const [data, setData] = useState(null);

    


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
            <br />
            <button onClick={readFromDB}> o nie2</button>
            
        </div>
    );
}
