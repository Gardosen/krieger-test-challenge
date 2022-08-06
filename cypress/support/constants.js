const DEFAULT_INPUT_DELAY_SLOW = 200;
const DEFAULT_TIMEOUT = 60 * 1000;
const DEFAULT_VIEWPORT = {
     width: 1920,
     height: 1080,
};

const WILD_CARDS = {
    TEXT_ELEMENT: "<elementText>",
    INT_VALUES: { //TODO: find a generic solution which makes it possible to have unlimited int values to check up without having to write each entry per index
        1: '<int1>',
        2: '<int2>',
        3: '<int3>',
        4: '<int4>'
    },
    LANG_CODE: "<langCode>",
    PRODUCT_UUID: "<product-uuid>",
    SEARCH_RESULT_PLACE: "<searchResultPlace>",
    ARTICLE_ID: "<articleId>",
    PARAMETER_IDENTIFIER: "<parameterIdentifier>",
    FIELD_TYPE: "<fieldType>"
}

const DEFAULT_SEARCH_RESULT_MAX_AMOUNT = 10;

module.exports = {
    DEFAULT_INPUT_DELAY_SLOW,
    DEFAULT_TIMEOUT,
    DEFAULT_VIEWPORT,
    WILD_CARDS,
    DEFAULT_SEARCH_RESULT_MAX_AMOUNT,
};

