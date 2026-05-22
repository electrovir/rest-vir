import {HttpMethod, HttpStatus} from '@augment-vir/common';
import {defineEndpoint} from '@rest-vir/api';
import {defineShape} from 'object-shape-tester';
import {structuredRenderDataShape} from 'structured-render';
import {customProps} from '../define-mock-endpoint.js';

export const endpoint2000 = defineEndpoint({
    path: '/reports/item-2000',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2001 = defineEndpoint({
    path: '/reports/item-2001',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2002 = defineEndpoint({
    path: '/reports/item-2002',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2003 = defineEndpoint({
    path: '/reports/item-2003',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2004 = defineEndpoint({
    path: '/reports/item-2004',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2005 = defineEndpoint({
    path: '/reports/item-2005',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2006 = defineEndpoint({
    path: '/reports/item-2006',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2007 = defineEndpoint({
    path: '/reports/item-2007',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2008 = defineEndpoint({
    path: '/reports/item-2008',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2009 = defineEndpoint({
    path: '/reports/item-2009',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2010 = defineEndpoint({
    path: '/reports/item-2010',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2011 = defineEndpoint({
    path: '/reports/item-2011',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2012 = defineEndpoint({
    path: '/reports/item-2012',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2013 = defineEndpoint({
    path: '/reports/item-2013',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2014 = defineEndpoint({
    path: '/reports/item-2014',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2015 = defineEndpoint({
    path: '/reports/item-2015',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2016 = defineEndpoint({
    path: '/reports/item-2016',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2017 = defineEndpoint({
    path: '/reports/item-2017',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2018 = defineEndpoint({
    path: '/reports/item-2018',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2019 = defineEndpoint({
    path: '/reports/item-2019',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2020 = defineEndpoint({
    path: '/reports/item-2020',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2021 = defineEndpoint({
    path: '/reports/item-2021',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2022 = defineEndpoint({
    path: '/reports/item-2022',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2023 = defineEndpoint({
    path: '/reports/item-2023',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2024 = defineEndpoint({
    path: '/reports/item-2024',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2025 = defineEndpoint({
    path: '/reports/item-2025',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2026 = defineEndpoint({
    path: '/reports/item-2026',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2027 = defineEndpoint({
    path: '/reports/item-2027',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2028 = defineEndpoint({
    path: '/reports/item-2028',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2029 = defineEndpoint({
    path: '/reports/item-2029',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2030 = defineEndpoint({
    path: '/reports/item-2030',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2031 = defineEndpoint({
    path: '/reports/item-2031',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2032 = defineEndpoint({
    path: '/reports/item-2032',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2033 = defineEndpoint({
    path: '/reports/item-2033',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2034 = defineEndpoint({
    path: '/reports/item-2034',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2035 = defineEndpoint({
    path: '/reports/item-2035',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2036 = defineEndpoint({
    path: '/reports/item-2036',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2037 = defineEndpoint({
    path: '/reports/item-2037',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2038 = defineEndpoint({
    path: '/reports/item-2038',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2039 = defineEndpoint({
    path: '/reports/item-2039',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2040 = defineEndpoint({
    path: '/reports/item-2040',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2041 = defineEndpoint({
    path: '/reports/item-2041',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2042 = defineEndpoint({
    path: '/reports/item-2042',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2043 = defineEndpoint({
    path: '/reports/item-2043',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2044 = defineEndpoint({
    path: '/reports/item-2044',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2045 = defineEndpoint({
    path: '/reports/item-2045',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2046 = defineEndpoint({
    path: '/reports/item-2046',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2047 = defineEndpoint({
    path: '/reports/item-2047',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2048 = defineEndpoint({
    path: '/reports/item-2048',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2049 = defineEndpoint({
    path: '/reports/item-2049',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2050 = defineEndpoint({
    path: '/reports/item-2050',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2051 = defineEndpoint({
    path: '/reports/item-2051',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2052 = defineEndpoint({
    path: '/reports/item-2052',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2053 = defineEndpoint({
    path: '/reports/item-2053',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2054 = defineEndpoint({
    path: '/reports/item-2054',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2055 = defineEndpoint({
    path: '/reports/item-2055',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2056 = defineEndpoint({
    path: '/reports/item-2056',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2057 = defineEndpoint({
    path: '/reports/item-2057',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2058 = defineEndpoint({
    path: '/reports/item-2058',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2059 = defineEndpoint({
    path: '/reports/item-2059',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2060 = defineEndpoint({
    path: '/reports/item-2060',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2061 = defineEndpoint({
    path: '/reports/item-2061',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2062 = defineEndpoint({
    path: '/reports/item-2062',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2063 = defineEndpoint({
    path: '/reports/item-2063',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2064 = defineEndpoint({
    path: '/reports/item-2064',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2065 = defineEndpoint({
    path: '/reports/item-2065',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2066 = defineEndpoint({
    path: '/reports/item-2066',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2067 = defineEndpoint({
    path: '/reports/item-2067',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2068 = defineEndpoint({
    path: '/reports/item-2068',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2069 = defineEndpoint({
    path: '/reports/item-2069',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2070 = defineEndpoint({
    path: '/reports/item-2070',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2071 = defineEndpoint({
    path: '/reports/item-2071',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2072 = defineEndpoint({
    path: '/reports/item-2072',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2073 = defineEndpoint({
    path: '/reports/item-2073',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2074 = defineEndpoint({
    path: '/reports/item-2074',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2075 = defineEndpoint({
    path: '/reports/item-2075',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2076 = defineEndpoint({
    path: '/reports/item-2076',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2077 = defineEndpoint({
    path: '/reports/item-2077',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2078 = defineEndpoint({
    path: '/reports/item-2078',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2079 = defineEndpoint({
    path: '/reports/item-2079',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2080 = defineEndpoint({
    path: '/reports/item-2080',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2081 = defineEndpoint({
    path: '/reports/item-2081',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2082 = defineEndpoint({
    path: '/reports/item-2082',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2083 = defineEndpoint({
    path: '/reports/item-2083',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2084 = defineEndpoint({
    path: '/reports/item-2084',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2085 = defineEndpoint({
    path: '/reports/item-2085',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2086 = defineEndpoint({
    path: '/reports/item-2086',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2087 = defineEndpoint({
    path: '/reports/item-2087',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2088 = defineEndpoint({
    path: '/reports/item-2088',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2089 = defineEndpoint({
    path: '/reports/item-2089',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2090 = defineEndpoint({
    path: '/reports/item-2090',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2091 = defineEndpoint({
    path: '/reports/item-2091',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2092 = defineEndpoint({
    path: '/reports/item-2092',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2093 = defineEndpoint({
    path: '/reports/item-2093',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2094 = defineEndpoint({
    path: '/reports/item-2094',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2095 = defineEndpoint({
    path: '/reports/item-2095',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2096 = defineEndpoint({
    path: '/reports/item-2096',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2097 = defineEndpoint({
    path: '/reports/item-2097',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2098 = defineEndpoint({
    path: '/reports/item-2098',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2099 = defineEndpoint({
    path: '/reports/item-2099',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2100 = defineEndpoint({
    path: '/reports/item-2100',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2101 = defineEndpoint({
    path: '/reports/item-2101',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2102 = defineEndpoint({
    path: '/reports/item-2102',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2103 = defineEndpoint({
    path: '/reports/item-2103',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2104 = defineEndpoint({
    path: '/reports/item-2104',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2105 = defineEndpoint({
    path: '/reports/item-2105',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2106 = defineEndpoint({
    path: '/reports/item-2106',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2107 = defineEndpoint({
    path: '/reports/item-2107',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2108 = defineEndpoint({
    path: '/reports/item-2108',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2109 = defineEndpoint({
    path: '/reports/item-2109',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2110 = defineEndpoint({
    path: '/reports/item-2110',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2111 = defineEndpoint({
    path: '/reports/item-2111',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2112 = defineEndpoint({
    path: '/reports/item-2112',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2113 = defineEndpoint({
    path: '/reports/item-2113',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2114 = defineEndpoint({
    path: '/reports/item-2114',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2115 = defineEndpoint({
    path: '/reports/item-2115',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2116 = defineEndpoint({
    path: '/reports/item-2116',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2117 = defineEndpoint({
    path: '/reports/item-2117',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2118 = defineEndpoint({
    path: '/reports/item-2118',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2119 = defineEndpoint({
    path: '/reports/item-2119',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2120 = defineEndpoint({
    path: '/reports/item-2120',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2121 = defineEndpoint({
    path: '/reports/item-2121',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2122 = defineEndpoint({
    path: '/reports/item-2122',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2123 = defineEndpoint({
    path: '/reports/item-2123',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2124 = defineEndpoint({
    path: '/reports/item-2124',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2125 = defineEndpoint({
    path: '/reports/item-2125',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2126 = defineEndpoint({
    path: '/reports/item-2126',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2127 = defineEndpoint({
    path: '/reports/item-2127',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2128 = defineEndpoint({
    path: '/reports/item-2128',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2129 = defineEndpoint({
    path: '/reports/item-2129',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2130 = defineEndpoint({
    path: '/reports/item-2130',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2131 = defineEndpoint({
    path: '/reports/item-2131',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2132 = defineEndpoint({
    path: '/reports/item-2132',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2133 = defineEndpoint({
    path: '/reports/item-2133',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2134 = defineEndpoint({
    path: '/reports/item-2134',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2135 = defineEndpoint({
    path: '/reports/item-2135',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2136 = defineEndpoint({
    path: '/reports/item-2136',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2137 = defineEndpoint({
    path: '/reports/item-2137',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2138 = defineEndpoint({
    path: '/reports/item-2138',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2139 = defineEndpoint({
    path: '/reports/item-2139',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2140 = defineEndpoint({
    path: '/reports/item-2140',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2141 = defineEndpoint({
    path: '/reports/item-2141',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2142 = defineEndpoint({
    path: '/reports/item-2142',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2143 = defineEndpoint({
    path: '/reports/item-2143',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2144 = defineEndpoint({
    path: '/reports/item-2144',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2145 = defineEndpoint({
    path: '/reports/item-2145',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2146 = defineEndpoint({
    path: '/reports/item-2146',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2147 = defineEndpoint({
    path: '/reports/item-2147',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2148 = defineEndpoint({
    path: '/reports/item-2148',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2149 = defineEndpoint({
    path: '/reports/item-2149',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2150 = defineEndpoint({
    path: '/reports/item-2150',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2151 = defineEndpoint({
    path: '/reports/item-2151',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2152 = defineEndpoint({
    path: '/reports/item-2152',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2153 = defineEndpoint({
    path: '/reports/item-2153',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2154 = defineEndpoint({
    path: '/reports/item-2154',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2155 = defineEndpoint({
    path: '/reports/item-2155',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2156 = defineEndpoint({
    path: '/reports/item-2156',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2157 = defineEndpoint({
    path: '/reports/item-2157',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2158 = defineEndpoint({
    path: '/reports/item-2158',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2159 = defineEndpoint({
    path: '/reports/item-2159',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2160 = defineEndpoint({
    path: '/reports/item-2160',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2161 = defineEndpoint({
    path: '/reports/item-2161',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2162 = defineEndpoint({
    path: '/reports/item-2162',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2163 = defineEndpoint({
    path: '/reports/item-2163',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2164 = defineEndpoint({
    path: '/reports/item-2164',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2165 = defineEndpoint({
    path: '/reports/item-2165',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2166 = defineEndpoint({
    path: '/reports/item-2166',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2167 = defineEndpoint({
    path: '/reports/item-2167',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2168 = defineEndpoint({
    path: '/reports/item-2168',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2169 = defineEndpoint({
    path: '/reports/item-2169',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2170 = defineEndpoint({
    path: '/reports/item-2170',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2171 = defineEndpoint({
    path: '/reports/item-2171',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2172 = defineEndpoint({
    path: '/reports/item-2172',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2173 = defineEndpoint({
    path: '/reports/item-2173',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2174 = defineEndpoint({
    path: '/reports/item-2174',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2175 = defineEndpoint({
    path: '/reports/item-2175',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2176 = defineEndpoint({
    path: '/reports/item-2176',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2177 = defineEndpoint({
    path: '/reports/item-2177',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2178 = defineEndpoint({
    path: '/reports/item-2178',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2179 = defineEndpoint({
    path: '/reports/item-2179',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2180 = defineEndpoint({
    path: '/reports/item-2180',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2181 = defineEndpoint({
    path: '/reports/item-2181',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2182 = defineEndpoint({
    path: '/reports/item-2182',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2183 = defineEndpoint({
    path: '/reports/item-2183',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2184 = defineEndpoint({
    path: '/reports/item-2184',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2185 = defineEndpoint({
    path: '/reports/item-2185',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2186 = defineEndpoint({
    path: '/reports/item-2186',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2187 = defineEndpoint({
    path: '/reports/item-2187',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2188 = defineEndpoint({
    path: '/reports/item-2188',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2189 = defineEndpoint({
    path: '/reports/item-2189',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2190 = defineEndpoint({
    path: '/reports/item-2190',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2191 = defineEndpoint({
    path: '/reports/item-2191',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2192 = defineEndpoint({
    path: '/reports/item-2192',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2193 = defineEndpoint({
    path: '/reports/item-2193',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2194 = defineEndpoint({
    path: '/reports/item-2194',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2195 = defineEndpoint({
    path: '/reports/item-2195',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2196 = defineEndpoint({
    path: '/reports/item-2196',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2197 = defineEndpoint({
    path: '/reports/item-2197',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2198 = defineEndpoint({
    path: '/reports/item-2198',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2199 = defineEndpoint({
    path: '/reports/item-2199',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2200 = defineEndpoint({
    path: '/reports/item-2200',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2201 = defineEndpoint({
    path: '/reports/item-2201',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2202 = defineEndpoint({
    path: '/reports/item-2202',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2203 = defineEndpoint({
    path: '/reports/item-2203',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2204 = defineEndpoint({
    path: '/reports/item-2204',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2205 = defineEndpoint({
    path: '/reports/item-2205',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2206 = defineEndpoint({
    path: '/reports/item-2206',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2207 = defineEndpoint({
    path: '/reports/item-2207',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2208 = defineEndpoint({
    path: '/reports/item-2208',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2209 = defineEndpoint({
    path: '/reports/item-2209',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2210 = defineEndpoint({
    path: '/reports/item-2210',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2211 = defineEndpoint({
    path: '/reports/item-2211',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2212 = defineEndpoint({
    path: '/reports/item-2212',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2213 = defineEndpoint({
    path: '/reports/item-2213',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2214 = defineEndpoint({
    path: '/reports/item-2214',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2215 = defineEndpoint({
    path: '/reports/item-2215',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2216 = defineEndpoint({
    path: '/reports/item-2216',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2217 = defineEndpoint({
    path: '/reports/item-2217',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2218 = defineEndpoint({
    path: '/reports/item-2218',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2219 = defineEndpoint({
    path: '/reports/item-2219',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2220 = defineEndpoint({
    path: '/reports/item-2220',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2221 = defineEndpoint({
    path: '/reports/item-2221',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2222 = defineEndpoint({
    path: '/reports/item-2222',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2223 = defineEndpoint({
    path: '/reports/item-2223',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2224 = defineEndpoint({
    path: '/reports/item-2224',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2225 = defineEndpoint({
    path: '/reports/item-2225',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2226 = defineEndpoint({
    path: '/reports/item-2226',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2227 = defineEndpoint({
    path: '/reports/item-2227',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2228 = defineEndpoint({
    path: '/reports/item-2228',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2229 = defineEndpoint({
    path: '/reports/item-2229',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2230 = defineEndpoint({
    path: '/reports/item-2230',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2231 = defineEndpoint({
    path: '/reports/item-2231',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2232 = defineEndpoint({
    path: '/reports/item-2232',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2233 = defineEndpoint({
    path: '/reports/item-2233',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2234 = defineEndpoint({
    path: '/reports/item-2234',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2235 = defineEndpoint({
    path: '/reports/item-2235',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2236 = defineEndpoint({
    path: '/reports/item-2236',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2237 = defineEndpoint({
    path: '/reports/item-2237',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2238 = defineEndpoint({
    path: '/reports/item-2238',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2239 = defineEndpoint({
    path: '/reports/item-2239',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2240 = defineEndpoint({
    path: '/reports/item-2240',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2241 = defineEndpoint({
    path: '/reports/item-2241',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2242 = defineEndpoint({
    path: '/reports/item-2242',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2243 = defineEndpoint({
    path: '/reports/item-2243',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2244 = defineEndpoint({
    path: '/reports/item-2244',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2245 = defineEndpoint({
    path: '/reports/item-2245',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2246 = defineEndpoint({
    path: '/reports/item-2246',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2247 = defineEndpoint({
    path: '/reports/item-2247',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2248 = defineEndpoint({
    path: '/reports/item-2248',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2249 = defineEndpoint({
    path: '/reports/item-2249',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2250 = defineEndpoint({
    path: '/reports/item-2250',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2251 = defineEndpoint({
    path: '/reports/item-2251',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2252 = defineEndpoint({
    path: '/reports/item-2252',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2253 = defineEndpoint({
    path: '/reports/item-2253',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2254 = defineEndpoint({
    path: '/reports/item-2254',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2255 = defineEndpoint({
    path: '/reports/item-2255',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2256 = defineEndpoint({
    path: '/reports/item-2256',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2257 = defineEndpoint({
    path: '/reports/item-2257',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2258 = defineEndpoint({
    path: '/reports/item-2258',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2259 = defineEndpoint({
    path: '/reports/item-2259',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2260 = defineEndpoint({
    path: '/reports/item-2260',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2261 = defineEndpoint({
    path: '/reports/item-2261',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2262 = defineEndpoint({
    path: '/reports/item-2262',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2263 = defineEndpoint({
    path: '/reports/item-2263',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2264 = defineEndpoint({
    path: '/reports/item-2264',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2265 = defineEndpoint({
    path: '/reports/item-2265',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2266 = defineEndpoint({
    path: '/reports/item-2266',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2267 = defineEndpoint({
    path: '/reports/item-2267',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2268 = defineEndpoint({
    path: '/reports/item-2268',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2269 = defineEndpoint({
    path: '/reports/item-2269',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2270 = defineEndpoint({
    path: '/reports/item-2270',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2271 = defineEndpoint({
    path: '/reports/item-2271',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2272 = defineEndpoint({
    path: '/reports/item-2272',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2273 = defineEndpoint({
    path: '/reports/item-2273',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2274 = defineEndpoint({
    path: '/reports/item-2274',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2275 = defineEndpoint({
    path: '/reports/item-2275',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2276 = defineEndpoint({
    path: '/reports/item-2276',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2277 = defineEndpoint({
    path: '/reports/item-2277',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2278 = defineEndpoint({
    path: '/reports/item-2278',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2279 = defineEndpoint({
    path: '/reports/item-2279',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2280 = defineEndpoint({
    path: '/reports/item-2280',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2281 = defineEndpoint({
    path: '/reports/item-2281',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2282 = defineEndpoint({
    path: '/reports/item-2282',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2283 = defineEndpoint({
    path: '/reports/item-2283',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2284 = defineEndpoint({
    path: '/reports/item-2284',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2285 = defineEndpoint({
    path: '/reports/item-2285',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2286 = defineEndpoint({
    path: '/reports/item-2286',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2287 = defineEndpoint({
    path: '/reports/item-2287',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2288 = defineEndpoint({
    path: '/reports/item-2288',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2289 = defineEndpoint({
    path: '/reports/item-2289',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2290 = defineEndpoint({
    path: '/reports/item-2290',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2291 = defineEndpoint({
    path: '/reports/item-2291',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2292 = defineEndpoint({
    path: '/reports/item-2292',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2293 = defineEndpoint({
    path: '/reports/item-2293',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2294 = defineEndpoint({
    path: '/reports/item-2294',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2295 = defineEndpoint({
    path: '/reports/item-2295',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2296 = defineEndpoint({
    path: '/reports/item-2296',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2297 = defineEndpoint({
    path: '/reports/item-2297',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2298 = defineEndpoint({
    path: '/reports/item-2298',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2299 = defineEndpoint({
    path: '/reports/item-2299',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2300 = defineEndpoint({
    path: '/reports/item-2300',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2301 = defineEndpoint({
    path: '/reports/item-2301',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2302 = defineEndpoint({
    path: '/reports/item-2302',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2303 = defineEndpoint({
    path: '/reports/item-2303',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2304 = defineEndpoint({
    path: '/reports/item-2304',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2305 = defineEndpoint({
    path: '/reports/item-2305',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2306 = defineEndpoint({
    path: '/reports/item-2306',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2307 = defineEndpoint({
    path: '/reports/item-2307',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2308 = defineEndpoint({
    path: '/reports/item-2308',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2309 = defineEndpoint({
    path: '/reports/item-2309',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2310 = defineEndpoint({
    path: '/reports/item-2310',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2311 = defineEndpoint({
    path: '/reports/item-2311',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2312 = defineEndpoint({
    path: '/reports/item-2312',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2313 = defineEndpoint({
    path: '/reports/item-2313',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2314 = defineEndpoint({
    path: '/reports/item-2314',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2315 = defineEndpoint({
    path: '/reports/item-2315',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2316 = defineEndpoint({
    path: '/reports/item-2316',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2317 = defineEndpoint({
    path: '/reports/item-2317',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2318 = defineEndpoint({
    path: '/reports/item-2318',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2319 = defineEndpoint({
    path: '/reports/item-2319',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2320 = defineEndpoint({
    path: '/reports/item-2320',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2321 = defineEndpoint({
    path: '/reports/item-2321',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2322 = defineEndpoint({
    path: '/reports/item-2322',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2323 = defineEndpoint({
    path: '/reports/item-2323',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2324 = defineEndpoint({
    path: '/reports/item-2324',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2325 = defineEndpoint({
    path: '/reports/item-2325',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2326 = defineEndpoint({
    path: '/reports/item-2326',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2327 = defineEndpoint({
    path: '/reports/item-2327',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2328 = defineEndpoint({
    path: '/reports/item-2328',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2329 = defineEndpoint({
    path: '/reports/item-2329',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2330 = defineEndpoint({
    path: '/reports/item-2330',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2331 = defineEndpoint({
    path: '/reports/item-2331',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2332 = defineEndpoint({
    path: '/reports/item-2332',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2333 = defineEndpoint({
    path: '/reports/item-2333',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2334 = defineEndpoint({
    path: '/reports/item-2334',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2335 = defineEndpoint({
    path: '/reports/item-2335',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2336 = defineEndpoint({
    path: '/reports/item-2336',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2337 = defineEndpoint({
    path: '/reports/item-2337',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2338 = defineEndpoint({
    path: '/reports/item-2338',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2339 = defineEndpoint({
    path: '/reports/item-2339',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2340 = defineEndpoint({
    path: '/reports/item-2340',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2341 = defineEndpoint({
    path: '/reports/item-2341',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2342 = defineEndpoint({
    path: '/reports/item-2342',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2343 = defineEndpoint({
    path: '/reports/item-2343',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2344 = defineEndpoint({
    path: '/reports/item-2344',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2345 = defineEndpoint({
    path: '/reports/item-2345',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2346 = defineEndpoint({
    path: '/reports/item-2346',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2347 = defineEndpoint({
    path: '/reports/item-2347',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2348 = defineEndpoint({
    path: '/reports/item-2348',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2349 = defineEndpoint({
    path: '/reports/item-2349',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2350 = defineEndpoint({
    path: '/reports/item-2350',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2351 = defineEndpoint({
    path: '/reports/item-2351',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2352 = defineEndpoint({
    path: '/reports/item-2352',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2353 = defineEndpoint({
    path: '/reports/item-2353',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2354 = defineEndpoint({
    path: '/reports/item-2354',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2355 = defineEndpoint({
    path: '/reports/item-2355',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2356 = defineEndpoint({
    path: '/reports/item-2356',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2357 = defineEndpoint({
    path: '/reports/item-2357',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2358 = defineEndpoint({
    path: '/reports/item-2358',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2359 = defineEndpoint({
    path: '/reports/item-2359',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2360 = defineEndpoint({
    path: '/reports/item-2360',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2361 = defineEndpoint({
    path: '/reports/item-2361',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2362 = defineEndpoint({
    path: '/reports/item-2362',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2363 = defineEndpoint({
    path: '/reports/item-2363',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2364 = defineEndpoint({
    path: '/reports/item-2364',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2365 = defineEndpoint({
    path: '/reports/item-2365',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2366 = defineEndpoint({
    path: '/reports/item-2366',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2367 = defineEndpoint({
    path: '/reports/item-2367',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2368 = defineEndpoint({
    path: '/reports/item-2368',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2369 = defineEndpoint({
    path: '/reports/item-2369',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2370 = defineEndpoint({
    path: '/reports/item-2370',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2371 = defineEndpoint({
    path: '/reports/item-2371',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2372 = defineEndpoint({
    path: '/reports/item-2372',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2373 = defineEndpoint({
    path: '/reports/item-2373',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2374 = defineEndpoint({
    path: '/reports/item-2374',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2375 = defineEndpoint({
    path: '/reports/item-2375',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2376 = defineEndpoint({
    path: '/reports/item-2376',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2377 = defineEndpoint({
    path: '/reports/item-2377',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2378 = defineEndpoint({
    path: '/reports/item-2378',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2379 = defineEndpoint({
    path: '/reports/item-2379',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2380 = defineEndpoint({
    path: '/reports/item-2380',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2381 = defineEndpoint({
    path: '/reports/item-2381',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2382 = defineEndpoint({
    path: '/reports/item-2382',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2383 = defineEndpoint({
    path: '/reports/item-2383',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2384 = defineEndpoint({
    path: '/reports/item-2384',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2385 = defineEndpoint({
    path: '/reports/item-2385',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2386 = defineEndpoint({
    path: '/reports/item-2386',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2387 = defineEndpoint({
    path: '/reports/item-2387',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2388 = defineEndpoint({
    path: '/reports/item-2388',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2389 = defineEndpoint({
    path: '/reports/item-2389',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2390 = defineEndpoint({
    path: '/reports/item-2390',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2391 = defineEndpoint({
    path: '/reports/item-2391',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2392 = defineEndpoint({
    path: '/reports/item-2392',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2393 = defineEndpoint({
    path: '/reports/item-2393',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2394 = defineEndpoint({
    path: '/reports/item-2394',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2395 = defineEndpoint({
    path: '/reports/item-2395',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2396 = defineEndpoint({
    path: '/reports/item-2396',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2397 = defineEndpoint({
    path: '/reports/item-2397',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2398 = defineEndpoint({
    path: '/reports/item-2398',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2399 = defineEndpoint({
    path: '/reports/item-2399',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2400 = defineEndpoint({
    path: '/reports/item-2400',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2401 = defineEndpoint({
    path: '/reports/item-2401',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2402 = defineEndpoint({
    path: '/reports/item-2402',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2403 = defineEndpoint({
    path: '/reports/item-2403',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2404 = defineEndpoint({
    path: '/reports/item-2404',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2405 = defineEndpoint({
    path: '/reports/item-2405',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2406 = defineEndpoint({
    path: '/reports/item-2406',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2407 = defineEndpoint({
    path: '/reports/item-2407',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2408 = defineEndpoint({
    path: '/reports/item-2408',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2409 = defineEndpoint({
    path: '/reports/item-2409',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2410 = defineEndpoint({
    path: '/reports/item-2410',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2411 = defineEndpoint({
    path: '/reports/item-2411',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2412 = defineEndpoint({
    path: '/reports/item-2412',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2413 = defineEndpoint({
    path: '/reports/item-2413',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2414 = defineEndpoint({
    path: '/reports/item-2414',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2415 = defineEndpoint({
    path: '/reports/item-2415',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2416 = defineEndpoint({
    path: '/reports/item-2416',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2417 = defineEndpoint({
    path: '/reports/item-2417',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2418 = defineEndpoint({
    path: '/reports/item-2418',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2419 = defineEndpoint({
    path: '/reports/item-2419',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2420 = defineEndpoint({
    path: '/reports/item-2420',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2421 = defineEndpoint({
    path: '/reports/item-2421',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2422 = defineEndpoint({
    path: '/reports/item-2422',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2423 = defineEndpoint({
    path: '/reports/item-2423',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2424 = defineEndpoint({
    path: '/reports/item-2424',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2425 = defineEndpoint({
    path: '/reports/item-2425',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2426 = defineEndpoint({
    path: '/reports/item-2426',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2427 = defineEndpoint({
    path: '/reports/item-2427',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2428 = defineEndpoint({
    path: '/reports/item-2428',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2429 = defineEndpoint({
    path: '/reports/item-2429',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2430 = defineEndpoint({
    path: '/reports/item-2430',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2431 = defineEndpoint({
    path: '/reports/item-2431',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2432 = defineEndpoint({
    path: '/reports/item-2432',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2433 = defineEndpoint({
    path: '/reports/item-2433',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2434 = defineEndpoint({
    path: '/reports/item-2434',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2435 = defineEndpoint({
    path: '/reports/item-2435',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2436 = defineEndpoint({
    path: '/reports/item-2436',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2437 = defineEndpoint({
    path: '/reports/item-2437',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2438 = defineEndpoint({
    path: '/reports/item-2438',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2439 = defineEndpoint({
    path: '/reports/item-2439',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2440 = defineEndpoint({
    path: '/reports/item-2440',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2441 = defineEndpoint({
    path: '/reports/item-2441',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2442 = defineEndpoint({
    path: '/reports/item-2442',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2443 = defineEndpoint({
    path: '/reports/item-2443',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2444 = defineEndpoint({
    path: '/reports/item-2444',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2445 = defineEndpoint({
    path: '/reports/item-2445',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2446 = defineEndpoint({
    path: '/reports/item-2446',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2447 = defineEndpoint({
    path: '/reports/item-2447',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2448 = defineEndpoint({
    path: '/reports/item-2448',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2449 = defineEndpoint({
    path: '/reports/item-2449',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2450 = defineEndpoint({
    path: '/reports/item-2450',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2451 = defineEndpoint({
    path: '/reports/item-2451',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2452 = defineEndpoint({
    path: '/reports/item-2452',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2453 = defineEndpoint({
    path: '/reports/item-2453',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2454 = defineEndpoint({
    path: '/reports/item-2454',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2455 = defineEndpoint({
    path: '/reports/item-2455',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2456 = defineEndpoint({
    path: '/reports/item-2456',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2457 = defineEndpoint({
    path: '/reports/item-2457',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2458 = defineEndpoint({
    path: '/reports/item-2458',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2459 = defineEndpoint({
    path: '/reports/item-2459',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2460 = defineEndpoint({
    path: '/reports/item-2460',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2461 = defineEndpoint({
    path: '/reports/item-2461',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2462 = defineEndpoint({
    path: '/reports/item-2462',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2463 = defineEndpoint({
    path: '/reports/item-2463',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2464 = defineEndpoint({
    path: '/reports/item-2464',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2465 = defineEndpoint({
    path: '/reports/item-2465',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2466 = defineEndpoint({
    path: '/reports/item-2466',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2467 = defineEndpoint({
    path: '/reports/item-2467',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2468 = defineEndpoint({
    path: '/reports/item-2468',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2469 = defineEndpoint({
    path: '/reports/item-2469',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2470 = defineEndpoint({
    path: '/reports/item-2470',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2471 = defineEndpoint({
    path: '/reports/item-2471',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2472 = defineEndpoint({
    path: '/reports/item-2472',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2473 = defineEndpoint({
    path: '/reports/item-2473',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2474 = defineEndpoint({
    path: '/reports/item-2474',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2475 = defineEndpoint({
    path: '/reports/item-2475',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2476 = defineEndpoint({
    path: '/reports/item-2476',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2477 = defineEndpoint({
    path: '/reports/item-2477',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2478 = defineEndpoint({
    path: '/reports/item-2478',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2479 = defineEndpoint({
    path: '/reports/item-2479',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2480 = defineEndpoint({
    path: '/reports/item-2480',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2481 = defineEndpoint({
    path: '/reports/item-2481',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2482 = defineEndpoint({
    path: '/reports/item-2482',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2483 = defineEndpoint({
    path: '/reports/item-2483',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2484 = defineEndpoint({
    path: '/reports/item-2484',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2485 = defineEndpoint({
    path: '/reports/item-2485',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2486 = defineEndpoint({
    path: '/reports/item-2486',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2487 = defineEndpoint({
    path: '/reports/item-2487',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2488 = defineEndpoint({
    path: '/reports/item-2488',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2489 = defineEndpoint({
    path: '/reports/item-2489',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2490 = defineEndpoint({
    path: '/reports/item-2490',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2491 = defineEndpoint({
    path: '/reports/item-2491',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2492 = defineEndpoint({
    path: '/reports/item-2492',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2493 = defineEndpoint({
    path: '/reports/item-2493',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2494 = defineEndpoint({
    path: '/reports/item-2494',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2495 = defineEndpoint({
    path: '/reports/item-2495',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2496 = defineEndpoint({
    path: '/reports/item-2496',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2497 = defineEndpoint({
    path: '/reports/item-2497',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2498 = defineEndpoint({
    path: '/reports/item-2498',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2499 = defineEndpoint({
    path: '/reports/item-2499',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2500 = defineEndpoint({
    path: '/reports/item-2500',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2501 = defineEndpoint({
    path: '/reports/item-2501',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2502 = defineEndpoint({
    path: '/reports/item-2502',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2503 = defineEndpoint({
    path: '/reports/item-2503',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2504 = defineEndpoint({
    path: '/reports/item-2504',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2505 = defineEndpoint({
    path: '/reports/item-2505',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2506 = defineEndpoint({
    path: '/reports/item-2506',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2507 = defineEndpoint({
    path: '/reports/item-2507',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2508 = defineEndpoint({
    path: '/reports/item-2508',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2509 = defineEndpoint({
    path: '/reports/item-2509',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2510 = defineEndpoint({
    path: '/reports/item-2510',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2511 = defineEndpoint({
    path: '/reports/item-2511',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2512 = defineEndpoint({
    path: '/reports/item-2512',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2513 = defineEndpoint({
    path: '/reports/item-2513',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2514 = defineEndpoint({
    path: '/reports/item-2514',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2515 = defineEndpoint({
    path: '/reports/item-2515',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2516 = defineEndpoint({
    path: '/reports/item-2516',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2517 = defineEndpoint({
    path: '/reports/item-2517',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2518 = defineEndpoint({
    path: '/reports/item-2518',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2519 = defineEndpoint({
    path: '/reports/item-2519',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2520 = defineEndpoint({
    path: '/reports/item-2520',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2521 = defineEndpoint({
    path: '/reports/item-2521',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2522 = defineEndpoint({
    path: '/reports/item-2522',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2523 = defineEndpoint({
    path: '/reports/item-2523',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2524 = defineEndpoint({
    path: '/reports/item-2524',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2525 = defineEndpoint({
    path: '/reports/item-2525',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2526 = defineEndpoint({
    path: '/reports/item-2526',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2527 = defineEndpoint({
    path: '/reports/item-2527',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2528 = defineEndpoint({
    path: '/reports/item-2528',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2529 = defineEndpoint({
    path: '/reports/item-2529',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2530 = defineEndpoint({
    path: '/reports/item-2530',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2531 = defineEndpoint({
    path: '/reports/item-2531',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2532 = defineEndpoint({
    path: '/reports/item-2532',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2533 = defineEndpoint({
    path: '/reports/item-2533',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2534 = defineEndpoint({
    path: '/reports/item-2534',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2535 = defineEndpoint({
    path: '/reports/item-2535',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2536 = defineEndpoint({
    path: '/reports/item-2536',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2537 = defineEndpoint({
    path: '/reports/item-2537',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2538 = defineEndpoint({
    path: '/reports/item-2538',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2539 = defineEndpoint({
    path: '/reports/item-2539',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2540 = defineEndpoint({
    path: '/reports/item-2540',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2541 = defineEndpoint({
    path: '/reports/item-2541',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2542 = defineEndpoint({
    path: '/reports/item-2542',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2543 = defineEndpoint({
    path: '/reports/item-2543',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2544 = defineEndpoint({
    path: '/reports/item-2544',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2545 = defineEndpoint({
    path: '/reports/item-2545',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2546 = defineEndpoint({
    path: '/reports/item-2546',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2547 = defineEndpoint({
    path: '/reports/item-2547',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2548 = defineEndpoint({
    path: '/reports/item-2548',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2549 = defineEndpoint({
    path: '/reports/item-2549',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2550 = defineEndpoint({
    path: '/reports/item-2550',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2551 = defineEndpoint({
    path: '/reports/item-2551',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2552 = defineEndpoint({
    path: '/reports/item-2552',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2553 = defineEndpoint({
    path: '/reports/item-2553',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2554 = defineEndpoint({
    path: '/reports/item-2554',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2555 = defineEndpoint({
    path: '/reports/item-2555',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2556 = defineEndpoint({
    path: '/reports/item-2556',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2557 = defineEndpoint({
    path: '/reports/item-2557',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2558 = defineEndpoint({
    path: '/reports/item-2558',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2559 = defineEndpoint({
    path: '/reports/item-2559',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2560 = defineEndpoint({
    path: '/reports/item-2560',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2561 = defineEndpoint({
    path: '/reports/item-2561',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2562 = defineEndpoint({
    path: '/reports/item-2562',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2563 = defineEndpoint({
    path: '/reports/item-2563',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2564 = defineEndpoint({
    path: '/reports/item-2564',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2565 = defineEndpoint({
    path: '/reports/item-2565',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2566 = defineEndpoint({
    path: '/reports/item-2566',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2567 = defineEndpoint({
    path: '/reports/item-2567',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2568 = defineEndpoint({
    path: '/reports/item-2568',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2569 = defineEndpoint({
    path: '/reports/item-2569',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2570 = defineEndpoint({
    path: '/reports/item-2570',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2571 = defineEndpoint({
    path: '/reports/item-2571',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2572 = defineEndpoint({
    path: '/reports/item-2572',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2573 = defineEndpoint({
    path: '/reports/item-2573',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2574 = defineEndpoint({
    path: '/reports/item-2574',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2575 = defineEndpoint({
    path: '/reports/item-2575',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2576 = defineEndpoint({
    path: '/reports/item-2576',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2577 = defineEndpoint({
    path: '/reports/item-2577',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2578 = defineEndpoint({
    path: '/reports/item-2578',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2579 = defineEndpoint({
    path: '/reports/item-2579',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2580 = defineEndpoint({
    path: '/reports/item-2580',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2581 = defineEndpoint({
    path: '/reports/item-2581',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2582 = defineEndpoint({
    path: '/reports/item-2582',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2583 = defineEndpoint({
    path: '/reports/item-2583',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2584 = defineEndpoint({
    path: '/reports/item-2584',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2585 = defineEndpoint({
    path: '/reports/item-2585',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2586 = defineEndpoint({
    path: '/reports/item-2586',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2587 = defineEndpoint({
    path: '/reports/item-2587',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2588 = defineEndpoint({
    path: '/reports/item-2588',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2589 = defineEndpoint({
    path: '/reports/item-2589',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2590 = defineEndpoint({
    path: '/reports/item-2590',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2591 = defineEndpoint({
    path: '/reports/item-2591',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2592 = defineEndpoint({
    path: '/reports/item-2592',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2593 = defineEndpoint({
    path: '/reports/item-2593',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2594 = defineEndpoint({
    path: '/reports/item-2594',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2595 = defineEndpoint({
    path: '/reports/item-2595',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2596 = defineEndpoint({
    path: '/reports/item-2596',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2597 = defineEndpoint({
    path: '/reports/item-2597',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2598 = defineEndpoint({
    path: '/reports/item-2598',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2599 = defineEndpoint({
    path: '/reports/item-2599',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2600 = defineEndpoint({
    path: '/reports/item-2600',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2601 = defineEndpoint({
    path: '/reports/item-2601',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2602 = defineEndpoint({
    path: '/reports/item-2602',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2603 = defineEndpoint({
    path: '/reports/item-2603',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2604 = defineEndpoint({
    path: '/reports/item-2604',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2605 = defineEndpoint({
    path: '/reports/item-2605',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2606 = defineEndpoint({
    path: '/reports/item-2606',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2607 = defineEndpoint({
    path: '/reports/item-2607',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2608 = defineEndpoint({
    path: '/reports/item-2608',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2609 = defineEndpoint({
    path: '/reports/item-2609',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2610 = defineEndpoint({
    path: '/reports/item-2610',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2611 = defineEndpoint({
    path: '/reports/item-2611',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2612 = defineEndpoint({
    path: '/reports/item-2612',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2613 = defineEndpoint({
    path: '/reports/item-2613',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2614 = defineEndpoint({
    path: '/reports/item-2614',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2615 = defineEndpoint({
    path: '/reports/item-2615',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2616 = defineEndpoint({
    path: '/reports/item-2616',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2617 = defineEndpoint({
    path: '/reports/item-2617',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2618 = defineEndpoint({
    path: '/reports/item-2618',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2619 = defineEndpoint({
    path: '/reports/item-2619',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2620 = defineEndpoint({
    path: '/reports/item-2620',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2621 = defineEndpoint({
    path: '/reports/item-2621',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2622 = defineEndpoint({
    path: '/reports/item-2622',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2623 = defineEndpoint({
    path: '/reports/item-2623',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2624 = defineEndpoint({
    path: '/reports/item-2624',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2625 = defineEndpoint({
    path: '/reports/item-2625',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2626 = defineEndpoint({
    path: '/reports/item-2626',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2627 = defineEndpoint({
    path: '/reports/item-2627',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2628 = defineEndpoint({
    path: '/reports/item-2628',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2629 = defineEndpoint({
    path: '/reports/item-2629',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2630 = defineEndpoint({
    path: '/reports/item-2630',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2631 = defineEndpoint({
    path: '/reports/item-2631',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2632 = defineEndpoint({
    path: '/reports/item-2632',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2633 = defineEndpoint({
    path: '/reports/item-2633',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2634 = defineEndpoint({
    path: '/reports/item-2634',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2635 = defineEndpoint({
    path: '/reports/item-2635',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2636 = defineEndpoint({
    path: '/reports/item-2636',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2637 = defineEndpoint({
    path: '/reports/item-2637',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2638 = defineEndpoint({
    path: '/reports/item-2638',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2639 = defineEndpoint({
    path: '/reports/item-2639',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2640 = defineEndpoint({
    path: '/reports/item-2640',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2641 = defineEndpoint({
    path: '/reports/item-2641',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2642 = defineEndpoint({
    path: '/reports/item-2642',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2643 = defineEndpoint({
    path: '/reports/item-2643',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2644 = defineEndpoint({
    path: '/reports/item-2644',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2645 = defineEndpoint({
    path: '/reports/item-2645',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2646 = defineEndpoint({
    path: '/reports/item-2646',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2647 = defineEndpoint({
    path: '/reports/item-2647',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2648 = defineEndpoint({
    path: '/reports/item-2648',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2649 = defineEndpoint({
    path: '/reports/item-2649',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2650 = defineEndpoint({
    path: '/reports/item-2650',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2651 = defineEndpoint({
    path: '/reports/item-2651',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2652 = defineEndpoint({
    path: '/reports/item-2652',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2653 = defineEndpoint({
    path: '/reports/item-2653',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2654 = defineEndpoint({
    path: '/reports/item-2654',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2655 = defineEndpoint({
    path: '/reports/item-2655',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2656 = defineEndpoint({
    path: '/reports/item-2656',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2657 = defineEndpoint({
    path: '/reports/item-2657',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2658 = defineEndpoint({
    path: '/reports/item-2658',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2659 = defineEndpoint({
    path: '/reports/item-2659',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2660 = defineEndpoint({
    path: '/reports/item-2660',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2661 = defineEndpoint({
    path: '/reports/item-2661',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2662 = defineEndpoint({
    path: '/reports/item-2662',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2663 = defineEndpoint({
    path: '/reports/item-2663',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2664 = defineEndpoint({
    path: '/reports/item-2664',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2665 = defineEndpoint({
    path: '/reports/item-2665',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2666 = defineEndpoint({
    path: '/reports/item-2666',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2667 = defineEndpoint({
    path: '/reports/item-2667',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2668 = defineEndpoint({
    path: '/reports/item-2668',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2669 = defineEndpoint({
    path: '/reports/item-2669',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2670 = defineEndpoint({
    path: '/reports/item-2670',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2671 = defineEndpoint({
    path: '/reports/item-2671',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2672 = defineEndpoint({
    path: '/reports/item-2672',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2673 = defineEndpoint({
    path: '/reports/item-2673',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2674 = defineEndpoint({
    path: '/reports/item-2674',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2675 = defineEndpoint({
    path: '/reports/item-2675',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2676 = defineEndpoint({
    path: '/reports/item-2676',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2677 = defineEndpoint({
    path: '/reports/item-2677',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2678 = defineEndpoint({
    path: '/reports/item-2678',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2679 = defineEndpoint({
    path: '/reports/item-2679',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2680 = defineEndpoint({
    path: '/reports/item-2680',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2681 = defineEndpoint({
    path: '/reports/item-2681',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2682 = defineEndpoint({
    path: '/reports/item-2682',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2683 = defineEndpoint({
    path: '/reports/item-2683',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2684 = defineEndpoint({
    path: '/reports/item-2684',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2685 = defineEndpoint({
    path: '/reports/item-2685',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2686 = defineEndpoint({
    path: '/reports/item-2686',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2687 = defineEndpoint({
    path: '/reports/item-2687',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2688 = defineEndpoint({
    path: '/reports/item-2688',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2689 = defineEndpoint({
    path: '/reports/item-2689',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2690 = defineEndpoint({
    path: '/reports/item-2690',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2691 = defineEndpoint({
    path: '/reports/item-2691',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2692 = defineEndpoint({
    path: '/reports/item-2692',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2693 = defineEndpoint({
    path: '/reports/item-2693',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2694 = defineEndpoint({
    path: '/reports/item-2694',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2695 = defineEndpoint({
    path: '/reports/item-2695',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2696 = defineEndpoint({
    path: '/reports/item-2696',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2697 = defineEndpoint({
    path: '/reports/item-2697',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2698 = defineEndpoint({
    path: '/reports/item-2698',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2699 = defineEndpoint({
    path: '/reports/item-2699',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2700 = defineEndpoint({
    path: '/reports/item-2700',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2701 = defineEndpoint({
    path: '/reports/item-2701',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2702 = defineEndpoint({
    path: '/reports/item-2702',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2703 = defineEndpoint({
    path: '/reports/item-2703',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2704 = defineEndpoint({
    path: '/reports/item-2704',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2705 = defineEndpoint({
    path: '/reports/item-2705',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2706 = defineEndpoint({
    path: '/reports/item-2706',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2707 = defineEndpoint({
    path: '/reports/item-2707',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2708 = defineEndpoint({
    path: '/reports/item-2708',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2709 = defineEndpoint({
    path: '/reports/item-2709',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2710 = defineEndpoint({
    path: '/reports/item-2710',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2711 = defineEndpoint({
    path: '/reports/item-2711',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2712 = defineEndpoint({
    path: '/reports/item-2712',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2713 = defineEndpoint({
    path: '/reports/item-2713',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2714 = defineEndpoint({
    path: '/reports/item-2714',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2715 = defineEndpoint({
    path: '/reports/item-2715',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2716 = defineEndpoint({
    path: '/reports/item-2716',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2717 = defineEndpoint({
    path: '/reports/item-2717',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2718 = defineEndpoint({
    path: '/reports/item-2718',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2719 = defineEndpoint({
    path: '/reports/item-2719',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2720 = defineEndpoint({
    path: '/reports/item-2720',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2721 = defineEndpoint({
    path: '/reports/item-2721',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2722 = defineEndpoint({
    path: '/reports/item-2722',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2723 = defineEndpoint({
    path: '/reports/item-2723',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2724 = defineEndpoint({
    path: '/reports/item-2724',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2725 = defineEndpoint({
    path: '/reports/item-2725',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2726 = defineEndpoint({
    path: '/reports/item-2726',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2727 = defineEndpoint({
    path: '/reports/item-2727',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2728 = defineEndpoint({
    path: '/reports/item-2728',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2729 = defineEndpoint({
    path: '/reports/item-2729',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2730 = defineEndpoint({
    path: '/reports/item-2730',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2731 = defineEndpoint({
    path: '/reports/item-2731',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2732 = defineEndpoint({
    path: '/reports/item-2732',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2733 = defineEndpoint({
    path: '/reports/item-2733',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2734 = defineEndpoint({
    path: '/reports/item-2734',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2735 = defineEndpoint({
    path: '/reports/item-2735',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2736 = defineEndpoint({
    path: '/reports/item-2736',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2737 = defineEndpoint({
    path: '/reports/item-2737',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2738 = defineEndpoint({
    path: '/reports/item-2738',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2739 = defineEndpoint({
    path: '/reports/item-2739',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2740 = defineEndpoint({
    path: '/reports/item-2740',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2741 = defineEndpoint({
    path: '/reports/item-2741',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2742 = defineEndpoint({
    path: '/reports/item-2742',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2743 = defineEndpoint({
    path: '/reports/item-2743',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2744 = defineEndpoint({
    path: '/reports/item-2744',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2745 = defineEndpoint({
    path: '/reports/item-2745',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2746 = defineEndpoint({
    path: '/reports/item-2746',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2747 = defineEndpoint({
    path: '/reports/item-2747',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2748 = defineEndpoint({
    path: '/reports/item-2748',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2749 = defineEndpoint({
    path: '/reports/item-2749',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2750 = defineEndpoint({
    path: '/reports/item-2750',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2751 = defineEndpoint({
    path: '/reports/item-2751',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2752 = defineEndpoint({
    path: '/reports/item-2752',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2753 = defineEndpoint({
    path: '/reports/item-2753',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2754 = defineEndpoint({
    path: '/reports/item-2754',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2755 = defineEndpoint({
    path: '/reports/item-2755',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2756 = defineEndpoint({
    path: '/reports/item-2756',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2757 = defineEndpoint({
    path: '/reports/item-2757',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2758 = defineEndpoint({
    path: '/reports/item-2758',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2759 = defineEndpoint({
    path: '/reports/item-2759',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2760 = defineEndpoint({
    path: '/reports/item-2760',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2761 = defineEndpoint({
    path: '/reports/item-2761',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2762 = defineEndpoint({
    path: '/reports/item-2762',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2763 = defineEndpoint({
    path: '/reports/item-2763',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2764 = defineEndpoint({
    path: '/reports/item-2764',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2765 = defineEndpoint({
    path: '/reports/item-2765',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2766 = defineEndpoint({
    path: '/reports/item-2766',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2767 = defineEndpoint({
    path: '/reports/item-2767',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2768 = defineEndpoint({
    path: '/reports/item-2768',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2769 = defineEndpoint({
    path: '/reports/item-2769',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2770 = defineEndpoint({
    path: '/reports/item-2770',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2771 = defineEndpoint({
    path: '/reports/item-2771',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2772 = defineEndpoint({
    path: '/reports/item-2772',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2773 = defineEndpoint({
    path: '/reports/item-2773',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2774 = defineEndpoint({
    path: '/reports/item-2774',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2775 = defineEndpoint({
    path: '/reports/item-2775',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2776 = defineEndpoint({
    path: '/reports/item-2776',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2777 = defineEndpoint({
    path: '/reports/item-2777',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2778 = defineEndpoint({
    path: '/reports/item-2778',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2779 = defineEndpoint({
    path: '/reports/item-2779',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2780 = defineEndpoint({
    path: '/reports/item-2780',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2781 = defineEndpoint({
    path: '/reports/item-2781',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2782 = defineEndpoint({
    path: '/reports/item-2782',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2783 = defineEndpoint({
    path: '/reports/item-2783',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2784 = defineEndpoint({
    path: '/reports/item-2784',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2785 = defineEndpoint({
    path: '/reports/item-2785',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2786 = defineEndpoint({
    path: '/reports/item-2786',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2787 = defineEndpoint({
    path: '/reports/item-2787',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2788 = defineEndpoint({
    path: '/reports/item-2788',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2789 = defineEndpoint({
    path: '/reports/item-2789',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2790 = defineEndpoint({
    path: '/reports/item-2790',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2791 = defineEndpoint({
    path: '/reports/item-2791',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2792 = defineEndpoint({
    path: '/reports/item-2792',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2793 = defineEndpoint({
    path: '/reports/item-2793',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2794 = defineEndpoint({
    path: '/reports/item-2794',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2795 = defineEndpoint({
    path: '/reports/item-2795',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2796 = defineEndpoint({
    path: '/reports/item-2796',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2797 = defineEndpoint({
    path: '/reports/item-2797',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2798 = defineEndpoint({
    path: '/reports/item-2798',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2799 = defineEndpoint({
    path: '/reports/item-2799',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2800 = defineEndpoint({
    path: '/reports/item-2800',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2801 = defineEndpoint({
    path: '/reports/item-2801',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2802 = defineEndpoint({
    path: '/reports/item-2802',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2803 = defineEndpoint({
    path: '/reports/item-2803',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2804 = defineEndpoint({
    path: '/reports/item-2804',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2805 = defineEndpoint({
    path: '/reports/item-2805',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2806 = defineEndpoint({
    path: '/reports/item-2806',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2807 = defineEndpoint({
    path: '/reports/item-2807',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2808 = defineEndpoint({
    path: '/reports/item-2808',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2809 = defineEndpoint({
    path: '/reports/item-2809',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2810 = defineEndpoint({
    path: '/reports/item-2810',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2811 = defineEndpoint({
    path: '/reports/item-2811',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2812 = defineEndpoint({
    path: '/reports/item-2812',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2813 = defineEndpoint({
    path: '/reports/item-2813',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2814 = defineEndpoint({
    path: '/reports/item-2814',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2815 = defineEndpoint({
    path: '/reports/item-2815',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2816 = defineEndpoint({
    path: '/reports/item-2816',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2817 = defineEndpoint({
    path: '/reports/item-2817',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2818 = defineEndpoint({
    path: '/reports/item-2818',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2819 = defineEndpoint({
    path: '/reports/item-2819',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2820 = defineEndpoint({
    path: '/reports/item-2820',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2821 = defineEndpoint({
    path: '/reports/item-2821',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2822 = defineEndpoint({
    path: '/reports/item-2822',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2823 = defineEndpoint({
    path: '/reports/item-2823',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2824 = defineEndpoint({
    path: '/reports/item-2824',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2825 = defineEndpoint({
    path: '/reports/item-2825',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2826 = defineEndpoint({
    path: '/reports/item-2826',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2827 = defineEndpoint({
    path: '/reports/item-2827',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2828 = defineEndpoint({
    path: '/reports/item-2828',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2829 = defineEndpoint({
    path: '/reports/item-2829',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2830 = defineEndpoint({
    path: '/reports/item-2830',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2831 = defineEndpoint({
    path: '/reports/item-2831',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2832 = defineEndpoint({
    path: '/reports/item-2832',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2833 = defineEndpoint({
    path: '/reports/item-2833',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2834 = defineEndpoint({
    path: '/reports/item-2834',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2835 = defineEndpoint({
    path: '/reports/item-2835',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2836 = defineEndpoint({
    path: '/reports/item-2836',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2837 = defineEndpoint({
    path: '/reports/item-2837',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2838 = defineEndpoint({
    path: '/reports/item-2838',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2839 = defineEndpoint({
    path: '/reports/item-2839',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2840 = defineEndpoint({
    path: '/reports/item-2840',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2841 = defineEndpoint({
    path: '/reports/item-2841',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2842 = defineEndpoint({
    path: '/reports/item-2842',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2843 = defineEndpoint({
    path: '/reports/item-2843',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2844 = defineEndpoint({
    path: '/reports/item-2844',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2845 = defineEndpoint({
    path: '/reports/item-2845',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2846 = defineEndpoint({
    path: '/reports/item-2846',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2847 = defineEndpoint({
    path: '/reports/item-2847',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2848 = defineEndpoint({
    path: '/reports/item-2848',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2849 = defineEndpoint({
    path: '/reports/item-2849',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2850 = defineEndpoint({
    path: '/reports/item-2850',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2851 = defineEndpoint({
    path: '/reports/item-2851',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2852 = defineEndpoint({
    path: '/reports/item-2852',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2853 = defineEndpoint({
    path: '/reports/item-2853',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2854 = defineEndpoint({
    path: '/reports/item-2854',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2855 = defineEndpoint({
    path: '/reports/item-2855',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2856 = defineEndpoint({
    path: '/reports/item-2856',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2857 = defineEndpoint({
    path: '/reports/item-2857',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2858 = defineEndpoint({
    path: '/reports/item-2858',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2859 = defineEndpoint({
    path: '/reports/item-2859',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2860 = defineEndpoint({
    path: '/reports/item-2860',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2861 = defineEndpoint({
    path: '/reports/item-2861',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2862 = defineEndpoint({
    path: '/reports/item-2862',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2863 = defineEndpoint({
    path: '/reports/item-2863',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2864 = defineEndpoint({
    path: '/reports/item-2864',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2865 = defineEndpoint({
    path: '/reports/item-2865',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2866 = defineEndpoint({
    path: '/reports/item-2866',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2867 = defineEndpoint({
    path: '/reports/item-2867',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2868 = defineEndpoint({
    path: '/reports/item-2868',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2869 = defineEndpoint({
    path: '/reports/item-2869',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2870 = defineEndpoint({
    path: '/reports/item-2870',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2871 = defineEndpoint({
    path: '/reports/item-2871',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2872 = defineEndpoint({
    path: '/reports/item-2872',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2873 = defineEndpoint({
    path: '/reports/item-2873',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2874 = defineEndpoint({
    path: '/reports/item-2874',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2875 = defineEndpoint({
    path: '/reports/item-2875',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2876 = defineEndpoint({
    path: '/reports/item-2876',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2877 = defineEndpoint({
    path: '/reports/item-2877',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2878 = defineEndpoint({
    path: '/reports/item-2878',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2879 = defineEndpoint({
    path: '/reports/item-2879',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2880 = defineEndpoint({
    path: '/reports/item-2880',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2881 = defineEndpoint({
    path: '/reports/item-2881',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2882 = defineEndpoint({
    path: '/reports/item-2882',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2883 = defineEndpoint({
    path: '/reports/item-2883',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2884 = defineEndpoint({
    path: '/reports/item-2884',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2885 = defineEndpoint({
    path: '/reports/item-2885',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2886 = defineEndpoint({
    path: '/reports/item-2886',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2887 = defineEndpoint({
    path: '/reports/item-2887',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2888 = defineEndpoint({
    path: '/reports/item-2888',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2889 = defineEndpoint({
    path: '/reports/item-2889',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2890 = defineEndpoint({
    path: '/reports/item-2890',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2891 = defineEndpoint({
    path: '/reports/item-2891',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2892 = defineEndpoint({
    path: '/reports/item-2892',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2893 = defineEndpoint({
    path: '/reports/item-2893',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2894 = defineEndpoint({
    path: '/reports/item-2894',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2895 = defineEndpoint({
    path: '/reports/item-2895',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2896 = defineEndpoint({
    path: '/reports/item-2896',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2897 = defineEndpoint({
    path: '/reports/item-2897',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2898 = defineEndpoint({
    path: '/reports/item-2898',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2899 = defineEndpoint({
    path: '/reports/item-2899',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2900 = defineEndpoint({
    path: '/reports/item-2900',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2901 = defineEndpoint({
    path: '/reports/item-2901',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2902 = defineEndpoint({
    path: '/reports/item-2902',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2903 = defineEndpoint({
    path: '/reports/item-2903',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2904 = defineEndpoint({
    path: '/reports/item-2904',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2905 = defineEndpoint({
    path: '/reports/item-2905',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2906 = defineEndpoint({
    path: '/reports/item-2906',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2907 = defineEndpoint({
    path: '/reports/item-2907',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2908 = defineEndpoint({
    path: '/reports/item-2908',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2909 = defineEndpoint({
    path: '/reports/item-2909',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2910 = defineEndpoint({
    path: '/reports/item-2910',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2911 = defineEndpoint({
    path: '/reports/item-2911',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2912 = defineEndpoint({
    path: '/reports/item-2912',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2913 = defineEndpoint({
    path: '/reports/item-2913',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2914 = defineEndpoint({
    path: '/reports/item-2914',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2915 = defineEndpoint({
    path: '/reports/item-2915',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2916 = defineEndpoint({
    path: '/reports/item-2916',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2917 = defineEndpoint({
    path: '/reports/item-2917',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2918 = defineEndpoint({
    path: '/reports/item-2918',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2919 = defineEndpoint({
    path: '/reports/item-2919',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2920 = defineEndpoint({
    path: '/reports/item-2920',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2921 = defineEndpoint({
    path: '/reports/item-2921',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2922 = defineEndpoint({
    path: '/reports/item-2922',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2923 = defineEndpoint({
    path: '/reports/item-2923',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2924 = defineEndpoint({
    path: '/reports/item-2924',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2925 = defineEndpoint({
    path: '/reports/item-2925',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2926 = defineEndpoint({
    path: '/reports/item-2926',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2927 = defineEndpoint({
    path: '/reports/item-2927',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2928 = defineEndpoint({
    path: '/reports/item-2928',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2929 = defineEndpoint({
    path: '/reports/item-2929',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2930 = defineEndpoint({
    path: '/reports/item-2930',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2931 = defineEndpoint({
    path: '/reports/item-2931',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2932 = defineEndpoint({
    path: '/reports/item-2932',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2933 = defineEndpoint({
    path: '/reports/item-2933',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2934 = defineEndpoint({
    path: '/reports/item-2934',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2935 = defineEndpoint({
    path: '/reports/item-2935',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2936 = defineEndpoint({
    path: '/reports/item-2936',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2937 = defineEndpoint({
    path: '/reports/item-2937',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2938 = defineEndpoint({
    path: '/reports/item-2938',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2939 = defineEndpoint({
    path: '/reports/item-2939',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2940 = defineEndpoint({
    path: '/reports/item-2940',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2941 = defineEndpoint({
    path: '/reports/item-2941',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2942 = defineEndpoint({
    path: '/reports/item-2942',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2943 = defineEndpoint({
    path: '/reports/item-2943',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2944 = defineEndpoint({
    path: '/reports/item-2944',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2945 = defineEndpoint({
    path: '/reports/item-2945',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2946 = defineEndpoint({
    path: '/reports/item-2946',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2947 = defineEndpoint({
    path: '/reports/item-2947',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2948 = defineEndpoint({
    path: '/reports/item-2948',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2949 = defineEndpoint({
    path: '/reports/item-2949',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2950 = defineEndpoint({
    path: '/reports/item-2950',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2951 = defineEndpoint({
    path: '/reports/item-2951',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2952 = defineEndpoint({
    path: '/reports/item-2952',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2953 = defineEndpoint({
    path: '/reports/item-2953',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2954 = defineEndpoint({
    path: '/reports/item-2954',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2955 = defineEndpoint({
    path: '/reports/item-2955',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2956 = defineEndpoint({
    path: '/reports/item-2956',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2957 = defineEndpoint({
    path: '/reports/item-2957',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2958 = defineEndpoint({
    path: '/reports/item-2958',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2959 = defineEndpoint({
    path: '/reports/item-2959',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2960 = defineEndpoint({
    path: '/reports/item-2960',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2961 = defineEndpoint({
    path: '/reports/item-2961',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2962 = defineEndpoint({
    path: '/reports/item-2962',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2963 = defineEndpoint({
    path: '/reports/item-2963',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2964 = defineEndpoint({
    path: '/reports/item-2964',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2965 = defineEndpoint({
    path: '/reports/item-2965',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2966 = defineEndpoint({
    path: '/reports/item-2966',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2967 = defineEndpoint({
    path: '/reports/item-2967',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2968 = defineEndpoint({
    path: '/reports/item-2968',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2969 = defineEndpoint({
    path: '/reports/item-2969',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2970 = defineEndpoint({
    path: '/reports/item-2970',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2971 = defineEndpoint({
    path: '/reports/item-2971',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2972 = defineEndpoint({
    path: '/reports/item-2972',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2973 = defineEndpoint({
    path: '/reports/item-2973',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2974 = defineEndpoint({
    path: '/reports/item-2974',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2975 = defineEndpoint({
    path: '/reports/item-2975',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2976 = defineEndpoint({
    path: '/reports/item-2976',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2977 = defineEndpoint({
    path: '/reports/item-2977',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2978 = defineEndpoint({
    path: '/reports/item-2978',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2979 = defineEndpoint({
    path: '/reports/item-2979',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2980 = defineEndpoint({
    path: '/reports/item-2980',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2981 = defineEndpoint({
    path: '/reports/item-2981',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2982 = defineEndpoint({
    path: '/reports/item-2982',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2983 = defineEndpoint({
    path: '/reports/item-2983',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2984 = defineEndpoint({
    path: '/reports/item-2984',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2985 = defineEndpoint({
    path: '/reports/item-2985',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2986 = defineEndpoint({
    path: '/reports/item-2986',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2987 = defineEndpoint({
    path: '/reports/item-2987',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2988 = defineEndpoint({
    path: '/reports/item-2988',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2989 = defineEndpoint({
    path: '/reports/item-2989',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2990 = defineEndpoint({
    path: '/reports/item-2990',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2991 = defineEndpoint({
    path: '/reports/item-2991',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2992 = defineEndpoint({
    path: '/reports/item-2992',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2993 = defineEndpoint({
    path: '/reports/item-2993',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2994 = defineEndpoint({
    path: '/reports/item-2994',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2995 = defineEndpoint({
    path: '/reports/item-2995',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2996 = defineEndpoint({
    path: '/reports/item-2996',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2997 = defineEndpoint({
    path: '/reports/item-2997',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2998 = defineEndpoint({
    path: '/reports/item-2998',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});

export const endpoint2999 = defineEndpoint({
    path: '/reports/item-2999',
    requests: {
        [HttpMethod.Post]: {
            customProps,
            requestData: defineShape({
                id: '',
                payload: structuredRenderDataShape,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        result: structuredRenderDataShape,
                    }),
                },
            },
        },
    },
});
