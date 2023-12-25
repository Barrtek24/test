import React, { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { child, ref as ref_db, get, set } from "firebase/database";
export default function Poszukiwani() {
    const [data, setData] = useState({});
    useEffect(() => {
        const connection = ref_db(db);
        get(child(connection, "users/")).then((child) => {
            child.forEach((element) => {
                setData((prev) => {
                    return { ...prev, [element.key]: element.val() };
                });
            });
        });
    }, []);
    const WantedList = ({ data }) => {
        return (
            <div className="w-2/3 md:w-3/4">
                <h1 className="text-4xl mb-8 text-center">
                    MOST WANTED BY INTERPOL<span className="text-2xl">sl</span>
                </h1>
                <div className="mt-6 grid grid-cols-1 gap-x-20 gap-y-20 md:grid-cols-2">
                    {Object.keys(data).map((key) => {
                        const person = data[key];
                        return (
                            <div className="flex flex-col" key={key}>
                                <div className="w-full flex flex-col md:flex-row">
                                    <div className="w-full md:w-1/3  md:max-h-56 md:order-2 ">
                                        <img
                                            className="max-h-56 m-auto md:m-0 md:float-right"
                                            src={person.image}
                                            alt={`Wanted: ${person.name}`}
                                        />
                                    </div>
                                    <div className="w-full md:w-2/3">
                                        <h1>Imię: {person.name}</h1>
                                        <p>Wiek: {person.age}</p>
                                        <p>Płeć: {person.sex}</p>
                                        <p>Pseudonim: {person.nickname}</p>
                                        {person.groups && person.groups.length > 0 && (
                                            <div className="mt-6">
                                                <h3>Członek nielegalnych organizacji:</h3>
                                                    <ul>
                                                        {person.groups.map(
                                                            (group,index) => (
                                                                <li key={index}>{ group.name}</li>
                                                            )
                                                        )}
                                                    </ul>
                                            </div>
                                        )}
                                                
                                    </div>
                                    
                                </div>
                                <div className="w-full bg-slate-600">
                                    <h3>Wanted For:</h3>
                                    <ul className="list-disc">
                                        {person.wantedFor.map(
                                            (crime, index) => (
                                                <li key={index} className="ml-6">{crime}</li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>                
            </div>
        );
    };

    return (
        <div className="flex justify-center">
            <WantedList data={data} />
        </div>
    );
}
