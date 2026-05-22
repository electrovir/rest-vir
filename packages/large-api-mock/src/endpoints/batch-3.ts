import {HttpMethod, HttpStatus} from '@augment-vir/common';
import {defineShape} from 'object-shape-tester';
import {structuredRenderDataShape} from 'structured-render';
import {customProps, defineMockEndpoint} from '../define-mock-endpoint.js';

export const endpoint3000 = defineMockEndpoint({
    path: '/reports/item-3000',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3001 = defineMockEndpoint({
    path: '/reports/item-3001',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3002 = defineMockEndpoint({
    path: '/reports/item-3002',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3003 = defineMockEndpoint({
    path: '/reports/item-3003',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3004 = defineMockEndpoint({
    path: '/reports/item-3004',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3005 = defineMockEndpoint({
    path: '/reports/item-3005',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3006 = defineMockEndpoint({
    path: '/reports/item-3006',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3007 = defineMockEndpoint({
    path: '/reports/item-3007',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3008 = defineMockEndpoint({
    path: '/reports/item-3008',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3009 = defineMockEndpoint({
    path: '/reports/item-3009',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3010 = defineMockEndpoint({
    path: '/reports/item-3010',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3011 = defineMockEndpoint({
    path: '/reports/item-3011',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3012 = defineMockEndpoint({
    path: '/reports/item-3012',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3013 = defineMockEndpoint({
    path: '/reports/item-3013',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3014 = defineMockEndpoint({
    path: '/reports/item-3014',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3015 = defineMockEndpoint({
    path: '/reports/item-3015',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3016 = defineMockEndpoint({
    path: '/reports/item-3016',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3017 = defineMockEndpoint({
    path: '/reports/item-3017',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3018 = defineMockEndpoint({
    path: '/reports/item-3018',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3019 = defineMockEndpoint({
    path: '/reports/item-3019',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3020 = defineMockEndpoint({
    path: '/reports/item-3020',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3021 = defineMockEndpoint({
    path: '/reports/item-3021',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3022 = defineMockEndpoint({
    path: '/reports/item-3022',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3023 = defineMockEndpoint({
    path: '/reports/item-3023',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3024 = defineMockEndpoint({
    path: '/reports/item-3024',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3025 = defineMockEndpoint({
    path: '/reports/item-3025',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3026 = defineMockEndpoint({
    path: '/reports/item-3026',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3027 = defineMockEndpoint({
    path: '/reports/item-3027',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3028 = defineMockEndpoint({
    path: '/reports/item-3028',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3029 = defineMockEndpoint({
    path: '/reports/item-3029',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3030 = defineMockEndpoint({
    path: '/reports/item-3030',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3031 = defineMockEndpoint({
    path: '/reports/item-3031',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3032 = defineMockEndpoint({
    path: '/reports/item-3032',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3033 = defineMockEndpoint({
    path: '/reports/item-3033',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3034 = defineMockEndpoint({
    path: '/reports/item-3034',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3035 = defineMockEndpoint({
    path: '/reports/item-3035',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3036 = defineMockEndpoint({
    path: '/reports/item-3036',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3037 = defineMockEndpoint({
    path: '/reports/item-3037',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3038 = defineMockEndpoint({
    path: '/reports/item-3038',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3039 = defineMockEndpoint({
    path: '/reports/item-3039',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3040 = defineMockEndpoint({
    path: '/reports/item-3040',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3041 = defineMockEndpoint({
    path: '/reports/item-3041',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3042 = defineMockEndpoint({
    path: '/reports/item-3042',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3043 = defineMockEndpoint({
    path: '/reports/item-3043',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3044 = defineMockEndpoint({
    path: '/reports/item-3044',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3045 = defineMockEndpoint({
    path: '/reports/item-3045',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3046 = defineMockEndpoint({
    path: '/reports/item-3046',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3047 = defineMockEndpoint({
    path: '/reports/item-3047',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3048 = defineMockEndpoint({
    path: '/reports/item-3048',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3049 = defineMockEndpoint({
    path: '/reports/item-3049',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3050 = defineMockEndpoint({
    path: '/reports/item-3050',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3051 = defineMockEndpoint({
    path: '/reports/item-3051',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3052 = defineMockEndpoint({
    path: '/reports/item-3052',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3053 = defineMockEndpoint({
    path: '/reports/item-3053',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3054 = defineMockEndpoint({
    path: '/reports/item-3054',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3055 = defineMockEndpoint({
    path: '/reports/item-3055',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3056 = defineMockEndpoint({
    path: '/reports/item-3056',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3057 = defineMockEndpoint({
    path: '/reports/item-3057',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3058 = defineMockEndpoint({
    path: '/reports/item-3058',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3059 = defineMockEndpoint({
    path: '/reports/item-3059',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3060 = defineMockEndpoint({
    path: '/reports/item-3060',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3061 = defineMockEndpoint({
    path: '/reports/item-3061',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3062 = defineMockEndpoint({
    path: '/reports/item-3062',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3063 = defineMockEndpoint({
    path: '/reports/item-3063',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3064 = defineMockEndpoint({
    path: '/reports/item-3064',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3065 = defineMockEndpoint({
    path: '/reports/item-3065',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3066 = defineMockEndpoint({
    path: '/reports/item-3066',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3067 = defineMockEndpoint({
    path: '/reports/item-3067',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3068 = defineMockEndpoint({
    path: '/reports/item-3068',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3069 = defineMockEndpoint({
    path: '/reports/item-3069',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3070 = defineMockEndpoint({
    path: '/reports/item-3070',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3071 = defineMockEndpoint({
    path: '/reports/item-3071',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3072 = defineMockEndpoint({
    path: '/reports/item-3072',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3073 = defineMockEndpoint({
    path: '/reports/item-3073',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3074 = defineMockEndpoint({
    path: '/reports/item-3074',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3075 = defineMockEndpoint({
    path: '/reports/item-3075',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3076 = defineMockEndpoint({
    path: '/reports/item-3076',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3077 = defineMockEndpoint({
    path: '/reports/item-3077',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3078 = defineMockEndpoint({
    path: '/reports/item-3078',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3079 = defineMockEndpoint({
    path: '/reports/item-3079',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3080 = defineMockEndpoint({
    path: '/reports/item-3080',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3081 = defineMockEndpoint({
    path: '/reports/item-3081',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3082 = defineMockEndpoint({
    path: '/reports/item-3082',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3083 = defineMockEndpoint({
    path: '/reports/item-3083',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3084 = defineMockEndpoint({
    path: '/reports/item-3084',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3085 = defineMockEndpoint({
    path: '/reports/item-3085',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3086 = defineMockEndpoint({
    path: '/reports/item-3086',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3087 = defineMockEndpoint({
    path: '/reports/item-3087',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3088 = defineMockEndpoint({
    path: '/reports/item-3088',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3089 = defineMockEndpoint({
    path: '/reports/item-3089',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3090 = defineMockEndpoint({
    path: '/reports/item-3090',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3091 = defineMockEndpoint({
    path: '/reports/item-3091',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3092 = defineMockEndpoint({
    path: '/reports/item-3092',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3093 = defineMockEndpoint({
    path: '/reports/item-3093',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3094 = defineMockEndpoint({
    path: '/reports/item-3094',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3095 = defineMockEndpoint({
    path: '/reports/item-3095',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3096 = defineMockEndpoint({
    path: '/reports/item-3096',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3097 = defineMockEndpoint({
    path: '/reports/item-3097',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3098 = defineMockEndpoint({
    path: '/reports/item-3098',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3099 = defineMockEndpoint({
    path: '/reports/item-3099',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3100 = defineMockEndpoint({
    path: '/reports/item-3100',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3101 = defineMockEndpoint({
    path: '/reports/item-3101',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3102 = defineMockEndpoint({
    path: '/reports/item-3102',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3103 = defineMockEndpoint({
    path: '/reports/item-3103',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3104 = defineMockEndpoint({
    path: '/reports/item-3104',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3105 = defineMockEndpoint({
    path: '/reports/item-3105',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3106 = defineMockEndpoint({
    path: '/reports/item-3106',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3107 = defineMockEndpoint({
    path: '/reports/item-3107',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3108 = defineMockEndpoint({
    path: '/reports/item-3108',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3109 = defineMockEndpoint({
    path: '/reports/item-3109',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3110 = defineMockEndpoint({
    path: '/reports/item-3110',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3111 = defineMockEndpoint({
    path: '/reports/item-3111',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3112 = defineMockEndpoint({
    path: '/reports/item-3112',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3113 = defineMockEndpoint({
    path: '/reports/item-3113',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3114 = defineMockEndpoint({
    path: '/reports/item-3114',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3115 = defineMockEndpoint({
    path: '/reports/item-3115',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3116 = defineMockEndpoint({
    path: '/reports/item-3116',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3117 = defineMockEndpoint({
    path: '/reports/item-3117',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3118 = defineMockEndpoint({
    path: '/reports/item-3118',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3119 = defineMockEndpoint({
    path: '/reports/item-3119',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3120 = defineMockEndpoint({
    path: '/reports/item-3120',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3121 = defineMockEndpoint({
    path: '/reports/item-3121',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3122 = defineMockEndpoint({
    path: '/reports/item-3122',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3123 = defineMockEndpoint({
    path: '/reports/item-3123',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3124 = defineMockEndpoint({
    path: '/reports/item-3124',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3125 = defineMockEndpoint({
    path: '/reports/item-3125',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3126 = defineMockEndpoint({
    path: '/reports/item-3126',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3127 = defineMockEndpoint({
    path: '/reports/item-3127',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3128 = defineMockEndpoint({
    path: '/reports/item-3128',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3129 = defineMockEndpoint({
    path: '/reports/item-3129',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3130 = defineMockEndpoint({
    path: '/reports/item-3130',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3131 = defineMockEndpoint({
    path: '/reports/item-3131',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3132 = defineMockEndpoint({
    path: '/reports/item-3132',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3133 = defineMockEndpoint({
    path: '/reports/item-3133',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3134 = defineMockEndpoint({
    path: '/reports/item-3134',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3135 = defineMockEndpoint({
    path: '/reports/item-3135',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3136 = defineMockEndpoint({
    path: '/reports/item-3136',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3137 = defineMockEndpoint({
    path: '/reports/item-3137',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3138 = defineMockEndpoint({
    path: '/reports/item-3138',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3139 = defineMockEndpoint({
    path: '/reports/item-3139',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3140 = defineMockEndpoint({
    path: '/reports/item-3140',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3141 = defineMockEndpoint({
    path: '/reports/item-3141',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3142 = defineMockEndpoint({
    path: '/reports/item-3142',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3143 = defineMockEndpoint({
    path: '/reports/item-3143',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3144 = defineMockEndpoint({
    path: '/reports/item-3144',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3145 = defineMockEndpoint({
    path: '/reports/item-3145',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3146 = defineMockEndpoint({
    path: '/reports/item-3146',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3147 = defineMockEndpoint({
    path: '/reports/item-3147',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3148 = defineMockEndpoint({
    path: '/reports/item-3148',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3149 = defineMockEndpoint({
    path: '/reports/item-3149',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3150 = defineMockEndpoint({
    path: '/reports/item-3150',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3151 = defineMockEndpoint({
    path: '/reports/item-3151',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3152 = defineMockEndpoint({
    path: '/reports/item-3152',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3153 = defineMockEndpoint({
    path: '/reports/item-3153',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3154 = defineMockEndpoint({
    path: '/reports/item-3154',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3155 = defineMockEndpoint({
    path: '/reports/item-3155',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3156 = defineMockEndpoint({
    path: '/reports/item-3156',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3157 = defineMockEndpoint({
    path: '/reports/item-3157',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3158 = defineMockEndpoint({
    path: '/reports/item-3158',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3159 = defineMockEndpoint({
    path: '/reports/item-3159',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3160 = defineMockEndpoint({
    path: '/reports/item-3160',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3161 = defineMockEndpoint({
    path: '/reports/item-3161',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3162 = defineMockEndpoint({
    path: '/reports/item-3162',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3163 = defineMockEndpoint({
    path: '/reports/item-3163',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3164 = defineMockEndpoint({
    path: '/reports/item-3164',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3165 = defineMockEndpoint({
    path: '/reports/item-3165',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3166 = defineMockEndpoint({
    path: '/reports/item-3166',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3167 = defineMockEndpoint({
    path: '/reports/item-3167',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3168 = defineMockEndpoint({
    path: '/reports/item-3168',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3169 = defineMockEndpoint({
    path: '/reports/item-3169',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3170 = defineMockEndpoint({
    path: '/reports/item-3170',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3171 = defineMockEndpoint({
    path: '/reports/item-3171',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3172 = defineMockEndpoint({
    path: '/reports/item-3172',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3173 = defineMockEndpoint({
    path: '/reports/item-3173',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3174 = defineMockEndpoint({
    path: '/reports/item-3174',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3175 = defineMockEndpoint({
    path: '/reports/item-3175',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3176 = defineMockEndpoint({
    path: '/reports/item-3176',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3177 = defineMockEndpoint({
    path: '/reports/item-3177',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3178 = defineMockEndpoint({
    path: '/reports/item-3178',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3179 = defineMockEndpoint({
    path: '/reports/item-3179',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3180 = defineMockEndpoint({
    path: '/reports/item-3180',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3181 = defineMockEndpoint({
    path: '/reports/item-3181',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3182 = defineMockEndpoint({
    path: '/reports/item-3182',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3183 = defineMockEndpoint({
    path: '/reports/item-3183',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3184 = defineMockEndpoint({
    path: '/reports/item-3184',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3185 = defineMockEndpoint({
    path: '/reports/item-3185',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3186 = defineMockEndpoint({
    path: '/reports/item-3186',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3187 = defineMockEndpoint({
    path: '/reports/item-3187',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3188 = defineMockEndpoint({
    path: '/reports/item-3188',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3189 = defineMockEndpoint({
    path: '/reports/item-3189',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3190 = defineMockEndpoint({
    path: '/reports/item-3190',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3191 = defineMockEndpoint({
    path: '/reports/item-3191',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3192 = defineMockEndpoint({
    path: '/reports/item-3192',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3193 = defineMockEndpoint({
    path: '/reports/item-3193',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3194 = defineMockEndpoint({
    path: '/reports/item-3194',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3195 = defineMockEndpoint({
    path: '/reports/item-3195',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3196 = defineMockEndpoint({
    path: '/reports/item-3196',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3197 = defineMockEndpoint({
    path: '/reports/item-3197',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3198 = defineMockEndpoint({
    path: '/reports/item-3198',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3199 = defineMockEndpoint({
    path: '/reports/item-3199',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3200 = defineMockEndpoint({
    path: '/reports/item-3200',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3201 = defineMockEndpoint({
    path: '/reports/item-3201',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3202 = defineMockEndpoint({
    path: '/reports/item-3202',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3203 = defineMockEndpoint({
    path: '/reports/item-3203',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3204 = defineMockEndpoint({
    path: '/reports/item-3204',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3205 = defineMockEndpoint({
    path: '/reports/item-3205',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3206 = defineMockEndpoint({
    path: '/reports/item-3206',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3207 = defineMockEndpoint({
    path: '/reports/item-3207',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3208 = defineMockEndpoint({
    path: '/reports/item-3208',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3209 = defineMockEndpoint({
    path: '/reports/item-3209',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3210 = defineMockEndpoint({
    path: '/reports/item-3210',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3211 = defineMockEndpoint({
    path: '/reports/item-3211',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3212 = defineMockEndpoint({
    path: '/reports/item-3212',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3213 = defineMockEndpoint({
    path: '/reports/item-3213',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3214 = defineMockEndpoint({
    path: '/reports/item-3214',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3215 = defineMockEndpoint({
    path: '/reports/item-3215',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3216 = defineMockEndpoint({
    path: '/reports/item-3216',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3217 = defineMockEndpoint({
    path: '/reports/item-3217',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3218 = defineMockEndpoint({
    path: '/reports/item-3218',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3219 = defineMockEndpoint({
    path: '/reports/item-3219',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3220 = defineMockEndpoint({
    path: '/reports/item-3220',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3221 = defineMockEndpoint({
    path: '/reports/item-3221',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3222 = defineMockEndpoint({
    path: '/reports/item-3222',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3223 = defineMockEndpoint({
    path: '/reports/item-3223',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3224 = defineMockEndpoint({
    path: '/reports/item-3224',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3225 = defineMockEndpoint({
    path: '/reports/item-3225',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3226 = defineMockEndpoint({
    path: '/reports/item-3226',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3227 = defineMockEndpoint({
    path: '/reports/item-3227',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3228 = defineMockEndpoint({
    path: '/reports/item-3228',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3229 = defineMockEndpoint({
    path: '/reports/item-3229',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3230 = defineMockEndpoint({
    path: '/reports/item-3230',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3231 = defineMockEndpoint({
    path: '/reports/item-3231',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3232 = defineMockEndpoint({
    path: '/reports/item-3232',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3233 = defineMockEndpoint({
    path: '/reports/item-3233',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3234 = defineMockEndpoint({
    path: '/reports/item-3234',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3235 = defineMockEndpoint({
    path: '/reports/item-3235',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3236 = defineMockEndpoint({
    path: '/reports/item-3236',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3237 = defineMockEndpoint({
    path: '/reports/item-3237',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3238 = defineMockEndpoint({
    path: '/reports/item-3238',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3239 = defineMockEndpoint({
    path: '/reports/item-3239',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3240 = defineMockEndpoint({
    path: '/reports/item-3240',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3241 = defineMockEndpoint({
    path: '/reports/item-3241',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3242 = defineMockEndpoint({
    path: '/reports/item-3242',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3243 = defineMockEndpoint({
    path: '/reports/item-3243',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3244 = defineMockEndpoint({
    path: '/reports/item-3244',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3245 = defineMockEndpoint({
    path: '/reports/item-3245',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3246 = defineMockEndpoint({
    path: '/reports/item-3246',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3247 = defineMockEndpoint({
    path: '/reports/item-3247',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3248 = defineMockEndpoint({
    path: '/reports/item-3248',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3249 = defineMockEndpoint({
    path: '/reports/item-3249',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3250 = defineMockEndpoint({
    path: '/reports/item-3250',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3251 = defineMockEndpoint({
    path: '/reports/item-3251',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3252 = defineMockEndpoint({
    path: '/reports/item-3252',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3253 = defineMockEndpoint({
    path: '/reports/item-3253',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3254 = defineMockEndpoint({
    path: '/reports/item-3254',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3255 = defineMockEndpoint({
    path: '/reports/item-3255',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3256 = defineMockEndpoint({
    path: '/reports/item-3256',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3257 = defineMockEndpoint({
    path: '/reports/item-3257',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3258 = defineMockEndpoint({
    path: '/reports/item-3258',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3259 = defineMockEndpoint({
    path: '/reports/item-3259',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3260 = defineMockEndpoint({
    path: '/reports/item-3260',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3261 = defineMockEndpoint({
    path: '/reports/item-3261',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3262 = defineMockEndpoint({
    path: '/reports/item-3262',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3263 = defineMockEndpoint({
    path: '/reports/item-3263',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3264 = defineMockEndpoint({
    path: '/reports/item-3264',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3265 = defineMockEndpoint({
    path: '/reports/item-3265',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3266 = defineMockEndpoint({
    path: '/reports/item-3266',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3267 = defineMockEndpoint({
    path: '/reports/item-3267',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3268 = defineMockEndpoint({
    path: '/reports/item-3268',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3269 = defineMockEndpoint({
    path: '/reports/item-3269',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3270 = defineMockEndpoint({
    path: '/reports/item-3270',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3271 = defineMockEndpoint({
    path: '/reports/item-3271',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3272 = defineMockEndpoint({
    path: '/reports/item-3272',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3273 = defineMockEndpoint({
    path: '/reports/item-3273',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3274 = defineMockEndpoint({
    path: '/reports/item-3274',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3275 = defineMockEndpoint({
    path: '/reports/item-3275',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3276 = defineMockEndpoint({
    path: '/reports/item-3276',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3277 = defineMockEndpoint({
    path: '/reports/item-3277',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3278 = defineMockEndpoint({
    path: '/reports/item-3278',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3279 = defineMockEndpoint({
    path: '/reports/item-3279',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3280 = defineMockEndpoint({
    path: '/reports/item-3280',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3281 = defineMockEndpoint({
    path: '/reports/item-3281',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3282 = defineMockEndpoint({
    path: '/reports/item-3282',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3283 = defineMockEndpoint({
    path: '/reports/item-3283',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3284 = defineMockEndpoint({
    path: '/reports/item-3284',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3285 = defineMockEndpoint({
    path: '/reports/item-3285',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3286 = defineMockEndpoint({
    path: '/reports/item-3286',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3287 = defineMockEndpoint({
    path: '/reports/item-3287',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3288 = defineMockEndpoint({
    path: '/reports/item-3288',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3289 = defineMockEndpoint({
    path: '/reports/item-3289',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3290 = defineMockEndpoint({
    path: '/reports/item-3290',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3291 = defineMockEndpoint({
    path: '/reports/item-3291',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3292 = defineMockEndpoint({
    path: '/reports/item-3292',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3293 = defineMockEndpoint({
    path: '/reports/item-3293',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3294 = defineMockEndpoint({
    path: '/reports/item-3294',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3295 = defineMockEndpoint({
    path: '/reports/item-3295',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3296 = defineMockEndpoint({
    path: '/reports/item-3296',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3297 = defineMockEndpoint({
    path: '/reports/item-3297',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3298 = defineMockEndpoint({
    path: '/reports/item-3298',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3299 = defineMockEndpoint({
    path: '/reports/item-3299',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3300 = defineMockEndpoint({
    path: '/reports/item-3300',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3301 = defineMockEndpoint({
    path: '/reports/item-3301',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3302 = defineMockEndpoint({
    path: '/reports/item-3302',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3303 = defineMockEndpoint({
    path: '/reports/item-3303',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3304 = defineMockEndpoint({
    path: '/reports/item-3304',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3305 = defineMockEndpoint({
    path: '/reports/item-3305',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3306 = defineMockEndpoint({
    path: '/reports/item-3306',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3307 = defineMockEndpoint({
    path: '/reports/item-3307',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3308 = defineMockEndpoint({
    path: '/reports/item-3308',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3309 = defineMockEndpoint({
    path: '/reports/item-3309',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3310 = defineMockEndpoint({
    path: '/reports/item-3310',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3311 = defineMockEndpoint({
    path: '/reports/item-3311',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3312 = defineMockEndpoint({
    path: '/reports/item-3312',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3313 = defineMockEndpoint({
    path: '/reports/item-3313',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3314 = defineMockEndpoint({
    path: '/reports/item-3314',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3315 = defineMockEndpoint({
    path: '/reports/item-3315',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3316 = defineMockEndpoint({
    path: '/reports/item-3316',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3317 = defineMockEndpoint({
    path: '/reports/item-3317',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3318 = defineMockEndpoint({
    path: '/reports/item-3318',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3319 = defineMockEndpoint({
    path: '/reports/item-3319',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3320 = defineMockEndpoint({
    path: '/reports/item-3320',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3321 = defineMockEndpoint({
    path: '/reports/item-3321',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3322 = defineMockEndpoint({
    path: '/reports/item-3322',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3323 = defineMockEndpoint({
    path: '/reports/item-3323',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3324 = defineMockEndpoint({
    path: '/reports/item-3324',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3325 = defineMockEndpoint({
    path: '/reports/item-3325',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3326 = defineMockEndpoint({
    path: '/reports/item-3326',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3327 = defineMockEndpoint({
    path: '/reports/item-3327',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3328 = defineMockEndpoint({
    path: '/reports/item-3328',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3329 = defineMockEndpoint({
    path: '/reports/item-3329',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3330 = defineMockEndpoint({
    path: '/reports/item-3330',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3331 = defineMockEndpoint({
    path: '/reports/item-3331',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3332 = defineMockEndpoint({
    path: '/reports/item-3332',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3333 = defineMockEndpoint({
    path: '/reports/item-3333',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3334 = defineMockEndpoint({
    path: '/reports/item-3334',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3335 = defineMockEndpoint({
    path: '/reports/item-3335',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3336 = defineMockEndpoint({
    path: '/reports/item-3336',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3337 = defineMockEndpoint({
    path: '/reports/item-3337',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3338 = defineMockEndpoint({
    path: '/reports/item-3338',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3339 = defineMockEndpoint({
    path: '/reports/item-3339',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3340 = defineMockEndpoint({
    path: '/reports/item-3340',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3341 = defineMockEndpoint({
    path: '/reports/item-3341',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3342 = defineMockEndpoint({
    path: '/reports/item-3342',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3343 = defineMockEndpoint({
    path: '/reports/item-3343',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3344 = defineMockEndpoint({
    path: '/reports/item-3344',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3345 = defineMockEndpoint({
    path: '/reports/item-3345',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3346 = defineMockEndpoint({
    path: '/reports/item-3346',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3347 = defineMockEndpoint({
    path: '/reports/item-3347',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3348 = defineMockEndpoint({
    path: '/reports/item-3348',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3349 = defineMockEndpoint({
    path: '/reports/item-3349',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3350 = defineMockEndpoint({
    path: '/reports/item-3350',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3351 = defineMockEndpoint({
    path: '/reports/item-3351',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3352 = defineMockEndpoint({
    path: '/reports/item-3352',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3353 = defineMockEndpoint({
    path: '/reports/item-3353',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3354 = defineMockEndpoint({
    path: '/reports/item-3354',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3355 = defineMockEndpoint({
    path: '/reports/item-3355',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3356 = defineMockEndpoint({
    path: '/reports/item-3356',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3357 = defineMockEndpoint({
    path: '/reports/item-3357',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3358 = defineMockEndpoint({
    path: '/reports/item-3358',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3359 = defineMockEndpoint({
    path: '/reports/item-3359',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3360 = defineMockEndpoint({
    path: '/reports/item-3360',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3361 = defineMockEndpoint({
    path: '/reports/item-3361',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3362 = defineMockEndpoint({
    path: '/reports/item-3362',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3363 = defineMockEndpoint({
    path: '/reports/item-3363',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3364 = defineMockEndpoint({
    path: '/reports/item-3364',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3365 = defineMockEndpoint({
    path: '/reports/item-3365',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3366 = defineMockEndpoint({
    path: '/reports/item-3366',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3367 = defineMockEndpoint({
    path: '/reports/item-3367',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3368 = defineMockEndpoint({
    path: '/reports/item-3368',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3369 = defineMockEndpoint({
    path: '/reports/item-3369',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3370 = defineMockEndpoint({
    path: '/reports/item-3370',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3371 = defineMockEndpoint({
    path: '/reports/item-3371',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3372 = defineMockEndpoint({
    path: '/reports/item-3372',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3373 = defineMockEndpoint({
    path: '/reports/item-3373',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3374 = defineMockEndpoint({
    path: '/reports/item-3374',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3375 = defineMockEndpoint({
    path: '/reports/item-3375',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3376 = defineMockEndpoint({
    path: '/reports/item-3376',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3377 = defineMockEndpoint({
    path: '/reports/item-3377',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3378 = defineMockEndpoint({
    path: '/reports/item-3378',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3379 = defineMockEndpoint({
    path: '/reports/item-3379',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3380 = defineMockEndpoint({
    path: '/reports/item-3380',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3381 = defineMockEndpoint({
    path: '/reports/item-3381',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3382 = defineMockEndpoint({
    path: '/reports/item-3382',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3383 = defineMockEndpoint({
    path: '/reports/item-3383',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3384 = defineMockEndpoint({
    path: '/reports/item-3384',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3385 = defineMockEndpoint({
    path: '/reports/item-3385',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3386 = defineMockEndpoint({
    path: '/reports/item-3386',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3387 = defineMockEndpoint({
    path: '/reports/item-3387',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3388 = defineMockEndpoint({
    path: '/reports/item-3388',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3389 = defineMockEndpoint({
    path: '/reports/item-3389',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3390 = defineMockEndpoint({
    path: '/reports/item-3390',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3391 = defineMockEndpoint({
    path: '/reports/item-3391',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3392 = defineMockEndpoint({
    path: '/reports/item-3392',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3393 = defineMockEndpoint({
    path: '/reports/item-3393',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3394 = defineMockEndpoint({
    path: '/reports/item-3394',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3395 = defineMockEndpoint({
    path: '/reports/item-3395',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3396 = defineMockEndpoint({
    path: '/reports/item-3396',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3397 = defineMockEndpoint({
    path: '/reports/item-3397',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3398 = defineMockEndpoint({
    path: '/reports/item-3398',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3399 = defineMockEndpoint({
    path: '/reports/item-3399',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3400 = defineMockEndpoint({
    path: '/reports/item-3400',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3401 = defineMockEndpoint({
    path: '/reports/item-3401',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3402 = defineMockEndpoint({
    path: '/reports/item-3402',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3403 = defineMockEndpoint({
    path: '/reports/item-3403',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3404 = defineMockEndpoint({
    path: '/reports/item-3404',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3405 = defineMockEndpoint({
    path: '/reports/item-3405',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3406 = defineMockEndpoint({
    path: '/reports/item-3406',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3407 = defineMockEndpoint({
    path: '/reports/item-3407',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3408 = defineMockEndpoint({
    path: '/reports/item-3408',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3409 = defineMockEndpoint({
    path: '/reports/item-3409',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3410 = defineMockEndpoint({
    path: '/reports/item-3410',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3411 = defineMockEndpoint({
    path: '/reports/item-3411',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3412 = defineMockEndpoint({
    path: '/reports/item-3412',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3413 = defineMockEndpoint({
    path: '/reports/item-3413',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3414 = defineMockEndpoint({
    path: '/reports/item-3414',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3415 = defineMockEndpoint({
    path: '/reports/item-3415',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3416 = defineMockEndpoint({
    path: '/reports/item-3416',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3417 = defineMockEndpoint({
    path: '/reports/item-3417',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3418 = defineMockEndpoint({
    path: '/reports/item-3418',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3419 = defineMockEndpoint({
    path: '/reports/item-3419',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3420 = defineMockEndpoint({
    path: '/reports/item-3420',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3421 = defineMockEndpoint({
    path: '/reports/item-3421',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3422 = defineMockEndpoint({
    path: '/reports/item-3422',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3423 = defineMockEndpoint({
    path: '/reports/item-3423',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3424 = defineMockEndpoint({
    path: '/reports/item-3424',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3425 = defineMockEndpoint({
    path: '/reports/item-3425',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3426 = defineMockEndpoint({
    path: '/reports/item-3426',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3427 = defineMockEndpoint({
    path: '/reports/item-3427',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3428 = defineMockEndpoint({
    path: '/reports/item-3428',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3429 = defineMockEndpoint({
    path: '/reports/item-3429',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3430 = defineMockEndpoint({
    path: '/reports/item-3430',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3431 = defineMockEndpoint({
    path: '/reports/item-3431',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3432 = defineMockEndpoint({
    path: '/reports/item-3432',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3433 = defineMockEndpoint({
    path: '/reports/item-3433',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3434 = defineMockEndpoint({
    path: '/reports/item-3434',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3435 = defineMockEndpoint({
    path: '/reports/item-3435',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3436 = defineMockEndpoint({
    path: '/reports/item-3436',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3437 = defineMockEndpoint({
    path: '/reports/item-3437',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3438 = defineMockEndpoint({
    path: '/reports/item-3438',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3439 = defineMockEndpoint({
    path: '/reports/item-3439',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3440 = defineMockEndpoint({
    path: '/reports/item-3440',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3441 = defineMockEndpoint({
    path: '/reports/item-3441',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3442 = defineMockEndpoint({
    path: '/reports/item-3442',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3443 = defineMockEndpoint({
    path: '/reports/item-3443',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3444 = defineMockEndpoint({
    path: '/reports/item-3444',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3445 = defineMockEndpoint({
    path: '/reports/item-3445',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3446 = defineMockEndpoint({
    path: '/reports/item-3446',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3447 = defineMockEndpoint({
    path: '/reports/item-3447',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3448 = defineMockEndpoint({
    path: '/reports/item-3448',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3449 = defineMockEndpoint({
    path: '/reports/item-3449',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3450 = defineMockEndpoint({
    path: '/reports/item-3450',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3451 = defineMockEndpoint({
    path: '/reports/item-3451',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3452 = defineMockEndpoint({
    path: '/reports/item-3452',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3453 = defineMockEndpoint({
    path: '/reports/item-3453',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3454 = defineMockEndpoint({
    path: '/reports/item-3454',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3455 = defineMockEndpoint({
    path: '/reports/item-3455',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3456 = defineMockEndpoint({
    path: '/reports/item-3456',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3457 = defineMockEndpoint({
    path: '/reports/item-3457',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3458 = defineMockEndpoint({
    path: '/reports/item-3458',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3459 = defineMockEndpoint({
    path: '/reports/item-3459',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3460 = defineMockEndpoint({
    path: '/reports/item-3460',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3461 = defineMockEndpoint({
    path: '/reports/item-3461',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3462 = defineMockEndpoint({
    path: '/reports/item-3462',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3463 = defineMockEndpoint({
    path: '/reports/item-3463',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3464 = defineMockEndpoint({
    path: '/reports/item-3464',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3465 = defineMockEndpoint({
    path: '/reports/item-3465',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3466 = defineMockEndpoint({
    path: '/reports/item-3466',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3467 = defineMockEndpoint({
    path: '/reports/item-3467',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3468 = defineMockEndpoint({
    path: '/reports/item-3468',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3469 = defineMockEndpoint({
    path: '/reports/item-3469',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3470 = defineMockEndpoint({
    path: '/reports/item-3470',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3471 = defineMockEndpoint({
    path: '/reports/item-3471',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3472 = defineMockEndpoint({
    path: '/reports/item-3472',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3473 = defineMockEndpoint({
    path: '/reports/item-3473',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3474 = defineMockEndpoint({
    path: '/reports/item-3474',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3475 = defineMockEndpoint({
    path: '/reports/item-3475',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3476 = defineMockEndpoint({
    path: '/reports/item-3476',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3477 = defineMockEndpoint({
    path: '/reports/item-3477',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3478 = defineMockEndpoint({
    path: '/reports/item-3478',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3479 = defineMockEndpoint({
    path: '/reports/item-3479',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3480 = defineMockEndpoint({
    path: '/reports/item-3480',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3481 = defineMockEndpoint({
    path: '/reports/item-3481',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3482 = defineMockEndpoint({
    path: '/reports/item-3482',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3483 = defineMockEndpoint({
    path: '/reports/item-3483',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3484 = defineMockEndpoint({
    path: '/reports/item-3484',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3485 = defineMockEndpoint({
    path: '/reports/item-3485',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3486 = defineMockEndpoint({
    path: '/reports/item-3486',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3487 = defineMockEndpoint({
    path: '/reports/item-3487',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3488 = defineMockEndpoint({
    path: '/reports/item-3488',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3489 = defineMockEndpoint({
    path: '/reports/item-3489',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3490 = defineMockEndpoint({
    path: '/reports/item-3490',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3491 = defineMockEndpoint({
    path: '/reports/item-3491',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3492 = defineMockEndpoint({
    path: '/reports/item-3492',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3493 = defineMockEndpoint({
    path: '/reports/item-3493',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3494 = defineMockEndpoint({
    path: '/reports/item-3494',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3495 = defineMockEndpoint({
    path: '/reports/item-3495',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3496 = defineMockEndpoint({
    path: '/reports/item-3496',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3497 = defineMockEndpoint({
    path: '/reports/item-3497',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3498 = defineMockEndpoint({
    path: '/reports/item-3498',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3499 = defineMockEndpoint({
    path: '/reports/item-3499',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3500 = defineMockEndpoint({
    path: '/reports/item-3500',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3501 = defineMockEndpoint({
    path: '/reports/item-3501',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3502 = defineMockEndpoint({
    path: '/reports/item-3502',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3503 = defineMockEndpoint({
    path: '/reports/item-3503',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3504 = defineMockEndpoint({
    path: '/reports/item-3504',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3505 = defineMockEndpoint({
    path: '/reports/item-3505',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3506 = defineMockEndpoint({
    path: '/reports/item-3506',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3507 = defineMockEndpoint({
    path: '/reports/item-3507',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3508 = defineMockEndpoint({
    path: '/reports/item-3508',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3509 = defineMockEndpoint({
    path: '/reports/item-3509',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3510 = defineMockEndpoint({
    path: '/reports/item-3510',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3511 = defineMockEndpoint({
    path: '/reports/item-3511',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3512 = defineMockEndpoint({
    path: '/reports/item-3512',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3513 = defineMockEndpoint({
    path: '/reports/item-3513',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3514 = defineMockEndpoint({
    path: '/reports/item-3514',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3515 = defineMockEndpoint({
    path: '/reports/item-3515',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3516 = defineMockEndpoint({
    path: '/reports/item-3516',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3517 = defineMockEndpoint({
    path: '/reports/item-3517',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3518 = defineMockEndpoint({
    path: '/reports/item-3518',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3519 = defineMockEndpoint({
    path: '/reports/item-3519',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3520 = defineMockEndpoint({
    path: '/reports/item-3520',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3521 = defineMockEndpoint({
    path: '/reports/item-3521',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3522 = defineMockEndpoint({
    path: '/reports/item-3522',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3523 = defineMockEndpoint({
    path: '/reports/item-3523',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3524 = defineMockEndpoint({
    path: '/reports/item-3524',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3525 = defineMockEndpoint({
    path: '/reports/item-3525',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3526 = defineMockEndpoint({
    path: '/reports/item-3526',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3527 = defineMockEndpoint({
    path: '/reports/item-3527',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3528 = defineMockEndpoint({
    path: '/reports/item-3528',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3529 = defineMockEndpoint({
    path: '/reports/item-3529',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3530 = defineMockEndpoint({
    path: '/reports/item-3530',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3531 = defineMockEndpoint({
    path: '/reports/item-3531',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3532 = defineMockEndpoint({
    path: '/reports/item-3532',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3533 = defineMockEndpoint({
    path: '/reports/item-3533',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3534 = defineMockEndpoint({
    path: '/reports/item-3534',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3535 = defineMockEndpoint({
    path: '/reports/item-3535',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3536 = defineMockEndpoint({
    path: '/reports/item-3536',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3537 = defineMockEndpoint({
    path: '/reports/item-3537',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3538 = defineMockEndpoint({
    path: '/reports/item-3538',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3539 = defineMockEndpoint({
    path: '/reports/item-3539',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3540 = defineMockEndpoint({
    path: '/reports/item-3540',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3541 = defineMockEndpoint({
    path: '/reports/item-3541',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3542 = defineMockEndpoint({
    path: '/reports/item-3542',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3543 = defineMockEndpoint({
    path: '/reports/item-3543',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3544 = defineMockEndpoint({
    path: '/reports/item-3544',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3545 = defineMockEndpoint({
    path: '/reports/item-3545',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3546 = defineMockEndpoint({
    path: '/reports/item-3546',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3547 = defineMockEndpoint({
    path: '/reports/item-3547',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3548 = defineMockEndpoint({
    path: '/reports/item-3548',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3549 = defineMockEndpoint({
    path: '/reports/item-3549',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3550 = defineMockEndpoint({
    path: '/reports/item-3550',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3551 = defineMockEndpoint({
    path: '/reports/item-3551',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3552 = defineMockEndpoint({
    path: '/reports/item-3552',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3553 = defineMockEndpoint({
    path: '/reports/item-3553',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3554 = defineMockEndpoint({
    path: '/reports/item-3554',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3555 = defineMockEndpoint({
    path: '/reports/item-3555',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3556 = defineMockEndpoint({
    path: '/reports/item-3556',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3557 = defineMockEndpoint({
    path: '/reports/item-3557',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3558 = defineMockEndpoint({
    path: '/reports/item-3558',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3559 = defineMockEndpoint({
    path: '/reports/item-3559',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3560 = defineMockEndpoint({
    path: '/reports/item-3560',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3561 = defineMockEndpoint({
    path: '/reports/item-3561',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3562 = defineMockEndpoint({
    path: '/reports/item-3562',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3563 = defineMockEndpoint({
    path: '/reports/item-3563',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3564 = defineMockEndpoint({
    path: '/reports/item-3564',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3565 = defineMockEndpoint({
    path: '/reports/item-3565',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3566 = defineMockEndpoint({
    path: '/reports/item-3566',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3567 = defineMockEndpoint({
    path: '/reports/item-3567',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3568 = defineMockEndpoint({
    path: '/reports/item-3568',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3569 = defineMockEndpoint({
    path: '/reports/item-3569',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3570 = defineMockEndpoint({
    path: '/reports/item-3570',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3571 = defineMockEndpoint({
    path: '/reports/item-3571',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3572 = defineMockEndpoint({
    path: '/reports/item-3572',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3573 = defineMockEndpoint({
    path: '/reports/item-3573',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3574 = defineMockEndpoint({
    path: '/reports/item-3574',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3575 = defineMockEndpoint({
    path: '/reports/item-3575',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3576 = defineMockEndpoint({
    path: '/reports/item-3576',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3577 = defineMockEndpoint({
    path: '/reports/item-3577',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3578 = defineMockEndpoint({
    path: '/reports/item-3578',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3579 = defineMockEndpoint({
    path: '/reports/item-3579',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3580 = defineMockEndpoint({
    path: '/reports/item-3580',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3581 = defineMockEndpoint({
    path: '/reports/item-3581',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3582 = defineMockEndpoint({
    path: '/reports/item-3582',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3583 = defineMockEndpoint({
    path: '/reports/item-3583',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3584 = defineMockEndpoint({
    path: '/reports/item-3584',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3585 = defineMockEndpoint({
    path: '/reports/item-3585',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3586 = defineMockEndpoint({
    path: '/reports/item-3586',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3587 = defineMockEndpoint({
    path: '/reports/item-3587',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3588 = defineMockEndpoint({
    path: '/reports/item-3588',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3589 = defineMockEndpoint({
    path: '/reports/item-3589',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3590 = defineMockEndpoint({
    path: '/reports/item-3590',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3591 = defineMockEndpoint({
    path: '/reports/item-3591',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3592 = defineMockEndpoint({
    path: '/reports/item-3592',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3593 = defineMockEndpoint({
    path: '/reports/item-3593',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3594 = defineMockEndpoint({
    path: '/reports/item-3594',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3595 = defineMockEndpoint({
    path: '/reports/item-3595',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3596 = defineMockEndpoint({
    path: '/reports/item-3596',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3597 = defineMockEndpoint({
    path: '/reports/item-3597',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3598 = defineMockEndpoint({
    path: '/reports/item-3598',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3599 = defineMockEndpoint({
    path: '/reports/item-3599',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3600 = defineMockEndpoint({
    path: '/reports/item-3600',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3601 = defineMockEndpoint({
    path: '/reports/item-3601',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3602 = defineMockEndpoint({
    path: '/reports/item-3602',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3603 = defineMockEndpoint({
    path: '/reports/item-3603',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3604 = defineMockEndpoint({
    path: '/reports/item-3604',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3605 = defineMockEndpoint({
    path: '/reports/item-3605',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3606 = defineMockEndpoint({
    path: '/reports/item-3606',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3607 = defineMockEndpoint({
    path: '/reports/item-3607',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3608 = defineMockEndpoint({
    path: '/reports/item-3608',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3609 = defineMockEndpoint({
    path: '/reports/item-3609',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3610 = defineMockEndpoint({
    path: '/reports/item-3610',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3611 = defineMockEndpoint({
    path: '/reports/item-3611',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3612 = defineMockEndpoint({
    path: '/reports/item-3612',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3613 = defineMockEndpoint({
    path: '/reports/item-3613',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3614 = defineMockEndpoint({
    path: '/reports/item-3614',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3615 = defineMockEndpoint({
    path: '/reports/item-3615',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3616 = defineMockEndpoint({
    path: '/reports/item-3616',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3617 = defineMockEndpoint({
    path: '/reports/item-3617',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3618 = defineMockEndpoint({
    path: '/reports/item-3618',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3619 = defineMockEndpoint({
    path: '/reports/item-3619',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3620 = defineMockEndpoint({
    path: '/reports/item-3620',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3621 = defineMockEndpoint({
    path: '/reports/item-3621',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3622 = defineMockEndpoint({
    path: '/reports/item-3622',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3623 = defineMockEndpoint({
    path: '/reports/item-3623',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3624 = defineMockEndpoint({
    path: '/reports/item-3624',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3625 = defineMockEndpoint({
    path: '/reports/item-3625',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3626 = defineMockEndpoint({
    path: '/reports/item-3626',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3627 = defineMockEndpoint({
    path: '/reports/item-3627',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3628 = defineMockEndpoint({
    path: '/reports/item-3628',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3629 = defineMockEndpoint({
    path: '/reports/item-3629',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3630 = defineMockEndpoint({
    path: '/reports/item-3630',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3631 = defineMockEndpoint({
    path: '/reports/item-3631',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3632 = defineMockEndpoint({
    path: '/reports/item-3632',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3633 = defineMockEndpoint({
    path: '/reports/item-3633',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3634 = defineMockEndpoint({
    path: '/reports/item-3634',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3635 = defineMockEndpoint({
    path: '/reports/item-3635',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3636 = defineMockEndpoint({
    path: '/reports/item-3636',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3637 = defineMockEndpoint({
    path: '/reports/item-3637',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3638 = defineMockEndpoint({
    path: '/reports/item-3638',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3639 = defineMockEndpoint({
    path: '/reports/item-3639',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3640 = defineMockEndpoint({
    path: '/reports/item-3640',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3641 = defineMockEndpoint({
    path: '/reports/item-3641',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3642 = defineMockEndpoint({
    path: '/reports/item-3642',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3643 = defineMockEndpoint({
    path: '/reports/item-3643',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3644 = defineMockEndpoint({
    path: '/reports/item-3644',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3645 = defineMockEndpoint({
    path: '/reports/item-3645',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3646 = defineMockEndpoint({
    path: '/reports/item-3646',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3647 = defineMockEndpoint({
    path: '/reports/item-3647',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3648 = defineMockEndpoint({
    path: '/reports/item-3648',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3649 = defineMockEndpoint({
    path: '/reports/item-3649',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3650 = defineMockEndpoint({
    path: '/reports/item-3650',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3651 = defineMockEndpoint({
    path: '/reports/item-3651',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3652 = defineMockEndpoint({
    path: '/reports/item-3652',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3653 = defineMockEndpoint({
    path: '/reports/item-3653',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3654 = defineMockEndpoint({
    path: '/reports/item-3654',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3655 = defineMockEndpoint({
    path: '/reports/item-3655',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3656 = defineMockEndpoint({
    path: '/reports/item-3656',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3657 = defineMockEndpoint({
    path: '/reports/item-3657',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3658 = defineMockEndpoint({
    path: '/reports/item-3658',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3659 = defineMockEndpoint({
    path: '/reports/item-3659',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3660 = defineMockEndpoint({
    path: '/reports/item-3660',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3661 = defineMockEndpoint({
    path: '/reports/item-3661',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3662 = defineMockEndpoint({
    path: '/reports/item-3662',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3663 = defineMockEndpoint({
    path: '/reports/item-3663',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3664 = defineMockEndpoint({
    path: '/reports/item-3664',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3665 = defineMockEndpoint({
    path: '/reports/item-3665',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3666 = defineMockEndpoint({
    path: '/reports/item-3666',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3667 = defineMockEndpoint({
    path: '/reports/item-3667',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3668 = defineMockEndpoint({
    path: '/reports/item-3668',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3669 = defineMockEndpoint({
    path: '/reports/item-3669',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3670 = defineMockEndpoint({
    path: '/reports/item-3670',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3671 = defineMockEndpoint({
    path: '/reports/item-3671',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3672 = defineMockEndpoint({
    path: '/reports/item-3672',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3673 = defineMockEndpoint({
    path: '/reports/item-3673',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3674 = defineMockEndpoint({
    path: '/reports/item-3674',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3675 = defineMockEndpoint({
    path: '/reports/item-3675',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3676 = defineMockEndpoint({
    path: '/reports/item-3676',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3677 = defineMockEndpoint({
    path: '/reports/item-3677',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3678 = defineMockEndpoint({
    path: '/reports/item-3678',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3679 = defineMockEndpoint({
    path: '/reports/item-3679',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3680 = defineMockEndpoint({
    path: '/reports/item-3680',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3681 = defineMockEndpoint({
    path: '/reports/item-3681',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3682 = defineMockEndpoint({
    path: '/reports/item-3682',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3683 = defineMockEndpoint({
    path: '/reports/item-3683',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3684 = defineMockEndpoint({
    path: '/reports/item-3684',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3685 = defineMockEndpoint({
    path: '/reports/item-3685',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3686 = defineMockEndpoint({
    path: '/reports/item-3686',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3687 = defineMockEndpoint({
    path: '/reports/item-3687',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3688 = defineMockEndpoint({
    path: '/reports/item-3688',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3689 = defineMockEndpoint({
    path: '/reports/item-3689',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3690 = defineMockEndpoint({
    path: '/reports/item-3690',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3691 = defineMockEndpoint({
    path: '/reports/item-3691',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3692 = defineMockEndpoint({
    path: '/reports/item-3692',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3693 = defineMockEndpoint({
    path: '/reports/item-3693',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3694 = defineMockEndpoint({
    path: '/reports/item-3694',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3695 = defineMockEndpoint({
    path: '/reports/item-3695',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3696 = defineMockEndpoint({
    path: '/reports/item-3696',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3697 = defineMockEndpoint({
    path: '/reports/item-3697',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3698 = defineMockEndpoint({
    path: '/reports/item-3698',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3699 = defineMockEndpoint({
    path: '/reports/item-3699',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3700 = defineMockEndpoint({
    path: '/reports/item-3700',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3701 = defineMockEndpoint({
    path: '/reports/item-3701',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3702 = defineMockEndpoint({
    path: '/reports/item-3702',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3703 = defineMockEndpoint({
    path: '/reports/item-3703',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3704 = defineMockEndpoint({
    path: '/reports/item-3704',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3705 = defineMockEndpoint({
    path: '/reports/item-3705',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3706 = defineMockEndpoint({
    path: '/reports/item-3706',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3707 = defineMockEndpoint({
    path: '/reports/item-3707',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3708 = defineMockEndpoint({
    path: '/reports/item-3708',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3709 = defineMockEndpoint({
    path: '/reports/item-3709',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3710 = defineMockEndpoint({
    path: '/reports/item-3710',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3711 = defineMockEndpoint({
    path: '/reports/item-3711',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3712 = defineMockEndpoint({
    path: '/reports/item-3712',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3713 = defineMockEndpoint({
    path: '/reports/item-3713',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3714 = defineMockEndpoint({
    path: '/reports/item-3714',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3715 = defineMockEndpoint({
    path: '/reports/item-3715',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3716 = defineMockEndpoint({
    path: '/reports/item-3716',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3717 = defineMockEndpoint({
    path: '/reports/item-3717',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3718 = defineMockEndpoint({
    path: '/reports/item-3718',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3719 = defineMockEndpoint({
    path: '/reports/item-3719',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3720 = defineMockEndpoint({
    path: '/reports/item-3720',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3721 = defineMockEndpoint({
    path: '/reports/item-3721',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3722 = defineMockEndpoint({
    path: '/reports/item-3722',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3723 = defineMockEndpoint({
    path: '/reports/item-3723',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3724 = defineMockEndpoint({
    path: '/reports/item-3724',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3725 = defineMockEndpoint({
    path: '/reports/item-3725',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3726 = defineMockEndpoint({
    path: '/reports/item-3726',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3727 = defineMockEndpoint({
    path: '/reports/item-3727',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3728 = defineMockEndpoint({
    path: '/reports/item-3728',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3729 = defineMockEndpoint({
    path: '/reports/item-3729',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3730 = defineMockEndpoint({
    path: '/reports/item-3730',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3731 = defineMockEndpoint({
    path: '/reports/item-3731',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3732 = defineMockEndpoint({
    path: '/reports/item-3732',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3733 = defineMockEndpoint({
    path: '/reports/item-3733',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3734 = defineMockEndpoint({
    path: '/reports/item-3734',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3735 = defineMockEndpoint({
    path: '/reports/item-3735',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3736 = defineMockEndpoint({
    path: '/reports/item-3736',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3737 = defineMockEndpoint({
    path: '/reports/item-3737',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3738 = defineMockEndpoint({
    path: '/reports/item-3738',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3739 = defineMockEndpoint({
    path: '/reports/item-3739',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3740 = defineMockEndpoint({
    path: '/reports/item-3740',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3741 = defineMockEndpoint({
    path: '/reports/item-3741',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3742 = defineMockEndpoint({
    path: '/reports/item-3742',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3743 = defineMockEndpoint({
    path: '/reports/item-3743',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3744 = defineMockEndpoint({
    path: '/reports/item-3744',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3745 = defineMockEndpoint({
    path: '/reports/item-3745',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3746 = defineMockEndpoint({
    path: '/reports/item-3746',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3747 = defineMockEndpoint({
    path: '/reports/item-3747',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3748 = defineMockEndpoint({
    path: '/reports/item-3748',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3749 = defineMockEndpoint({
    path: '/reports/item-3749',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3750 = defineMockEndpoint({
    path: '/reports/item-3750',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3751 = defineMockEndpoint({
    path: '/reports/item-3751',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3752 = defineMockEndpoint({
    path: '/reports/item-3752',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3753 = defineMockEndpoint({
    path: '/reports/item-3753',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3754 = defineMockEndpoint({
    path: '/reports/item-3754',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3755 = defineMockEndpoint({
    path: '/reports/item-3755',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3756 = defineMockEndpoint({
    path: '/reports/item-3756',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3757 = defineMockEndpoint({
    path: '/reports/item-3757',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3758 = defineMockEndpoint({
    path: '/reports/item-3758',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3759 = defineMockEndpoint({
    path: '/reports/item-3759',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3760 = defineMockEndpoint({
    path: '/reports/item-3760',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3761 = defineMockEndpoint({
    path: '/reports/item-3761',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3762 = defineMockEndpoint({
    path: '/reports/item-3762',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3763 = defineMockEndpoint({
    path: '/reports/item-3763',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3764 = defineMockEndpoint({
    path: '/reports/item-3764',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3765 = defineMockEndpoint({
    path: '/reports/item-3765',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3766 = defineMockEndpoint({
    path: '/reports/item-3766',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3767 = defineMockEndpoint({
    path: '/reports/item-3767',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3768 = defineMockEndpoint({
    path: '/reports/item-3768',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3769 = defineMockEndpoint({
    path: '/reports/item-3769',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3770 = defineMockEndpoint({
    path: '/reports/item-3770',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3771 = defineMockEndpoint({
    path: '/reports/item-3771',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3772 = defineMockEndpoint({
    path: '/reports/item-3772',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3773 = defineMockEndpoint({
    path: '/reports/item-3773',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3774 = defineMockEndpoint({
    path: '/reports/item-3774',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3775 = defineMockEndpoint({
    path: '/reports/item-3775',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3776 = defineMockEndpoint({
    path: '/reports/item-3776',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3777 = defineMockEndpoint({
    path: '/reports/item-3777',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3778 = defineMockEndpoint({
    path: '/reports/item-3778',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3779 = defineMockEndpoint({
    path: '/reports/item-3779',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3780 = defineMockEndpoint({
    path: '/reports/item-3780',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3781 = defineMockEndpoint({
    path: '/reports/item-3781',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3782 = defineMockEndpoint({
    path: '/reports/item-3782',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3783 = defineMockEndpoint({
    path: '/reports/item-3783',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3784 = defineMockEndpoint({
    path: '/reports/item-3784',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3785 = defineMockEndpoint({
    path: '/reports/item-3785',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3786 = defineMockEndpoint({
    path: '/reports/item-3786',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3787 = defineMockEndpoint({
    path: '/reports/item-3787',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3788 = defineMockEndpoint({
    path: '/reports/item-3788',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3789 = defineMockEndpoint({
    path: '/reports/item-3789',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3790 = defineMockEndpoint({
    path: '/reports/item-3790',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3791 = defineMockEndpoint({
    path: '/reports/item-3791',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3792 = defineMockEndpoint({
    path: '/reports/item-3792',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3793 = defineMockEndpoint({
    path: '/reports/item-3793',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3794 = defineMockEndpoint({
    path: '/reports/item-3794',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3795 = defineMockEndpoint({
    path: '/reports/item-3795',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3796 = defineMockEndpoint({
    path: '/reports/item-3796',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3797 = defineMockEndpoint({
    path: '/reports/item-3797',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3798 = defineMockEndpoint({
    path: '/reports/item-3798',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3799 = defineMockEndpoint({
    path: '/reports/item-3799',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3800 = defineMockEndpoint({
    path: '/reports/item-3800',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3801 = defineMockEndpoint({
    path: '/reports/item-3801',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3802 = defineMockEndpoint({
    path: '/reports/item-3802',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3803 = defineMockEndpoint({
    path: '/reports/item-3803',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3804 = defineMockEndpoint({
    path: '/reports/item-3804',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3805 = defineMockEndpoint({
    path: '/reports/item-3805',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3806 = defineMockEndpoint({
    path: '/reports/item-3806',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3807 = defineMockEndpoint({
    path: '/reports/item-3807',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3808 = defineMockEndpoint({
    path: '/reports/item-3808',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3809 = defineMockEndpoint({
    path: '/reports/item-3809',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3810 = defineMockEndpoint({
    path: '/reports/item-3810',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3811 = defineMockEndpoint({
    path: '/reports/item-3811',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3812 = defineMockEndpoint({
    path: '/reports/item-3812',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3813 = defineMockEndpoint({
    path: '/reports/item-3813',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3814 = defineMockEndpoint({
    path: '/reports/item-3814',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3815 = defineMockEndpoint({
    path: '/reports/item-3815',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3816 = defineMockEndpoint({
    path: '/reports/item-3816',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3817 = defineMockEndpoint({
    path: '/reports/item-3817',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3818 = defineMockEndpoint({
    path: '/reports/item-3818',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3819 = defineMockEndpoint({
    path: '/reports/item-3819',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3820 = defineMockEndpoint({
    path: '/reports/item-3820',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3821 = defineMockEndpoint({
    path: '/reports/item-3821',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3822 = defineMockEndpoint({
    path: '/reports/item-3822',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3823 = defineMockEndpoint({
    path: '/reports/item-3823',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3824 = defineMockEndpoint({
    path: '/reports/item-3824',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3825 = defineMockEndpoint({
    path: '/reports/item-3825',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3826 = defineMockEndpoint({
    path: '/reports/item-3826',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3827 = defineMockEndpoint({
    path: '/reports/item-3827',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3828 = defineMockEndpoint({
    path: '/reports/item-3828',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3829 = defineMockEndpoint({
    path: '/reports/item-3829',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3830 = defineMockEndpoint({
    path: '/reports/item-3830',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3831 = defineMockEndpoint({
    path: '/reports/item-3831',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3832 = defineMockEndpoint({
    path: '/reports/item-3832',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3833 = defineMockEndpoint({
    path: '/reports/item-3833',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3834 = defineMockEndpoint({
    path: '/reports/item-3834',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3835 = defineMockEndpoint({
    path: '/reports/item-3835',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3836 = defineMockEndpoint({
    path: '/reports/item-3836',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3837 = defineMockEndpoint({
    path: '/reports/item-3837',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3838 = defineMockEndpoint({
    path: '/reports/item-3838',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3839 = defineMockEndpoint({
    path: '/reports/item-3839',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3840 = defineMockEndpoint({
    path: '/reports/item-3840',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3841 = defineMockEndpoint({
    path: '/reports/item-3841',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3842 = defineMockEndpoint({
    path: '/reports/item-3842',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3843 = defineMockEndpoint({
    path: '/reports/item-3843',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3844 = defineMockEndpoint({
    path: '/reports/item-3844',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3845 = defineMockEndpoint({
    path: '/reports/item-3845',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3846 = defineMockEndpoint({
    path: '/reports/item-3846',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3847 = defineMockEndpoint({
    path: '/reports/item-3847',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3848 = defineMockEndpoint({
    path: '/reports/item-3848',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3849 = defineMockEndpoint({
    path: '/reports/item-3849',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3850 = defineMockEndpoint({
    path: '/reports/item-3850',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3851 = defineMockEndpoint({
    path: '/reports/item-3851',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3852 = defineMockEndpoint({
    path: '/reports/item-3852',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3853 = defineMockEndpoint({
    path: '/reports/item-3853',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3854 = defineMockEndpoint({
    path: '/reports/item-3854',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3855 = defineMockEndpoint({
    path: '/reports/item-3855',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3856 = defineMockEndpoint({
    path: '/reports/item-3856',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3857 = defineMockEndpoint({
    path: '/reports/item-3857',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3858 = defineMockEndpoint({
    path: '/reports/item-3858',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3859 = defineMockEndpoint({
    path: '/reports/item-3859',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3860 = defineMockEndpoint({
    path: '/reports/item-3860',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3861 = defineMockEndpoint({
    path: '/reports/item-3861',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3862 = defineMockEndpoint({
    path: '/reports/item-3862',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3863 = defineMockEndpoint({
    path: '/reports/item-3863',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3864 = defineMockEndpoint({
    path: '/reports/item-3864',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3865 = defineMockEndpoint({
    path: '/reports/item-3865',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3866 = defineMockEndpoint({
    path: '/reports/item-3866',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3867 = defineMockEndpoint({
    path: '/reports/item-3867',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3868 = defineMockEndpoint({
    path: '/reports/item-3868',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3869 = defineMockEndpoint({
    path: '/reports/item-3869',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3870 = defineMockEndpoint({
    path: '/reports/item-3870',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3871 = defineMockEndpoint({
    path: '/reports/item-3871',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3872 = defineMockEndpoint({
    path: '/reports/item-3872',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3873 = defineMockEndpoint({
    path: '/reports/item-3873',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3874 = defineMockEndpoint({
    path: '/reports/item-3874',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3875 = defineMockEndpoint({
    path: '/reports/item-3875',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3876 = defineMockEndpoint({
    path: '/reports/item-3876',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3877 = defineMockEndpoint({
    path: '/reports/item-3877',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3878 = defineMockEndpoint({
    path: '/reports/item-3878',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3879 = defineMockEndpoint({
    path: '/reports/item-3879',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3880 = defineMockEndpoint({
    path: '/reports/item-3880',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3881 = defineMockEndpoint({
    path: '/reports/item-3881',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3882 = defineMockEndpoint({
    path: '/reports/item-3882',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3883 = defineMockEndpoint({
    path: '/reports/item-3883',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3884 = defineMockEndpoint({
    path: '/reports/item-3884',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3885 = defineMockEndpoint({
    path: '/reports/item-3885',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3886 = defineMockEndpoint({
    path: '/reports/item-3886',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3887 = defineMockEndpoint({
    path: '/reports/item-3887',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3888 = defineMockEndpoint({
    path: '/reports/item-3888',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3889 = defineMockEndpoint({
    path: '/reports/item-3889',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3890 = defineMockEndpoint({
    path: '/reports/item-3890',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3891 = defineMockEndpoint({
    path: '/reports/item-3891',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3892 = defineMockEndpoint({
    path: '/reports/item-3892',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3893 = defineMockEndpoint({
    path: '/reports/item-3893',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3894 = defineMockEndpoint({
    path: '/reports/item-3894',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3895 = defineMockEndpoint({
    path: '/reports/item-3895',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3896 = defineMockEndpoint({
    path: '/reports/item-3896',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3897 = defineMockEndpoint({
    path: '/reports/item-3897',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3898 = defineMockEndpoint({
    path: '/reports/item-3898',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3899 = defineMockEndpoint({
    path: '/reports/item-3899',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3900 = defineMockEndpoint({
    path: '/reports/item-3900',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3901 = defineMockEndpoint({
    path: '/reports/item-3901',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3902 = defineMockEndpoint({
    path: '/reports/item-3902',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3903 = defineMockEndpoint({
    path: '/reports/item-3903',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3904 = defineMockEndpoint({
    path: '/reports/item-3904',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3905 = defineMockEndpoint({
    path: '/reports/item-3905',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3906 = defineMockEndpoint({
    path: '/reports/item-3906',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3907 = defineMockEndpoint({
    path: '/reports/item-3907',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3908 = defineMockEndpoint({
    path: '/reports/item-3908',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3909 = defineMockEndpoint({
    path: '/reports/item-3909',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3910 = defineMockEndpoint({
    path: '/reports/item-3910',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3911 = defineMockEndpoint({
    path: '/reports/item-3911',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3912 = defineMockEndpoint({
    path: '/reports/item-3912',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3913 = defineMockEndpoint({
    path: '/reports/item-3913',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3914 = defineMockEndpoint({
    path: '/reports/item-3914',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3915 = defineMockEndpoint({
    path: '/reports/item-3915',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3916 = defineMockEndpoint({
    path: '/reports/item-3916',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3917 = defineMockEndpoint({
    path: '/reports/item-3917',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3918 = defineMockEndpoint({
    path: '/reports/item-3918',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3919 = defineMockEndpoint({
    path: '/reports/item-3919',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3920 = defineMockEndpoint({
    path: '/reports/item-3920',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3921 = defineMockEndpoint({
    path: '/reports/item-3921',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3922 = defineMockEndpoint({
    path: '/reports/item-3922',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3923 = defineMockEndpoint({
    path: '/reports/item-3923',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3924 = defineMockEndpoint({
    path: '/reports/item-3924',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3925 = defineMockEndpoint({
    path: '/reports/item-3925',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3926 = defineMockEndpoint({
    path: '/reports/item-3926',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3927 = defineMockEndpoint({
    path: '/reports/item-3927',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3928 = defineMockEndpoint({
    path: '/reports/item-3928',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3929 = defineMockEndpoint({
    path: '/reports/item-3929',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3930 = defineMockEndpoint({
    path: '/reports/item-3930',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3931 = defineMockEndpoint({
    path: '/reports/item-3931',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3932 = defineMockEndpoint({
    path: '/reports/item-3932',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3933 = defineMockEndpoint({
    path: '/reports/item-3933',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3934 = defineMockEndpoint({
    path: '/reports/item-3934',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3935 = defineMockEndpoint({
    path: '/reports/item-3935',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3936 = defineMockEndpoint({
    path: '/reports/item-3936',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3937 = defineMockEndpoint({
    path: '/reports/item-3937',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3938 = defineMockEndpoint({
    path: '/reports/item-3938',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3939 = defineMockEndpoint({
    path: '/reports/item-3939',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3940 = defineMockEndpoint({
    path: '/reports/item-3940',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3941 = defineMockEndpoint({
    path: '/reports/item-3941',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3942 = defineMockEndpoint({
    path: '/reports/item-3942',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3943 = defineMockEndpoint({
    path: '/reports/item-3943',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3944 = defineMockEndpoint({
    path: '/reports/item-3944',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3945 = defineMockEndpoint({
    path: '/reports/item-3945',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3946 = defineMockEndpoint({
    path: '/reports/item-3946',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3947 = defineMockEndpoint({
    path: '/reports/item-3947',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3948 = defineMockEndpoint({
    path: '/reports/item-3948',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3949 = defineMockEndpoint({
    path: '/reports/item-3949',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3950 = defineMockEndpoint({
    path: '/reports/item-3950',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3951 = defineMockEndpoint({
    path: '/reports/item-3951',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3952 = defineMockEndpoint({
    path: '/reports/item-3952',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3953 = defineMockEndpoint({
    path: '/reports/item-3953',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3954 = defineMockEndpoint({
    path: '/reports/item-3954',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3955 = defineMockEndpoint({
    path: '/reports/item-3955',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3956 = defineMockEndpoint({
    path: '/reports/item-3956',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3957 = defineMockEndpoint({
    path: '/reports/item-3957',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3958 = defineMockEndpoint({
    path: '/reports/item-3958',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3959 = defineMockEndpoint({
    path: '/reports/item-3959',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3960 = defineMockEndpoint({
    path: '/reports/item-3960',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3961 = defineMockEndpoint({
    path: '/reports/item-3961',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3962 = defineMockEndpoint({
    path: '/reports/item-3962',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3963 = defineMockEndpoint({
    path: '/reports/item-3963',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3964 = defineMockEndpoint({
    path: '/reports/item-3964',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3965 = defineMockEndpoint({
    path: '/reports/item-3965',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3966 = defineMockEndpoint({
    path: '/reports/item-3966',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3967 = defineMockEndpoint({
    path: '/reports/item-3967',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3968 = defineMockEndpoint({
    path: '/reports/item-3968',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3969 = defineMockEndpoint({
    path: '/reports/item-3969',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3970 = defineMockEndpoint({
    path: '/reports/item-3970',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3971 = defineMockEndpoint({
    path: '/reports/item-3971',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3972 = defineMockEndpoint({
    path: '/reports/item-3972',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3973 = defineMockEndpoint({
    path: '/reports/item-3973',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3974 = defineMockEndpoint({
    path: '/reports/item-3974',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3975 = defineMockEndpoint({
    path: '/reports/item-3975',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3976 = defineMockEndpoint({
    path: '/reports/item-3976',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3977 = defineMockEndpoint({
    path: '/reports/item-3977',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3978 = defineMockEndpoint({
    path: '/reports/item-3978',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3979 = defineMockEndpoint({
    path: '/reports/item-3979',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3980 = defineMockEndpoint({
    path: '/reports/item-3980',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3981 = defineMockEndpoint({
    path: '/reports/item-3981',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3982 = defineMockEndpoint({
    path: '/reports/item-3982',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3983 = defineMockEndpoint({
    path: '/reports/item-3983',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3984 = defineMockEndpoint({
    path: '/reports/item-3984',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3985 = defineMockEndpoint({
    path: '/reports/item-3985',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3986 = defineMockEndpoint({
    path: '/reports/item-3986',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3987 = defineMockEndpoint({
    path: '/reports/item-3987',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3988 = defineMockEndpoint({
    path: '/reports/item-3988',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3989 = defineMockEndpoint({
    path: '/reports/item-3989',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3990 = defineMockEndpoint({
    path: '/reports/item-3990',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3991 = defineMockEndpoint({
    path: '/reports/item-3991',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3992 = defineMockEndpoint({
    path: '/reports/item-3992',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3993 = defineMockEndpoint({
    path: '/reports/item-3993',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3994 = defineMockEndpoint({
    path: '/reports/item-3994',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3995 = defineMockEndpoint({
    path: '/reports/item-3995',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3996 = defineMockEndpoint({
    path: '/reports/item-3996',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3997 = defineMockEndpoint({
    path: '/reports/item-3997',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3998 = defineMockEndpoint({
    path: '/reports/item-3998',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint3999 = defineMockEndpoint({
    path: '/reports/item-3999',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});
