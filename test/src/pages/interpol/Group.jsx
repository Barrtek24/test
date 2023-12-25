import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../../config/firebase";
import { get, child, ref as ref_db } from "firebase/database";
import bcAr from "../../assets/ltArr.png";
export default function Group() {
    const { groupId } = useParams();
    document.title='GRUPY PRZESTĘPCZE'
    const [data, setData] = useState({});
    console.log(groupId);
    useEffect(() => {
        const connection = ref_db(db);
        get(child(connection, `groups/${groupId}`)).then((child) => {
            child.forEach((element) => {
                setData((prev) => {
                    return { ...prev, [element.key]: element.val() };
                });
            });
        });
    }, []);
    console.log("data.codename", data.image);
    return (
        <div className="flex justify-center">
            <div className="w-2/3 ">
                <h1 className="text-4xl mb-8 text-center">
                    MOST WANTED BY INTERPOL<span className="text-2xl">sl</span>
                </h1>
                <button className="p-2 border-2 border-solid border-black w-auto mb-10">
                    <Link to="/interpol" className="flex justify-between">
                        <img src={bcAr} className="inline-block" /> 
                        <p className="inline-block text-sm">Powrót do głównej strony</p>
                        
                    </Link>
                </button>
                <div className="flex flex-col md:flex-row shadow-md md:justify-between">
                    <div className=" flex justify-center md:block md:w-1/4">
                        <img
                            src={data.image}
                            alt={data.codename}
                            className="max-h-80 md:max-h-none"
                        />
                    </div>
                    <div className="md:w-3/4 md:ml-10">
                        <h1 className="text-xl mb-4">
                            <b>Misja:</b>{" "}
                            <span className="md:hidden">
                                <br />
                            </span>
                            {data.name}
                        </h1>
                        <p className="mb-4">
                            <b>Kryptonim: </b>
                            {data.codename}
                        </p>
                        <p className="mb-4">
                            <b>Opis: </b> {data.description}
                        </p>
                        <p>
                            <b>Kara: </b>
                            {data.penalty}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
