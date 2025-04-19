
import "../Shared/Shared.css";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga";
import "./Membership.css";
import colts from '../../images/colts.jpg';
import softball from '../../images/softball-ladies.jpg';

export const Membership = () => {
  const clickedNewMembership = () => {
    ReactGA.event({
      category: "Membership",
      action: "new membership clicked",
    });
  };
  return (
    <div className="FullPageContent">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Membership - Paignton Cricket Club</title>
        <link href="/news" />
      </Helmet>
      <h3 className="ContentTitle">PAIGNTON CC MEMBERSHIPS</h3>
      <div className="entry-content">
        <div className="row">
          <div className="col-md-7">
            <div>
              <h3 style={{ textDecoration: "underline" }}>
                Subscriptions and Membership – {new Date().getFullYear()}
              </h3>
              <table>
                <tr>
                  <th>
                    <strong>CATEGORY</strong>
                  </th>
                  <th>
                    <strong>PRICE</strong>
                  </th>
                </tr>
                <tr>
                  <td>Senior/Vice President & Family</td>
                  <td>£50</td>
                </tr>
                <tr>
                  <td>Player & Family</td>
                  <td>£130</td>
                </tr>
                <tr>
                  <td>Player</td>
                  <td>£100</td>
                </tr>
                <tr>
                  <td>Lady Hardball Player</td>
                  <td>£50</td>
                </tr>
                <tr>
                  <td>Lady Softball</td>
                  <td>£30</td>
                </tr>
                <tr>
                  <td>Lady Wine and Wickets</td>
                  <td>£10</td>
                </tr>
                <tr>
                  <td>Social Member</td>
                  <td>£10</td>
                </tr>
                <tr>
                  <td>Life Member</td>
                  <td>£400</td>
                </tr>
              </table>
              <br />
              <h4 style={{ textDecoration: "underline" }}>
                Youth Section – hardball colts
              </h4>
              <table>
                <tr>
                  <th>
                    <strong>CATEGORY</strong>
                  </th>
                  <th>
                    <strong>PRICE</strong>
                  </th>
                </tr>
                <tr>
                  <td>2+ Colts & (non-playing) Family</td>
                  <td>£80</td>
                </tr>
                <tr>
                  <td>1 Colt & (non-playing) Family</td>
                  <td>£60</td>
                </tr>
                <tr>
                  <td>Student/Apprentice</td>
                  <td>£60</td>
                </tr>
              </table>
              <br />
              <h4 style={{ textDecoration: "underline" }}>
                Youth Section – softball juniors
              </h4>
              <table>
                <tr>
                  <th>
                    <strong>CATEGORY</strong>
                  </th>
                  <th>
                    <strong>PRICE</strong>
                  </th>
                </tr>
                <tr>
                  <td>2+ Juniors & Family (non-playing)</td>
                  <td>£60</td>
                </tr>
                <tr>
                  <td>1 Junior & Family (non-playing)</td>
                  <td>£40</td>
                </tr>
              </table>
              <br />
              <div>
                <small>
                  <span style={{ textDecoration: "underline", fontWeight: "bold" }}>
                    Colts
                  </span>{" "}
                  are under-18s and involved in playing in one of the club’s
                  hardball youth teams.
                  <br />
                  <span style={{ textDecoration: "underline", fontWeight: "bold" }}>
                    Juniors
                  </span>{" "}
                  are under-11 softballers attending Friday evening sessions.
                  <br />
                  If a 2+ youth membership is a mix of colts and juniors, please
                  join the colts category.
                  <br />
                  <span style={{ textDecoration: "underline", fontWeight: "bold" }}>
                    Students/Apprentice
                  </span>{" "}
                  category applies up to Year 13.
                </small>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <a
              onClick={clickedNewMembership}
              href="https://membermojo.co.uk/paigntoncricketclub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h5 style={{ textAlign: 'center', color: '#c00' }}>
                CLICK HERE TO JOIN/RENEW
              </h5>
            </a>
            <br />
            <hr />
            <img alt="PCC Colts 2023" style={{ width: '100%' }} src={colts} />
            <br />
            <hr />
            <img alt="PCC Ladies Softball" style={{ width: '100%' }} src={softball} />
          </div>
        </div>

        <p>
          <br />
          <strong>
            <strong>JOINING PAIGNTON</strong>
          </strong>
          <br />
          All new members are asked to read the clubs’{" "}
          <a href="/about">code of conduct</a>. Adhering to the code of conduct
          is a condition of your membership.
          <br />
          <br />
          The information you give us is not shared with any other organisation.
          It is stored on a secure online data store only available to
          authorised personnel within Paignton Cricket Club.
          <br />
          <br />
          Payment is made securely via PayPal and you are able to use your
          credit card or debit card.
          <br />
          <br />
          <strong>
            <strong>
              If you have questions about membership, or the Membermojo system,
              please contact
            </strong>
            &nbsp;
            <br />
          </strong>
          <em>Nick Harman (PCC Membership Secretary)</em>&nbsp;
          <br />
          <em>nharman1@virginmedia.com</em>&nbsp;
          <br />
        </p>
        <h1 style={{ textAlign: "center" }}>
          <a
            onClick={clickedNewMembership}
            href="https://membermojo.co.uk/paigntoncricketclub"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here to join or renew your membership!
          </a>
          <br />
        </h1>
      </div>
    </div>
  );
};
