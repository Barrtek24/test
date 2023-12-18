import React, { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { child, ref as ref_db, get } from "firebase/database";
export default function Poszukiwani() {
    const [data, setData] = useState({});
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

    Object.keys(data).map((name, i) => {
        const singleP = data[name];

        console.log(singleP);

        Object.keys(singleP).map((it) => {
            // console.log(singleP[it]);

            if (it === "name") {
                console.log("Imie");
            } else if (it === "nickname") {
                console.log("pseudonim");
            } else if (it === "image") {
                console.log("zdjęcie");
            }
        });
        return "";
    });

    const WantedList = ({ data }) => {
        return (
            <div>
                <h1>Wanted List</h1>
                {Object.keys(data).map((key) => {
                    const person = data[key];

                    return (
                        <div
                            key={key}
                            style={{
                                border: "1px solid #ccc",
                                margin: "10px",
                                padding: "10px",
                            }}
                        >
                            <img
                                src={person.image}
                                alt={`Wanted: ${person.name}`}
                                style={{ width: "100px", height: "100px" }}
                            />
                            <h2>{person.name}</h2>
                            <p>Age: {person.age}</p>
                            <p>Nickname: {person.nickname}</p>
                            {person.groups && person.groups.length > 0 && (
                                <>
                                    <h3>Groups:</h3>
                                    <ul>
                                        {person.groups.map((group, index) => (
                                            <li key={index}>Group {group}</li>
                                        ))}
                                    </ul>
                                </>
                            )}
                            <h3>Wanted For:</h3>
                            <ul>
                                {person.wantedFor.map((crime, index) => (
                                    <li key={index}>{crime}</li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <div className=" bg-red-500">
            <h1 className="text-4xl text-white">MOST WANTED BY INTERPOLsl</h1>
            <WantedList data={data} />
        </div>
    );
}
