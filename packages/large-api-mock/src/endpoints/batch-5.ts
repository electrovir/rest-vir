import {HttpMethod, HttpStatus} from '@augment-vir/common';
import {defineShape} from 'object-shape-tester';
import {structuredRenderDataShape} from 'structured-render';
import {customProps, defineMockEndpoint} from '../define-mock-endpoint.js';

export const endpoint5000 = defineMockEndpoint({
    path: '/reports/item-5000',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5001 = defineMockEndpoint({
    path: '/reports/item-5001',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5002 = defineMockEndpoint({
    path: '/reports/item-5002',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5003 = defineMockEndpoint({
    path: '/reports/item-5003',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5004 = defineMockEndpoint({
    path: '/reports/item-5004',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5005 = defineMockEndpoint({
    path: '/reports/item-5005',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5006 = defineMockEndpoint({
    path: '/reports/item-5006',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5007 = defineMockEndpoint({
    path: '/reports/item-5007',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5008 = defineMockEndpoint({
    path: '/reports/item-5008',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5009 = defineMockEndpoint({
    path: '/reports/item-5009',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5010 = defineMockEndpoint({
    path: '/reports/item-5010',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5011 = defineMockEndpoint({
    path: '/reports/item-5011',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5012 = defineMockEndpoint({
    path: '/reports/item-5012',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5013 = defineMockEndpoint({
    path: '/reports/item-5013',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5014 = defineMockEndpoint({
    path: '/reports/item-5014',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5015 = defineMockEndpoint({
    path: '/reports/item-5015',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5016 = defineMockEndpoint({
    path: '/reports/item-5016',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5017 = defineMockEndpoint({
    path: '/reports/item-5017',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5018 = defineMockEndpoint({
    path: '/reports/item-5018',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5019 = defineMockEndpoint({
    path: '/reports/item-5019',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5020 = defineMockEndpoint({
    path: '/reports/item-5020',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5021 = defineMockEndpoint({
    path: '/reports/item-5021',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5022 = defineMockEndpoint({
    path: '/reports/item-5022',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5023 = defineMockEndpoint({
    path: '/reports/item-5023',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5024 = defineMockEndpoint({
    path: '/reports/item-5024',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5025 = defineMockEndpoint({
    path: '/reports/item-5025',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5026 = defineMockEndpoint({
    path: '/reports/item-5026',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5027 = defineMockEndpoint({
    path: '/reports/item-5027',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5028 = defineMockEndpoint({
    path: '/reports/item-5028',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5029 = defineMockEndpoint({
    path: '/reports/item-5029',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5030 = defineMockEndpoint({
    path: '/reports/item-5030',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5031 = defineMockEndpoint({
    path: '/reports/item-5031',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5032 = defineMockEndpoint({
    path: '/reports/item-5032',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5033 = defineMockEndpoint({
    path: '/reports/item-5033',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5034 = defineMockEndpoint({
    path: '/reports/item-5034',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5035 = defineMockEndpoint({
    path: '/reports/item-5035',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5036 = defineMockEndpoint({
    path: '/reports/item-5036',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5037 = defineMockEndpoint({
    path: '/reports/item-5037',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5038 = defineMockEndpoint({
    path: '/reports/item-5038',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5039 = defineMockEndpoint({
    path: '/reports/item-5039',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5040 = defineMockEndpoint({
    path: '/reports/item-5040',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5041 = defineMockEndpoint({
    path: '/reports/item-5041',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5042 = defineMockEndpoint({
    path: '/reports/item-5042',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5043 = defineMockEndpoint({
    path: '/reports/item-5043',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5044 = defineMockEndpoint({
    path: '/reports/item-5044',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5045 = defineMockEndpoint({
    path: '/reports/item-5045',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5046 = defineMockEndpoint({
    path: '/reports/item-5046',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5047 = defineMockEndpoint({
    path: '/reports/item-5047',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5048 = defineMockEndpoint({
    path: '/reports/item-5048',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5049 = defineMockEndpoint({
    path: '/reports/item-5049',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5050 = defineMockEndpoint({
    path: '/reports/item-5050',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5051 = defineMockEndpoint({
    path: '/reports/item-5051',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5052 = defineMockEndpoint({
    path: '/reports/item-5052',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5053 = defineMockEndpoint({
    path: '/reports/item-5053',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5054 = defineMockEndpoint({
    path: '/reports/item-5054',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5055 = defineMockEndpoint({
    path: '/reports/item-5055',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5056 = defineMockEndpoint({
    path: '/reports/item-5056',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5057 = defineMockEndpoint({
    path: '/reports/item-5057',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5058 = defineMockEndpoint({
    path: '/reports/item-5058',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5059 = defineMockEndpoint({
    path: '/reports/item-5059',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5060 = defineMockEndpoint({
    path: '/reports/item-5060',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5061 = defineMockEndpoint({
    path: '/reports/item-5061',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5062 = defineMockEndpoint({
    path: '/reports/item-5062',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5063 = defineMockEndpoint({
    path: '/reports/item-5063',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5064 = defineMockEndpoint({
    path: '/reports/item-5064',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5065 = defineMockEndpoint({
    path: '/reports/item-5065',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5066 = defineMockEndpoint({
    path: '/reports/item-5066',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5067 = defineMockEndpoint({
    path: '/reports/item-5067',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5068 = defineMockEndpoint({
    path: '/reports/item-5068',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5069 = defineMockEndpoint({
    path: '/reports/item-5069',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5070 = defineMockEndpoint({
    path: '/reports/item-5070',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5071 = defineMockEndpoint({
    path: '/reports/item-5071',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5072 = defineMockEndpoint({
    path: '/reports/item-5072',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5073 = defineMockEndpoint({
    path: '/reports/item-5073',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5074 = defineMockEndpoint({
    path: '/reports/item-5074',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5075 = defineMockEndpoint({
    path: '/reports/item-5075',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5076 = defineMockEndpoint({
    path: '/reports/item-5076',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5077 = defineMockEndpoint({
    path: '/reports/item-5077',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5078 = defineMockEndpoint({
    path: '/reports/item-5078',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5079 = defineMockEndpoint({
    path: '/reports/item-5079',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5080 = defineMockEndpoint({
    path: '/reports/item-5080',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5081 = defineMockEndpoint({
    path: '/reports/item-5081',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5082 = defineMockEndpoint({
    path: '/reports/item-5082',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5083 = defineMockEndpoint({
    path: '/reports/item-5083',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5084 = defineMockEndpoint({
    path: '/reports/item-5084',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5085 = defineMockEndpoint({
    path: '/reports/item-5085',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5086 = defineMockEndpoint({
    path: '/reports/item-5086',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5087 = defineMockEndpoint({
    path: '/reports/item-5087',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5088 = defineMockEndpoint({
    path: '/reports/item-5088',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5089 = defineMockEndpoint({
    path: '/reports/item-5089',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5090 = defineMockEndpoint({
    path: '/reports/item-5090',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5091 = defineMockEndpoint({
    path: '/reports/item-5091',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5092 = defineMockEndpoint({
    path: '/reports/item-5092',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5093 = defineMockEndpoint({
    path: '/reports/item-5093',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5094 = defineMockEndpoint({
    path: '/reports/item-5094',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5095 = defineMockEndpoint({
    path: '/reports/item-5095',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5096 = defineMockEndpoint({
    path: '/reports/item-5096',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5097 = defineMockEndpoint({
    path: '/reports/item-5097',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5098 = defineMockEndpoint({
    path: '/reports/item-5098',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5099 = defineMockEndpoint({
    path: '/reports/item-5099',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5100 = defineMockEndpoint({
    path: '/reports/item-5100',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5101 = defineMockEndpoint({
    path: '/reports/item-5101',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5102 = defineMockEndpoint({
    path: '/reports/item-5102',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5103 = defineMockEndpoint({
    path: '/reports/item-5103',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5104 = defineMockEndpoint({
    path: '/reports/item-5104',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5105 = defineMockEndpoint({
    path: '/reports/item-5105',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5106 = defineMockEndpoint({
    path: '/reports/item-5106',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5107 = defineMockEndpoint({
    path: '/reports/item-5107',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5108 = defineMockEndpoint({
    path: '/reports/item-5108',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5109 = defineMockEndpoint({
    path: '/reports/item-5109',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5110 = defineMockEndpoint({
    path: '/reports/item-5110',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5111 = defineMockEndpoint({
    path: '/reports/item-5111',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5112 = defineMockEndpoint({
    path: '/reports/item-5112',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5113 = defineMockEndpoint({
    path: '/reports/item-5113',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5114 = defineMockEndpoint({
    path: '/reports/item-5114',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5115 = defineMockEndpoint({
    path: '/reports/item-5115',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5116 = defineMockEndpoint({
    path: '/reports/item-5116',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5117 = defineMockEndpoint({
    path: '/reports/item-5117',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5118 = defineMockEndpoint({
    path: '/reports/item-5118',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5119 = defineMockEndpoint({
    path: '/reports/item-5119',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5120 = defineMockEndpoint({
    path: '/reports/item-5120',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5121 = defineMockEndpoint({
    path: '/reports/item-5121',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5122 = defineMockEndpoint({
    path: '/reports/item-5122',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5123 = defineMockEndpoint({
    path: '/reports/item-5123',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5124 = defineMockEndpoint({
    path: '/reports/item-5124',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5125 = defineMockEndpoint({
    path: '/reports/item-5125',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5126 = defineMockEndpoint({
    path: '/reports/item-5126',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5127 = defineMockEndpoint({
    path: '/reports/item-5127',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5128 = defineMockEndpoint({
    path: '/reports/item-5128',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5129 = defineMockEndpoint({
    path: '/reports/item-5129',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5130 = defineMockEndpoint({
    path: '/reports/item-5130',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5131 = defineMockEndpoint({
    path: '/reports/item-5131',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5132 = defineMockEndpoint({
    path: '/reports/item-5132',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5133 = defineMockEndpoint({
    path: '/reports/item-5133',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5134 = defineMockEndpoint({
    path: '/reports/item-5134',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5135 = defineMockEndpoint({
    path: '/reports/item-5135',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5136 = defineMockEndpoint({
    path: '/reports/item-5136',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5137 = defineMockEndpoint({
    path: '/reports/item-5137',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5138 = defineMockEndpoint({
    path: '/reports/item-5138',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5139 = defineMockEndpoint({
    path: '/reports/item-5139',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5140 = defineMockEndpoint({
    path: '/reports/item-5140',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5141 = defineMockEndpoint({
    path: '/reports/item-5141',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5142 = defineMockEndpoint({
    path: '/reports/item-5142',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5143 = defineMockEndpoint({
    path: '/reports/item-5143',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5144 = defineMockEndpoint({
    path: '/reports/item-5144',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5145 = defineMockEndpoint({
    path: '/reports/item-5145',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5146 = defineMockEndpoint({
    path: '/reports/item-5146',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5147 = defineMockEndpoint({
    path: '/reports/item-5147',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5148 = defineMockEndpoint({
    path: '/reports/item-5148',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5149 = defineMockEndpoint({
    path: '/reports/item-5149',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5150 = defineMockEndpoint({
    path: '/reports/item-5150',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5151 = defineMockEndpoint({
    path: '/reports/item-5151',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5152 = defineMockEndpoint({
    path: '/reports/item-5152',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5153 = defineMockEndpoint({
    path: '/reports/item-5153',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5154 = defineMockEndpoint({
    path: '/reports/item-5154',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5155 = defineMockEndpoint({
    path: '/reports/item-5155',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5156 = defineMockEndpoint({
    path: '/reports/item-5156',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5157 = defineMockEndpoint({
    path: '/reports/item-5157',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5158 = defineMockEndpoint({
    path: '/reports/item-5158',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5159 = defineMockEndpoint({
    path: '/reports/item-5159',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5160 = defineMockEndpoint({
    path: '/reports/item-5160',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5161 = defineMockEndpoint({
    path: '/reports/item-5161',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5162 = defineMockEndpoint({
    path: '/reports/item-5162',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5163 = defineMockEndpoint({
    path: '/reports/item-5163',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5164 = defineMockEndpoint({
    path: '/reports/item-5164',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5165 = defineMockEndpoint({
    path: '/reports/item-5165',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5166 = defineMockEndpoint({
    path: '/reports/item-5166',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5167 = defineMockEndpoint({
    path: '/reports/item-5167',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5168 = defineMockEndpoint({
    path: '/reports/item-5168',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5169 = defineMockEndpoint({
    path: '/reports/item-5169',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5170 = defineMockEndpoint({
    path: '/reports/item-5170',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5171 = defineMockEndpoint({
    path: '/reports/item-5171',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5172 = defineMockEndpoint({
    path: '/reports/item-5172',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5173 = defineMockEndpoint({
    path: '/reports/item-5173',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5174 = defineMockEndpoint({
    path: '/reports/item-5174',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5175 = defineMockEndpoint({
    path: '/reports/item-5175',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5176 = defineMockEndpoint({
    path: '/reports/item-5176',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5177 = defineMockEndpoint({
    path: '/reports/item-5177',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5178 = defineMockEndpoint({
    path: '/reports/item-5178',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5179 = defineMockEndpoint({
    path: '/reports/item-5179',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5180 = defineMockEndpoint({
    path: '/reports/item-5180',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5181 = defineMockEndpoint({
    path: '/reports/item-5181',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5182 = defineMockEndpoint({
    path: '/reports/item-5182',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5183 = defineMockEndpoint({
    path: '/reports/item-5183',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5184 = defineMockEndpoint({
    path: '/reports/item-5184',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5185 = defineMockEndpoint({
    path: '/reports/item-5185',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5186 = defineMockEndpoint({
    path: '/reports/item-5186',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5187 = defineMockEndpoint({
    path: '/reports/item-5187',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5188 = defineMockEndpoint({
    path: '/reports/item-5188',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5189 = defineMockEndpoint({
    path: '/reports/item-5189',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5190 = defineMockEndpoint({
    path: '/reports/item-5190',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5191 = defineMockEndpoint({
    path: '/reports/item-5191',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5192 = defineMockEndpoint({
    path: '/reports/item-5192',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5193 = defineMockEndpoint({
    path: '/reports/item-5193',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5194 = defineMockEndpoint({
    path: '/reports/item-5194',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5195 = defineMockEndpoint({
    path: '/reports/item-5195',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5196 = defineMockEndpoint({
    path: '/reports/item-5196',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5197 = defineMockEndpoint({
    path: '/reports/item-5197',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5198 = defineMockEndpoint({
    path: '/reports/item-5198',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5199 = defineMockEndpoint({
    path: '/reports/item-5199',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5200 = defineMockEndpoint({
    path: '/reports/item-5200',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5201 = defineMockEndpoint({
    path: '/reports/item-5201',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5202 = defineMockEndpoint({
    path: '/reports/item-5202',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5203 = defineMockEndpoint({
    path: '/reports/item-5203',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5204 = defineMockEndpoint({
    path: '/reports/item-5204',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5205 = defineMockEndpoint({
    path: '/reports/item-5205',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5206 = defineMockEndpoint({
    path: '/reports/item-5206',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5207 = defineMockEndpoint({
    path: '/reports/item-5207',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5208 = defineMockEndpoint({
    path: '/reports/item-5208',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5209 = defineMockEndpoint({
    path: '/reports/item-5209',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5210 = defineMockEndpoint({
    path: '/reports/item-5210',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5211 = defineMockEndpoint({
    path: '/reports/item-5211',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5212 = defineMockEndpoint({
    path: '/reports/item-5212',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5213 = defineMockEndpoint({
    path: '/reports/item-5213',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5214 = defineMockEndpoint({
    path: '/reports/item-5214',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5215 = defineMockEndpoint({
    path: '/reports/item-5215',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5216 = defineMockEndpoint({
    path: '/reports/item-5216',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5217 = defineMockEndpoint({
    path: '/reports/item-5217',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5218 = defineMockEndpoint({
    path: '/reports/item-5218',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5219 = defineMockEndpoint({
    path: '/reports/item-5219',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5220 = defineMockEndpoint({
    path: '/reports/item-5220',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5221 = defineMockEndpoint({
    path: '/reports/item-5221',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5222 = defineMockEndpoint({
    path: '/reports/item-5222',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5223 = defineMockEndpoint({
    path: '/reports/item-5223',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5224 = defineMockEndpoint({
    path: '/reports/item-5224',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5225 = defineMockEndpoint({
    path: '/reports/item-5225',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5226 = defineMockEndpoint({
    path: '/reports/item-5226',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5227 = defineMockEndpoint({
    path: '/reports/item-5227',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5228 = defineMockEndpoint({
    path: '/reports/item-5228',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5229 = defineMockEndpoint({
    path: '/reports/item-5229',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5230 = defineMockEndpoint({
    path: '/reports/item-5230',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5231 = defineMockEndpoint({
    path: '/reports/item-5231',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5232 = defineMockEndpoint({
    path: '/reports/item-5232',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5233 = defineMockEndpoint({
    path: '/reports/item-5233',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5234 = defineMockEndpoint({
    path: '/reports/item-5234',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5235 = defineMockEndpoint({
    path: '/reports/item-5235',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5236 = defineMockEndpoint({
    path: '/reports/item-5236',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5237 = defineMockEndpoint({
    path: '/reports/item-5237',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5238 = defineMockEndpoint({
    path: '/reports/item-5238',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5239 = defineMockEndpoint({
    path: '/reports/item-5239',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5240 = defineMockEndpoint({
    path: '/reports/item-5240',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5241 = defineMockEndpoint({
    path: '/reports/item-5241',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5242 = defineMockEndpoint({
    path: '/reports/item-5242',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5243 = defineMockEndpoint({
    path: '/reports/item-5243',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5244 = defineMockEndpoint({
    path: '/reports/item-5244',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5245 = defineMockEndpoint({
    path: '/reports/item-5245',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5246 = defineMockEndpoint({
    path: '/reports/item-5246',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5247 = defineMockEndpoint({
    path: '/reports/item-5247',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5248 = defineMockEndpoint({
    path: '/reports/item-5248',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5249 = defineMockEndpoint({
    path: '/reports/item-5249',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5250 = defineMockEndpoint({
    path: '/reports/item-5250',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5251 = defineMockEndpoint({
    path: '/reports/item-5251',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5252 = defineMockEndpoint({
    path: '/reports/item-5252',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5253 = defineMockEndpoint({
    path: '/reports/item-5253',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5254 = defineMockEndpoint({
    path: '/reports/item-5254',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5255 = defineMockEndpoint({
    path: '/reports/item-5255',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5256 = defineMockEndpoint({
    path: '/reports/item-5256',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5257 = defineMockEndpoint({
    path: '/reports/item-5257',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5258 = defineMockEndpoint({
    path: '/reports/item-5258',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5259 = defineMockEndpoint({
    path: '/reports/item-5259',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5260 = defineMockEndpoint({
    path: '/reports/item-5260',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5261 = defineMockEndpoint({
    path: '/reports/item-5261',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5262 = defineMockEndpoint({
    path: '/reports/item-5262',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5263 = defineMockEndpoint({
    path: '/reports/item-5263',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5264 = defineMockEndpoint({
    path: '/reports/item-5264',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5265 = defineMockEndpoint({
    path: '/reports/item-5265',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5266 = defineMockEndpoint({
    path: '/reports/item-5266',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5267 = defineMockEndpoint({
    path: '/reports/item-5267',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5268 = defineMockEndpoint({
    path: '/reports/item-5268',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5269 = defineMockEndpoint({
    path: '/reports/item-5269',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5270 = defineMockEndpoint({
    path: '/reports/item-5270',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5271 = defineMockEndpoint({
    path: '/reports/item-5271',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5272 = defineMockEndpoint({
    path: '/reports/item-5272',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5273 = defineMockEndpoint({
    path: '/reports/item-5273',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5274 = defineMockEndpoint({
    path: '/reports/item-5274',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5275 = defineMockEndpoint({
    path: '/reports/item-5275',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5276 = defineMockEndpoint({
    path: '/reports/item-5276',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5277 = defineMockEndpoint({
    path: '/reports/item-5277',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5278 = defineMockEndpoint({
    path: '/reports/item-5278',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5279 = defineMockEndpoint({
    path: '/reports/item-5279',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5280 = defineMockEndpoint({
    path: '/reports/item-5280',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5281 = defineMockEndpoint({
    path: '/reports/item-5281',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5282 = defineMockEndpoint({
    path: '/reports/item-5282',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5283 = defineMockEndpoint({
    path: '/reports/item-5283',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5284 = defineMockEndpoint({
    path: '/reports/item-5284',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5285 = defineMockEndpoint({
    path: '/reports/item-5285',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5286 = defineMockEndpoint({
    path: '/reports/item-5286',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5287 = defineMockEndpoint({
    path: '/reports/item-5287',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5288 = defineMockEndpoint({
    path: '/reports/item-5288',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5289 = defineMockEndpoint({
    path: '/reports/item-5289',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5290 = defineMockEndpoint({
    path: '/reports/item-5290',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5291 = defineMockEndpoint({
    path: '/reports/item-5291',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5292 = defineMockEndpoint({
    path: '/reports/item-5292',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5293 = defineMockEndpoint({
    path: '/reports/item-5293',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5294 = defineMockEndpoint({
    path: '/reports/item-5294',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5295 = defineMockEndpoint({
    path: '/reports/item-5295',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5296 = defineMockEndpoint({
    path: '/reports/item-5296',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5297 = defineMockEndpoint({
    path: '/reports/item-5297',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5298 = defineMockEndpoint({
    path: '/reports/item-5298',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5299 = defineMockEndpoint({
    path: '/reports/item-5299',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5300 = defineMockEndpoint({
    path: '/reports/item-5300',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5301 = defineMockEndpoint({
    path: '/reports/item-5301',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5302 = defineMockEndpoint({
    path: '/reports/item-5302',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5303 = defineMockEndpoint({
    path: '/reports/item-5303',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5304 = defineMockEndpoint({
    path: '/reports/item-5304',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5305 = defineMockEndpoint({
    path: '/reports/item-5305',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5306 = defineMockEndpoint({
    path: '/reports/item-5306',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5307 = defineMockEndpoint({
    path: '/reports/item-5307',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5308 = defineMockEndpoint({
    path: '/reports/item-5308',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5309 = defineMockEndpoint({
    path: '/reports/item-5309',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5310 = defineMockEndpoint({
    path: '/reports/item-5310',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5311 = defineMockEndpoint({
    path: '/reports/item-5311',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5312 = defineMockEndpoint({
    path: '/reports/item-5312',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5313 = defineMockEndpoint({
    path: '/reports/item-5313',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5314 = defineMockEndpoint({
    path: '/reports/item-5314',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5315 = defineMockEndpoint({
    path: '/reports/item-5315',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5316 = defineMockEndpoint({
    path: '/reports/item-5316',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5317 = defineMockEndpoint({
    path: '/reports/item-5317',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5318 = defineMockEndpoint({
    path: '/reports/item-5318',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5319 = defineMockEndpoint({
    path: '/reports/item-5319',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5320 = defineMockEndpoint({
    path: '/reports/item-5320',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5321 = defineMockEndpoint({
    path: '/reports/item-5321',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5322 = defineMockEndpoint({
    path: '/reports/item-5322',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5323 = defineMockEndpoint({
    path: '/reports/item-5323',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5324 = defineMockEndpoint({
    path: '/reports/item-5324',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5325 = defineMockEndpoint({
    path: '/reports/item-5325',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5326 = defineMockEndpoint({
    path: '/reports/item-5326',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5327 = defineMockEndpoint({
    path: '/reports/item-5327',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5328 = defineMockEndpoint({
    path: '/reports/item-5328',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5329 = defineMockEndpoint({
    path: '/reports/item-5329',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5330 = defineMockEndpoint({
    path: '/reports/item-5330',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5331 = defineMockEndpoint({
    path: '/reports/item-5331',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5332 = defineMockEndpoint({
    path: '/reports/item-5332',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5333 = defineMockEndpoint({
    path: '/reports/item-5333',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5334 = defineMockEndpoint({
    path: '/reports/item-5334',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5335 = defineMockEndpoint({
    path: '/reports/item-5335',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5336 = defineMockEndpoint({
    path: '/reports/item-5336',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5337 = defineMockEndpoint({
    path: '/reports/item-5337',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5338 = defineMockEndpoint({
    path: '/reports/item-5338',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5339 = defineMockEndpoint({
    path: '/reports/item-5339',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5340 = defineMockEndpoint({
    path: '/reports/item-5340',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5341 = defineMockEndpoint({
    path: '/reports/item-5341',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5342 = defineMockEndpoint({
    path: '/reports/item-5342',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5343 = defineMockEndpoint({
    path: '/reports/item-5343',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5344 = defineMockEndpoint({
    path: '/reports/item-5344',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5345 = defineMockEndpoint({
    path: '/reports/item-5345',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5346 = defineMockEndpoint({
    path: '/reports/item-5346',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5347 = defineMockEndpoint({
    path: '/reports/item-5347',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5348 = defineMockEndpoint({
    path: '/reports/item-5348',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5349 = defineMockEndpoint({
    path: '/reports/item-5349',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5350 = defineMockEndpoint({
    path: '/reports/item-5350',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5351 = defineMockEndpoint({
    path: '/reports/item-5351',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5352 = defineMockEndpoint({
    path: '/reports/item-5352',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5353 = defineMockEndpoint({
    path: '/reports/item-5353',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5354 = defineMockEndpoint({
    path: '/reports/item-5354',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5355 = defineMockEndpoint({
    path: '/reports/item-5355',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5356 = defineMockEndpoint({
    path: '/reports/item-5356',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5357 = defineMockEndpoint({
    path: '/reports/item-5357',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5358 = defineMockEndpoint({
    path: '/reports/item-5358',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5359 = defineMockEndpoint({
    path: '/reports/item-5359',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5360 = defineMockEndpoint({
    path: '/reports/item-5360',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5361 = defineMockEndpoint({
    path: '/reports/item-5361',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5362 = defineMockEndpoint({
    path: '/reports/item-5362',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5363 = defineMockEndpoint({
    path: '/reports/item-5363',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5364 = defineMockEndpoint({
    path: '/reports/item-5364',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5365 = defineMockEndpoint({
    path: '/reports/item-5365',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5366 = defineMockEndpoint({
    path: '/reports/item-5366',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5367 = defineMockEndpoint({
    path: '/reports/item-5367',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5368 = defineMockEndpoint({
    path: '/reports/item-5368',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5369 = defineMockEndpoint({
    path: '/reports/item-5369',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5370 = defineMockEndpoint({
    path: '/reports/item-5370',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5371 = defineMockEndpoint({
    path: '/reports/item-5371',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5372 = defineMockEndpoint({
    path: '/reports/item-5372',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5373 = defineMockEndpoint({
    path: '/reports/item-5373',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5374 = defineMockEndpoint({
    path: '/reports/item-5374',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5375 = defineMockEndpoint({
    path: '/reports/item-5375',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5376 = defineMockEndpoint({
    path: '/reports/item-5376',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5377 = defineMockEndpoint({
    path: '/reports/item-5377',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5378 = defineMockEndpoint({
    path: '/reports/item-5378',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5379 = defineMockEndpoint({
    path: '/reports/item-5379',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5380 = defineMockEndpoint({
    path: '/reports/item-5380',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5381 = defineMockEndpoint({
    path: '/reports/item-5381',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5382 = defineMockEndpoint({
    path: '/reports/item-5382',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5383 = defineMockEndpoint({
    path: '/reports/item-5383',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5384 = defineMockEndpoint({
    path: '/reports/item-5384',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5385 = defineMockEndpoint({
    path: '/reports/item-5385',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5386 = defineMockEndpoint({
    path: '/reports/item-5386',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5387 = defineMockEndpoint({
    path: '/reports/item-5387',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5388 = defineMockEndpoint({
    path: '/reports/item-5388',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5389 = defineMockEndpoint({
    path: '/reports/item-5389',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5390 = defineMockEndpoint({
    path: '/reports/item-5390',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5391 = defineMockEndpoint({
    path: '/reports/item-5391',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5392 = defineMockEndpoint({
    path: '/reports/item-5392',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5393 = defineMockEndpoint({
    path: '/reports/item-5393',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5394 = defineMockEndpoint({
    path: '/reports/item-5394',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5395 = defineMockEndpoint({
    path: '/reports/item-5395',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5396 = defineMockEndpoint({
    path: '/reports/item-5396',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5397 = defineMockEndpoint({
    path: '/reports/item-5397',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5398 = defineMockEndpoint({
    path: '/reports/item-5398',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5399 = defineMockEndpoint({
    path: '/reports/item-5399',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5400 = defineMockEndpoint({
    path: '/reports/item-5400',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5401 = defineMockEndpoint({
    path: '/reports/item-5401',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5402 = defineMockEndpoint({
    path: '/reports/item-5402',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5403 = defineMockEndpoint({
    path: '/reports/item-5403',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5404 = defineMockEndpoint({
    path: '/reports/item-5404',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5405 = defineMockEndpoint({
    path: '/reports/item-5405',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5406 = defineMockEndpoint({
    path: '/reports/item-5406',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5407 = defineMockEndpoint({
    path: '/reports/item-5407',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5408 = defineMockEndpoint({
    path: '/reports/item-5408',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5409 = defineMockEndpoint({
    path: '/reports/item-5409',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5410 = defineMockEndpoint({
    path: '/reports/item-5410',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5411 = defineMockEndpoint({
    path: '/reports/item-5411',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5412 = defineMockEndpoint({
    path: '/reports/item-5412',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5413 = defineMockEndpoint({
    path: '/reports/item-5413',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5414 = defineMockEndpoint({
    path: '/reports/item-5414',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5415 = defineMockEndpoint({
    path: '/reports/item-5415',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5416 = defineMockEndpoint({
    path: '/reports/item-5416',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5417 = defineMockEndpoint({
    path: '/reports/item-5417',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5418 = defineMockEndpoint({
    path: '/reports/item-5418',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5419 = defineMockEndpoint({
    path: '/reports/item-5419',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5420 = defineMockEndpoint({
    path: '/reports/item-5420',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5421 = defineMockEndpoint({
    path: '/reports/item-5421',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5422 = defineMockEndpoint({
    path: '/reports/item-5422',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5423 = defineMockEndpoint({
    path: '/reports/item-5423',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5424 = defineMockEndpoint({
    path: '/reports/item-5424',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5425 = defineMockEndpoint({
    path: '/reports/item-5425',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5426 = defineMockEndpoint({
    path: '/reports/item-5426',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5427 = defineMockEndpoint({
    path: '/reports/item-5427',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5428 = defineMockEndpoint({
    path: '/reports/item-5428',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5429 = defineMockEndpoint({
    path: '/reports/item-5429',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5430 = defineMockEndpoint({
    path: '/reports/item-5430',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5431 = defineMockEndpoint({
    path: '/reports/item-5431',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5432 = defineMockEndpoint({
    path: '/reports/item-5432',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5433 = defineMockEndpoint({
    path: '/reports/item-5433',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5434 = defineMockEndpoint({
    path: '/reports/item-5434',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5435 = defineMockEndpoint({
    path: '/reports/item-5435',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5436 = defineMockEndpoint({
    path: '/reports/item-5436',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5437 = defineMockEndpoint({
    path: '/reports/item-5437',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5438 = defineMockEndpoint({
    path: '/reports/item-5438',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5439 = defineMockEndpoint({
    path: '/reports/item-5439',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5440 = defineMockEndpoint({
    path: '/reports/item-5440',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5441 = defineMockEndpoint({
    path: '/reports/item-5441',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5442 = defineMockEndpoint({
    path: '/reports/item-5442',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5443 = defineMockEndpoint({
    path: '/reports/item-5443',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5444 = defineMockEndpoint({
    path: '/reports/item-5444',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5445 = defineMockEndpoint({
    path: '/reports/item-5445',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5446 = defineMockEndpoint({
    path: '/reports/item-5446',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5447 = defineMockEndpoint({
    path: '/reports/item-5447',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5448 = defineMockEndpoint({
    path: '/reports/item-5448',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5449 = defineMockEndpoint({
    path: '/reports/item-5449',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5450 = defineMockEndpoint({
    path: '/reports/item-5450',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5451 = defineMockEndpoint({
    path: '/reports/item-5451',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5452 = defineMockEndpoint({
    path: '/reports/item-5452',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5453 = defineMockEndpoint({
    path: '/reports/item-5453',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5454 = defineMockEndpoint({
    path: '/reports/item-5454',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5455 = defineMockEndpoint({
    path: '/reports/item-5455',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5456 = defineMockEndpoint({
    path: '/reports/item-5456',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5457 = defineMockEndpoint({
    path: '/reports/item-5457',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5458 = defineMockEndpoint({
    path: '/reports/item-5458',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5459 = defineMockEndpoint({
    path: '/reports/item-5459',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5460 = defineMockEndpoint({
    path: '/reports/item-5460',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5461 = defineMockEndpoint({
    path: '/reports/item-5461',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5462 = defineMockEndpoint({
    path: '/reports/item-5462',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5463 = defineMockEndpoint({
    path: '/reports/item-5463',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5464 = defineMockEndpoint({
    path: '/reports/item-5464',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5465 = defineMockEndpoint({
    path: '/reports/item-5465',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5466 = defineMockEndpoint({
    path: '/reports/item-5466',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5467 = defineMockEndpoint({
    path: '/reports/item-5467',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5468 = defineMockEndpoint({
    path: '/reports/item-5468',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5469 = defineMockEndpoint({
    path: '/reports/item-5469',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5470 = defineMockEndpoint({
    path: '/reports/item-5470',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5471 = defineMockEndpoint({
    path: '/reports/item-5471',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5472 = defineMockEndpoint({
    path: '/reports/item-5472',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5473 = defineMockEndpoint({
    path: '/reports/item-5473',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5474 = defineMockEndpoint({
    path: '/reports/item-5474',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5475 = defineMockEndpoint({
    path: '/reports/item-5475',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5476 = defineMockEndpoint({
    path: '/reports/item-5476',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5477 = defineMockEndpoint({
    path: '/reports/item-5477',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5478 = defineMockEndpoint({
    path: '/reports/item-5478',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5479 = defineMockEndpoint({
    path: '/reports/item-5479',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5480 = defineMockEndpoint({
    path: '/reports/item-5480',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5481 = defineMockEndpoint({
    path: '/reports/item-5481',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5482 = defineMockEndpoint({
    path: '/reports/item-5482',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5483 = defineMockEndpoint({
    path: '/reports/item-5483',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5484 = defineMockEndpoint({
    path: '/reports/item-5484',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5485 = defineMockEndpoint({
    path: '/reports/item-5485',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5486 = defineMockEndpoint({
    path: '/reports/item-5486',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5487 = defineMockEndpoint({
    path: '/reports/item-5487',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5488 = defineMockEndpoint({
    path: '/reports/item-5488',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5489 = defineMockEndpoint({
    path: '/reports/item-5489',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5490 = defineMockEndpoint({
    path: '/reports/item-5490',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5491 = defineMockEndpoint({
    path: '/reports/item-5491',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5492 = defineMockEndpoint({
    path: '/reports/item-5492',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5493 = defineMockEndpoint({
    path: '/reports/item-5493',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5494 = defineMockEndpoint({
    path: '/reports/item-5494',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5495 = defineMockEndpoint({
    path: '/reports/item-5495',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5496 = defineMockEndpoint({
    path: '/reports/item-5496',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5497 = defineMockEndpoint({
    path: '/reports/item-5497',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5498 = defineMockEndpoint({
    path: '/reports/item-5498',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5499 = defineMockEndpoint({
    path: '/reports/item-5499',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5500 = defineMockEndpoint({
    path: '/reports/item-5500',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5501 = defineMockEndpoint({
    path: '/reports/item-5501',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5502 = defineMockEndpoint({
    path: '/reports/item-5502',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5503 = defineMockEndpoint({
    path: '/reports/item-5503',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5504 = defineMockEndpoint({
    path: '/reports/item-5504',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5505 = defineMockEndpoint({
    path: '/reports/item-5505',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5506 = defineMockEndpoint({
    path: '/reports/item-5506',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5507 = defineMockEndpoint({
    path: '/reports/item-5507',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5508 = defineMockEndpoint({
    path: '/reports/item-5508',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5509 = defineMockEndpoint({
    path: '/reports/item-5509',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5510 = defineMockEndpoint({
    path: '/reports/item-5510',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5511 = defineMockEndpoint({
    path: '/reports/item-5511',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5512 = defineMockEndpoint({
    path: '/reports/item-5512',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5513 = defineMockEndpoint({
    path: '/reports/item-5513',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5514 = defineMockEndpoint({
    path: '/reports/item-5514',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5515 = defineMockEndpoint({
    path: '/reports/item-5515',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5516 = defineMockEndpoint({
    path: '/reports/item-5516',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5517 = defineMockEndpoint({
    path: '/reports/item-5517',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5518 = defineMockEndpoint({
    path: '/reports/item-5518',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5519 = defineMockEndpoint({
    path: '/reports/item-5519',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5520 = defineMockEndpoint({
    path: '/reports/item-5520',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5521 = defineMockEndpoint({
    path: '/reports/item-5521',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5522 = defineMockEndpoint({
    path: '/reports/item-5522',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5523 = defineMockEndpoint({
    path: '/reports/item-5523',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5524 = defineMockEndpoint({
    path: '/reports/item-5524',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5525 = defineMockEndpoint({
    path: '/reports/item-5525',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5526 = defineMockEndpoint({
    path: '/reports/item-5526',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5527 = defineMockEndpoint({
    path: '/reports/item-5527',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5528 = defineMockEndpoint({
    path: '/reports/item-5528',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5529 = defineMockEndpoint({
    path: '/reports/item-5529',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5530 = defineMockEndpoint({
    path: '/reports/item-5530',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5531 = defineMockEndpoint({
    path: '/reports/item-5531',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5532 = defineMockEndpoint({
    path: '/reports/item-5532',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5533 = defineMockEndpoint({
    path: '/reports/item-5533',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5534 = defineMockEndpoint({
    path: '/reports/item-5534',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5535 = defineMockEndpoint({
    path: '/reports/item-5535',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5536 = defineMockEndpoint({
    path: '/reports/item-5536',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5537 = defineMockEndpoint({
    path: '/reports/item-5537',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5538 = defineMockEndpoint({
    path: '/reports/item-5538',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5539 = defineMockEndpoint({
    path: '/reports/item-5539',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5540 = defineMockEndpoint({
    path: '/reports/item-5540',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5541 = defineMockEndpoint({
    path: '/reports/item-5541',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5542 = defineMockEndpoint({
    path: '/reports/item-5542',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5543 = defineMockEndpoint({
    path: '/reports/item-5543',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5544 = defineMockEndpoint({
    path: '/reports/item-5544',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5545 = defineMockEndpoint({
    path: '/reports/item-5545',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5546 = defineMockEndpoint({
    path: '/reports/item-5546',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5547 = defineMockEndpoint({
    path: '/reports/item-5547',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5548 = defineMockEndpoint({
    path: '/reports/item-5548',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5549 = defineMockEndpoint({
    path: '/reports/item-5549',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5550 = defineMockEndpoint({
    path: '/reports/item-5550',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5551 = defineMockEndpoint({
    path: '/reports/item-5551',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5552 = defineMockEndpoint({
    path: '/reports/item-5552',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5553 = defineMockEndpoint({
    path: '/reports/item-5553',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5554 = defineMockEndpoint({
    path: '/reports/item-5554',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5555 = defineMockEndpoint({
    path: '/reports/item-5555',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5556 = defineMockEndpoint({
    path: '/reports/item-5556',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5557 = defineMockEndpoint({
    path: '/reports/item-5557',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5558 = defineMockEndpoint({
    path: '/reports/item-5558',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5559 = defineMockEndpoint({
    path: '/reports/item-5559',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5560 = defineMockEndpoint({
    path: '/reports/item-5560',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5561 = defineMockEndpoint({
    path: '/reports/item-5561',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5562 = defineMockEndpoint({
    path: '/reports/item-5562',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5563 = defineMockEndpoint({
    path: '/reports/item-5563',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5564 = defineMockEndpoint({
    path: '/reports/item-5564',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5565 = defineMockEndpoint({
    path: '/reports/item-5565',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5566 = defineMockEndpoint({
    path: '/reports/item-5566',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5567 = defineMockEndpoint({
    path: '/reports/item-5567',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5568 = defineMockEndpoint({
    path: '/reports/item-5568',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5569 = defineMockEndpoint({
    path: '/reports/item-5569',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5570 = defineMockEndpoint({
    path: '/reports/item-5570',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5571 = defineMockEndpoint({
    path: '/reports/item-5571',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5572 = defineMockEndpoint({
    path: '/reports/item-5572',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5573 = defineMockEndpoint({
    path: '/reports/item-5573',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5574 = defineMockEndpoint({
    path: '/reports/item-5574',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5575 = defineMockEndpoint({
    path: '/reports/item-5575',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5576 = defineMockEndpoint({
    path: '/reports/item-5576',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5577 = defineMockEndpoint({
    path: '/reports/item-5577',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5578 = defineMockEndpoint({
    path: '/reports/item-5578',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5579 = defineMockEndpoint({
    path: '/reports/item-5579',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5580 = defineMockEndpoint({
    path: '/reports/item-5580',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5581 = defineMockEndpoint({
    path: '/reports/item-5581',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5582 = defineMockEndpoint({
    path: '/reports/item-5582',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5583 = defineMockEndpoint({
    path: '/reports/item-5583',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5584 = defineMockEndpoint({
    path: '/reports/item-5584',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5585 = defineMockEndpoint({
    path: '/reports/item-5585',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5586 = defineMockEndpoint({
    path: '/reports/item-5586',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5587 = defineMockEndpoint({
    path: '/reports/item-5587',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5588 = defineMockEndpoint({
    path: '/reports/item-5588',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5589 = defineMockEndpoint({
    path: '/reports/item-5589',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5590 = defineMockEndpoint({
    path: '/reports/item-5590',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5591 = defineMockEndpoint({
    path: '/reports/item-5591',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5592 = defineMockEndpoint({
    path: '/reports/item-5592',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5593 = defineMockEndpoint({
    path: '/reports/item-5593',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5594 = defineMockEndpoint({
    path: '/reports/item-5594',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5595 = defineMockEndpoint({
    path: '/reports/item-5595',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5596 = defineMockEndpoint({
    path: '/reports/item-5596',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5597 = defineMockEndpoint({
    path: '/reports/item-5597',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5598 = defineMockEndpoint({
    path: '/reports/item-5598',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5599 = defineMockEndpoint({
    path: '/reports/item-5599',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5600 = defineMockEndpoint({
    path: '/reports/item-5600',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5601 = defineMockEndpoint({
    path: '/reports/item-5601',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5602 = defineMockEndpoint({
    path: '/reports/item-5602',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5603 = defineMockEndpoint({
    path: '/reports/item-5603',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5604 = defineMockEndpoint({
    path: '/reports/item-5604',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5605 = defineMockEndpoint({
    path: '/reports/item-5605',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5606 = defineMockEndpoint({
    path: '/reports/item-5606',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5607 = defineMockEndpoint({
    path: '/reports/item-5607',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5608 = defineMockEndpoint({
    path: '/reports/item-5608',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5609 = defineMockEndpoint({
    path: '/reports/item-5609',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5610 = defineMockEndpoint({
    path: '/reports/item-5610',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5611 = defineMockEndpoint({
    path: '/reports/item-5611',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5612 = defineMockEndpoint({
    path: '/reports/item-5612',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5613 = defineMockEndpoint({
    path: '/reports/item-5613',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5614 = defineMockEndpoint({
    path: '/reports/item-5614',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5615 = defineMockEndpoint({
    path: '/reports/item-5615',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5616 = defineMockEndpoint({
    path: '/reports/item-5616',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5617 = defineMockEndpoint({
    path: '/reports/item-5617',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5618 = defineMockEndpoint({
    path: '/reports/item-5618',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5619 = defineMockEndpoint({
    path: '/reports/item-5619',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5620 = defineMockEndpoint({
    path: '/reports/item-5620',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5621 = defineMockEndpoint({
    path: '/reports/item-5621',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5622 = defineMockEndpoint({
    path: '/reports/item-5622',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5623 = defineMockEndpoint({
    path: '/reports/item-5623',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5624 = defineMockEndpoint({
    path: '/reports/item-5624',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5625 = defineMockEndpoint({
    path: '/reports/item-5625',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5626 = defineMockEndpoint({
    path: '/reports/item-5626',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5627 = defineMockEndpoint({
    path: '/reports/item-5627',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5628 = defineMockEndpoint({
    path: '/reports/item-5628',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5629 = defineMockEndpoint({
    path: '/reports/item-5629',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5630 = defineMockEndpoint({
    path: '/reports/item-5630',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5631 = defineMockEndpoint({
    path: '/reports/item-5631',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5632 = defineMockEndpoint({
    path: '/reports/item-5632',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5633 = defineMockEndpoint({
    path: '/reports/item-5633',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5634 = defineMockEndpoint({
    path: '/reports/item-5634',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5635 = defineMockEndpoint({
    path: '/reports/item-5635',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5636 = defineMockEndpoint({
    path: '/reports/item-5636',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5637 = defineMockEndpoint({
    path: '/reports/item-5637',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5638 = defineMockEndpoint({
    path: '/reports/item-5638',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5639 = defineMockEndpoint({
    path: '/reports/item-5639',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5640 = defineMockEndpoint({
    path: '/reports/item-5640',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5641 = defineMockEndpoint({
    path: '/reports/item-5641',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5642 = defineMockEndpoint({
    path: '/reports/item-5642',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5643 = defineMockEndpoint({
    path: '/reports/item-5643',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5644 = defineMockEndpoint({
    path: '/reports/item-5644',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5645 = defineMockEndpoint({
    path: '/reports/item-5645',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5646 = defineMockEndpoint({
    path: '/reports/item-5646',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5647 = defineMockEndpoint({
    path: '/reports/item-5647',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5648 = defineMockEndpoint({
    path: '/reports/item-5648',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5649 = defineMockEndpoint({
    path: '/reports/item-5649',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5650 = defineMockEndpoint({
    path: '/reports/item-5650',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5651 = defineMockEndpoint({
    path: '/reports/item-5651',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5652 = defineMockEndpoint({
    path: '/reports/item-5652',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5653 = defineMockEndpoint({
    path: '/reports/item-5653',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5654 = defineMockEndpoint({
    path: '/reports/item-5654',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5655 = defineMockEndpoint({
    path: '/reports/item-5655',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5656 = defineMockEndpoint({
    path: '/reports/item-5656',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5657 = defineMockEndpoint({
    path: '/reports/item-5657',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5658 = defineMockEndpoint({
    path: '/reports/item-5658',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5659 = defineMockEndpoint({
    path: '/reports/item-5659',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5660 = defineMockEndpoint({
    path: '/reports/item-5660',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5661 = defineMockEndpoint({
    path: '/reports/item-5661',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5662 = defineMockEndpoint({
    path: '/reports/item-5662',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5663 = defineMockEndpoint({
    path: '/reports/item-5663',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5664 = defineMockEndpoint({
    path: '/reports/item-5664',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5665 = defineMockEndpoint({
    path: '/reports/item-5665',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5666 = defineMockEndpoint({
    path: '/reports/item-5666',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5667 = defineMockEndpoint({
    path: '/reports/item-5667',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5668 = defineMockEndpoint({
    path: '/reports/item-5668',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5669 = defineMockEndpoint({
    path: '/reports/item-5669',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5670 = defineMockEndpoint({
    path: '/reports/item-5670',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5671 = defineMockEndpoint({
    path: '/reports/item-5671',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5672 = defineMockEndpoint({
    path: '/reports/item-5672',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5673 = defineMockEndpoint({
    path: '/reports/item-5673',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5674 = defineMockEndpoint({
    path: '/reports/item-5674',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5675 = defineMockEndpoint({
    path: '/reports/item-5675',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5676 = defineMockEndpoint({
    path: '/reports/item-5676',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5677 = defineMockEndpoint({
    path: '/reports/item-5677',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5678 = defineMockEndpoint({
    path: '/reports/item-5678',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5679 = defineMockEndpoint({
    path: '/reports/item-5679',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5680 = defineMockEndpoint({
    path: '/reports/item-5680',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5681 = defineMockEndpoint({
    path: '/reports/item-5681',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5682 = defineMockEndpoint({
    path: '/reports/item-5682',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5683 = defineMockEndpoint({
    path: '/reports/item-5683',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5684 = defineMockEndpoint({
    path: '/reports/item-5684',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5685 = defineMockEndpoint({
    path: '/reports/item-5685',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5686 = defineMockEndpoint({
    path: '/reports/item-5686',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5687 = defineMockEndpoint({
    path: '/reports/item-5687',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5688 = defineMockEndpoint({
    path: '/reports/item-5688',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5689 = defineMockEndpoint({
    path: '/reports/item-5689',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5690 = defineMockEndpoint({
    path: '/reports/item-5690',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5691 = defineMockEndpoint({
    path: '/reports/item-5691',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5692 = defineMockEndpoint({
    path: '/reports/item-5692',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5693 = defineMockEndpoint({
    path: '/reports/item-5693',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5694 = defineMockEndpoint({
    path: '/reports/item-5694',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5695 = defineMockEndpoint({
    path: '/reports/item-5695',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5696 = defineMockEndpoint({
    path: '/reports/item-5696',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5697 = defineMockEndpoint({
    path: '/reports/item-5697',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5698 = defineMockEndpoint({
    path: '/reports/item-5698',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5699 = defineMockEndpoint({
    path: '/reports/item-5699',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5700 = defineMockEndpoint({
    path: '/reports/item-5700',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5701 = defineMockEndpoint({
    path: '/reports/item-5701',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5702 = defineMockEndpoint({
    path: '/reports/item-5702',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5703 = defineMockEndpoint({
    path: '/reports/item-5703',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5704 = defineMockEndpoint({
    path: '/reports/item-5704',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5705 = defineMockEndpoint({
    path: '/reports/item-5705',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5706 = defineMockEndpoint({
    path: '/reports/item-5706',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5707 = defineMockEndpoint({
    path: '/reports/item-5707',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5708 = defineMockEndpoint({
    path: '/reports/item-5708',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5709 = defineMockEndpoint({
    path: '/reports/item-5709',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5710 = defineMockEndpoint({
    path: '/reports/item-5710',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5711 = defineMockEndpoint({
    path: '/reports/item-5711',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5712 = defineMockEndpoint({
    path: '/reports/item-5712',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5713 = defineMockEndpoint({
    path: '/reports/item-5713',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5714 = defineMockEndpoint({
    path: '/reports/item-5714',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5715 = defineMockEndpoint({
    path: '/reports/item-5715',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5716 = defineMockEndpoint({
    path: '/reports/item-5716',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5717 = defineMockEndpoint({
    path: '/reports/item-5717',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5718 = defineMockEndpoint({
    path: '/reports/item-5718',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5719 = defineMockEndpoint({
    path: '/reports/item-5719',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5720 = defineMockEndpoint({
    path: '/reports/item-5720',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5721 = defineMockEndpoint({
    path: '/reports/item-5721',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5722 = defineMockEndpoint({
    path: '/reports/item-5722',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5723 = defineMockEndpoint({
    path: '/reports/item-5723',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5724 = defineMockEndpoint({
    path: '/reports/item-5724',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5725 = defineMockEndpoint({
    path: '/reports/item-5725',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5726 = defineMockEndpoint({
    path: '/reports/item-5726',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5727 = defineMockEndpoint({
    path: '/reports/item-5727',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5728 = defineMockEndpoint({
    path: '/reports/item-5728',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5729 = defineMockEndpoint({
    path: '/reports/item-5729',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5730 = defineMockEndpoint({
    path: '/reports/item-5730',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5731 = defineMockEndpoint({
    path: '/reports/item-5731',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5732 = defineMockEndpoint({
    path: '/reports/item-5732',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5733 = defineMockEndpoint({
    path: '/reports/item-5733',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5734 = defineMockEndpoint({
    path: '/reports/item-5734',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5735 = defineMockEndpoint({
    path: '/reports/item-5735',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5736 = defineMockEndpoint({
    path: '/reports/item-5736',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5737 = defineMockEndpoint({
    path: '/reports/item-5737',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5738 = defineMockEndpoint({
    path: '/reports/item-5738',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5739 = defineMockEndpoint({
    path: '/reports/item-5739',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5740 = defineMockEndpoint({
    path: '/reports/item-5740',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5741 = defineMockEndpoint({
    path: '/reports/item-5741',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5742 = defineMockEndpoint({
    path: '/reports/item-5742',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5743 = defineMockEndpoint({
    path: '/reports/item-5743',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5744 = defineMockEndpoint({
    path: '/reports/item-5744',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5745 = defineMockEndpoint({
    path: '/reports/item-5745',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5746 = defineMockEndpoint({
    path: '/reports/item-5746',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5747 = defineMockEndpoint({
    path: '/reports/item-5747',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5748 = defineMockEndpoint({
    path: '/reports/item-5748',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5749 = defineMockEndpoint({
    path: '/reports/item-5749',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5750 = defineMockEndpoint({
    path: '/reports/item-5750',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5751 = defineMockEndpoint({
    path: '/reports/item-5751',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5752 = defineMockEndpoint({
    path: '/reports/item-5752',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5753 = defineMockEndpoint({
    path: '/reports/item-5753',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5754 = defineMockEndpoint({
    path: '/reports/item-5754',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5755 = defineMockEndpoint({
    path: '/reports/item-5755',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5756 = defineMockEndpoint({
    path: '/reports/item-5756',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5757 = defineMockEndpoint({
    path: '/reports/item-5757',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5758 = defineMockEndpoint({
    path: '/reports/item-5758',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5759 = defineMockEndpoint({
    path: '/reports/item-5759',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5760 = defineMockEndpoint({
    path: '/reports/item-5760',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5761 = defineMockEndpoint({
    path: '/reports/item-5761',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5762 = defineMockEndpoint({
    path: '/reports/item-5762',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5763 = defineMockEndpoint({
    path: '/reports/item-5763',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5764 = defineMockEndpoint({
    path: '/reports/item-5764',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5765 = defineMockEndpoint({
    path: '/reports/item-5765',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5766 = defineMockEndpoint({
    path: '/reports/item-5766',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5767 = defineMockEndpoint({
    path: '/reports/item-5767',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5768 = defineMockEndpoint({
    path: '/reports/item-5768',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5769 = defineMockEndpoint({
    path: '/reports/item-5769',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5770 = defineMockEndpoint({
    path: '/reports/item-5770',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5771 = defineMockEndpoint({
    path: '/reports/item-5771',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5772 = defineMockEndpoint({
    path: '/reports/item-5772',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5773 = defineMockEndpoint({
    path: '/reports/item-5773',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5774 = defineMockEndpoint({
    path: '/reports/item-5774',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5775 = defineMockEndpoint({
    path: '/reports/item-5775',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5776 = defineMockEndpoint({
    path: '/reports/item-5776',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5777 = defineMockEndpoint({
    path: '/reports/item-5777',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5778 = defineMockEndpoint({
    path: '/reports/item-5778',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5779 = defineMockEndpoint({
    path: '/reports/item-5779',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5780 = defineMockEndpoint({
    path: '/reports/item-5780',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5781 = defineMockEndpoint({
    path: '/reports/item-5781',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5782 = defineMockEndpoint({
    path: '/reports/item-5782',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5783 = defineMockEndpoint({
    path: '/reports/item-5783',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5784 = defineMockEndpoint({
    path: '/reports/item-5784',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5785 = defineMockEndpoint({
    path: '/reports/item-5785',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5786 = defineMockEndpoint({
    path: '/reports/item-5786',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5787 = defineMockEndpoint({
    path: '/reports/item-5787',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5788 = defineMockEndpoint({
    path: '/reports/item-5788',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5789 = defineMockEndpoint({
    path: '/reports/item-5789',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5790 = defineMockEndpoint({
    path: '/reports/item-5790',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5791 = defineMockEndpoint({
    path: '/reports/item-5791',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5792 = defineMockEndpoint({
    path: '/reports/item-5792',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5793 = defineMockEndpoint({
    path: '/reports/item-5793',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5794 = defineMockEndpoint({
    path: '/reports/item-5794',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5795 = defineMockEndpoint({
    path: '/reports/item-5795',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5796 = defineMockEndpoint({
    path: '/reports/item-5796',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5797 = defineMockEndpoint({
    path: '/reports/item-5797',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5798 = defineMockEndpoint({
    path: '/reports/item-5798',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5799 = defineMockEndpoint({
    path: '/reports/item-5799',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5800 = defineMockEndpoint({
    path: '/reports/item-5800',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5801 = defineMockEndpoint({
    path: '/reports/item-5801',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5802 = defineMockEndpoint({
    path: '/reports/item-5802',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5803 = defineMockEndpoint({
    path: '/reports/item-5803',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5804 = defineMockEndpoint({
    path: '/reports/item-5804',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5805 = defineMockEndpoint({
    path: '/reports/item-5805',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5806 = defineMockEndpoint({
    path: '/reports/item-5806',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5807 = defineMockEndpoint({
    path: '/reports/item-5807',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5808 = defineMockEndpoint({
    path: '/reports/item-5808',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5809 = defineMockEndpoint({
    path: '/reports/item-5809',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5810 = defineMockEndpoint({
    path: '/reports/item-5810',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5811 = defineMockEndpoint({
    path: '/reports/item-5811',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5812 = defineMockEndpoint({
    path: '/reports/item-5812',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5813 = defineMockEndpoint({
    path: '/reports/item-5813',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5814 = defineMockEndpoint({
    path: '/reports/item-5814',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5815 = defineMockEndpoint({
    path: '/reports/item-5815',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5816 = defineMockEndpoint({
    path: '/reports/item-5816',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5817 = defineMockEndpoint({
    path: '/reports/item-5817',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5818 = defineMockEndpoint({
    path: '/reports/item-5818',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5819 = defineMockEndpoint({
    path: '/reports/item-5819',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5820 = defineMockEndpoint({
    path: '/reports/item-5820',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5821 = defineMockEndpoint({
    path: '/reports/item-5821',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5822 = defineMockEndpoint({
    path: '/reports/item-5822',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5823 = defineMockEndpoint({
    path: '/reports/item-5823',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5824 = defineMockEndpoint({
    path: '/reports/item-5824',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5825 = defineMockEndpoint({
    path: '/reports/item-5825',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5826 = defineMockEndpoint({
    path: '/reports/item-5826',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5827 = defineMockEndpoint({
    path: '/reports/item-5827',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5828 = defineMockEndpoint({
    path: '/reports/item-5828',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5829 = defineMockEndpoint({
    path: '/reports/item-5829',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5830 = defineMockEndpoint({
    path: '/reports/item-5830',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5831 = defineMockEndpoint({
    path: '/reports/item-5831',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5832 = defineMockEndpoint({
    path: '/reports/item-5832',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5833 = defineMockEndpoint({
    path: '/reports/item-5833',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5834 = defineMockEndpoint({
    path: '/reports/item-5834',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5835 = defineMockEndpoint({
    path: '/reports/item-5835',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5836 = defineMockEndpoint({
    path: '/reports/item-5836',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5837 = defineMockEndpoint({
    path: '/reports/item-5837',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5838 = defineMockEndpoint({
    path: '/reports/item-5838',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5839 = defineMockEndpoint({
    path: '/reports/item-5839',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5840 = defineMockEndpoint({
    path: '/reports/item-5840',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5841 = defineMockEndpoint({
    path: '/reports/item-5841',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5842 = defineMockEndpoint({
    path: '/reports/item-5842',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5843 = defineMockEndpoint({
    path: '/reports/item-5843',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5844 = defineMockEndpoint({
    path: '/reports/item-5844',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5845 = defineMockEndpoint({
    path: '/reports/item-5845',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5846 = defineMockEndpoint({
    path: '/reports/item-5846',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5847 = defineMockEndpoint({
    path: '/reports/item-5847',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5848 = defineMockEndpoint({
    path: '/reports/item-5848',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5849 = defineMockEndpoint({
    path: '/reports/item-5849',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5850 = defineMockEndpoint({
    path: '/reports/item-5850',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5851 = defineMockEndpoint({
    path: '/reports/item-5851',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5852 = defineMockEndpoint({
    path: '/reports/item-5852',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5853 = defineMockEndpoint({
    path: '/reports/item-5853',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5854 = defineMockEndpoint({
    path: '/reports/item-5854',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5855 = defineMockEndpoint({
    path: '/reports/item-5855',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5856 = defineMockEndpoint({
    path: '/reports/item-5856',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5857 = defineMockEndpoint({
    path: '/reports/item-5857',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5858 = defineMockEndpoint({
    path: '/reports/item-5858',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5859 = defineMockEndpoint({
    path: '/reports/item-5859',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5860 = defineMockEndpoint({
    path: '/reports/item-5860',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5861 = defineMockEndpoint({
    path: '/reports/item-5861',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5862 = defineMockEndpoint({
    path: '/reports/item-5862',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5863 = defineMockEndpoint({
    path: '/reports/item-5863',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5864 = defineMockEndpoint({
    path: '/reports/item-5864',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5865 = defineMockEndpoint({
    path: '/reports/item-5865',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5866 = defineMockEndpoint({
    path: '/reports/item-5866',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5867 = defineMockEndpoint({
    path: '/reports/item-5867',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5868 = defineMockEndpoint({
    path: '/reports/item-5868',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5869 = defineMockEndpoint({
    path: '/reports/item-5869',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5870 = defineMockEndpoint({
    path: '/reports/item-5870',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5871 = defineMockEndpoint({
    path: '/reports/item-5871',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5872 = defineMockEndpoint({
    path: '/reports/item-5872',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5873 = defineMockEndpoint({
    path: '/reports/item-5873',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5874 = defineMockEndpoint({
    path: '/reports/item-5874',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5875 = defineMockEndpoint({
    path: '/reports/item-5875',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5876 = defineMockEndpoint({
    path: '/reports/item-5876',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5877 = defineMockEndpoint({
    path: '/reports/item-5877',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5878 = defineMockEndpoint({
    path: '/reports/item-5878',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5879 = defineMockEndpoint({
    path: '/reports/item-5879',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5880 = defineMockEndpoint({
    path: '/reports/item-5880',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5881 = defineMockEndpoint({
    path: '/reports/item-5881',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5882 = defineMockEndpoint({
    path: '/reports/item-5882',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5883 = defineMockEndpoint({
    path: '/reports/item-5883',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5884 = defineMockEndpoint({
    path: '/reports/item-5884',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5885 = defineMockEndpoint({
    path: '/reports/item-5885',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5886 = defineMockEndpoint({
    path: '/reports/item-5886',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5887 = defineMockEndpoint({
    path: '/reports/item-5887',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5888 = defineMockEndpoint({
    path: '/reports/item-5888',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5889 = defineMockEndpoint({
    path: '/reports/item-5889',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5890 = defineMockEndpoint({
    path: '/reports/item-5890',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5891 = defineMockEndpoint({
    path: '/reports/item-5891',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5892 = defineMockEndpoint({
    path: '/reports/item-5892',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5893 = defineMockEndpoint({
    path: '/reports/item-5893',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5894 = defineMockEndpoint({
    path: '/reports/item-5894',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5895 = defineMockEndpoint({
    path: '/reports/item-5895',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5896 = defineMockEndpoint({
    path: '/reports/item-5896',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5897 = defineMockEndpoint({
    path: '/reports/item-5897',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5898 = defineMockEndpoint({
    path: '/reports/item-5898',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5899 = defineMockEndpoint({
    path: '/reports/item-5899',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5900 = defineMockEndpoint({
    path: '/reports/item-5900',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5901 = defineMockEndpoint({
    path: '/reports/item-5901',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5902 = defineMockEndpoint({
    path: '/reports/item-5902',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5903 = defineMockEndpoint({
    path: '/reports/item-5903',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5904 = defineMockEndpoint({
    path: '/reports/item-5904',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5905 = defineMockEndpoint({
    path: '/reports/item-5905',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5906 = defineMockEndpoint({
    path: '/reports/item-5906',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5907 = defineMockEndpoint({
    path: '/reports/item-5907',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5908 = defineMockEndpoint({
    path: '/reports/item-5908',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5909 = defineMockEndpoint({
    path: '/reports/item-5909',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5910 = defineMockEndpoint({
    path: '/reports/item-5910',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5911 = defineMockEndpoint({
    path: '/reports/item-5911',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5912 = defineMockEndpoint({
    path: '/reports/item-5912',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5913 = defineMockEndpoint({
    path: '/reports/item-5913',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5914 = defineMockEndpoint({
    path: '/reports/item-5914',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5915 = defineMockEndpoint({
    path: '/reports/item-5915',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5916 = defineMockEndpoint({
    path: '/reports/item-5916',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5917 = defineMockEndpoint({
    path: '/reports/item-5917',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5918 = defineMockEndpoint({
    path: '/reports/item-5918',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5919 = defineMockEndpoint({
    path: '/reports/item-5919',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5920 = defineMockEndpoint({
    path: '/reports/item-5920',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5921 = defineMockEndpoint({
    path: '/reports/item-5921',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5922 = defineMockEndpoint({
    path: '/reports/item-5922',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5923 = defineMockEndpoint({
    path: '/reports/item-5923',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5924 = defineMockEndpoint({
    path: '/reports/item-5924',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5925 = defineMockEndpoint({
    path: '/reports/item-5925',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5926 = defineMockEndpoint({
    path: '/reports/item-5926',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5927 = defineMockEndpoint({
    path: '/reports/item-5927',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5928 = defineMockEndpoint({
    path: '/reports/item-5928',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5929 = defineMockEndpoint({
    path: '/reports/item-5929',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5930 = defineMockEndpoint({
    path: '/reports/item-5930',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5931 = defineMockEndpoint({
    path: '/reports/item-5931',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5932 = defineMockEndpoint({
    path: '/reports/item-5932',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5933 = defineMockEndpoint({
    path: '/reports/item-5933',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5934 = defineMockEndpoint({
    path: '/reports/item-5934',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5935 = defineMockEndpoint({
    path: '/reports/item-5935',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5936 = defineMockEndpoint({
    path: '/reports/item-5936',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5937 = defineMockEndpoint({
    path: '/reports/item-5937',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5938 = defineMockEndpoint({
    path: '/reports/item-5938',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5939 = defineMockEndpoint({
    path: '/reports/item-5939',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5940 = defineMockEndpoint({
    path: '/reports/item-5940',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5941 = defineMockEndpoint({
    path: '/reports/item-5941',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5942 = defineMockEndpoint({
    path: '/reports/item-5942',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5943 = defineMockEndpoint({
    path: '/reports/item-5943',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5944 = defineMockEndpoint({
    path: '/reports/item-5944',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5945 = defineMockEndpoint({
    path: '/reports/item-5945',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5946 = defineMockEndpoint({
    path: '/reports/item-5946',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5947 = defineMockEndpoint({
    path: '/reports/item-5947',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5948 = defineMockEndpoint({
    path: '/reports/item-5948',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5949 = defineMockEndpoint({
    path: '/reports/item-5949',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5950 = defineMockEndpoint({
    path: '/reports/item-5950',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5951 = defineMockEndpoint({
    path: '/reports/item-5951',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5952 = defineMockEndpoint({
    path: '/reports/item-5952',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5953 = defineMockEndpoint({
    path: '/reports/item-5953',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5954 = defineMockEndpoint({
    path: '/reports/item-5954',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5955 = defineMockEndpoint({
    path: '/reports/item-5955',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5956 = defineMockEndpoint({
    path: '/reports/item-5956',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5957 = defineMockEndpoint({
    path: '/reports/item-5957',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5958 = defineMockEndpoint({
    path: '/reports/item-5958',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5959 = defineMockEndpoint({
    path: '/reports/item-5959',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5960 = defineMockEndpoint({
    path: '/reports/item-5960',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5961 = defineMockEndpoint({
    path: '/reports/item-5961',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5962 = defineMockEndpoint({
    path: '/reports/item-5962',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5963 = defineMockEndpoint({
    path: '/reports/item-5963',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5964 = defineMockEndpoint({
    path: '/reports/item-5964',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5965 = defineMockEndpoint({
    path: '/reports/item-5965',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5966 = defineMockEndpoint({
    path: '/reports/item-5966',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5967 = defineMockEndpoint({
    path: '/reports/item-5967',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5968 = defineMockEndpoint({
    path: '/reports/item-5968',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5969 = defineMockEndpoint({
    path: '/reports/item-5969',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5970 = defineMockEndpoint({
    path: '/reports/item-5970',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5971 = defineMockEndpoint({
    path: '/reports/item-5971',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5972 = defineMockEndpoint({
    path: '/reports/item-5972',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5973 = defineMockEndpoint({
    path: '/reports/item-5973',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5974 = defineMockEndpoint({
    path: '/reports/item-5974',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5975 = defineMockEndpoint({
    path: '/reports/item-5975',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5976 = defineMockEndpoint({
    path: '/reports/item-5976',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5977 = defineMockEndpoint({
    path: '/reports/item-5977',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5978 = defineMockEndpoint({
    path: '/reports/item-5978',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5979 = defineMockEndpoint({
    path: '/reports/item-5979',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5980 = defineMockEndpoint({
    path: '/reports/item-5980',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5981 = defineMockEndpoint({
    path: '/reports/item-5981',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5982 = defineMockEndpoint({
    path: '/reports/item-5982',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5983 = defineMockEndpoint({
    path: '/reports/item-5983',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5984 = defineMockEndpoint({
    path: '/reports/item-5984',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5985 = defineMockEndpoint({
    path: '/reports/item-5985',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5986 = defineMockEndpoint({
    path: '/reports/item-5986',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5987 = defineMockEndpoint({
    path: '/reports/item-5987',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5988 = defineMockEndpoint({
    path: '/reports/item-5988',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5989 = defineMockEndpoint({
    path: '/reports/item-5989',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5990 = defineMockEndpoint({
    path: '/reports/item-5990',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5991 = defineMockEndpoint({
    path: '/reports/item-5991',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5992 = defineMockEndpoint({
    path: '/reports/item-5992',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5993 = defineMockEndpoint({
    path: '/reports/item-5993',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5994 = defineMockEndpoint({
    path: '/reports/item-5994',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5995 = defineMockEndpoint({
    path: '/reports/item-5995',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5996 = defineMockEndpoint({
    path: '/reports/item-5996',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5997 = defineMockEndpoint({
    path: '/reports/item-5997',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5998 = defineMockEndpoint({
    path: '/reports/item-5998',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint5999 = defineMockEndpoint({
    path: '/reports/item-5999',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});
