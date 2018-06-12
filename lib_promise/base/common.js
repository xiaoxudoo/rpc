/**
 * 公共函数和方法
 *
 * @author xiaoxudoo
 * @version V1.0 创建时间：2018-04-19
 */

'use strict';

function CodeError(code, msg) {
  /* int, string */
  this.code = code;
  this.msg = msg;
}

CodeError.prototype.Code = function() {

  return this.code;

};

CodeError.prototype.Error = function() {

  return console.log(`[${this.code}], ${this.msg}`);

};

CodeError.prototype.Msg = function(msg) {

  this.msg = msg;
  return this;

};

function NewCodeError(code, msg) {

  return new CodeError(code, msg);

}

function generateCacheKey(modID, cmdID) {
  return `${modID}_${cmdID}`;
}

module.exports = {
  NewCodeError,
  generateCacheKey,
};

