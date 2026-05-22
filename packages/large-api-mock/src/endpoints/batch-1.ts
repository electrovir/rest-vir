import {HttpMethod, HttpStatus} from '@augment-vir/common';
import {defineEndpoint} from '@rest-vir/api';
import {defineShape} from 'object-shape-tester';
import {structuredRenderDataShape} from 'structured-render';
import {customProps} from '../define-mock-endpoint.js';

export const endpoint1000 = defineEndpoint({
    path: '/reports/item-1000',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1001 = defineEndpoint({
    path: '/reports/item-1001',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1002 = defineEndpoint({
    path: '/reports/item-1002',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1003 = defineEndpoint({
    path: '/reports/item-1003',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1004 = defineEndpoint({
    path: '/reports/item-1004',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1005 = defineEndpoint({
    path: '/reports/item-1005',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1006 = defineEndpoint({
    path: '/reports/item-1006',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1007 = defineEndpoint({
    path: '/reports/item-1007',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1008 = defineEndpoint({
    path: '/reports/item-1008',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1009 = defineEndpoint({
    path: '/reports/item-1009',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1010 = defineEndpoint({
    path: '/reports/item-1010',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1011 = defineEndpoint({
    path: '/reports/item-1011',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1012 = defineEndpoint({
    path: '/reports/item-1012',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1013 = defineEndpoint({
    path: '/reports/item-1013',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1014 = defineEndpoint({
    path: '/reports/item-1014',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1015 = defineEndpoint({
    path: '/reports/item-1015',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1016 = defineEndpoint({
    path: '/reports/item-1016',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1017 = defineEndpoint({
    path: '/reports/item-1017',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1018 = defineEndpoint({
    path: '/reports/item-1018',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1019 = defineEndpoint({
    path: '/reports/item-1019',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1020 = defineEndpoint({
    path: '/reports/item-1020',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1021 = defineEndpoint({
    path: '/reports/item-1021',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1022 = defineEndpoint({
    path: '/reports/item-1022',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1023 = defineEndpoint({
    path: '/reports/item-1023',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1024 = defineEndpoint({
    path: '/reports/item-1024',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1025 = defineEndpoint({
    path: '/reports/item-1025',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1026 = defineEndpoint({
    path: '/reports/item-1026',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1027 = defineEndpoint({
    path: '/reports/item-1027',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1028 = defineEndpoint({
    path: '/reports/item-1028',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1029 = defineEndpoint({
    path: '/reports/item-1029',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1030 = defineEndpoint({
    path: '/reports/item-1030',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1031 = defineEndpoint({
    path: '/reports/item-1031',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1032 = defineEndpoint({
    path: '/reports/item-1032',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1033 = defineEndpoint({
    path: '/reports/item-1033',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1034 = defineEndpoint({
    path: '/reports/item-1034',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1035 = defineEndpoint({
    path: '/reports/item-1035',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1036 = defineEndpoint({
    path: '/reports/item-1036',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1037 = defineEndpoint({
    path: '/reports/item-1037',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1038 = defineEndpoint({
    path: '/reports/item-1038',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1039 = defineEndpoint({
    path: '/reports/item-1039',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1040 = defineEndpoint({
    path: '/reports/item-1040',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1041 = defineEndpoint({
    path: '/reports/item-1041',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1042 = defineEndpoint({
    path: '/reports/item-1042',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1043 = defineEndpoint({
    path: '/reports/item-1043',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1044 = defineEndpoint({
    path: '/reports/item-1044',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1045 = defineEndpoint({
    path: '/reports/item-1045',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1046 = defineEndpoint({
    path: '/reports/item-1046',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1047 = defineEndpoint({
    path: '/reports/item-1047',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1048 = defineEndpoint({
    path: '/reports/item-1048',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1049 = defineEndpoint({
    path: '/reports/item-1049',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1050 = defineEndpoint({
    path: '/reports/item-1050',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1051 = defineEndpoint({
    path: '/reports/item-1051',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1052 = defineEndpoint({
    path: '/reports/item-1052',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1053 = defineEndpoint({
    path: '/reports/item-1053',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1054 = defineEndpoint({
    path: '/reports/item-1054',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1055 = defineEndpoint({
    path: '/reports/item-1055',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1056 = defineEndpoint({
    path: '/reports/item-1056',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1057 = defineEndpoint({
    path: '/reports/item-1057',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1058 = defineEndpoint({
    path: '/reports/item-1058',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1059 = defineEndpoint({
    path: '/reports/item-1059',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1060 = defineEndpoint({
    path: '/reports/item-1060',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1061 = defineEndpoint({
    path: '/reports/item-1061',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1062 = defineEndpoint({
    path: '/reports/item-1062',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1063 = defineEndpoint({
    path: '/reports/item-1063',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1064 = defineEndpoint({
    path: '/reports/item-1064',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1065 = defineEndpoint({
    path: '/reports/item-1065',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1066 = defineEndpoint({
    path: '/reports/item-1066',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1067 = defineEndpoint({
    path: '/reports/item-1067',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1068 = defineEndpoint({
    path: '/reports/item-1068',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1069 = defineEndpoint({
    path: '/reports/item-1069',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1070 = defineEndpoint({
    path: '/reports/item-1070',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1071 = defineEndpoint({
    path: '/reports/item-1071',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1072 = defineEndpoint({
    path: '/reports/item-1072',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1073 = defineEndpoint({
    path: '/reports/item-1073',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1074 = defineEndpoint({
    path: '/reports/item-1074',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1075 = defineEndpoint({
    path: '/reports/item-1075',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1076 = defineEndpoint({
    path: '/reports/item-1076',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1077 = defineEndpoint({
    path: '/reports/item-1077',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1078 = defineEndpoint({
    path: '/reports/item-1078',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1079 = defineEndpoint({
    path: '/reports/item-1079',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1080 = defineEndpoint({
    path: '/reports/item-1080',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1081 = defineEndpoint({
    path: '/reports/item-1081',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1082 = defineEndpoint({
    path: '/reports/item-1082',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1083 = defineEndpoint({
    path: '/reports/item-1083',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1084 = defineEndpoint({
    path: '/reports/item-1084',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1085 = defineEndpoint({
    path: '/reports/item-1085',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1086 = defineEndpoint({
    path: '/reports/item-1086',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1087 = defineEndpoint({
    path: '/reports/item-1087',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1088 = defineEndpoint({
    path: '/reports/item-1088',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1089 = defineEndpoint({
    path: '/reports/item-1089',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1090 = defineEndpoint({
    path: '/reports/item-1090',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1091 = defineEndpoint({
    path: '/reports/item-1091',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1092 = defineEndpoint({
    path: '/reports/item-1092',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1093 = defineEndpoint({
    path: '/reports/item-1093',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1094 = defineEndpoint({
    path: '/reports/item-1094',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1095 = defineEndpoint({
    path: '/reports/item-1095',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1096 = defineEndpoint({
    path: '/reports/item-1096',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1097 = defineEndpoint({
    path: '/reports/item-1097',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1098 = defineEndpoint({
    path: '/reports/item-1098',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1099 = defineEndpoint({
    path: '/reports/item-1099',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1100 = defineEndpoint({
    path: '/reports/item-1100',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1101 = defineEndpoint({
    path: '/reports/item-1101',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1102 = defineEndpoint({
    path: '/reports/item-1102',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1103 = defineEndpoint({
    path: '/reports/item-1103',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1104 = defineEndpoint({
    path: '/reports/item-1104',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1105 = defineEndpoint({
    path: '/reports/item-1105',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1106 = defineEndpoint({
    path: '/reports/item-1106',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1107 = defineEndpoint({
    path: '/reports/item-1107',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1108 = defineEndpoint({
    path: '/reports/item-1108',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1109 = defineEndpoint({
    path: '/reports/item-1109',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1110 = defineEndpoint({
    path: '/reports/item-1110',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1111 = defineEndpoint({
    path: '/reports/item-1111',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1112 = defineEndpoint({
    path: '/reports/item-1112',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1113 = defineEndpoint({
    path: '/reports/item-1113',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1114 = defineEndpoint({
    path: '/reports/item-1114',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1115 = defineEndpoint({
    path: '/reports/item-1115',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1116 = defineEndpoint({
    path: '/reports/item-1116',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1117 = defineEndpoint({
    path: '/reports/item-1117',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1118 = defineEndpoint({
    path: '/reports/item-1118',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1119 = defineEndpoint({
    path: '/reports/item-1119',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1120 = defineEndpoint({
    path: '/reports/item-1120',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1121 = defineEndpoint({
    path: '/reports/item-1121',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1122 = defineEndpoint({
    path: '/reports/item-1122',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1123 = defineEndpoint({
    path: '/reports/item-1123',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1124 = defineEndpoint({
    path: '/reports/item-1124',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1125 = defineEndpoint({
    path: '/reports/item-1125',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1126 = defineEndpoint({
    path: '/reports/item-1126',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1127 = defineEndpoint({
    path: '/reports/item-1127',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1128 = defineEndpoint({
    path: '/reports/item-1128',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1129 = defineEndpoint({
    path: '/reports/item-1129',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1130 = defineEndpoint({
    path: '/reports/item-1130',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1131 = defineEndpoint({
    path: '/reports/item-1131',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1132 = defineEndpoint({
    path: '/reports/item-1132',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1133 = defineEndpoint({
    path: '/reports/item-1133',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1134 = defineEndpoint({
    path: '/reports/item-1134',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1135 = defineEndpoint({
    path: '/reports/item-1135',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1136 = defineEndpoint({
    path: '/reports/item-1136',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1137 = defineEndpoint({
    path: '/reports/item-1137',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1138 = defineEndpoint({
    path: '/reports/item-1138',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1139 = defineEndpoint({
    path: '/reports/item-1139',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1140 = defineEndpoint({
    path: '/reports/item-1140',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1141 = defineEndpoint({
    path: '/reports/item-1141',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1142 = defineEndpoint({
    path: '/reports/item-1142',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1143 = defineEndpoint({
    path: '/reports/item-1143',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1144 = defineEndpoint({
    path: '/reports/item-1144',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1145 = defineEndpoint({
    path: '/reports/item-1145',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1146 = defineEndpoint({
    path: '/reports/item-1146',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1147 = defineEndpoint({
    path: '/reports/item-1147',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1148 = defineEndpoint({
    path: '/reports/item-1148',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1149 = defineEndpoint({
    path: '/reports/item-1149',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1150 = defineEndpoint({
    path: '/reports/item-1150',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1151 = defineEndpoint({
    path: '/reports/item-1151',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1152 = defineEndpoint({
    path: '/reports/item-1152',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1153 = defineEndpoint({
    path: '/reports/item-1153',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1154 = defineEndpoint({
    path: '/reports/item-1154',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1155 = defineEndpoint({
    path: '/reports/item-1155',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1156 = defineEndpoint({
    path: '/reports/item-1156',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1157 = defineEndpoint({
    path: '/reports/item-1157',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1158 = defineEndpoint({
    path: '/reports/item-1158',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1159 = defineEndpoint({
    path: '/reports/item-1159',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1160 = defineEndpoint({
    path: '/reports/item-1160',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1161 = defineEndpoint({
    path: '/reports/item-1161',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1162 = defineEndpoint({
    path: '/reports/item-1162',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1163 = defineEndpoint({
    path: '/reports/item-1163',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1164 = defineEndpoint({
    path: '/reports/item-1164',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1165 = defineEndpoint({
    path: '/reports/item-1165',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1166 = defineEndpoint({
    path: '/reports/item-1166',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1167 = defineEndpoint({
    path: '/reports/item-1167',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1168 = defineEndpoint({
    path: '/reports/item-1168',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1169 = defineEndpoint({
    path: '/reports/item-1169',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1170 = defineEndpoint({
    path: '/reports/item-1170',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1171 = defineEndpoint({
    path: '/reports/item-1171',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1172 = defineEndpoint({
    path: '/reports/item-1172',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1173 = defineEndpoint({
    path: '/reports/item-1173',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1174 = defineEndpoint({
    path: '/reports/item-1174',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1175 = defineEndpoint({
    path: '/reports/item-1175',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1176 = defineEndpoint({
    path: '/reports/item-1176',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1177 = defineEndpoint({
    path: '/reports/item-1177',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1178 = defineEndpoint({
    path: '/reports/item-1178',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1179 = defineEndpoint({
    path: '/reports/item-1179',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1180 = defineEndpoint({
    path: '/reports/item-1180',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1181 = defineEndpoint({
    path: '/reports/item-1181',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1182 = defineEndpoint({
    path: '/reports/item-1182',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1183 = defineEndpoint({
    path: '/reports/item-1183',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1184 = defineEndpoint({
    path: '/reports/item-1184',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1185 = defineEndpoint({
    path: '/reports/item-1185',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1186 = defineEndpoint({
    path: '/reports/item-1186',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1187 = defineEndpoint({
    path: '/reports/item-1187',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1188 = defineEndpoint({
    path: '/reports/item-1188',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1189 = defineEndpoint({
    path: '/reports/item-1189',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1190 = defineEndpoint({
    path: '/reports/item-1190',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1191 = defineEndpoint({
    path: '/reports/item-1191',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1192 = defineEndpoint({
    path: '/reports/item-1192',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1193 = defineEndpoint({
    path: '/reports/item-1193',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1194 = defineEndpoint({
    path: '/reports/item-1194',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1195 = defineEndpoint({
    path: '/reports/item-1195',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1196 = defineEndpoint({
    path: '/reports/item-1196',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1197 = defineEndpoint({
    path: '/reports/item-1197',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1198 = defineEndpoint({
    path: '/reports/item-1198',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1199 = defineEndpoint({
    path: '/reports/item-1199',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1200 = defineEndpoint({
    path: '/reports/item-1200',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1201 = defineEndpoint({
    path: '/reports/item-1201',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1202 = defineEndpoint({
    path: '/reports/item-1202',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1203 = defineEndpoint({
    path: '/reports/item-1203',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1204 = defineEndpoint({
    path: '/reports/item-1204',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1205 = defineEndpoint({
    path: '/reports/item-1205',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1206 = defineEndpoint({
    path: '/reports/item-1206',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1207 = defineEndpoint({
    path: '/reports/item-1207',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1208 = defineEndpoint({
    path: '/reports/item-1208',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1209 = defineEndpoint({
    path: '/reports/item-1209',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1210 = defineEndpoint({
    path: '/reports/item-1210',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1211 = defineEndpoint({
    path: '/reports/item-1211',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1212 = defineEndpoint({
    path: '/reports/item-1212',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1213 = defineEndpoint({
    path: '/reports/item-1213',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1214 = defineEndpoint({
    path: '/reports/item-1214',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1215 = defineEndpoint({
    path: '/reports/item-1215',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1216 = defineEndpoint({
    path: '/reports/item-1216',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1217 = defineEndpoint({
    path: '/reports/item-1217',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1218 = defineEndpoint({
    path: '/reports/item-1218',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1219 = defineEndpoint({
    path: '/reports/item-1219',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1220 = defineEndpoint({
    path: '/reports/item-1220',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1221 = defineEndpoint({
    path: '/reports/item-1221',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1222 = defineEndpoint({
    path: '/reports/item-1222',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1223 = defineEndpoint({
    path: '/reports/item-1223',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1224 = defineEndpoint({
    path: '/reports/item-1224',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1225 = defineEndpoint({
    path: '/reports/item-1225',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1226 = defineEndpoint({
    path: '/reports/item-1226',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1227 = defineEndpoint({
    path: '/reports/item-1227',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1228 = defineEndpoint({
    path: '/reports/item-1228',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1229 = defineEndpoint({
    path: '/reports/item-1229',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1230 = defineEndpoint({
    path: '/reports/item-1230',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1231 = defineEndpoint({
    path: '/reports/item-1231',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1232 = defineEndpoint({
    path: '/reports/item-1232',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1233 = defineEndpoint({
    path: '/reports/item-1233',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1234 = defineEndpoint({
    path: '/reports/item-1234',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1235 = defineEndpoint({
    path: '/reports/item-1235',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1236 = defineEndpoint({
    path: '/reports/item-1236',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1237 = defineEndpoint({
    path: '/reports/item-1237',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1238 = defineEndpoint({
    path: '/reports/item-1238',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1239 = defineEndpoint({
    path: '/reports/item-1239',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1240 = defineEndpoint({
    path: '/reports/item-1240',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1241 = defineEndpoint({
    path: '/reports/item-1241',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1242 = defineEndpoint({
    path: '/reports/item-1242',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1243 = defineEndpoint({
    path: '/reports/item-1243',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1244 = defineEndpoint({
    path: '/reports/item-1244',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1245 = defineEndpoint({
    path: '/reports/item-1245',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1246 = defineEndpoint({
    path: '/reports/item-1246',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1247 = defineEndpoint({
    path: '/reports/item-1247',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1248 = defineEndpoint({
    path: '/reports/item-1248',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1249 = defineEndpoint({
    path: '/reports/item-1249',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1250 = defineEndpoint({
    path: '/reports/item-1250',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1251 = defineEndpoint({
    path: '/reports/item-1251',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1252 = defineEndpoint({
    path: '/reports/item-1252',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1253 = defineEndpoint({
    path: '/reports/item-1253',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1254 = defineEndpoint({
    path: '/reports/item-1254',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1255 = defineEndpoint({
    path: '/reports/item-1255',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1256 = defineEndpoint({
    path: '/reports/item-1256',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1257 = defineEndpoint({
    path: '/reports/item-1257',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1258 = defineEndpoint({
    path: '/reports/item-1258',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1259 = defineEndpoint({
    path: '/reports/item-1259',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1260 = defineEndpoint({
    path: '/reports/item-1260',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1261 = defineEndpoint({
    path: '/reports/item-1261',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1262 = defineEndpoint({
    path: '/reports/item-1262',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1263 = defineEndpoint({
    path: '/reports/item-1263',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1264 = defineEndpoint({
    path: '/reports/item-1264',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1265 = defineEndpoint({
    path: '/reports/item-1265',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1266 = defineEndpoint({
    path: '/reports/item-1266',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1267 = defineEndpoint({
    path: '/reports/item-1267',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1268 = defineEndpoint({
    path: '/reports/item-1268',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1269 = defineEndpoint({
    path: '/reports/item-1269',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1270 = defineEndpoint({
    path: '/reports/item-1270',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1271 = defineEndpoint({
    path: '/reports/item-1271',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1272 = defineEndpoint({
    path: '/reports/item-1272',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1273 = defineEndpoint({
    path: '/reports/item-1273',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1274 = defineEndpoint({
    path: '/reports/item-1274',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1275 = defineEndpoint({
    path: '/reports/item-1275',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1276 = defineEndpoint({
    path: '/reports/item-1276',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1277 = defineEndpoint({
    path: '/reports/item-1277',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1278 = defineEndpoint({
    path: '/reports/item-1278',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1279 = defineEndpoint({
    path: '/reports/item-1279',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1280 = defineEndpoint({
    path: '/reports/item-1280',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1281 = defineEndpoint({
    path: '/reports/item-1281',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1282 = defineEndpoint({
    path: '/reports/item-1282',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1283 = defineEndpoint({
    path: '/reports/item-1283',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1284 = defineEndpoint({
    path: '/reports/item-1284',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1285 = defineEndpoint({
    path: '/reports/item-1285',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1286 = defineEndpoint({
    path: '/reports/item-1286',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1287 = defineEndpoint({
    path: '/reports/item-1287',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1288 = defineEndpoint({
    path: '/reports/item-1288',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1289 = defineEndpoint({
    path: '/reports/item-1289',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1290 = defineEndpoint({
    path: '/reports/item-1290',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1291 = defineEndpoint({
    path: '/reports/item-1291',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1292 = defineEndpoint({
    path: '/reports/item-1292',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1293 = defineEndpoint({
    path: '/reports/item-1293',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1294 = defineEndpoint({
    path: '/reports/item-1294',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1295 = defineEndpoint({
    path: '/reports/item-1295',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1296 = defineEndpoint({
    path: '/reports/item-1296',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1297 = defineEndpoint({
    path: '/reports/item-1297',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1298 = defineEndpoint({
    path: '/reports/item-1298',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1299 = defineEndpoint({
    path: '/reports/item-1299',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1300 = defineEndpoint({
    path: '/reports/item-1300',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1301 = defineEndpoint({
    path: '/reports/item-1301',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1302 = defineEndpoint({
    path: '/reports/item-1302',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1303 = defineEndpoint({
    path: '/reports/item-1303',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1304 = defineEndpoint({
    path: '/reports/item-1304',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1305 = defineEndpoint({
    path: '/reports/item-1305',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1306 = defineEndpoint({
    path: '/reports/item-1306',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1307 = defineEndpoint({
    path: '/reports/item-1307',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1308 = defineEndpoint({
    path: '/reports/item-1308',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1309 = defineEndpoint({
    path: '/reports/item-1309',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1310 = defineEndpoint({
    path: '/reports/item-1310',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1311 = defineEndpoint({
    path: '/reports/item-1311',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1312 = defineEndpoint({
    path: '/reports/item-1312',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1313 = defineEndpoint({
    path: '/reports/item-1313',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1314 = defineEndpoint({
    path: '/reports/item-1314',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1315 = defineEndpoint({
    path: '/reports/item-1315',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1316 = defineEndpoint({
    path: '/reports/item-1316',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1317 = defineEndpoint({
    path: '/reports/item-1317',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1318 = defineEndpoint({
    path: '/reports/item-1318',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1319 = defineEndpoint({
    path: '/reports/item-1319',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1320 = defineEndpoint({
    path: '/reports/item-1320',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1321 = defineEndpoint({
    path: '/reports/item-1321',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1322 = defineEndpoint({
    path: '/reports/item-1322',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1323 = defineEndpoint({
    path: '/reports/item-1323',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1324 = defineEndpoint({
    path: '/reports/item-1324',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1325 = defineEndpoint({
    path: '/reports/item-1325',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1326 = defineEndpoint({
    path: '/reports/item-1326',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1327 = defineEndpoint({
    path: '/reports/item-1327',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1328 = defineEndpoint({
    path: '/reports/item-1328',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1329 = defineEndpoint({
    path: '/reports/item-1329',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1330 = defineEndpoint({
    path: '/reports/item-1330',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1331 = defineEndpoint({
    path: '/reports/item-1331',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1332 = defineEndpoint({
    path: '/reports/item-1332',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1333 = defineEndpoint({
    path: '/reports/item-1333',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1334 = defineEndpoint({
    path: '/reports/item-1334',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1335 = defineEndpoint({
    path: '/reports/item-1335',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1336 = defineEndpoint({
    path: '/reports/item-1336',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1337 = defineEndpoint({
    path: '/reports/item-1337',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1338 = defineEndpoint({
    path: '/reports/item-1338',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1339 = defineEndpoint({
    path: '/reports/item-1339',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1340 = defineEndpoint({
    path: '/reports/item-1340',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1341 = defineEndpoint({
    path: '/reports/item-1341',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1342 = defineEndpoint({
    path: '/reports/item-1342',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1343 = defineEndpoint({
    path: '/reports/item-1343',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1344 = defineEndpoint({
    path: '/reports/item-1344',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1345 = defineEndpoint({
    path: '/reports/item-1345',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1346 = defineEndpoint({
    path: '/reports/item-1346',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1347 = defineEndpoint({
    path: '/reports/item-1347',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1348 = defineEndpoint({
    path: '/reports/item-1348',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1349 = defineEndpoint({
    path: '/reports/item-1349',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1350 = defineEndpoint({
    path: '/reports/item-1350',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1351 = defineEndpoint({
    path: '/reports/item-1351',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1352 = defineEndpoint({
    path: '/reports/item-1352',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1353 = defineEndpoint({
    path: '/reports/item-1353',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1354 = defineEndpoint({
    path: '/reports/item-1354',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1355 = defineEndpoint({
    path: '/reports/item-1355',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1356 = defineEndpoint({
    path: '/reports/item-1356',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1357 = defineEndpoint({
    path: '/reports/item-1357',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1358 = defineEndpoint({
    path: '/reports/item-1358',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1359 = defineEndpoint({
    path: '/reports/item-1359',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1360 = defineEndpoint({
    path: '/reports/item-1360',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1361 = defineEndpoint({
    path: '/reports/item-1361',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1362 = defineEndpoint({
    path: '/reports/item-1362',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1363 = defineEndpoint({
    path: '/reports/item-1363',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1364 = defineEndpoint({
    path: '/reports/item-1364',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1365 = defineEndpoint({
    path: '/reports/item-1365',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1366 = defineEndpoint({
    path: '/reports/item-1366',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1367 = defineEndpoint({
    path: '/reports/item-1367',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1368 = defineEndpoint({
    path: '/reports/item-1368',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1369 = defineEndpoint({
    path: '/reports/item-1369',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1370 = defineEndpoint({
    path: '/reports/item-1370',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1371 = defineEndpoint({
    path: '/reports/item-1371',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1372 = defineEndpoint({
    path: '/reports/item-1372',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1373 = defineEndpoint({
    path: '/reports/item-1373',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1374 = defineEndpoint({
    path: '/reports/item-1374',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1375 = defineEndpoint({
    path: '/reports/item-1375',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1376 = defineEndpoint({
    path: '/reports/item-1376',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1377 = defineEndpoint({
    path: '/reports/item-1377',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1378 = defineEndpoint({
    path: '/reports/item-1378',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1379 = defineEndpoint({
    path: '/reports/item-1379',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1380 = defineEndpoint({
    path: '/reports/item-1380',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1381 = defineEndpoint({
    path: '/reports/item-1381',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1382 = defineEndpoint({
    path: '/reports/item-1382',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1383 = defineEndpoint({
    path: '/reports/item-1383',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1384 = defineEndpoint({
    path: '/reports/item-1384',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1385 = defineEndpoint({
    path: '/reports/item-1385',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1386 = defineEndpoint({
    path: '/reports/item-1386',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1387 = defineEndpoint({
    path: '/reports/item-1387',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1388 = defineEndpoint({
    path: '/reports/item-1388',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1389 = defineEndpoint({
    path: '/reports/item-1389',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1390 = defineEndpoint({
    path: '/reports/item-1390',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1391 = defineEndpoint({
    path: '/reports/item-1391',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1392 = defineEndpoint({
    path: '/reports/item-1392',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1393 = defineEndpoint({
    path: '/reports/item-1393',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1394 = defineEndpoint({
    path: '/reports/item-1394',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1395 = defineEndpoint({
    path: '/reports/item-1395',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1396 = defineEndpoint({
    path: '/reports/item-1396',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1397 = defineEndpoint({
    path: '/reports/item-1397',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1398 = defineEndpoint({
    path: '/reports/item-1398',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1399 = defineEndpoint({
    path: '/reports/item-1399',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1400 = defineEndpoint({
    path: '/reports/item-1400',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1401 = defineEndpoint({
    path: '/reports/item-1401',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1402 = defineEndpoint({
    path: '/reports/item-1402',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1403 = defineEndpoint({
    path: '/reports/item-1403',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1404 = defineEndpoint({
    path: '/reports/item-1404',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1405 = defineEndpoint({
    path: '/reports/item-1405',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1406 = defineEndpoint({
    path: '/reports/item-1406',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1407 = defineEndpoint({
    path: '/reports/item-1407',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1408 = defineEndpoint({
    path: '/reports/item-1408',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1409 = defineEndpoint({
    path: '/reports/item-1409',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1410 = defineEndpoint({
    path: '/reports/item-1410',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1411 = defineEndpoint({
    path: '/reports/item-1411',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1412 = defineEndpoint({
    path: '/reports/item-1412',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1413 = defineEndpoint({
    path: '/reports/item-1413',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1414 = defineEndpoint({
    path: '/reports/item-1414',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1415 = defineEndpoint({
    path: '/reports/item-1415',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1416 = defineEndpoint({
    path: '/reports/item-1416',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1417 = defineEndpoint({
    path: '/reports/item-1417',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1418 = defineEndpoint({
    path: '/reports/item-1418',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1419 = defineEndpoint({
    path: '/reports/item-1419',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1420 = defineEndpoint({
    path: '/reports/item-1420',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1421 = defineEndpoint({
    path: '/reports/item-1421',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1422 = defineEndpoint({
    path: '/reports/item-1422',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1423 = defineEndpoint({
    path: '/reports/item-1423',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1424 = defineEndpoint({
    path: '/reports/item-1424',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1425 = defineEndpoint({
    path: '/reports/item-1425',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1426 = defineEndpoint({
    path: '/reports/item-1426',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1427 = defineEndpoint({
    path: '/reports/item-1427',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1428 = defineEndpoint({
    path: '/reports/item-1428',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1429 = defineEndpoint({
    path: '/reports/item-1429',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1430 = defineEndpoint({
    path: '/reports/item-1430',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1431 = defineEndpoint({
    path: '/reports/item-1431',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1432 = defineEndpoint({
    path: '/reports/item-1432',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1433 = defineEndpoint({
    path: '/reports/item-1433',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1434 = defineEndpoint({
    path: '/reports/item-1434',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1435 = defineEndpoint({
    path: '/reports/item-1435',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1436 = defineEndpoint({
    path: '/reports/item-1436',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1437 = defineEndpoint({
    path: '/reports/item-1437',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1438 = defineEndpoint({
    path: '/reports/item-1438',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1439 = defineEndpoint({
    path: '/reports/item-1439',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1440 = defineEndpoint({
    path: '/reports/item-1440',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1441 = defineEndpoint({
    path: '/reports/item-1441',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1442 = defineEndpoint({
    path: '/reports/item-1442',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1443 = defineEndpoint({
    path: '/reports/item-1443',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1444 = defineEndpoint({
    path: '/reports/item-1444',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1445 = defineEndpoint({
    path: '/reports/item-1445',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1446 = defineEndpoint({
    path: '/reports/item-1446',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1447 = defineEndpoint({
    path: '/reports/item-1447',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1448 = defineEndpoint({
    path: '/reports/item-1448',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1449 = defineEndpoint({
    path: '/reports/item-1449',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1450 = defineEndpoint({
    path: '/reports/item-1450',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1451 = defineEndpoint({
    path: '/reports/item-1451',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1452 = defineEndpoint({
    path: '/reports/item-1452',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1453 = defineEndpoint({
    path: '/reports/item-1453',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1454 = defineEndpoint({
    path: '/reports/item-1454',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1455 = defineEndpoint({
    path: '/reports/item-1455',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1456 = defineEndpoint({
    path: '/reports/item-1456',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1457 = defineEndpoint({
    path: '/reports/item-1457',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1458 = defineEndpoint({
    path: '/reports/item-1458',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1459 = defineEndpoint({
    path: '/reports/item-1459',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1460 = defineEndpoint({
    path: '/reports/item-1460',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1461 = defineEndpoint({
    path: '/reports/item-1461',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1462 = defineEndpoint({
    path: '/reports/item-1462',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1463 = defineEndpoint({
    path: '/reports/item-1463',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1464 = defineEndpoint({
    path: '/reports/item-1464',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1465 = defineEndpoint({
    path: '/reports/item-1465',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1466 = defineEndpoint({
    path: '/reports/item-1466',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1467 = defineEndpoint({
    path: '/reports/item-1467',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1468 = defineEndpoint({
    path: '/reports/item-1468',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1469 = defineEndpoint({
    path: '/reports/item-1469',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1470 = defineEndpoint({
    path: '/reports/item-1470',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1471 = defineEndpoint({
    path: '/reports/item-1471',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1472 = defineEndpoint({
    path: '/reports/item-1472',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1473 = defineEndpoint({
    path: '/reports/item-1473',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1474 = defineEndpoint({
    path: '/reports/item-1474',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1475 = defineEndpoint({
    path: '/reports/item-1475',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1476 = defineEndpoint({
    path: '/reports/item-1476',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1477 = defineEndpoint({
    path: '/reports/item-1477',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1478 = defineEndpoint({
    path: '/reports/item-1478',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1479 = defineEndpoint({
    path: '/reports/item-1479',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1480 = defineEndpoint({
    path: '/reports/item-1480',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1481 = defineEndpoint({
    path: '/reports/item-1481',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1482 = defineEndpoint({
    path: '/reports/item-1482',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1483 = defineEndpoint({
    path: '/reports/item-1483',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1484 = defineEndpoint({
    path: '/reports/item-1484',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1485 = defineEndpoint({
    path: '/reports/item-1485',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1486 = defineEndpoint({
    path: '/reports/item-1486',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1487 = defineEndpoint({
    path: '/reports/item-1487',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1488 = defineEndpoint({
    path: '/reports/item-1488',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1489 = defineEndpoint({
    path: '/reports/item-1489',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1490 = defineEndpoint({
    path: '/reports/item-1490',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1491 = defineEndpoint({
    path: '/reports/item-1491',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1492 = defineEndpoint({
    path: '/reports/item-1492',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1493 = defineEndpoint({
    path: '/reports/item-1493',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1494 = defineEndpoint({
    path: '/reports/item-1494',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1495 = defineEndpoint({
    path: '/reports/item-1495',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1496 = defineEndpoint({
    path: '/reports/item-1496',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1497 = defineEndpoint({
    path: '/reports/item-1497',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1498 = defineEndpoint({
    path: '/reports/item-1498',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1499 = defineEndpoint({
    path: '/reports/item-1499',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1500 = defineEndpoint({
    path: '/reports/item-1500',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1501 = defineEndpoint({
    path: '/reports/item-1501',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1502 = defineEndpoint({
    path: '/reports/item-1502',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1503 = defineEndpoint({
    path: '/reports/item-1503',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1504 = defineEndpoint({
    path: '/reports/item-1504',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1505 = defineEndpoint({
    path: '/reports/item-1505',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1506 = defineEndpoint({
    path: '/reports/item-1506',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1507 = defineEndpoint({
    path: '/reports/item-1507',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1508 = defineEndpoint({
    path: '/reports/item-1508',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1509 = defineEndpoint({
    path: '/reports/item-1509',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1510 = defineEndpoint({
    path: '/reports/item-1510',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1511 = defineEndpoint({
    path: '/reports/item-1511',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1512 = defineEndpoint({
    path: '/reports/item-1512',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1513 = defineEndpoint({
    path: '/reports/item-1513',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1514 = defineEndpoint({
    path: '/reports/item-1514',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1515 = defineEndpoint({
    path: '/reports/item-1515',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1516 = defineEndpoint({
    path: '/reports/item-1516',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1517 = defineEndpoint({
    path: '/reports/item-1517',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1518 = defineEndpoint({
    path: '/reports/item-1518',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1519 = defineEndpoint({
    path: '/reports/item-1519',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1520 = defineEndpoint({
    path: '/reports/item-1520',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1521 = defineEndpoint({
    path: '/reports/item-1521',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1522 = defineEndpoint({
    path: '/reports/item-1522',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1523 = defineEndpoint({
    path: '/reports/item-1523',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1524 = defineEndpoint({
    path: '/reports/item-1524',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1525 = defineEndpoint({
    path: '/reports/item-1525',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1526 = defineEndpoint({
    path: '/reports/item-1526',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1527 = defineEndpoint({
    path: '/reports/item-1527',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1528 = defineEndpoint({
    path: '/reports/item-1528',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1529 = defineEndpoint({
    path: '/reports/item-1529',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1530 = defineEndpoint({
    path: '/reports/item-1530',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1531 = defineEndpoint({
    path: '/reports/item-1531',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1532 = defineEndpoint({
    path: '/reports/item-1532',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1533 = defineEndpoint({
    path: '/reports/item-1533',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1534 = defineEndpoint({
    path: '/reports/item-1534',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1535 = defineEndpoint({
    path: '/reports/item-1535',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1536 = defineEndpoint({
    path: '/reports/item-1536',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1537 = defineEndpoint({
    path: '/reports/item-1537',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1538 = defineEndpoint({
    path: '/reports/item-1538',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1539 = defineEndpoint({
    path: '/reports/item-1539',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1540 = defineEndpoint({
    path: '/reports/item-1540',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1541 = defineEndpoint({
    path: '/reports/item-1541',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1542 = defineEndpoint({
    path: '/reports/item-1542',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1543 = defineEndpoint({
    path: '/reports/item-1543',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1544 = defineEndpoint({
    path: '/reports/item-1544',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1545 = defineEndpoint({
    path: '/reports/item-1545',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1546 = defineEndpoint({
    path: '/reports/item-1546',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1547 = defineEndpoint({
    path: '/reports/item-1547',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1548 = defineEndpoint({
    path: '/reports/item-1548',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1549 = defineEndpoint({
    path: '/reports/item-1549',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1550 = defineEndpoint({
    path: '/reports/item-1550',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1551 = defineEndpoint({
    path: '/reports/item-1551',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1552 = defineEndpoint({
    path: '/reports/item-1552',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1553 = defineEndpoint({
    path: '/reports/item-1553',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1554 = defineEndpoint({
    path: '/reports/item-1554',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1555 = defineEndpoint({
    path: '/reports/item-1555',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1556 = defineEndpoint({
    path: '/reports/item-1556',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1557 = defineEndpoint({
    path: '/reports/item-1557',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1558 = defineEndpoint({
    path: '/reports/item-1558',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1559 = defineEndpoint({
    path: '/reports/item-1559',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1560 = defineEndpoint({
    path: '/reports/item-1560',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1561 = defineEndpoint({
    path: '/reports/item-1561',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1562 = defineEndpoint({
    path: '/reports/item-1562',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1563 = defineEndpoint({
    path: '/reports/item-1563',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1564 = defineEndpoint({
    path: '/reports/item-1564',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1565 = defineEndpoint({
    path: '/reports/item-1565',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1566 = defineEndpoint({
    path: '/reports/item-1566',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1567 = defineEndpoint({
    path: '/reports/item-1567',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1568 = defineEndpoint({
    path: '/reports/item-1568',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1569 = defineEndpoint({
    path: '/reports/item-1569',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1570 = defineEndpoint({
    path: '/reports/item-1570',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1571 = defineEndpoint({
    path: '/reports/item-1571',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1572 = defineEndpoint({
    path: '/reports/item-1572',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1573 = defineEndpoint({
    path: '/reports/item-1573',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1574 = defineEndpoint({
    path: '/reports/item-1574',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1575 = defineEndpoint({
    path: '/reports/item-1575',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1576 = defineEndpoint({
    path: '/reports/item-1576',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1577 = defineEndpoint({
    path: '/reports/item-1577',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1578 = defineEndpoint({
    path: '/reports/item-1578',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1579 = defineEndpoint({
    path: '/reports/item-1579',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1580 = defineEndpoint({
    path: '/reports/item-1580',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1581 = defineEndpoint({
    path: '/reports/item-1581',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1582 = defineEndpoint({
    path: '/reports/item-1582',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1583 = defineEndpoint({
    path: '/reports/item-1583',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1584 = defineEndpoint({
    path: '/reports/item-1584',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1585 = defineEndpoint({
    path: '/reports/item-1585',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1586 = defineEndpoint({
    path: '/reports/item-1586',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1587 = defineEndpoint({
    path: '/reports/item-1587',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1588 = defineEndpoint({
    path: '/reports/item-1588',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1589 = defineEndpoint({
    path: '/reports/item-1589',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1590 = defineEndpoint({
    path: '/reports/item-1590',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1591 = defineEndpoint({
    path: '/reports/item-1591',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1592 = defineEndpoint({
    path: '/reports/item-1592',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1593 = defineEndpoint({
    path: '/reports/item-1593',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1594 = defineEndpoint({
    path: '/reports/item-1594',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1595 = defineEndpoint({
    path: '/reports/item-1595',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1596 = defineEndpoint({
    path: '/reports/item-1596',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1597 = defineEndpoint({
    path: '/reports/item-1597',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1598 = defineEndpoint({
    path: '/reports/item-1598',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1599 = defineEndpoint({
    path: '/reports/item-1599',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1600 = defineEndpoint({
    path: '/reports/item-1600',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1601 = defineEndpoint({
    path: '/reports/item-1601',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1602 = defineEndpoint({
    path: '/reports/item-1602',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1603 = defineEndpoint({
    path: '/reports/item-1603',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1604 = defineEndpoint({
    path: '/reports/item-1604',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1605 = defineEndpoint({
    path: '/reports/item-1605',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1606 = defineEndpoint({
    path: '/reports/item-1606',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1607 = defineEndpoint({
    path: '/reports/item-1607',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1608 = defineEndpoint({
    path: '/reports/item-1608',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1609 = defineEndpoint({
    path: '/reports/item-1609',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1610 = defineEndpoint({
    path: '/reports/item-1610',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1611 = defineEndpoint({
    path: '/reports/item-1611',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1612 = defineEndpoint({
    path: '/reports/item-1612',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1613 = defineEndpoint({
    path: '/reports/item-1613',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1614 = defineEndpoint({
    path: '/reports/item-1614',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1615 = defineEndpoint({
    path: '/reports/item-1615',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1616 = defineEndpoint({
    path: '/reports/item-1616',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1617 = defineEndpoint({
    path: '/reports/item-1617',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1618 = defineEndpoint({
    path: '/reports/item-1618',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1619 = defineEndpoint({
    path: '/reports/item-1619',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1620 = defineEndpoint({
    path: '/reports/item-1620',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1621 = defineEndpoint({
    path: '/reports/item-1621',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1622 = defineEndpoint({
    path: '/reports/item-1622',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1623 = defineEndpoint({
    path: '/reports/item-1623',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1624 = defineEndpoint({
    path: '/reports/item-1624',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1625 = defineEndpoint({
    path: '/reports/item-1625',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1626 = defineEndpoint({
    path: '/reports/item-1626',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1627 = defineEndpoint({
    path: '/reports/item-1627',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1628 = defineEndpoint({
    path: '/reports/item-1628',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1629 = defineEndpoint({
    path: '/reports/item-1629',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1630 = defineEndpoint({
    path: '/reports/item-1630',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1631 = defineEndpoint({
    path: '/reports/item-1631',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1632 = defineEndpoint({
    path: '/reports/item-1632',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1633 = defineEndpoint({
    path: '/reports/item-1633',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1634 = defineEndpoint({
    path: '/reports/item-1634',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1635 = defineEndpoint({
    path: '/reports/item-1635',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1636 = defineEndpoint({
    path: '/reports/item-1636',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1637 = defineEndpoint({
    path: '/reports/item-1637',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1638 = defineEndpoint({
    path: '/reports/item-1638',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1639 = defineEndpoint({
    path: '/reports/item-1639',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1640 = defineEndpoint({
    path: '/reports/item-1640',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1641 = defineEndpoint({
    path: '/reports/item-1641',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1642 = defineEndpoint({
    path: '/reports/item-1642',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1643 = defineEndpoint({
    path: '/reports/item-1643',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1644 = defineEndpoint({
    path: '/reports/item-1644',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1645 = defineEndpoint({
    path: '/reports/item-1645',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1646 = defineEndpoint({
    path: '/reports/item-1646',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1647 = defineEndpoint({
    path: '/reports/item-1647',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1648 = defineEndpoint({
    path: '/reports/item-1648',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1649 = defineEndpoint({
    path: '/reports/item-1649',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1650 = defineEndpoint({
    path: '/reports/item-1650',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1651 = defineEndpoint({
    path: '/reports/item-1651',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1652 = defineEndpoint({
    path: '/reports/item-1652',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1653 = defineEndpoint({
    path: '/reports/item-1653',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1654 = defineEndpoint({
    path: '/reports/item-1654',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1655 = defineEndpoint({
    path: '/reports/item-1655',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1656 = defineEndpoint({
    path: '/reports/item-1656',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1657 = defineEndpoint({
    path: '/reports/item-1657',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1658 = defineEndpoint({
    path: '/reports/item-1658',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1659 = defineEndpoint({
    path: '/reports/item-1659',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1660 = defineEndpoint({
    path: '/reports/item-1660',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1661 = defineEndpoint({
    path: '/reports/item-1661',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1662 = defineEndpoint({
    path: '/reports/item-1662',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1663 = defineEndpoint({
    path: '/reports/item-1663',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1664 = defineEndpoint({
    path: '/reports/item-1664',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1665 = defineEndpoint({
    path: '/reports/item-1665',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1666 = defineEndpoint({
    path: '/reports/item-1666',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1667 = defineEndpoint({
    path: '/reports/item-1667',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1668 = defineEndpoint({
    path: '/reports/item-1668',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1669 = defineEndpoint({
    path: '/reports/item-1669',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1670 = defineEndpoint({
    path: '/reports/item-1670',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1671 = defineEndpoint({
    path: '/reports/item-1671',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1672 = defineEndpoint({
    path: '/reports/item-1672',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1673 = defineEndpoint({
    path: '/reports/item-1673',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1674 = defineEndpoint({
    path: '/reports/item-1674',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1675 = defineEndpoint({
    path: '/reports/item-1675',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1676 = defineEndpoint({
    path: '/reports/item-1676',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1677 = defineEndpoint({
    path: '/reports/item-1677',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1678 = defineEndpoint({
    path: '/reports/item-1678',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1679 = defineEndpoint({
    path: '/reports/item-1679',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1680 = defineEndpoint({
    path: '/reports/item-1680',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1681 = defineEndpoint({
    path: '/reports/item-1681',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1682 = defineEndpoint({
    path: '/reports/item-1682',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1683 = defineEndpoint({
    path: '/reports/item-1683',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1684 = defineEndpoint({
    path: '/reports/item-1684',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1685 = defineEndpoint({
    path: '/reports/item-1685',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1686 = defineEndpoint({
    path: '/reports/item-1686',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1687 = defineEndpoint({
    path: '/reports/item-1687',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1688 = defineEndpoint({
    path: '/reports/item-1688',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1689 = defineEndpoint({
    path: '/reports/item-1689',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1690 = defineEndpoint({
    path: '/reports/item-1690',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1691 = defineEndpoint({
    path: '/reports/item-1691',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1692 = defineEndpoint({
    path: '/reports/item-1692',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1693 = defineEndpoint({
    path: '/reports/item-1693',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1694 = defineEndpoint({
    path: '/reports/item-1694',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1695 = defineEndpoint({
    path: '/reports/item-1695',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1696 = defineEndpoint({
    path: '/reports/item-1696',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1697 = defineEndpoint({
    path: '/reports/item-1697',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1698 = defineEndpoint({
    path: '/reports/item-1698',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1699 = defineEndpoint({
    path: '/reports/item-1699',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1700 = defineEndpoint({
    path: '/reports/item-1700',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1701 = defineEndpoint({
    path: '/reports/item-1701',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1702 = defineEndpoint({
    path: '/reports/item-1702',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1703 = defineEndpoint({
    path: '/reports/item-1703',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1704 = defineEndpoint({
    path: '/reports/item-1704',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1705 = defineEndpoint({
    path: '/reports/item-1705',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1706 = defineEndpoint({
    path: '/reports/item-1706',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1707 = defineEndpoint({
    path: '/reports/item-1707',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1708 = defineEndpoint({
    path: '/reports/item-1708',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1709 = defineEndpoint({
    path: '/reports/item-1709',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1710 = defineEndpoint({
    path: '/reports/item-1710',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1711 = defineEndpoint({
    path: '/reports/item-1711',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1712 = defineEndpoint({
    path: '/reports/item-1712',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1713 = defineEndpoint({
    path: '/reports/item-1713',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1714 = defineEndpoint({
    path: '/reports/item-1714',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1715 = defineEndpoint({
    path: '/reports/item-1715',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1716 = defineEndpoint({
    path: '/reports/item-1716',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1717 = defineEndpoint({
    path: '/reports/item-1717',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1718 = defineEndpoint({
    path: '/reports/item-1718',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1719 = defineEndpoint({
    path: '/reports/item-1719',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1720 = defineEndpoint({
    path: '/reports/item-1720',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1721 = defineEndpoint({
    path: '/reports/item-1721',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1722 = defineEndpoint({
    path: '/reports/item-1722',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1723 = defineEndpoint({
    path: '/reports/item-1723',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1724 = defineEndpoint({
    path: '/reports/item-1724',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1725 = defineEndpoint({
    path: '/reports/item-1725',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1726 = defineEndpoint({
    path: '/reports/item-1726',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1727 = defineEndpoint({
    path: '/reports/item-1727',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1728 = defineEndpoint({
    path: '/reports/item-1728',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1729 = defineEndpoint({
    path: '/reports/item-1729',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1730 = defineEndpoint({
    path: '/reports/item-1730',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1731 = defineEndpoint({
    path: '/reports/item-1731',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1732 = defineEndpoint({
    path: '/reports/item-1732',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1733 = defineEndpoint({
    path: '/reports/item-1733',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1734 = defineEndpoint({
    path: '/reports/item-1734',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1735 = defineEndpoint({
    path: '/reports/item-1735',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1736 = defineEndpoint({
    path: '/reports/item-1736',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1737 = defineEndpoint({
    path: '/reports/item-1737',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1738 = defineEndpoint({
    path: '/reports/item-1738',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1739 = defineEndpoint({
    path: '/reports/item-1739',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1740 = defineEndpoint({
    path: '/reports/item-1740',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1741 = defineEndpoint({
    path: '/reports/item-1741',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1742 = defineEndpoint({
    path: '/reports/item-1742',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1743 = defineEndpoint({
    path: '/reports/item-1743',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1744 = defineEndpoint({
    path: '/reports/item-1744',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1745 = defineEndpoint({
    path: '/reports/item-1745',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1746 = defineEndpoint({
    path: '/reports/item-1746',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1747 = defineEndpoint({
    path: '/reports/item-1747',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1748 = defineEndpoint({
    path: '/reports/item-1748',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1749 = defineEndpoint({
    path: '/reports/item-1749',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1750 = defineEndpoint({
    path: '/reports/item-1750',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1751 = defineEndpoint({
    path: '/reports/item-1751',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1752 = defineEndpoint({
    path: '/reports/item-1752',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1753 = defineEndpoint({
    path: '/reports/item-1753',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1754 = defineEndpoint({
    path: '/reports/item-1754',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1755 = defineEndpoint({
    path: '/reports/item-1755',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1756 = defineEndpoint({
    path: '/reports/item-1756',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1757 = defineEndpoint({
    path: '/reports/item-1757',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1758 = defineEndpoint({
    path: '/reports/item-1758',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1759 = defineEndpoint({
    path: '/reports/item-1759',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1760 = defineEndpoint({
    path: '/reports/item-1760',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1761 = defineEndpoint({
    path: '/reports/item-1761',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1762 = defineEndpoint({
    path: '/reports/item-1762',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1763 = defineEndpoint({
    path: '/reports/item-1763',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1764 = defineEndpoint({
    path: '/reports/item-1764',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1765 = defineEndpoint({
    path: '/reports/item-1765',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1766 = defineEndpoint({
    path: '/reports/item-1766',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1767 = defineEndpoint({
    path: '/reports/item-1767',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1768 = defineEndpoint({
    path: '/reports/item-1768',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1769 = defineEndpoint({
    path: '/reports/item-1769',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1770 = defineEndpoint({
    path: '/reports/item-1770',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1771 = defineEndpoint({
    path: '/reports/item-1771',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1772 = defineEndpoint({
    path: '/reports/item-1772',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1773 = defineEndpoint({
    path: '/reports/item-1773',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1774 = defineEndpoint({
    path: '/reports/item-1774',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1775 = defineEndpoint({
    path: '/reports/item-1775',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1776 = defineEndpoint({
    path: '/reports/item-1776',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1777 = defineEndpoint({
    path: '/reports/item-1777',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1778 = defineEndpoint({
    path: '/reports/item-1778',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1779 = defineEndpoint({
    path: '/reports/item-1779',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1780 = defineEndpoint({
    path: '/reports/item-1780',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1781 = defineEndpoint({
    path: '/reports/item-1781',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1782 = defineEndpoint({
    path: '/reports/item-1782',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1783 = defineEndpoint({
    path: '/reports/item-1783',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1784 = defineEndpoint({
    path: '/reports/item-1784',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1785 = defineEndpoint({
    path: '/reports/item-1785',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1786 = defineEndpoint({
    path: '/reports/item-1786',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1787 = defineEndpoint({
    path: '/reports/item-1787',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1788 = defineEndpoint({
    path: '/reports/item-1788',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1789 = defineEndpoint({
    path: '/reports/item-1789',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1790 = defineEndpoint({
    path: '/reports/item-1790',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1791 = defineEndpoint({
    path: '/reports/item-1791',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1792 = defineEndpoint({
    path: '/reports/item-1792',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1793 = defineEndpoint({
    path: '/reports/item-1793',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1794 = defineEndpoint({
    path: '/reports/item-1794',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1795 = defineEndpoint({
    path: '/reports/item-1795',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1796 = defineEndpoint({
    path: '/reports/item-1796',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1797 = defineEndpoint({
    path: '/reports/item-1797',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1798 = defineEndpoint({
    path: '/reports/item-1798',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1799 = defineEndpoint({
    path: '/reports/item-1799',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1800 = defineEndpoint({
    path: '/reports/item-1800',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1801 = defineEndpoint({
    path: '/reports/item-1801',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1802 = defineEndpoint({
    path: '/reports/item-1802',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1803 = defineEndpoint({
    path: '/reports/item-1803',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1804 = defineEndpoint({
    path: '/reports/item-1804',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1805 = defineEndpoint({
    path: '/reports/item-1805',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1806 = defineEndpoint({
    path: '/reports/item-1806',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1807 = defineEndpoint({
    path: '/reports/item-1807',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1808 = defineEndpoint({
    path: '/reports/item-1808',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1809 = defineEndpoint({
    path: '/reports/item-1809',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1810 = defineEndpoint({
    path: '/reports/item-1810',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1811 = defineEndpoint({
    path: '/reports/item-1811',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1812 = defineEndpoint({
    path: '/reports/item-1812',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1813 = defineEndpoint({
    path: '/reports/item-1813',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1814 = defineEndpoint({
    path: '/reports/item-1814',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1815 = defineEndpoint({
    path: '/reports/item-1815',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1816 = defineEndpoint({
    path: '/reports/item-1816',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1817 = defineEndpoint({
    path: '/reports/item-1817',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1818 = defineEndpoint({
    path: '/reports/item-1818',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1819 = defineEndpoint({
    path: '/reports/item-1819',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1820 = defineEndpoint({
    path: '/reports/item-1820',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1821 = defineEndpoint({
    path: '/reports/item-1821',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1822 = defineEndpoint({
    path: '/reports/item-1822',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1823 = defineEndpoint({
    path: '/reports/item-1823',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1824 = defineEndpoint({
    path: '/reports/item-1824',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1825 = defineEndpoint({
    path: '/reports/item-1825',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1826 = defineEndpoint({
    path: '/reports/item-1826',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1827 = defineEndpoint({
    path: '/reports/item-1827',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1828 = defineEndpoint({
    path: '/reports/item-1828',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1829 = defineEndpoint({
    path: '/reports/item-1829',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1830 = defineEndpoint({
    path: '/reports/item-1830',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1831 = defineEndpoint({
    path: '/reports/item-1831',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1832 = defineEndpoint({
    path: '/reports/item-1832',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1833 = defineEndpoint({
    path: '/reports/item-1833',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1834 = defineEndpoint({
    path: '/reports/item-1834',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1835 = defineEndpoint({
    path: '/reports/item-1835',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1836 = defineEndpoint({
    path: '/reports/item-1836',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1837 = defineEndpoint({
    path: '/reports/item-1837',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1838 = defineEndpoint({
    path: '/reports/item-1838',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1839 = defineEndpoint({
    path: '/reports/item-1839',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1840 = defineEndpoint({
    path: '/reports/item-1840',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1841 = defineEndpoint({
    path: '/reports/item-1841',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1842 = defineEndpoint({
    path: '/reports/item-1842',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1843 = defineEndpoint({
    path: '/reports/item-1843',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1844 = defineEndpoint({
    path: '/reports/item-1844',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1845 = defineEndpoint({
    path: '/reports/item-1845',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1846 = defineEndpoint({
    path: '/reports/item-1846',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1847 = defineEndpoint({
    path: '/reports/item-1847',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1848 = defineEndpoint({
    path: '/reports/item-1848',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1849 = defineEndpoint({
    path: '/reports/item-1849',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1850 = defineEndpoint({
    path: '/reports/item-1850',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1851 = defineEndpoint({
    path: '/reports/item-1851',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1852 = defineEndpoint({
    path: '/reports/item-1852',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1853 = defineEndpoint({
    path: '/reports/item-1853',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1854 = defineEndpoint({
    path: '/reports/item-1854',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1855 = defineEndpoint({
    path: '/reports/item-1855',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1856 = defineEndpoint({
    path: '/reports/item-1856',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1857 = defineEndpoint({
    path: '/reports/item-1857',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1858 = defineEndpoint({
    path: '/reports/item-1858',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1859 = defineEndpoint({
    path: '/reports/item-1859',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1860 = defineEndpoint({
    path: '/reports/item-1860',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1861 = defineEndpoint({
    path: '/reports/item-1861',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1862 = defineEndpoint({
    path: '/reports/item-1862',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1863 = defineEndpoint({
    path: '/reports/item-1863',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1864 = defineEndpoint({
    path: '/reports/item-1864',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1865 = defineEndpoint({
    path: '/reports/item-1865',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1866 = defineEndpoint({
    path: '/reports/item-1866',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1867 = defineEndpoint({
    path: '/reports/item-1867',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1868 = defineEndpoint({
    path: '/reports/item-1868',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1869 = defineEndpoint({
    path: '/reports/item-1869',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1870 = defineEndpoint({
    path: '/reports/item-1870',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1871 = defineEndpoint({
    path: '/reports/item-1871',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1872 = defineEndpoint({
    path: '/reports/item-1872',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1873 = defineEndpoint({
    path: '/reports/item-1873',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1874 = defineEndpoint({
    path: '/reports/item-1874',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1875 = defineEndpoint({
    path: '/reports/item-1875',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1876 = defineEndpoint({
    path: '/reports/item-1876',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1877 = defineEndpoint({
    path: '/reports/item-1877',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1878 = defineEndpoint({
    path: '/reports/item-1878',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1879 = defineEndpoint({
    path: '/reports/item-1879',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1880 = defineEndpoint({
    path: '/reports/item-1880',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1881 = defineEndpoint({
    path: '/reports/item-1881',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1882 = defineEndpoint({
    path: '/reports/item-1882',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1883 = defineEndpoint({
    path: '/reports/item-1883',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1884 = defineEndpoint({
    path: '/reports/item-1884',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1885 = defineEndpoint({
    path: '/reports/item-1885',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1886 = defineEndpoint({
    path: '/reports/item-1886',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1887 = defineEndpoint({
    path: '/reports/item-1887',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1888 = defineEndpoint({
    path: '/reports/item-1888',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1889 = defineEndpoint({
    path: '/reports/item-1889',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1890 = defineEndpoint({
    path: '/reports/item-1890',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1891 = defineEndpoint({
    path: '/reports/item-1891',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1892 = defineEndpoint({
    path: '/reports/item-1892',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1893 = defineEndpoint({
    path: '/reports/item-1893',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1894 = defineEndpoint({
    path: '/reports/item-1894',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1895 = defineEndpoint({
    path: '/reports/item-1895',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1896 = defineEndpoint({
    path: '/reports/item-1896',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1897 = defineEndpoint({
    path: '/reports/item-1897',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1898 = defineEndpoint({
    path: '/reports/item-1898',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1899 = defineEndpoint({
    path: '/reports/item-1899',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1900 = defineEndpoint({
    path: '/reports/item-1900',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1901 = defineEndpoint({
    path: '/reports/item-1901',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1902 = defineEndpoint({
    path: '/reports/item-1902',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1903 = defineEndpoint({
    path: '/reports/item-1903',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1904 = defineEndpoint({
    path: '/reports/item-1904',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1905 = defineEndpoint({
    path: '/reports/item-1905',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1906 = defineEndpoint({
    path: '/reports/item-1906',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1907 = defineEndpoint({
    path: '/reports/item-1907',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1908 = defineEndpoint({
    path: '/reports/item-1908',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1909 = defineEndpoint({
    path: '/reports/item-1909',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1910 = defineEndpoint({
    path: '/reports/item-1910',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1911 = defineEndpoint({
    path: '/reports/item-1911',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1912 = defineEndpoint({
    path: '/reports/item-1912',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1913 = defineEndpoint({
    path: '/reports/item-1913',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1914 = defineEndpoint({
    path: '/reports/item-1914',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1915 = defineEndpoint({
    path: '/reports/item-1915',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1916 = defineEndpoint({
    path: '/reports/item-1916',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1917 = defineEndpoint({
    path: '/reports/item-1917',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1918 = defineEndpoint({
    path: '/reports/item-1918',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1919 = defineEndpoint({
    path: '/reports/item-1919',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1920 = defineEndpoint({
    path: '/reports/item-1920',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1921 = defineEndpoint({
    path: '/reports/item-1921',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1922 = defineEndpoint({
    path: '/reports/item-1922',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1923 = defineEndpoint({
    path: '/reports/item-1923',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1924 = defineEndpoint({
    path: '/reports/item-1924',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1925 = defineEndpoint({
    path: '/reports/item-1925',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1926 = defineEndpoint({
    path: '/reports/item-1926',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1927 = defineEndpoint({
    path: '/reports/item-1927',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1928 = defineEndpoint({
    path: '/reports/item-1928',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1929 = defineEndpoint({
    path: '/reports/item-1929',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1930 = defineEndpoint({
    path: '/reports/item-1930',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1931 = defineEndpoint({
    path: '/reports/item-1931',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1932 = defineEndpoint({
    path: '/reports/item-1932',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1933 = defineEndpoint({
    path: '/reports/item-1933',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1934 = defineEndpoint({
    path: '/reports/item-1934',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1935 = defineEndpoint({
    path: '/reports/item-1935',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1936 = defineEndpoint({
    path: '/reports/item-1936',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1937 = defineEndpoint({
    path: '/reports/item-1937',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1938 = defineEndpoint({
    path: '/reports/item-1938',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1939 = defineEndpoint({
    path: '/reports/item-1939',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1940 = defineEndpoint({
    path: '/reports/item-1940',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1941 = defineEndpoint({
    path: '/reports/item-1941',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1942 = defineEndpoint({
    path: '/reports/item-1942',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1943 = defineEndpoint({
    path: '/reports/item-1943',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1944 = defineEndpoint({
    path: '/reports/item-1944',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1945 = defineEndpoint({
    path: '/reports/item-1945',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1946 = defineEndpoint({
    path: '/reports/item-1946',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1947 = defineEndpoint({
    path: '/reports/item-1947',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1948 = defineEndpoint({
    path: '/reports/item-1948',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1949 = defineEndpoint({
    path: '/reports/item-1949',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1950 = defineEndpoint({
    path: '/reports/item-1950',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1951 = defineEndpoint({
    path: '/reports/item-1951',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1952 = defineEndpoint({
    path: '/reports/item-1952',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1953 = defineEndpoint({
    path: '/reports/item-1953',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1954 = defineEndpoint({
    path: '/reports/item-1954',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1955 = defineEndpoint({
    path: '/reports/item-1955',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1956 = defineEndpoint({
    path: '/reports/item-1956',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1957 = defineEndpoint({
    path: '/reports/item-1957',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1958 = defineEndpoint({
    path: '/reports/item-1958',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1959 = defineEndpoint({
    path: '/reports/item-1959',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1960 = defineEndpoint({
    path: '/reports/item-1960',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1961 = defineEndpoint({
    path: '/reports/item-1961',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1962 = defineEndpoint({
    path: '/reports/item-1962',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1963 = defineEndpoint({
    path: '/reports/item-1963',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1964 = defineEndpoint({
    path: '/reports/item-1964',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1965 = defineEndpoint({
    path: '/reports/item-1965',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1966 = defineEndpoint({
    path: '/reports/item-1966',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1967 = defineEndpoint({
    path: '/reports/item-1967',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1968 = defineEndpoint({
    path: '/reports/item-1968',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1969 = defineEndpoint({
    path: '/reports/item-1969',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1970 = defineEndpoint({
    path: '/reports/item-1970',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1971 = defineEndpoint({
    path: '/reports/item-1971',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1972 = defineEndpoint({
    path: '/reports/item-1972',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1973 = defineEndpoint({
    path: '/reports/item-1973',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1974 = defineEndpoint({
    path: '/reports/item-1974',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1975 = defineEndpoint({
    path: '/reports/item-1975',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1976 = defineEndpoint({
    path: '/reports/item-1976',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1977 = defineEndpoint({
    path: '/reports/item-1977',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1978 = defineEndpoint({
    path: '/reports/item-1978',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1979 = defineEndpoint({
    path: '/reports/item-1979',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1980 = defineEndpoint({
    path: '/reports/item-1980',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1981 = defineEndpoint({
    path: '/reports/item-1981',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1982 = defineEndpoint({
    path: '/reports/item-1982',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1983 = defineEndpoint({
    path: '/reports/item-1983',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1984 = defineEndpoint({
    path: '/reports/item-1984',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1985 = defineEndpoint({
    path: '/reports/item-1985',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1986 = defineEndpoint({
    path: '/reports/item-1986',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1987 = defineEndpoint({
    path: '/reports/item-1987',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1988 = defineEndpoint({
    path: '/reports/item-1988',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1989 = defineEndpoint({
    path: '/reports/item-1989',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1990 = defineEndpoint({
    path: '/reports/item-1990',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1991 = defineEndpoint({
    path: '/reports/item-1991',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1992 = defineEndpoint({
    path: '/reports/item-1992',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1993 = defineEndpoint({
    path: '/reports/item-1993',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1994 = defineEndpoint({
    path: '/reports/item-1994',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1995 = defineEndpoint({
    path: '/reports/item-1995',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1996 = defineEndpoint({
    path: '/reports/item-1996',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1997 = defineEndpoint({
    path: '/reports/item-1997',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1998 = defineEndpoint({
    path: '/reports/item-1998',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint1999 = defineEndpoint({
    path: '/reports/item-1999',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});
