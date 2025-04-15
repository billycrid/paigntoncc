import axios from 'axios';

const baseUrl = 'SOME-URL';

export const onesLeague = '117892';
export const twosLeague = '117896';
export const threesLeague = '117902';
export const foursLeague = '117908';
export const womensOnesLeague = '120401';

export const convertToDate = (dateString) => {
    let d = dateString.split("/");
    let dat = new Date(d[2] + '/' + d[1] + '/' + d[0]);
    return dat;     
}

export const getResultSummary = (fromDate: string | undefined = undefined) => {
    let url = `${baseUrl}result-summary`;
    url = url + (fromDate ? `?from_date=${fromDate}` : '');
    return axios.get(url)
        .then(results => {
            return results.data.sort((a,b) => {
                return convertToDate(b.match_date) - convertToDate(a.match_date);
            });
        })
        .catch(error => {
            return {
                error: true,
                fullError: error
            }
        });
}

export const getLeague = (divId) => {
    return axios.get(`${baseUrl}league-standing?league=${divId}`)
        .then(results => {
            return results.data.map(d => {
                const newValue = d.values.map(v => Object.keys(v).sort().reduce(
                    (obj, key) => { 
                      obj[key] = v[key]; 
                      return obj;
                    }, 
                    {}
                ));
                const newHeaders = Object.keys(d.headings).sort().reduce(
                    (obj, key) => { 
                      obj[key] = d.headings[key]; 
                      return obj;
                    }, 
                    {}
                );
                return {
                    ...d,
                    values: newValue,
                    headings: newHeaders
                }
            })
        })
        .catch(error => {
            return {
                error: true,
                fullError: error
            }
        });
}