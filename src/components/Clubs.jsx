import React from "react";

function Clubs(props) {
    return (
        <div className="facilities-col">
            <img className="icon" src={props.icon} alt="icon" width={30} height={180}></img>
            <span>{props.logo}</span>
            <h3> {props.name}</h3>
            <p>{props.content}</p>
        </div>
    )
}

// function Clubs(props) {
//     return (
//         <div className="facilities">
//              <div className="row">
//                 <div className="facilities-col">
//                 <img src={img2} alt="IEEEpic" width="30" height="200" ></img>
//                     <h3>PASC</h3>
//                     <p>
//                         Association for computing machinery (ACM) is the worlds largest educational and scientific society, uniting educators, researchers and professors. 
//                         PICT ACM student chapter (PASC) was established in 2011 with a view of fostering technical and non-technical qualities in an individual and helping them to shape their destiny. 
//                         PASC started off with 4 founding members and in such a short period, PASC has grown to a big student chapter of nearly more than 220 ACM members.
//                         Appreciating our endeavour, PASC is awarded as BEST ACM STUDENT CHAPTER in India consecutively in 2018 and 2019.
//                     </p>
//                 </div>
//                 <div className="facilities-col">
//                 <img src={img1} alt="PCSBpic" width="30" height="200" ></img>
//                     <h3>PCSB</h3>
//                     <p>
//                         Life at university has more to offer than just study. There is a
//                         complete range of recreational activities, opportunities for
//                         competitive sport, representative opportunities, and leadership
//                         development to enjoy through our University Sport.
//                     </p>
//                 </div>
//                 <div className="facilities-col">
//                     <img src={img} alt="IEEEpic" width="30" height="200" ></img>
//                     <h3>IEEE</h3>
//                     <p>
//                         Providing top-quality and nutritious dining to the University
//                         community for the past 55 years .
//                     </p>
//                 </div>

//             </div>
//         </div>

//     )
// }

export default Clubs;