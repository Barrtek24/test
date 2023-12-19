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

    const saveDB = () => {
        const con = ref_db(db, "groups/" + 3);

        set(con, {
            name:"Niszczenie mienia cudzego, poprzez atak na krzaki",
            codename:"Akcja KRZAKI",
            image:"https://firebasestorage.googleapis.com/v0/b/test-548bf.appspot.com/o/images%2FbandaKM.png?alt=media&token=6a490d87-22b0-489f-a15b-50a4da802c66",
            description:"Wypadając do krzaków i spędzając tam kilka minut, dwie osoby stworzyły nietypową scenę, wzbudzając zainteresowanie świadków. Zachowanie to budziło pewne zaniepokojenie, zwłaszcza gdy obserwatorzy zauważyli, że para spędzała w krzakach pewien czas, wydając się być zaabsorbowaną tajemniczym zajęciem. To nietypowe zdarzenie wzbudziło spekulacje i zaniepokojenie wśród przechodniów, którzy zaczęli obserwować, co się dokładnie dzieje wśród krzewów.",
            penalty: "Kara grzywny",
        });
    };


    // "groups": [
    //     {
    //         "id": 0,
    //         "name": "Project X",
    //     },
    //     {
    //         "id": 1,
    //         "name": "Doping POLSL",
    //     },
    //     {
    //         "id": 2,
    //         "name": "Handel Etanolem",
    //     },
    //     {
    //         "id": 3,
    //         "name": "Akcja KRZAKI",
    //     },
    //     {
    //         "id": 4,
    //         "name": "Handel tytoniem",
    //     },
    //     {
    //         "id": 5,
    //         "name": "Misja domowka: Kryptonim BLAZE",
    //     },
    //     {
    //         "id": 6,
    //         "name": "Strefa 69",
    //     },
    //     {
    //         "id": 7,
    //         "name": "Akcja REJESTRACJA",
    //     },
        
    // ],

    console.log(data);

    const WantedList = ({ data }) => {
        return (
            <div className="w-1/2">
                <button onClick={saveDB}>asd</button>
                {/* <h1 className="text-4xl mb-8 text-center">
                    MOST WANTED BY INTERPOL<span className="text-2xl">sl</span>
                </h1>
                <div className="grid grid-cols-2 gap-x-12">
                    {Object.keys(data).map((key) => {
                        const person = data[key];
                        return (
                            <div key={key} className="flex my-5">
                                <div className="flex flex-col">
                                    <div className="flex justify-between h-60">

                                        <div className="w-1/2">
                                            <h2>IMIĘ: {person.name}</h2>
                                            <p>WIEK: {person.age}</p>
                                            <p>PSEUDONIM: {person.nickname}</p>
                                            {person.groups &&
                                                person.groups.length > 0 && (
                                                    <>
                                                        <h3>NIELEGALNA ORGANIZACJA:</h3>
                                                        <ul>
                                                            {person.groups.map(
                                                                (group,index) => (
                                                                    <li key={index}>{group}</li>)
                                                            )}
                                                        </ul>
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
                </div> */}
            </div>
        );
    };

    return (
        <div className="flex justify-center">
            <WantedList data={data} />
        </div>
    );
}
