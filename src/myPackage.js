// 자바스크립트에서 일부분 타입스크립트의 사용을 원할때
// @ts-check
/**
* Initializes the project
* @param {object} config
* @param {boolean} config.debug
* @param {string} config.url
* @returns boolean
**/
export function init(config) {
    return true;
}

/**
* Exits the project
* @param {number} code
* @returns number
**/
export function exit(code) {
    return code + 1;
}