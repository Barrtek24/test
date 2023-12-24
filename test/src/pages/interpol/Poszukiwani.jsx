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
    console.log(data);

    const WantedList = ({ data }) => {
        return (
            <div className="w-1/2">
                <h1 className="text-4xl mb-8 text-center">
                    MOST WANTED BY INTERPOL<span className="text-2xl">sl</span>
                </h1>

                <div className="grid grid-cols-2 gap-x-20">
                    {Object.keys(data).map((key) => {
                        const person = data[key];
                        return (
                            <div key={key} className="flex my-5">
                                <div className="flex flex-col">
                                    <div className="flex justify-between h-60">
                                        <div className="w-1/2">
                                            <h2>IMIĘ: {person.name}</h2>
                                            <p>WIEK: {person.age}</p>
                                            <p>PSEUDONIM: {person.nickname}</p><br />
                                            {person.groups &&
                                                person.groups.length > 0 && (
                                                    <>
                                                        <h3>
                                                            NIELEGALNA
                                                            ORGANIZACJA:
                                                        </h3>
                                                        {person.groups &&
                                                            person.groups
                                                                .length > 0 && (
                                                                <>
                                                                    <ul>
                                                                        {person.groups.map(
                                                                            (
                                                                                group,
                                                                                index
                                                                            ) => (
                                                                                <li
                                                                                    key={
                                                                                        index
                                                                                    }
                                                                                >
                                                                                    {
                                                                                        group.name
                                                                                    }
                                                                                </li>
                                                                            )
                                                                        )}
                                                                    </ul>
                                                                </>
                                                            )}
                                                    </>
                                                )}
                                        </div>

                                        <div className="w-1/3">
                                            <img
                                                src={person.image}
                                                alt={`Wanted: ${person.name}`}
                                            />
                                        </div>
                                    </div>
                                    <div className="">
                                        <h3>Wanted For:</h3>
                                        <ul className="list-disc">
                                            {person.wantedFor.map(
                                                (crime, index) => (
                                                    <li key={index}>{crime}</li>
                                                )
                                            )}
                                        </ul>
                                    </div>
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
