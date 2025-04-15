import React, { useEffect, useState } from 'react';
import { 
    foursLeague,
    threesLeague,
    twosLeague, 
    getLeague,
    onesLeague, 
    womensOnesLeague
} from '../../services/services.tsx';
import { Loading } from '../Loading/Loading.tsx';
import './Leagues.css';
import ReactGA from 'react-ga';

export const Leagues = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [selectedLeague, setLeague] = useState(onesLeague);

    useEffect(() => {
        setLoading(true);
        const getData = async () => {
            const apiResponse = await getLeague(selectedLeague);
            if (!apiResponse.error) {
                setData(apiResponse);
                setLoading(false);
            }
        }
        getData()
    }, [selectedLeague])

    const onChange = (event) => {
        ReactGA.event({
            category: 'changed league table',
            action: event.target.label
        });
        setLeague(event.target.value);
    }

    return <>
        <div className='leagueHeader'>
            <h5>League Standings</h5>
        </div>
        <div className="leagueSelection">
                <h5>Team: </h5>
                <select id="league-select" onChange={onChange} value={selectedLeague}>
                    <option value={onesLeague}>1s</option>
                    <option value={twosLeague}>2s</option>
                    <option value={threesLeague}>3s</option>
                    <option value={foursLeague}>4s</option>
                    <option value={womensOnesLeague}>Womens</option>
                </select>
            </div>
        <div className="leagueTable">
            {isLoading && <div style={{textAlign: 'center'}}><Loading /></div>}
            {!isLoading && <div>
                {data.map((d, di) => {
                    return <div key={`data_${di}`}>
                        <h5>{d.name}</h5>
                        <table className="tableStandings">
                            <tbody>
                                <tr>
                                    {Object.keys(d.headings).map((key, index) => {
                                        if (d.headings[key] === 'Team' || 
                                            d.headings[key] === 'p' || 
                                            d.headings[key] === 'w' || d.headings[key] === 'Won' ||
                                            d.headings[key] === 'l' || d.headings[key] === 'Lost' ||
                                            d.headings[key] === 'Pts') {
                                            return <th key={`header_${index}`}>
                                                {d.headings[key]}
                                            </th>
                                        }
                                        return null;
                                    })}
                                </tr>
                                {d.values.map((val, index) => {
                                    return <tr key={`row_${index}`}>
                                        {Object.keys(val).map((k, i) => {
                                            if (k === 'column_1') {
                                                return <td key={`row_${index}_${i}`}>
                                                    <a target="_blank" rel="noreferrer" href={`https://paignton.play-cricket.com/website/websites/view_division?id=${selectedLeague}`}>{val[k]}</a>
                                                </td>
                                            }
                                            if (k === 'column_2' || k === 'column_3' || k === 'column_4' || k === 'column_13') {
                                                return <td key={`row_${index}_${i}`}>
                                                    {val[k]}
                                                </td>
                                            }
                                            return null;
                                        })}
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                })}
            </div>}
        </div>
    </>
}