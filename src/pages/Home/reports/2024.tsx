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
        "The real beauty of cricket lies in the battles we fight on the field, the<br />
        friendships we make off the field, and the memories we create together."<br />
        <strong>Zaheer Khan</strong>
      </div>

      <h3 style={{ fontWeight: "bold" }}>Senior Cricket:</h3>

      <p>
        To summarise, the 2023 season ended with 4 sides consolidating their place in their respective leagues and 2 sides gaining promotion.
      </p>

      <p>
        We welcomed back Divyaansh Saxena in the 1<sup>st</sup> team as our overseas player. He had a great first half and was performing well as leading run scorer. We said farewell halfway through the season so he could turn to India as he was selected to take part in the Mumbai camp. We wish him much success in his developing career and one day hope that he dons that Indian shirt!
      </p>

      <p>
        Divvy’s replacement was Kelly Smutts from South Africa. He was an enthusiastic and capable player who also did well, culminating in a century in the last game of the season.
      </p>

      <p>
        Congratulations to the second and thirds for a tremendous 2023 season, both gaining promotion, which means in 2024 the thirds will be playing in E West and the seconds will be playing in C West.
      </p>

      <p>
        The women's hardball team achieved amazingly well again, maintaining their place in the premier league in Devon, while the softball ladies continued to be competitive in the South Softball League.
      </p>

      <p>
        The 4ths were successful maintaining their place in the league and again offered many young players a great introduction to senior cricket.
      </p>

      <p>
        All sides were ably captained. Thanks goes to Connor Bryan 2<sup>nd</sup> XI, Jon Roberts 3<sup>rd</sup> XI, Nick Glanfield 4<sup>th</sup> XI, Charlotte Massey Women’s XI and Steph Kaczalska Ladies’ Softball.
      </p>
      <br/>
    </div>
  );
};

export default ChairmansReport;
