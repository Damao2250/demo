/**
 * 自定义错误类型【感觉很奇怪。。】
 * @param {String} message - 基本错误信息
 * @param {Array} errorMessages - 详细错误信息
 */
 export function CustomException(message, errorMessages) {
    Error.call(this, message);
    this.errorMessages = errorMessages;
    if (errorMessages && errorMessages.length) {
        this.defaultErrorMessage = errorMessages.join("；");
    }
}

CustomException.prototype = Error.prototype;