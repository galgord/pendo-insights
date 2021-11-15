import {fetchData} from "../../../axios";

export async function getUniqueAccountVisitors (accountId) {
    var uniqueAccountVisitors = JSON.stringify({
        "response": {
            "location": "request",
            "mimeType": "application/json"
        },
        "requests": [
            {
                "name": "AccountDetails-analytics",
                "pipeline": [
                    {
                        "spawn": [
                            [
                                {
                                    "source": {
                                        "events": {
                                            "appId": "expandAppIds(\"web\")",
                                            "blacklist": "apply"
                                        },
                                        "timeSeries": {
                                            "period": "dayRange",
                                            "first": 1634356800000,
                                            "count": 30
                                        }
                                    }
                                },
                                {
                                    "identified": "visitorId"
                                },
                                {
                                    "filter": `accountId == \"${accountId}\"`
                                },
                                {
                                    "reduce": {
                                        "numVisitors": {
                                            "count": "visitorId"
                                        },
                                        "daysActive": {
                                            "count": "day"
                                        },
                                        "totalTimeMinutes": {
                                            "sum": "numMinutes"
                                        }
                                    }
                                }
                            ],
                            [
                                {
                                    "source": {
                                        "events": {
                                            "appId": "expandAppIds(\"web\")",
                                            "blacklist": "apply"
                                        },
                                        "timeSeries": {
                                            "period": "dayRange",
                                            "first": 1634356800000,
                                            "count": -30
                                        }
                                    }
                                },
                                {
                                    "identified": "visitorId"
                                },
                                {
                                    "filter": `accountId == \"${accountId}\"`
                                },
                                {
                                    "reduce": {
                                        "previousTotalTimeMinutes": {
                                            "sum": "numMinutes"
                                        }
                                    }
                                }
                            ]
                        ]
                    },
                    {
                        "join": {
                            "fields": []
                        }
                    },
                    {
                        "select": {
                            "numVisitors": "numVisitors"
                        }
                    }
                ],
                "requestId": "AccountDetails-analytics-rId-36afb658-32e0-4bed-9033-cb5bc3af5149"
            }
        ]
    });
    return fetchData(uniqueAccountVisitors);
}
