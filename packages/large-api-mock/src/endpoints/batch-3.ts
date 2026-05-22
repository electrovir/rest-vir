import {HttpMethod, HttpStatus} from '@augment-vir/common';
import {defineEndpoint} from '@rest-vir/api';
import {defineShape} from 'object-shape-tester';
import {structuredRenderDataShape} from 'structured-render';
import {customProps} from '../define-mock-endpoint.js';

export const endpoint3000 = defineEndpoint({
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

export const endpoint3001 = defineEndpoint({
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

export const endpoint3002 = defineEndpoint({
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

export const endpoint3003 = defineEndpoint({
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

export const endpoint3004 = defineEndpoint({
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

export const endpoint3005 = defineEndpoint({
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

export const endpoint3006 = defineEndpoint({
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

export const endpoint3007 = defineEndpoint({
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

export const endpoint3008 = defineEndpoint({
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

export const endpoint3009 = defineEndpoint({
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

export const endpoint3010 = defineEndpoint({
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

export const endpoint3011 = defineEndpoint({
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

export const endpoint3012 = defineEndpoint({
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

export const endpoint3013 = defineEndpoint({
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

export const endpoint3014 = defineEndpoint({
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

export const endpoint3015 = defineEndpoint({
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

export const endpoint3016 = defineEndpoint({
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

export const endpoint3017 = defineEndpoint({
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

export const endpoint3018 = defineEndpoint({
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

export const endpoint3019 = defineEndpoint({
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

export const endpoint3020 = defineEndpoint({
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

export const endpoint3021 = defineEndpoint({
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

export const endpoint3022 = defineEndpoint({
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

export const endpoint3023 = defineEndpoint({
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

export const endpoint3024 = defineEndpoint({
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

export const endpoint3025 = defineEndpoint({
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

export const endpoint3026 = defineEndpoint({
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

export const endpoint3027 = defineEndpoint({
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

export const endpoint3028 = defineEndpoint({
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

export const endpoint3029 = defineEndpoint({
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

export const endpoint3030 = defineEndpoint({
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

export const endpoint3031 = defineEndpoint({
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

export const endpoint3032 = defineEndpoint({
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

export const endpoint3033 = defineEndpoint({
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

export const endpoint3034 = defineEndpoint({
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

export const endpoint3035 = defineEndpoint({
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

export const endpoint3036 = defineEndpoint({
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

export const endpoint3037 = defineEndpoint({
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

export const endpoint3038 = defineEndpoint({
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

export const endpoint3039 = defineEndpoint({
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

export const endpoint3040 = defineEndpoint({
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

export const endpoint3041 = defineEndpoint({
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

export const endpoint3042 = defineEndpoint({
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

export const endpoint3043 = defineEndpoint({
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

export const endpoint3044 = defineEndpoint({
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

export const endpoint3045 = defineEndpoint({
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

export const endpoint3046 = defineEndpoint({
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

export const endpoint3047 = defineEndpoint({
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

export const endpoint3048 = defineEndpoint({
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

export const endpoint3049 = defineEndpoint({
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

export const endpoint3050 = defineEndpoint({
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

export const endpoint3051 = defineEndpoint({
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

export const endpoint3052 = defineEndpoint({
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

export const endpoint3053 = defineEndpoint({
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

export const endpoint3054 = defineEndpoint({
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

export const endpoint3055 = defineEndpoint({
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

export const endpoint3056 = defineEndpoint({
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

export const endpoint3057 = defineEndpoint({
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

export const endpoint3058 = defineEndpoint({
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

export const endpoint3059 = defineEndpoint({
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

export const endpoint3060 = defineEndpoint({
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

export const endpoint3061 = defineEndpoint({
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

export const endpoint3062 = defineEndpoint({
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

export const endpoint3063 = defineEndpoint({
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

export const endpoint3064 = defineEndpoint({
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

export const endpoint3065 = defineEndpoint({
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

export const endpoint3066 = defineEndpoint({
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

export const endpoint3067 = defineEndpoint({
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

export const endpoint3068 = defineEndpoint({
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

export const endpoint3069 = defineEndpoint({
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

export const endpoint3070 = defineEndpoint({
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

export const endpoint3071 = defineEndpoint({
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

export const endpoint3072 = defineEndpoint({
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

export const endpoint3073 = defineEndpoint({
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

export const endpoint3074 = defineEndpoint({
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

export const endpoint3075 = defineEndpoint({
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

export const endpoint3076 = defineEndpoint({
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

export const endpoint3077 = defineEndpoint({
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

export const endpoint3078 = defineEndpoint({
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

export const endpoint3079 = defineEndpoint({
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

export const endpoint3080 = defineEndpoint({
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

export const endpoint3081 = defineEndpoint({
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

export const endpoint3082 = defineEndpoint({
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

export const endpoint3083 = defineEndpoint({
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

export const endpoint3084 = defineEndpoint({
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

export const endpoint3085 = defineEndpoint({
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

export const endpoint3086 = defineEndpoint({
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

export const endpoint3087 = defineEndpoint({
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

export const endpoint3088 = defineEndpoint({
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

export const endpoint3089 = defineEndpoint({
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

export const endpoint3090 = defineEndpoint({
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

export const endpoint3091 = defineEndpoint({
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

export const endpoint3092 = defineEndpoint({
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

export const endpoint3093 = defineEndpoint({
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

export const endpoint3094 = defineEndpoint({
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

export const endpoint3095 = defineEndpoint({
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

export const endpoint3096 = defineEndpoint({
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

export const endpoint3097 = defineEndpoint({
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

export const endpoint3098 = defineEndpoint({
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

export const endpoint3099 = defineEndpoint({
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

export const endpoint3100 = defineEndpoint({
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

export const endpoint3101 = defineEndpoint({
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

export const endpoint3102 = defineEndpoint({
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

export const endpoint3103 = defineEndpoint({
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

export const endpoint3104 = defineEndpoint({
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

export const endpoint3105 = defineEndpoint({
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

export const endpoint3106 = defineEndpoint({
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

export const endpoint3107 = defineEndpoint({
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

export const endpoint3108 = defineEndpoint({
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

export const endpoint3109 = defineEndpoint({
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

export const endpoint3110 = defineEndpoint({
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

export const endpoint3111 = defineEndpoint({
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

export const endpoint3112 = defineEndpoint({
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

export const endpoint3113 = defineEndpoint({
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

export const endpoint3114 = defineEndpoint({
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

export const endpoint3115 = defineEndpoint({
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

export const endpoint3116 = defineEndpoint({
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

export const endpoint3117 = defineEndpoint({
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

export const endpoint3118 = defineEndpoint({
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

export const endpoint3119 = defineEndpoint({
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

export const endpoint3120 = defineEndpoint({
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

export const endpoint3121 = defineEndpoint({
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

export const endpoint3122 = defineEndpoint({
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

export const endpoint3123 = defineEndpoint({
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

export const endpoint3124 = defineEndpoint({
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

export const endpoint3125 = defineEndpoint({
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

export const endpoint3126 = defineEndpoint({
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

export const endpoint3127 = defineEndpoint({
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

export const endpoint3128 = defineEndpoint({
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

export const endpoint3129 = defineEndpoint({
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

export const endpoint3130 = defineEndpoint({
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

export const endpoint3131 = defineEndpoint({
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

export const endpoint3132 = defineEndpoint({
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

export const endpoint3133 = defineEndpoint({
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

export const endpoint3134 = defineEndpoint({
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

export const endpoint3135 = defineEndpoint({
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

export const endpoint3136 = defineEndpoint({
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

export const endpoint3137 = defineEndpoint({
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

export const endpoint3138 = defineEndpoint({
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

export const endpoint3139 = defineEndpoint({
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

export const endpoint3140 = defineEndpoint({
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

export const endpoint3141 = defineEndpoint({
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

export const endpoint3142 = defineEndpoint({
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

export const endpoint3143 = defineEndpoint({
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

export const endpoint3144 = defineEndpoint({
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

export const endpoint3145 = defineEndpoint({
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

export const endpoint3146 = defineEndpoint({
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

export const endpoint3147 = defineEndpoint({
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

export const endpoint3148 = defineEndpoint({
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

export const endpoint3149 = defineEndpoint({
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

export const endpoint3150 = defineEndpoint({
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

export const endpoint3151 = defineEndpoint({
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

export const endpoint3152 = defineEndpoint({
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

export const endpoint3153 = defineEndpoint({
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

export const endpoint3154 = defineEndpoint({
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

export const endpoint3155 = defineEndpoint({
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

export const endpoint3156 = defineEndpoint({
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

export const endpoint3157 = defineEndpoint({
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

export const endpoint3158 = defineEndpoint({
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

export const endpoint3159 = defineEndpoint({
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

export const endpoint3160 = defineEndpoint({
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

export const endpoint3161 = defineEndpoint({
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

export const endpoint3162 = defineEndpoint({
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

export const endpoint3163 = defineEndpoint({
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

export const endpoint3164 = defineEndpoint({
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

export const endpoint3165 = defineEndpoint({
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

export const endpoint3166 = defineEndpoint({
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

export const endpoint3167 = defineEndpoint({
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

export const endpoint3168 = defineEndpoint({
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

export const endpoint3169 = defineEndpoint({
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

export const endpoint3170 = defineEndpoint({
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

export const endpoint3171 = defineEndpoint({
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

export const endpoint3172 = defineEndpoint({
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

export const endpoint3173 = defineEndpoint({
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

export const endpoint3174 = defineEndpoint({
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

export const endpoint3175 = defineEndpoint({
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

export const endpoint3176 = defineEndpoint({
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

export const endpoint3177 = defineEndpoint({
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

export const endpoint3178 = defineEndpoint({
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

export const endpoint3179 = defineEndpoint({
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

export const endpoint3180 = defineEndpoint({
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

export const endpoint3181 = defineEndpoint({
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

export const endpoint3182 = defineEndpoint({
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

export const endpoint3183 = defineEndpoint({
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

export const endpoint3184 = defineEndpoint({
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

export const endpoint3185 = defineEndpoint({
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

export const endpoint3186 = defineEndpoint({
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

export const endpoint3187 = defineEndpoint({
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

export const endpoint3188 = defineEndpoint({
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

export const endpoint3189 = defineEndpoint({
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

export const endpoint3190 = defineEndpoint({
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

export const endpoint3191 = defineEndpoint({
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

export const endpoint3192 = defineEndpoint({
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

export const endpoint3193 = defineEndpoint({
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

export const endpoint3194 = defineEndpoint({
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

export const endpoint3195 = defineEndpoint({
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

export const endpoint3196 = defineEndpoint({
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

export const endpoint3197 = defineEndpoint({
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

export const endpoint3198 = defineEndpoint({
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

export const endpoint3199 = defineEndpoint({
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

export const endpoint3200 = defineEndpoint({
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

export const endpoint3201 = defineEndpoint({
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

export const endpoint3202 = defineEndpoint({
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

export const endpoint3203 = defineEndpoint({
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

export const endpoint3204 = defineEndpoint({
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

export const endpoint3205 = defineEndpoint({
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

export const endpoint3206 = defineEndpoint({
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

export const endpoint3207 = defineEndpoint({
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

export const endpoint3208 = defineEndpoint({
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

export const endpoint3209 = defineEndpoint({
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

export const endpoint3210 = defineEndpoint({
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

export const endpoint3211 = defineEndpoint({
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

export const endpoint3212 = defineEndpoint({
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

export const endpoint3213 = defineEndpoint({
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

export const endpoint3214 = defineEndpoint({
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

export const endpoint3215 = defineEndpoint({
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

export const endpoint3216 = defineEndpoint({
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

export const endpoint3217 = defineEndpoint({
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

export const endpoint3218 = defineEndpoint({
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

export const endpoint3219 = defineEndpoint({
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

export const endpoint3220 = defineEndpoint({
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

export const endpoint3221 = defineEndpoint({
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

export const endpoint3222 = defineEndpoint({
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

export const endpoint3223 = defineEndpoint({
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

export const endpoint3224 = defineEndpoint({
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

export const endpoint3225 = defineEndpoint({
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

export const endpoint3226 = defineEndpoint({
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

export const endpoint3227 = defineEndpoint({
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

export const endpoint3228 = defineEndpoint({
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

export const endpoint3229 = defineEndpoint({
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

export const endpoint3230 = defineEndpoint({
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

export const endpoint3231 = defineEndpoint({
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

export const endpoint3232 = defineEndpoint({
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

export const endpoint3233 = defineEndpoint({
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

export const endpoint3234 = defineEndpoint({
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

export const endpoint3235 = defineEndpoint({
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

export const endpoint3236 = defineEndpoint({
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

export const endpoint3237 = defineEndpoint({
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

export const endpoint3238 = defineEndpoint({
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

export const endpoint3239 = defineEndpoint({
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

export const endpoint3240 = defineEndpoint({
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

export const endpoint3241 = defineEndpoint({
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

export const endpoint3242 = defineEndpoint({
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

export const endpoint3243 = defineEndpoint({
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

export const endpoint3244 = defineEndpoint({
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

export const endpoint3245 = defineEndpoint({
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

export const endpoint3246 = defineEndpoint({
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

export const endpoint3247 = defineEndpoint({
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

export const endpoint3248 = defineEndpoint({
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

export const endpoint3249 = defineEndpoint({
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

export const endpoint3250 = defineEndpoint({
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

export const endpoint3251 = defineEndpoint({
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

export const endpoint3252 = defineEndpoint({
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

export const endpoint3253 = defineEndpoint({
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

export const endpoint3254 = defineEndpoint({
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

export const endpoint3255 = defineEndpoint({
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

export const endpoint3256 = defineEndpoint({
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

export const endpoint3257 = defineEndpoint({
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

export const endpoint3258 = defineEndpoint({
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

export const endpoint3259 = defineEndpoint({
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

export const endpoint3260 = defineEndpoint({
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

export const endpoint3261 = defineEndpoint({
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

export const endpoint3262 = defineEndpoint({
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

export const endpoint3263 = defineEndpoint({
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

export const endpoint3264 = defineEndpoint({
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

export const endpoint3265 = defineEndpoint({
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

export const endpoint3266 = defineEndpoint({
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

export const endpoint3267 = defineEndpoint({
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

export const endpoint3268 = defineEndpoint({
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

export const endpoint3269 = defineEndpoint({
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

export const endpoint3270 = defineEndpoint({
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

export const endpoint3271 = defineEndpoint({
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

export const endpoint3272 = defineEndpoint({
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

export const endpoint3273 = defineEndpoint({
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

export const endpoint3274 = defineEndpoint({
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

export const endpoint3275 = defineEndpoint({
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

export const endpoint3276 = defineEndpoint({
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

export const endpoint3277 = defineEndpoint({
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

export const endpoint3278 = defineEndpoint({
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

export const endpoint3279 = defineEndpoint({
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

export const endpoint3280 = defineEndpoint({
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

export const endpoint3281 = defineEndpoint({
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

export const endpoint3282 = defineEndpoint({
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

export const endpoint3283 = defineEndpoint({
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

export const endpoint3284 = defineEndpoint({
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

export const endpoint3285 = defineEndpoint({
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

export const endpoint3286 = defineEndpoint({
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

export const endpoint3287 = defineEndpoint({
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

export const endpoint3288 = defineEndpoint({
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

export const endpoint3289 = defineEndpoint({
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

export const endpoint3290 = defineEndpoint({
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

export const endpoint3291 = defineEndpoint({
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

export const endpoint3292 = defineEndpoint({
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

export const endpoint3293 = defineEndpoint({
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

export const endpoint3294 = defineEndpoint({
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

export const endpoint3295 = defineEndpoint({
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

export const endpoint3296 = defineEndpoint({
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

export const endpoint3297 = defineEndpoint({
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

export const endpoint3298 = defineEndpoint({
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

export const endpoint3299 = defineEndpoint({
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

export const endpoint3300 = defineEndpoint({
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

export const endpoint3301 = defineEndpoint({
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

export const endpoint3302 = defineEndpoint({
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

export const endpoint3303 = defineEndpoint({
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

export const endpoint3304 = defineEndpoint({
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

export const endpoint3305 = defineEndpoint({
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

export const endpoint3306 = defineEndpoint({
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

export const endpoint3307 = defineEndpoint({
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

export const endpoint3308 = defineEndpoint({
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

export const endpoint3309 = defineEndpoint({
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

export const endpoint3310 = defineEndpoint({
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

export const endpoint3311 = defineEndpoint({
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

export const endpoint3312 = defineEndpoint({
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

export const endpoint3313 = defineEndpoint({
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

export const endpoint3314 = defineEndpoint({
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

export const endpoint3315 = defineEndpoint({
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

export const endpoint3316 = defineEndpoint({
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

export const endpoint3317 = defineEndpoint({
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

export const endpoint3318 = defineEndpoint({
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

export const endpoint3319 = defineEndpoint({
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

export const endpoint3320 = defineEndpoint({
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

export const endpoint3321 = defineEndpoint({
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

export const endpoint3322 = defineEndpoint({
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

export const endpoint3323 = defineEndpoint({
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

export const endpoint3324 = defineEndpoint({
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

export const endpoint3325 = defineEndpoint({
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

export const endpoint3326 = defineEndpoint({
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

export const endpoint3327 = defineEndpoint({
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

export const endpoint3328 = defineEndpoint({
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

export const endpoint3329 = defineEndpoint({
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

export const endpoint3330 = defineEndpoint({
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

export const endpoint3331 = defineEndpoint({
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

export const endpoint3332 = defineEndpoint({
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

export const endpoint3333 = defineEndpoint({
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

export const endpoint3334 = defineEndpoint({
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

export const endpoint3335 = defineEndpoint({
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

export const endpoint3336 = defineEndpoint({
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

export const endpoint3337 = defineEndpoint({
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

export const endpoint3338 = defineEndpoint({
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

export const endpoint3339 = defineEndpoint({
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

export const endpoint3340 = defineEndpoint({
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

export const endpoint3341 = defineEndpoint({
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

export const endpoint3342 = defineEndpoint({
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

export const endpoint3343 = defineEndpoint({
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

export const endpoint3344 = defineEndpoint({
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

export const endpoint3345 = defineEndpoint({
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

export const endpoint3346 = defineEndpoint({
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

export const endpoint3347 = defineEndpoint({
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

export const endpoint3348 = defineEndpoint({
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

export const endpoint3349 = defineEndpoint({
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

export const endpoint3350 = defineEndpoint({
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

export const endpoint3351 = defineEndpoint({
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

export const endpoint3352 = defineEndpoint({
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

export const endpoint3353 = defineEndpoint({
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

export const endpoint3354 = defineEndpoint({
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

export const endpoint3355 = defineEndpoint({
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

export const endpoint3356 = defineEndpoint({
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

export const endpoint3357 = defineEndpoint({
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

export const endpoint3358 = defineEndpoint({
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

export const endpoint3359 = defineEndpoint({
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

export const endpoint3360 = defineEndpoint({
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

export const endpoint3361 = defineEndpoint({
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

export const endpoint3362 = defineEndpoint({
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

export const endpoint3363 = defineEndpoint({
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

export const endpoint3364 = defineEndpoint({
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

export const endpoint3365 = defineEndpoint({
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

export const endpoint3366 = defineEndpoint({
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

export const endpoint3367 = defineEndpoint({
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

export const endpoint3368 = defineEndpoint({
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

export const endpoint3369 = defineEndpoint({
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

export const endpoint3370 = defineEndpoint({
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

export const endpoint3371 = defineEndpoint({
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

export const endpoint3372 = defineEndpoint({
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

export const endpoint3373 = defineEndpoint({
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

export const endpoint3374 = defineEndpoint({
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

export const endpoint3375 = defineEndpoint({
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

export const endpoint3376 = defineEndpoint({
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

export const endpoint3377 = defineEndpoint({
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

export const endpoint3378 = defineEndpoint({
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

export const endpoint3379 = defineEndpoint({
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

export const endpoint3380 = defineEndpoint({
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

export const endpoint3381 = defineEndpoint({
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

export const endpoint3382 = defineEndpoint({
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

export const endpoint3383 = defineEndpoint({
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

export const endpoint3384 = defineEndpoint({
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

export const endpoint3385 = defineEndpoint({
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

export const endpoint3386 = defineEndpoint({
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

export const endpoint3387 = defineEndpoint({
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

export const endpoint3388 = defineEndpoint({
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

export const endpoint3389 = defineEndpoint({
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

export const endpoint3390 = defineEndpoint({
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

export const endpoint3391 = defineEndpoint({
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

export const endpoint3392 = defineEndpoint({
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

export const endpoint3393 = defineEndpoint({
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

export const endpoint3394 = defineEndpoint({
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

export const endpoint3395 = defineEndpoint({
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

export const endpoint3396 = defineEndpoint({
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

export const endpoint3397 = defineEndpoint({
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

export const endpoint3398 = defineEndpoint({
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

export const endpoint3399 = defineEndpoint({
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

export const endpoint3400 = defineEndpoint({
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

export const endpoint3401 = defineEndpoint({
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

export const endpoint3402 = defineEndpoint({
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

export const endpoint3403 = defineEndpoint({
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

export const endpoint3404 = defineEndpoint({
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

export const endpoint3405 = defineEndpoint({
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

export const endpoint3406 = defineEndpoint({
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

export const endpoint3407 = defineEndpoint({
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

export const endpoint3408 = defineEndpoint({
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

export const endpoint3409 = defineEndpoint({
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

export const endpoint3410 = defineEndpoint({
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

export const endpoint3411 = defineEndpoint({
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

export const endpoint3412 = defineEndpoint({
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

export const endpoint3413 = defineEndpoint({
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

export const endpoint3414 = defineEndpoint({
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

export const endpoint3415 = defineEndpoint({
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

export const endpoint3416 = defineEndpoint({
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

export const endpoint3417 = defineEndpoint({
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

export const endpoint3418 = defineEndpoint({
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

export const endpoint3419 = defineEndpoint({
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

export const endpoint3420 = defineEndpoint({
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

export const endpoint3421 = defineEndpoint({
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

export const endpoint3422 = defineEndpoint({
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

export const endpoint3423 = defineEndpoint({
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

export const endpoint3424 = defineEndpoint({
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

export const endpoint3425 = defineEndpoint({
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

export const endpoint3426 = defineEndpoint({
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

export const endpoint3427 = defineEndpoint({
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

export const endpoint3428 = defineEndpoint({
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

export const endpoint3429 = defineEndpoint({
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

export const endpoint3430 = defineEndpoint({
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

export const endpoint3431 = defineEndpoint({
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

export const endpoint3432 = defineEndpoint({
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

export const endpoint3433 = defineEndpoint({
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

export const endpoint3434 = defineEndpoint({
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

export const endpoint3435 = defineEndpoint({
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

export const endpoint3436 = defineEndpoint({
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

export const endpoint3437 = defineEndpoint({
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

export const endpoint3438 = defineEndpoint({
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

export const endpoint3439 = defineEndpoint({
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

export const endpoint3440 = defineEndpoint({
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

export const endpoint3441 = defineEndpoint({
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

export const endpoint3442 = defineEndpoint({
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

export const endpoint3443 = defineEndpoint({
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

export const endpoint3444 = defineEndpoint({
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

export const endpoint3445 = defineEndpoint({
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

export const endpoint3446 = defineEndpoint({
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

export const endpoint3447 = defineEndpoint({
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

export const endpoint3448 = defineEndpoint({
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

export const endpoint3449 = defineEndpoint({
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

export const endpoint3450 = defineEndpoint({
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

export const endpoint3451 = defineEndpoint({
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

export const endpoint3452 = defineEndpoint({
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

export const endpoint3453 = defineEndpoint({
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

export const endpoint3454 = defineEndpoint({
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

export const endpoint3455 = defineEndpoint({
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

export const endpoint3456 = defineEndpoint({
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

export const endpoint3457 = defineEndpoint({
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

export const endpoint3458 = defineEndpoint({
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

export const endpoint3459 = defineEndpoint({
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

export const endpoint3460 = defineEndpoint({
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

export const endpoint3461 = defineEndpoint({
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

export const endpoint3462 = defineEndpoint({
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

export const endpoint3463 = defineEndpoint({
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

export const endpoint3464 = defineEndpoint({
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

export const endpoint3465 = defineEndpoint({
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

export const endpoint3466 = defineEndpoint({
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

export const endpoint3467 = defineEndpoint({
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

export const endpoint3468 = defineEndpoint({
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

export const endpoint3469 = defineEndpoint({
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

export const endpoint3470 = defineEndpoint({
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

export const endpoint3471 = defineEndpoint({
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

export const endpoint3472 = defineEndpoint({
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

export const endpoint3473 = defineEndpoint({
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

export const endpoint3474 = defineEndpoint({
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

export const endpoint3475 = defineEndpoint({
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

export const endpoint3476 = defineEndpoint({
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

export const endpoint3477 = defineEndpoint({
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

export const endpoint3478 = defineEndpoint({
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

export const endpoint3479 = defineEndpoint({
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

export const endpoint3480 = defineEndpoint({
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

export const endpoint3481 = defineEndpoint({
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

export const endpoint3482 = defineEndpoint({
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

export const endpoint3483 = defineEndpoint({
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

export const endpoint3484 = defineEndpoint({
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

export const endpoint3485 = defineEndpoint({
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

export const endpoint3486 = defineEndpoint({
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

export const endpoint3487 = defineEndpoint({
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

export const endpoint3488 = defineEndpoint({
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

export const endpoint3489 = defineEndpoint({
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

export const endpoint3490 = defineEndpoint({
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

export const endpoint3491 = defineEndpoint({
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

export const endpoint3492 = defineEndpoint({
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

export const endpoint3493 = defineEndpoint({
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

export const endpoint3494 = defineEndpoint({
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

export const endpoint3495 = defineEndpoint({
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

export const endpoint3496 = defineEndpoint({
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

export const endpoint3497 = defineEndpoint({
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

export const endpoint3498 = defineEndpoint({
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

export const endpoint3499 = defineEndpoint({
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

export const endpoint3500 = defineEndpoint({
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

export const endpoint3501 = defineEndpoint({
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

export const endpoint3502 = defineEndpoint({
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

export const endpoint3503 = defineEndpoint({
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

export const endpoint3504 = defineEndpoint({
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

export const endpoint3505 = defineEndpoint({
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

export const endpoint3506 = defineEndpoint({
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

export const endpoint3507 = defineEndpoint({
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

export const endpoint3508 = defineEndpoint({
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

export const endpoint3509 = defineEndpoint({
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

export const endpoint3510 = defineEndpoint({
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

export const endpoint3511 = defineEndpoint({
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

export const endpoint3512 = defineEndpoint({
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

export const endpoint3513 = defineEndpoint({
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

export const endpoint3514 = defineEndpoint({
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

export const endpoint3515 = defineEndpoint({
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

export const endpoint3516 = defineEndpoint({
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

export const endpoint3517 = defineEndpoint({
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

export const endpoint3518 = defineEndpoint({
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

export const endpoint3519 = defineEndpoint({
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

export const endpoint3520 = defineEndpoint({
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

export const endpoint3521 = defineEndpoint({
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

export const endpoint3522 = defineEndpoint({
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

export const endpoint3523 = defineEndpoint({
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

export const endpoint3524 = defineEndpoint({
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

export const endpoint3525 = defineEndpoint({
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

export const endpoint3526 = defineEndpoint({
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

export const endpoint3527 = defineEndpoint({
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

export const endpoint3528 = defineEndpoint({
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

export const endpoint3529 = defineEndpoint({
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

export const endpoint3530 = defineEndpoint({
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

export const endpoint3531 = defineEndpoint({
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

export const endpoint3532 = defineEndpoint({
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

export const endpoint3533 = defineEndpoint({
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

export const endpoint3534 = defineEndpoint({
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

export const endpoint3535 = defineEndpoint({
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

export const endpoint3536 = defineEndpoint({
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

export const endpoint3537 = defineEndpoint({
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

export const endpoint3538 = defineEndpoint({
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

export const endpoint3539 = defineEndpoint({
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

export const endpoint3540 = defineEndpoint({
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

export const endpoint3541 = defineEndpoint({
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

export const endpoint3542 = defineEndpoint({
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

export const endpoint3543 = defineEndpoint({
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

export const endpoint3544 = defineEndpoint({
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

export const endpoint3545 = defineEndpoint({
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

export const endpoint3546 = defineEndpoint({
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

export const endpoint3547 = defineEndpoint({
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

export const endpoint3548 = defineEndpoint({
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

export const endpoint3549 = defineEndpoint({
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

export const endpoint3550 = defineEndpoint({
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

export const endpoint3551 = defineEndpoint({
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

export const endpoint3552 = defineEndpoint({
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

export const endpoint3553 = defineEndpoint({
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

export const endpoint3554 = defineEndpoint({
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

export const endpoint3555 = defineEndpoint({
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

export const endpoint3556 = defineEndpoint({
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

export const endpoint3557 = defineEndpoint({
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

export const endpoint3558 = defineEndpoint({
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

export const endpoint3559 = defineEndpoint({
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

export const endpoint3560 = defineEndpoint({
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

export const endpoint3561 = defineEndpoint({
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

export const endpoint3562 = defineEndpoint({
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

export const endpoint3563 = defineEndpoint({
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

export const endpoint3564 = defineEndpoint({
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

export const endpoint3565 = defineEndpoint({
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

export const endpoint3566 = defineEndpoint({
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

export const endpoint3567 = defineEndpoint({
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

export const endpoint3568 = defineEndpoint({
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

export const endpoint3569 = defineEndpoint({
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

export const endpoint3570 = defineEndpoint({
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

export const endpoint3571 = defineEndpoint({
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

export const endpoint3572 = defineEndpoint({
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

export const endpoint3573 = defineEndpoint({
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

export const endpoint3574 = defineEndpoint({
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

export const endpoint3575 = defineEndpoint({
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

export const endpoint3576 = defineEndpoint({
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

export const endpoint3577 = defineEndpoint({
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

export const endpoint3578 = defineEndpoint({
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

export const endpoint3579 = defineEndpoint({
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

export const endpoint3580 = defineEndpoint({
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

export const endpoint3581 = defineEndpoint({
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

export const endpoint3582 = defineEndpoint({
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

export const endpoint3583 = defineEndpoint({
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

export const endpoint3584 = defineEndpoint({
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

export const endpoint3585 = defineEndpoint({
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

export const endpoint3586 = defineEndpoint({
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

export const endpoint3587 = defineEndpoint({
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

export const endpoint3588 = defineEndpoint({
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

export const endpoint3589 = defineEndpoint({
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

export const endpoint3590 = defineEndpoint({
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

export const endpoint3591 = defineEndpoint({
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

export const endpoint3592 = defineEndpoint({
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

export const endpoint3593 = defineEndpoint({
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

export const endpoint3594 = defineEndpoint({
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

export const endpoint3595 = defineEndpoint({
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

export const endpoint3596 = defineEndpoint({
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

export const endpoint3597 = defineEndpoint({
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

export const endpoint3598 = defineEndpoint({
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

export const endpoint3599 = defineEndpoint({
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

export const endpoint3600 = defineEndpoint({
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

export const endpoint3601 = defineEndpoint({
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

export const endpoint3602 = defineEndpoint({
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

export const endpoint3603 = defineEndpoint({
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

export const endpoint3604 = defineEndpoint({
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

export const endpoint3605 = defineEndpoint({
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

export const endpoint3606 = defineEndpoint({
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

export const endpoint3607 = defineEndpoint({
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

export const endpoint3608 = defineEndpoint({
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

export const endpoint3609 = defineEndpoint({
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

export const endpoint3610 = defineEndpoint({
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

export const endpoint3611 = defineEndpoint({
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

export const endpoint3612 = defineEndpoint({
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

export const endpoint3613 = defineEndpoint({
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

export const endpoint3614 = defineEndpoint({
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

export const endpoint3615 = defineEndpoint({
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

export const endpoint3616 = defineEndpoint({
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

export const endpoint3617 = defineEndpoint({
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

export const endpoint3618 = defineEndpoint({
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

export const endpoint3619 = defineEndpoint({
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

export const endpoint3620 = defineEndpoint({
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

export const endpoint3621 = defineEndpoint({
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

export const endpoint3622 = defineEndpoint({
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

export const endpoint3623 = defineEndpoint({
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

export const endpoint3624 = defineEndpoint({
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

export const endpoint3625 = defineEndpoint({
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

export const endpoint3626 = defineEndpoint({
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

export const endpoint3627 = defineEndpoint({
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

export const endpoint3628 = defineEndpoint({
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

export const endpoint3629 = defineEndpoint({
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

export const endpoint3630 = defineEndpoint({
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

export const endpoint3631 = defineEndpoint({
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

export const endpoint3632 = defineEndpoint({
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

export const endpoint3633 = defineEndpoint({
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

export const endpoint3634 = defineEndpoint({
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

export const endpoint3635 = defineEndpoint({
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

export const endpoint3636 = defineEndpoint({
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

export const endpoint3637 = defineEndpoint({
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

export const endpoint3638 = defineEndpoint({
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

export const endpoint3639 = defineEndpoint({
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

export const endpoint3640 = defineEndpoint({
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

export const endpoint3641 = defineEndpoint({
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

export const endpoint3642 = defineEndpoint({
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

export const endpoint3643 = defineEndpoint({
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

export const endpoint3644 = defineEndpoint({
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

export const endpoint3645 = defineEndpoint({
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

export const endpoint3646 = defineEndpoint({
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

export const endpoint3647 = defineEndpoint({
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

export const endpoint3648 = defineEndpoint({
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

export const endpoint3649 = defineEndpoint({
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

export const endpoint3650 = defineEndpoint({
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

export const endpoint3651 = defineEndpoint({
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

export const endpoint3652 = defineEndpoint({
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

export const endpoint3653 = defineEndpoint({
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

export const endpoint3654 = defineEndpoint({
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

export const endpoint3655 = defineEndpoint({
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

export const endpoint3656 = defineEndpoint({
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

export const endpoint3657 = defineEndpoint({
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

export const endpoint3658 = defineEndpoint({
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

export const endpoint3659 = defineEndpoint({
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

export const endpoint3660 = defineEndpoint({
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

export const endpoint3661 = defineEndpoint({
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

export const endpoint3662 = defineEndpoint({
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

export const endpoint3663 = defineEndpoint({
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

export const endpoint3664 = defineEndpoint({
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

export const endpoint3665 = defineEndpoint({
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

export const endpoint3666 = defineEndpoint({
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

export const endpoint3667 = defineEndpoint({
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

export const endpoint3668 = defineEndpoint({
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

export const endpoint3669 = defineEndpoint({
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

export const endpoint3670 = defineEndpoint({
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

export const endpoint3671 = defineEndpoint({
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

export const endpoint3672 = defineEndpoint({
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

export const endpoint3673 = defineEndpoint({
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

export const endpoint3674 = defineEndpoint({
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

export const endpoint3675 = defineEndpoint({
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

export const endpoint3676 = defineEndpoint({
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

export const endpoint3677 = defineEndpoint({
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

export const endpoint3678 = defineEndpoint({
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

export const endpoint3679 = defineEndpoint({
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

export const endpoint3680 = defineEndpoint({
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

export const endpoint3681 = defineEndpoint({
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

export const endpoint3682 = defineEndpoint({
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

export const endpoint3683 = defineEndpoint({
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

export const endpoint3684 = defineEndpoint({
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

export const endpoint3685 = defineEndpoint({
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

export const endpoint3686 = defineEndpoint({
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

export const endpoint3687 = defineEndpoint({
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

export const endpoint3688 = defineEndpoint({
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

export const endpoint3689 = defineEndpoint({
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

export const endpoint3690 = defineEndpoint({
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

export const endpoint3691 = defineEndpoint({
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

export const endpoint3692 = defineEndpoint({
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

export const endpoint3693 = defineEndpoint({
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

export const endpoint3694 = defineEndpoint({
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

export const endpoint3695 = defineEndpoint({
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

export const endpoint3696 = defineEndpoint({
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

export const endpoint3697 = defineEndpoint({
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

export const endpoint3698 = defineEndpoint({
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

export const endpoint3699 = defineEndpoint({
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

export const endpoint3700 = defineEndpoint({
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

export const endpoint3701 = defineEndpoint({
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

export const endpoint3702 = defineEndpoint({
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

export const endpoint3703 = defineEndpoint({
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

export const endpoint3704 = defineEndpoint({
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

export const endpoint3705 = defineEndpoint({
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

export const endpoint3706 = defineEndpoint({
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

export const endpoint3707 = defineEndpoint({
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

export const endpoint3708 = defineEndpoint({
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

export const endpoint3709 = defineEndpoint({
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

export const endpoint3710 = defineEndpoint({
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

export const endpoint3711 = defineEndpoint({
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

export const endpoint3712 = defineEndpoint({
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

export const endpoint3713 = defineEndpoint({
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

export const endpoint3714 = defineEndpoint({
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

export const endpoint3715 = defineEndpoint({
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

export const endpoint3716 = defineEndpoint({
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

export const endpoint3717 = defineEndpoint({
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

export const endpoint3718 = defineEndpoint({
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

export const endpoint3719 = defineEndpoint({
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

export const endpoint3720 = defineEndpoint({
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

export const endpoint3721 = defineEndpoint({
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

export const endpoint3722 = defineEndpoint({
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

export const endpoint3723 = defineEndpoint({
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

export const endpoint3724 = defineEndpoint({
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

export const endpoint3725 = defineEndpoint({
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

export const endpoint3726 = defineEndpoint({
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

export const endpoint3727 = defineEndpoint({
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

export const endpoint3728 = defineEndpoint({
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

export const endpoint3729 = defineEndpoint({
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

export const endpoint3730 = defineEndpoint({
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

export const endpoint3731 = defineEndpoint({
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

export const endpoint3732 = defineEndpoint({
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

export const endpoint3733 = defineEndpoint({
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

export const endpoint3734 = defineEndpoint({
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

export const endpoint3735 = defineEndpoint({
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

export const endpoint3736 = defineEndpoint({
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

export const endpoint3737 = defineEndpoint({
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

export const endpoint3738 = defineEndpoint({
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

export const endpoint3739 = defineEndpoint({
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

export const endpoint3740 = defineEndpoint({
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

export const endpoint3741 = defineEndpoint({
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

export const endpoint3742 = defineEndpoint({
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

export const endpoint3743 = defineEndpoint({
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

export const endpoint3744 = defineEndpoint({
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

export const endpoint3745 = defineEndpoint({
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

export const endpoint3746 = defineEndpoint({
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

export const endpoint3747 = defineEndpoint({
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

export const endpoint3748 = defineEndpoint({
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

export const endpoint3749 = defineEndpoint({
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

export const endpoint3750 = defineEndpoint({
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

export const endpoint3751 = defineEndpoint({
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

export const endpoint3752 = defineEndpoint({
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

export const endpoint3753 = defineEndpoint({
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

export const endpoint3754 = defineEndpoint({
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

export const endpoint3755 = defineEndpoint({
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

export const endpoint3756 = defineEndpoint({
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

export const endpoint3757 = defineEndpoint({
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

export const endpoint3758 = defineEndpoint({
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

export const endpoint3759 = defineEndpoint({
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

export const endpoint3760 = defineEndpoint({
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

export const endpoint3761 = defineEndpoint({
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

export const endpoint3762 = defineEndpoint({
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

export const endpoint3763 = defineEndpoint({
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

export const endpoint3764 = defineEndpoint({
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

export const endpoint3765 = defineEndpoint({
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

export const endpoint3766 = defineEndpoint({
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

export const endpoint3767 = defineEndpoint({
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

export const endpoint3768 = defineEndpoint({
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

export const endpoint3769 = defineEndpoint({
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

export const endpoint3770 = defineEndpoint({
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

export const endpoint3771 = defineEndpoint({
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

export const endpoint3772 = defineEndpoint({
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

export const endpoint3773 = defineEndpoint({
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

export const endpoint3774 = defineEndpoint({
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

export const endpoint3775 = defineEndpoint({
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

export const endpoint3776 = defineEndpoint({
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

export const endpoint3777 = defineEndpoint({
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

export const endpoint3778 = defineEndpoint({
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

export const endpoint3779 = defineEndpoint({
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

export const endpoint3780 = defineEndpoint({
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

export const endpoint3781 = defineEndpoint({
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

export const endpoint3782 = defineEndpoint({
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

export const endpoint3783 = defineEndpoint({
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

export const endpoint3784 = defineEndpoint({
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

export const endpoint3785 = defineEndpoint({
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

export const endpoint3786 = defineEndpoint({
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

export const endpoint3787 = defineEndpoint({
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

export const endpoint3788 = defineEndpoint({
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

export const endpoint3789 = defineEndpoint({
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

export const endpoint3790 = defineEndpoint({
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

export const endpoint3791 = defineEndpoint({
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

export const endpoint3792 = defineEndpoint({
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

export const endpoint3793 = defineEndpoint({
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

export const endpoint3794 = defineEndpoint({
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

export const endpoint3795 = defineEndpoint({
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

export const endpoint3796 = defineEndpoint({
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

export const endpoint3797 = defineEndpoint({
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

export const endpoint3798 = defineEndpoint({
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

export const endpoint3799 = defineEndpoint({
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

export const endpoint3800 = defineEndpoint({
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

export const endpoint3801 = defineEndpoint({
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

export const endpoint3802 = defineEndpoint({
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

export const endpoint3803 = defineEndpoint({
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

export const endpoint3804 = defineEndpoint({
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

export const endpoint3805 = defineEndpoint({
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

export const endpoint3806 = defineEndpoint({
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

export const endpoint3807 = defineEndpoint({
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

export const endpoint3808 = defineEndpoint({
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

export const endpoint3809 = defineEndpoint({
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

export const endpoint3810 = defineEndpoint({
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

export const endpoint3811 = defineEndpoint({
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

export const endpoint3812 = defineEndpoint({
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

export const endpoint3813 = defineEndpoint({
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

export const endpoint3814 = defineEndpoint({
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

export const endpoint3815 = defineEndpoint({
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

export const endpoint3816 = defineEndpoint({
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

export const endpoint3817 = defineEndpoint({
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

export const endpoint3818 = defineEndpoint({
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

export const endpoint3819 = defineEndpoint({
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

export const endpoint3820 = defineEndpoint({
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

export const endpoint3821 = defineEndpoint({
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

export const endpoint3822 = defineEndpoint({
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

export const endpoint3823 = defineEndpoint({
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

export const endpoint3824 = defineEndpoint({
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

export const endpoint3825 = defineEndpoint({
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

export const endpoint3826 = defineEndpoint({
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

export const endpoint3827 = defineEndpoint({
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

export const endpoint3828 = defineEndpoint({
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

export const endpoint3829 = defineEndpoint({
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

export const endpoint3830 = defineEndpoint({
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

export const endpoint3831 = defineEndpoint({
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

export const endpoint3832 = defineEndpoint({
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

export const endpoint3833 = defineEndpoint({
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

export const endpoint3834 = defineEndpoint({
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

export const endpoint3835 = defineEndpoint({
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

export const endpoint3836 = defineEndpoint({
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

export const endpoint3837 = defineEndpoint({
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

export const endpoint3838 = defineEndpoint({
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

export const endpoint3839 = defineEndpoint({
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

export const endpoint3840 = defineEndpoint({
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

export const endpoint3841 = defineEndpoint({
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

export const endpoint3842 = defineEndpoint({
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

export const endpoint3843 = defineEndpoint({
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

export const endpoint3844 = defineEndpoint({
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

export const endpoint3845 = defineEndpoint({
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

export const endpoint3846 = defineEndpoint({
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

export const endpoint3847 = defineEndpoint({
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

export const endpoint3848 = defineEndpoint({
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

export const endpoint3849 = defineEndpoint({
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

export const endpoint3850 = defineEndpoint({
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

export const endpoint3851 = defineEndpoint({
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

export const endpoint3852 = defineEndpoint({
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

export const endpoint3853 = defineEndpoint({
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

export const endpoint3854 = defineEndpoint({
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

export const endpoint3855 = defineEndpoint({
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

export const endpoint3856 = defineEndpoint({
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

export const endpoint3857 = defineEndpoint({
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

export const endpoint3858 = defineEndpoint({
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

export const endpoint3859 = defineEndpoint({
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

export const endpoint3860 = defineEndpoint({
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

export const endpoint3861 = defineEndpoint({
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

export const endpoint3862 = defineEndpoint({
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

export const endpoint3863 = defineEndpoint({
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

export const endpoint3864 = defineEndpoint({
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

export const endpoint3865 = defineEndpoint({
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

export const endpoint3866 = defineEndpoint({
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

export const endpoint3867 = defineEndpoint({
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

export const endpoint3868 = defineEndpoint({
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

export const endpoint3869 = defineEndpoint({
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

export const endpoint3870 = defineEndpoint({
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

export const endpoint3871 = defineEndpoint({
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

export const endpoint3872 = defineEndpoint({
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

export const endpoint3873 = defineEndpoint({
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

export const endpoint3874 = defineEndpoint({
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

export const endpoint3875 = defineEndpoint({
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

export const endpoint3876 = defineEndpoint({
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

export const endpoint3877 = defineEndpoint({
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

export const endpoint3878 = defineEndpoint({
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

export const endpoint3879 = defineEndpoint({
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

export const endpoint3880 = defineEndpoint({
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

export const endpoint3881 = defineEndpoint({
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

export const endpoint3882 = defineEndpoint({
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

export const endpoint3883 = defineEndpoint({
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

export const endpoint3884 = defineEndpoint({
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

export const endpoint3885 = defineEndpoint({
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

export const endpoint3886 = defineEndpoint({
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

export const endpoint3887 = defineEndpoint({
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

export const endpoint3888 = defineEndpoint({
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

export const endpoint3889 = defineEndpoint({
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

export const endpoint3890 = defineEndpoint({
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

export const endpoint3891 = defineEndpoint({
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

export const endpoint3892 = defineEndpoint({
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

export const endpoint3893 = defineEndpoint({
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

export const endpoint3894 = defineEndpoint({
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

export const endpoint3895 = defineEndpoint({
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

export const endpoint3896 = defineEndpoint({
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

export const endpoint3897 = defineEndpoint({
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

export const endpoint3898 = defineEndpoint({
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

export const endpoint3899 = defineEndpoint({
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

export const endpoint3900 = defineEndpoint({
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

export const endpoint3901 = defineEndpoint({
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

export const endpoint3902 = defineEndpoint({
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

export const endpoint3903 = defineEndpoint({
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

export const endpoint3904 = defineEndpoint({
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

export const endpoint3905 = defineEndpoint({
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

export const endpoint3906 = defineEndpoint({
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

export const endpoint3907 = defineEndpoint({
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

export const endpoint3908 = defineEndpoint({
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

export const endpoint3909 = defineEndpoint({
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

export const endpoint3910 = defineEndpoint({
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

export const endpoint3911 = defineEndpoint({
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

export const endpoint3912 = defineEndpoint({
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

export const endpoint3913 = defineEndpoint({
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

export const endpoint3914 = defineEndpoint({
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

export const endpoint3915 = defineEndpoint({
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

export const endpoint3916 = defineEndpoint({
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

export const endpoint3917 = defineEndpoint({
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

export const endpoint3918 = defineEndpoint({
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

export const endpoint3919 = defineEndpoint({
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

export const endpoint3920 = defineEndpoint({
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

export const endpoint3921 = defineEndpoint({
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

export const endpoint3922 = defineEndpoint({
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

export const endpoint3923 = defineEndpoint({
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

export const endpoint3924 = defineEndpoint({
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

export const endpoint3925 = defineEndpoint({
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

export const endpoint3926 = defineEndpoint({
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

export const endpoint3927 = defineEndpoint({
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

export const endpoint3928 = defineEndpoint({
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

export const endpoint3929 = defineEndpoint({
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

export const endpoint3930 = defineEndpoint({
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

export const endpoint3931 = defineEndpoint({
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

export const endpoint3932 = defineEndpoint({
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

export const endpoint3933 = defineEndpoint({
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

export const endpoint3934 = defineEndpoint({
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

export const endpoint3935 = defineEndpoint({
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

export const endpoint3936 = defineEndpoint({
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

export const endpoint3937 = defineEndpoint({
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

export const endpoint3938 = defineEndpoint({
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

export const endpoint3939 = defineEndpoint({
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

export const endpoint3940 = defineEndpoint({
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

export const endpoint3941 = defineEndpoint({
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

export const endpoint3942 = defineEndpoint({
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

export const endpoint3943 = defineEndpoint({
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

export const endpoint3944 = defineEndpoint({
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

export const endpoint3945 = defineEndpoint({
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

export const endpoint3946 = defineEndpoint({
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

export const endpoint3947 = defineEndpoint({
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

export const endpoint3948 = defineEndpoint({
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

export const endpoint3949 = defineEndpoint({
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

export const endpoint3950 = defineEndpoint({
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

export const endpoint3951 = defineEndpoint({
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

export const endpoint3952 = defineEndpoint({
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

export const endpoint3953 = defineEndpoint({
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

export const endpoint3954 = defineEndpoint({
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

export const endpoint3955 = defineEndpoint({
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

export const endpoint3956 = defineEndpoint({
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

export const endpoint3957 = defineEndpoint({
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

export const endpoint3958 = defineEndpoint({
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

export const endpoint3959 = defineEndpoint({
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

export const endpoint3960 = defineEndpoint({
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

export const endpoint3961 = defineEndpoint({
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

export const endpoint3962 = defineEndpoint({
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

export const endpoint3963 = defineEndpoint({
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

export const endpoint3964 = defineEndpoint({
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

export const endpoint3965 = defineEndpoint({
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

export const endpoint3966 = defineEndpoint({
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

export const endpoint3967 = defineEndpoint({
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

export const endpoint3968 = defineEndpoint({
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

export const endpoint3969 = defineEndpoint({
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

export const endpoint3970 = defineEndpoint({
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

export const endpoint3971 = defineEndpoint({
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

export const endpoint3972 = defineEndpoint({
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

export const endpoint3973 = defineEndpoint({
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

export const endpoint3974 = defineEndpoint({
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

export const endpoint3975 = defineEndpoint({
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

export const endpoint3976 = defineEndpoint({
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

export const endpoint3977 = defineEndpoint({
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

export const endpoint3978 = defineEndpoint({
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

export const endpoint3979 = defineEndpoint({
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

export const endpoint3980 = defineEndpoint({
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

export const endpoint3981 = defineEndpoint({
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

export const endpoint3982 = defineEndpoint({
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

export const endpoint3983 = defineEndpoint({
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

export const endpoint3984 = defineEndpoint({
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

export const endpoint3985 = defineEndpoint({
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

export const endpoint3986 = defineEndpoint({
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

export const endpoint3987 = defineEndpoint({
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

export const endpoint3988 = defineEndpoint({
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

export const endpoint3989 = defineEndpoint({
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

export const endpoint3990 = defineEndpoint({
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

export const endpoint3991 = defineEndpoint({
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

export const endpoint3992 = defineEndpoint({
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

export const endpoint3993 = defineEndpoint({
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

export const endpoint3994 = defineEndpoint({
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

export const endpoint3995 = defineEndpoint({
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

export const endpoint3996 = defineEndpoint({
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

export const endpoint3997 = defineEndpoint({
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

export const endpoint3998 = defineEndpoint({
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

export const endpoint3999 = defineEndpoint({
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
