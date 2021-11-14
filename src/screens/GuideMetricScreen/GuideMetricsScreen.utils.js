import {fetchData} from "../../../axios";

export async function getFirstTimeViews (guideId,guideStepId) {
    var firstTimeGuide = JSON.stringify({
        "response": {
            "location": "request",
            "mimeType": "application/json"
        },
        "requests": [
            {
                "name": "GuideFirstTimeViews",
                "pipeline": [
                    {
                        "source": {
                            "guideEvents": {
                                "guideId": guideId,
                                "guideStepId": guideStepId,
                                "blacklist": "apply"
                            },
                            "timeSeries": {
                                "count": 73,
                                "period": "dayRange",
                                "first": 1627963200000
                            }
                        }
                    },
                    {
                        "identified": "visitorId"
                    },
                    {
                        "filter": "eventSubType(type) == \"guideSeen\""
                    },
                    {
                        "group": {
                            "group": [
                                "visitorId"
                            ],
                            "fields": [
                                {
                                    "firstTime": {
                                        "min": "browserTime"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "filter": "firstTime >= 1631678400000 && firstTime < 1634270400000"
                    },
                    {
                        "reduce": {
                            "firstTimeTotal": {
                                "count": null
                            }
                        }
                    }
                ],
                "streamId": "a2bbd8b6-1611-4736-ba34-7283ae4bf9c1",
                "params": {
                    "blacklist": "apply",
                    "includeAnonymous": "visitorId",
                    "segmentId": null,
                    "appId": "expandAppIds(\"*\")",
                    "languageCode": null,
                    "range": {
                        "start": 1631678400000,
                        "end": 1634270400000
                    },
                    "timeSeries": {
                        "count": 73,
                        "period": "dayRange",
                        "first": 1627963200000
                    },
                    "kind": "view",
                    "stepId": guideStepId,
                    "guideId": guideId
                },
                "requestId": "GuideFirstTimeViews-rId-8980b426-aff8-4343-a970-a4d3d88cb80c"
            }
        ]
    });
    return fetchData(firstTimeGuide);
}
export async function getTotalViews (guideId, guideStepId) {
    var totalViews = JSON.stringify({
        "response": {
            "location": "request",
            "mimeType": "application/json"
        },
        "requests": [
            {
                "name": "GuideTotalViews",
                "pipeline": [
                    {
                        "source": {
                            "guideEvents": {
                                "guideId": guideId,
                                "blacklist": "apply"
                            },
                            "timeSeries": {
                                "period": "dayRange",
                                "first": 1634270400000,
                                "count": 30
                            }
                        }
                    },
                    {
                        "identified": "visitorId"
                    },
                    {
                        "filter": "eventSubType(type) == \"guideSeen\""
                    },
                    {
                        "fork": [
                            [
                                {
                                    "filter": `guideStepId == \"${guideStepId}\"`
                                },
                                {
                                    "reduce": {
                                        "count": {
                                            "count": null
                                        }
                                    }
                                }
                            ],
                            [
                                {
                                    "reduce": {
                                        "totalStepCount": {
                                            "count": null
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
                    }
                ],
                "streamId": "6fe6ce4f-9735-4823-95fc-6c8cb51d5e2d",
                "params": {
                    "blacklist": "apply",
                    "includeAnonymous": "visitorId",
                    "segmentId": null,
                    "appId": "expandAppIds(\"*\")",
                    "timeSeries": {
                        "period": "dayRange",
                        "first": 1634270400000,
                        "count": 30
                    },
                    "languageCode": null,
                    "kind": "view",
                    "stepId": guideStepId,
                    "guideId": guideId
                },
                "requestId": "GuideTotalViews-rId-6e7edfd7-dc80-46c5-81c3-229a0ecd06c1"
            }
        ]
    });
    return fetchData(totalViews);
}
