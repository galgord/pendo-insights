import {Platform} from "react-native";
import {fetchData} from "../../../axios";

export function parseNumber(number){
    if(number > 99999){
        return Platform.OS === 'ios' ? number.toLocaleString().slice(0,4).replace(/,/g, '.') + 'm' :
            number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",").slice(0,4).replace(/,/g, '.') + 'm';
    }
    else if(number > 9999 && number< 99999){
        return Platform.OS === 'ios' ? number.toLocaleString().slice(0,4).replace(/,/g, '.') + 'k' :
            number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",").slice(0,4).replace(/,/g, '.') + 'k';
    }
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export async function fetchAccountOverviewLast30Days () {
    var accountOverviewLast30Days = JSON.stringify({
        "response": {
            "location": "request",
            "mimeType": "application/json"
        },
        "requests": [
            {
                "name": "VisitorOverview-last30days",
                "pipeline": [
                    {
                        "source": {
                            "events": {
                                "blacklist": "apply",
                                "appId": "expandAppIds(\"*\")"
                            },
                            "timeSeries": {
                                "period": "last30days",
                                "first": -1,
                                "count": -1
                            }
                        }
                    },
                    {
                        "identified": "visitorId"
                    },
                    {
                        "filter": "accountId != \"\""
                    },
                    {
                        "reduce": {
                            "count": {
                                "count": "accountId"
                            }
                        }
                    }
                ],
                "streamId": "ccb00ff0-0d98-44db-84cc-bfe5e4e1e281",
                "params": {
                    "appId": "expandAppIds(\"*\")",
                    "segment": {
                        "blacklist": "apply",
                        "includeAnonymous": "visitorId",
                        "segmentId": null
                    },
                    "kind": "account",
                    "timeSeries": {
                        "period": "last30days",
                        "first": -1,
                        "count": -1
                    }
                },
                "requestId": "VisitorOverview-last30days-rId-7ed1fe57-c31e-44b3-b5b5-9c0e6f650095"
            }
        ]
    });
    return fetchData(accountOverviewLast30Days);
}
export async function fetchVisitorOverviewLast30Days () {
    var visitorOverviewLast30Days = JSON.stringify({
        "response": {
            "location": "request",
            "mimeType": "application/json"
        },
        "requests": [
            {
                "name": "VisitorOverview-last30days",
                "pipeline": [
                    {
                        "source": {
                            "events": {
                                "blacklist": "apply",
                                "appId": "expandAppIds(\"*\")"
                            },
                            "timeSeries": {
                                "period": "last30days",
                                "first": -1,
                                "count": -1
                            }
                        }
                    },
                    {
                        "identified": "visitorId"
                    },
                    {
                        "reduce": {
                            "count": {
                                "count": "visitorId"
                            }
                        }
                    }
                ],
                "streamId": "fe040d2d-0d1a-4579-8f68-3cabd7b19a39",
                "params": {
                    "appId": "expandAppIds(\"*\")",
                    "segment": {
                        "blacklist": "apply",
                        "includeAnonymous": "visitorId",
                        "segmentId": null
                    },
                    "kind": "visitor",
                    "timeSeries": {
                        "period": "last30days",
                        "first": -1,
                        "count": -1
                    }
                },
                "requestId": "VisitorOverview-last30days-rId-046e8ce5-6c57-40dc-9e63-3998777fa3b1"
            }
        ]
    });
    return fetchData(visitorOverviewLast30Days);
}
export async function fetchActiveGuides () {
    var activeGuides = JSON.stringify({"response":{"location":"request","mimeType":"application/json"},"requests":[{"name":"guide-overview-widget","pipeline":[{"source":{"guides":{"appId":"expandAppIds(\"*\")"}}},{"fork":[[{"filter":"state == \"public\""},{"select":{"type":"attributes.type","isMultiStep":"isMultiStep","numSteps":"len(steps)","step0Type":"steps[0].type","resourceCenter":"attributes.resourceCenter"}},{"eval":{"result":"if(type != \"\", type, if(isMultiStep, \"walkthrough\", if(numSteps > 0, step0Type, \"\")))"}},{"filter":"result != \"launcher\""},{"filter":"resourceCenter == null"},{"reduce":{"activeCount":{"count":null}}}],[{"select":{"type":"attributes.type","isMultiStep":"isMultiStep","numSteps":"len(steps)","step0Type":"steps[0].type","resourceCenter":"attributes.resourceCenter"}},{"eval":{"result":"if(type != \"\", type, if(isMultiStep, \"walkthrough\", if(numSteps > 0, step0Type, \"\")))"}},{"filter":"result != \"launcher\""},{"filter":"resourceCenter == null"},{"reduce":{"totalCount":{"count":null}}}]]},{"join":{"fields":[]}}],"streamId":"c7a2b60a-b8d2-4256-9feb-a273fd4c802a","params":{"appId":"expandAppIds(\"*\")"},"requestId":"guide-overview-widget-rId-1c655ef2-82cd-4d8e-8818-fce151b2220c"}]});
    return fetchData(activeGuides);
}
export async function fetchNPSScore () {
    var npsScore = JSON.stringify({"response":{"location":"request","mimeType":"application/json"},"requests":[{"name":"polls-nps-score","pipeline":[{"source":{"pollEvents":{"guideId":"qlONt_EWU0g5bMvCagtCdd05Xas","pollId":"9ctsdjy0ba4","blacklist":"apply"},"timeSeries":{"period":"dayRange","first":1633665600000,"count":1}}},{"identified":"visitorId"},{"filter":"excluded != true"},{"eval":{"detractors":"if(pollResponse < 7, 1, 0)","passive":"if(pollResponse >= 7 && pollResponse < 9, 1, 0)","promoters":"if(pollResponse >= 9, 1, 0)"}},{"reduce":{"detractors":{"sum":"detractors"},"passive":{"sum":"passive"},"promoters":{"sum":"promoters"}}},{"eval":{"total":"detractors + passive + promoters"}},{"eval":{"score":"if(total > 0, (promoters - detractors)/total, 0)"}}],"streamId":"polls-nps-score-1759","requestId":"polls-nps-score-rId-94e18423-93b7-4279-9d87-7a438e9a4996"}]});
    return fetchData(npsScore);
}
