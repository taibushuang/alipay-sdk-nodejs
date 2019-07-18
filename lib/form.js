"use strict";
exports.__esModule = true;
/**
 * @author tudou527
 * @email [tudou527@gmail.com]
*/
var isJSON = require("is-json");
var AliPayForm = /** @class */ (function () {
    function AliPayForm() {
        this.fields = [];
        this.files = [];
        this.method = 'post';
    }
    AliPayForm.prototype.getFields = function () { return this.fields; };
    AliPayForm.prototype.getFiles = function () { return this.files; };
    AliPayForm.prototype.getMethod = function () { return this.method; };
    /**
     * 设置 method
     * post、get 的区别在于 post 会返回 form 表单，get 返回 url
     */
    AliPayForm.prototype.setMethod = function (method) {
        this.method = method;
    };
    /*
     * 增加字段
     * @param fieldName 字段名
     * @param fieldValue 字段值
     */
    AliPayForm.prototype.addField = function (fieldName, fieldValue) {
        if (isJSON(fieldValue)) {
            // 当 fieldValue 为 json 字符串时，解析出 json
            this.fields.push({ name: fieldName, value: JSON.parse(fieldValue) });
        }
        else {
            this.fields.push({ name: fieldName, value: fieldValue });
        }
    };
    /*
     * 增加文件
     * @param fieldName 文件字段名
     * @param fileName 文件名
     * @param filePath 文件绝对路径
     */
    AliPayForm.prototype.addFile = function (fieldName, fileName, filePath) {
        this.files.push({
            fieldName: fieldName,
            name: fileName,
            path: filePath
        });
    };
    return AliPayForm;
}());
exports["default"] = AliPayForm;
