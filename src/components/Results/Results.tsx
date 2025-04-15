import React, { useEffect, useState } from "react";
import { Loading } from '../../components/Loading/Loading.tsx';
import { getResultSummary, convertToDate } from "../../services/services.tsx";
import './Results.css';

const padTo2Digits = (num: number) => num.toString().padStart(2, '0');

const formatDate = (date: any) =>[
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
].join('/');

export const Results = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    let renderedDate = null;
    const daysAgo = 16;
    const firstGameOfSeason = new Date(`${new Date().getFullYear()}-04-16T00:00:00`);
    const newDate = new Date();
    newDate.setDate(newDate.getDate() - daysAgo);
    const startingFromDate = formatDate(newDate);
    const formattedFirstGame = formatDate(firstGameOfSeason);
    const [showingAll, setShowingAll] = useState(false);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            const withDate = showingAll ? formattedFirstGame : startingFromDate;
            const data = await getResultSummary(withDate);
            setData(data);
            setLoading(false);
        }
        fetchData();

        // eslint-disable-next-line
    }, [showingAll]);

    const renderCard = (result) => {
        const getInnings = (teamId) => result.innings.find((inn) => inn.team_batting_id === teamId);
        return <div key={result.id} className="col-sm-12 card-table pl-small-0 pr-small-0 ml-small-5 mr-small-5 Card">
            <div className="row ml-large-0 mr-large-0">
                <div className="d-block d-md-flex"><div className="col-sm-1 d-none d-md-block">&nbsp;</div><div className="col-sm-10 bgGray">
                <table className="table">
                    <tbody>
                        <tr className="d-md-table-row">
                            <td colSpan={3} className="col-sm-10 text-center match-status bgGray">
                                <div className="fonts-gt">{result.result_description}</div>
                            </td>
                        </tr>
                        <tr>
                            <td className="col-xs-5 col-sm-3 col-md-3 text-center text-md-right bgGray">
                                <a rel="noreferrer" target="_blank" href={`https://paignton.play-cricket.com/website/results/${result.id}`}>
                                    <p className="txt1">
                                        {result.home_club_name}
                                        <span className="d-block d-lg-inline">
                                            <span className="d-none d-lg-inline">-</span>
                                            {result.home_team_name}
                                        </span>
                                    </p>
                                </a>
                                <p></p>
                                {getInnings(result.home_team_id) && <p className="txt2 hs">
                                    {getInnings(result.home_team_id).runs}
                                    <span className="smalltxt">
                                        / {getInnings(result.home_team_id).wickets}  ({getInnings(result.home_team_id).overs})
                                    </span>
                                </p>}
                            </td>
                            <td className="col-xs-2 col-sm-4 col-md-3 text-center bgGray">
                                <div className="d-inline-block">
                                    <div className="d-md-flex align-items-center justify-content-between divider-h">
                                        <div className="divider">
                                            <span className="vs">Vs</span>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className="col-xs-5 col-sm-3 col-md-3 text-center text-md-left card-table-r bgGray">
                                <a rel="noreferrer" target="_blank" href={`https://paignton.play-cricket.com/website/results/${result.id}`}>
                                    <p className="txt1">
                                    {result.away_club_name}
                                    <span className="d-block d-lg-inline">
                                        <span className="d-none d-lg-inline">-</span>
                                            {result.away_team_name}
                                        </span>
                                    </p>
                                </a>
                                <p></p>
                                {getInnings(result.away_team_id) && <p className="txt2 hs">
                                    {getInnings(result.away_team_id).runs}
                                    <span className="smalltxt">
                                        / {getInnings(result.away_team_id).wickets}  ({getInnings(result.away_team_id).overs}) 
                                    </span>
                                </p>}
                            </td>
                        </tr>
                        <tr className="d-md-table-row">
                            <td colSpan={3} className="col-sm-10 text-center match-status bgGray">
                                <div>{result.toss}</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="col-sm-1 col-xs-1 col-md-1 d-md-block externalLink">
            <a target="_blank" rel="noreferrer" href={`https://paignton.play-cricket.com/website/results/${result.id}`} className="link-scorecard d-md-inline-block rounded-circle">
                <i className="fa fa-external-link fa-2x"></i>
            </a>
            </div></div>
            </div>
        </div>
    }

    return <>
        {isLoading && <div style={{textAlign: 'center'}}><Loading /></div>}
        {!isLoading && data.length > 0 && <>
            {data.map((d, index) => {
                if (d.match_date !== renderedDate) {
                    renderedDate = d.match_date;
                    return <div key={`results_${index}`}>
                        <h5 className="resultHeader">{convertToDate(d.match_date).toDateString()}</h5>
                        {renderCard(d)}
                        {(index + 1) < data.length && <hr />}
                    </div>
                }
                return <div key={`results_${index}`}>
                    {renderCard(d)}
                    {(index + 1) < data.length && <hr />}
                </div>
            })}
        </>}
        {!isLoading && data.length > 0 && !showingAll && <div style={{textAlign: 'center'}}>
            <button onClick={() => setShowingAll(!showingAll)} className="btn btn-success paignton-button">Show All</button>
        </div>}
        {!isLoading && data.length === 0 && <>
            <h3>No fixtures found.</h3>
        </>}
    </>
}