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
export async function getAverageTime (guideId, guideStepId) {
    var averageTime = JSON.stringify({
        "response": {
            "location": "request",
            "mimeType": "application/json"
        },
        "requests": [
            {
                "name": "TimeOnGuide",
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
                        "filter": "eventSubType(type) != \"guideSnoozeCanceled\""
                    },
                    {
                        "filter": "eventSubType(type) != \"guideNotSeen\""
                    },
                    {
                        "identified": "visitorId"
                    },
                    {
                        "select": {
                            "visitorId": "visitorId",
                            "type": "type",
                            "browserTime": "browserTime",
                            "guideStepId": "guideStepId"
                        }
                    },
                    {
                        "group": {
                            "group": [
                                "guideId",
                                "visitorId"
                            ],
                            "fields": [
                                {
                                    "s": {
                                        "sequence": {
                                            "new": "eventSubType(type) == \"guideSeen\" || eventSubType(type) == \"guideTimeout\"",
                                            "sort": [
                                                "browserTime"
                                            ]
                                        }
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "eval": {
                            "timestamps": "map(step, s, step[0].browserTime)",
                            "stepIds": "map(step, s, step[0].guideStepId)"
                        }
                    },
                    {
                        "unwind": {
                            "field": "s",
                            "index": "index"
                        }
                    },
                    {
                        "eval": {
                            "s[0].duration": "if (len(s)>1 || index+1 == len(timestamps) || stepIds[index+1] == s[0].guideStepId, s[-1].browserTime - s[0].browserTime, timestamps[index+1] - s[0].browserTime)",
                            "seenStepTimestamp": "timestamps[index]",
                            "seenStepId": "stepIds[index]",
                            "prevSeenStepId": "if(index > 0, stepIds[index-1], null)"
                        }
                    },
                    {
                        "unwind": {
                            "field": "s",
                            "index": "index"
                        }
                    },
                    {
                        "eval": {
                            "guideId": "s.guideId",
                            "guideStepId": "s.guideStepId",
                            "type": "s.type",
                            "browserTime": "s.browserTime",
                            "visitorId": "s.visitorId",
                            "stepStatus": "s.stepStatus",
                            "duration": "s.duration",
                            "seenStepId": "seenStepId",
                            "seenStepTimestamp": "seenStepTimestamp",
                            "prevSeenStepId": "prevSeenStepId"
                        }
                    },
                    {
                        "filter": "guideStepId == seenStepId || (guideStepId == prevSeenStepId && browserTime - seenStepTimestamp < 1500)"
                    },
                    {
                        "group": {
                            "group": [
                                "guideId",
                                "visitorId",
                                "guideStepId"
                            ],
                            "fields": [
                                {
                                    "s": {
                                        "sequence": {
                                            "new": "eventSubType(type) == \"guideSeen\" || eventSubType(type) == \"guideTimeout\"",
                                            "sort": [
                                                "browserTime"
                                            ]
                                        }
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "unwind": {
                            "field": "s",
                            "index": "index"
                        }
                    },
                    {
                        "eval": {
                            "s[0].duration": "if(eventSubType(s[-1].type) == \"guideAdvanced\" || eventSubType(s[-1].type) == \"guideDismissed\" || eventSubType(s[-1].type) == \"guideSnoozed\", s[-1].browserTime - s[0].browserTime, s[0].duration)",
                            "visitorId": "s[0].visitorId"
                        }
                    },
                    {
                        "unwind": {
                            "field": "s"
                        }
                    },
                    {
                        "select": {
                            "visitorId": "visitorId",
                            "guideId": "guideId",
                            "guideStepId": "s.guideStepId",
                            "duration": "s.duration",
                            "type": "s.type"
                        }
                    },
                    {
                        "eval": {
                            "duration": "if(!isNil(duration) && duration > 600000, 600000, duration)"
                        }
                    },
                    {
                        "fork": [
                            [
                                {
                                    "filter": "!isNil(duration) && duration != 0"
                                },
                                {
                                    "group": {
                                        "group": [
                                            "guideStepId"
                                        ],
                                        "fields": [
                                            {
                                                "median": {
                                                    "median": "duration"
                                                }
                                            }
                                        ]
                                    }
                                }
                            ],
                            [
                                {
                                    "eval": {
                                        "duration": "if(isNil(duration), 0, duration)"
                                    }
                                },
                                {
                                    "group": {
                                        "group": [
                                            "guideStepId"
                                        ],
                                        "fields": [
                                            {
                                                "numSeen": {
                                                    "countIf": {
                                                        "count": null,
                                                        "if": "type == \"guideSeen\""
                                                    }
                                                }
                                            },
                                            {
                                                "numDurations": {
                                                    "countIf": {
                                                        "count": null,
                                                        "if": "duration != 0"
                                                    }
                                                }
                                            },
                                            {
                                                "sum": {
                                                    "sum": "duration"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "eval": {
                                        "average": "if(numDurations == 0, 0, sum / numDurations)"
                                    }
                                }
                            ],
                            [
                                {
                                    "filter": "!isNil(duration) && duration != 0"
                                },
                                {
                                    "reduce": {
                                        "numVisitors": {
                                            "count": "visitorId"
                                        }
                                    }
                                }
                            ]
                        ]
                    },
                    {
                        "join": {
                            "fields": [
                                "guideStepId"
                            ]
                        }
                    }
                ],
                "streamId": "bd8db323-4dc3-4cac-96cb-d1e60efe1a9d",
                "params": {
                    "guideId": "MuT5DhWpQkiIqv-LqQGYBWg-m7U",
                    "timeSeries": {
                        "period": "dayRange",
                        "first": 1634270400000,
                        "count": 30
                    },
                    "segmentId": null,
                    "blacklist": "apply",
                    "languageCode": null,
                    "includeAnonymous": "visitorId"
                },
                "requestId": "TimeOnGuide-rId-4d948140-ab0c-4220-8aa4-095ff75b9d81"
            }
        ]
    });
    return fetchData(averageTime);
}
