import React from "react";
import Clubs from "./Clubs";
// import { useNavigate } from "react-router-dom";

import img2 from "../Images/PASC.jpeg";
import img1 from "../Images/PCSB.jpeg";
import img from "../Images/IEEE.jpeg";


function Faculty_info() {
    return (
        <div>
            <div className="facilities">
                <h1>~SE Comp. Faculty~</h1>
                <div className="row">
                    <Clubs
                        // logo={img}
                        icon={img}
                        name={"CSI"}
                        content={"This is our pict club for students."}
                    ></Clubs>
                    <Clubs
                        // logo={img}
                        icon={img1}
                        name={"IEEE"}
                        content={"This is our pict club for students."}
                    ></Clubs>
                    <Clubs
                        // logo={img}
                        icon={img2}
                        name={"PCSB"}
                        content={"This is our pict club for students."}
                    ></Clubs>
                </div>
                <div className="row">
                    <Clubs
                        // logo={img}
                        icon={img}
                        name={"CSI"}
                        content={"This is our pict club for students."}
                    ></Clubs>
                    <Clubs
                        // logo={img}
                        icon={img1}
                        name={"IEEE"}
                        content={"This is our pict club for students."}
                    ></Clubs>
                    <Clubs
                        // logo={img}
                        icon={img2}
                        name={"PCSB"}
                        content={"This is our pict club for students."}
                    ></Clubs>
                </div>
            </div>
            <div className="facilities">
                <h1>~SE IT Faculty~</h1>
                <div className="row">
                    <Clubs
                        // logo={img}
                        icon={img}
                        name={"CSI"}
                        content={"This is our pict club for students."}
                    ></Clubs>
                    <Clubs
                        // logo={img}
                        icon={img1}
                        name={"IEEE"}
                        content={"This is our pict club for students."}
                    ></Clubs>
                    <Clubs
                        // logo={img}
                        icon={img2}
                        name={"PCSB"}
                        content={"This is our pict club for students."}
                    ></Clubs>
                </div>
                <div className="row">
                    <Clubs
                        // logo={img}
                        icon={img}
                        name={"CSI"}
                        content={"This is our pict club for students."}
                    ></Clubs>
                    <Clubs
                        // logo={img}
                        icon={img1}
                        name={"IEEE"}
                        content={"This is our pict club for students."}
                    ></Clubs>
                    <Clubs
                        // logo={img}
                        icon={img2}
                        name={"PCSB"}
                        content={"This is our pict club for students."}
                    ></Clubs>
                </div>
            </div>
        </div>
    )
}

export default Faculty_info;