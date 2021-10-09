import {fetchData} from "../../../axios";

export async function fetchGuideList () {
    var guideList = JSON.stringify({
        "response": {
            "location": "request",
            "mimeType": "application/json"
        },
        "requests": [
            {
                "name": "GuidesListInit",
                "pipeline": [
                    {
                        "source": {
                            "guides": {
                                "appId": "expandAppIds(\"*\")"
                            }
                        }
                    },
                    {
                        "filter": "state == `public`"
                    },
                    {
                        "eval": {
                            "guideId": "id"
                        }
                    },
                    {
                        "merge": {
                            "fields": [
                                "guideId"
                            ],
                            "mappings": {
                                "starred": "true"
                            },
                            "pipeline": [
                                {
                                    "source": {
                                        "stars": {
                                            "ownerId": "5645888260276224"
                                        }
                                    }
                                },
                                {
                                    "filter": "toLowerCase(itemType) == toLowerCase(\"guide\")"
                                },
                                {
                                    "eval": {
                                        "guideId": "itemId"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "merge": {
                            "fields": [
                                "guideId"
                            ],
                            "mappings": {
                                "group": "group",
                                "groupId": "groupId"
                            },
                            "pipeline": [
                                {
                                    "source": {
                                        "groups": {
                                            "items": true
                                        }
                                    }
                                },
                                {
                                    "eval": {
                                        "groupId": "id"
                                    }
                                },
                                {
                                    "unwind": {
                                        "field": "items"
                                    }
                                },
                                {
                                    "filter": "toLowerCase(items.itemType) == toLowerCase(\"guide\")"
                                },
                                {
                                    "eval": {
                                        "guideId": "items.itemId"
                                    }
                                },
                                {
                                    "eval": {
                                        "group.id": "id",
                                        "group.color": "color",
                                        "group.name": "name"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "merge": {
                            "fields": [
                                "appId"
                            ],
                            "mappings": {
                                "app.id": "id",
                                "app.displayName": "displayName",
                                "app.platform": "platform"
                            },
                            "pipeline": [
                                {
                                    "source": {
                                        "apps": null
                                    }
                                },
                                {
                                    "eval": {
                                        "appId": "id"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "eval": {
                            "numOfSteps": "len(steps)",
                            "createdBy": "createdByUser.username",
                            "lastUpdatedBy": "lastUpdatedByUser.username",
                            "group": "group"
                        }
                    }
                ],
                "streamId": "4c836a2c-1c2c-40d5-bc18-904f9f1137c4",
                "params": {
                    "appId": "expandAppIds(\"*\")",
                    "groupIds": [],
                    "starsOnly": false,
                    "ownerId": "5645888260276224"
                },
                "requestId": "GuidesListInit-rId-7f84e0bc-db73-41b6-892d-476bede8328a"
            }
        ]
    });
    return fetchData(guideList);
}
