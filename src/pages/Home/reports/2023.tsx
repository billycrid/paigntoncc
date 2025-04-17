import React from "react";

const ChairmansReport = () => {
  return (
    <div className="chairmans-report" style={{ margin: "40px", marginTop: '0', color: "#000", lineHeight: "1.6" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <img src="/tim.png" alt="Chairman" style={{ maxHeight: "150px" }} />
        <img src="/castle.png" alt="Paignton C.C. Logo" style={{ height: "150px" }} />
      </div>

      <div style={{ textAlign: "center", marginTop: "-100px" }}>
        <h1 style={{ fontSize: "1.5em", textDecoration: "underline", fontWeight: "bold" }}>Consolidation and promotion</h1>
        <h2 style={{ fontSize: "1.2em", margin: "5px 0" }}>Chairman’s Report</h2>
        <h2 style={{ fontSize: "1.2em", margin: "5px 0" }}>April 2024</h2>
      </div>

      <div style={{ fontStyle: "italic", textAlign: "center", margin: "30px 0", color: "#444" }}>
      Lights, Camera, Action!<br/>
“Success is not final: Failure is not fatal:
It’s the courage to continue that counts”
      </div>

      <h3 style={{ fontWeight: "bold" }}>Senior Cricket:</h3>

      <p>
        The season started with a camera crew and entourage dotted around Queens Park as our Indian overseas arrived. Divyaansh Saxena had signed a contract to allow Disney Plus to film him throughout the season. Unfortunately halfway through the season, the filming ceased due to politics within Disney Plus. However, it was appropriate to have Queens Park in the spotlight as Divvy played cricket like a superstar! His ability for such a young man was staggering. Never have we seen at Queens Park a bowler who can bowl both left and right-handed. His batting was also at a different level. Divvy scored 1037 runs at an average of 74.04 containing 4 50’s and 4 100s the highlight being a quite brilliant 172 against Cornwood. A remarkable man with a lovely personality. Everybody in the club holds Divvy in high regard. The 1st team finished 7th in the league and we competed well against most teams. Another year of valuable experience for our young players. Bowling and fielding were generally of a high standard but unfortunately, the batting seemed to let us down. Hopefully, lessons have been learned and next year we push on as a side. I would like to personally thank Mark Orchard for his incredible passion and commitment to the team.
      </p>

      <p>
        Unfortunately, the second team ended up being relegated. At the end of 2021 season, we lost a cluster of players and throughout the season availability was a real problem. However, this did allow our youth an opportunity to play at a higher level. I would like to thank Stephen George for his commitment and dedication to supporting his team. Again, our young players have gained valuable experience and our aim is to gain promotion for the season ahead.
      </p>
      <br/>
    </div>
  );
};

export default ChairmansReport;
