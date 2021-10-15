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
export async function getTotalViews () {
    var firstTimeGuide = JSON.stringify({"response":{"location":"request","mimeType":"application/json"},"requests":[{"name":"GuideTotalViews","pipeline":[{"source":{"guideEvents":{"guideId":"TCKLHtswDWukF-ZZalgosK9ulu0","blacklist":"apply"},"timeSeries":{"first":"1631678400000","period":"daily","last":"1634184000000"}}},{"identified":"visitorId"},{"filter":"eventSubType(type) == \"guideSeen\""},{"filter":"browserTime >= 1631678400000 && browserTime < 1634270400000"},{"fork":[[{"filter":"guideStepId == \"O6UDK3dNMIGmREtO3PO1Fmx9vAg\""},{"reduce":{"count":{"count":null}}}],[{"reduce":{"totalStepCount":{"count":null}}}]]},{"join":{"fields":[]}}],"streamId":"e49f7546-326a-46bb-9424-8891dc690f9d","params":{"blacklist":"apply","includeAnonymous":"visitorId","segmentId":null,"appId":"expandAppIds(\"*\")","languageCode":null,"guideId":"TCKLHtswDWukF-ZZalgosK9ulu0","kind":"viewCount","range":{"start":1631678400000,"end":1634270400000},"stepId":"O6UDK3dNMIGmREtO3PO1Fmx9vAg","timeSeries":{"first":"1631678400000","period":"daily","last":"1634184000000"}},"requestId":"GuideTotalViews-rId-4b80c811-7881-4ed1-83f6-7e1672771409"}]});
    return fetchData(firstTimeGuide);
}
