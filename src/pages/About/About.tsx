import React from 'react';
import '../Shared/Shared.css';
import {Helmet} from "react-helmet";

export const About = () => {
    return <div className="FullPageContent">
        <Helmet>
            <meta charSet="utf-8" />
            <title>About - Paignton Cricket Club</title>
            <link href="/about" />
        </Helmet>
        <h3 className="ContentTitle">WELCOME TO THE PAIGNTON CRICKET CLUB!</h3>
        <div className="entry-content">
            <p>The club’s mission is to provide the best possible facilities and a friendly environment for all of its members and visitors, and to promote cricketing opportunities for players of all ages and abilities.<br/>
            &nbsp;<br/>
            Our vision is to achieve long term, sustainable success, by working within our budget, and by developing and maintaining the success of our junior section.</p>
            <p>To do this we must:-</p>
            <ul>
            <li>provide the best possible playing conditions and facilities.</li>
            <li>maintain and develop a committee structure which supports the needs of the club.</li>
            <li>maintain our Clubmark status.</li>
            <li>provide coaching (with ECB qualified coaches) and playing opportunities for boys and girls of all ages and abilities.</li>
            <li>promote and play within the ‘spirit of cricket’ at all times.</li>
            <li>engage with and support the local community and schools.</li>
            <li>uphold the integrity and tradition of the club.</li>
            </ul>
            <p>We encourage you to join us at Queen’s Park to enjoy the cricket on the pitch, and the friendly atmosphere around the ground in our clubhouse and bar.</p>
            <p>For information and to see what is going on, please visit our Facebook page <a href="https://www.facebook.com/paignontcc" target="_blank" rel="noreferrer">www.facebook.com/paignontcc</a></p>
            <p><a href="/PDFS/PCC-Code-of-conduct-2024.pdf" target="_blank">Our Latest Code of Conduct can be downloaded as a .PDF</a></p>
            <p><span style={{textDecoration: "underline"}}>Code of Conduct:</span><br/>
            1. Respect the rights, dignity and worth of every person within the context of Cricket.<br/>
            2. Treat everyone equally and not discriminate on the grounds of age, gender, disability, race, ethnic origin, nationality, colour, parental or marital status, religious belief, class or social background, sexual preference or political belief.<br/>
            3. Not condone, or allow to go unchallenged, any form of discrimination if witnessed.<br/>
            4. Display high standards of behaviour.<br/>
            5. Promote the positive aspects of Cricket e.g. fair play.<br/>
            6. Encourage all participants to learn the laws and rules and play within them, respecting the decisions of match officials.<br/>
            7. Actively discourage unfair play, rule violations and arguing with match officials recognise good performance not just match results.<br/>
            8. Place the well-being and safety of Young People above the development of performance.<br/>
            9. Ensure that activities are appropriate for the age, maturity, experience and ability of the individual.<br/>
            10. Respect Young People’s opinions when making decisions about their participation in Cricket.<br/>
            11. Not smoke, drink or use banned substances whilst actively working with Young People in the Club.<br/>
            12. Not provide Young People with alcohol when they are under the care of the Club.<br/>
            13. Follow ECB guidelines set out in the “Safe Hands” – Cricket’s Policy for Safeguarding.<br/>
            14. Report any concerns in relation to a Young Person, following reporting procedures laid down by the ECB.</p>
            <p>In addition to the above, Club Officers &amp; Appointed Volunteers will:<br/>
            1. Hold relevant qualifications and be covered by appropriate insurance.<br/>
            2. Always work in an open environment (i.e. avoid private or unobserved situations and encourage an open environment).<br/>
            3. Inform Players and Parents of the requirements of Cricket.<br/>
            4. Know and understand the ECB’S “Safe Hands” – Cricket’s Policy for Safeguarding Children.</p>
            <p><em>*Members and Guests include all members and officers of the Cricket Club and all guests of those members and officers, as well as all individuals who watch/attend/participate/officiate in matches hosted by the club in whatever capacity.</em></p>
	</div>
    </div>
}