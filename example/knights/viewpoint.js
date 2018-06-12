/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.knights = (function() {

    /**
     * Namespace knights.
     * @exports knights
     * @namespace
     */
    var knights = {};

    knights.viewpoint = (function() {

        /**
         * Namespace viewpoint.
         * @memberof knights
         * @namespace
         */
        var viewpoint = {};

        viewpoint.GameInfo = (function() {

            /**
             * Properties of a GameInfo.
             * @memberof knights.viewpoint
             * @interface IGameInfo
             * @property {number|Long|null} [gameId] GameInfo gameId
             * @property {string|null} [packageName] GameInfo packageName
             * @property {number|null} [status] GameInfo status
             * @property {string|null} [jsonData] GameInfo jsonData
             */

            /**
             * Constructs a new GameInfo.
             * @memberof knights.viewpoint
             * @classdesc Represents a GameInfo.
             * @implements IGameInfo
             * @constructor
             * @param {knights.viewpoint.IGameInfo=} [properties] Properties to set
             */
            function GameInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GameInfo gameId.
             * @member {number|Long} gameId
             * @memberof knights.viewpoint.GameInfo
             * @instance
             */
            GameInfo.prototype.gameId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * GameInfo packageName.
             * @member {string} packageName
             * @memberof knights.viewpoint.GameInfo
             * @instance
             */
            GameInfo.prototype.packageName = "";

            /**
             * GameInfo status.
             * @member {number} status
             * @memberof knights.viewpoint.GameInfo
             * @instance
             */
            GameInfo.prototype.status = 0;

            /**
             * GameInfo jsonData.
             * @member {string} jsonData
             * @memberof knights.viewpoint.GameInfo
             * @instance
             */
            GameInfo.prototype.jsonData = "";

            /**
             * Creates a new GameInfo instance using the specified properties.
             * @function create
             * @memberof knights.viewpoint.GameInfo
             * @static
             * @param {knights.viewpoint.IGameInfo=} [properties] Properties to set
             * @returns {knights.viewpoint.GameInfo} GameInfo instance
             */
            GameInfo.create = function create(properties) {
                return new GameInfo(properties);
            };

            /**
             * Encodes the specified GameInfo message. Does not implicitly {@link knights.viewpoint.GameInfo.verify|verify} messages.
             * @function encode
             * @memberof knights.viewpoint.GameInfo
             * @static
             * @param {knights.viewpoint.IGameInfo} message GameInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GameInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.gameId != null && message.hasOwnProperty("gameId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.gameId);
                if (message.packageName != null && message.hasOwnProperty("packageName"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.packageName);
                if (message.status != null && message.hasOwnProperty("status"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.status);
                if (message.jsonData != null && message.hasOwnProperty("jsonData"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.jsonData);
                return writer;
            };

            /**
             * Encodes the specified GameInfo message, length delimited. Does not implicitly {@link knights.viewpoint.GameInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof knights.viewpoint.GameInfo
             * @static
             * @param {knights.viewpoint.IGameInfo} message GameInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GameInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GameInfo message from the specified reader or buffer.
             * @function decode
             * @memberof knights.viewpoint.GameInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {knights.viewpoint.GameInfo} GameInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GameInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.knights.viewpoint.GameInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.gameId = reader.uint64();
                        break;
                    case 2:
                        message.packageName = reader.string();
                        break;
                    case 3:
                        message.status = reader.uint32();
                        break;
                    case 4:
                        message.jsonData = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GameInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof knights.viewpoint.GameInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {knights.viewpoint.GameInfo} GameInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GameInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GameInfo message.
             * @function verify
             * @memberof knights.viewpoint.GameInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GameInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.gameId != null && message.hasOwnProperty("gameId"))
                    if (!$util.isInteger(message.gameId) && !(message.gameId && $util.isInteger(message.gameId.low) && $util.isInteger(message.gameId.high)))
                        return "gameId: integer|Long expected";
                if (message.packageName != null && message.hasOwnProperty("packageName"))
                    if (!$util.isString(message.packageName))
                        return "packageName: string expected";
                if (message.status != null && message.hasOwnProperty("status"))
                    if (!$util.isInteger(message.status))
                        return "status: integer expected";
                if (message.jsonData != null && message.hasOwnProperty("jsonData"))
                    if (!$util.isString(message.jsonData))
                        return "jsonData: string expected";
                return null;
            };

            /**
             * Creates a GameInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof knights.viewpoint.GameInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {knights.viewpoint.GameInfo} GameInfo
             */
            GameInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.knights.viewpoint.GameInfo)
                    return object;
                var message = new $root.knights.viewpoint.GameInfo();
                if (object.gameId != null)
                    if ($util.Long)
                        (message.gameId = $util.Long.fromValue(object.gameId)).unsigned = true;
                    else if (typeof object.gameId === "string")
                        message.gameId = parseInt(object.gameId, 10);
                    else if (typeof object.gameId === "number")
                        message.gameId = object.gameId;
                    else if (typeof object.gameId === "object")
                        message.gameId = new $util.LongBits(object.gameId.low >>> 0, object.gameId.high >>> 0).toNumber(true);
                if (object.packageName != null)
                    message.packageName = String(object.packageName);
                if (object.status != null)
                    message.status = object.status >>> 0;
                if (object.jsonData != null)
                    message.jsonData = String(object.jsonData);
                return message;
            };

            /**
             * Creates a plain object from a GameInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof knights.viewpoint.GameInfo
             * @static
             * @param {knights.viewpoint.GameInfo} message GameInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GameInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.gameId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.gameId = options.longs === String ? "0" : 0;
                    object.packageName = "";
                    object.status = 0;
                    object.jsonData = "";
                }
                if (message.gameId != null && message.hasOwnProperty("gameId"))
                    if (typeof message.gameId === "number")
                        object.gameId = options.longs === String ? String(message.gameId) : message.gameId;
                    else
                        object.gameId = options.longs === String ? $util.Long.prototype.toString.call(message.gameId) : options.longs === Number ? new $util.LongBits(message.gameId.low >>> 0, message.gameId.high >>> 0).toNumber(true) : message.gameId;
                if (message.packageName != null && message.hasOwnProperty("packageName"))
                    object.packageName = message.packageName;
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = message.status;
                if (message.jsonData != null && message.hasOwnProperty("jsonData"))
                    object.jsonData = message.jsonData;
                return object;
            };

            /**
             * Converts this GameInfo to JSON.
             * @function toJSON
             * @memberof knights.viewpoint.GameInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GameInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return GameInfo;
        })();

        viewpoint.EtiquetteExamInfo = (function() {

            /**
             * Properties of an EtiquetteExamInfo.
             * @memberof knights.viewpoint
             * @interface IEtiquetteExamInfo
             * @property {number|null} [score] EtiquetteExamInfo score
             * @property {number|Long|null} [uploadTs] EtiquetteExamInfo uploadTs
             * @property {boolean|null} [isPass] EtiquetteExamInfo isPass
             */

            /**
             * Constructs a new EtiquetteExamInfo.
             * @memberof knights.viewpoint
             * @classdesc Represents an EtiquetteExamInfo.
             * @implements IEtiquetteExamInfo
             * @constructor
             * @param {knights.viewpoint.IEtiquetteExamInfo=} [properties] Properties to set
             */
            function EtiquetteExamInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EtiquetteExamInfo score.
             * @member {number} score
             * @memberof knights.viewpoint.EtiquetteExamInfo
             * @instance
             */
            EtiquetteExamInfo.prototype.score = 0;

            /**
             * EtiquetteExamInfo uploadTs.
             * @member {number|Long} uploadTs
             * @memberof knights.viewpoint.EtiquetteExamInfo
             * @instance
             */
            EtiquetteExamInfo.prototype.uploadTs = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * EtiquetteExamInfo isPass.
             * @member {boolean} isPass
             * @memberof knights.viewpoint.EtiquetteExamInfo
             * @instance
             */
            EtiquetteExamInfo.prototype.isPass = false;

            /**
             * Creates a new EtiquetteExamInfo instance using the specified properties.
             * @function create
             * @memberof knights.viewpoint.EtiquetteExamInfo
             * @static
             * @param {knights.viewpoint.IEtiquetteExamInfo=} [properties] Properties to set
             * @returns {knights.viewpoint.EtiquetteExamInfo} EtiquetteExamInfo instance
             */
            EtiquetteExamInfo.create = function create(properties) {
                return new EtiquetteExamInfo(properties);
            };

            /**
             * Encodes the specified EtiquetteExamInfo message. Does not implicitly {@link knights.viewpoint.EtiquetteExamInfo.verify|verify} messages.
             * @function encode
             * @memberof knights.viewpoint.EtiquetteExamInfo
             * @static
             * @param {knights.viewpoint.IEtiquetteExamInfo} message EtiquetteExamInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EtiquetteExamInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.score != null && message.hasOwnProperty("score"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.score);
                if (message.uploadTs != null && message.hasOwnProperty("uploadTs"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.uploadTs);
                if (message.isPass != null && message.hasOwnProperty("isPass"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isPass);
                return writer;
            };

            /**
             * Encodes the specified EtiquetteExamInfo message, length delimited. Does not implicitly {@link knights.viewpoint.EtiquetteExamInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof knights.viewpoint.EtiquetteExamInfo
             * @static
             * @param {knights.viewpoint.IEtiquetteExamInfo} message EtiquetteExamInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EtiquetteExamInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EtiquetteExamInfo message from the specified reader or buffer.
             * @function decode
             * @memberof knights.viewpoint.EtiquetteExamInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {knights.viewpoint.EtiquetteExamInfo} EtiquetteExamInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EtiquetteExamInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.knights.viewpoint.EtiquetteExamInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.score = reader.uint32();
                        break;
                    case 2:
                        message.uploadTs = reader.uint64();
                        break;
                    case 3:
                        message.isPass = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EtiquetteExamInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof knights.viewpoint.EtiquetteExamInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {knights.viewpoint.EtiquetteExamInfo} EtiquetteExamInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EtiquetteExamInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EtiquetteExamInfo message.
             * @function verify
             * @memberof knights.viewpoint.EtiquetteExamInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EtiquetteExamInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.score != null && message.hasOwnProperty("score"))
                    if (!$util.isInteger(message.score))
                        return "score: integer expected";
                if (message.uploadTs != null && message.hasOwnProperty("uploadTs"))
                    if (!$util.isInteger(message.uploadTs) && !(message.uploadTs && $util.isInteger(message.uploadTs.low) && $util.isInteger(message.uploadTs.high)))
                        return "uploadTs: integer|Long expected";
                if (message.isPass != null && message.hasOwnProperty("isPass"))
                    if (typeof message.isPass !== "boolean")
                        return "isPass: boolean expected";
                return null;
            };

            /**
             * Creates an EtiquetteExamInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof knights.viewpoint.EtiquetteExamInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {knights.viewpoint.EtiquetteExamInfo} EtiquetteExamInfo
             */
            EtiquetteExamInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.knights.viewpoint.EtiquetteExamInfo)
                    return object;
                var message = new $root.knights.viewpoint.EtiquetteExamInfo();
                if (object.score != null)
                    message.score = object.score >>> 0;
                if (object.uploadTs != null)
                    if ($util.Long)
                        (message.uploadTs = $util.Long.fromValue(object.uploadTs)).unsigned = true;
                    else if (typeof object.uploadTs === "string")
                        message.uploadTs = parseInt(object.uploadTs, 10);
                    else if (typeof object.uploadTs === "number")
                        message.uploadTs = object.uploadTs;
                    else if (typeof object.uploadTs === "object")
                        message.uploadTs = new $util.LongBits(object.uploadTs.low >>> 0, object.uploadTs.high >>> 0).toNumber(true);
                if (object.isPass != null)
                    message.isPass = Boolean(object.isPass);
                return message;
            };

            /**
             * Creates a plain object from an EtiquetteExamInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof knights.viewpoint.EtiquetteExamInfo
             * @static
             * @param {knights.viewpoint.EtiquetteExamInfo} message EtiquetteExamInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EtiquetteExamInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.score = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.uploadTs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.uploadTs = options.longs === String ? "0" : 0;
                    object.isPass = false;
                }
                if (message.score != null && message.hasOwnProperty("score"))
                    object.score = message.score;
                if (message.uploadTs != null && message.hasOwnProperty("uploadTs"))
                    if (typeof message.uploadTs === "number")
                        object.uploadTs = options.longs === String ? String(message.uploadTs) : message.uploadTs;
                    else
                        object.uploadTs = options.longs === String ? $util.Long.prototype.toString.call(message.uploadTs) : options.longs === Number ? new $util.LongBits(message.uploadTs.low >>> 0, message.uploadTs.high >>> 0).toNumber(true) : message.uploadTs;
                if (message.isPass != null && message.hasOwnProperty("isPass"))
                    object.isPass = message.isPass;
                return object;
            };

            /**
             * Converts this EtiquetteExamInfo to JSON.
             * @function toJSON
             * @memberof knights.viewpoint.EtiquetteExamInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EtiquetteExamInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return EtiquetteExamInfo;
        })();

        viewpoint.HonorInfo = (function() {

            /**
             * Properties of an HonorInfo.
             * @memberof knights.viewpoint
             * @interface IHonorInfo
             * @property {number|null} [id] HonorInfo id
             * @property {number|null} [type] HonorInfo type
             * @property {string|null} [name] HonorInfo name
             * @property {boolean|null} [canUse] HonorInfo canUse
             * @property {boolean|null} [canActive] HonorInfo canActive
             * @property {string|null} [bigPicUrl] HonorInfo bigPicUrl
             * @property {string|null} [smallPicUrl] HonorInfo smallPicUrl
             * @property {number|null} [ownerCnt] HonorInfo ownerCnt
             * @property {string|null} [descrption] HonorInfo descrption
             * @property {string|null} [rule] HonorInfo rule
             * @property {string|null} [noActivePicUrl] HonorInfo noActivePicUrl
             */

            /**
             * Constructs a new HonorInfo.
             * @memberof knights.viewpoint
             * @classdesc Represents an HonorInfo.
             * @implements IHonorInfo
             * @constructor
             * @param {knights.viewpoint.IHonorInfo=} [properties] Properties to set
             */
            function HonorInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * HonorInfo id.
             * @member {number} id
             * @memberof knights.viewpoint.HonorInfo
             * @instance
             */
            HonorInfo.prototype.id = 0;

            /**
             * HonorInfo type.
             * @member {number} type
             * @memberof knights.viewpoint.HonorInfo
             * @instance
             */
            HonorInfo.prototype.type = 0;

            /**
             * HonorInfo name.
             * @member {string} name
             * @memberof knights.viewpoint.HonorInfo
             * @instance
             */
            HonorInfo.prototype.name = "";

            /**
             * HonorInfo canUse.
             * @member {boolean} canUse
             * @memberof knights.viewpoint.HonorInfo
             * @instance
             */
            HonorInfo.prototype.canUse = false;

            /**
             * HonorInfo canActive.
             * @member {boolean} canActive
             * @memberof knights.viewpoint.HonorInfo
             * @instance
             */
            HonorInfo.prototype.canActive = false;

            /**
             * HonorInfo bigPicUrl.
             * @member {string} bigPicUrl
             * @memberof knights.viewpoint.HonorInfo
             * @instance
             */
            HonorInfo.prototype.bigPicUrl = "";

            /**
             * HonorInfo smallPicUrl.
             * @member {string} smallPicUrl
             * @memberof knights.viewpoint.HonorInfo
             * @instance
             */
            HonorInfo.prototype.smallPicUrl = "";

            /**
             * HonorInfo ownerCnt.
             * @member {number} ownerCnt
             * @memberof knights.viewpoint.HonorInfo
             * @instance
             */
            HonorInfo.prototype.ownerCnt = 0;

            /**
             * HonorInfo descrption.
             * @member {string} descrption
             * @memberof knights.viewpoint.HonorInfo
             * @instance
             */
            HonorInfo.prototype.descrption = "";

            /**
             * HonorInfo rule.
             * @member {string} rule
             * @memberof knights.viewpoint.HonorInfo
             * @instance
             */
            HonorInfo.prototype.rule = "";

            /**
             * HonorInfo noActivePicUrl.
             * @member {string} noActivePicUrl
             * @memberof knights.viewpoint.HonorInfo
             * @instance
             */
            HonorInfo.prototype.noActivePicUrl = "";

            /**
             * Creates a new HonorInfo instance using the specified properties.
             * @function create
             * @memberof knights.viewpoint.HonorInfo
             * @static
             * @param {knights.viewpoint.IHonorInfo=} [properties] Properties to set
             * @returns {knights.viewpoint.HonorInfo} HonorInfo instance
             */
            HonorInfo.create = function create(properties) {
                return new HonorInfo(properties);
            };

            /**
             * Encodes the specified HonorInfo message. Does not implicitly {@link knights.viewpoint.HonorInfo.verify|verify} messages.
             * @function encode
             * @memberof knights.viewpoint.HonorInfo
             * @static
             * @param {knights.viewpoint.IHonorInfo} message HonorInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HonorInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
                if (message.type != null && message.hasOwnProperty("type"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.type);
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
                if (message.canUse != null && message.hasOwnProperty("canUse"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.canUse);
                if (message.canActive != null && message.hasOwnProperty("canActive"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.canActive);
                if (message.bigPicUrl != null && message.hasOwnProperty("bigPicUrl"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.bigPicUrl);
                if (message.smallPicUrl != null && message.hasOwnProperty("smallPicUrl"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.smallPicUrl);
                if (message.ownerCnt != null && message.hasOwnProperty("ownerCnt"))
                    writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.ownerCnt);
                if (message.descrption != null && message.hasOwnProperty("descrption"))
                    writer.uint32(/* id 9, wireType 2 =*/74).string(message.descrption);
                if (message.rule != null && message.hasOwnProperty("rule"))
                    writer.uint32(/* id 10, wireType 2 =*/82).string(message.rule);
                if (message.noActivePicUrl != null && message.hasOwnProperty("noActivePicUrl"))
                    writer.uint32(/* id 11, wireType 2 =*/90).string(message.noActivePicUrl);
                return writer;
            };

            /**
             * Encodes the specified HonorInfo message, length delimited. Does not implicitly {@link knights.viewpoint.HonorInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof knights.viewpoint.HonorInfo
             * @static
             * @param {knights.viewpoint.IHonorInfo} message HonorInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HonorInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an HonorInfo message from the specified reader or buffer.
             * @function decode
             * @memberof knights.viewpoint.HonorInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {knights.viewpoint.HonorInfo} HonorInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HonorInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.knights.viewpoint.HonorInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.uint32();
                        break;
                    case 2:
                        message.type = reader.uint32();
                        break;
                    case 3:
                        message.name = reader.string();
                        break;
                    case 4:
                        message.canUse = reader.bool();
                        break;
                    case 5:
                        message.canActive = reader.bool();
                        break;
                    case 6:
                        message.bigPicUrl = reader.string();
                        break;
                    case 7:
                        message.smallPicUrl = reader.string();
                        break;
                    case 8:
                        message.ownerCnt = reader.uint32();
                        break;
                    case 9:
                        message.descrption = reader.string();
                        break;
                    case 10:
                        message.rule = reader.string();
                        break;
                    case 11:
                        message.noActivePicUrl = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an HonorInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof knights.viewpoint.HonorInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {knights.viewpoint.HonorInfo} HonorInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HonorInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an HonorInfo message.
             * @function verify
             * @memberof knights.viewpoint.HonorInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            HonorInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                if (message.type != null && message.hasOwnProperty("type"))
                    if (!$util.isInteger(message.type))
                        return "type: integer expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.canUse != null && message.hasOwnProperty("canUse"))
                    if (typeof message.canUse !== "boolean")
                        return "canUse: boolean expected";
                if (message.canActive != null && message.hasOwnProperty("canActive"))
                    if (typeof message.canActive !== "boolean")
                        return "canActive: boolean expected";
                if (message.bigPicUrl != null && message.hasOwnProperty("bigPicUrl"))
                    if (!$util.isString(message.bigPicUrl))
                        return "bigPicUrl: string expected";
                if (message.smallPicUrl != null && message.hasOwnProperty("smallPicUrl"))
                    if (!$util.isString(message.smallPicUrl))
                        return "smallPicUrl: string expected";
                if (message.ownerCnt != null && message.hasOwnProperty("ownerCnt"))
                    if (!$util.isInteger(message.ownerCnt))
                        return "ownerCnt: integer expected";
                if (message.descrption != null && message.hasOwnProperty("descrption"))
                    if (!$util.isString(message.descrption))
                        return "descrption: string expected";
                if (message.rule != null && message.hasOwnProperty("rule"))
                    if (!$util.isString(message.rule))
                        return "rule: string expected";
                if (message.noActivePicUrl != null && message.hasOwnProperty("noActivePicUrl"))
                    if (!$util.isString(message.noActivePicUrl))
                        return "noActivePicUrl: string expected";
                return null;
            };

            /**
             * Creates an HonorInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof knights.viewpoint.HonorInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {knights.viewpoint.HonorInfo} HonorInfo
             */
            HonorInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.knights.viewpoint.HonorInfo)
                    return object;
                var message = new $root.knights.viewpoint.HonorInfo();
                if (object.id != null)
                    message.id = object.id >>> 0;
                if (object.type != null)
                    message.type = object.type >>> 0;
                if (object.name != null)
                    message.name = String(object.name);
                if (object.canUse != null)
                    message.canUse = Boolean(object.canUse);
                if (object.canActive != null)
                    message.canActive = Boolean(object.canActive);
                if (object.bigPicUrl != null)
                    message.bigPicUrl = String(object.bigPicUrl);
                if (object.smallPicUrl != null)
                    message.smallPicUrl = String(object.smallPicUrl);
                if (object.ownerCnt != null)
                    message.ownerCnt = object.ownerCnt >>> 0;
                if (object.descrption != null)
                    message.descrption = String(object.descrption);
                if (object.rule != null)
                    message.rule = String(object.rule);
                if (object.noActivePicUrl != null)
                    message.noActivePicUrl = String(object.noActivePicUrl);
                return message;
            };

            /**
             * Creates a plain object from an HonorInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof knights.viewpoint.HonorInfo
             * @static
             * @param {knights.viewpoint.HonorInfo} message HonorInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            HonorInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = 0;
                    object.type = 0;
                    object.name = "";
                    object.canUse = false;
                    object.canActive = false;
                    object.bigPicUrl = "";
                    object.smallPicUrl = "";
                    object.ownerCnt = 0;
                    object.descrption = "";
                    object.rule = "";
                    object.noActivePicUrl = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = message.type;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.canUse != null && message.hasOwnProperty("canUse"))
                    object.canUse = message.canUse;
                if (message.canActive != null && message.hasOwnProperty("canActive"))
                    object.canActive = message.canActive;
                if (message.bigPicUrl != null && message.hasOwnProperty("bigPicUrl"))
                    object.bigPicUrl = message.bigPicUrl;
                if (message.smallPicUrl != null && message.hasOwnProperty("smallPicUrl"))
                    object.smallPicUrl = message.smallPicUrl;
                if (message.ownerCnt != null && message.hasOwnProperty("ownerCnt"))
                    object.ownerCnt = message.ownerCnt;
                if (message.descrption != null && message.hasOwnProperty("descrption"))
                    object.descrption = message.descrption;
                if (message.rule != null && message.hasOwnProperty("rule"))
                    object.rule = message.rule;
                if (message.noActivePicUrl != null && message.hasOwnProperty("noActivePicUrl"))
                    object.noActivePicUrl = message.noActivePicUrl;
                return object;
            };

            /**
             * Converts this HonorInfo to JSON.
             * @function toJSON
             * @memberof knights.viewpoint.HonorInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            HonorInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return HonorInfo;
        })();

        viewpoint.WoreHonorInfo = (function() {

            /**
             * Properties of a WoreHonorInfo.
             * @memberof knights.viewpoint
             * @interface IWoreHonorInfo
             * @property {number} id WoreHonorInfo id
             * @property {number|Long|null} [gainTime] WoreHonorInfo gainTime
             * @property {knights.viewpoint.IHonorInfo|null} [info] WoreHonorInfo info
             */

            /**
             * Constructs a new WoreHonorInfo.
             * @memberof knights.viewpoint
             * @classdesc Represents a WoreHonorInfo.
             * @implements IWoreHonorInfo
             * @constructor
             * @param {knights.viewpoint.IWoreHonorInfo=} [properties] Properties to set
             */
            function WoreHonorInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * WoreHonorInfo id.
             * @member {number} id
             * @memberof knights.viewpoint.WoreHonorInfo
             * @instance
             */
            WoreHonorInfo.prototype.id = 0;

            /**
             * WoreHonorInfo gainTime.
             * @member {number|Long} gainTime
             * @memberof knights.viewpoint.WoreHonorInfo
             * @instance
             */
            WoreHonorInfo.prototype.gainTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * WoreHonorInfo info.
             * @member {knights.viewpoint.IHonorInfo|null|undefined} info
             * @memberof knights.viewpoint.WoreHonorInfo
             * @instance
             */
            WoreHonorInfo.prototype.info = null;

            /**
             * Creates a new WoreHonorInfo instance using the specified properties.
             * @function create
             * @memberof knights.viewpoint.WoreHonorInfo
             * @static
             * @param {knights.viewpoint.IWoreHonorInfo=} [properties] Properties to set
             * @returns {knights.viewpoint.WoreHonorInfo} WoreHonorInfo instance
             */
            WoreHonorInfo.create = function create(properties) {
                return new WoreHonorInfo(properties);
            };

            /**
             * Encodes the specified WoreHonorInfo message. Does not implicitly {@link knights.viewpoint.WoreHonorInfo.verify|verify} messages.
             * @function encode
             * @memberof knights.viewpoint.WoreHonorInfo
             * @static
             * @param {knights.viewpoint.IWoreHonorInfo} message WoreHonorInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WoreHonorInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
                if (message.gainTime != null && message.hasOwnProperty("gainTime"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.gainTime);
                if (message.info != null && message.hasOwnProperty("info"))
                    $root.knights.viewpoint.HonorInfo.encode(message.info, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified WoreHonorInfo message, length delimited. Does not implicitly {@link knights.viewpoint.WoreHonorInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof knights.viewpoint.WoreHonorInfo
             * @static
             * @param {knights.viewpoint.IWoreHonorInfo} message WoreHonorInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WoreHonorInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a WoreHonorInfo message from the specified reader or buffer.
             * @function decode
             * @memberof knights.viewpoint.WoreHonorInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {knights.viewpoint.WoreHonorInfo} WoreHonorInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WoreHonorInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.knights.viewpoint.WoreHonorInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.uint32();
                        break;
                    case 2:
                        message.gainTime = reader.uint64();
                        break;
                    case 3:
                        message.info = $root.knights.viewpoint.HonorInfo.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("id"))
                    throw $util.ProtocolError("missing required 'id'", { instance: message });
                return message;
            };

            /**
             * Decodes a WoreHonorInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof knights.viewpoint.WoreHonorInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {knights.viewpoint.WoreHonorInfo} WoreHonorInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WoreHonorInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a WoreHonorInfo message.
             * @function verify
             * @memberof knights.viewpoint.WoreHonorInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            WoreHonorInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
                if (message.gainTime != null && message.hasOwnProperty("gainTime"))
                    if (!$util.isInteger(message.gainTime) && !(message.gainTime && $util.isInteger(message.gainTime.low) && $util.isInteger(message.gainTime.high)))
                        return "gainTime: integer|Long expected";
                if (message.info != null && message.hasOwnProperty("info")) {
                    var error = $root.knights.viewpoint.HonorInfo.verify(message.info);
                    if (error)
                        return "info." + error;
                }
                return null;
            };

            /**
             * Creates a WoreHonorInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof knights.viewpoint.WoreHonorInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {knights.viewpoint.WoreHonorInfo} WoreHonorInfo
             */
            WoreHonorInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.knights.viewpoint.WoreHonorInfo)
                    return object;
                var message = new $root.knights.viewpoint.WoreHonorInfo();
                if (object.id != null)
                    message.id = object.id >>> 0;
                if (object.gainTime != null)
                    if ($util.Long)
                        (message.gainTime = $util.Long.fromValue(object.gainTime)).unsigned = true;
                    else if (typeof object.gainTime === "string")
                        message.gainTime = parseInt(object.gainTime, 10);
                    else if (typeof object.gainTime === "number")
                        message.gainTime = object.gainTime;
                    else if (typeof object.gainTime === "object")
                        message.gainTime = new $util.LongBits(object.gainTime.low >>> 0, object.gainTime.high >>> 0).toNumber(true);
                if (object.info != null) {
                    if (typeof object.info !== "object")
                        throw TypeError(".knights.viewpoint.WoreHonorInfo.info: object expected");
                    message.info = $root.knights.viewpoint.HonorInfo.fromObject(object.info);
                }
                return message;
            };

            /**
             * Creates a plain object from a WoreHonorInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof knights.viewpoint.WoreHonorInfo
             * @static
             * @param {knights.viewpoint.WoreHonorInfo} message WoreHonorInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            WoreHonorInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.gainTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.gainTime = options.longs === String ? "0" : 0;
                    object.info = null;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.gainTime != null && message.hasOwnProperty("gainTime"))
                    if (typeof message.gainTime === "number")
                        object.gainTime = options.longs === String ? String(message.gainTime) : message.gainTime;
                    else
                        object.gainTime = options.longs === String ? $util.Long.prototype.toString.call(message.gainTime) : options.longs === Number ? new $util.LongBits(message.gainTime.low >>> 0, message.gainTime.high >>> 0).toNumber(true) : message.gainTime;
                if (message.info != null && message.hasOwnProperty("info"))
                    object.info = $root.knights.viewpoint.HonorInfo.toObject(message.info, options);
                return object;
            };

            /**
             * Converts this WoreHonorInfo to JSON.
             * @function toJSON
             * @memberof knights.viewpoint.WoreHonorInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            WoreHonorInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return WoreHonorInfo;
        })();

        viewpoint.LikeInfo = (function() {

            /**
             * Properties of a LikeInfo.
             * @memberof knights.viewpoint
             * @interface ILikeInfo
             * @property {string|null} [dataId] LikeInfo dataId
             * @property {number|null} [dataType] LikeInfo dataType
             * @property {number|null} [likeType] LikeInfo likeType
             */

            /**
             * Constructs a new LikeInfo.
             * @memberof knights.viewpoint
             * @classdesc Represents a LikeInfo.
             * @implements ILikeInfo
             * @constructor
             * @param {knights.viewpoint.ILikeInfo=} [properties] Properties to set
             */
            function LikeInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * LikeInfo dataId.
             * @member {string} dataId
             * @memberof knights.viewpoint.LikeInfo
             * @instance
             */
            LikeInfo.prototype.dataId = "";

            /**
             * LikeInfo dataType.
             * @member {number} dataType
             * @memberof knights.viewpoint.LikeInfo
             * @instance
             */
            LikeInfo.prototype.dataType = 0;

            /**
             * LikeInfo likeType.
             * @member {number} likeType
             * @memberof knights.viewpoint.LikeInfo
             * @instance
             */
            LikeInfo.prototype.likeType = 0;

            /**
             * Creates a new LikeInfo instance using the specified properties.
             * @function create
             * @memberof knights.viewpoint.LikeInfo
             * @static
             * @param {knights.viewpoint.ILikeInfo=} [properties] Properties to set
             * @returns {knights.viewpoint.LikeInfo} LikeInfo instance
             */
            LikeInfo.create = function create(properties) {
                return new LikeInfo(properties);
            };

            /**
             * Encodes the specified LikeInfo message. Does not implicitly {@link knights.viewpoint.LikeInfo.verify|verify} messages.
             * @function encode
             * @memberof knights.viewpoint.LikeInfo
             * @static
             * @param {knights.viewpoint.ILikeInfo} message LikeInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LikeInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.dataId != null && message.hasOwnProperty("dataId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.dataId);
                if (message.dataType != null && message.hasOwnProperty("dataType"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.dataType);
                if (message.likeType != null && message.hasOwnProperty("likeType"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.likeType);
                return writer;
            };

            /**
             * Encodes the specified LikeInfo message, length delimited. Does not implicitly {@link knights.viewpoint.LikeInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof knights.viewpoint.LikeInfo
             * @static
             * @param {knights.viewpoint.ILikeInfo} message LikeInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LikeInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a LikeInfo message from the specified reader or buffer.
             * @function decode
             * @memberof knights.viewpoint.LikeInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {knights.viewpoint.LikeInfo} LikeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LikeInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.knights.viewpoint.LikeInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.dataId = reader.string();
                        break;
                    case 2:
                        message.dataType = reader.uint32();
                        break;
                    case 3:
                        message.likeType = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a LikeInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof knights.viewpoint.LikeInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {knights.viewpoint.LikeInfo} LikeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LikeInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a LikeInfo message.
             * @function verify
             * @memberof knights.viewpoint.LikeInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LikeInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.dataId != null && message.hasOwnProperty("dataId"))
                    if (!$util.isString(message.dataId))
                        return "dataId: string expected";
                if (message.dataType != null && message.hasOwnProperty("dataType"))
                    if (!$util.isInteger(message.dataType))
                        return "dataType: integer expected";
                if (message.likeType != null && message.hasOwnProperty("likeType"))
                    if (!$util.isInteger(message.likeType))
                        return "likeType: integer expected";
                return null;
            };

            /**
             * Creates a LikeInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof knights.viewpoint.LikeInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {knights.viewpoint.LikeInfo} LikeInfo
             */
            LikeInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.knights.viewpoint.LikeInfo)
                    return object;
                var message = new $root.knights.viewpoint.LikeInfo();
                if (object.dataId != null)
                    message.dataId = String(object.dataId);
                if (object.dataType != null)
                    message.dataType = object.dataType >>> 0;
                if (object.likeType != null)
                    message.likeType = object.likeType >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a LikeInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof knights.viewpoint.LikeInfo
             * @static
             * @param {knights.viewpoint.LikeInfo} message LikeInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LikeInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.dataId = "";
                    object.dataType = 0;
                    object.likeType = 0;
                }
                if (message.dataId != null && message.hasOwnProperty("dataId"))
                    object.dataId = message.dataId;
                if (message.dataType != null && message.hasOwnProperty("dataType"))
                    object.dataType = message.dataType;
                if (message.likeType != null && message.hasOwnProperty("likeType"))
                    object.likeType = message.likeType;
                return object;
            };

            /**
             * Converts this LikeInfo to JSON.
             * @function toJSON
             * @memberof knights.viewpoint.LikeInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LikeInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return LikeInfo;
        })();

        viewpoint.ReplyInfo = (function() {

            /**
             * Properties of a ReplyInfo.
             * @memberof knights.viewpoint
             * @interface IReplyInfo
             * @property {string|null} [replyId] ReplyInfo replyId
             * @property {knights.viewpoint.IUserInfo|null} [fromUser] ReplyInfo fromUser
             * @property {knights.viewpoint.IUserInfo|null} [toUser] ReplyInfo toUser
             * @property {string|null} [dataId] ReplyInfo dataId
             * @property {number|null} [dataType] ReplyInfo dataType
             * @property {string|null} [content] ReplyInfo content
             * @property {number|null} [likeCnt] ReplyInfo likeCnt
             * @property {number|null} [replyCnt] ReplyInfo replyCnt
             * @property {number|null} [status] ReplyInfo status
             * @property {number|Long|null} [createTime] ReplyInfo createTime
             * @property {number|null} [seq] ReplyInfo seq
             * @property {knights.viewpoint.ILikeInfo|null} [likeInfo] ReplyInfo likeInfo
             * @property {Array.<knights.viewpoint.IReplyInfo>|null} [topReplys] ReplyInfo topReplys
             */

            /**
             * Constructs a new ReplyInfo.
             * @memberof knights.viewpoint
             * @classdesc Represents a ReplyInfo.
             * @implements IReplyInfo
             * @constructor
             * @param {knights.viewpoint.IReplyInfo=} [properties] Properties to set
             */
            function ReplyInfo(properties) {
                this.topReplys = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ReplyInfo replyId.
             * @member {string} replyId
             * @memberof knights.viewpoint.ReplyInfo
             * @instance
             */
            ReplyInfo.prototype.replyId = "";

            /**
             * ReplyInfo fromUser.
             * @member {knights.viewpoint.IUserInfo|null|undefined} fromUser
             * @memberof knights.viewpoint.ReplyInfo
             * @instance
             */
            ReplyInfo.prototype.fromUser = null;

            /**
             * ReplyInfo toUser.
             * @member {knights.viewpoint.IUserInfo|null|undefined} toUser
             * @memberof knights.viewpoint.ReplyInfo
             * @instance
             */
            ReplyInfo.prototype.toUser = null;

            /**
             * ReplyInfo dataId.
             * @member {string} dataId
             * @memberof knights.viewpoint.ReplyInfo
             * @instance
             */
            ReplyInfo.prototype.dataId = "";

            /**
             * ReplyInfo dataType.
             * @member {number} dataType
             * @memberof knights.viewpoint.ReplyInfo
             * @instance
             */
            ReplyInfo.prototype.dataType = 0;

            /**
             * ReplyInfo content.
             * @member {string} content
             * @memberof knights.viewpoint.ReplyInfo
             * @instance
             */
            ReplyInfo.prototype.content = "";

            /**
             * ReplyInfo likeCnt.
             * @member {number} likeCnt
             * @memberof knights.viewpoint.ReplyInfo
             * @instance
             */
            ReplyInfo.prototype.likeCnt = 0;

            /**
             * ReplyInfo replyCnt.
             * @member {number} replyCnt
             * @memberof knights.viewpoint.ReplyInfo
             * @instance
             */
            ReplyInfo.prototype.replyCnt = 0;

            /**
             * ReplyInfo status.
             * @member {number} status
             * @memberof knights.viewpoint.ReplyInfo
             * @instance
             */
            ReplyInfo.prototype.status = 0;

            /**
             * ReplyInfo createTime.
             * @member {number|Long} createTime
             * @memberof knights.viewpoint.ReplyInfo
             * @instance
             */
            ReplyInfo.prototype.createTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * ReplyInfo seq.
             * @member {number} seq
             * @memberof knights.viewpoint.ReplyInfo
             * @instance
             */
            ReplyInfo.prototype.seq = 0;

            /**
             * ReplyInfo likeInfo.
             * @member {knights.viewpoint.ILikeInfo|null|undefined} likeInfo
             * @memberof knights.viewpoint.ReplyInfo
             * @instance
             */
            ReplyInfo.prototype.likeInfo = null;

            /**
             * ReplyInfo topReplys.
             * @member {Array.<knights.viewpoint.IReplyInfo>} topReplys
             * @memberof knights.viewpoint.ReplyInfo
             * @instance
             */
            ReplyInfo.prototype.topReplys = $util.emptyArray;

            /**
             * Creates a new ReplyInfo instance using the specified properties.
             * @function create
             * @memberof knights.viewpoint.ReplyInfo
             * @static
             * @param {knights.viewpoint.IReplyInfo=} [properties] Properties to set
             * @returns {knights.viewpoint.ReplyInfo} ReplyInfo instance
             */
            ReplyInfo.create = function create(properties) {
                return new ReplyInfo(properties);
            };

            /**
             * Encodes the specified ReplyInfo message. Does not implicitly {@link knights.viewpoint.ReplyInfo.verify|verify} messages.
             * @function encode
             * @memberof knights.viewpoint.ReplyInfo
             * @static
             * @param {knights.viewpoint.IReplyInfo} message ReplyInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReplyInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.replyId != null && message.hasOwnProperty("replyId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.replyId);
                if (message.fromUser != null && message.hasOwnProperty("fromUser"))
                    $root.knights.viewpoint.UserInfo.encode(message.fromUser, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.toUser != null && message.hasOwnProperty("toUser"))
                    $root.knights.viewpoint.UserInfo.encode(message.toUser, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.dataId != null && message.hasOwnProperty("dataId"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.dataId);
                if (message.dataType != null && message.hasOwnProperty("dataType"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.dataType);
                if (message.content != null && message.hasOwnProperty("content"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.content);
                if (message.likeCnt != null && message.hasOwnProperty("likeCnt"))
                    writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.likeCnt);
                if (message.replyCnt != null && message.hasOwnProperty("replyCnt"))
                    writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.replyCnt);
                if (message.status != null && message.hasOwnProperty("status"))
                    writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.status);
                if (message.createTime != null && message.hasOwnProperty("createTime"))
                    writer.uint32(/* id 10, wireType 0 =*/80).uint64(message.createTime);
                if (message.seq != null && message.hasOwnProperty("seq"))
                    writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.seq);
                if (message.likeInfo != null && message.hasOwnProperty("likeInfo"))
                    $root.knights.viewpoint.LikeInfo.encode(message.likeInfo, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
                if (message.topReplys != null && message.topReplys.length)
                    for (var i = 0; i < message.topReplys.length; ++i)
                        $root.knights.viewpoint.ReplyInfo.encode(message.topReplys[i], writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ReplyInfo message, length delimited. Does not implicitly {@link knights.viewpoint.ReplyInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof knights.viewpoint.ReplyInfo
             * @static
             * @param {knights.viewpoint.IReplyInfo} message ReplyInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReplyInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ReplyInfo message from the specified reader or buffer.
             * @function decode
             * @memberof knights.viewpoint.ReplyInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {knights.viewpoint.ReplyInfo} ReplyInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReplyInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.knights.viewpoint.ReplyInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.replyId = reader.string();
                        break;
                    case 2:
                        message.fromUser = $root.knights.viewpoint.UserInfo.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.toUser = $root.knights.viewpoint.UserInfo.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.dataId = reader.string();
                        break;
                    case 5:
                        message.dataType = reader.uint32();
                        break;
                    case 6:
                        message.content = reader.string();
                        break;
                    case 7:
                        message.likeCnt = reader.uint32();
                        break;
                    case 8:
                        message.replyCnt = reader.uint32();
                        break;
                    case 9:
                        message.status = reader.uint32();
                        break;
                    case 10:
                        message.createTime = reader.uint64();
                        break;
                    case 11:
                        message.seq = reader.uint32();
                        break;
                    case 12:
                        message.likeInfo = $root.knights.viewpoint.LikeInfo.decode(reader, reader.uint32());
                        break;
                    case 13:
                        if (!(message.topReplys && message.topReplys.length))
                            message.topReplys = [];
                        message.topReplys.push($root.knights.viewpoint.ReplyInfo.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ReplyInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof knights.viewpoint.ReplyInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {knights.viewpoint.ReplyInfo} ReplyInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReplyInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ReplyInfo message.
             * @function verify
             * @memberof knights.viewpoint.ReplyInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ReplyInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.replyId != null && message.hasOwnProperty("replyId"))
                    if (!$util.isString(message.replyId))
                        return "replyId: string expected";
                if (message.fromUser != null && message.hasOwnProperty("fromUser")) {
                    var error = $root.knights.viewpoint.UserInfo.verify(message.fromUser);
                    if (error)
                        return "fromUser." + error;
                }
                if (message.toUser != null && message.hasOwnProperty("toUser")) {
                    var error = $root.knights.viewpoint.UserInfo.verify(message.toUser);
                    if (error)
                        return "toUser." + error;
                }
                if (message.dataId != null && message.hasOwnProperty("dataId"))
                    if (!$util.isString(message.dataId))
                        return "dataId: string expected";
                if (message.dataType != null && message.hasOwnProperty("dataType"))
                    if (!$util.isInteger(message.dataType))
                        return "dataType: integer expected";
                if (message.content != null && message.hasOwnProperty("content"))
                    if (!$util.isString(message.content))
                        return "content: string expected";
                if (message.likeCnt != null && message.hasOwnProperty("likeCnt"))
                    if (!$util.isInteger(message.likeCnt))
                        return "likeCnt: integer expected";
                if (message.replyCnt != null && message.hasOwnProperty("replyCnt"))
                    if (!$util.isInteger(message.replyCnt))
                        return "replyCnt: integer expected";
                if (message.status != null && message.hasOwnProperty("status"))
                    if (!$util.isInteger(message.status))
                        return "status: integer expected";
                if (message.createTime != null && message.hasOwnProperty("createTime"))
                    if (!$util.isInteger(message.createTime) && !(message.createTime && $util.isInteger(message.createTime.low) && $util.isInteger(message.createTime.high)))
                        return "createTime: integer|Long expected";
                if (message.seq != null && message.hasOwnProperty("seq"))
                    if (!$util.isInteger(message.seq))
                        return "seq: integer expected";
                if (message.likeInfo != null && message.hasOwnProperty("likeInfo")) {
                    var error = $root.knights.viewpoint.LikeInfo.verify(message.likeInfo);
                    if (error)
                        return "likeInfo." + error;
                }
                if (message.topReplys != null && message.hasOwnProperty("topReplys")) {
                    if (!Array.isArray(message.topReplys))
                        return "topReplys: array expected";
                    for (var i = 0; i < message.topReplys.length; ++i) {
                        var error = $root.knights.viewpoint.ReplyInfo.verify(message.topReplys[i]);
                        if (error)
                            return "topReplys." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a ReplyInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof knights.viewpoint.ReplyInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {knights.viewpoint.ReplyInfo} ReplyInfo
             */
            ReplyInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.knights.viewpoint.ReplyInfo)
                    return object;
                var message = new $root.knights.viewpoint.ReplyInfo();
                if (object.replyId != null)
                    message.replyId = String(object.replyId);
                if (object.fromUser != null) {
                    if (typeof object.fromUser !== "object")
                        throw TypeError(".knights.viewpoint.ReplyInfo.fromUser: object expected");
                    message.fromUser = $root.knights.viewpoint.UserInfo.fromObject(object.fromUser);
                }
                if (object.toUser != null) {
                    if (typeof object.toUser !== "object")
                        throw TypeError(".knights.viewpoint.ReplyInfo.toUser: object expected");
                    message.toUser = $root.knights.viewpoint.UserInfo.fromObject(object.toUser);
                }
                if (object.dataId != null)
                    message.dataId = String(object.dataId);
                if (object.dataType != null)
                    message.dataType = object.dataType >>> 0;
                if (object.content != null)
                    message.content = String(object.content);
                if (object.likeCnt != null)
                    message.likeCnt = object.likeCnt >>> 0;
                if (object.replyCnt != null)
                    message.replyCnt = object.replyCnt >>> 0;
                if (object.status != null)
                    message.status = object.status >>> 0;
                if (object.createTime != null)
                    if ($util.Long)
                        (message.createTime = $util.Long.fromValue(object.createTime)).unsigned = true;
                    else if (typeof object.createTime === "string")
                        message.createTime = parseInt(object.createTime, 10);
                    else if (typeof object.createTime === "number")
                        message.createTime = object.createTime;
                    else if (typeof object.createTime === "object")
                        message.createTime = new $util.LongBits(object.createTime.low >>> 0, object.createTime.high >>> 0).toNumber(true);
                if (object.seq != null)
                    message.seq = object.seq >>> 0;
                if (object.likeInfo != null) {
                    if (typeof object.likeInfo !== "object")
                        throw TypeError(".knights.viewpoint.ReplyInfo.likeInfo: object expected");
                    message.likeInfo = $root.knights.viewpoint.LikeInfo.fromObject(object.likeInfo);
                }
                if (object.topReplys) {
                    if (!Array.isArray(object.topReplys))
                        throw TypeError(".knights.viewpoint.ReplyInfo.topReplys: array expected");
                    message.topReplys = [];
                    for (var i = 0; i < object.topReplys.length; ++i) {
                        if (typeof object.topReplys[i] !== "object")
                            throw TypeError(".knights.viewpoint.ReplyInfo.topReplys: object expected");
                        message.topReplys[i] = $root.knights.viewpoint.ReplyInfo.fromObject(object.topReplys[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a ReplyInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof knights.viewpoint.ReplyInfo
             * @static
             * @param {knights.viewpoint.ReplyInfo} message ReplyInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ReplyInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.topReplys = [];
                if (options.defaults) {
                    object.replyId = "";
                    object.fromUser = null;
                    object.toUser = null;
                    object.dataId = "";
                    object.dataType = 0;
                    object.content = "";
                    object.likeCnt = 0;
                    object.replyCnt = 0;
                    object.status = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.createTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.createTime = options.longs === String ? "0" : 0;
                    object.seq = 0;
                    object.likeInfo = null;
                }
                if (message.replyId != null && message.hasOwnProperty("replyId"))
                    object.replyId = message.replyId;
                if (message.fromUser != null && message.hasOwnProperty("fromUser"))
                    object.fromUser = $root.knights.viewpoint.UserInfo.toObject(message.fromUser, options);
                if (message.toUser != null && message.hasOwnProperty("toUser"))
                    object.toUser = $root.knights.viewpoint.UserInfo.toObject(message.toUser, options);
                if (message.dataId != null && message.hasOwnProperty("dataId"))
                    object.dataId = message.dataId;
                if (message.dataType != null && message.hasOwnProperty("dataType"))
                    object.dataType = message.dataType;
                if (message.content != null && message.hasOwnProperty("content"))
                    object.content = message.content;
                if (message.likeCnt != null && message.hasOwnProperty("likeCnt"))
                    object.likeCnt = message.likeCnt;
                if (message.replyCnt != null && message.hasOwnProperty("replyCnt"))
                    object.replyCnt = message.replyCnt;
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = message.status;
                if (message.createTime != null && message.hasOwnProperty("createTime"))
                    if (typeof message.createTime === "number")
                        object.createTime = options.longs === String ? String(message.createTime) : message.createTime;
                    else
                        object.createTime = options.longs === String ? $util.Long.prototype.toString.call(message.createTime) : options.longs === Number ? new $util.LongBits(message.createTime.low >>> 0, message.createTime.high >>> 0).toNumber(true) : message.createTime;
                if (message.seq != null && message.hasOwnProperty("seq"))
                    object.seq = message.seq;
                if (message.likeInfo != null && message.hasOwnProperty("likeInfo"))
                    object.likeInfo = $root.knights.viewpoint.LikeInfo.toObject(message.likeInfo, options);
                if (message.topReplys && message.topReplys.length) {
                    object.topReplys = [];
                    for (var j = 0; j < message.topReplys.length; ++j)
                        object.topReplys[j] = $root.knights.viewpoint.ReplyInfo.toObject(message.topReplys[j], options);
                }
                return object;
            };

            /**
             * Converts this ReplyInfo to JSON.
             * @function toJSON
             * @memberof knights.viewpoint.ReplyInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ReplyInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ReplyInfo;
        })();

        viewpoint.GameIntroInfo = (function() {

            /**
             * Properties of a GameIntroInfo.
             * @memberof knights.viewpoint
             * @interface IGameIntroInfo
             * @property {string|null} [introId] GameIntroInfo introId
             * @property {number|Long|null} [gameId] GameIntroInfo gameId
             * @property {knights.viewpoint.IUserInfo|null} [userInfo] GameIntroInfo userInfo
             * @property {string|null} [content] GameIntroInfo content
             * @property {number|null} [likeCnt] GameIntroInfo likeCnt
             * @property {number|null} [replyCnt] GameIntroInfo replyCnt
             * @property {number|Long|null} [updateTime] GameIntroInfo updateTime
             * @property {number|Long|null} [createTime] GameIntroInfo createTime
             * @property {number|null} [status] GameIntroInfo status
             */

            /**
             * Constructs a new GameIntroInfo.
             * @memberof knights.viewpoint
             * @classdesc Represents a GameIntroInfo.
             * @implements IGameIntroInfo
             * @constructor
             * @param {knights.viewpoint.IGameIntroInfo=} [properties] Properties to set
             */
            function GameIntroInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GameIntroInfo introId.
             * @member {string} introId
             * @memberof knights.viewpoint.GameIntroInfo
             * @instance
             */
            GameIntroInfo.prototype.introId = "";

            /**
             * GameIntroInfo gameId.
             * @member {number|Long} gameId
             * @memberof knights.viewpoint.GameIntroInfo
             * @instance
             */
            GameIntroInfo.prototype.gameId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * GameIntroInfo userInfo.
             * @member {knights.viewpoint.IUserInfo|null|undefined} userInfo
             * @memberof knights.viewpoint.GameIntroInfo
             * @instance
             */
            GameIntroInfo.prototype.userInfo = null;

            /**
             * GameIntroInfo content.
             * @member {string} content
             * @memberof knights.viewpoint.GameIntroInfo
             * @instance
             */
            GameIntroInfo.prototype.content = "";

            /**
             * GameIntroInfo likeCnt.
             * @member {number} likeCnt
             * @memberof knights.viewpoint.GameIntroInfo
             * @instance
             */
            GameIntroInfo.prototype.likeCnt = 0;

            /**
             * GameIntroInfo replyCnt.
             * @member {number} replyCnt
             * @memberof knights.viewpoint.GameIntroInfo
             * @instance
             */
            GameIntroInfo.prototype.replyCnt = 0;

            /**
             * GameIntroInfo updateTime.
             * @member {number|Long} updateTime
             * @memberof knights.viewpoint.GameIntroInfo
             * @instance
             */
            GameIntroInfo.prototype.updateTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * GameIntroInfo createTime.
             * @member {number|Long} createTime
             * @memberof knights.viewpoint.GameIntroInfo
             * @instance
             */
            GameIntroInfo.prototype.createTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * GameIntroInfo status.
             * @member {number} status
             * @memberof knights.viewpoint.GameIntroInfo
             * @instance
             */
            GameIntroInfo.prototype.status = 0;

            /**
             * Creates a new GameIntroInfo instance using the specified properties.
             * @function create
             * @memberof knights.viewpoint.GameIntroInfo
             * @static
             * @param {knights.viewpoint.IGameIntroInfo=} [properties] Properties to set
             * @returns {knights.viewpoint.GameIntroInfo} GameIntroInfo instance
             */
            GameIntroInfo.create = function create(properties) {
                return new GameIntroInfo(properties);
            };

            /**
             * Encodes the specified GameIntroInfo message. Does not implicitly {@link knights.viewpoint.GameIntroInfo.verify|verify} messages.
             * @function encode
             * @memberof knights.viewpoint.GameIntroInfo
             * @static
             * @param {knights.viewpoint.IGameIntroInfo} message GameIntroInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GameIntroInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.introId != null && message.hasOwnProperty("introId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.introId);
                if (message.gameId != null && message.hasOwnProperty("gameId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.gameId);
                if (message.userInfo != null && message.hasOwnProperty("userInfo"))
                    $root.knights.viewpoint.UserInfo.encode(message.userInfo, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.content != null && message.hasOwnProperty("content"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.content);
                if (message.likeCnt != null && message.hasOwnProperty("likeCnt"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.likeCnt);
                if (message.replyCnt != null && message.hasOwnProperty("replyCnt"))
                    writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.replyCnt);
                if (message.updateTime != null && message.hasOwnProperty("updateTime"))
                    writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.updateTime);
                if (message.createTime != null && message.hasOwnProperty("createTime"))
                    writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.createTime);
                if (message.status != null && message.hasOwnProperty("status"))
                    writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.status);
                return writer;
            };

            /**
             * Encodes the specified GameIntroInfo message, length delimited. Does not implicitly {@link knights.viewpoint.GameIntroInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof knights.viewpoint.GameIntroInfo
             * @static
             * @param {knights.viewpoint.IGameIntroInfo} message GameIntroInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GameIntroInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GameIntroInfo message from the specified reader or buffer.
             * @function decode
             * @memberof knights.viewpoint.GameIntroInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {knights.viewpoint.GameIntroInfo} GameIntroInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GameIntroInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.knights.viewpoint.GameIntroInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.introId = reader.string();
                        break;
                    case 2:
                        message.gameId = reader.uint64();
                        break;
                    case 3:
                        message.userInfo = $root.knights.viewpoint.UserInfo.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.content = reader.string();
                        break;
                    case 5:
                        message.likeCnt = reader.uint32();
                        break;
                    case 6:
                        message.replyCnt = reader.uint32();
                        break;
                    case 7:
                        message.updateTime = reader.uint64();
                        break;
                    case 8:
                        message.createTime = reader.uint64();
                        break;
                    case 9:
                        message.status = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GameIntroInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof knights.viewpoint.GameIntroInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {knights.viewpoint.GameIntroInfo} GameIntroInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GameIntroInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GameIntroInfo message.
             * @function verify
             * @memberof knights.viewpoint.GameIntroInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GameIntroInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.introId != null && message.hasOwnProperty("introId"))
                    if (!$util.isString(message.introId))
                        return "introId: string expected";
                if (message.gameId != null && message.hasOwnProperty("gameId"))
                    if (!$util.isInteger(message.gameId) && !(message.gameId && $util.isInteger(message.gameId.low) && $util.isInteger(message.gameId.high)))
                        return "gameId: integer|Long expected";
                if (message.userInfo != null && message.hasOwnProperty("userInfo")) {
                    var error = $root.knights.viewpoint.UserInfo.verify(message.userInfo);
                    if (error)
                        return "userInfo." + error;
                }
                if (message.content != null && message.hasOwnProperty("content"))
                    if (!$util.isString(message.content))
                        return "content: string expected";
                if (message.likeCnt != null && message.hasOwnProperty("likeCnt"))
                    if (!$util.isInteger(message.likeCnt))
                        return "likeCnt: integer expected";
                if (message.replyCnt != null && message.hasOwnProperty("replyCnt"))
                    if (!$util.isInteger(message.replyCnt))
                        return "replyCnt: integer expected";
                if (message.updateTime != null && message.hasOwnProperty("updateTime"))
                    if (!$util.isInteger(message.updateTime) && !(message.updateTime && $util.isInteger(message.updateTime.low) && $util.isInteger(message.updateTime.high)))
                        return "updateTime: integer|Long expected";
                if (message.createTime != null && message.hasOwnProperty("createTime"))
                    if (!$util.isInteger(message.createTime) && !(message.createTime && $util.isInteger(message.createTime.low) && $util.isInteger(message.createTime.high)))
                        return "createTime: integer|Long expected";
                if (message.status != null && message.hasOwnProperty("status"))
                    if (!$util.isInteger(message.status))
                        return "status: integer expected";
                return null;
            };

            /**
             * Creates a GameIntroInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof knights.viewpoint.GameIntroInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {knights.viewpoint.GameIntroInfo} GameIntroInfo
             */
            GameIntroInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.knights.viewpoint.GameIntroInfo)
                    return object;
                var message = new $root.knights.viewpoint.GameIntroInfo();
                if (object.introId != null)
                    message.introId = String(object.introId);
                if (object.gameId != null)
                    if ($util.Long)
                        (message.gameId = $util.Long.fromValue(object.gameId)).unsigned = true;
                    else if (typeof object.gameId === "string")
                        message.gameId = parseInt(object.gameId, 10);
                    else if (typeof object.gameId === "number")
                        message.gameId = object.gameId;
                    else if (typeof object.gameId === "object")
                        message.gameId = new $util.LongBits(object.gameId.low >>> 0, object.gameId.high >>> 0).toNumber(true);
                if (object.userInfo != null) {
                    if (typeof object.userInfo !== "object")
                        throw TypeError(".knights.viewpoint.GameIntroInfo.userInfo: object expected");
                    message.userInfo = $root.knights.viewpoint.UserInfo.fromObject(object.userInfo);
                }
                if (object.content != null)
                    message.content = String(object.content);
                if (object.likeCnt != null)
                    message.likeCnt = object.likeCnt >>> 0;
                if (object.replyCnt != null)
                    message.replyCnt = object.replyCnt >>> 0;
                if (object.updateTime != null)
                    if ($util.Long)
                        (message.updateTime = $util.Long.fromValue(object.updateTime)).unsigned = true;
                    else if (typeof object.updateTime === "string")
                        message.updateTime = parseInt(object.updateTime, 10);
                    else if (typeof object.updateTime === "number")
                        message.updateTime = object.updateTime;
                    else if (typeof object.updateTime === "object")
                        message.updateTime = new $util.LongBits(object.updateTime.low >>> 0, object.updateTime.high >>> 0).toNumber(true);
                if (object.createTime != null)
                    if ($util.Long)
                        (message.createTime = $util.Long.fromValue(object.createTime)).unsigned = true;
                    else if (typeof object.createTime === "string")
                        message.createTime = parseInt(object.createTime, 10);
                    else if (typeof object.createTime === "number")
                        message.createTime = object.createTime;
                    else if (typeof object.createTime === "object")
                        message.createTime = new $util.LongBits(object.createTime.low >>> 0, object.createTime.high >>> 0).toNumber(true);
                if (object.status != null)
                    message.status = object.status >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a GameIntroInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof knights.viewpoint.GameIntroInfo
             * @static
             * @param {knights.viewpoint.GameIntroInfo} message GameIntroInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GameIntroInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.introId = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.gameId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.gameId = options.longs === String ? "0" : 0;
                    object.userInfo = null;
                    object.content = "";
                    object.likeCnt = 0;
                    object.replyCnt = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.updateTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.updateTime = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.createTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.createTime = options.longs === String ? "0" : 0;
                    object.status = 0;
                }
                if (message.introId != null && message.hasOwnProperty("introId"))
                    object.introId = message.introId;
                if (message.gameId != null && message.hasOwnProperty("gameId"))
                    if (typeof message.gameId === "number")
                        object.gameId = options.longs === String ? String(message.gameId) : message.gameId;
                    else
                        object.gameId = options.longs === String ? $util.Long.prototype.toString.call(message.gameId) : options.longs === Number ? new $util.LongBits(message.gameId.low >>> 0, message.gameId.high >>> 0).toNumber(true) : message.gameId;
                if (message.userInfo != null && message.hasOwnProperty("userInfo"))
                    object.userInfo = $root.knights.viewpoint.UserInfo.toObject(message.userInfo, options);
                if (message.content != null && message.hasOwnProperty("content"))
                    object.content = message.content;
                if (message.likeCnt != null && message.hasOwnProperty("likeCnt"))
                    object.likeCnt = message.likeCnt;
                if (message.replyCnt != null && message.hasOwnProperty("replyCnt"))
                    object.replyCnt = message.replyCnt;
                if (message.updateTime != null && message.hasOwnProperty("updateTime"))
                    if (typeof message.updateTime === "number")
                        object.updateTime = options.longs === String ? String(message.updateTime) : message.updateTime;
                    else
                        object.updateTime = options.longs === String ? $util.Long.prototype.toString.call(message.updateTime) : options.longs === Number ? new $util.LongBits(message.updateTime.low >>> 0, message.updateTime.high >>> 0).toNumber(true) : message.updateTime;
                if (message.createTime != null && message.hasOwnProperty("createTime"))
                    if (typeof message.createTime === "number")
                        object.createTime = options.longs === String ? String(message.createTime) : message.createTime;
                    else
                        object.createTime = options.longs === String ? $util.Long.prototype.toString.call(message.createTime) : options.longs === Number ? new $util.LongBits(message.createTime.low >>> 0, message.createTime.high >>> 0).toNumber(true) : message.createTime;
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = message.status;
                return object;
            };

            /**
             * Converts this GameIntroInfo to JSON.
             * @function toJSON
             * @memberof knights.viewpoint.GameIntroInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GameIntroInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return GameIntroInfo;
        })();

        viewpoint.UserInfo = (function() {

            /**
             * Properties of a UserInfo.
             * @memberof knights.viewpoint
             * @interface IUserInfo
             * @property {number|Long} uuid UserInfo uuid
             * @property {number|Long|null} [headImgTs] UserInfo headImgTs
             * @property {string|null} [nickname] UserInfo nickname
             * @property {number|null} [sex] UserInfo sex
             * @property {number|Long|null} [updateTs] UserInfo updateTs
             * @property {string|null} [signature] UserInfo signature
             * @property {string|null} [coverPhoto] UserInfo coverPhoto
             * @property {string|null} [certType] UserInfo certType
             * @property {string|null} [certName] UserInfo certName
             * @property {string|null} [remark] UserInfo remark
             * @property {number|Long|null} [unBlockTs] UserInfo unBlockTs
             * @property {knights.viewpoint.IEtiquetteExamInfo|null} [examInfo] UserInfo examInfo
             * @property {knights.viewpoint.IWoreHonorInfo|null} [woreHonorInfo] UserInfo woreHonorInfo
             */

            /**
             * Constructs a new UserInfo.
             * @memberof knights.viewpoint
             * @classdesc Represents a UserInfo.
             * @implements IUserInfo
             * @constructor
             * @param {knights.viewpoint.IUserInfo=} [properties] Properties to set
             */
            function UserInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UserInfo uuid.
             * @member {number|Long} uuid
             * @memberof knights.viewpoint.UserInfo
             * @instance
             */
            UserInfo.prototype.uuid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * UserInfo headImgTs.
             * @member {number|Long} headImgTs
             * @memberof knights.viewpoint.UserInfo
             * @instance
             */
            UserInfo.prototype.headImgTs = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * UserInfo nickname.
             * @member {string} nickname
             * @memberof knights.viewpoint.UserInfo
             * @instance
             */
            UserInfo.prototype.nickname = "";

            /**
             * UserInfo sex.
             * @member {number} sex
             * @memberof knights.viewpoint.UserInfo
             * @instance
             */
            UserInfo.prototype.sex = 0;

            /**
             * UserInfo updateTs.
             * @member {number|Long} updateTs
             * @memberof knights.viewpoint.UserInfo
             * @instance
             */
            UserInfo.prototype.updateTs = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * UserInfo signature.
             * @member {string} signature
             * @memberof knights.viewpoint.UserInfo
             * @instance
             */
            UserInfo.prototype.signature = "";

            /**
             * UserInfo coverPhoto.
             * @member {string} coverPhoto
             * @memberof knights.viewpoint.UserInfo
             * @instance
             */
            UserInfo.prototype.coverPhoto = "";

            /**
             * UserInfo certType.
             * @member {string} certType
             * @memberof knights.viewpoint.UserInfo
             * @instance
             */
            UserInfo.prototype.certType = "";

            /**
             * UserInfo certName.
             * @member {string} certName
             * @memberof knights.viewpoint.UserInfo
             * @instance
             */
            UserInfo.prototype.certName = "";

            /**
             * UserInfo remark.
             * @member {string} remark
             * @memberof knights.viewpoint.UserInfo
             * @instance
             */
            UserInfo.prototype.remark = "";

            /**
             * UserInfo unBlockTs.
             * @member {number|Long} unBlockTs
             * @memberof knights.viewpoint.UserInfo
             * @instance
             */
            UserInfo.prototype.unBlockTs = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * UserInfo examInfo.
             * @member {knights.viewpoint.IEtiquetteExamInfo|null|undefined} examInfo
             * @memberof knights.viewpoint.UserInfo
             * @instance
             */
            UserInfo.prototype.examInfo = null;

            /**
             * UserInfo woreHonorInfo.
             * @member {knights.viewpoint.IWoreHonorInfo|null|undefined} woreHonorInfo
             * @memberof knights.viewpoint.UserInfo
             * @instance
             */
            UserInfo.prototype.woreHonorInfo = null;

            /**
             * Creates a new UserInfo instance using the specified properties.
             * @function create
             * @memberof knights.viewpoint.UserInfo
             * @static
             * @param {knights.viewpoint.IUserInfo=} [properties] Properties to set
             * @returns {knights.viewpoint.UserInfo} UserInfo instance
             */
            UserInfo.create = function create(properties) {
                return new UserInfo(properties);
            };

            /**
             * Encodes the specified UserInfo message. Does not implicitly {@link knights.viewpoint.UserInfo.verify|verify} messages.
             * @function encode
             * @memberof knights.viewpoint.UserInfo
             * @static
             * @param {knights.viewpoint.IUserInfo} message UserInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.uuid);
                if (message.headImgTs != null && message.hasOwnProperty("headImgTs"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.headImgTs);
                if (message.nickname != null && message.hasOwnProperty("nickname"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.nickname);
                if (message.sex != null && message.hasOwnProperty("sex"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.sex);
                if (message.updateTs != null && message.hasOwnProperty("updateTs"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.updateTs);
                if (message.signature != null && message.hasOwnProperty("signature"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.signature);
                if (message.coverPhoto != null && message.hasOwnProperty("coverPhoto"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.coverPhoto);
                if (message.certType != null && message.hasOwnProperty("certType"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.certType);
                if (message.certName != null && message.hasOwnProperty("certName"))
                    writer.uint32(/* id 9, wireType 2 =*/74).string(message.certName);
                if (message.remark != null && message.hasOwnProperty("remark"))
                    writer.uint32(/* id 10, wireType 2 =*/82).string(message.remark);
                if (message.unBlockTs != null && message.hasOwnProperty("unBlockTs"))
                    writer.uint32(/* id 11, wireType 0 =*/88).uint64(message.unBlockTs);
                if (message.examInfo != null && message.hasOwnProperty("examInfo"))
                    $root.knights.viewpoint.EtiquetteExamInfo.encode(message.examInfo, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
                if (message.woreHonorInfo != null && message.hasOwnProperty("woreHonorInfo"))
                    $root.knights.viewpoint.WoreHonorInfo.encode(message.woreHonorInfo, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link knights.viewpoint.UserInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof knights.viewpoint.UserInfo
             * @static
             * @param {knights.viewpoint.IUserInfo} message UserInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a UserInfo message from the specified reader or buffer.
             * @function decode
             * @memberof knights.viewpoint.UserInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {knights.viewpoint.UserInfo} UserInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.knights.viewpoint.UserInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.uuid = reader.uint64();
                        break;
                    case 2:
                        message.headImgTs = reader.uint64();
                        break;
                    case 3:
                        message.nickname = reader.string();
                        break;
                    case 4:
                        message.sex = reader.uint32();
                        break;
                    case 5:
                        message.updateTs = reader.uint64();
                        break;
                    case 6:
                        message.signature = reader.string();
                        break;
                    case 7:
                        message.coverPhoto = reader.string();
                        break;
                    case 8:
                        message.certType = reader.string();
                        break;
                    case 9:
                        message.certName = reader.string();
                        break;
                    case 10:
                        message.remark = reader.string();
                        break;
                    case 11:
                        message.unBlockTs = reader.uint64();
                        break;
                    case 12:
                        message.examInfo = $root.knights.viewpoint.EtiquetteExamInfo.decode(reader, reader.uint32());
                        break;
                    case 13:
                        message.woreHonorInfo = $root.knights.viewpoint.WoreHonorInfo.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("uuid"))
                    throw $util.ProtocolError("missing required 'uuid'", { instance: message });
                return message;
            };

            /**
             * Decodes a UserInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof knights.viewpoint.UserInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {knights.viewpoint.UserInfo} UserInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a UserInfo message.
             * @function verify
             * @memberof knights.viewpoint.UserInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UserInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.uuid) && !(message.uuid && $util.isInteger(message.uuid.low) && $util.isInteger(message.uuid.high)))
                    return "uuid: integer|Long expected";
                if (message.headImgTs != null && message.hasOwnProperty("headImgTs"))
                    if (!$util.isInteger(message.headImgTs) && !(message.headImgTs && $util.isInteger(message.headImgTs.low) && $util.isInteger(message.headImgTs.high)))
                        return "headImgTs: integer|Long expected";
                if (message.nickname != null && message.hasOwnProperty("nickname"))
                    if (!$util.isString(message.nickname))
                        return "nickname: string expected";
                if (message.sex != null && message.hasOwnProperty("sex"))
                    if (!$util.isInteger(message.sex))
                        return "sex: integer expected";
                if (message.updateTs != null && message.hasOwnProperty("updateTs"))
                    if (!$util.isInteger(message.updateTs) && !(message.updateTs && $util.isInteger(message.updateTs.low) && $util.isInteger(message.updateTs.high)))
                        return "updateTs: integer|Long expected";
                if (message.signature != null && message.hasOwnProperty("signature"))
                    if (!$util.isString(message.signature))
                        return "signature: string expected";
                if (message.coverPhoto != null && message.hasOwnProperty("coverPhoto"))
                    if (!$util.isString(message.coverPhoto))
                        return "coverPhoto: string expected";
                if (message.certType != null && message.hasOwnProperty("certType"))
                    if (!$util.isString(message.certType))
                        return "certType: string expected";
                if (message.certName != null && message.hasOwnProperty("certName"))
                    if (!$util.isString(message.certName))
                        return "certName: string expected";
                if (message.remark != null && message.hasOwnProperty("remark"))
                    if (!$util.isString(message.remark))
                        return "remark: string expected";
                if (message.unBlockTs != null && message.hasOwnProperty("unBlockTs"))
                    if (!$util.isInteger(message.unBlockTs) && !(message.unBlockTs && $util.isInteger(message.unBlockTs.low) && $util.isInteger(message.unBlockTs.high)))
                        return "unBlockTs: integer|Long expected";
                if (message.examInfo != null && message.hasOwnProperty("examInfo")) {
                    var error = $root.knights.viewpoint.EtiquetteExamInfo.verify(message.examInfo);
                    if (error)
                        return "examInfo." + error;
                }
                if (message.woreHonorInfo != null && message.hasOwnProperty("woreHonorInfo")) {
                    var error = $root.knights.viewpoint.WoreHonorInfo.verify(message.woreHonorInfo);
                    if (error)
                        return "woreHonorInfo." + error;
                }
                return null;
            };

            /**
             * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof knights.viewpoint.UserInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {knights.viewpoint.UserInfo} UserInfo
             */
            UserInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.knights.viewpoint.UserInfo)
                    return object;
                var message = new $root.knights.viewpoint.UserInfo();
                if (object.uuid != null)
                    if ($util.Long)
                        (message.uuid = $util.Long.fromValue(object.uuid)).unsigned = true;
                    else if (typeof object.uuid === "string")
                        message.uuid = parseInt(object.uuid, 10);
                    else if (typeof object.uuid === "number")
                        message.uuid = object.uuid;
                    else if (typeof object.uuid === "object")
                        message.uuid = new $util.LongBits(object.uuid.low >>> 0, object.uuid.high >>> 0).toNumber(true);
                if (object.headImgTs != null)
                    if ($util.Long)
                        (message.headImgTs = $util.Long.fromValue(object.headImgTs)).unsigned = true;
                    else if (typeof object.headImgTs === "string")
                        message.headImgTs = parseInt(object.headImgTs, 10);
                    else if (typeof object.headImgTs === "number")
                        message.headImgTs = object.headImgTs;
                    else if (typeof object.headImgTs === "object")
                        message.headImgTs = new $util.LongBits(object.headImgTs.low >>> 0, object.headImgTs.high >>> 0).toNumber(true);
                if (object.nickname != null)
                    message.nickname = String(object.nickname);
                if (object.sex != null)
                    message.sex = object.sex >>> 0;
                if (object.updateTs != null)
                    if ($util.Long)
                        (message.updateTs = $util.Long.fromValue(object.updateTs)).unsigned = true;
                    else if (typeof object.updateTs === "string")
                        message.updateTs = parseInt(object.updateTs, 10);
                    else if (typeof object.updateTs === "number")
                        message.updateTs = object.updateTs;
                    else if (typeof object.updateTs === "object")
                        message.updateTs = new $util.LongBits(object.updateTs.low >>> 0, object.updateTs.high >>> 0).toNumber(true);
                if (object.signature != null)
                    message.signature = String(object.signature);
                if (object.coverPhoto != null)
                    message.coverPhoto = String(object.coverPhoto);
                if (object.certType != null)
                    message.certType = String(object.certType);
                if (object.certName != null)
                    message.certName = String(object.certName);
                if (object.remark != null)
                    message.remark = String(object.remark);
                if (object.unBlockTs != null)
                    if ($util.Long)
                        (message.unBlockTs = $util.Long.fromValue(object.unBlockTs)).unsigned = true;
                    else if (typeof object.unBlockTs === "string")
                        message.unBlockTs = parseInt(object.unBlockTs, 10);
                    else if (typeof object.unBlockTs === "number")
                        message.unBlockTs = object.unBlockTs;
                    else if (typeof object.unBlockTs === "object")
                        message.unBlockTs = new $util.LongBits(object.unBlockTs.low >>> 0, object.unBlockTs.high >>> 0).toNumber(true);
                if (object.examInfo != null) {
                    if (typeof object.examInfo !== "object")
                        throw TypeError(".knights.viewpoint.UserInfo.examInfo: object expected");
                    message.examInfo = $root.knights.viewpoint.EtiquetteExamInfo.fromObject(object.examInfo);
                }
                if (object.woreHonorInfo != null) {
                    if (typeof object.woreHonorInfo !== "object")
                        throw TypeError(".knights.viewpoint.UserInfo.woreHonorInfo: object expected");
                    message.woreHonorInfo = $root.knights.viewpoint.WoreHonorInfo.fromObject(object.woreHonorInfo);
                }
                return message;
            };

            /**
             * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof knights.viewpoint.UserInfo
             * @static
             * @param {knights.viewpoint.UserInfo} message UserInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UserInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.uuid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.uuid = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.headImgTs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.headImgTs = options.longs === String ? "0" : 0;
                    object.nickname = "";
                    object.sex = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.updateTs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.updateTs = options.longs === String ? "0" : 0;
                    object.signature = "";
                    object.coverPhoto = "";
                    object.certType = "";
                    object.certName = "";
                    object.remark = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.unBlockTs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.unBlockTs = options.longs === String ? "0" : 0;
                    object.examInfo = null;
                    object.woreHonorInfo = null;
                }
                if (message.uuid != null && message.hasOwnProperty("uuid"))
                    if (typeof message.uuid === "number")
                        object.uuid = options.longs === String ? String(message.uuid) : message.uuid;
                    else
                        object.uuid = options.longs === String ? $util.Long.prototype.toString.call(message.uuid) : options.longs === Number ? new $util.LongBits(message.uuid.low >>> 0, message.uuid.high >>> 0).toNumber(true) : message.uuid;
                if (message.headImgTs != null && message.hasOwnProperty("headImgTs"))
                    if (typeof message.headImgTs === "number")
                        object.headImgTs = options.longs === String ? String(message.headImgTs) : message.headImgTs;
                    else
                        object.headImgTs = options.longs === String ? $util.Long.prototype.toString.call(message.headImgTs) : options.longs === Number ? new $util.LongBits(message.headImgTs.low >>> 0, message.headImgTs.high >>> 0).toNumber(true) : message.headImgTs;
                if (message.nickname != null && message.hasOwnProperty("nickname"))
                    object.nickname = message.nickname;
                if (message.sex != null && message.hasOwnProperty("sex"))
                    object.sex = message.sex;
                if (message.updateTs != null && message.hasOwnProperty("updateTs"))
                    if (typeof message.updateTs === "number")
                        object.updateTs = options.longs === String ? String(message.updateTs) : message.updateTs;
                    else
                        object.updateTs = options.longs === String ? $util.Long.prototype.toString.call(message.updateTs) : options.longs === Number ? new $util.LongBits(message.updateTs.low >>> 0, message.updateTs.high >>> 0).toNumber(true) : message.updateTs;
                if (message.signature != null && message.hasOwnProperty("signature"))
                    object.signature = message.signature;
                if (message.coverPhoto != null && message.hasOwnProperty("coverPhoto"))
                    object.coverPhoto = message.coverPhoto;
                if (message.certType != null && message.hasOwnProperty("certType"))
                    object.certType = message.certType;
                if (message.certName != null && message.hasOwnProperty("certName"))
                    object.certName = message.certName;
                if (message.remark != null && message.hasOwnProperty("remark"))
                    object.remark = message.remark;
                if (message.unBlockTs != null && message.hasOwnProperty("unBlockTs"))
                    if (typeof message.unBlockTs === "number")
                        object.unBlockTs = options.longs === String ? String(message.unBlockTs) : message.unBlockTs;
                    else
                        object.unBlockTs = options.longs === String ? $util.Long.prototype.toString.call(message.unBlockTs) : options.longs === Number ? new $util.LongBits(message.unBlockTs.low >>> 0, message.unBlockTs.high >>> 0).toNumber(true) : message.unBlockTs;
                if (message.examInfo != null && message.hasOwnProperty("examInfo"))
                    object.examInfo = $root.knights.viewpoint.EtiquetteExamInfo.toObject(message.examInfo, options);
                if (message.woreHonorInfo != null && message.hasOwnProperty("woreHonorInfo"))
                    object.woreHonorInfo = $root.knights.viewpoint.WoreHonorInfo.toObject(message.woreHonorInfo, options);
                return object;
            };

            /**
             * Converts this UserInfo to JSON.
             * @function toJSON
             * @memberof knights.viewpoint.UserInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UserInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return UserInfo;
        })();

        viewpoint.ActivityInfo = (function() {

            /**
             * Properties of an ActivityInfo.
             * @memberof knights.viewpoint
             * @interface IActivityInfo
             * @property {number|null} [actId] ActivityInfo actId
             * @property {string|null} [name] ActivityInfo name
             * @property {number|null} [type] ActivityInfo type
             * @property {number|Long|null} [beginTime] ActivityInfo beginTime
             * @property {number|Long|null} [endTime] ActivityInfo endTime
             * @property {number|null} [status] ActivityInfo status
             * @property {string|null} [actUrl] ActivityInfo actUrl
             * @property {number|Long|null} [gameId] ActivityInfo gameId
             * @property {string|null} [icon] ActivityInfo icon
             */

            /**
             * Constructs a new ActivityInfo.
             * @memberof knights.viewpoint
             * @classdesc Represents an ActivityInfo.
             * @implements IActivityInfo
             * @constructor
             * @param {knights.viewpoint.IActivityInfo=} [properties] Properties to set
             */
            function ActivityInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ActivityInfo actId.
             * @member {number} actId
             * @memberof knights.viewpoint.ActivityInfo
             * @instance
             */
            ActivityInfo.prototype.actId = 0;

            /**
             * ActivityInfo name.
             * @member {string} name
             * @memberof knights.viewpoint.ActivityInfo
             * @instance
             */
            ActivityInfo.prototype.name = "";

            /**
             * ActivityInfo type.
             * @member {number} type
             * @memberof knights.viewpoint.ActivityInfo
             * @instance
             */
            ActivityInfo.prototype.type = 0;

            /**
             * ActivityInfo beginTime.
             * @member {number|Long} beginTime
             * @memberof knights.viewpoint.ActivityInfo
             * @instance
             */
            ActivityInfo.prototype.beginTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * ActivityInfo endTime.
             * @member {number|Long} endTime
             * @memberof knights.viewpoint.ActivityInfo
             * @instance
             */
            ActivityInfo.prototype.endTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * ActivityInfo status.
             * @member {number} status
             * @memberof knights.viewpoint.ActivityInfo
             * @instance
             */
            ActivityInfo.prototype.status = 0;

            /**
             * ActivityInfo actUrl.
             * @member {string} actUrl
             * @memberof knights.viewpoint.ActivityInfo
             * @instance
             */
            ActivityInfo.prototype.actUrl = "";

            /**
             * ActivityInfo gameId.
             * @member {number|Long} gameId
             * @memberof knights.viewpoint.ActivityInfo
             * @instance
             */
            ActivityInfo.prototype.gameId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * ActivityInfo icon.
             * @member {string} icon
             * @memberof knights.viewpoint.ActivityInfo
             * @instance
             */
            ActivityInfo.prototype.icon = "";

            /**
             * Creates a new ActivityInfo instance using the specified properties.
             * @function create
             * @memberof knights.viewpoint.ActivityInfo
             * @static
             * @param {knights.viewpoint.IActivityInfo=} [properties] Properties to set
             * @returns {knights.viewpoint.ActivityInfo} ActivityInfo instance
             */
            ActivityInfo.create = function create(properties) {
                return new ActivityInfo(properties);
            };

            /**
             * Encodes the specified ActivityInfo message. Does not implicitly {@link knights.viewpoint.ActivityInfo.verify|verify} messages.
             * @function encode
             * @memberof knights.viewpoint.ActivityInfo
             * @static
             * @param {knights.viewpoint.IActivityInfo} message ActivityInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ActivityInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.actId != null && message.hasOwnProperty("actId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.actId);
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.type != null && message.hasOwnProperty("type"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.type);
                if (message.beginTime != null && message.hasOwnProperty("beginTime"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.beginTime);
                if (message.endTime != null && message.hasOwnProperty("endTime"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.endTime);
                if (message.status != null && message.hasOwnProperty("status"))
                    writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.status);
                if (message.actUrl != null && message.hasOwnProperty("actUrl"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.actUrl);
                if (message.gameId != null && message.hasOwnProperty("gameId"))
                    writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.gameId);
                if (message.icon != null && message.hasOwnProperty("icon"))
                    writer.uint32(/* id 9, wireType 2 =*/74).string(message.icon);
                return writer;
            };

            /**
             * Encodes the specified ActivityInfo message, length delimited. Does not implicitly {@link knights.viewpoint.ActivityInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof knights.viewpoint.ActivityInfo
             * @static
             * @param {knights.viewpoint.IActivityInfo} message ActivityInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ActivityInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an ActivityInfo message from the specified reader or buffer.
             * @function decode
             * @memberof knights.viewpoint.ActivityInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {knights.viewpoint.ActivityInfo} ActivityInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ActivityInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.knights.viewpoint.ActivityInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.actId = reader.uint32();
                        break;
                    case 2:
                        message.name = reader.string();
                        break;
                    case 3:
                        message.type = reader.uint32();
                        break;
                    case 4:
                        message.beginTime = reader.uint64();
                        break;
                    case 5:
                        message.endTime = reader.uint64();
                        break;
                    case 6:
                        message.status = reader.uint32();
                        break;
                    case 7:
                        message.actUrl = reader.string();
                        break;
                    case 8:
                        message.gameId = reader.uint64();
                        break;
                    case 9:
                        message.icon = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an ActivityInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof knights.viewpoint.ActivityInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {knights.viewpoint.ActivityInfo} ActivityInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ActivityInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an ActivityInfo message.
             * @function verify
             * @memberof knights.viewpoint.ActivityInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ActivityInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.actId != null && message.hasOwnProperty("actId"))
                    if (!$util.isInteger(message.actId))
                        return "actId: integer expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.type != null && message.hasOwnProperty("type"))
                    if (!$util.isInteger(message.type))
                        return "type: integer expected";
                if (message.beginTime != null && message.hasOwnProperty("beginTime"))
                    if (!$util.isInteger(message.beginTime) && !(message.beginTime && $util.isInteger(message.beginTime.low) && $util.isInteger(message.beginTime.high)))
                        return "beginTime: integer|Long expected";
                if (message.endTime != null && message.hasOwnProperty("endTime"))
                    if (!$util.isInteger(message.endTime) && !(message.endTime && $util.isInteger(message.endTime.low) && $util.isInteger(message.endTime.high)))
                        return "endTime: integer|Long expected";
                if (message.status != null && message.hasOwnProperty("status"))
                    if (!$util.isInteger(message.status))
                        return "status: integer expected";
                if (message.actUrl != null && message.hasOwnProperty("actUrl"))
                    if (!$util.isString(message.actUrl))
                        return "actUrl: string expected";
                if (message.gameId != null && message.hasOwnProperty("gameId"))
                    if (!$util.isInteger(message.gameId) && !(message.gameId && $util.isInteger(message.gameId.low) && $util.isInteger(message.gameId.high)))
                        return "gameId: integer|Long expected";
                if (message.icon != null && message.hasOwnProperty("icon"))
                    if (!$util.isString(message.icon))
                        return "icon: string expected";
                return null;
            };

            /**
             * Creates an ActivityInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof knights.viewpoint.ActivityInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {knights.viewpoint.ActivityInfo} ActivityInfo
             */
            ActivityInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.knights.viewpoint.ActivityInfo)
                    return object;
                var message = new $root.knights.viewpoint.ActivityInfo();
                if (object.actId != null)
                    message.actId = object.actId >>> 0;
                if (object.name != null)
                    message.name = String(object.name);
                if (object.type != null)
                    message.type = object.type >>> 0;
                if (object.beginTime != null)
                    if ($util.Long)
                        (message.beginTime = $util.Long.fromValue(object.beginTime)).unsigned = true;
                    else if (typeof object.beginTime === "string")
                        message.beginTime = parseInt(object.beginTime, 10);
                    else if (typeof object.beginTime === "number")
                        message.beginTime = object.beginTime;
                    else if (typeof object.beginTime === "object")
                        message.beginTime = new $util.LongBits(object.beginTime.low >>> 0, object.beginTime.high >>> 0).toNumber(true);
                if (object.endTime != null)
                    if ($util.Long)
                        (message.endTime = $util.Long.fromValue(object.endTime)).unsigned = true;
                    else if (typeof object.endTime === "string")
                        message.endTime = parseInt(object.endTime, 10);
                    else if (typeof object.endTime === "number")
                        message.endTime = object.endTime;
                    else if (typeof object.endTime === "object")
                        message.endTime = new $util.LongBits(object.endTime.low >>> 0, object.endTime.high >>> 0).toNumber(true);
                if (object.status != null)
                    message.status = object.status >>> 0;
                if (object.actUrl != null)
                    message.actUrl = String(object.actUrl);
                if (object.gameId != null)
                    if ($util.Long)
                        (message.gameId = $util.Long.fromValue(object.gameId)).unsigned = true;
                    else if (typeof object.gameId === "string")
                        message.gameId = parseInt(object.gameId, 10);
                    else if (typeof object.gameId === "number")
                        message.gameId = object.gameId;
                    else if (typeof object.gameId === "object")
                        message.gameId = new $util.LongBits(object.gameId.low >>> 0, object.gameId.high >>> 0).toNumber(true);
                if (object.icon != null)
                    message.icon = String(object.icon);
                return message;
            };

            /**
             * Creates a plain object from an ActivityInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof knights.viewpoint.ActivityInfo
             * @static
             * @param {knights.viewpoint.ActivityInfo} message ActivityInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ActivityInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.actId = 0;
                    object.name = "";
                    object.type = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.beginTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.beginTime = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.endTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.endTime = options.longs === String ? "0" : 0;
                    object.status = 0;
                    object.actUrl = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.gameId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.gameId = options.longs === String ? "0" : 0;
                    object.icon = "";
                }
                if (message.actId != null && message.hasOwnProperty("actId"))
                    object.actId = message.actId;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = message.type;
                if (message.beginTime != null && message.hasOwnProperty("beginTime"))
                    if (typeof message.beginTime === "number")
                        object.beginTime = options.longs === String ? String(message.beginTime) : message.beginTime;
                    else
                        object.beginTime = options.longs === String ? $util.Long.prototype.toString.call(message.beginTime) : options.longs === Number ? new $util.LongBits(message.beginTime.low >>> 0, message.beginTime.high >>> 0).toNumber(true) : message.beginTime;
                if (message.endTime != null && message.hasOwnProperty("endTime"))
                    if (typeof message.endTime === "number")
                        object.endTime = options.longs === String ? String(message.endTime) : message.endTime;
                    else
                        object.endTime = options.longs === String ? $util.Long.prototype.toString.call(message.endTime) : options.longs === Number ? new $util.LongBits(message.endTime.low >>> 0, message.endTime.high >>> 0).toNumber(true) : message.endTime;
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = message.status;
                if (message.actUrl != null && message.hasOwnProperty("actUrl"))
                    object.actUrl = message.actUrl;
                if (message.gameId != null && message.hasOwnProperty("gameId"))
                    if (typeof message.gameId === "number")
                        object.gameId = options.longs === String ? String(message.gameId) : message.gameId;
                    else
                        object.gameId = options.longs === String ? $util.Long.prototype.toString.call(message.gameId) : options.longs === Number ? new $util.LongBits(message.gameId.low >>> 0, message.gameId.high >>> 0).toNumber(true) : message.gameId;
                if (message.icon != null && message.hasOwnProperty("icon"))
                    object.icon = message.icon;
                return object;
            };

            /**
             * Converts this ActivityInfo to JSON.
             * @function toJSON
             * @memberof knights.viewpoint.ActivityInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ActivityInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ActivityInfo;
        })();

        viewpoint.VideoInfo = (function() {

            /**
             * Properties of a VideoInfo.
             * @memberof knights.viewpoint
             * @interface IVideoInfo
             * @property {string|null} [videoId] VideoInfo videoId
             * @property {string|null} [url] VideoInfo url
             * @property {number|null} [high] VideoInfo high
             * @property {number|null} [width] VideoInfo width
             * @property {number|null} [size] VideoInfo size
             * @property {string|null} [cover] VideoInfo cover
             * @property {number|null} [playCnt] VideoInfo playCnt
             * @property {number|null} [duration] VideoInfo duration
             */

            /**
             * Constructs a new VideoInfo.
             * @memberof knights.viewpoint
             * @classdesc Represents a VideoInfo.
             * @implements IVideoInfo
             * @constructor
             * @param {knights.viewpoint.IVideoInfo=} [properties] Properties to set
             */
            function VideoInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * VideoInfo videoId.
             * @member {string} videoId
             * @memberof knights.viewpoint.VideoInfo
             * @instance
             */
            VideoInfo.prototype.videoId = "";

            /**
             * VideoInfo url.
             * @member {string} url
             * @memberof knights.viewpoint.VideoInfo
             * @instance
             */
            VideoInfo.prototype.url = "";

            /**
             * VideoInfo high.
             * @member {number} high
             * @memberof knights.viewpoint.VideoInfo
             * @instance
             */
            VideoInfo.prototype.high = 0;

            /**
             * VideoInfo width.
             * @member {number} width
             * @memberof knights.viewpoint.VideoInfo
             * @instance
             */
            VideoInfo.prototype.width = 0;

            /**
             * VideoInfo size.
             * @member {number} size
             * @memberof knights.viewpoint.VideoInfo
             * @instance
             */
            VideoInfo.prototype.size = 0;

            /**
             * VideoInfo cover.
             * @member {string} cover
             * @memberof knights.viewpoint.VideoInfo
             * @instance
             */
            VideoInfo.prototype.cover = "";

            /**
             * VideoInfo playCnt.
             * @member {number} playCnt
             * @memberof knights.viewpoint.VideoInfo
             * @instance
             */
            VideoInfo.prototype.playCnt = 0;

            /**
             * VideoInfo duration.
             * @member {number} duration
             * @memberof knights.viewpoint.VideoInfo
             * @instance
             */
            VideoInfo.prototype.duration = 0;

            /**
             * Creates a new VideoInfo instance using the specified properties.
             * @function create
             * @memberof knights.viewpoint.VideoInfo
             * @static
             * @param {knights.viewpoint.IVideoInfo=} [properties] Properties to set
             * @returns {knights.viewpoint.VideoInfo} VideoInfo instance
             */
            VideoInfo.create = function create(properties) {
                return new VideoInfo(properties);
            };

            /**
             * Encodes the specified VideoInfo message. Does not implicitly {@link knights.viewpoint.VideoInfo.verify|verify} messages.
             * @function encode
             * @memberof knights.viewpoint.VideoInfo
             * @static
             * @param {knights.viewpoint.IVideoInfo} message VideoInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            VideoInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.videoId != null && message.hasOwnProperty("videoId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.videoId);
                if (message.url != null && message.hasOwnProperty("url"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.url);
                if (message.high != null && message.hasOwnProperty("high"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.high);
                if (message.width != null && message.hasOwnProperty("width"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.width);
                if (message.size != null && message.hasOwnProperty("size"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.size);
                if (message.cover != null && message.hasOwnProperty("cover"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.cover);
                if (message.playCnt != null && message.hasOwnProperty("playCnt"))
                    writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.playCnt);
                if (message.duration != null && message.hasOwnProperty("duration"))
                    writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.duration);
                return writer;
            };

            /**
             * Encodes the specified VideoInfo message, length delimited. Does not implicitly {@link knights.viewpoint.VideoInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof knights.viewpoint.VideoInfo
             * @static
             * @param {knights.viewpoint.IVideoInfo} message VideoInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            VideoInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a VideoInfo message from the specified reader or buffer.
             * @function decode
             * @memberof knights.viewpoint.VideoInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {knights.viewpoint.VideoInfo} VideoInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            VideoInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.knights.viewpoint.VideoInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.videoId = reader.string();
                        break;
                    case 2:
                        message.url = reader.string();
                        break;
                    case 3:
                        message.high = reader.uint32();
                        break;
                    case 4:
                        message.width = reader.uint32();
                        break;
                    case 5:
                        message.size = reader.uint32();
                        break;
                    case 6:
                        message.cover = reader.string();
                        break;
                    case 7:
                        message.playCnt = reader.uint32();
                        break;
                    case 8:
                        message.duration = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a VideoInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof knights.viewpoint.VideoInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {knights.viewpoint.VideoInfo} VideoInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            VideoInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a VideoInfo message.
             * @function verify
             * @memberof knights.viewpoint.VideoInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            VideoInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.videoId != null && message.hasOwnProperty("videoId"))
                    if (!$util.isString(message.videoId))
                        return "videoId: string expected";
                if (message.url != null && message.hasOwnProperty("url"))
                    if (!$util.isString(message.url))
                        return "url: string expected";
                if (message.high != null && message.hasOwnProperty("high"))
                    if (!$util.isInteger(message.high))
                        return "high: integer expected";
                if (message.width != null && message.hasOwnProperty("width"))
                    if (!$util.isInteger(message.width))
                        return "width: integer expected";
                if (message.size != null && message.hasOwnProperty("size"))
                    if (!$util.isInteger(message.size))
                        return "size: integer expected";
                if (message.cover != null && message.hasOwnProperty("cover"))
                    if (!$util.isString(message.cover))
                        return "cover: string expected";
                if (message.playCnt != null && message.hasOwnProperty("playCnt"))
                    if (!$util.isInteger(message.playCnt))
                        return "playCnt: integer expected";
                if (message.duration != null && message.hasOwnProperty("duration"))
                    if (!$util.isInteger(message.duration))
                        return "duration: integer expected";
                return null;
            };

            /**
             * Creates a VideoInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof knights.viewpoint.VideoInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {knights.viewpoint.VideoInfo} VideoInfo
             */
            VideoInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.knights.viewpoint.VideoInfo)
                    return object;
                var message = new $root.knights.viewpoint.VideoInfo();
                if (object.videoId != null)
                    message.videoId = String(object.videoId);
                if (object.url != null)
                    message.url = String(object.url);
                if (object.high != null)
                    message.high = object.high >>> 0;
                if (object.width != null)
                    message.width = object.width >>> 0;
                if (object.size != null)
                    message.size = object.size >>> 0;
                if (object.cover != null)
                    message.cover = String(object.cover);
                if (object.playCnt != null)
                    message.playCnt = object.playCnt >>> 0;
                if (object.duration != null)
                    message.duration = object.duration >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a VideoInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof knights.viewpoint.VideoInfo
             * @static
             * @param {knights.viewpoint.VideoInfo} message VideoInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            VideoInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.videoId = "";
                    object.url = "";
                    object.high = 0;
                    object.width = 0;
                    object.size = 0;
                    object.cover = "";
                    object.playCnt = 0;
                    object.duration = 0;
                }
                if (message.videoId != null && message.hasOwnProperty("videoId"))
                    object.videoId = message.videoId;
                if (message.url != null && message.hasOwnProperty("url"))
                    object.url = message.url;
                if (message.high != null && message.hasOwnProperty("high"))
                    object.high = message.high;
                if (message.width != null && message.hasOwnProperty("width"))
                    object.width = message.width;
                if (message.size != null && message.hasOwnProperty("size"))
                    object.size = message.size;
                if (message.cover != null && message.hasOwnProperty("cover"))
                    object.cover = message.cover;
                if (message.playCnt != null && message.hasOwnProperty("playCnt"))
                    object.playCnt = message.playCnt;
                if (message.duration != null && message.hasOwnProperty("duration"))
                    object.duration = message.duration;
                return object;
            };

            /**
             * Converts this VideoInfo to JSON.
             * @function toJSON
             * @memberof knights.viewpoint.VideoInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            VideoInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return VideoInfo;
        })();

        viewpoint.SimpleTopicInfo = (function() {

            /**
             * Properties of a SimpleTopicInfo.
             * @memberof knights.viewpoint
             * @interface ISimpleTopicInfo
             * @property {number|null} [topicId] SimpleTopicInfo topicId
             * @property {string|null} [name] SimpleTopicInfo name
             */

            /**
             * Constructs a new SimpleTopicInfo.
             * @memberof knights.viewpoint
             * @classdesc Represents a SimpleTopicInfo.
             * @implements ISimpleTopicInfo
             * @constructor
             * @param {knights.viewpoint.ISimpleTopicInfo=} [properties] Properties to set
             */
            function SimpleTopicInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SimpleTopicInfo topicId.
             * @member {number} topicId
             * @memberof knights.viewpoint.SimpleTopicInfo
             * @instance
             */
            SimpleTopicInfo.prototype.topicId = 0;

            /**
             * SimpleTopicInfo name.
             * @member {string} name
             * @memberof knights.viewpoint.SimpleTopicInfo
             * @instance
             */
            SimpleTopicInfo.prototype.name = "";

            /**
             * Creates a new SimpleTopicInfo instance using the specified properties.
             * @function create
             * @memberof knights.viewpoint.SimpleTopicInfo
             * @static
             * @param {knights.viewpoint.ISimpleTopicInfo=} [properties] Properties to set
             * @returns {knights.viewpoint.SimpleTopicInfo} SimpleTopicInfo instance
             */
            SimpleTopicInfo.create = function create(properties) {
                return new SimpleTopicInfo(properties);
            };

            /**
             * Encodes the specified SimpleTopicInfo message. Does not implicitly {@link knights.viewpoint.SimpleTopicInfo.verify|verify} messages.
             * @function encode
             * @memberof knights.viewpoint.SimpleTopicInfo
             * @static
             * @param {knights.viewpoint.ISimpleTopicInfo} message SimpleTopicInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SimpleTopicInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.topicId != null && message.hasOwnProperty("topicId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.topicId);
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                return writer;
            };

            /**
             * Encodes the specified SimpleTopicInfo message, length delimited. Does not implicitly {@link knights.viewpoint.SimpleTopicInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof knights.viewpoint.SimpleTopicInfo
             * @static
             * @param {knights.viewpoint.ISimpleTopicInfo} message SimpleTopicInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SimpleTopicInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SimpleTopicInfo message from the specified reader or buffer.
             * @function decode
             * @memberof knights.viewpoint.SimpleTopicInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {knights.viewpoint.SimpleTopicInfo} SimpleTopicInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SimpleTopicInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.knights.viewpoint.SimpleTopicInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.topicId = reader.uint32();
                        break;
                    case 2:
                        message.name = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SimpleTopicInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof knights.viewpoint.SimpleTopicInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {knights.viewpoint.SimpleTopicInfo} SimpleTopicInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SimpleTopicInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SimpleTopicInfo message.
             * @function verify
             * @memberof knights.viewpoint.SimpleTopicInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SimpleTopicInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.topicId != null && message.hasOwnProperty("topicId"))
                    if (!$util.isInteger(message.topicId))
                        return "topicId: integer expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                return null;
            };

            /**
             * Creates a SimpleTopicInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof knights.viewpoint.SimpleTopicInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {knights.viewpoint.SimpleTopicInfo} SimpleTopicInfo
             */
            SimpleTopicInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.knights.viewpoint.SimpleTopicInfo)
                    return object;
                var message = new $root.knights.viewpoint.SimpleTopicInfo();
                if (object.topicId != null)
                    message.topicId = object.topicId >>> 0;
                if (object.name != null)
                    message.name = String(object.name);
                return message;
            };

            /**
             * Creates a plain object from a SimpleTopicInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof knights.viewpoint.SimpleTopicInfo
             * @static
             * @param {knights.viewpoint.SimpleTopicInfo} message SimpleTopicInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SimpleTopicInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.topicId = 0;
                    object.name = "";
                }
                if (message.topicId != null && message.hasOwnProperty("topicId"))
                    object.topicId = message.topicId;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                return object;
            };

            /**
             * Converts this SimpleTopicInfo to JSON.
             * @function toJSON
             * @memberof knights.viewpoint.SimpleTopicInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SimpleTopicInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return SimpleTopicInfo;
        })();

        viewpoint.VerticalInRow = (function() {

            /**
             * Properties of a VerticalInRow.
             * @memberof knights.viewpoint
             * @interface IVerticalInRow
             * @property {number} contentType VerticalInRow contentType
             * @property {number|null} [positionIndex] VerticalInRow positionIndex
             * @property {string|null} [content] VerticalInRow content
             * @property {knights.viewpoint.IVideoInfo|null} [videoInfo] VerticalInRow videoInfo
             */

            /**
             * Constructs a new VerticalInRow.
             * @memberof knights.viewpoint
             * @classdesc Represents a VerticalInRow.
             * @implements IVerticalInRow
             * @constructor
             * @param {knights.viewpoint.IVerticalInRow=} [properties] Properties to set
             */
            function VerticalInRow(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * VerticalInRow contentType.
             * @member {number} contentType
             * @memberof knights.viewpoint.VerticalInRow
             * @instance
             */
            VerticalInRow.prototype.contentType = 0;

            /**
             * VerticalInRow positionIndex.
             * @member {number} positionIndex
             * @memberof knights.viewpoint.VerticalInRow
             * @instance
             */
            VerticalInRow.prototype.positionIndex = 0;

            /**
             * VerticalInRow content.
             * @member {string} content
             * @memberof knights.viewpoint.VerticalInRow
             * @instance
             */
            VerticalInRow.prototype.content = "";

            /**
             * VerticalInRow videoInfo.
             * @member {knights.viewpoint.IVideoInfo|null|undefined} videoInfo
             * @memberof knights.viewpoint.VerticalInRow
             * @instance
             */
            VerticalInRow.prototype.videoInfo = null;

            /**
             * Creates a new VerticalInRow instance using the specified properties.
             * @function create
             * @memberof knights.viewpoint.VerticalInRow
             * @static
             * @param {knights.viewpoint.IVerticalInRow=} [properties] Properties to set
             * @returns {knights.viewpoint.VerticalInRow} VerticalInRow instance
             */
            VerticalInRow.create = function create(properties) {
                return new VerticalInRow(properties);
            };

            /**
             * Encodes the specified VerticalInRow message. Does not implicitly {@link knights.viewpoint.VerticalInRow.verify|verify} messages.
             * @function encode
             * @memberof knights.viewpoint.VerticalInRow
             * @static
             * @param {knights.viewpoint.IVerticalInRow} message VerticalInRow message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            VerticalInRow.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.contentType);
                if (message.positionIndex != null && message.hasOwnProperty("positionIndex"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.positionIndex);
                if (message.content != null && message.hasOwnProperty("content"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.content);
                if (message.videoInfo != null && message.hasOwnProperty("videoInfo"))
                    $root.knights.viewpoint.VideoInfo.encode(message.videoInfo, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified VerticalInRow message, length delimited. Does not implicitly {@link knights.viewpoint.VerticalInRow.verify|verify} messages.
             * @function encodeDelimited
             * @memberof knights.viewpoint.VerticalInRow
             * @static
             * @param {knights.viewpoint.IVerticalInRow} message VerticalInRow message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            VerticalInRow.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a VerticalInRow message from the specified reader or buffer.
             * @function decode
             * @memberof knights.viewpoint.VerticalInRow
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {knights.viewpoint.VerticalInRow} VerticalInRow
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            VerticalInRow.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.knights.viewpoint.VerticalInRow();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.contentType = reader.uint32();
                        break;
                    case 2:
                        message.positionIndex = reader.uint32();
                        break;
                    case 3:
                        message.content = reader.string();
                        break;
                    case 4:
                        message.videoInfo = $root.knights.viewpoint.VideoInfo.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("contentType"))
                    throw $util.ProtocolError("missing required 'contentType'", { instance: message });
                return message;
            };

            /**
             * Decodes a VerticalInRow message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof knights.viewpoint.VerticalInRow
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {knights.viewpoint.VerticalInRow} VerticalInRow
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            VerticalInRow.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a VerticalInRow message.
             * @function verify
             * @memberof knights.viewpoint.VerticalInRow
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            VerticalInRow.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.contentType))
                    return "contentType: integer expected";
                if (message.positionIndex != null && message.hasOwnProperty("positionIndex"))
                    if (!$util.isInteger(message.positionIndex))
                        return "positionIndex: integer expected";
                if (message.content != null && message.hasOwnProperty("content"))
                    if (!$util.isString(message.content))
                        return "content: string expected";
                if (message.videoInfo != null && message.hasOwnProperty("videoInfo")) {
                    var error = $root.knights.viewpoint.VideoInfo.verify(message.videoInfo);
                    if (error)
                        return "videoInfo." + error;
                }
                return null;
            };

            /**
             * Creates a VerticalInRow message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof knights.viewpoint.VerticalInRow
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {knights.viewpoint.VerticalInRow} VerticalInRow
             */
            VerticalInRow.fromObject = function fromObject(object) {
                if (object instanceof $root.knights.viewpoint.VerticalInRow)
                    return object;
                var message = new $root.knights.viewpoint.VerticalInRow();
                if (object.contentType != null)
                    message.contentType = object.contentType >>> 0;
                if (object.positionIndex != null)
                    message.positionIndex = object.positionIndex >>> 0;
                if (object.content != null)
                    message.content = String(object.content);
                if (object.videoInfo != null) {
                    if (typeof object.videoInfo !== "object")
                        throw TypeError(".knights.viewpoint.VerticalInRow.videoInfo: object expected");
                    message.videoInfo = $root.knights.viewpoint.VideoInfo.fromObject(object.videoInfo);
                }
                return message;
            };

            /**
             * Creates a plain object from a VerticalInRow message. Also converts values to other types if specified.
             * @function toObject
             * @memberof knights.viewpoint.VerticalInRow
             * @static
             * @param {knights.viewpoint.VerticalInRow} message VerticalInRow
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            VerticalInRow.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.contentType = 0;
                    object.positionIndex = 0;
                    object.content = "";
                    object.videoInfo = null;
                }
                if (message.contentType != null && message.hasOwnProperty("contentType"))
                    object.contentType = message.contentType;
                if (message.positionIndex != null && message.hasOwnProperty("positionIndex"))
                    object.positionIndex = message.positionIndex;
                if (message.content != null && message.hasOwnProperty("content"))
                    object.content = message.content;
                if (message.videoInfo != null && message.hasOwnProperty("videoInfo"))
                    object.videoInfo = $root.knights.viewpoint.VideoInfo.toObject(message.videoInfo, options);
                return object;
            };

            /**
             * Converts this VerticalInRow to JSON.
             * @function toJSON
             * @memberof knights.viewpoint.VerticalInRow
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            VerticalInRow.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return VerticalInRow;
        })();

        viewpoint.Horizontal = (function() {

            /**
             * Properties of a Horizontal.
             * @memberof knights.viewpoint
             * @interface IHorizontal
             * @property {number|null} [positionIndex] Horizontal positionIndex
             * @property {Array.<knights.viewpoint.IVerticalInRow>|null} [verticalInRow] Horizontal verticalInRow
             * @property {number|null} [templateType] Horizontal templateType
             */

            /**
             * Constructs a new Horizontal.
             * @memberof knights.viewpoint
             * @classdesc Represents a Horizontal.
             * @implements IHorizontal
             * @constructor
             * @param {knights.viewpoint.IHorizontal=} [properties] Properties to set
             */
            function Horizontal(properties) {
                this.verticalInRow = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Horizontal positionIndex.
             * @member {number} positionIndex
             * @memberof knights.viewpoint.Horizontal
             * @instance
             */
            Horizontal.prototype.positionIndex = 0;

            /**
             * Horizontal verticalInRow.
             * @member {Array.<knights.viewpoint.IVerticalInRow>} verticalInRow
             * @memberof knights.viewpoint.Horizontal
             * @instance
             */
            Horizontal.prototype.verticalInRow = $util.emptyArray;

            /**
             * Horizontal templateType.
             * @member {number} templateType
             * @memberof knights.viewpoint.Horizontal
             * @instance
             */
            Horizontal.prototype.templateType = 0;

            /**
             * Creates a new Horizontal instance using the specified properties.
             * @function create
             * @memberof knights.viewpoint.Horizontal
             * @static
             * @param {knights.viewpoint.IHorizontal=} [properties] Properties to set
             * @returns {knights.viewpoint.Horizontal} Horizontal instance
             */
            Horizontal.create = function create(properties) {
                return new Horizontal(properties);
            };

            /**
             * Encodes the specified Horizontal message. Does not implicitly {@link knights.viewpoint.Horizontal.verify|verify} messages.
             * @function encode
             * @memberof knights.viewpoint.Horizontal
             * @static
             * @param {knights.viewpoint.IHorizontal} message Horizontal message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Horizontal.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.positionIndex != null && message.hasOwnProperty("positionIndex"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.positionIndex);
                if (message.verticalInRow != null && message.verticalInRow.length)
                    for (var i = 0; i < message.verticalInRow.length; ++i)
                        $root.knights.viewpoint.VerticalInRow.encode(message.verticalInRow[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.templateType != null && message.hasOwnProperty("templateType"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.templateType);
                return writer;
            };

            /**
             * Encodes the specified Horizontal message, length delimited. Does not implicitly {@link knights.viewpoint.Horizontal.verify|verify} messages.
             * @function encodeDelimited
             * @memberof knights.viewpoint.Horizontal
             * @static
             * @param {knights.viewpoint.IHorizontal} message Horizontal message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Horizontal.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Horizontal message from the specified reader or buffer.
             * @function decode
             * @memberof knights.viewpoint.Horizontal
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {knights.viewpoint.Horizontal} Horizontal
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Horizontal.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.knights.viewpoint.Horizontal();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.positionIndex = reader.uint32();
                        break;
                    case 2:
                        if (!(message.verticalInRow && message.verticalInRow.length))
                            message.verticalInRow = [];
                        message.verticalInRow.push($root.knights.viewpoint.VerticalInRow.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        message.templateType = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Horizontal message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof knights.viewpoint.Horizontal
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {knights.viewpoint.Horizontal} Horizontal
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Horizontal.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Horizontal message.
             * @function verify
             * @memberof knights.viewpoint.Horizontal
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Horizontal.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.positionIndex != null && message.hasOwnProperty("positionIndex"))
                    if (!$util.isInteger(message.positionIndex))
                        return "positionIndex: integer expected";
                if (message.verticalInRow != null && message.hasOwnProperty("verticalInRow")) {
                    if (!Array.isArray(message.verticalInRow))
                        return "verticalInRow: array expected";
                    for (var i = 0; i < message.verticalInRow.length; ++i) {
                        var error = $root.knights.viewpoint.VerticalInRow.verify(message.verticalInRow[i]);
                        if (error)
                            return "verticalInRow." + error;
                    }
                }
                if (message.templateType != null && message.hasOwnProperty("templateType"))
                    if (!$util.isInteger(message.templateType))
                        return "templateType: integer expected";
                return null;
            };

            /**
             * Creates a Horizontal message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof knights.viewpoint.Horizontal
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {knights.viewpoint.Horizontal} Horizontal
             */
            Horizontal.fromObject = function fromObject(object) {
                if (object instanceof $root.knights.viewpoint.Horizontal)
                    return object;
                var message = new $root.knights.viewpoint.Horizontal();
                if (object.positionIndex != null)
                    message.positionIndex = object.positionIndex >>> 0;
                if (object.verticalInRow) {
                    if (!Array.isArray(object.verticalInRow))
                        throw TypeError(".knights.viewpoint.Horizontal.verticalInRow: array expected");
                    message.verticalInRow = [];
                    for (var i = 0; i < object.verticalInRow.length; ++i) {
                        if (typeof object.verticalInRow[i] !== "object")
                            throw TypeError(".knights.viewpoint.Horizontal.verticalInRow: object expected");
                        message.verticalInRow[i] = $root.knights.viewpoint.VerticalInRow.fromObject(object.verticalInRow[i]);
                    }
                }
                if (object.templateType != null)
                    message.templateType = object.templateType >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a Horizontal message. Also converts values to other types if specified.
             * @function toObject
             * @memberof knights.viewpoint.Horizontal
             * @static
             * @param {knights.viewpoint.Horizontal} message Horizontal
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Horizontal.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.verticalInRow = [];
                if (options.defaults) {
                    object.positionIndex = 0;
                    object.templateType = 0;
                }
                if (message.positionIndex != null && message.hasOwnProperty("positionIndex"))
                    object.positionIndex = message.positionIndex;
                if (message.verticalInRow && message.verticalInRow.length) {
                    object.verticalInRow = [];
                    for (var j = 0; j < message.verticalInRow.length; ++j)
                        object.verticalInRow[j] = $root.knights.viewpoint.VerticalInRow.toObject(message.verticalInRow[j], options);
                }
                if (message.templateType != null && message.hasOwnProperty("templateType"))
                    object.templateType = message.templateType;
                return object;
            };

            /**
             * Converts this Horizontal to JSON.
             * @function toJSON
             * @memberof knights.viewpoint.Horizontal
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Horizontal.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Horizontal;
        })();

        viewpoint.MixedContent = (function() {

            /**
             * Properties of a MixedContent.
             * @memberof knights.viewpoint
             * @interface IMixedContent
             * @property {Array.<knights.viewpoint.IHorizontal>|null} [horizontal] MixedContent horizontal
             */

            /**
             * Constructs a new MixedContent.
             * @memberof knights.viewpoint
             * @classdesc Represents a MixedContent.
             * @implements IMixedContent
             * @constructor
             * @param {knights.viewpoint.IMixedContent=} [properties] Properties to set
             */
            function MixedContent(properties) {
                this.horizontal = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MixedContent horizontal.
             * @member {Array.<knights.viewpoint.IHorizontal>} horizontal
             * @memberof knights.viewpoint.MixedContent
             * @instance
             */
            MixedContent.prototype.horizontal = $util.emptyArray;

            /**
             * Creates a new MixedContent instance using the specified properties.
             * @function create
             * @memberof knights.viewpoint.MixedContent
             * @static
             * @param {knights.viewpoint.IMixedContent=} [properties] Properties to set
             * @returns {knights.viewpoint.MixedContent} MixedContent instance
             */
            MixedContent.create = function create(properties) {
                return new MixedContent(properties);
            };

            /**
             * Encodes the specified MixedContent message. Does not implicitly {@link knights.viewpoint.MixedContent.verify|verify} messages.
             * @function encode
             * @memberof knights.viewpoint.MixedContent
             * @static
             * @param {knights.viewpoint.IMixedContent} message MixedContent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MixedContent.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.horizontal != null && message.horizontal.length)
                    for (var i = 0; i < message.horizontal.length; ++i)
                        $root.knights.viewpoint.Horizontal.encode(message.horizontal[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified MixedContent message, length delimited. Does not implicitly {@link knights.viewpoint.MixedContent.verify|verify} messages.
             * @function encodeDelimited
             * @memberof knights.viewpoint.MixedContent
             * @static
             * @param {knights.viewpoint.IMixedContent} message MixedContent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MixedContent.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MixedContent message from the specified reader or buffer.
             * @function decode
             * @memberof knights.viewpoint.MixedContent
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {knights.viewpoint.MixedContent} MixedContent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MixedContent.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.knights.viewpoint.MixedContent();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.horizontal && message.horizontal.length))
                            message.horizontal = [];
                        message.horizontal.push($root.knights.viewpoint.Horizontal.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MixedContent message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof knights.viewpoint.MixedContent
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {knights.viewpoint.MixedContent} MixedContent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MixedContent.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MixedContent message.
             * @function verify
             * @memberof knights.viewpoint.MixedContent
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MixedContent.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.horizontal != null && message.hasOwnProperty("horizontal")) {
                    if (!Array.isArray(message.horizontal))
                        return "horizontal: array expected";
                    for (var i = 0; i < message.horizontal.length; ++i) {
                        var error = $root.knights.viewpoint.Horizontal.verify(message.horizontal[i]);
                        if (error)
                            return "horizontal." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a MixedContent message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof knights.viewpoint.MixedContent
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {knights.viewpoint.MixedContent} MixedContent
             */
            MixedContent.fromObject = function fromObject(object) {
                if (object instanceof $root.knights.viewpoint.MixedContent)
                    return object;
                var message = new $root.knights.viewpoint.MixedContent();
                if (object.horizontal) {
                    if (!Array.isArray(object.horizontal))
                        throw TypeError(".knights.viewpoint.MixedContent.horizontal: array expected");
                    message.horizontal = [];
                    for (var i = 0; i < object.horizontal.length; ++i) {
                        if (typeof object.horizontal[i] !== "object")
                            throw TypeError(".knights.viewpoint.MixedContent.horizontal: object expected");
                        message.horizontal[i] = $root.knights.viewpoint.Horizontal.fromObject(object.horizontal[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a MixedContent message. Also converts values to other types if specified.
             * @function toObject
             * @memberof knights.viewpoint.MixedContent
             * @static
             * @param {knights.viewpoint.MixedContent} message MixedContent
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MixedContent.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.horizontal = [];
                if (message.horizontal && message.horizontal.length) {
                    object.horizontal = [];
                    for (var j = 0; j < message.horizontal.length; ++j)
                        object.horizontal[j] = $root.knights.viewpoint.Horizontal.toObject(message.horizontal[j], options);
                }
                return object;
            };

            /**
             * Converts this MixedContent to JSON.
             * @function toJSON
             * @memberof knights.viewpoint.MixedContent
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MixedContent.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MixedContent;
        })();

        viewpoint.SimpileTopicInfo = (function() {

            /**
             * Properties of a SimpileTopicInfo.
             * @memberof knights.viewpoint
             * @interface ISimpileTopicInfo
             * @property {number|null} [topicId] SimpileTopicInfo topicId
             * @property {string|null} [name] SimpileTopicInfo name
             */

            /**
             * Constructs a new SimpileTopicInfo.
             * @memberof knights.viewpoint
             * @classdesc Represents a SimpileTopicInfo.
             * @implements ISimpileTopicInfo
             * @constructor
             * @param {knights.viewpoint.ISimpileTopicInfo=} [properties] Properties to set
             */
            function SimpileTopicInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SimpileTopicInfo topicId.
             * @member {number} topicId
             * @memberof knights.viewpoint.SimpileTopicInfo
             * @instance
             */
            SimpileTopicInfo.prototype.topicId = 0;

            /**
             * SimpileTopicInfo name.
             * @member {string} name
             * @memberof knights.viewpoint.SimpileTopicInfo
             * @instance
             */
            SimpileTopicInfo.prototype.name = "";

            /**
             * Creates a new SimpileTopicInfo instance using the specified properties.
             * @function create
             * @memberof knights.viewpoint.SimpileTopicInfo
             * @static
             * @param {knights.viewpoint.ISimpileTopicInfo=} [properties] Properties to set
             * @returns {knights.viewpoint.SimpileTopicInfo} SimpileTopicInfo instance
             */
            SimpileTopicInfo.create = function create(properties) {
                return new SimpileTopicInfo(properties);
            };

            /**
             * Encodes the specified SimpileTopicInfo message. Does not implicitly {@link knights.viewpoint.SimpileTopicInfo.verify|verify} messages.
             * @function encode
             * @memberof knights.viewpoint.SimpileTopicInfo
             * @static
             * @param {knights.viewpoint.ISimpileTopicInfo} message SimpileTopicInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SimpileTopicInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.topicId != null && message.hasOwnProperty("topicId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.topicId);
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                return writer;
            };

            /**
             * Encodes the specified SimpileTopicInfo message, length delimited. Does not implicitly {@link knights.viewpoint.SimpileTopicInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof knights.viewpoint.SimpileTopicInfo
             * @static
             * @param {knights.viewpoint.ISimpileTopicInfo} message SimpileTopicInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SimpileTopicInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SimpileTopicInfo message from the specified reader or buffer.
             * @function decode
             * @memberof knights.viewpoint.SimpileTopicInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {knights.viewpoint.SimpileTopicInfo} SimpileTopicInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SimpileTopicInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.knights.viewpoint.SimpileTopicInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.topicId = reader.uint32();
                        break;
                    case 2:
                        message.name = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SimpileTopicInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof knights.viewpoint.SimpileTopicInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {knights.viewpoint.SimpileTopicInfo} SimpileTopicInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SimpileTopicInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SimpileTopicInfo message.
             * @function verify
             * @memberof knights.viewpoint.SimpileTopicInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SimpileTopicInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.topicId != null && message.hasOwnProperty("topicId"))
                    if (!$util.isInteger(message.topicId))
                        return "topicId: integer expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                return null;
            };

            /**
             * Creates a SimpileTopicInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof knights.viewpoint.SimpileTopicInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {knights.viewpoint.SimpileTopicInfo} SimpileTopicInfo
             */
            SimpileTopicInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.knights.viewpoint.SimpileTopicInfo)
                    return object;
                var message = new $root.knights.viewpoint.SimpileTopicInfo();
                if (object.topicId != null)
                    message.topicId = object.topicId >>> 0;
                if (object.name != null)
                    message.name = String(object.name);
                return message;
            };

            /**
             * Creates a plain object from a SimpileTopicInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof knights.viewpoint.SimpileTopicInfo
             * @static
             * @param {knights.viewpoint.SimpileTopicInfo} message SimpileTopicInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SimpileTopicInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.topicId = 0;
                    object.name = "";
                }
                if (message.topicId != null && message.hasOwnProperty("topicId"))
                    object.topicId = message.topicId;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                return object;
            };

            /**
             * Converts this SimpileTopicInfo to JSON.
             * @function toJSON
             * @memberof knights.viewpoint.SimpileTopicInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SimpileTopicInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return SimpileTopicInfo;
        })();

        viewpoint.ViewpointInfo = (function() {

            /**
             * Properties of a ViewpointInfo.
             * @memberof knights.viewpoint
             * @interface IViewpointInfo
             * @property {string|null} [viewpointId] ViewpointInfo viewpointId
             * @property {number|Long|null} [gameId] ViewpointInfo gameId
             * @property {knights.viewpoint.IUserInfo|null} [userInfo] ViewpointInfo userInfo
             * @property {string|null} [title] ViewpointInfo title
             * @property {string|null} [content] ViewpointInfo content
             * @property {number|null} [score] ViewpointInfo score
             * @property {number|null} [playDuration] ViewpointInfo playDuration
             * @property {number|null} [likeCnt] ViewpointInfo likeCnt
             * @property {number|null} [replyCnt] ViewpointInfo replyCnt
             * @property {number|Long|null} [updateTime] ViewpointInfo updateTime
             * @property {number|Long|null} [createTime] ViewpointInfo createTime
             * @property {number|null} [status] ViewpointInfo status
             * @property {knights.viewpoint.ILikeInfo|null} [likeInfo] ViewpointInfo likeInfo
             * @property {knights.viewpoint.IGameInfo|null} [gameInfo] ViewpointInfo gameInfo
             * @property {Array.<knights.viewpoint.IReplyInfo>|null} [topReplys] ViewpointInfo topReplys
             * @property {number|null} [dataType] ViewpointInfo dataType
             * @property {knights.viewpoint.IActivityInfo|null} [actInfo] ViewpointInfo actInfo
             * @property {knights.viewpoint.IVideoInfo|null} [videoInfo] ViewpointInfo videoInfo
             * @property {Array.<knights.viewpoint.ISimpileTopicInfo>|null} [topicInfo] ViewpointInfo topicInfo
             * @property {boolean|null} [firstPost] ViewpointInfo firstPost
             * @property {knights.viewpoint.IMixedContent|null} [mixedContent] ViewpointInfo mixedContent
             * @property {number|null} [reason] ViewpointInfo reason
             * @property {number|null} [owner] ViewpointInfo owner
             */

            /**
             * Constructs a new ViewpointInfo.
             * @memberof knights.viewpoint
             * @classdesc Represents a ViewpointInfo.
             * @implements IViewpointInfo
             * @constructor
             * @param {knights.viewpoint.IViewpointInfo=} [properties] Properties to set
             */
            function ViewpointInfo(properties) {
                this.topReplys = [];
                this.topicInfo = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ViewpointInfo viewpointId.
             * @member {string} viewpointId
             * @memberof knights.viewpoint.ViewpointInfo
             * @instance
             */
            ViewpointInfo.prototype.viewpointId = "";

            /**
             * ViewpointInfo gameId.
             * @member {number|Long} gameId
             * @memberof knights.viewpoint.ViewpointInfo
             * @instance
             */
            ViewpointInfo.prototype.gameId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * ViewpointInfo userInfo.
             * @member {knights.viewpoint.IUserInfo|null|undefined} userInfo
             * @memberof knights.viewpoint.ViewpointInfo
             * @instance
             */
            ViewpointInfo.prototype.userInfo = null;

            /**
             * ViewpointInfo title.
             * @member {string} title
             * @memberof knights.viewpoint.ViewpointInfo
             * @instance
             */
            ViewpointInfo.prototype.title = "";

            /**
             * ViewpointInfo content.
             * @member {string} content
             * @memberof knights.viewpoint.ViewpointInfo
             * @instance
             */
            ViewpointInfo.prototype.content = "";

            /**
             * ViewpointInfo score.
             * @member {number} score
             * @memberof knights.viewpoint.ViewpointInfo
             * @instance
             */
            ViewpointInfo.prototype.score = 0;

            /**
             * ViewpointInfo playDuration.
             * @member {number} playDuration
             * @memberof knights.viewpoint.ViewpointInfo
             * @instance
             */
            ViewpointInfo.prototype.playDuration = 0;

            /**
             * ViewpointInfo likeCnt.
             * @member {number} likeCnt
             * @memberof knights.viewpoint.ViewpointInfo
             * @instance
             */
            ViewpointInfo.prototype.likeCnt = 0;

            /**
             * ViewpointInfo replyCnt.
             * @member {number} replyCnt
             * @memberof knights.viewpoint.ViewpointInfo
             * @instance
             */
            ViewpointInfo.prototype.replyCnt = 0;

            /**
             * ViewpointInfo updateTime.
             * @member {number|Long} updateTime
             * @memberof knights.viewpoint.ViewpointInfo
             * @instance
             */
            ViewpointInfo.prototype.updateTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * ViewpointInfo createTime.
             * @member {number|Long} createTime
             * @memberof knights.viewpoint.ViewpointInfo
             * @instance
             */
            ViewpointInfo.prototype.createTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * ViewpointInfo status.
             * @member {number} status
             * @memberof knights.viewpoint.ViewpointInfo
             * @instance
             */
            ViewpointInfo.prototype.status = 0;

            /**
             * ViewpointInfo likeInfo.
             * @member {knights.viewpoint.ILikeInfo|null|undefined} likeInfo
             * @memberof knights.viewpoint.ViewpointInfo
             * @instance
             */
            ViewpointInfo.prototype.likeInfo = null;

            /**
             * ViewpointInfo gameInfo.
             * @member {knights.viewpoint.IGameInfo|null|undefined} gameInfo
             * @memberof knights.viewpoint.ViewpointInfo
             * @instance
             */
            ViewpointInfo.prototype.gameInfo = null;

            /**
             * ViewpointInfo topReplys.
             * @member {Array.<knights.viewpoint.IReplyInfo>} topReplys
             * @memberof knights.viewpoint.ViewpointInfo
             * @instance
             */
            ViewpointInfo.prototype.topReplys = $util.emptyArray;

            /**
             * ViewpointInfo dataType.
             * @member {number} dataType
             * @memberof knights.viewpoint.ViewpointInfo
             * @instance
             */
            ViewpointInfo.prototype.dataType = 0;

            /**
             * ViewpointInfo actInfo.
             * @member {knights.viewpoint.IActivityInfo|null|undefined} actInfo
             * @memberof knights.viewpoint.ViewpointInfo
             * @instance
             */
            ViewpointInfo.prototype.actInfo = null;

            /**
             * ViewpointInfo videoInfo.
             * @member {knights.viewpoint.IVideoInfo|null|undefined} videoInfo
             * @memberof knights.viewpoint.ViewpointInfo
             * @instance
             */
            ViewpointInfo.prototype.videoInfo = null;

            /**
             * ViewpointInfo topicInfo.
             * @member {Array.<knights.viewpoint.ISimpileTopicInfo>} topicInfo
             * @memberof knights.viewpoint.ViewpointInfo
             * @instance
             */
            ViewpointInfo.prototype.topicInfo = $util.emptyArray;

            /**
             * ViewpointInfo firstPost.
             * @member {boolean} firstPost
             * @memberof knights.viewpoint.ViewpointInfo
             * @instance
             */
            ViewpointInfo.prototype.firstPost = false;

            /**
             * ViewpointInfo mixedContent.
             * @member {knights.viewpoint.IMixedContent|null|undefined} mixedContent
             * @memberof knights.viewpoint.ViewpointInfo
             * @instance
             */
            ViewpointInfo.prototype.mixedContent = null;

            /**
             * ViewpointInfo reason.
             * @member {number} reason
             * @memberof knights.viewpoint.ViewpointInfo
             * @instance
             */
            ViewpointInfo.prototype.reason = 0;

            /**
             * ViewpointInfo owner.
             * @member {number} owner
             * @memberof knights.viewpoint.ViewpointInfo
             * @instance
             */
            ViewpointInfo.prototype.owner = 0;

            /**
             * Creates a new ViewpointInfo instance using the specified properties.
             * @function create
             * @memberof knights.viewpoint.ViewpointInfo
             * @static
             * @param {knights.viewpoint.IViewpointInfo=} [properties] Properties to set
             * @returns {knights.viewpoint.ViewpointInfo} ViewpointInfo instance
             */
            ViewpointInfo.create = function create(properties) {
                return new ViewpointInfo(properties);
            };

            /**
             * Encodes the specified ViewpointInfo message. Does not implicitly {@link knights.viewpoint.ViewpointInfo.verify|verify} messages.
             * @function encode
             * @memberof knights.viewpoint.ViewpointInfo
             * @static
             * @param {knights.viewpoint.IViewpointInfo} message ViewpointInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ViewpointInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.viewpointId != null && message.hasOwnProperty("viewpointId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.viewpointId);
                if (message.gameId != null && message.hasOwnProperty("gameId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.gameId);
                if (message.userInfo != null && message.hasOwnProperty("userInfo"))
                    $root.knights.viewpoint.UserInfo.encode(message.userInfo, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.title != null && message.hasOwnProperty("title"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.title);
                if (message.content != null && message.hasOwnProperty("content"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.content);
                if (message.score != null && message.hasOwnProperty("score"))
                    writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.score);
                if (message.playDuration != null && message.hasOwnProperty("playDuration"))
                    writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.playDuration);
                if (message.likeCnt != null && message.hasOwnProperty("likeCnt"))
                    writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.likeCnt);
                if (message.replyCnt != null && message.hasOwnProperty("replyCnt"))
                    writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.replyCnt);
                if (message.updateTime != null && message.hasOwnProperty("updateTime"))
                    writer.uint32(/* id 10, wireType 0 =*/80).uint64(message.updateTime);
                if (message.createTime != null && message.hasOwnProperty("createTime"))
                    writer.uint32(/* id 11, wireType 0 =*/88).uint64(message.createTime);
                if (message.status != null && message.hasOwnProperty("status"))
                    writer.uint32(/* id 12, wireType 0 =*/96).uint32(message.status);
                if (message.likeInfo != null && message.hasOwnProperty("likeInfo"))
                    $root.knights.viewpoint.LikeInfo.encode(message.likeInfo, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
                if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                    $root.knights.viewpoint.GameInfo.encode(message.gameInfo, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
                if (message.topReplys != null && message.topReplys.length)
                    for (var i = 0; i < message.topReplys.length; ++i)
                        $root.knights.viewpoint.ReplyInfo.encode(message.topReplys[i], writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
                if (message.dataType != null && message.hasOwnProperty("dataType"))
                    writer.uint32(/* id 16, wireType 0 =*/128).uint32(message.dataType);
                if (message.actInfo != null && message.hasOwnProperty("actInfo"))
                    $root.knights.viewpoint.ActivityInfo.encode(message.actInfo, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
                if (message.videoInfo != null && message.hasOwnProperty("videoInfo"))
                    $root.knights.viewpoint.VideoInfo.encode(message.videoInfo, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
                if (message.topicInfo != null && message.topicInfo.length)
                    for (var i = 0; i < message.topicInfo.length; ++i)
                        $root.knights.viewpoint.SimpileTopicInfo.encode(message.topicInfo[i], writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
                if (message.firstPost != null && message.hasOwnProperty("firstPost"))
                    writer.uint32(/* id 20, wireType 0 =*/160).bool(message.firstPost);
                if (message.mixedContent != null && message.hasOwnProperty("mixedContent"))
                    $root.knights.viewpoint.MixedContent.encode(message.mixedContent, writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
                if (message.reason != null && message.hasOwnProperty("reason"))
                    writer.uint32(/* id 22, wireType 0 =*/176).uint32(message.reason);
                if (message.owner != null && message.hasOwnProperty("owner"))
                    writer.uint32(/* id 23, wireType 0 =*/184).uint32(message.owner);
                return writer;
            };

            /**
             * Encodes the specified ViewpointInfo message, length delimited. Does not implicitly {@link knights.viewpoint.ViewpointInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof knights.viewpoint.ViewpointInfo
             * @static
             * @param {knights.viewpoint.IViewpointInfo} message ViewpointInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ViewpointInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ViewpointInfo message from the specified reader or buffer.
             * @function decode
             * @memberof knights.viewpoint.ViewpointInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {knights.viewpoint.ViewpointInfo} ViewpointInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ViewpointInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.knights.viewpoint.ViewpointInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.viewpointId = reader.string();
                        break;
                    case 2:
                        message.gameId = reader.uint64();
                        break;
                    case 3:
                        message.userInfo = $root.knights.viewpoint.UserInfo.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.title = reader.string();
                        break;
                    case 5:
                        message.content = reader.string();
                        break;
                    case 6:
                        message.score = reader.uint32();
                        break;
                    case 7:
                        message.playDuration = reader.uint32();
                        break;
                    case 8:
                        message.likeCnt = reader.uint32();
                        break;
                    case 9:
                        message.replyCnt = reader.uint32();
                        break;
                    case 10:
                        message.updateTime = reader.uint64();
                        break;
                    case 11:
                        message.createTime = reader.uint64();
                        break;
                    case 12:
                        message.status = reader.uint32();
                        break;
                    case 13:
                        message.likeInfo = $root.knights.viewpoint.LikeInfo.decode(reader, reader.uint32());
                        break;
                    case 14:
                        message.gameInfo = $root.knights.viewpoint.GameInfo.decode(reader, reader.uint32());
                        break;
                    case 15:
                        if (!(message.topReplys && message.topReplys.length))
                            message.topReplys = [];
                        message.topReplys.push($root.knights.viewpoint.ReplyInfo.decode(reader, reader.uint32()));
                        break;
                    case 16:
                        message.dataType = reader.uint32();
                        break;
                    case 17:
                        message.actInfo = $root.knights.viewpoint.ActivityInfo.decode(reader, reader.uint32());
                        break;
                    case 18:
                        message.videoInfo = $root.knights.viewpoint.VideoInfo.decode(reader, reader.uint32());
                        break;
                    case 19:
                        if (!(message.topicInfo && message.topicInfo.length))
                            message.topicInfo = [];
                        message.topicInfo.push($root.knights.viewpoint.SimpileTopicInfo.decode(reader, reader.uint32()));
                        break;
                    case 20:
                        message.firstPost = reader.bool();
                        break;
                    case 21:
                        message.mixedContent = $root.knights.viewpoint.MixedContent.decode(reader, reader.uint32());
                        break;
                    case 22:
                        message.reason = reader.uint32();
                        break;
                    case 23:
                        message.owner = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ViewpointInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof knights.viewpoint.ViewpointInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {knights.viewpoint.ViewpointInfo} ViewpointInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ViewpointInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ViewpointInfo message.
             * @function verify
             * @memberof knights.viewpoint.ViewpointInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ViewpointInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.viewpointId != null && message.hasOwnProperty("viewpointId"))
                    if (!$util.isString(message.viewpointId))
                        return "viewpointId: string expected";
                if (message.gameId != null && message.hasOwnProperty("gameId"))
                    if (!$util.isInteger(message.gameId) && !(message.gameId && $util.isInteger(message.gameId.low) && $util.isInteger(message.gameId.high)))
                        return "gameId: integer|Long expected";
                if (message.userInfo != null && message.hasOwnProperty("userInfo")) {
                    var error = $root.knights.viewpoint.UserInfo.verify(message.userInfo);
                    if (error)
                        return "userInfo." + error;
                }
                if (message.title != null && message.hasOwnProperty("title"))
                    if (!$util.isString(message.title))
                        return "title: string expected";
                if (message.content != null && message.hasOwnProperty("content"))
                    if (!$util.isString(message.content))
                        return "content: string expected";
                if (message.score != null && message.hasOwnProperty("score"))
                    if (!$util.isInteger(message.score))
                        return "score: integer expected";
                if (message.playDuration != null && message.hasOwnProperty("playDuration"))
                    if (!$util.isInteger(message.playDuration))
                        return "playDuration: integer expected";
                if (message.likeCnt != null && message.hasOwnProperty("likeCnt"))
                    if (!$util.isInteger(message.likeCnt))
                        return "likeCnt: integer expected";
                if (message.replyCnt != null && message.hasOwnProperty("replyCnt"))
                    if (!$util.isInteger(message.replyCnt))
                        return "replyCnt: integer expected";
                if (message.updateTime != null && message.hasOwnProperty("updateTime"))
                    if (!$util.isInteger(message.updateTime) && !(message.updateTime && $util.isInteger(message.updateTime.low) && $util.isInteger(message.updateTime.high)))
                        return "updateTime: integer|Long expected";
                if (message.createTime != null && message.hasOwnProperty("createTime"))
                    if (!$util.isInteger(message.createTime) && !(message.createTime && $util.isInteger(message.createTime.low) && $util.isInteger(message.createTime.high)))
                        return "createTime: integer|Long expected";
                if (message.status != null && message.hasOwnProperty("status"))
                    if (!$util.isInteger(message.status))
                        return "status: integer expected";
                if (message.likeInfo != null && message.hasOwnProperty("likeInfo")) {
                    var error = $root.knights.viewpoint.LikeInfo.verify(message.likeInfo);
                    if (error)
                        return "likeInfo." + error;
                }
                if (message.gameInfo != null && message.hasOwnProperty("gameInfo")) {
                    var error = $root.knights.viewpoint.GameInfo.verify(message.gameInfo);
                    if (error)
                        return "gameInfo." + error;
                }
                if (message.topReplys != null && message.hasOwnProperty("topReplys")) {
                    if (!Array.isArray(message.topReplys))
                        return "topReplys: array expected";
                    for (var i = 0; i < message.topReplys.length; ++i) {
                        var error = $root.knights.viewpoint.ReplyInfo.verify(message.topReplys[i]);
                        if (error)
                            return "topReplys." + error;
                    }
                }
                if (message.dataType != null && message.hasOwnProperty("dataType"))
                    if (!$util.isInteger(message.dataType))
                        return "dataType: integer expected";
                if (message.actInfo != null && message.hasOwnProperty("actInfo")) {
                    var error = $root.knights.viewpoint.ActivityInfo.verify(message.actInfo);
                    if (error)
                        return "actInfo." + error;
                }
                if (message.videoInfo != null && message.hasOwnProperty("videoInfo")) {
                    var error = $root.knights.viewpoint.VideoInfo.verify(message.videoInfo);
                    if (error)
                        return "videoInfo." + error;
                }
                if (message.topicInfo != null && message.hasOwnProperty("topicInfo")) {
                    if (!Array.isArray(message.topicInfo))
                        return "topicInfo: array expected";
                    for (var i = 0; i < message.topicInfo.length; ++i) {
                        var error = $root.knights.viewpoint.SimpileTopicInfo.verify(message.topicInfo[i]);
                        if (error)
                            return "topicInfo." + error;
                    }
                }
                if (message.firstPost != null && message.hasOwnProperty("firstPost"))
                    if (typeof message.firstPost !== "boolean")
                        return "firstPost: boolean expected";
                if (message.mixedContent != null && message.hasOwnProperty("mixedContent")) {
                    var error = $root.knights.viewpoint.MixedContent.verify(message.mixedContent);
                    if (error)
                        return "mixedContent." + error;
                }
                if (message.reason != null && message.hasOwnProperty("reason"))
                    if (!$util.isInteger(message.reason))
                        return "reason: integer expected";
                if (message.owner != null && message.hasOwnProperty("owner"))
                    if (!$util.isInteger(message.owner))
                        return "owner: integer expected";
                return null;
            };

            /**
             * Creates a ViewpointInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof knights.viewpoint.ViewpointInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {knights.viewpoint.ViewpointInfo} ViewpointInfo
             */
            ViewpointInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.knights.viewpoint.ViewpointInfo)
                    return object;
                var message = new $root.knights.viewpoint.ViewpointInfo();
                if (object.viewpointId != null)
                    message.viewpointId = String(object.viewpointId);
                if (object.gameId != null)
                    if ($util.Long)
                        (message.gameId = $util.Long.fromValue(object.gameId)).unsigned = true;
                    else if (typeof object.gameId === "string")
                        message.gameId = parseInt(object.gameId, 10);
                    else if (typeof object.gameId === "number")
                        message.gameId = object.gameId;
                    else if (typeof object.gameId === "object")
                        message.gameId = new $util.LongBits(object.gameId.low >>> 0, object.gameId.high >>> 0).toNumber(true);
                if (object.userInfo != null) {
                    if (typeof object.userInfo !== "object")
                        throw TypeError(".knights.viewpoint.ViewpointInfo.userInfo: object expected");
                    message.userInfo = $root.knights.viewpoint.UserInfo.fromObject(object.userInfo);
                }
                if (object.title != null)
                    message.title = String(object.title);
                if (object.content != null)
                    message.content = String(object.content);
                if (object.score != null)
                    message.score = object.score >>> 0;
                if (object.playDuration != null)
                    message.playDuration = object.playDuration >>> 0;
                if (object.likeCnt != null)
                    message.likeCnt = object.likeCnt >>> 0;
                if (object.replyCnt != null)
                    message.replyCnt = object.replyCnt >>> 0;
                if (object.updateTime != null)
                    if ($util.Long)
                        (message.updateTime = $util.Long.fromValue(object.updateTime)).unsigned = true;
                    else if (typeof object.updateTime === "string")
                        message.updateTime = parseInt(object.updateTime, 10);
                    else if (typeof object.updateTime === "number")
                        message.updateTime = object.updateTime;
                    else if (typeof object.updateTime === "object")
                        message.updateTime = new $util.LongBits(object.updateTime.low >>> 0, object.updateTime.high >>> 0).toNumber(true);
                if (object.createTime != null)
                    if ($util.Long)
                        (message.createTime = $util.Long.fromValue(object.createTime)).unsigned = true;
                    else if (typeof object.createTime === "string")
                        message.createTime = parseInt(object.createTime, 10);
                    else if (typeof object.createTime === "number")
                        message.createTime = object.createTime;
                    else if (typeof object.createTime === "object")
                        message.createTime = new $util.LongBits(object.createTime.low >>> 0, object.createTime.high >>> 0).toNumber(true);
                if (object.status != null)
                    message.status = object.status >>> 0;
                if (object.likeInfo != null) {
                    if (typeof object.likeInfo !== "object")
                        throw TypeError(".knights.viewpoint.ViewpointInfo.likeInfo: object expected");
                    message.likeInfo = $root.knights.viewpoint.LikeInfo.fromObject(object.likeInfo);
                }
                if (object.gameInfo != null) {
                    if (typeof object.gameInfo !== "object")
                        throw TypeError(".knights.viewpoint.ViewpointInfo.gameInfo: object expected");
                    message.gameInfo = $root.knights.viewpoint.GameInfo.fromObject(object.gameInfo);
                }
                if (object.topReplys) {
                    if (!Array.isArray(object.topReplys))
                        throw TypeError(".knights.viewpoint.ViewpointInfo.topReplys: array expected");
                    message.topReplys = [];
                    for (var i = 0; i < object.topReplys.length; ++i) {
                        if (typeof object.topReplys[i] !== "object")
                            throw TypeError(".knights.viewpoint.ViewpointInfo.topReplys: object expected");
                        message.topReplys[i] = $root.knights.viewpoint.ReplyInfo.fromObject(object.topReplys[i]);
                    }
                }
                if (object.dataType != null)
                    message.dataType = object.dataType >>> 0;
                if (object.actInfo != null) {
                    if (typeof object.actInfo !== "object")
                        throw TypeError(".knights.viewpoint.ViewpointInfo.actInfo: object expected");
                    message.actInfo = $root.knights.viewpoint.ActivityInfo.fromObject(object.actInfo);
                }
                if (object.videoInfo != null) {
                    if (typeof object.videoInfo !== "object")
                        throw TypeError(".knights.viewpoint.ViewpointInfo.videoInfo: object expected");
                    message.videoInfo = $root.knights.viewpoint.VideoInfo.fromObject(object.videoInfo);
                }
                if (object.topicInfo) {
                    if (!Array.isArray(object.topicInfo))
                        throw TypeError(".knights.viewpoint.ViewpointInfo.topicInfo: array expected");
                    message.topicInfo = [];
                    for (var i = 0; i < object.topicInfo.length; ++i) {
                        if (typeof object.topicInfo[i] !== "object")
                            throw TypeError(".knights.viewpoint.ViewpointInfo.topicInfo: object expected");
                        message.topicInfo[i] = $root.knights.viewpoint.SimpileTopicInfo.fromObject(object.topicInfo[i]);
                    }
                }
                if (object.firstPost != null)
                    message.firstPost = Boolean(object.firstPost);
                if (object.mixedContent != null) {
                    if (typeof object.mixedContent !== "object")
                        throw TypeError(".knights.viewpoint.ViewpointInfo.mixedContent: object expected");
                    message.mixedContent = $root.knights.viewpoint.MixedContent.fromObject(object.mixedContent);
                }
                if (object.reason != null)
                    message.reason = object.reason >>> 0;
                if (object.owner != null)
                    message.owner = object.owner >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a ViewpointInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof knights.viewpoint.ViewpointInfo
             * @static
             * @param {knights.viewpoint.ViewpointInfo} message ViewpointInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ViewpointInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.topReplys = [];
                    object.topicInfo = [];
                }
                if (options.defaults) {
                    object.viewpointId = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.gameId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.gameId = options.longs === String ? "0" : 0;
                    object.userInfo = null;
                    object.title = "";
                    object.content = "";
                    object.score = 0;
                    object.playDuration = 0;
                    object.likeCnt = 0;
                    object.replyCnt = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.updateTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.updateTime = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.createTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.createTime = options.longs === String ? "0" : 0;
                    object.status = 0;
                    object.likeInfo = null;
                    object.gameInfo = null;
                    object.dataType = 0;
                    object.actInfo = null;
                    object.videoInfo = null;
                    object.firstPost = false;
                    object.mixedContent = null;
                    object.reason = 0;
                    object.owner = 0;
                }
                if (message.viewpointId != null && message.hasOwnProperty("viewpointId"))
                    object.viewpointId = message.viewpointId;
                if (message.gameId != null && message.hasOwnProperty("gameId"))
                    if (typeof message.gameId === "number")
                        object.gameId = options.longs === String ? String(message.gameId) : message.gameId;
                    else
                        object.gameId = options.longs === String ? $util.Long.prototype.toString.call(message.gameId) : options.longs === Number ? new $util.LongBits(message.gameId.low >>> 0, message.gameId.high >>> 0).toNumber(true) : message.gameId;
                if (message.userInfo != null && message.hasOwnProperty("userInfo"))
                    object.userInfo = $root.knights.viewpoint.UserInfo.toObject(message.userInfo, options);
                if (message.title != null && message.hasOwnProperty("title"))
                    object.title = message.title;
                if (message.content != null && message.hasOwnProperty("content"))
                    object.content = message.content;
                if (message.score != null && message.hasOwnProperty("score"))
                    object.score = message.score;
                if (message.playDuration != null && message.hasOwnProperty("playDuration"))
                    object.playDuration = message.playDuration;
                if (message.likeCnt != null && message.hasOwnProperty("likeCnt"))
                    object.likeCnt = message.likeCnt;
                if (message.replyCnt != null && message.hasOwnProperty("replyCnt"))
                    object.replyCnt = message.replyCnt;
                if (message.updateTime != null && message.hasOwnProperty("updateTime"))
                    if (typeof message.updateTime === "number")
                        object.updateTime = options.longs === String ? String(message.updateTime) : message.updateTime;
                    else
                        object.updateTime = options.longs === String ? $util.Long.prototype.toString.call(message.updateTime) : options.longs === Number ? new $util.LongBits(message.updateTime.low >>> 0, message.updateTime.high >>> 0).toNumber(true) : message.updateTime;
                if (message.createTime != null && message.hasOwnProperty("createTime"))
                    if (typeof message.createTime === "number")
                        object.createTime = options.longs === String ? String(message.createTime) : message.createTime;
                    else
                        object.createTime = options.longs === String ? $util.Long.prototype.toString.call(message.createTime) : options.longs === Number ? new $util.LongBits(message.createTime.low >>> 0, message.createTime.high >>> 0).toNumber(true) : message.createTime;
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = message.status;
                if (message.likeInfo != null && message.hasOwnProperty("likeInfo"))
                    object.likeInfo = $root.knights.viewpoint.LikeInfo.toObject(message.likeInfo, options);
                if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                    object.gameInfo = $root.knights.viewpoint.GameInfo.toObject(message.gameInfo, options);
                if (message.topReplys && message.topReplys.length) {
                    object.topReplys = [];
                    for (var j = 0; j < message.topReplys.length; ++j)
                        object.topReplys[j] = $root.knights.viewpoint.ReplyInfo.toObject(message.topReplys[j], options);
                }
                if (message.dataType != null && message.hasOwnProperty("dataType"))
                    object.dataType = message.dataType;
                if (message.actInfo != null && message.hasOwnProperty("actInfo"))
                    object.actInfo = $root.knights.viewpoint.ActivityInfo.toObject(message.actInfo, options);
                if (message.videoInfo != null && message.hasOwnProperty("videoInfo"))
                    object.videoInfo = $root.knights.viewpoint.VideoInfo.toObject(message.videoInfo, options);
                if (message.topicInfo && message.topicInfo.length) {
                    object.topicInfo = [];
                    for (var j = 0; j < message.topicInfo.length; ++j)
                        object.topicInfo[j] = $root.knights.viewpoint.SimpileTopicInfo.toObject(message.topicInfo[j], options);
                }
                if (message.firstPost != null && message.hasOwnProperty("firstPost"))
                    object.firstPost = message.firstPost;
                if (message.mixedContent != null && message.hasOwnProperty("mixedContent"))
                    object.mixedContent = $root.knights.viewpoint.MixedContent.toObject(message.mixedContent, options);
                if (message.reason != null && message.hasOwnProperty("reason"))
                    object.reason = message.reason;
                if (message.owner != null && message.hasOwnProperty("owner"))
                    object.owner = message.owner;
                return object;
            };

            /**
             * Converts this ViewpointInfo to JSON.
             * @function toJSON
             * @memberof knights.viewpoint.ViewpointInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ViewpointInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ViewpointInfo;
        })();

        viewpoint.ViewpointCount = (function() {

            /**
             * Properties of a ViewpointCount.
             * @memberof knights.viewpoint
             * @interface IViewpointCount
             * @property {number|Long|null} [dataId] ViewpointCount dataId
             * @property {number|null} [count] ViewpointCount count
             */

            /**
             * Constructs a new ViewpointCount.
             * @memberof knights.viewpoint
             * @classdesc Represents a ViewpointCount.
             * @implements IViewpointCount
             * @constructor
             * @param {knights.viewpoint.IViewpointCount=} [properties] Properties to set
             */
            function ViewpointCount(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ViewpointCount dataId.
             * @member {number|Long} dataId
             * @memberof knights.viewpoint.ViewpointCount
             * @instance
             */
            ViewpointCount.prototype.dataId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * ViewpointCount count.
             * @member {number} count
             * @memberof knights.viewpoint.ViewpointCount
             * @instance
             */
            ViewpointCount.prototype.count = 0;

            /**
             * Creates a new ViewpointCount instance using the specified properties.
             * @function create
             * @memberof knights.viewpoint.ViewpointCount
             * @static
             * @param {knights.viewpoint.IViewpointCount=} [properties] Properties to set
             * @returns {knights.viewpoint.ViewpointCount} ViewpointCount instance
             */
            ViewpointCount.create = function create(properties) {
                return new ViewpointCount(properties);
            };

            /**
             * Encodes the specified ViewpointCount message. Does not implicitly {@link knights.viewpoint.ViewpointCount.verify|verify} messages.
             * @function encode
             * @memberof knights.viewpoint.ViewpointCount
             * @static
             * @param {knights.viewpoint.IViewpointCount} message ViewpointCount message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ViewpointCount.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.dataId != null && message.hasOwnProperty("dataId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.dataId);
                if (message.count != null && message.hasOwnProperty("count"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.count);
                return writer;
            };

            /**
             * Encodes the specified ViewpointCount message, length delimited. Does not implicitly {@link knights.viewpoint.ViewpointCount.verify|verify} messages.
             * @function encodeDelimited
             * @memberof knights.viewpoint.ViewpointCount
             * @static
             * @param {knights.viewpoint.IViewpointCount} message ViewpointCount message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ViewpointCount.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ViewpointCount message from the specified reader or buffer.
             * @function decode
             * @memberof knights.viewpoint.ViewpointCount
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {knights.viewpoint.ViewpointCount} ViewpointCount
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ViewpointCount.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.knights.viewpoint.ViewpointCount();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.dataId = reader.uint64();
                        break;
                    case 2:
                        message.count = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ViewpointCount message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof knights.viewpoint.ViewpointCount
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {knights.viewpoint.ViewpointCount} ViewpointCount
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ViewpointCount.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ViewpointCount message.
             * @function verify
             * @memberof knights.viewpoint.ViewpointCount
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ViewpointCount.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.dataId != null && message.hasOwnProperty("dataId"))
                    if (!$util.isInteger(message.dataId) && !(message.dataId && $util.isInteger(message.dataId.low) && $util.isInteger(message.dataId.high)))
                        return "dataId: integer|Long expected";
                if (message.count != null && message.hasOwnProperty("count"))
                    if (!$util.isInteger(message.count))
                        return "count: integer expected";
                return null;
            };

            /**
             * Creates a ViewpointCount message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof knights.viewpoint.ViewpointCount
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {knights.viewpoint.ViewpointCount} ViewpointCount
             */
            ViewpointCount.fromObject = function fromObject(object) {
                if (object instanceof $root.knights.viewpoint.ViewpointCount)
                    return object;
                var message = new $root.knights.viewpoint.ViewpointCount();
                if (object.dataId != null)
                    if ($util.Long)
                        (message.dataId = $util.Long.fromValue(object.dataId)).unsigned = true;
                    else if (typeof object.dataId === "string")
                        message.dataId = parseInt(object.dataId, 10);
                    else if (typeof object.dataId === "number")
                        message.dataId = object.dataId;
                    else if (typeof object.dataId === "object")
                        message.dataId = new $util.LongBits(object.dataId.low >>> 0, object.dataId.high >>> 0).toNumber(true);
                if (object.count != null)
                    message.count = object.count >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a ViewpointCount message. Also converts values to other types if specified.
             * @function toObject
             * @memberof knights.viewpoint.ViewpointCount
             * @static
             * @param {knights.viewpoint.ViewpointCount} message ViewpointCount
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ViewpointCount.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.dataId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.dataId = options.longs === String ? "0" : 0;
                    object.count = 0;
                }
                if (message.dataId != null && message.hasOwnProperty("dataId"))
                    if (typeof message.dataId === "number")
                        object.dataId = options.longs === String ? String(message.dataId) : message.dataId;
                    else
                        object.dataId = options.longs === String ? $util.Long.prototype.toString.call(message.dataId) : options.longs === Number ? new $util.LongBits(message.dataId.low >>> 0, message.dataId.high >>> 0).toNumber(true) : message.dataId;
                if (message.count != null && message.hasOwnProperty("count"))
                    object.count = message.count;
                return object;
            };

            /**
             * Converts this ViewpointCount to JSON.
             * @function toJSON
             * @memberof knights.viewpoint.ViewpointCount
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ViewpointCount.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ViewpointCount;
        })();

        viewpoint.GameTopViewpoint = (function() {

            /**
             * Properties of a GameTopViewpoint.
             * @memberof knights.viewpoint
             * @interface IGameTopViewpoint
             * @property {number|Long|null} [gameId] GameTopViewpoint gameId
             * @property {Array.<knights.viewpoint.IViewpointInfo>|null} [viewpoints] GameTopViewpoint viewpoints
             */

            /**
             * Constructs a new GameTopViewpoint.
             * @memberof knights.viewpoint
             * @classdesc Represents a GameTopViewpoint.
             * @implements IGameTopViewpoint
             * @constructor
             * @param {knights.viewpoint.IGameTopViewpoint=} [properties] Properties to set
             */
            function GameTopViewpoint(properties) {
                this.viewpoints = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GameTopViewpoint gameId.
             * @member {number|Long} gameId
             * @memberof knights.viewpoint.GameTopViewpoint
             * @instance
             */
            GameTopViewpoint.prototype.gameId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * GameTopViewpoint viewpoints.
             * @member {Array.<knights.viewpoint.IViewpointInfo>} viewpoints
             * @memberof knights.viewpoint.GameTopViewpoint
             * @instance
             */
            GameTopViewpoint.prototype.viewpoints = $util.emptyArray;

            /**
             * Creates a new GameTopViewpoint instance using the specified properties.
             * @function create
             * @memberof knights.viewpoint.GameTopViewpoint
             * @static
             * @param {knights.viewpoint.IGameTopViewpoint=} [properties] Properties to set
             * @returns {knights.viewpoint.GameTopViewpoint} GameTopViewpoint instance
             */
            GameTopViewpoint.create = function create(properties) {
                return new GameTopViewpoint(properties);
            };

            /**
             * Encodes the specified GameTopViewpoint message. Does not implicitly {@link knights.viewpoint.GameTopViewpoint.verify|verify} messages.
             * @function encode
             * @memberof knights.viewpoint.GameTopViewpoint
             * @static
             * @param {knights.viewpoint.IGameTopViewpoint} message GameTopViewpoint message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GameTopViewpoint.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.gameId != null && message.hasOwnProperty("gameId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.gameId);
                if (message.viewpoints != null && message.viewpoints.length)
                    for (var i = 0; i < message.viewpoints.length; ++i)
                        $root.knights.viewpoint.ViewpointInfo.encode(message.viewpoints[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified GameTopViewpoint message, length delimited. Does not implicitly {@link knights.viewpoint.GameTopViewpoint.verify|verify} messages.
             * @function encodeDelimited
             * @memberof knights.viewpoint.GameTopViewpoint
             * @static
             * @param {knights.viewpoint.IGameTopViewpoint} message GameTopViewpoint message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GameTopViewpoint.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GameTopViewpoint message from the specified reader or buffer.
             * @function decode
             * @memberof knights.viewpoint.GameTopViewpoint
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {knights.viewpoint.GameTopViewpoint} GameTopViewpoint
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GameTopViewpoint.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.knights.viewpoint.GameTopViewpoint();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.gameId = reader.uint64();
                        break;
                    case 2:
                        if (!(message.viewpoints && message.viewpoints.length))
                            message.viewpoints = [];
                        message.viewpoints.push($root.knights.viewpoint.ViewpointInfo.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GameTopViewpoint message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof knights.viewpoint.GameTopViewpoint
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {knights.viewpoint.GameTopViewpoint} GameTopViewpoint
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GameTopViewpoint.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GameTopViewpoint message.
             * @function verify
             * @memberof knights.viewpoint.GameTopViewpoint
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GameTopViewpoint.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.gameId != null && message.hasOwnProperty("gameId"))
                    if (!$util.isInteger(message.gameId) && !(message.gameId && $util.isInteger(message.gameId.low) && $util.isInteger(message.gameId.high)))
                        return "gameId: integer|Long expected";
                if (message.viewpoints != null && message.hasOwnProperty("viewpoints")) {
                    if (!Array.isArray(message.viewpoints))
                        return "viewpoints: array expected";
                    for (var i = 0; i < message.viewpoints.length; ++i) {
                        var error = $root.knights.viewpoint.ViewpointInfo.verify(message.viewpoints[i]);
                        if (error)
                            return "viewpoints." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a GameTopViewpoint message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof knights.viewpoint.GameTopViewpoint
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {knights.viewpoint.GameTopViewpoint} GameTopViewpoint
             */
            GameTopViewpoint.fromObject = function fromObject(object) {
                if (object instanceof $root.knights.viewpoint.GameTopViewpoint)
                    return object;
                var message = new $root.knights.viewpoint.GameTopViewpoint();
                if (object.gameId != null)
                    if ($util.Long)
                        (message.gameId = $util.Long.fromValue(object.gameId)).unsigned = true;
                    else if (typeof object.gameId === "string")
                        message.gameId = parseInt(object.gameId, 10);
                    else if (typeof object.gameId === "number")
                        message.gameId = object.gameId;
                    else if (typeof object.gameId === "object")
                        message.gameId = new $util.LongBits(object.gameId.low >>> 0, object.gameId.high >>> 0).toNumber(true);
                if (object.viewpoints) {
                    if (!Array.isArray(object.viewpoints))
                        throw TypeError(".knights.viewpoint.GameTopViewpoint.viewpoints: array expected");
                    message.viewpoints = [];
                    for (var i = 0; i < object.viewpoints.length; ++i) {
                        if (typeof object.viewpoints[i] !== "object")
                            throw TypeError(".knights.viewpoint.GameTopViewpoint.viewpoints: object expected");
                        message.viewpoints[i] = $root.knights.viewpoint.ViewpointInfo.fromObject(object.viewpoints[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a GameTopViewpoint message. Also converts values to other types if specified.
             * @function toObject
             * @memberof knights.viewpoint.GameTopViewpoint
             * @static
             * @param {knights.viewpoint.GameTopViewpoint} message GameTopViewpoint
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GameTopViewpoint.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.viewpoints = [];
                if (options.defaults)
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.gameId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.gameId = options.longs === String ? "0" : 0;
                if (message.gameId != null && message.hasOwnProperty("gameId"))
                    if (typeof message.gameId === "number")
                        object.gameId = options.longs === String ? String(message.gameId) : message.gameId;
                    else
                        object.gameId = options.longs === String ? $util.Long.prototype.toString.call(message.gameId) : options.longs === Number ? new $util.LongBits(message.gameId.low >>> 0, message.gameId.high >>> 0).toNumber(true) : message.gameId;
                if (message.viewpoints && message.viewpoints.length) {
                    object.viewpoints = [];
                    for (var j = 0; j < message.viewpoints.length; ++j)
                        object.viewpoints[j] = $root.knights.viewpoint.ViewpointInfo.toObject(message.viewpoints[j], options);
                }
                return object;
            };

            /**
             * Converts this GameTopViewpoint to JSON.
             * @function toJSON
             * @memberof knights.viewpoint.GameTopViewpoint
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GameTopViewpoint.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return GameTopViewpoint;
        })();

        viewpoint.ViewpointScoreCnt = (function() {

            /**
             * Properties of a ViewpointScoreCnt.
             * @memberof knights.viewpoint
             * @interface IViewpointScoreCnt
             * @property {number|Long|null} [gameId] ViewpointScoreCnt gameId
             * @property {number|null} [sTotalCnt] ViewpointScoreCnt sTotalCnt
             * @property {number|null} [aTotalCnt] ViewpointScoreCnt aTotalCnt
             * @property {number|null} [bTotalCnt] ViewpointScoreCnt bTotalCnt
             * @property {number|null} [cTotalCnt] ViewpointScoreCnt cTotalCnt
             * @property {number|null} [dTotalCnt] ViewpointScoreCnt dTotalCnt
             */

            /**
             * Constructs a new ViewpointScoreCnt.
             * @memberof knights.viewpoint
             * @classdesc Represents a ViewpointScoreCnt.
             * @implements IViewpointScoreCnt
             * @constructor
             * @param {knights.viewpoint.IViewpointScoreCnt=} [properties] Properties to set
             */
            function ViewpointScoreCnt(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ViewpointScoreCnt gameId.
             * @member {number|Long} gameId
             * @memberof knights.viewpoint.ViewpointScoreCnt
             * @instance
             */
            ViewpointScoreCnt.prototype.gameId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * ViewpointScoreCnt sTotalCnt.
             * @member {number} sTotalCnt
             * @memberof knights.viewpoint.ViewpointScoreCnt
             * @instance
             */
            ViewpointScoreCnt.prototype.sTotalCnt = 0;

            /**
             * ViewpointScoreCnt aTotalCnt.
             * @member {number} aTotalCnt
             * @memberof knights.viewpoint.ViewpointScoreCnt
             * @instance
             */
            ViewpointScoreCnt.prototype.aTotalCnt = 0;

            /**
             * ViewpointScoreCnt bTotalCnt.
             * @member {number} bTotalCnt
             * @memberof knights.viewpoint.ViewpointScoreCnt
             * @instance
             */
            ViewpointScoreCnt.prototype.bTotalCnt = 0;

            /**
             * ViewpointScoreCnt cTotalCnt.
             * @member {number} cTotalCnt
             * @memberof knights.viewpoint.ViewpointScoreCnt
             * @instance
             */
            ViewpointScoreCnt.prototype.cTotalCnt = 0;

            /**
             * ViewpointScoreCnt dTotalCnt.
             * @member {number} dTotalCnt
             * @memberof knights.viewpoint.ViewpointScoreCnt
             * @instance
             */
            ViewpointScoreCnt.prototype.dTotalCnt = 0;

            /**
             * Creates a new ViewpointScoreCnt instance using the specified properties.
             * @function create
             * @memberof knights.viewpoint.ViewpointScoreCnt
             * @static
             * @param {knights.viewpoint.IViewpointScoreCnt=} [properties] Properties to set
             * @returns {knights.viewpoint.ViewpointScoreCnt} ViewpointScoreCnt instance
             */
            ViewpointScoreCnt.create = function create(properties) {
                return new ViewpointScoreCnt(properties);
            };

            /**
             * Encodes the specified ViewpointScoreCnt message. Does not implicitly {@link knights.viewpoint.ViewpointScoreCnt.verify|verify} messages.
             * @function encode
             * @memberof knights.viewpoint.ViewpointScoreCnt
             * @static
             * @param {knights.viewpoint.IViewpointScoreCnt} message ViewpointScoreCnt message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ViewpointScoreCnt.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.gameId != null && message.hasOwnProperty("gameId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.gameId);
                if (message.sTotalCnt != null && message.hasOwnProperty("sTotalCnt"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.sTotalCnt);
                if (message.aTotalCnt != null && message.hasOwnProperty("aTotalCnt"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.aTotalCnt);
                if (message.bTotalCnt != null && message.hasOwnProperty("bTotalCnt"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.bTotalCnt);
                if (message.cTotalCnt != null && message.hasOwnProperty("cTotalCnt"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.cTotalCnt);
                if (message.dTotalCnt != null && message.hasOwnProperty("dTotalCnt"))
                    writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.dTotalCnt);
                return writer;
            };

            /**
             * Encodes the specified ViewpointScoreCnt message, length delimited. Does not implicitly {@link knights.viewpoint.ViewpointScoreCnt.verify|verify} messages.
             * @function encodeDelimited
             * @memberof knights.viewpoint.ViewpointScoreCnt
             * @static
             * @param {knights.viewpoint.IViewpointScoreCnt} message ViewpointScoreCnt message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ViewpointScoreCnt.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ViewpointScoreCnt message from the specified reader or buffer.
             * @function decode
             * @memberof knights.viewpoint.ViewpointScoreCnt
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {knights.viewpoint.ViewpointScoreCnt} ViewpointScoreCnt
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ViewpointScoreCnt.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.knights.viewpoint.ViewpointScoreCnt();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.gameId = reader.uint64();
                        break;
                    case 2:
                        message.sTotalCnt = reader.uint32();
                        break;
                    case 3:
                        message.aTotalCnt = reader.uint32();
                        break;
                    case 4:
                        message.bTotalCnt = reader.uint32();
                        break;
                    case 5:
                        message.cTotalCnt = reader.uint32();
                        break;
                    case 6:
                        message.dTotalCnt = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ViewpointScoreCnt message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof knights.viewpoint.ViewpointScoreCnt
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {knights.viewpoint.ViewpointScoreCnt} ViewpointScoreCnt
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ViewpointScoreCnt.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ViewpointScoreCnt message.
             * @function verify
             * @memberof knights.viewpoint.ViewpointScoreCnt
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ViewpointScoreCnt.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.gameId != null && message.hasOwnProperty("gameId"))
                    if (!$util.isInteger(message.gameId) && !(message.gameId && $util.isInteger(message.gameId.low) && $util.isInteger(message.gameId.high)))
                        return "gameId: integer|Long expected";
                if (message.sTotalCnt != null && message.hasOwnProperty("sTotalCnt"))
                    if (!$util.isInteger(message.sTotalCnt))
                        return "sTotalCnt: integer expected";
                if (message.aTotalCnt != null && message.hasOwnProperty("aTotalCnt"))
                    if (!$util.isInteger(message.aTotalCnt))
                        return "aTotalCnt: integer expected";
                if (message.bTotalCnt != null && message.hasOwnProperty("bTotalCnt"))
                    if (!$util.isInteger(message.bTotalCnt))
                        return "bTotalCnt: integer expected";
                if (message.cTotalCnt != null && message.hasOwnProperty("cTotalCnt"))
                    if (!$util.isInteger(message.cTotalCnt))
                        return "cTotalCnt: integer expected";
                if (message.dTotalCnt != null && message.hasOwnProperty("dTotalCnt"))
                    if (!$util.isInteger(message.dTotalCnt))
                        return "dTotalCnt: integer expected";
                return null;
            };

            /**
             * Creates a ViewpointScoreCnt message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof knights.viewpoint.ViewpointScoreCnt
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {knights.viewpoint.ViewpointScoreCnt} ViewpointScoreCnt
             */
            ViewpointScoreCnt.fromObject = function fromObject(object) {
                if (object instanceof $root.knights.viewpoint.ViewpointScoreCnt)
                    return object;
                var message = new $root.knights.viewpoint.ViewpointScoreCnt();
                if (object.gameId != null)
                    if ($util.Long)
                        (message.gameId = $util.Long.fromValue(object.gameId)).unsigned = true;
                    else if (typeof object.gameId === "string")
                        message.gameId = parseInt(object.gameId, 10);
                    else if (typeof object.gameId === "number")
                        message.gameId = object.gameId;
                    else if (typeof object.gameId === "object")
                        message.gameId = new $util.LongBits(object.gameId.low >>> 0, object.gameId.high >>> 0).toNumber(true);
                if (object.sTotalCnt != null)
                    message.sTotalCnt = object.sTotalCnt >>> 0;
                if (object.aTotalCnt != null)
                    message.aTotalCnt = object.aTotalCnt >>> 0;
                if (object.bTotalCnt != null)
                    message.bTotalCnt = object.bTotalCnt >>> 0;
                if (object.cTotalCnt != null)
                    message.cTotalCnt = object.cTotalCnt >>> 0;
                if (object.dTotalCnt != null)
                    message.dTotalCnt = object.dTotalCnt >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a ViewpointScoreCnt message. Also converts values to other types if specified.
             * @function toObject
             * @memberof knights.viewpoint.ViewpointScoreCnt
             * @static
             * @param {knights.viewpoint.ViewpointScoreCnt} message ViewpointScoreCnt
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ViewpointScoreCnt.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.gameId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.gameId = options.longs === String ? "0" : 0;
                    object.sTotalCnt = 0;
                    object.aTotalCnt = 0;
                    object.bTotalCnt = 0;
                    object.cTotalCnt = 0;
                    object.dTotalCnt = 0;
                }
                if (message.gameId != null && message.hasOwnProperty("gameId"))
                    if (typeof message.gameId === "number")
                        object.gameId = options.longs === String ? String(message.gameId) : message.gameId;
                    else
                        object.gameId = options.longs === String ? $util.Long.prototype.toString.call(message.gameId) : options.longs === Number ? new $util.LongBits(message.gameId.low >>> 0, message.gameId.high >>> 0).toNumber(true) : message.gameId;
                if (message.sTotalCnt != null && message.hasOwnProperty("sTotalCnt"))
                    object.sTotalCnt = message.sTotalCnt;
                if (message.aTotalCnt != null && message.hasOwnProperty("aTotalCnt"))
                    object.aTotalCnt = message.aTotalCnt;
                if (message.bTotalCnt != null && message.hasOwnProperty("bTotalCnt"))
                    object.bTotalCnt = message.bTotalCnt;
                if (message.cTotalCnt != null && message.hasOwnProperty("cTotalCnt"))
                    object.cTotalCnt = message.cTotalCnt;
                if (message.dTotalCnt != null && message.hasOwnProperty("dTotalCnt"))
                    object.dTotalCnt = message.dTotalCnt;
                return object;
            };

            /**
             * Converts this ViewpointScoreCnt to JSON.
             * @function toJSON
             * @memberof knights.viewpoint.ViewpointScoreCnt
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ViewpointScoreCnt.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ViewpointScoreCnt;
        })();

        viewpoint.MultiGetViewpointCountS2sReq = (function() {

            /**
             * Properties of a MultiGetViewpointCountS2sReq.
             * @memberof knights.viewpoint
             * @interface IMultiGetViewpointCountS2sReq
             * @property {number} dataType MultiGetViewpointCountS2sReq dataType
             * @property {Array.<number|Long>|null} [dataIds] MultiGetViewpointCountS2sReq dataIds
             */

            /**
             * Constructs a new MultiGetViewpointCountS2sReq.
             * @memberof knights.viewpoint
             * @classdesc Represents a MultiGetViewpointCountS2sReq.
             * @implements IMultiGetViewpointCountS2sReq
             * @constructor
             * @param {knights.viewpoint.IMultiGetViewpointCountS2sReq=} [properties] Properties to set
             */
            function MultiGetViewpointCountS2sReq(properties) {
                this.dataIds = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MultiGetViewpointCountS2sReq dataType.
             * @member {number} dataType
             * @memberof knights.viewpoint.MultiGetViewpointCountS2sReq
             * @instance
             */
            MultiGetViewpointCountS2sReq.prototype.dataType = 0;

            /**
             * MultiGetViewpointCountS2sReq dataIds.
             * @member {Array.<number|Long>} dataIds
             * @memberof knights.viewpoint.MultiGetViewpointCountS2sReq
             * @instance
             */
            MultiGetViewpointCountS2sReq.prototype.dataIds = $util.emptyArray;

            /**
             * Creates a new MultiGetViewpointCountS2sReq instance using the specified properties.
             * @function create
             * @memberof knights.viewpoint.MultiGetViewpointCountS2sReq
             * @static
             * @param {knights.viewpoint.IMultiGetViewpointCountS2sReq=} [properties] Properties to set
             * @returns {knights.viewpoint.MultiGetViewpointCountS2sReq} MultiGetViewpointCountS2sReq instance
             */
            MultiGetViewpointCountS2sReq.create = function create(properties) {
                return new MultiGetViewpointCountS2sReq(properties);
            };

            /**
             * Encodes the specified MultiGetViewpointCountS2sReq message. Does not implicitly {@link knights.viewpoint.MultiGetViewpointCountS2sReq.verify|verify} messages.
             * @function encode
             * @memberof knights.viewpoint.MultiGetViewpointCountS2sReq
             * @static
             * @param {knights.viewpoint.IMultiGetViewpointCountS2sReq} message MultiGetViewpointCountS2sReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MultiGetViewpointCountS2sReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.dataType);
                if (message.dataIds != null && message.dataIds.length)
                    for (var i = 0; i < message.dataIds.length; ++i)
                        writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.dataIds[i]);
                return writer;
            };

            /**
             * Encodes the specified MultiGetViewpointCountS2sReq message, length delimited. Does not implicitly {@link knights.viewpoint.MultiGetViewpointCountS2sReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof knights.viewpoint.MultiGetViewpointCountS2sReq
             * @static
             * @param {knights.viewpoint.IMultiGetViewpointCountS2sReq} message MultiGetViewpointCountS2sReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MultiGetViewpointCountS2sReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MultiGetViewpointCountS2sReq message from the specified reader or buffer.
             * @function decode
             * @memberof knights.viewpoint.MultiGetViewpointCountS2sReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {knights.viewpoint.MultiGetViewpointCountS2sReq} MultiGetViewpointCountS2sReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MultiGetViewpointCountS2sReq.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.knights.viewpoint.MultiGetViewpointCountS2sReq();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.dataType = reader.uint32();
                        break;
                    case 2:
                        if (!(message.dataIds && message.dataIds.length))
                            message.dataIds = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.dataIds.push(reader.uint64());
                        } else
                            message.dataIds.push(reader.uint64());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("dataType"))
                    throw $util.ProtocolError("missing required 'dataType'", { instance: message });
                return message;
            };

            /**
             * Decodes a MultiGetViewpointCountS2sReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof knights.viewpoint.MultiGetViewpointCountS2sReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {knights.viewpoint.MultiGetViewpointCountS2sReq} MultiGetViewpointCountS2sReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MultiGetViewpointCountS2sReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MultiGetViewpointCountS2sReq message.
             * @function verify
             * @memberof knights.viewpoint.MultiGetViewpointCountS2sReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MultiGetViewpointCountS2sReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.dataType))
                    return "dataType: integer expected";
                if (message.dataIds != null && message.hasOwnProperty("dataIds")) {
                    if (!Array.isArray(message.dataIds))
                        return "dataIds: array expected";
                    for (var i = 0; i < message.dataIds.length; ++i)
                        if (!$util.isInteger(message.dataIds[i]) && !(message.dataIds[i] && $util.isInteger(message.dataIds[i].low) && $util.isInteger(message.dataIds[i].high)))
                            return "dataIds: integer|Long[] expected";
                }
                return null;
            };

            /**
             * Creates a MultiGetViewpointCountS2sReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof knights.viewpoint.MultiGetViewpointCountS2sReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {knights.viewpoint.MultiGetViewpointCountS2sReq} MultiGetViewpointCountS2sReq
             */
            MultiGetViewpointCountS2sReq.fromObject = function fromObject(object) {
                if (object instanceof $root.knights.viewpoint.MultiGetViewpointCountS2sReq)
                    return object;
                var message = new $root.knights.viewpoint.MultiGetViewpointCountS2sReq();
                if (object.dataType != null)
                    message.dataType = object.dataType >>> 0;
                if (object.dataIds) {
                    if (!Array.isArray(object.dataIds))
                        throw TypeError(".knights.viewpoint.MultiGetViewpointCountS2sReq.dataIds: array expected");
                    message.dataIds = [];
                    for (var i = 0; i < object.dataIds.length; ++i)
                        if ($util.Long)
                            (message.dataIds[i] = $util.Long.fromValue(object.dataIds[i])).unsigned = true;
                        else if (typeof object.dataIds[i] === "string")
                            message.dataIds[i] = parseInt(object.dataIds[i], 10);
                        else if (typeof object.dataIds[i] === "number")
                            message.dataIds[i] = object.dataIds[i];
                        else if (typeof object.dataIds[i] === "object")
                            message.dataIds[i] = new $util.LongBits(object.dataIds[i].low >>> 0, object.dataIds[i].high >>> 0).toNumber(true);
                }
                return message;
            };

            /**
             * Creates a plain object from a MultiGetViewpointCountS2sReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof knights.viewpoint.MultiGetViewpointCountS2sReq
             * @static
             * @param {knights.viewpoint.MultiGetViewpointCountS2sReq} message MultiGetViewpointCountS2sReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MultiGetViewpointCountS2sReq.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.dataIds = [];
                if (options.defaults)
                    object.dataType = 0;
                if (message.dataType != null && message.hasOwnProperty("dataType"))
                    object.dataType = message.dataType;
                if (message.dataIds && message.dataIds.length) {
                    object.dataIds = [];
                    for (var j = 0; j < message.dataIds.length; ++j)
                        if (typeof message.dataIds[j] === "number")
                            object.dataIds[j] = options.longs === String ? String(message.dataIds[j]) : message.dataIds[j];
                        else
                            object.dataIds[j] = options.longs === String ? $util.Long.prototype.toString.call(message.dataIds[j]) : options.longs === Number ? new $util.LongBits(message.dataIds[j].low >>> 0, message.dataIds[j].high >>> 0).toNumber(true) : message.dataIds[j];
                }
                return object;
            };

            /**
             * Converts this MultiGetViewpointCountS2sReq to JSON.
             * @function toJSON
             * @memberof knights.viewpoint.MultiGetViewpointCountS2sReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MultiGetViewpointCountS2sReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MultiGetViewpointCountS2sReq;
        })();

        viewpoint.MultiGetViewpointCountS2sRsp = (function() {

            /**
             * Properties of a MultiGetViewpointCountS2sRsp.
             * @memberof knights.viewpoint
             * @interface IMultiGetViewpointCountS2sRsp
             * @property {number} retCode MultiGetViewpointCountS2sRsp retCode
             * @property {string|null} [errMsg] MultiGetViewpointCountS2sRsp errMsg
             * @property {Array.<knights.viewpoint.IViewpointCount>|null} [viewpointCount] MultiGetViewpointCountS2sRsp viewpointCount
             */

            /**
             * Constructs a new MultiGetViewpointCountS2sRsp.
             * @memberof knights.viewpoint
             * @classdesc Represents a MultiGetViewpointCountS2sRsp.
             * @implements IMultiGetViewpointCountS2sRsp
             * @constructor
             * @param {knights.viewpoint.IMultiGetViewpointCountS2sRsp=} [properties] Properties to set
             */
            function MultiGetViewpointCountS2sRsp(properties) {
                this.viewpointCount = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MultiGetViewpointCountS2sRsp retCode.
             * @member {number} retCode
             * @memberof knights.viewpoint.MultiGetViewpointCountS2sRsp
             * @instance
             */
            MultiGetViewpointCountS2sRsp.prototype.retCode = 0;

            /**
             * MultiGetViewpointCountS2sRsp errMsg.
             * @member {string} errMsg
             * @memberof knights.viewpoint.MultiGetViewpointCountS2sRsp
             * @instance
             */
            MultiGetViewpointCountS2sRsp.prototype.errMsg = "";

            /**
             * MultiGetViewpointCountS2sRsp viewpointCount.
             * @member {Array.<knights.viewpoint.IViewpointCount>} viewpointCount
             * @memberof knights.viewpoint.MultiGetViewpointCountS2sRsp
             * @instance
             */
            MultiGetViewpointCountS2sRsp.prototype.viewpointCount = $util.emptyArray;

            /**
             * Creates a new MultiGetViewpointCountS2sRsp instance using the specified properties.
             * @function create
             * @memberof knights.viewpoint.MultiGetViewpointCountS2sRsp
             * @static
             * @param {knights.viewpoint.IMultiGetViewpointCountS2sRsp=} [properties] Properties to set
             * @returns {knights.viewpoint.MultiGetViewpointCountS2sRsp} MultiGetViewpointCountS2sRsp instance
             */
            MultiGetViewpointCountS2sRsp.create = function create(properties) {
                return new MultiGetViewpointCountS2sRsp(properties);
            };

            /**
             * Encodes the specified MultiGetViewpointCountS2sRsp message. Does not implicitly {@link knights.viewpoint.MultiGetViewpointCountS2sRsp.verify|verify} messages.
             * @function encode
             * @memberof knights.viewpoint.MultiGetViewpointCountS2sRsp
             * @static
             * @param {knights.viewpoint.IMultiGetViewpointCountS2sRsp} message MultiGetViewpointCountS2sRsp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MultiGetViewpointCountS2sRsp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.retCode);
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
                if (message.viewpointCount != null && message.viewpointCount.length)
                    for (var i = 0; i < message.viewpointCount.length; ++i)
                        $root.knights.viewpoint.ViewpointCount.encode(message.viewpointCount[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified MultiGetViewpointCountS2sRsp message, length delimited. Does not implicitly {@link knights.viewpoint.MultiGetViewpointCountS2sRsp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof knights.viewpoint.MultiGetViewpointCountS2sRsp
             * @static
             * @param {knights.viewpoint.IMultiGetViewpointCountS2sRsp} message MultiGetViewpointCountS2sRsp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MultiGetViewpointCountS2sRsp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MultiGetViewpointCountS2sRsp message from the specified reader or buffer.
             * @function decode
             * @memberof knights.viewpoint.MultiGetViewpointCountS2sRsp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {knights.viewpoint.MultiGetViewpointCountS2sRsp} MultiGetViewpointCountS2sRsp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MultiGetViewpointCountS2sRsp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.knights.viewpoint.MultiGetViewpointCountS2sRsp();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.retCode = reader.uint32();
                        break;
                    case 2:
                        message.errMsg = reader.string();
                        break;
                    case 3:
                        if (!(message.viewpointCount && message.viewpointCount.length))
                            message.viewpointCount = [];
                        message.viewpointCount.push($root.knights.viewpoint.ViewpointCount.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("retCode"))
                    throw $util.ProtocolError("missing required 'retCode'", { instance: message });
                return message;
            };

            /**
             * Decodes a MultiGetViewpointCountS2sRsp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof knights.viewpoint.MultiGetViewpointCountS2sRsp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {knights.viewpoint.MultiGetViewpointCountS2sRsp} MultiGetViewpointCountS2sRsp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MultiGetViewpointCountS2sRsp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MultiGetViewpointCountS2sRsp message.
             * @function verify
             * @memberof knights.viewpoint.MultiGetViewpointCountS2sRsp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MultiGetViewpointCountS2sRsp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.retCode))
                    return "retCode: integer expected";
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    if (!$util.isString(message.errMsg))
                        return "errMsg: string expected";
                if (message.viewpointCount != null && message.hasOwnProperty("viewpointCount")) {
                    if (!Array.isArray(message.viewpointCount))
                        return "viewpointCount: array expected";
                    for (var i = 0; i < message.viewpointCount.length; ++i) {
                        var error = $root.knights.viewpoint.ViewpointCount.verify(message.viewpointCount[i]);
                        if (error)
                            return "viewpointCount." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a MultiGetViewpointCountS2sRsp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof knights.viewpoint.MultiGetViewpointCountS2sRsp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {knights.viewpoint.MultiGetViewpointCountS2sRsp} MultiGetViewpointCountS2sRsp
             */
            MultiGetViewpointCountS2sRsp.fromObject = function fromObject(object) {
                if (object instanceof $root.knights.viewpoint.MultiGetViewpointCountS2sRsp)
                    return object;
                var message = new $root.knights.viewpoint.MultiGetViewpointCountS2sRsp();
                if (object.retCode != null)
                    message.retCode = object.retCode >>> 0;
                if (object.errMsg != null)
                    message.errMsg = String(object.errMsg);
                if (object.viewpointCount) {
                    if (!Array.isArray(object.viewpointCount))
                        throw TypeError(".knights.viewpoint.MultiGetViewpointCountS2sRsp.viewpointCount: array expected");
                    message.viewpointCount = [];
                    for (var i = 0; i < object.viewpointCount.length; ++i) {
                        if (typeof object.viewpointCount[i] !== "object")
                            throw TypeError(".knights.viewpoint.MultiGetViewpointCountS2sRsp.viewpointCount: object expected");
                        message.viewpointCount[i] = $root.knights.viewpoint.ViewpointCount.fromObject(object.viewpointCount[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a MultiGetViewpointCountS2sRsp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof knights.viewpoint.MultiGetViewpointCountS2sRsp
             * @static
             * @param {knights.viewpoint.MultiGetViewpointCountS2sRsp} message MultiGetViewpointCountS2sRsp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MultiGetViewpointCountS2sRsp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.viewpointCount = [];
                if (options.defaults) {
                    object.retCode = 0;
                    object.errMsg = "";
                }
                if (message.retCode != null && message.hasOwnProperty("retCode"))
                    object.retCode = message.retCode;
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    object.errMsg = message.errMsg;
                if (message.viewpointCount && message.viewpointCount.length) {
                    object.viewpointCount = [];
                    for (var j = 0; j < message.viewpointCount.length; ++j)
                        object.viewpointCount[j] = $root.knights.viewpoint.ViewpointCount.toObject(message.viewpointCount[j], options);
                }
                return object;
            };

            /**
             * Converts this MultiGetViewpointCountS2sRsp to JSON.
             * @function toJSON
             * @memberof knights.viewpoint.MultiGetViewpointCountS2sRsp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MultiGetViewpointCountS2sRsp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MultiGetViewpointCountS2sRsp;
        })();

        viewpoint.MultiGetGameViewpointS2sReq = (function() {

            /**
             * Properties of a MultiGetGameViewpointS2sReq.
             * @memberof knights.viewpoint
             * @interface IMultiGetGameViewpointS2sReq
             * @property {Array.<number|Long>|null} [gameIds] MultiGetGameViewpointS2sReq gameIds
             */

            /**
             * Constructs a new MultiGetGameViewpointS2sReq.
             * @memberof knights.viewpoint
             * @classdesc Represents a MultiGetGameViewpointS2sReq.
             * @implements IMultiGetGameViewpointS2sReq
             * @constructor
             * @param {knights.viewpoint.IMultiGetGameViewpointS2sReq=} [properties] Properties to set
             */
            function MultiGetGameViewpointS2sReq(properties) {
                this.gameIds = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MultiGetGameViewpointS2sReq gameIds.
             * @member {Array.<number|Long>} gameIds
             * @memberof knights.viewpoint.MultiGetGameViewpointS2sReq
             * @instance
             */
            MultiGetGameViewpointS2sReq.prototype.gameIds = $util.emptyArray;

            /**
             * Creates a new MultiGetGameViewpointS2sReq instance using the specified properties.
             * @function create
             * @memberof knights.viewpoint.MultiGetGameViewpointS2sReq
             * @static
             * @param {knights.viewpoint.IMultiGetGameViewpointS2sReq=} [properties] Properties to set
             * @returns {knights.viewpoint.MultiGetGameViewpointS2sReq} MultiGetGameViewpointS2sReq instance
             */
            MultiGetGameViewpointS2sReq.create = function create(properties) {
                return new MultiGetGameViewpointS2sReq(properties);
            };

            /**
             * Encodes the specified MultiGetGameViewpointS2sReq message. Does not implicitly {@link knights.viewpoint.MultiGetGameViewpointS2sReq.verify|verify} messages.
             * @function encode
             * @memberof knights.viewpoint.MultiGetGameViewpointS2sReq
             * @static
             * @param {knights.viewpoint.IMultiGetGameViewpointS2sReq} message MultiGetGameViewpointS2sReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MultiGetGameViewpointS2sReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.gameIds != null && message.gameIds.length)
                    for (var i = 0; i < message.gameIds.length; ++i)
                        writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.gameIds[i]);
                return writer;
            };

            /**
             * Encodes the specified MultiGetGameViewpointS2sReq message, length delimited. Does not implicitly {@link knights.viewpoint.MultiGetGameViewpointS2sReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof knights.viewpoint.MultiGetGameViewpointS2sReq
             * @static
             * @param {knights.viewpoint.IMultiGetGameViewpointS2sReq} message MultiGetGameViewpointS2sReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MultiGetGameViewpointS2sReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MultiGetGameViewpointS2sReq message from the specified reader or buffer.
             * @function decode
             * @memberof knights.viewpoint.MultiGetGameViewpointS2sReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {knights.viewpoint.MultiGetGameViewpointS2sReq} MultiGetGameViewpointS2sReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MultiGetGameViewpointS2sReq.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.knights.viewpoint.MultiGetGameViewpointS2sReq();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.gameIds && message.gameIds.length))
                            message.gameIds = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.gameIds.push(reader.uint64());
                        } else
                            message.gameIds.push(reader.uint64());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MultiGetGameViewpointS2sReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof knights.viewpoint.MultiGetGameViewpointS2sReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {knights.viewpoint.MultiGetGameViewpointS2sReq} MultiGetGameViewpointS2sReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MultiGetGameViewpointS2sReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MultiGetGameViewpointS2sReq message.
             * @function verify
             * @memberof knights.viewpoint.MultiGetGameViewpointS2sReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MultiGetGameViewpointS2sReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.gameIds != null && message.hasOwnProperty("gameIds")) {
                    if (!Array.isArray(message.gameIds))
                        return "gameIds: array expected";
                    for (var i = 0; i < message.gameIds.length; ++i)
                        if (!$util.isInteger(message.gameIds[i]) && !(message.gameIds[i] && $util.isInteger(message.gameIds[i].low) && $util.isInteger(message.gameIds[i].high)))
                            return "gameIds: integer|Long[] expected";
                }
                return null;
            };

            /**
             * Creates a MultiGetGameViewpointS2sReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof knights.viewpoint.MultiGetGameViewpointS2sReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {knights.viewpoint.MultiGetGameViewpointS2sReq} MultiGetGameViewpointS2sReq
             */
            MultiGetGameViewpointS2sReq.fromObject = function fromObject(object) {
                if (object instanceof $root.knights.viewpoint.MultiGetGameViewpointS2sReq)
                    return object;
                var message = new $root.knights.viewpoint.MultiGetGameViewpointS2sReq();
                if (object.gameIds) {
                    if (!Array.isArray(object.gameIds))
                        throw TypeError(".knights.viewpoint.MultiGetGameViewpointS2sReq.gameIds: array expected");
                    message.gameIds = [];
                    for (var i = 0; i < object.gameIds.length; ++i)
                        if ($util.Long)
                            (message.gameIds[i] = $util.Long.fromValue(object.gameIds[i])).unsigned = true;
                        else if (typeof object.gameIds[i] === "string")
                            message.gameIds[i] = parseInt(object.gameIds[i], 10);
                        else if (typeof object.gameIds[i] === "number")
                            message.gameIds[i] = object.gameIds[i];
                        else if (typeof object.gameIds[i] === "object")
                            message.gameIds[i] = new $util.LongBits(object.gameIds[i].low >>> 0, object.gameIds[i].high >>> 0).toNumber(true);
                }
                return message;
            };

            /**
             * Creates a plain object from a MultiGetGameViewpointS2sReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof knights.viewpoint.MultiGetGameViewpointS2sReq
             * @static
             * @param {knights.viewpoint.MultiGetGameViewpointS2sReq} message MultiGetGameViewpointS2sReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MultiGetGameViewpointS2sReq.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.gameIds = [];
                if (message.gameIds && message.gameIds.length) {
                    object.gameIds = [];
                    for (var j = 0; j < message.gameIds.length; ++j)
                        if (typeof message.gameIds[j] === "number")
                            object.gameIds[j] = options.longs === String ? String(message.gameIds[j]) : message.gameIds[j];
                        else
                            object.gameIds[j] = options.longs === String ? $util.Long.prototype.toString.call(message.gameIds[j]) : options.longs === Number ? new $util.LongBits(message.gameIds[j].low >>> 0, message.gameIds[j].high >>> 0).toNumber(true) : message.gameIds[j];
                }
                return object;
            };

            /**
             * Converts this MultiGetGameViewpointS2sReq to JSON.
             * @function toJSON
             * @memberof knights.viewpoint.MultiGetGameViewpointS2sReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MultiGetGameViewpointS2sReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MultiGetGameViewpointS2sReq;
        })();

        viewpoint.MultiGetGameViewpointS2sRsp = (function() {

            /**
             * Properties of a MultiGetGameViewpointS2sRsp.
             * @memberof knights.viewpoint
             * @interface IMultiGetGameViewpointS2sRsp
             * @property {number} retCode MultiGetGameViewpointS2sRsp retCode
             * @property {string|null} [errMsg] MultiGetGameViewpointS2sRsp errMsg
             * @property {Array.<knights.viewpoint.IGameTopViewpoint>|null} [gameViewpoints] MultiGetGameViewpointS2sRsp gameViewpoints
             */

            /**
             * Constructs a new MultiGetGameViewpointS2sRsp.
             * @memberof knights.viewpoint
             * @classdesc Represents a MultiGetGameViewpointS2sRsp.
             * @implements IMultiGetGameViewpointS2sRsp
             * @constructor
             * @param {knights.viewpoint.IMultiGetGameViewpointS2sRsp=} [properties] Properties to set
             */
            function MultiGetGameViewpointS2sRsp(properties) {
                this.gameViewpoints = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MultiGetGameViewpointS2sRsp retCode.
             * @member {number} retCode
             * @memberof knights.viewpoint.MultiGetGameViewpointS2sRsp
             * @instance
             */
            MultiGetGameViewpointS2sRsp.prototype.retCode = 0;

            /**
             * MultiGetGameViewpointS2sRsp errMsg.
             * @member {string} errMsg
             * @memberof knights.viewpoint.MultiGetGameViewpointS2sRsp
             * @instance
             */
            MultiGetGameViewpointS2sRsp.prototype.errMsg = "";

            /**
             * MultiGetGameViewpointS2sRsp gameViewpoints.
             * @member {Array.<knights.viewpoint.IGameTopViewpoint>} gameViewpoints
             * @memberof knights.viewpoint.MultiGetGameViewpointS2sRsp
             * @instance
             */
            MultiGetGameViewpointS2sRsp.prototype.gameViewpoints = $util.emptyArray;

            /**
             * Creates a new MultiGetGameViewpointS2sRsp instance using the specified properties.
             * @function create
             * @memberof knights.viewpoint.MultiGetGameViewpointS2sRsp
             * @static
             * @param {knights.viewpoint.IMultiGetGameViewpointS2sRsp=} [properties] Properties to set
             * @returns {knights.viewpoint.MultiGetGameViewpointS2sRsp} MultiGetGameViewpointS2sRsp instance
             */
            MultiGetGameViewpointS2sRsp.create = function create(properties) {
                return new MultiGetGameViewpointS2sRsp(properties);
            };

            /**
             * Encodes the specified MultiGetGameViewpointS2sRsp message. Does not implicitly {@link knights.viewpoint.MultiGetGameViewpointS2sRsp.verify|verify} messages.
             * @function encode
             * @memberof knights.viewpoint.MultiGetGameViewpointS2sRsp
             * @static
             * @param {knights.viewpoint.IMultiGetGameViewpointS2sRsp} message MultiGetGameViewpointS2sRsp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MultiGetGameViewpointS2sRsp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.retCode);
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
                if (message.gameViewpoints != null && message.gameViewpoints.length)
                    for (var i = 0; i < message.gameViewpoints.length; ++i)
                        $root.knights.viewpoint.GameTopViewpoint.encode(message.gameViewpoints[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified MultiGetGameViewpointS2sRsp message, length delimited. Does not implicitly {@link knights.viewpoint.MultiGetGameViewpointS2sRsp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof knights.viewpoint.MultiGetGameViewpointS2sRsp
             * @static
             * @param {knights.viewpoint.IMultiGetGameViewpointS2sRsp} message MultiGetGameViewpointS2sRsp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MultiGetGameViewpointS2sRsp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MultiGetGameViewpointS2sRsp message from the specified reader or buffer.
             * @function decode
             * @memberof knights.viewpoint.MultiGetGameViewpointS2sRsp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {knights.viewpoint.MultiGetGameViewpointS2sRsp} MultiGetGameViewpointS2sRsp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MultiGetGameViewpointS2sRsp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.knights.viewpoint.MultiGetGameViewpointS2sRsp();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.retCode = reader.uint32();
                        break;
                    case 2:
                        message.errMsg = reader.string();
                        break;
                    case 3:
                        if (!(message.gameViewpoints && message.gameViewpoints.length))
                            message.gameViewpoints = [];
                        message.gameViewpoints.push($root.knights.viewpoint.GameTopViewpoint.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("retCode"))
                    throw $util.ProtocolError("missing required 'retCode'", { instance: message });
                return message;
            };

            /**
             * Decodes a MultiGetGameViewpointS2sRsp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof knights.viewpoint.MultiGetGameViewpointS2sRsp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {knights.viewpoint.MultiGetGameViewpointS2sRsp} MultiGetGameViewpointS2sRsp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MultiGetGameViewpointS2sRsp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MultiGetGameViewpointS2sRsp message.
             * @function verify
             * @memberof knights.viewpoint.MultiGetGameViewpointS2sRsp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MultiGetGameViewpointS2sRsp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.retCode))
                    return "retCode: integer expected";
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    if (!$util.isString(message.errMsg))
                        return "errMsg: string expected";
                if (message.gameViewpoints != null && message.hasOwnProperty("gameViewpoints")) {
                    if (!Array.isArray(message.gameViewpoints))
                        return "gameViewpoints: array expected";
                    for (var i = 0; i < message.gameViewpoints.length; ++i) {
                        var error = $root.knights.viewpoint.GameTopViewpoint.verify(message.gameViewpoints[i]);
                        if (error)
                            return "gameViewpoints." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a MultiGetGameViewpointS2sRsp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof knights.viewpoint.MultiGetGameViewpointS2sRsp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {knights.viewpoint.MultiGetGameViewpointS2sRsp} MultiGetGameViewpointS2sRsp
             */
            MultiGetGameViewpointS2sRsp.fromObject = function fromObject(object) {
                if (object instanceof $root.knights.viewpoint.MultiGetGameViewpointS2sRsp)
                    return object;
                var message = new $root.knights.viewpoint.MultiGetGameViewpointS2sRsp();
                if (object.retCode != null)
                    message.retCode = object.retCode >>> 0;
                if (object.errMsg != null)
                    message.errMsg = String(object.errMsg);
                if (object.gameViewpoints) {
                    if (!Array.isArray(object.gameViewpoints))
                        throw TypeError(".knights.viewpoint.MultiGetGameViewpointS2sRsp.gameViewpoints: array expected");
                    message.gameViewpoints = [];
                    for (var i = 0; i < object.gameViewpoints.length; ++i) {
                        if (typeof object.gameViewpoints[i] !== "object")
                            throw TypeError(".knights.viewpoint.MultiGetGameViewpointS2sRsp.gameViewpoints: object expected");
                        message.gameViewpoints[i] = $root.knights.viewpoint.GameTopViewpoint.fromObject(object.gameViewpoints[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a MultiGetGameViewpointS2sRsp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof knights.viewpoint.MultiGetGameViewpointS2sRsp
             * @static
             * @param {knights.viewpoint.MultiGetGameViewpointS2sRsp} message MultiGetGameViewpointS2sRsp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MultiGetGameViewpointS2sRsp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.gameViewpoints = [];
                if (options.defaults) {
                    object.retCode = 0;
                    object.errMsg = "";
                }
                if (message.retCode != null && message.hasOwnProperty("retCode"))
                    object.retCode = message.retCode;
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    object.errMsg = message.errMsg;
                if (message.gameViewpoints && message.gameViewpoints.length) {
                    object.gameViewpoints = [];
                    for (var j = 0; j < message.gameViewpoints.length; ++j)
                        object.gameViewpoints[j] = $root.knights.viewpoint.GameTopViewpoint.toObject(message.gameViewpoints[j], options);
                }
                return object;
            };

            /**
             * Converts this MultiGetGameViewpointS2sRsp to JSON.
             * @function toJSON
             * @memberof knights.viewpoint.MultiGetGameViewpointS2sRsp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MultiGetGameViewpointS2sRsp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MultiGetGameViewpointS2sRsp;
        })();

        viewpoint.GetViewpointS2sReq = (function() {

            /**
             * Properties of a GetViewpointS2sReq.
             * @memberof knights.viewpoint
             * @interface IGetViewpointS2sReq
             * @property {string} viewpointId GetViewpointS2sReq viewpointId
             * @property {boolean|null} [needGameInfo] GetViewpointS2sReq needGameInfo
             * @property {boolean|null} [needJsonData] GetViewpointS2sReq needJsonData
             * @property {boolean|null} [needUserInfo] GetViewpointS2sReq needUserInfo
             */

            /**
             * Constructs a new GetViewpointS2sReq.
             * @memberof knights.viewpoint
             * @classdesc Represents a GetViewpointS2sReq.
             * @implements IGetViewpointS2sReq
             * @constructor
             * @param {knights.viewpoint.IGetViewpointS2sReq=} [properties] Properties to set
             */
            function GetViewpointS2sReq(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GetViewpointS2sReq viewpointId.
             * @member {string} viewpointId
             * @memberof knights.viewpoint.GetViewpointS2sReq
             * @instance
             */
            GetViewpointS2sReq.prototype.viewpointId = "";

            /**
             * GetViewpointS2sReq needGameInfo.
             * @member {boolean} needGameInfo
             * @memberof knights.viewpoint.GetViewpointS2sReq
             * @instance
             */
            GetViewpointS2sReq.prototype.needGameInfo = false;

            /**
             * GetViewpointS2sReq needJsonData.
             * @member {boolean} needJsonData
             * @memberof knights.viewpoint.GetViewpointS2sReq
             * @instance
             */
            GetViewpointS2sReq.prototype.needJsonData = false;

            /**
             * GetViewpointS2sReq needUserInfo.
             * @member {boolean} needUserInfo
             * @memberof knights.viewpoint.GetViewpointS2sReq
             * @instance
             */
            GetViewpointS2sReq.prototype.needUserInfo = false;

            /**
             * Creates a new GetViewpointS2sReq instance using the specified properties.
             * @function create
             * @memberof knights.viewpoint.GetViewpointS2sReq
             * @static
             * @param {knights.viewpoint.IGetViewpointS2sReq=} [properties] Properties to set
             * @returns {knights.viewpoint.GetViewpointS2sReq} GetViewpointS2sReq instance
             */
            GetViewpointS2sReq.create = function create(properties) {
                return new GetViewpointS2sReq(properties);
            };

            /**
             * Encodes the specified GetViewpointS2sReq message. Does not implicitly {@link knights.viewpoint.GetViewpointS2sReq.verify|verify} messages.
             * @function encode
             * @memberof knights.viewpoint.GetViewpointS2sReq
             * @static
             * @param {knights.viewpoint.IGetViewpointS2sReq} message GetViewpointS2sReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetViewpointS2sReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.viewpointId);
                if (message.needGameInfo != null && message.hasOwnProperty("needGameInfo"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.needGameInfo);
                if (message.needJsonData != null && message.hasOwnProperty("needJsonData"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.needJsonData);
                if (message.needUserInfo != null && message.hasOwnProperty("needUserInfo"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.needUserInfo);
                return writer;
            };

            /**
             * Encodes the specified GetViewpointS2sReq message, length delimited. Does not implicitly {@link knights.viewpoint.GetViewpointS2sReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof knights.viewpoint.GetViewpointS2sReq
             * @static
             * @param {knights.viewpoint.IGetViewpointS2sReq} message GetViewpointS2sReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetViewpointS2sReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetViewpointS2sReq message from the specified reader or buffer.
             * @function decode
             * @memberof knights.viewpoint.GetViewpointS2sReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {knights.viewpoint.GetViewpointS2sReq} GetViewpointS2sReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetViewpointS2sReq.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.knights.viewpoint.GetViewpointS2sReq();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.viewpointId = reader.string();
                        break;
                    case 2:
                        message.needGameInfo = reader.bool();
                        break;
                    case 3:
                        message.needJsonData = reader.bool();
                        break;
                    case 4:
                        message.needUserInfo = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("viewpointId"))
                    throw $util.ProtocolError("missing required 'viewpointId'", { instance: message });
                return message;
            };

            /**
             * Decodes a GetViewpointS2sReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof knights.viewpoint.GetViewpointS2sReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {knights.viewpoint.GetViewpointS2sReq} GetViewpointS2sReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetViewpointS2sReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GetViewpointS2sReq message.
             * @function verify
             * @memberof knights.viewpoint.GetViewpointS2sReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetViewpointS2sReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.viewpointId))
                    return "viewpointId: string expected";
                if (message.needGameInfo != null && message.hasOwnProperty("needGameInfo"))
                    if (typeof message.needGameInfo !== "boolean")
                        return "needGameInfo: boolean expected";
                if (message.needJsonData != null && message.hasOwnProperty("needJsonData"))
                    if (typeof message.needJsonData !== "boolean")
                        return "needJsonData: boolean expected";
                if (message.needUserInfo != null && message.hasOwnProperty("needUserInfo"))
                    if (typeof message.needUserInfo !== "boolean")
                        return "needUserInfo: boolean expected";
                return null;
            };

            /**
             * Creates a GetViewpointS2sReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof knights.viewpoint.GetViewpointS2sReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {knights.viewpoint.GetViewpointS2sReq} GetViewpointS2sReq
             */
            GetViewpointS2sReq.fromObject = function fromObject(object) {
                if (object instanceof $root.knights.viewpoint.GetViewpointS2sReq)
                    return object;
                var message = new $root.knights.viewpoint.GetViewpointS2sReq();
                if (object.viewpointId != null)
                    message.viewpointId = String(object.viewpointId);
                if (object.needGameInfo != null)
                    message.needGameInfo = Boolean(object.needGameInfo);
                if (object.needJsonData != null)
                    message.needJsonData = Boolean(object.needJsonData);
                if (object.needUserInfo != null)
                    message.needUserInfo = Boolean(object.needUserInfo);
                return message;
            };

            /**
             * Creates a plain object from a GetViewpointS2sReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof knights.viewpoint.GetViewpointS2sReq
             * @static
             * @param {knights.viewpoint.GetViewpointS2sReq} message GetViewpointS2sReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetViewpointS2sReq.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.viewpointId = "";
                    object.needGameInfo = false;
                    object.needJsonData = false;
                    object.needUserInfo = false;
                }
                if (message.viewpointId != null && message.hasOwnProperty("viewpointId"))
                    object.viewpointId = message.viewpointId;
                if (message.needGameInfo != null && message.hasOwnProperty("needGameInfo"))
                    object.needGameInfo = message.needGameInfo;
                if (message.needJsonData != null && message.hasOwnProperty("needJsonData"))
                    object.needJsonData = message.needJsonData;
                if (message.needUserInfo != null && message.hasOwnProperty("needUserInfo"))
                    object.needUserInfo = message.needUserInfo;
                return object;
            };

            /**
             * Converts this GetViewpointS2sReq to JSON.
             * @function toJSON
             * @memberof knights.viewpoint.GetViewpointS2sReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetViewpointS2sReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return GetViewpointS2sReq;
        })();

        viewpoint.GetViewpointS2sRsp = (function() {

            /**
             * Properties of a GetViewpointS2sRsp.
             * @memberof knights.viewpoint
             * @interface IGetViewpointS2sRsp
             * @property {number} retCode GetViewpointS2sRsp retCode
             * @property {string|null} [errMsg] GetViewpointS2sRsp errMsg
             * @property {knights.viewpoint.IViewpointInfo|null} [viewpoint] GetViewpointS2sRsp viewpoint
             */

            /**
             * Constructs a new GetViewpointS2sRsp.
             * @memberof knights.viewpoint
             * @classdesc Represents a GetViewpointS2sRsp.
             * @implements IGetViewpointS2sRsp
             * @constructor
             * @param {knights.viewpoint.IGetViewpointS2sRsp=} [properties] Properties to set
             */
            function GetViewpointS2sRsp(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GetViewpointS2sRsp retCode.
             * @member {number} retCode
             * @memberof knights.viewpoint.GetViewpointS2sRsp
             * @instance
             */
            GetViewpointS2sRsp.prototype.retCode = 0;

            /**
             * GetViewpointS2sRsp errMsg.
             * @member {string} errMsg
             * @memberof knights.viewpoint.GetViewpointS2sRsp
             * @instance
             */
            GetViewpointS2sRsp.prototype.errMsg = "";

            /**
             * GetViewpointS2sRsp viewpoint.
             * @member {knights.viewpoint.IViewpointInfo|null|undefined} viewpoint
             * @memberof knights.viewpoint.GetViewpointS2sRsp
             * @instance
             */
            GetViewpointS2sRsp.prototype.viewpoint = null;

            /**
             * Creates a new GetViewpointS2sRsp instance using the specified properties.
             * @function create
             * @memberof knights.viewpoint.GetViewpointS2sRsp
             * @static
             * @param {knights.viewpoint.IGetViewpointS2sRsp=} [properties] Properties to set
             * @returns {knights.viewpoint.GetViewpointS2sRsp} GetViewpointS2sRsp instance
             */
            GetViewpointS2sRsp.create = function create(properties) {
                return new GetViewpointS2sRsp(properties);
            };

            /**
             * Encodes the specified GetViewpointS2sRsp message. Does not implicitly {@link knights.viewpoint.GetViewpointS2sRsp.verify|verify} messages.
             * @function encode
             * @memberof knights.viewpoint.GetViewpointS2sRsp
             * @static
             * @param {knights.viewpoint.IGetViewpointS2sRsp} message GetViewpointS2sRsp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetViewpointS2sRsp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.retCode);
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
                if (message.viewpoint != null && message.hasOwnProperty("viewpoint"))
                    $root.knights.viewpoint.ViewpointInfo.encode(message.viewpoint, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified GetViewpointS2sRsp message, length delimited. Does not implicitly {@link knights.viewpoint.GetViewpointS2sRsp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof knights.viewpoint.GetViewpointS2sRsp
             * @static
             * @param {knights.viewpoint.IGetViewpointS2sRsp} message GetViewpointS2sRsp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetViewpointS2sRsp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetViewpointS2sRsp message from the specified reader or buffer.
             * @function decode
             * @memberof knights.viewpoint.GetViewpointS2sRsp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {knights.viewpoint.GetViewpointS2sRsp} GetViewpointS2sRsp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetViewpointS2sRsp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.knights.viewpoint.GetViewpointS2sRsp();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.retCode = reader.uint32();
                        break;
                    case 2:
                        message.errMsg = reader.string();
                        break;
                    case 3:
                        message.viewpoint = $root.knights.viewpoint.ViewpointInfo.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("retCode"))
                    throw $util.ProtocolError("missing required 'retCode'", { instance: message });
                return message;
            };

            /**
             * Decodes a GetViewpointS2sRsp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof knights.viewpoint.GetViewpointS2sRsp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {knights.viewpoint.GetViewpointS2sRsp} GetViewpointS2sRsp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetViewpointS2sRsp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GetViewpointS2sRsp message.
             * @function verify
             * @memberof knights.viewpoint.GetViewpointS2sRsp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetViewpointS2sRsp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.retCode))
                    return "retCode: integer expected";
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    if (!$util.isString(message.errMsg))
                        return "errMsg: string expected";
                if (message.viewpoint != null && message.hasOwnProperty("viewpoint")) {
                    var error = $root.knights.viewpoint.ViewpointInfo.verify(message.viewpoint);
                    if (error)
                        return "viewpoint." + error;
                }
                return null;
            };

            /**
             * Creates a GetViewpointS2sRsp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof knights.viewpoint.GetViewpointS2sRsp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {knights.viewpoint.GetViewpointS2sRsp} GetViewpointS2sRsp
             */
            GetViewpointS2sRsp.fromObject = function fromObject(object) {
                if (object instanceof $root.knights.viewpoint.GetViewpointS2sRsp)
                    return object;
                var message = new $root.knights.viewpoint.GetViewpointS2sRsp();
                if (object.retCode != null)
                    message.retCode = object.retCode >>> 0;
                if (object.errMsg != null)
                    message.errMsg = String(object.errMsg);
                if (object.viewpoint != null) {
                    if (typeof object.viewpoint !== "object")
                        throw TypeError(".knights.viewpoint.GetViewpointS2sRsp.viewpoint: object expected");
                    message.viewpoint = $root.knights.viewpoint.ViewpointInfo.fromObject(object.viewpoint);
                }
                return message;
            };

            /**
             * Creates a plain object from a GetViewpointS2sRsp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof knights.viewpoint.GetViewpointS2sRsp
             * @static
             * @param {knights.viewpoint.GetViewpointS2sRsp} message GetViewpointS2sRsp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetViewpointS2sRsp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.retCode = 0;
                    object.errMsg = "";
                    object.viewpoint = null;
                }
                if (message.retCode != null && message.hasOwnProperty("retCode"))
                    object.retCode = message.retCode;
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    object.errMsg = message.errMsg;
                if (message.viewpoint != null && message.hasOwnProperty("viewpoint"))
                    object.viewpoint = $root.knights.viewpoint.ViewpointInfo.toObject(message.viewpoint, options);
                return object;
            };

            /**
             * Converts this GetViewpointS2sRsp to JSON.
             * @function toJSON
             * @memberof knights.viewpoint.GetViewpointS2sRsp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetViewpointS2sRsp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return GetViewpointS2sRsp;
        })();

        viewpoint.MultiGetViewpointS2sReq = (function() {

            /**
             * Properties of a MultiGetViewpointS2sReq.
             * @memberof knights.viewpoint
             * @interface IMultiGetViewpointS2sReq
             * @property {Array.<string>|null} [viewpointId] MultiGetViewpointS2sReq viewpointId
             * @property {boolean|null} [needGameInfo] MultiGetViewpointS2sReq needGameInfo
             * @property {boolean|null} [needJsonData] MultiGetViewpointS2sReq needJsonData
             * @property {boolean|null} [needUserInfo] MultiGetViewpointS2sReq needUserInfo
             */

            /**
             * Constructs a new MultiGetViewpointS2sReq.
             * @memberof knights.viewpoint
             * @classdesc Represents a MultiGetViewpointS2sReq.
             * @implements IMultiGetViewpointS2sReq
             * @constructor
             * @param {knights.viewpoint.IMultiGetViewpointS2sReq=} [properties] Properties to set
             */
            function MultiGetViewpointS2sReq(properties) {
                this.viewpointId = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MultiGetViewpointS2sReq viewpointId.
             * @member {Array.<string>} viewpointId
             * @memberof knights.viewpoint.MultiGetViewpointS2sReq
             * @instance
             */
            MultiGetViewpointS2sReq.prototype.viewpointId = $util.emptyArray;

            /**
             * MultiGetViewpointS2sReq needGameInfo.
             * @member {boolean} needGameInfo
             * @memberof knights.viewpoint.MultiGetViewpointS2sReq
             * @instance
             */
            MultiGetViewpointS2sReq.prototype.needGameInfo = false;

            /**
             * MultiGetViewpointS2sReq needJsonData.
             * @member {boolean} needJsonData
             * @memberof knights.viewpoint.MultiGetViewpointS2sReq
             * @instance
             */
            MultiGetViewpointS2sReq.prototype.needJsonData = false;

            /**
             * MultiGetViewpointS2sReq needUserInfo.
             * @member {boolean} needUserInfo
             * @memberof knights.viewpoint.MultiGetViewpointS2sReq
             * @instance
             */
            MultiGetViewpointS2sReq.prototype.needUserInfo = false;

            /**
             * Creates a new MultiGetViewpointS2sReq instance using the specified properties.
             * @function create
             * @memberof knights.viewpoint.MultiGetViewpointS2sReq
             * @static
             * @param {knights.viewpoint.IMultiGetViewpointS2sReq=} [properties] Properties to set
             * @returns {knights.viewpoint.MultiGetViewpointS2sReq} MultiGetViewpointS2sReq instance
             */
            MultiGetViewpointS2sReq.create = function create(properties) {
                return new MultiGetViewpointS2sReq(properties);
            };

            /**
             * Encodes the specified MultiGetViewpointS2sReq message. Does not implicitly {@link knights.viewpoint.MultiGetViewpointS2sReq.verify|verify} messages.
             * @function encode
             * @memberof knights.viewpoint.MultiGetViewpointS2sReq
             * @static
             * @param {knights.viewpoint.IMultiGetViewpointS2sReq} message MultiGetViewpointS2sReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MultiGetViewpointS2sReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.viewpointId != null && message.viewpointId.length)
                    for (var i = 0; i < message.viewpointId.length; ++i)
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.viewpointId[i]);
                if (message.needGameInfo != null && message.hasOwnProperty("needGameInfo"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.needGameInfo);
                if (message.needJsonData != null && message.hasOwnProperty("needJsonData"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.needJsonData);
                if (message.needUserInfo != null && message.hasOwnProperty("needUserInfo"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.needUserInfo);
                return writer;
            };

            /**
             * Encodes the specified MultiGetViewpointS2sReq message, length delimited. Does not implicitly {@link knights.viewpoint.MultiGetViewpointS2sReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof knights.viewpoint.MultiGetViewpointS2sReq
             * @static
             * @param {knights.viewpoint.IMultiGetViewpointS2sReq} message MultiGetViewpointS2sReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MultiGetViewpointS2sReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MultiGetViewpointS2sReq message from the specified reader or buffer.
             * @function decode
             * @memberof knights.viewpoint.MultiGetViewpointS2sReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {knights.viewpoint.MultiGetViewpointS2sReq} MultiGetViewpointS2sReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MultiGetViewpointS2sReq.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.knights.viewpoint.MultiGetViewpointS2sReq();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.viewpointId && message.viewpointId.length))
                            message.viewpointId = [];
                        message.viewpointId.push(reader.string());
                        break;
                    case 2:
                        message.needGameInfo = reader.bool();
                        break;
                    case 3:
                        message.needJsonData = reader.bool();
                        break;
                    case 4:
                        message.needUserInfo = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MultiGetViewpointS2sReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof knights.viewpoint.MultiGetViewpointS2sReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {knights.viewpoint.MultiGetViewpointS2sReq} MultiGetViewpointS2sReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MultiGetViewpointS2sReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MultiGetViewpointS2sReq message.
             * @function verify
             * @memberof knights.viewpoint.MultiGetViewpointS2sReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MultiGetViewpointS2sReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.viewpointId != null && message.hasOwnProperty("viewpointId")) {
                    if (!Array.isArray(message.viewpointId))
                        return "viewpointId: array expected";
                    for (var i = 0; i < message.viewpointId.length; ++i)
                        if (!$util.isString(message.viewpointId[i]))
                            return "viewpointId: string[] expected";
                }
                if (message.needGameInfo != null && message.hasOwnProperty("needGameInfo"))
                    if (typeof message.needGameInfo !== "boolean")
                        return "needGameInfo: boolean expected";
                if (message.needJsonData != null && message.hasOwnProperty("needJsonData"))
                    if (typeof message.needJsonData !== "boolean")
                        return "needJsonData: boolean expected";
                if (message.needUserInfo != null && message.hasOwnProperty("needUserInfo"))
                    if (typeof message.needUserInfo !== "boolean")
                        return "needUserInfo: boolean expected";
                return null;
            };

            /**
             * Creates a MultiGetViewpointS2sReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof knights.viewpoint.MultiGetViewpointS2sReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {knights.viewpoint.MultiGetViewpointS2sReq} MultiGetViewpointS2sReq
             */
            MultiGetViewpointS2sReq.fromObject = function fromObject(object) {
                if (object instanceof $root.knights.viewpoint.MultiGetViewpointS2sReq)
                    return object;
                var message = new $root.knights.viewpoint.MultiGetViewpointS2sReq();
                if (object.viewpointId) {
                    if (!Array.isArray(object.viewpointId))
                        throw TypeError(".knights.viewpoint.MultiGetViewpointS2sReq.viewpointId: array expected");
                    message.viewpointId = [];
                    for (var i = 0; i < object.viewpointId.length; ++i)
                        message.viewpointId[i] = String(object.viewpointId[i]);
                }
                if (object.needGameInfo != null)
                    message.needGameInfo = Boolean(object.needGameInfo);
                if (object.needJsonData != null)
                    message.needJsonData = Boolean(object.needJsonData);
                if (object.needUserInfo != null)
                    message.needUserInfo = Boolean(object.needUserInfo);
                return message;
            };

            /**
             * Creates a plain object from a MultiGetViewpointS2sReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof knights.viewpoint.MultiGetViewpointS2sReq
             * @static
             * @param {knights.viewpoint.MultiGetViewpointS2sReq} message MultiGetViewpointS2sReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MultiGetViewpointS2sReq.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.viewpointId = [];
                if (options.defaults) {
                    object.needGameInfo = false;
                    object.needJsonData = false;
                    object.needUserInfo = false;
                }
                if (message.viewpointId && message.viewpointId.length) {
                    object.viewpointId = [];
                    for (var j = 0; j < message.viewpointId.length; ++j)
                        object.viewpointId[j] = message.viewpointId[j];
                }
                if (message.needGameInfo != null && message.hasOwnProperty("needGameInfo"))
                    object.needGameInfo = message.needGameInfo;
                if (message.needJsonData != null && message.hasOwnProperty("needJsonData"))
                    object.needJsonData = message.needJsonData;
                if (message.needUserInfo != null && message.hasOwnProperty("needUserInfo"))
                    object.needUserInfo = message.needUserInfo;
                return object;
            };

            /**
             * Converts this MultiGetViewpointS2sReq to JSON.
             * @function toJSON
             * @memberof knights.viewpoint.MultiGetViewpointS2sReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MultiGetViewpointS2sReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MultiGetViewpointS2sReq;
        })();

        viewpoint.MultiGetViewpointS2sRsp = (function() {

            /**
             * Properties of a MultiGetViewpointS2sRsp.
             * @memberof knights.viewpoint
             * @interface IMultiGetViewpointS2sRsp
             * @property {number} retCode MultiGetViewpointS2sRsp retCode
             * @property {string|null} [errMsg] MultiGetViewpointS2sRsp errMsg
             * @property {Array.<knights.viewpoint.IViewpointInfo>|null} [viewpoints] MultiGetViewpointS2sRsp viewpoints
             */

            /**
             * Constructs a new MultiGetViewpointS2sRsp.
             * @memberof knights.viewpoint
             * @classdesc Represents a MultiGetViewpointS2sRsp.
             * @implements IMultiGetViewpointS2sRsp
             * @constructor
             * @param {knights.viewpoint.IMultiGetViewpointS2sRsp=} [properties] Properties to set
             */
            function MultiGetViewpointS2sRsp(properties) {
                this.viewpoints = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MultiGetViewpointS2sRsp retCode.
             * @member {number} retCode
             * @memberof knights.viewpoint.MultiGetViewpointS2sRsp
             * @instance
             */
            MultiGetViewpointS2sRsp.prototype.retCode = 0;

            /**
             * MultiGetViewpointS2sRsp errMsg.
             * @member {string} errMsg
             * @memberof knights.viewpoint.MultiGetViewpointS2sRsp
             * @instance
             */
            MultiGetViewpointS2sRsp.prototype.errMsg = "";

            /**
             * MultiGetViewpointS2sRsp viewpoints.
             * @member {Array.<knights.viewpoint.IViewpointInfo>} viewpoints
             * @memberof knights.viewpoint.MultiGetViewpointS2sRsp
             * @instance
             */
            MultiGetViewpointS2sRsp.prototype.viewpoints = $util.emptyArray;

            /**
             * Creates a new MultiGetViewpointS2sRsp instance using the specified properties.
             * @function create
             * @memberof knights.viewpoint.MultiGetViewpointS2sRsp
             * @static
             * @param {knights.viewpoint.IMultiGetViewpointS2sRsp=} [properties] Properties to set
             * @returns {knights.viewpoint.MultiGetViewpointS2sRsp} MultiGetViewpointS2sRsp instance
             */
            MultiGetViewpointS2sRsp.create = function create(properties) {
                return new MultiGetViewpointS2sRsp(properties);
            };

            /**
             * Encodes the specified MultiGetViewpointS2sRsp message. Does not implicitly {@link knights.viewpoint.MultiGetViewpointS2sRsp.verify|verify} messages.
             * @function encode
             * @memberof knights.viewpoint.MultiGetViewpointS2sRsp
             * @static
             * @param {knights.viewpoint.IMultiGetViewpointS2sRsp} message MultiGetViewpointS2sRsp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MultiGetViewpointS2sRsp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.retCode);
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
                if (message.viewpoints != null && message.viewpoints.length)
                    for (var i = 0; i < message.viewpoints.length; ++i)
                        $root.knights.viewpoint.ViewpointInfo.encode(message.viewpoints[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified MultiGetViewpointS2sRsp message, length delimited. Does not implicitly {@link knights.viewpoint.MultiGetViewpointS2sRsp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof knights.viewpoint.MultiGetViewpointS2sRsp
             * @static
             * @param {knights.viewpoint.IMultiGetViewpointS2sRsp} message MultiGetViewpointS2sRsp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MultiGetViewpointS2sRsp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MultiGetViewpointS2sRsp message from the specified reader or buffer.
             * @function decode
             * @memberof knights.viewpoint.MultiGetViewpointS2sRsp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {knights.viewpoint.MultiGetViewpointS2sRsp} MultiGetViewpointS2sRsp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MultiGetViewpointS2sRsp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.knights.viewpoint.MultiGetViewpointS2sRsp();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.retCode = reader.uint32();
                        break;
                    case 2:
                        message.errMsg = reader.string();
                        break;
                    case 3:
                        if (!(message.viewpoints && message.viewpoints.length))
                            message.viewpoints = [];
                        message.viewpoints.push($root.knights.viewpoint.ViewpointInfo.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("retCode"))
                    throw $util.ProtocolError("missing required 'retCode'", { instance: message });
                return message;
            };

            /**
             * Decodes a MultiGetViewpointS2sRsp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof knights.viewpoint.MultiGetViewpointS2sRsp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {knights.viewpoint.MultiGetViewpointS2sRsp} MultiGetViewpointS2sRsp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MultiGetViewpointS2sRsp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MultiGetViewpointS2sRsp message.
             * @function verify
             * @memberof knights.viewpoint.MultiGetViewpointS2sRsp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MultiGetViewpointS2sRsp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.retCode))
                    return "retCode: integer expected";
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    if (!$util.isString(message.errMsg))
                        return "errMsg: string expected";
                if (message.viewpoints != null && message.hasOwnProperty("viewpoints")) {
                    if (!Array.isArray(message.viewpoints))
                        return "viewpoints: array expected";
                    for (var i = 0; i < message.viewpoints.length; ++i) {
                        var error = $root.knights.viewpoint.ViewpointInfo.verify(message.viewpoints[i]);
                        if (error)
                            return "viewpoints." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a MultiGetViewpointS2sRsp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof knights.viewpoint.MultiGetViewpointS2sRsp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {knights.viewpoint.MultiGetViewpointS2sRsp} MultiGetViewpointS2sRsp
             */
            MultiGetViewpointS2sRsp.fromObject = function fromObject(object) {
                if (object instanceof $root.knights.viewpoint.MultiGetViewpointS2sRsp)
                    return object;
                var message = new $root.knights.viewpoint.MultiGetViewpointS2sRsp();
                if (object.retCode != null)
                    message.retCode = object.retCode >>> 0;
                if (object.errMsg != null)
                    message.errMsg = String(object.errMsg);
                if (object.viewpoints) {
                    if (!Array.isArray(object.viewpoints))
                        throw TypeError(".knights.viewpoint.MultiGetViewpointS2sRsp.viewpoints: array expected");
                    message.viewpoints = [];
                    for (var i = 0; i < object.viewpoints.length; ++i) {
                        if (typeof object.viewpoints[i] !== "object")
                            throw TypeError(".knights.viewpoint.MultiGetViewpointS2sRsp.viewpoints: object expected");
                        message.viewpoints[i] = $root.knights.viewpoint.ViewpointInfo.fromObject(object.viewpoints[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a MultiGetViewpointS2sRsp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof knights.viewpoint.MultiGetViewpointS2sRsp
             * @static
             * @param {knights.viewpoint.MultiGetViewpointS2sRsp} message MultiGetViewpointS2sRsp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MultiGetViewpointS2sRsp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.viewpoints = [];
                if (options.defaults) {
                    object.retCode = 0;
                    object.errMsg = "";
                }
                if (message.retCode != null && message.hasOwnProperty("retCode"))
                    object.retCode = message.retCode;
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    object.errMsg = message.errMsg;
                if (message.viewpoints && message.viewpoints.length) {
                    object.viewpoints = [];
                    for (var j = 0; j < message.viewpoints.length; ++j)
                        object.viewpoints[j] = $root.knights.viewpoint.ViewpointInfo.toObject(message.viewpoints[j], options);
                }
                return object;
            };

            /**
             * Converts this MultiGetViewpointS2sRsp to JSON.
             * @function toJSON
             * @memberof knights.viewpoint.MultiGetViewpointS2sRsp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MultiGetViewpointS2sRsp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MultiGetViewpointS2sRsp;
        })();

        viewpoint.UpdateViewpointStatusS2sReq = (function() {

            /**
             * Properties of an UpdateViewpointStatusS2sReq.
             * @memberof knights.viewpoint
             * @interface IUpdateViewpointStatusS2sReq
             * @property {string} viewpointId UpdateViewpointStatusS2sReq viewpointId
             * @property {number} status UpdateViewpointStatusS2sReq status
             */

            /**
             * Constructs a new UpdateViewpointStatusS2sReq.
             * @memberof knights.viewpoint
             * @classdesc Represents an UpdateViewpointStatusS2sReq.
             * @implements IUpdateViewpointStatusS2sReq
             * @constructor
             * @param {knights.viewpoint.IUpdateViewpointStatusS2sReq=} [properties] Properties to set
             */
            function UpdateViewpointStatusS2sReq(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UpdateViewpointStatusS2sReq viewpointId.
             * @member {string} viewpointId
             * @memberof knights.viewpoint.UpdateViewpointStatusS2sReq
             * @instance
             */
            UpdateViewpointStatusS2sReq.prototype.viewpointId = "";

            /**
             * UpdateViewpointStatusS2sReq status.
             * @member {number} status
             * @memberof knights.viewpoint.UpdateViewpointStatusS2sReq
             * @instance
             */
            UpdateViewpointStatusS2sReq.prototype.status = 0;

            /**
             * Creates a new UpdateViewpointStatusS2sReq instance using the specified properties.
             * @function create
             * @memberof knights.viewpoint.UpdateViewpointStatusS2sReq
             * @static
             * @param {knights.viewpoint.IUpdateViewpointStatusS2sReq=} [properties] Properties to set
             * @returns {knights.viewpoint.UpdateViewpointStatusS2sReq} UpdateViewpointStatusS2sReq instance
             */
            UpdateViewpointStatusS2sReq.create = function create(properties) {
                return new UpdateViewpointStatusS2sReq(properties);
            };

            /**
             * Encodes the specified UpdateViewpointStatusS2sReq message. Does not implicitly {@link knights.viewpoint.UpdateViewpointStatusS2sReq.verify|verify} messages.
             * @function encode
             * @memberof knights.viewpoint.UpdateViewpointStatusS2sReq
             * @static
             * @param {knights.viewpoint.IUpdateViewpointStatusS2sReq} message UpdateViewpointStatusS2sReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateViewpointStatusS2sReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.viewpointId);
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.status);
                return writer;
            };

            /**
             * Encodes the specified UpdateViewpointStatusS2sReq message, length delimited. Does not implicitly {@link knights.viewpoint.UpdateViewpointStatusS2sReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof knights.viewpoint.UpdateViewpointStatusS2sReq
             * @static
             * @param {knights.viewpoint.IUpdateViewpointStatusS2sReq} message UpdateViewpointStatusS2sReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateViewpointStatusS2sReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an UpdateViewpointStatusS2sReq message from the specified reader or buffer.
             * @function decode
             * @memberof knights.viewpoint.UpdateViewpointStatusS2sReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {knights.viewpoint.UpdateViewpointStatusS2sReq} UpdateViewpointStatusS2sReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateViewpointStatusS2sReq.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.knights.viewpoint.UpdateViewpointStatusS2sReq();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.viewpointId = reader.string();
                        break;
                    case 2:
                        message.status = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("viewpointId"))
                    throw $util.ProtocolError("missing required 'viewpointId'", { instance: message });
                if (!message.hasOwnProperty("status"))
                    throw $util.ProtocolError("missing required 'status'", { instance: message });
                return message;
            };

            /**
             * Decodes an UpdateViewpointStatusS2sReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof knights.viewpoint.UpdateViewpointStatusS2sReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {knights.viewpoint.UpdateViewpointStatusS2sReq} UpdateViewpointStatusS2sReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateViewpointStatusS2sReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an UpdateViewpointStatusS2sReq message.
             * @function verify
             * @memberof knights.viewpoint.UpdateViewpointStatusS2sReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UpdateViewpointStatusS2sReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.viewpointId))
                    return "viewpointId: string expected";
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
                return null;
            };

            /**
             * Creates an UpdateViewpointStatusS2sReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof knights.viewpoint.UpdateViewpointStatusS2sReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {knights.viewpoint.UpdateViewpointStatusS2sReq} UpdateViewpointStatusS2sReq
             */
            UpdateViewpointStatusS2sReq.fromObject = function fromObject(object) {
                if (object instanceof $root.knights.viewpoint.UpdateViewpointStatusS2sReq)
                    return object;
                var message = new $root.knights.viewpoint.UpdateViewpointStatusS2sReq();
                if (object.viewpointId != null)
                    message.viewpointId = String(object.viewpointId);
                if (object.status != null)
                    message.status = object.status >>> 0;
                return message;
            };

            /**
             * Creates a plain object from an UpdateViewpointStatusS2sReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof knights.viewpoint.UpdateViewpointStatusS2sReq
             * @static
             * @param {knights.viewpoint.UpdateViewpointStatusS2sReq} message UpdateViewpointStatusS2sReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UpdateViewpointStatusS2sReq.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.viewpointId = "";
                    object.status = 0;
                }
                if (message.viewpointId != null && message.hasOwnProperty("viewpointId"))
                    object.viewpointId = message.viewpointId;
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = message.status;
                return object;
            };

            /**
             * Converts this UpdateViewpointStatusS2sReq to JSON.
             * @function toJSON
             * @memberof knights.viewpoint.UpdateViewpointStatusS2sReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UpdateViewpointStatusS2sReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return UpdateViewpointStatusS2sReq;
        })();

        viewpoint.UpdateViewpointStatusS2sRsp = (function() {

            /**
             * Properties of an UpdateViewpointStatusS2sRsp.
             * @memberof knights.viewpoint
             * @interface IUpdateViewpointStatusS2sRsp
             * @property {number} retCode UpdateViewpointStatusS2sRsp retCode
             * @property {string|null} [errMsg] UpdateViewpointStatusS2sRsp errMsg
             */

            /**
             * Constructs a new UpdateViewpointStatusS2sRsp.
             * @memberof knights.viewpoint
             * @classdesc Represents an UpdateViewpointStatusS2sRsp.
             * @implements IUpdateViewpointStatusS2sRsp
             * @constructor
             * @param {knights.viewpoint.IUpdateViewpointStatusS2sRsp=} [properties] Properties to set
             */
            function UpdateViewpointStatusS2sRsp(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UpdateViewpointStatusS2sRsp retCode.
             * @member {number} retCode
             * @memberof knights.viewpoint.UpdateViewpointStatusS2sRsp
             * @instance
             */
            UpdateViewpointStatusS2sRsp.prototype.retCode = 0;

            /**
             * UpdateViewpointStatusS2sRsp errMsg.
             * @member {string} errMsg
             * @memberof knights.viewpoint.UpdateViewpointStatusS2sRsp
             * @instance
             */
            UpdateViewpointStatusS2sRsp.prototype.errMsg = "";

            /**
             * Creates a new UpdateViewpointStatusS2sRsp instance using the specified properties.
             * @function create
             * @memberof knights.viewpoint.UpdateViewpointStatusS2sRsp
             * @static
             * @param {knights.viewpoint.IUpdateViewpointStatusS2sRsp=} [properties] Properties to set
             * @returns {knights.viewpoint.UpdateViewpointStatusS2sRsp} UpdateViewpointStatusS2sRsp instance
             */
            UpdateViewpointStatusS2sRsp.create = function create(properties) {
                return new UpdateViewpointStatusS2sRsp(properties);
            };

            /**
             * Encodes the specified UpdateViewpointStatusS2sRsp message. Does not implicitly {@link knights.viewpoint.UpdateViewpointStatusS2sRsp.verify|verify} messages.
             * @function encode
             * @memberof knights.viewpoint.UpdateViewpointStatusS2sRsp
             * @static
             * @param {knights.viewpoint.IUpdateViewpointStatusS2sRsp} message UpdateViewpointStatusS2sRsp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateViewpointStatusS2sRsp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.retCode);
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
                return writer;
            };

            /**
             * Encodes the specified UpdateViewpointStatusS2sRsp message, length delimited. Does not implicitly {@link knights.viewpoint.UpdateViewpointStatusS2sRsp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof knights.viewpoint.UpdateViewpointStatusS2sRsp
             * @static
             * @param {knights.viewpoint.IUpdateViewpointStatusS2sRsp} message UpdateViewpointStatusS2sRsp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateViewpointStatusS2sRsp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an UpdateViewpointStatusS2sRsp message from the specified reader or buffer.
             * @function decode
             * @memberof knights.viewpoint.UpdateViewpointStatusS2sRsp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {knights.viewpoint.UpdateViewpointStatusS2sRsp} UpdateViewpointStatusS2sRsp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateViewpointStatusS2sRsp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.knights.viewpoint.UpdateViewpointStatusS2sRsp();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.retCode = reader.uint32();
                        break;
                    case 2:
                        message.errMsg = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("retCode"))
                    throw $util.ProtocolError("missing required 'retCode'", { instance: message });
                return message;
            };

            /**
             * Decodes an UpdateViewpointStatusS2sRsp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof knights.viewpoint.UpdateViewpointStatusS2sRsp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {knights.viewpoint.UpdateViewpointStatusS2sRsp} UpdateViewpointStatusS2sRsp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateViewpointStatusS2sRsp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an UpdateViewpointStatusS2sRsp message.
             * @function verify
             * @memberof knights.viewpoint.UpdateViewpointStatusS2sRsp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UpdateViewpointStatusS2sRsp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.retCode))
                    return "retCode: integer expected";
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    if (!$util.isString(message.errMsg))
                        return "errMsg: string expected";
                return null;
            };

            /**
             * Creates an UpdateViewpointStatusS2sRsp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof knights.viewpoint.UpdateViewpointStatusS2sRsp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {knights.viewpoint.UpdateViewpointStatusS2sRsp} UpdateViewpointStatusS2sRsp
             */
            UpdateViewpointStatusS2sRsp.fromObject = function fromObject(object) {
                if (object instanceof $root.knights.viewpoint.UpdateViewpointStatusS2sRsp)
                    return object;
                var message = new $root.knights.viewpoint.UpdateViewpointStatusS2sRsp();
                if (object.retCode != null)
                    message.retCode = object.retCode >>> 0;
                if (object.errMsg != null)
                    message.errMsg = String(object.errMsg);
                return message;
            };

            /**
             * Creates a plain object from an UpdateViewpointStatusS2sRsp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof knights.viewpoint.UpdateViewpointStatusS2sRsp
             * @static
             * @param {knights.viewpoint.UpdateViewpointStatusS2sRsp} message UpdateViewpointStatusS2sRsp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UpdateViewpointStatusS2sRsp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.retCode = 0;
                    object.errMsg = "";
                }
                if (message.retCode != null && message.hasOwnProperty("retCode"))
                    object.retCode = message.retCode;
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    object.errMsg = message.errMsg;
                return object;
            };

            /**
             * Converts this UpdateViewpointStatusS2sRsp to JSON.
             * @function toJSON
             * @memberof knights.viewpoint.UpdateViewpointStatusS2sRsp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UpdateViewpointStatusS2sRsp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return UpdateViewpointStatusS2sRsp;
        })();

        viewpoint.PublishGameIntroS2sReq = (function() {

            /**
             * Properties of a PublishGameIntroS2sReq.
             * @memberof knights.viewpoint
             * @interface IPublishGameIntroS2sReq
             * @property {number|Long|null} [uuid] PublishGameIntroS2sReq uuid
             * @property {number|Long|null} [gameId] PublishGameIntroS2sReq gameId
             * @property {string|null} [content] PublishGameIntroS2sReq content
             */

            /**
             * Constructs a new PublishGameIntroS2sReq.
             * @memberof knights.viewpoint
             * @classdesc Represents a PublishGameIntroS2sReq.
             * @implements IPublishGameIntroS2sReq
             * @constructor
             * @param {knights.viewpoint.IPublishGameIntroS2sReq=} [properties] Properties to set
             */
            function PublishGameIntroS2sReq(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PublishGameIntroS2sReq uuid.
             * @member {number|Long} uuid
             * @memberof knights.viewpoint.PublishGameIntroS2sReq
             * @instance
             */
            PublishGameIntroS2sReq.prototype.uuid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * PublishGameIntroS2sReq gameId.
             * @member {number|Long} gameId
             * @memberof knights.viewpoint.PublishGameIntroS2sReq
             * @instance
             */
            PublishGameIntroS2sReq.prototype.gameId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * PublishGameIntroS2sReq content.
             * @member {string} content
             * @memberof knights.viewpoint.PublishGameIntroS2sReq
             * @instance
             */
            PublishGameIntroS2sReq.prototype.content = "";

            /**
             * Creates a new PublishGameIntroS2sReq instance using the specified properties.
             * @function create
             * @memberof knights.viewpoint.PublishGameIntroS2sReq
             * @static
             * @param {knights.viewpoint.IPublishGameIntroS2sReq=} [properties] Properties to set
             * @returns {knights.viewpoint.PublishGameIntroS2sReq} PublishGameIntroS2sReq instance
             */
            PublishGameIntroS2sReq.create = function create(properties) {
                return new PublishGameIntroS2sReq(properties);
            };

            /**
             * Encodes the specified PublishGameIntroS2sReq message. Does not implicitly {@link knights.viewpoint.PublishGameIntroS2sReq.verify|verify} messages.
             * @function encode
             * @memberof knights.viewpoint.PublishGameIntroS2sReq
             * @static
             * @param {knights.viewpoint.IPublishGameIntroS2sReq} message PublishGameIntroS2sReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PublishGameIntroS2sReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uuid != null && message.hasOwnProperty("uuid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.uuid);
                if (message.gameId != null && message.hasOwnProperty("gameId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.gameId);
                if (message.content != null && message.hasOwnProperty("content"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.content);
                return writer;
            };

            /**
             * Encodes the specified PublishGameIntroS2sReq message, length delimited. Does not implicitly {@link knights.viewpoint.PublishGameIntroS2sReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof knights.viewpoint.PublishGameIntroS2sReq
             * @static
             * @param {knights.viewpoint.IPublishGameIntroS2sReq} message PublishGameIntroS2sReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PublishGameIntroS2sReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PublishGameIntroS2sReq message from the specified reader or buffer.
             * @function decode
             * @memberof knights.viewpoint.PublishGameIntroS2sReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {knights.viewpoint.PublishGameIntroS2sReq} PublishGameIntroS2sReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PublishGameIntroS2sReq.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.knights.viewpoint.PublishGameIntroS2sReq();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.uuid = reader.uint64();
                        break;
                    case 2:
                        message.gameId = reader.uint64();
                        break;
                    case 4:
                        message.content = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a PublishGameIntroS2sReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof knights.viewpoint.PublishGameIntroS2sReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {knights.viewpoint.PublishGameIntroS2sReq} PublishGameIntroS2sReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PublishGameIntroS2sReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PublishGameIntroS2sReq message.
             * @function verify
             * @memberof knights.viewpoint.PublishGameIntroS2sReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PublishGameIntroS2sReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.uuid != null && message.hasOwnProperty("uuid"))
                    if (!$util.isInteger(message.uuid) && !(message.uuid && $util.isInteger(message.uuid.low) && $util.isInteger(message.uuid.high)))
                        return "uuid: integer|Long expected";
                if (message.gameId != null && message.hasOwnProperty("gameId"))
                    if (!$util.isInteger(message.gameId) && !(message.gameId && $util.isInteger(message.gameId.low) && $util.isInteger(message.gameId.high)))
                        return "gameId: integer|Long expected";
                if (message.content != null && message.hasOwnProperty("content"))
                    if (!$util.isString(message.content))
                        return "content: string expected";
                return null;
            };

            /**
             * Creates a PublishGameIntroS2sReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof knights.viewpoint.PublishGameIntroS2sReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {knights.viewpoint.PublishGameIntroS2sReq} PublishGameIntroS2sReq
             */
            PublishGameIntroS2sReq.fromObject = function fromObject(object) {
                if (object instanceof $root.knights.viewpoint.PublishGameIntroS2sReq)
                    return object;
                var message = new $root.knights.viewpoint.PublishGameIntroS2sReq();
                if (object.uuid != null)
                    if ($util.Long)
                        (message.uuid = $util.Long.fromValue(object.uuid)).unsigned = true;
                    else if (typeof object.uuid === "string")
                        message.uuid = parseInt(object.uuid, 10);
                    else if (typeof object.uuid === "number")
                        message.uuid = object.uuid;
                    else if (typeof object.uuid === "object")
                        message.uuid = new $util.LongBits(object.uuid.low >>> 0, object.uuid.high >>> 0).toNumber(true);
                if (object.gameId != null)
                    if ($util.Long)
                        (message.gameId = $util.Long.fromValue(object.gameId)).unsigned = true;
                    else if (typeof object.gameId === "string")
                        message.gameId = parseInt(object.gameId, 10);
                    else if (typeof object.gameId === "number")
                        message.gameId = object.gameId;
                    else if (typeof object.gameId === "object")
                        message.gameId = new $util.LongBits(object.gameId.low >>> 0, object.gameId.high >>> 0).toNumber(true);
                if (object.content != null)
                    message.content = String(object.content);
                return message;
            };

            /**
             * Creates a plain object from a PublishGameIntroS2sReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof knights.viewpoint.PublishGameIntroS2sReq
             * @static
             * @param {knights.viewpoint.PublishGameIntroS2sReq} message PublishGameIntroS2sReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PublishGameIntroS2sReq.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.uuid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.uuid = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.gameId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.gameId = options.longs === String ? "0" : 0;
                    object.content = "";
                }
                if (message.uuid != null && message.hasOwnProperty("uuid"))
                    if (typeof message.uuid === "number")
                        object.uuid = options.longs === String ? String(message.uuid) : message.uuid;
                    else
                        object.uuid = options.longs === String ? $util.Long.prototype.toString.call(message.uuid) : options.longs === Number ? new $util.LongBits(message.uuid.low >>> 0, message.uuid.high >>> 0).toNumber(true) : message.uuid;
                if (message.gameId != null && message.hasOwnProperty("gameId"))
                    if (typeof message.gameId === "number")
                        object.gameId = options.longs === String ? String(message.gameId) : message.gameId;
                    else
                        object.gameId = options.longs === String ? $util.Long.prototype.toString.call(message.gameId) : options.longs === Number ? new $util.LongBits(message.gameId.low >>> 0, message.gameId.high >>> 0).toNumber(true) : message.gameId;
                if (message.content != null && message.hasOwnProperty("content"))
                    object.content = message.content;
                return object;
            };

            /**
             * Converts this PublishGameIntroS2sReq to JSON.
             * @function toJSON
             * @memberof knights.viewpoint.PublishGameIntroS2sReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PublishGameIntroS2sReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return PublishGameIntroS2sReq;
        })();

        viewpoint.PublishGameIntroS2sRsp = (function() {

            /**
             * Properties of a PublishGameIntroS2sRsp.
             * @memberof knights.viewpoint
             * @interface IPublishGameIntroS2sRsp
             * @property {number} retCode PublishGameIntroS2sRsp retCode
             * @property {string|null} [errMsg] PublishGameIntroS2sRsp errMsg
             * @property {string|null} [introId] PublishGameIntroS2sRsp introId
             */

            /**
             * Constructs a new PublishGameIntroS2sRsp.
             * @memberof knights.viewpoint
             * @classdesc Represents a PublishGameIntroS2sRsp.
             * @implements IPublishGameIntroS2sRsp
             * @constructor
             * @param {knights.viewpoint.IPublishGameIntroS2sRsp=} [properties] Properties to set
             */
            function PublishGameIntroS2sRsp(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PublishGameIntroS2sRsp retCode.
             * @member {number} retCode
             * @memberof knights.viewpoint.PublishGameIntroS2sRsp
             * @instance
             */
            PublishGameIntroS2sRsp.prototype.retCode = 0;

            /**
             * PublishGameIntroS2sRsp errMsg.
             * @member {string} errMsg
             * @memberof knights.viewpoint.PublishGameIntroS2sRsp
             * @instance
             */
            PublishGameIntroS2sRsp.prototype.errMsg = "";

            /**
             * PublishGameIntroS2sRsp introId.
             * @member {string} introId
             * @memberof knights.viewpoint.PublishGameIntroS2sRsp
             * @instance
             */
            PublishGameIntroS2sRsp.prototype.introId = "";

            /**
             * Creates a new PublishGameIntroS2sRsp instance using the specified properties.
             * @function create
             * @memberof knights.viewpoint.PublishGameIntroS2sRsp
             * @static
             * @param {knights.viewpoint.IPublishGameIntroS2sRsp=} [properties] Properties to set
             * @returns {knights.viewpoint.PublishGameIntroS2sRsp} PublishGameIntroS2sRsp instance
             */
            PublishGameIntroS2sRsp.create = function create(properties) {
                return new PublishGameIntroS2sRsp(properties);
            };

            /**
             * Encodes the specified PublishGameIntroS2sRsp message. Does not implicitly {@link knights.viewpoint.PublishGameIntroS2sRsp.verify|verify} messages.
             * @function encode
             * @memberof knights.viewpoint.PublishGameIntroS2sRsp
             * @static
             * @param {knights.viewpoint.IPublishGameIntroS2sRsp} message PublishGameIntroS2sRsp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PublishGameIntroS2sRsp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.retCode);
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
                if (message.introId != null && message.hasOwnProperty("introId"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.introId);
                return writer;
            };

            /**
             * Encodes the specified PublishGameIntroS2sRsp message, length delimited. Does not implicitly {@link knights.viewpoint.PublishGameIntroS2sRsp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof knights.viewpoint.PublishGameIntroS2sRsp
             * @static
             * @param {knights.viewpoint.IPublishGameIntroS2sRsp} message PublishGameIntroS2sRsp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PublishGameIntroS2sRsp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PublishGameIntroS2sRsp message from the specified reader or buffer.
             * @function decode
             * @memberof knights.viewpoint.PublishGameIntroS2sRsp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {knights.viewpoint.PublishGameIntroS2sRsp} PublishGameIntroS2sRsp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PublishGameIntroS2sRsp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.knights.viewpoint.PublishGameIntroS2sRsp();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.retCode = reader.uint32();
                        break;
                    case 2:
                        message.errMsg = reader.string();
                        break;
                    case 3:
                        message.introId = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("retCode"))
                    throw $util.ProtocolError("missing required 'retCode'", { instance: message });
                return message;
            };

            /**
             * Decodes a PublishGameIntroS2sRsp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof knights.viewpoint.PublishGameIntroS2sRsp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {knights.viewpoint.PublishGameIntroS2sRsp} PublishGameIntroS2sRsp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PublishGameIntroS2sRsp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PublishGameIntroS2sRsp message.
             * @function verify
             * @memberof knights.viewpoint.PublishGameIntroS2sRsp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PublishGameIntroS2sRsp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.retCode))
                    return "retCode: integer expected";
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    if (!$util.isString(message.errMsg))
                        return "errMsg: string expected";
                if (message.introId != null && message.hasOwnProperty("introId"))
                    if (!$util.isString(message.introId))
                        return "introId: string expected";
                return null;
            };

            /**
             * Creates a PublishGameIntroS2sRsp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof knights.viewpoint.PublishGameIntroS2sRsp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {knights.viewpoint.PublishGameIntroS2sRsp} PublishGameIntroS2sRsp
             */
            PublishGameIntroS2sRsp.fromObject = function fromObject(object) {
                if (object instanceof $root.knights.viewpoint.PublishGameIntroS2sRsp)
                    return object;
                var message = new $root.knights.viewpoint.PublishGameIntroS2sRsp();
                if (object.retCode != null)
                    message.retCode = object.retCode >>> 0;
                if (object.errMsg != null)
                    message.errMsg = String(object.errMsg);
                if (object.introId != null)
                    message.introId = String(object.introId);
                return message;
            };

            /**
             * Creates a plain object from a PublishGameIntroS2sRsp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof knights.viewpoint.PublishGameIntroS2sRsp
             * @static
             * @param {knights.viewpoint.PublishGameIntroS2sRsp} message PublishGameIntroS2sRsp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PublishGameIntroS2sRsp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.retCode = 0;
                    object.errMsg = "";
                    object.introId = "";
                }
                if (message.retCode != null && message.hasOwnProperty("retCode"))
                    object.retCode = message.retCode;
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    object.errMsg = message.errMsg;
                if (message.introId != null && message.hasOwnProperty("introId"))
                    object.introId = message.introId;
                return object;
            };

            /**
             * Converts this PublishGameIntroS2sRsp to JSON.
             * @function toJSON
             * @memberof knights.viewpoint.PublishGameIntroS2sRsp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PublishGameIntroS2sRsp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return PublishGameIntroS2sRsp;
        })();

        viewpoint.GetGameIntroS2sReq = (function() {

            /**
             * Properties of a GetGameIntroS2sReq.
             * @memberof knights.viewpoint
             * @interface IGetGameIntroS2sReq
             * @property {string} introId GetGameIntroS2sReq introId
             */

            /**
             * Constructs a new GetGameIntroS2sReq.
             * @memberof knights.viewpoint
             * @classdesc Represents a GetGameIntroS2sReq.
             * @implements IGetGameIntroS2sReq
             * @constructor
             * @param {knights.viewpoint.IGetGameIntroS2sReq=} [properties] Properties to set
             */
            function GetGameIntroS2sReq(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GetGameIntroS2sReq introId.
             * @member {string} introId
             * @memberof knights.viewpoint.GetGameIntroS2sReq
             * @instance
             */
            GetGameIntroS2sReq.prototype.introId = "";

            /**
             * Creates a new GetGameIntroS2sReq instance using the specified properties.
             * @function create
             * @memberof knights.viewpoint.GetGameIntroS2sReq
             * @static
             * @param {knights.viewpoint.IGetGameIntroS2sReq=} [properties] Properties to set
             * @returns {knights.viewpoint.GetGameIntroS2sReq} GetGameIntroS2sReq instance
             */
            GetGameIntroS2sReq.create = function create(properties) {
                return new GetGameIntroS2sReq(properties);
            };

            /**
             * Encodes the specified GetGameIntroS2sReq message. Does not implicitly {@link knights.viewpoint.GetGameIntroS2sReq.verify|verify} messages.
             * @function encode
             * @memberof knights.viewpoint.GetGameIntroS2sReq
             * @static
             * @param {knights.viewpoint.IGetGameIntroS2sReq} message GetGameIntroS2sReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetGameIntroS2sReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.introId);
                return writer;
            };

            /**
             * Encodes the specified GetGameIntroS2sReq message, length delimited. Does not implicitly {@link knights.viewpoint.GetGameIntroS2sReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof knights.viewpoint.GetGameIntroS2sReq
             * @static
             * @param {knights.viewpoint.IGetGameIntroS2sReq} message GetGameIntroS2sReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetGameIntroS2sReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetGameIntroS2sReq message from the specified reader or buffer.
             * @function decode
             * @memberof knights.viewpoint.GetGameIntroS2sReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {knights.viewpoint.GetGameIntroS2sReq} GetGameIntroS2sReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetGameIntroS2sReq.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.knights.viewpoint.GetGameIntroS2sReq();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.introId = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("introId"))
                    throw $util.ProtocolError("missing required 'introId'", { instance: message });
                return message;
            };

            /**
             * Decodes a GetGameIntroS2sReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof knights.viewpoint.GetGameIntroS2sReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {knights.viewpoint.GetGameIntroS2sReq} GetGameIntroS2sReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetGameIntroS2sReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GetGameIntroS2sReq message.
             * @function verify
             * @memberof knights.viewpoint.GetGameIntroS2sReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetGameIntroS2sReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.introId))
                    return "introId: string expected";
                return null;
            };

            /**
             * Creates a GetGameIntroS2sReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof knights.viewpoint.GetGameIntroS2sReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {knights.viewpoint.GetGameIntroS2sReq} GetGameIntroS2sReq
             */
            GetGameIntroS2sReq.fromObject = function fromObject(object) {
                if (object instanceof $root.knights.viewpoint.GetGameIntroS2sReq)
                    return object;
                var message = new $root.knights.viewpoint.GetGameIntroS2sReq();
                if (object.introId != null)
                    message.introId = String(object.introId);
                return message;
            };

            /**
             * Creates a plain object from a GetGameIntroS2sReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof knights.viewpoint.GetGameIntroS2sReq
             * @static
             * @param {knights.viewpoint.GetGameIntroS2sReq} message GetGameIntroS2sReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetGameIntroS2sReq.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.introId = "";
                if (message.introId != null && message.hasOwnProperty("introId"))
                    object.introId = message.introId;
                return object;
            };

            /**
             * Converts this GetGameIntroS2sReq to JSON.
             * @function toJSON
             * @memberof knights.viewpoint.GetGameIntroS2sReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetGameIntroS2sReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return GetGameIntroS2sReq;
        })();

        viewpoint.GetGameIntroS2sRsp = (function() {

            /**
             * Properties of a GetGameIntroS2sRsp.
             * @memberof knights.viewpoint
             * @interface IGetGameIntroS2sRsp
             * @property {number} retCode GetGameIntroS2sRsp retCode
             * @property {string|null} [errMsg] GetGameIntroS2sRsp errMsg
             * @property {knights.viewpoint.IGameIntroInfo|null} [gameIntro] GetGameIntroS2sRsp gameIntro
             */

            /**
             * Constructs a new GetGameIntroS2sRsp.
             * @memberof knights.viewpoint
             * @classdesc Represents a GetGameIntroS2sRsp.
             * @implements IGetGameIntroS2sRsp
             * @constructor
             * @param {knights.viewpoint.IGetGameIntroS2sRsp=} [properties] Properties to set
             */
            function GetGameIntroS2sRsp(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GetGameIntroS2sRsp retCode.
             * @member {number} retCode
             * @memberof knights.viewpoint.GetGameIntroS2sRsp
             * @instance
             */
            GetGameIntroS2sRsp.prototype.retCode = 0;

            /**
             * GetGameIntroS2sRsp errMsg.
             * @member {string} errMsg
             * @memberof knights.viewpoint.GetGameIntroS2sRsp
             * @instance
             */
            GetGameIntroS2sRsp.prototype.errMsg = "";

            /**
             * GetGameIntroS2sRsp gameIntro.
             * @member {knights.viewpoint.IGameIntroInfo|null|undefined} gameIntro
             * @memberof knights.viewpoint.GetGameIntroS2sRsp
             * @instance
             */
            GetGameIntroS2sRsp.prototype.gameIntro = null;

            /**
             * Creates a new GetGameIntroS2sRsp instance using the specified properties.
             * @function create
             * @memberof knights.viewpoint.GetGameIntroS2sRsp
             * @static
             * @param {knights.viewpoint.IGetGameIntroS2sRsp=} [properties] Properties to set
             * @returns {knights.viewpoint.GetGameIntroS2sRsp} GetGameIntroS2sRsp instance
             */
            GetGameIntroS2sRsp.create = function create(properties) {
                return new GetGameIntroS2sRsp(properties);
            };

            /**
             * Encodes the specified GetGameIntroS2sRsp message. Does not implicitly {@link knights.viewpoint.GetGameIntroS2sRsp.verify|verify} messages.
             * @function encode
             * @memberof knights.viewpoint.GetGameIntroS2sRsp
             * @static
             * @param {knights.viewpoint.IGetGameIntroS2sRsp} message GetGameIntroS2sRsp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetGameIntroS2sRsp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.retCode);
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
                if (message.gameIntro != null && message.hasOwnProperty("gameIntro"))
                    $root.knights.viewpoint.GameIntroInfo.encode(message.gameIntro, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified GetGameIntroS2sRsp message, length delimited. Does not implicitly {@link knights.viewpoint.GetGameIntroS2sRsp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof knights.viewpoint.GetGameIntroS2sRsp
             * @static
             * @param {knights.viewpoint.IGetGameIntroS2sRsp} message GetGameIntroS2sRsp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetGameIntroS2sRsp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetGameIntroS2sRsp message from the specified reader or buffer.
             * @function decode
             * @memberof knights.viewpoint.GetGameIntroS2sRsp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {knights.viewpoint.GetGameIntroS2sRsp} GetGameIntroS2sRsp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetGameIntroS2sRsp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.knights.viewpoint.GetGameIntroS2sRsp();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.retCode = reader.uint32();
                        break;
                    case 2:
                        message.errMsg = reader.string();
                        break;
                    case 3:
                        message.gameIntro = $root.knights.viewpoint.GameIntroInfo.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("retCode"))
                    throw $util.ProtocolError("missing required 'retCode'", { instance: message });
                return message;
            };

            /**
             * Decodes a GetGameIntroS2sRsp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof knights.viewpoint.GetGameIntroS2sRsp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {knights.viewpoint.GetGameIntroS2sRsp} GetGameIntroS2sRsp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetGameIntroS2sRsp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GetGameIntroS2sRsp message.
             * @function verify
             * @memberof knights.viewpoint.GetGameIntroS2sRsp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetGameIntroS2sRsp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.retCode))
                    return "retCode: integer expected";
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    if (!$util.isString(message.errMsg))
                        return "errMsg: string expected";
                if (message.gameIntro != null && message.hasOwnProperty("gameIntro")) {
                    var error = $root.knights.viewpoint.GameIntroInfo.verify(message.gameIntro);
                    if (error)
                        return "gameIntro." + error;
                }
                return null;
            };

            /**
             * Creates a GetGameIntroS2sRsp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof knights.viewpoint.GetGameIntroS2sRsp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {knights.viewpoint.GetGameIntroS2sRsp} GetGameIntroS2sRsp
             */
            GetGameIntroS2sRsp.fromObject = function fromObject(object) {
                if (object instanceof $root.knights.viewpoint.GetGameIntroS2sRsp)
                    return object;
                var message = new $root.knights.viewpoint.GetGameIntroS2sRsp();
                if (object.retCode != null)
                    message.retCode = object.retCode >>> 0;
                if (object.errMsg != null)
                    message.errMsg = String(object.errMsg);
                if (object.gameIntro != null) {
                    if (typeof object.gameIntro !== "object")
                        throw TypeError(".knights.viewpoint.GetGameIntroS2sRsp.gameIntro: object expected");
                    message.gameIntro = $root.knights.viewpoint.GameIntroInfo.fromObject(object.gameIntro);
                }
                return message;
            };

            /**
             * Creates a plain object from a GetGameIntroS2sRsp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof knights.viewpoint.GetGameIntroS2sRsp
             * @static
             * @param {knights.viewpoint.GetGameIntroS2sRsp} message GetGameIntroS2sRsp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetGameIntroS2sRsp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.retCode = 0;
                    object.errMsg = "";
                    object.gameIntro = null;
                }
                if (message.retCode != null && message.hasOwnProperty("retCode"))
                    object.retCode = message.retCode;
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    object.errMsg = message.errMsg;
                if (message.gameIntro != null && message.hasOwnProperty("gameIntro"))
                    object.gameIntro = $root.knights.viewpoint.GameIntroInfo.toObject(message.gameIntro, options);
                return object;
            };

            /**
             * Converts this GetGameIntroS2sRsp to JSON.
             * @function toJSON
             * @memberof knights.viewpoint.GetGameIntroS2sRsp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetGameIntroS2sRsp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return GetGameIntroS2sRsp;
        })();

        viewpoint.UpdateGameIntroStatusS2sReq = (function() {

            /**
             * Properties of an UpdateGameIntroStatusS2sReq.
             * @memberof knights.viewpoint
             * @interface IUpdateGameIntroStatusS2sReq
             * @property {string} introId UpdateGameIntroStatusS2sReq introId
             * @property {number} status UpdateGameIntroStatusS2sReq status
             */

            /**
             * Constructs a new UpdateGameIntroStatusS2sReq.
             * @memberof knights.viewpoint
             * @classdesc Represents an UpdateGameIntroStatusS2sReq.
             * @implements IUpdateGameIntroStatusS2sReq
             * @constructor
             * @param {knights.viewpoint.IUpdateGameIntroStatusS2sReq=} [properties] Properties to set
             */
            function UpdateGameIntroStatusS2sReq(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UpdateGameIntroStatusS2sReq introId.
             * @member {string} introId
             * @memberof knights.viewpoint.UpdateGameIntroStatusS2sReq
             * @instance
             */
            UpdateGameIntroStatusS2sReq.prototype.introId = "";

            /**
             * UpdateGameIntroStatusS2sReq status.
             * @member {number} status
             * @memberof knights.viewpoint.UpdateGameIntroStatusS2sReq
             * @instance
             */
            UpdateGameIntroStatusS2sReq.prototype.status = 0;

            /**
             * Creates a new UpdateGameIntroStatusS2sReq instance using the specified properties.
             * @function create
             * @memberof knights.viewpoint.UpdateGameIntroStatusS2sReq
             * @static
             * @param {knights.viewpoint.IUpdateGameIntroStatusS2sReq=} [properties] Properties to set
             * @returns {knights.viewpoint.UpdateGameIntroStatusS2sReq} UpdateGameIntroStatusS2sReq instance
             */
            UpdateGameIntroStatusS2sReq.create = function create(properties) {
                return new UpdateGameIntroStatusS2sReq(properties);
            };

            /**
             * Encodes the specified UpdateGameIntroStatusS2sReq message. Does not implicitly {@link knights.viewpoint.UpdateGameIntroStatusS2sReq.verify|verify} messages.
             * @function encode
             * @memberof knights.viewpoint.UpdateGameIntroStatusS2sReq
             * @static
             * @param {knights.viewpoint.IUpdateGameIntroStatusS2sReq} message UpdateGameIntroStatusS2sReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateGameIntroStatusS2sReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.introId);
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.status);
                return writer;
            };

            /**
             * Encodes the specified UpdateGameIntroStatusS2sReq message, length delimited. Does not implicitly {@link knights.viewpoint.UpdateGameIntroStatusS2sReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof knights.viewpoint.UpdateGameIntroStatusS2sReq
             * @static
             * @param {knights.viewpoint.IUpdateGameIntroStatusS2sReq} message UpdateGameIntroStatusS2sReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateGameIntroStatusS2sReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an UpdateGameIntroStatusS2sReq message from the specified reader or buffer.
             * @function decode
             * @memberof knights.viewpoint.UpdateGameIntroStatusS2sReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {knights.viewpoint.UpdateGameIntroStatusS2sReq} UpdateGameIntroStatusS2sReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateGameIntroStatusS2sReq.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.knights.viewpoint.UpdateGameIntroStatusS2sReq();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.introId = reader.string();
                        break;
                    case 2:
                        message.status = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("introId"))
                    throw $util.ProtocolError("missing required 'introId'", { instance: message });
                if (!message.hasOwnProperty("status"))
                    throw $util.ProtocolError("missing required 'status'", { instance: message });
                return message;
            };

            /**
             * Decodes an UpdateGameIntroStatusS2sReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof knights.viewpoint.UpdateGameIntroStatusS2sReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {knights.viewpoint.UpdateGameIntroStatusS2sReq} UpdateGameIntroStatusS2sReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateGameIntroStatusS2sReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an UpdateGameIntroStatusS2sReq message.
             * @function verify
             * @memberof knights.viewpoint.UpdateGameIntroStatusS2sReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UpdateGameIntroStatusS2sReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.introId))
                    return "introId: string expected";
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
                return null;
            };

            /**
             * Creates an UpdateGameIntroStatusS2sReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof knights.viewpoint.UpdateGameIntroStatusS2sReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {knights.viewpoint.UpdateGameIntroStatusS2sReq} UpdateGameIntroStatusS2sReq
             */
            UpdateGameIntroStatusS2sReq.fromObject = function fromObject(object) {
                if (object instanceof $root.knights.viewpoint.UpdateGameIntroStatusS2sReq)
                    return object;
                var message = new $root.knights.viewpoint.UpdateGameIntroStatusS2sReq();
                if (object.introId != null)
                    message.introId = String(object.introId);
                if (object.status != null)
                    message.status = object.status >>> 0;
                return message;
            };

            /**
             * Creates a plain object from an UpdateGameIntroStatusS2sReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof knights.viewpoint.UpdateGameIntroStatusS2sReq
             * @static
             * @param {knights.viewpoint.UpdateGameIntroStatusS2sReq} message UpdateGameIntroStatusS2sReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UpdateGameIntroStatusS2sReq.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.introId = "";
                    object.status = 0;
                }
                if (message.introId != null && message.hasOwnProperty("introId"))
                    object.introId = message.introId;
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = message.status;
                return object;
            };

            /**
             * Converts this UpdateGameIntroStatusS2sReq to JSON.
             * @function toJSON
             * @memberof knights.viewpoint.UpdateGameIntroStatusS2sReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UpdateGameIntroStatusS2sReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return UpdateGameIntroStatusS2sReq;
        })();

        viewpoint.UpdateGameIntroStatusS2sRsp = (function() {

            /**
             * Properties of an UpdateGameIntroStatusS2sRsp.
             * @memberof knights.viewpoint
             * @interface IUpdateGameIntroStatusS2sRsp
             * @property {number} retCode UpdateGameIntroStatusS2sRsp retCode
             * @property {string|null} [errMsg] UpdateGameIntroStatusS2sRsp errMsg
             */

            /**
             * Constructs a new UpdateGameIntroStatusS2sRsp.
             * @memberof knights.viewpoint
             * @classdesc Represents an UpdateGameIntroStatusS2sRsp.
             * @implements IUpdateGameIntroStatusS2sRsp
             * @constructor
             * @param {knights.viewpoint.IUpdateGameIntroStatusS2sRsp=} [properties] Properties to set
             */
            function UpdateGameIntroStatusS2sRsp(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UpdateGameIntroStatusS2sRsp retCode.
             * @member {number} retCode
             * @memberof knights.viewpoint.UpdateGameIntroStatusS2sRsp
             * @instance
             */
            UpdateGameIntroStatusS2sRsp.prototype.retCode = 0;

            /**
             * UpdateGameIntroStatusS2sRsp errMsg.
             * @member {string} errMsg
             * @memberof knights.viewpoint.UpdateGameIntroStatusS2sRsp
             * @instance
             */
            UpdateGameIntroStatusS2sRsp.prototype.errMsg = "";

            /**
             * Creates a new UpdateGameIntroStatusS2sRsp instance using the specified properties.
             * @function create
             * @memberof knights.viewpoint.UpdateGameIntroStatusS2sRsp
             * @static
             * @param {knights.viewpoint.IUpdateGameIntroStatusS2sRsp=} [properties] Properties to set
             * @returns {knights.viewpoint.UpdateGameIntroStatusS2sRsp} UpdateGameIntroStatusS2sRsp instance
             */
            UpdateGameIntroStatusS2sRsp.create = function create(properties) {
                return new UpdateGameIntroStatusS2sRsp(properties);
            };

            /**
             * Encodes the specified UpdateGameIntroStatusS2sRsp message. Does not implicitly {@link knights.viewpoint.UpdateGameIntroStatusS2sRsp.verify|verify} messages.
             * @function encode
             * @memberof knights.viewpoint.UpdateGameIntroStatusS2sRsp
             * @static
             * @param {knights.viewpoint.IUpdateGameIntroStatusS2sRsp} message UpdateGameIntroStatusS2sRsp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateGameIntroStatusS2sRsp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.retCode);
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
                return writer;
            };

            /**
             * Encodes the specified UpdateGameIntroStatusS2sRsp message, length delimited. Does not implicitly {@link knights.viewpoint.UpdateGameIntroStatusS2sRsp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof knights.viewpoint.UpdateGameIntroStatusS2sRsp
             * @static
             * @param {knights.viewpoint.IUpdateGameIntroStatusS2sRsp} message UpdateGameIntroStatusS2sRsp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateGameIntroStatusS2sRsp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an UpdateGameIntroStatusS2sRsp message from the specified reader or buffer.
             * @function decode
             * @memberof knights.viewpoint.UpdateGameIntroStatusS2sRsp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {knights.viewpoint.UpdateGameIntroStatusS2sRsp} UpdateGameIntroStatusS2sRsp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateGameIntroStatusS2sRsp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.knights.viewpoint.UpdateGameIntroStatusS2sRsp();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.retCode = reader.uint32();
                        break;
                    case 2:
                        message.errMsg = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("retCode"))
                    throw $util.ProtocolError("missing required 'retCode'", { instance: message });
                return message;
            };

            /**
             * Decodes an UpdateGameIntroStatusS2sRsp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof knights.viewpoint.UpdateGameIntroStatusS2sRsp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {knights.viewpoint.UpdateGameIntroStatusS2sRsp} UpdateGameIntroStatusS2sRsp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateGameIntroStatusS2sRsp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an UpdateGameIntroStatusS2sRsp message.
             * @function verify
             * @memberof knights.viewpoint.UpdateGameIntroStatusS2sRsp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UpdateGameIntroStatusS2sRsp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.retCode))
                    return "retCode: integer expected";
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    if (!$util.isString(message.errMsg))
                        return "errMsg: string expected";
                return null;
            };

            /**
             * Creates an UpdateGameIntroStatusS2sRsp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof knights.viewpoint.UpdateGameIntroStatusS2sRsp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {knights.viewpoint.UpdateGameIntroStatusS2sRsp} UpdateGameIntroStatusS2sRsp
             */
            UpdateGameIntroStatusS2sRsp.fromObject = function fromObject(object) {
                if (object instanceof $root.knights.viewpoint.UpdateGameIntroStatusS2sRsp)
                    return object;
                var message = new $root.knights.viewpoint.UpdateGameIntroStatusS2sRsp();
                if (object.retCode != null)
                    message.retCode = object.retCode >>> 0;
                if (object.errMsg != null)
                    message.errMsg = String(object.errMsg);
                return message;
            };

            /**
             * Creates a plain object from an UpdateGameIntroStatusS2sRsp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof knights.viewpoint.UpdateGameIntroStatusS2sRsp
             * @static
             * @param {knights.viewpoint.UpdateGameIntroStatusS2sRsp} message UpdateGameIntroStatusS2sRsp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UpdateGameIntroStatusS2sRsp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.retCode = 0;
                    object.errMsg = "";
                }
                if (message.retCode != null && message.hasOwnProperty("retCode"))
                    object.retCode = message.retCode;
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    object.errMsg = message.errMsg;
                return object;
            };

            /**
             * Converts this UpdateGameIntroStatusS2sRsp to JSON.
             * @function toJSON
             * @memberof knights.viewpoint.UpdateGameIntroStatusS2sRsp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UpdateGameIntroStatusS2sRsp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return UpdateGameIntroStatusS2sRsp;
        })();

        viewpoint.UpdateGameIntroS2sReq = (function() {

            /**
             * Properties of an UpdateGameIntroS2sReq.
             * @memberof knights.viewpoint
             * @interface IUpdateGameIntroS2sReq
             * @property {string} introId UpdateGameIntroS2sReq introId
             * @property {string|null} [content] UpdateGameIntroS2sReq content
             */

            /**
             * Constructs a new UpdateGameIntroS2sReq.
             * @memberof knights.viewpoint
             * @classdesc Represents an UpdateGameIntroS2sReq.
             * @implements IUpdateGameIntroS2sReq
             * @constructor
             * @param {knights.viewpoint.IUpdateGameIntroS2sReq=} [properties] Properties to set
             */
            function UpdateGameIntroS2sReq(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UpdateGameIntroS2sReq introId.
             * @member {string} introId
             * @memberof knights.viewpoint.UpdateGameIntroS2sReq
             * @instance
             */
            UpdateGameIntroS2sReq.prototype.introId = "";

            /**
             * UpdateGameIntroS2sReq content.
             * @member {string} content
             * @memberof knights.viewpoint.UpdateGameIntroS2sReq
             * @instance
             */
            UpdateGameIntroS2sReq.prototype.content = "";

            /**
             * Creates a new UpdateGameIntroS2sReq instance using the specified properties.
             * @function create
             * @memberof knights.viewpoint.UpdateGameIntroS2sReq
             * @static
             * @param {knights.viewpoint.IUpdateGameIntroS2sReq=} [properties] Properties to set
             * @returns {knights.viewpoint.UpdateGameIntroS2sReq} UpdateGameIntroS2sReq instance
             */
            UpdateGameIntroS2sReq.create = function create(properties) {
                return new UpdateGameIntroS2sReq(properties);
            };

            /**
             * Encodes the specified UpdateGameIntroS2sReq message. Does not implicitly {@link knights.viewpoint.UpdateGameIntroS2sReq.verify|verify} messages.
             * @function encode
             * @memberof knights.viewpoint.UpdateGameIntroS2sReq
             * @static
             * @param {knights.viewpoint.IUpdateGameIntroS2sReq} message UpdateGameIntroS2sReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateGameIntroS2sReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.introId);
                if (message.content != null && message.hasOwnProperty("content"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.content);
                return writer;
            };

            /**
             * Encodes the specified UpdateGameIntroS2sReq message, length delimited. Does not implicitly {@link knights.viewpoint.UpdateGameIntroS2sReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof knights.viewpoint.UpdateGameIntroS2sReq
             * @static
             * @param {knights.viewpoint.IUpdateGameIntroS2sReq} message UpdateGameIntroS2sReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateGameIntroS2sReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an UpdateGameIntroS2sReq message from the specified reader or buffer.
             * @function decode
             * @memberof knights.viewpoint.UpdateGameIntroS2sReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {knights.viewpoint.UpdateGameIntroS2sReq} UpdateGameIntroS2sReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateGameIntroS2sReq.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.knights.viewpoint.UpdateGameIntroS2sReq();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.introId = reader.string();
                        break;
                    case 2:
                        message.content = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("introId"))
                    throw $util.ProtocolError("missing required 'introId'", { instance: message });
                return message;
            };

            /**
             * Decodes an UpdateGameIntroS2sReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof knights.viewpoint.UpdateGameIntroS2sReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {knights.viewpoint.UpdateGameIntroS2sReq} UpdateGameIntroS2sReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateGameIntroS2sReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an UpdateGameIntroS2sReq message.
             * @function verify
             * @memberof knights.viewpoint.UpdateGameIntroS2sReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UpdateGameIntroS2sReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.introId))
                    return "introId: string expected";
                if (message.content != null && message.hasOwnProperty("content"))
                    if (!$util.isString(message.content))
                        return "content: string expected";
                return null;
            };

            /**
             * Creates an UpdateGameIntroS2sReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof knights.viewpoint.UpdateGameIntroS2sReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {knights.viewpoint.UpdateGameIntroS2sReq} UpdateGameIntroS2sReq
             */
            UpdateGameIntroS2sReq.fromObject = function fromObject(object) {
                if (object instanceof $root.knights.viewpoint.UpdateGameIntroS2sReq)
                    return object;
                var message = new $root.knights.viewpoint.UpdateGameIntroS2sReq();
                if (object.introId != null)
                    message.introId = String(object.introId);
                if (object.content != null)
                    message.content = String(object.content);
                return message;
            };

            /**
             * Creates a plain object from an UpdateGameIntroS2sReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof knights.viewpoint.UpdateGameIntroS2sReq
             * @static
             * @param {knights.viewpoint.UpdateGameIntroS2sReq} message UpdateGameIntroS2sReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UpdateGameIntroS2sReq.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.introId = "";
                    object.content = "";
                }
                if (message.introId != null && message.hasOwnProperty("introId"))
                    object.introId = message.introId;
                if (message.content != null && message.hasOwnProperty("content"))
                    object.content = message.content;
                return object;
            };

            /**
             * Converts this UpdateGameIntroS2sReq to JSON.
             * @function toJSON
             * @memberof knights.viewpoint.UpdateGameIntroS2sReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UpdateGameIntroS2sReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return UpdateGameIntroS2sReq;
        })();

        viewpoint.UpdateGameIntroS2sRsp = (function() {

            /**
             * Properties of an UpdateGameIntroS2sRsp.
             * @memberof knights.viewpoint
             * @interface IUpdateGameIntroS2sRsp
             * @property {number} retCode UpdateGameIntroS2sRsp retCode
             * @property {string|null} [errMsg] UpdateGameIntroS2sRsp errMsg
             */

            /**
             * Constructs a new UpdateGameIntroS2sRsp.
             * @memberof knights.viewpoint
             * @classdesc Represents an UpdateGameIntroS2sRsp.
             * @implements IUpdateGameIntroS2sRsp
             * @constructor
             * @param {knights.viewpoint.IUpdateGameIntroS2sRsp=} [properties] Properties to set
             */
            function UpdateGameIntroS2sRsp(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UpdateGameIntroS2sRsp retCode.
             * @member {number} retCode
             * @memberof knights.viewpoint.UpdateGameIntroS2sRsp
             * @instance
             */
            UpdateGameIntroS2sRsp.prototype.retCode = 0;

            /**
             * UpdateGameIntroS2sRsp errMsg.
             * @member {string} errMsg
             * @memberof knights.viewpoint.UpdateGameIntroS2sRsp
             * @instance
             */
            UpdateGameIntroS2sRsp.prototype.errMsg = "";

            /**
             * Creates a new UpdateGameIntroS2sRsp instance using the specified properties.
             * @function create
             * @memberof knights.viewpoint.UpdateGameIntroS2sRsp
             * @static
             * @param {knights.viewpoint.IUpdateGameIntroS2sRsp=} [properties] Properties to set
             * @returns {knights.viewpoint.UpdateGameIntroS2sRsp} UpdateGameIntroS2sRsp instance
             */
            UpdateGameIntroS2sRsp.create = function create(properties) {
                return new UpdateGameIntroS2sRsp(properties);
            };

            /**
             * Encodes the specified UpdateGameIntroS2sRsp message. Does not implicitly {@link knights.viewpoint.UpdateGameIntroS2sRsp.verify|verify} messages.
             * @function encode
             * @memberof knights.viewpoint.UpdateGameIntroS2sRsp
             * @static
             * @param {knights.viewpoint.IUpdateGameIntroS2sRsp} message UpdateGameIntroS2sRsp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateGameIntroS2sRsp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.retCode);
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
                return writer;
            };

            /**
             * Encodes the specified UpdateGameIntroS2sRsp message, length delimited. Does not implicitly {@link knights.viewpoint.UpdateGameIntroS2sRsp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof knights.viewpoint.UpdateGameIntroS2sRsp
             * @static
             * @param {knights.viewpoint.IUpdateGameIntroS2sRsp} message UpdateGameIntroS2sRsp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateGameIntroS2sRsp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an UpdateGameIntroS2sRsp message from the specified reader or buffer.
             * @function decode
             * @memberof knights.viewpoint.UpdateGameIntroS2sRsp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {knights.viewpoint.UpdateGameIntroS2sRsp} UpdateGameIntroS2sRsp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateGameIntroS2sRsp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.knights.viewpoint.UpdateGameIntroS2sRsp();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.retCode = reader.uint32();
                        break;
                    case 2:
                        message.errMsg = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("retCode"))
                    throw $util.ProtocolError("missing required 'retCode'", { instance: message });
                return message;
            };

            /**
             * Decodes an UpdateGameIntroS2sRsp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof knights.viewpoint.UpdateGameIntroS2sRsp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {knights.viewpoint.UpdateGameIntroS2sRsp} UpdateGameIntroS2sRsp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateGameIntroS2sRsp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an UpdateGameIntroS2sRsp message.
             * @function verify
             * @memberof knights.viewpoint.UpdateGameIntroS2sRsp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UpdateGameIntroS2sRsp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.retCode))
                    return "retCode: integer expected";
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    if (!$util.isString(message.errMsg))
                        return "errMsg: string expected";
                return null;
            };

            /**
             * Creates an UpdateGameIntroS2sRsp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof knights.viewpoint.UpdateGameIntroS2sRsp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {knights.viewpoint.UpdateGameIntroS2sRsp} UpdateGameIntroS2sRsp
             */
            UpdateGameIntroS2sRsp.fromObject = function fromObject(object) {
                if (object instanceof $root.knights.viewpoint.UpdateGameIntroS2sRsp)
                    return object;
                var message = new $root.knights.viewpoint.UpdateGameIntroS2sRsp();
                if (object.retCode != null)
                    message.retCode = object.retCode >>> 0;
                if (object.errMsg != null)
                    message.errMsg = String(object.errMsg);
                return message;
            };

            /**
             * Creates a plain object from an UpdateGameIntroS2sRsp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof knights.viewpoint.UpdateGameIntroS2sRsp
             * @static
             * @param {knights.viewpoint.UpdateGameIntroS2sRsp} message UpdateGameIntroS2sRsp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UpdateGameIntroS2sRsp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.retCode = 0;
                    object.errMsg = "";
                }
                if (message.retCode != null && message.hasOwnProperty("retCode"))
                    object.retCode = message.retCode;
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    object.errMsg = message.errMsg;
                return object;
            };

            /**
             * Converts this UpdateGameIntroS2sRsp to JSON.
             * @function toJSON
             * @memberof knights.viewpoint.UpdateGameIntroS2sRsp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UpdateGameIntroS2sRsp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return UpdateGameIntroS2sRsp;
        })();

        viewpoint.PublishViewpointReq = (function() {

            /**
             * Properties of a PublishViewpointReq.
             * @memberof knights.viewpoint
             * @interface IPublishViewpointReq
             * @property {number|Long|null} [uuid] PublishViewpointReq uuid
             * @property {number|Long|null} [gameId] PublishViewpointReq gameId
             * @property {string|null} [title] PublishViewpointReq title
             * @property {string|null} [content] PublishViewpointReq content
             * @property {number|null} [score] PublishViewpointReq score
             * @property {number|null} [dataType] PublishViewpointReq dataType
             * @property {number|null} [actId] PublishViewpointReq actId
             * @property {knights.viewpoint.IVideoInfo|null} [videoInfo] PublishViewpointReq videoInfo
             * @property {number|null} [topicId] PublishViewpointReq topicId
             * @property {Array.<number|Long>|null} [atUuid] PublishViewpointReq atUuid
             * @property {knights.viewpoint.IMixedContent|null} [mixedContent] PublishViewpointReq mixedContent
             * @property {number|null} [owner] PublishViewpointReq owner
             */

            /**
             * Constructs a new PublishViewpointReq.
             * @memberof knights.viewpoint
             * @classdesc Represents a PublishViewpointReq.
             * @implements IPublishViewpointReq
             * @constructor
             * @param {knights.viewpoint.IPublishViewpointReq=} [properties] Properties to set
             */
            function PublishViewpointReq(properties) {
                this.atUuid = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PublishViewpointReq uuid.
             * @member {number|Long} uuid
             * @memberof knights.viewpoint.PublishViewpointReq
             * @instance
             */
            PublishViewpointReq.prototype.uuid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * PublishViewpointReq gameId.
             * @member {number|Long} gameId
             * @memberof knights.viewpoint.PublishViewpointReq
             * @instance
             */
            PublishViewpointReq.prototype.gameId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * PublishViewpointReq title.
             * @member {string} title
             * @memberof knights.viewpoint.PublishViewpointReq
             * @instance
             */
            PublishViewpointReq.prototype.title = "";

            /**
             * PublishViewpointReq content.
             * @member {string} content
             * @memberof knights.viewpoint.PublishViewpointReq
             * @instance
             */
            PublishViewpointReq.prototype.content = "";

            /**
             * PublishViewpointReq score.
             * @member {number} score
             * @memberof knights.viewpoint.PublishViewpointReq
             * @instance
             */
            PublishViewpointReq.prototype.score = 0;

            /**
             * PublishViewpointReq dataType.
             * @member {number} dataType
             * @memberof knights.viewpoint.PublishViewpointReq
             * @instance
             */
            PublishViewpointReq.prototype.dataType = 1;

            /**
             * PublishViewpointReq actId.
             * @member {number} actId
             * @memberof knights.viewpoint.PublishViewpointReq
             * @instance
             */
            PublishViewpointReq.prototype.actId = 0;

            /**
             * PublishViewpointReq videoInfo.
             * @member {knights.viewpoint.IVideoInfo|null|undefined} videoInfo
             * @memberof knights.viewpoint.PublishViewpointReq
             * @instance
             */
            PublishViewpointReq.prototype.videoInfo = null;

            /**
             * PublishViewpointReq topicId.
             * @member {number} topicId
             * @memberof knights.viewpoint.PublishViewpointReq
             * @instance
             */
            PublishViewpointReq.prototype.topicId = 0;

            /**
             * PublishViewpointReq atUuid.
             * @member {Array.<number|Long>} atUuid
             * @memberof knights.viewpoint.PublishViewpointReq
             * @instance
             */
            PublishViewpointReq.prototype.atUuid = $util.emptyArray;

            /**
             * PublishViewpointReq mixedContent.
             * @member {knights.viewpoint.IMixedContent|null|undefined} mixedContent
             * @memberof knights.viewpoint.PublishViewpointReq
             * @instance
             */
            PublishViewpointReq.prototype.mixedContent = null;

            /**
             * PublishViewpointReq owner.
             * @member {number} owner
             * @memberof knights.viewpoint.PublishViewpointReq
             * @instance
             */
            PublishViewpointReq.prototype.owner = 1;

            /**
             * Creates a new PublishViewpointReq instance using the specified properties.
             * @function create
             * @memberof knights.viewpoint.PublishViewpointReq
             * @static
             * @param {knights.viewpoint.IPublishViewpointReq=} [properties] Properties to set
             * @returns {knights.viewpoint.PublishViewpointReq} PublishViewpointReq instance
             */
            PublishViewpointReq.create = function create(properties) {
                return new PublishViewpointReq(properties);
            };

            /**
             * Encodes the specified PublishViewpointReq message. Does not implicitly {@link knights.viewpoint.PublishViewpointReq.verify|verify} messages.
             * @function encode
             * @memberof knights.viewpoint.PublishViewpointReq
             * @static
             * @param {knights.viewpoint.IPublishViewpointReq} message PublishViewpointReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PublishViewpointReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uuid != null && message.hasOwnProperty("uuid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.uuid);
                if (message.gameId != null && message.hasOwnProperty("gameId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.gameId);
                if (message.title != null && message.hasOwnProperty("title"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.title);
                if (message.content != null && message.hasOwnProperty("content"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.content);
                if (message.score != null && message.hasOwnProperty("score"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.score);
                if (message.dataType != null && message.hasOwnProperty("dataType"))
                    writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.dataType);
                if (message.actId != null && message.hasOwnProperty("actId"))
                    writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.actId);
                if (message.videoInfo != null && message.hasOwnProperty("videoInfo"))
                    $root.knights.viewpoint.VideoInfo.encode(message.videoInfo, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.topicId != null && message.hasOwnProperty("topicId"))
                    writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.topicId);
                if (message.atUuid != null && message.atUuid.length)
                    for (var i = 0; i < message.atUuid.length; ++i)
                        writer.uint32(/* id 10, wireType 0 =*/80).uint64(message.atUuid[i]);
                if (message.mixedContent != null && message.hasOwnProperty("mixedContent"))
                    $root.knights.viewpoint.MixedContent.encode(message.mixedContent, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
                if (message.owner != null && message.hasOwnProperty("owner"))
                    writer.uint32(/* id 12, wireType 0 =*/96).uint32(message.owner);
                return writer;
            };

            /**
             * Encodes the specified PublishViewpointReq message, length delimited. Does not implicitly {@link knights.viewpoint.PublishViewpointReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof knights.viewpoint.PublishViewpointReq
             * @static
             * @param {knights.viewpoint.IPublishViewpointReq} message PublishViewpointReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PublishViewpointReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PublishViewpointReq message from the specified reader or buffer.
             * @function decode
             * @memberof knights.viewpoint.PublishViewpointReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {knights.viewpoint.PublishViewpointReq} PublishViewpointReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PublishViewpointReq.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.knights.viewpoint.PublishViewpointReq();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.uuid = reader.uint64();
                        break;
                    case 2:
                        message.gameId = reader.uint64();
                        break;
                    case 3:
                        message.title = reader.string();
                        break;
                    case 4:
                        message.content = reader.string();
                        break;
                    case 5:
                        message.score = reader.uint32();
                        break;
                    case 6:
                        message.dataType = reader.uint32();
                        break;
                    case 7:
                        message.actId = reader.uint32();
                        break;
                    case 8:
                        message.videoInfo = $root.knights.viewpoint.VideoInfo.decode(reader, reader.uint32());
                        break;
                    case 9:
                        message.topicId = reader.uint32();
                        break;
                    case 10:
                        if (!(message.atUuid && message.atUuid.length))
                            message.atUuid = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.atUuid.push(reader.uint64());
                        } else
                            message.atUuid.push(reader.uint64());
                        break;
                    case 11:
                        message.mixedContent = $root.knights.viewpoint.MixedContent.decode(reader, reader.uint32());
                        break;
                    case 12:
                        message.owner = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a PublishViewpointReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof knights.viewpoint.PublishViewpointReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {knights.viewpoint.PublishViewpointReq} PublishViewpointReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PublishViewpointReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PublishViewpointReq message.
             * @function verify
             * @memberof knights.viewpoint.PublishViewpointReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PublishViewpointReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.uuid != null && message.hasOwnProperty("uuid"))
                    if (!$util.isInteger(message.uuid) && !(message.uuid && $util.isInteger(message.uuid.low) && $util.isInteger(message.uuid.high)))
                        return "uuid: integer|Long expected";
                if (message.gameId != null && message.hasOwnProperty("gameId"))
                    if (!$util.isInteger(message.gameId) && !(message.gameId && $util.isInteger(message.gameId.low) && $util.isInteger(message.gameId.high)))
                        return "gameId: integer|Long expected";
                if (message.title != null && message.hasOwnProperty("title"))
                    if (!$util.isString(message.title))
                        return "title: string expected";
                if (message.content != null && message.hasOwnProperty("content"))
                    if (!$util.isString(message.content))
                        return "content: string expected";
                if (message.score != null && message.hasOwnProperty("score"))
                    if (!$util.isInteger(message.score))
                        return "score: integer expected";
                if (message.dataType != null && message.hasOwnProperty("dataType"))
                    if (!$util.isInteger(message.dataType))
                        return "dataType: integer expected";
                if (message.actId != null && message.hasOwnProperty("actId"))
                    if (!$util.isInteger(message.actId))
                        return "actId: integer expected";
                if (message.videoInfo != null && message.hasOwnProperty("videoInfo")) {
                    var error = $root.knights.viewpoint.VideoInfo.verify(message.videoInfo);
                    if (error)
                        return "videoInfo." + error;
                }
                if (message.topicId != null && message.hasOwnProperty("topicId"))
                    if (!$util.isInteger(message.topicId))
                        return "topicId: integer expected";
                if (message.atUuid != null && message.hasOwnProperty("atUuid")) {
                    if (!Array.isArray(message.atUuid))
                        return "atUuid: array expected";
                    for (var i = 0; i < message.atUuid.length; ++i)
                        if (!$util.isInteger(message.atUuid[i]) && !(message.atUuid[i] && $util.isInteger(message.atUuid[i].low) && $util.isInteger(message.atUuid[i].high)))
                            return "atUuid: integer|Long[] expected";
                }
                if (message.mixedContent != null && message.hasOwnProperty("mixedContent")) {
                    var error = $root.knights.viewpoint.MixedContent.verify(message.mixedContent);
                    if (error)
                        return "mixedContent." + error;
                }
                if (message.owner != null && message.hasOwnProperty("owner"))
                    if (!$util.isInteger(message.owner))
                        return "owner: integer expected";
                return null;
            };

            /**
             * Creates a PublishViewpointReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof knights.viewpoint.PublishViewpointReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {knights.viewpoint.PublishViewpointReq} PublishViewpointReq
             */
            PublishViewpointReq.fromObject = function fromObject(object) {
                if (object instanceof $root.knights.viewpoint.PublishViewpointReq)
                    return object;
                var message = new $root.knights.viewpoint.PublishViewpointReq();
                if (object.uuid != null)
                    if ($util.Long)
                        (message.uuid = $util.Long.fromValue(object.uuid)).unsigned = true;
                    else if (typeof object.uuid === "string")
                        message.uuid = parseInt(object.uuid, 10);
                    else if (typeof object.uuid === "number")
                        message.uuid = object.uuid;
                    else if (typeof object.uuid === "object")
                        message.uuid = new $util.LongBits(object.uuid.low >>> 0, object.uuid.high >>> 0).toNumber(true);
                if (object.gameId != null)
                    if ($util.Long)
                        (message.gameId = $util.Long.fromValue(object.gameId)).unsigned = true;
                    else if (typeof object.gameId === "string")
                        message.gameId = parseInt(object.gameId, 10);
                    else if (typeof object.gameId === "number")
                        message.gameId = object.gameId;
                    else if (typeof object.gameId === "object")
                        message.gameId = new $util.LongBits(object.gameId.low >>> 0, object.gameId.high >>> 0).toNumber(true);
                if (object.title != null)
                    message.title = String(object.title);
                if (object.content != null)
                    message.content = String(object.content);
                if (object.score != null)
                    message.score = object.score >>> 0;
                if (object.dataType != null)
                    message.dataType = object.dataType >>> 0;
                if (object.actId != null)
                    message.actId = object.actId >>> 0;
                if (object.videoInfo != null) {
                    if (typeof object.videoInfo !== "object")
                        throw TypeError(".knights.viewpoint.PublishViewpointReq.videoInfo: object expected");
                    message.videoInfo = $root.knights.viewpoint.VideoInfo.fromObject(object.videoInfo);
                }
                if (object.topicId != null)
                    message.topicId = object.topicId >>> 0;
                if (object.atUuid) {
                    if (!Array.isArray(object.atUuid))
                        throw TypeError(".knights.viewpoint.PublishViewpointReq.atUuid: array expected");
                    message.atUuid = [];
                    for (var i = 0; i < object.atUuid.length; ++i)
                        if ($util.Long)
                            (message.atUuid[i] = $util.Long.fromValue(object.atUuid[i])).unsigned = true;
                        else if (typeof object.atUuid[i] === "string")
                            message.atUuid[i] = parseInt(object.atUuid[i], 10);
                        else if (typeof object.atUuid[i] === "number")
                            message.atUuid[i] = object.atUuid[i];
                        else if (typeof object.atUuid[i] === "object")
                            message.atUuid[i] = new $util.LongBits(object.atUuid[i].low >>> 0, object.atUuid[i].high >>> 0).toNumber(true);
                }
                if (object.mixedContent != null) {
                    if (typeof object.mixedContent !== "object")
                        throw TypeError(".knights.viewpoint.PublishViewpointReq.mixedContent: object expected");
                    message.mixedContent = $root.knights.viewpoint.MixedContent.fromObject(object.mixedContent);
                }
                if (object.owner != null)
                    message.owner = object.owner >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a PublishViewpointReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof knights.viewpoint.PublishViewpointReq
             * @static
             * @param {knights.viewpoint.PublishViewpointReq} message PublishViewpointReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PublishViewpointReq.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.atUuid = [];
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.uuid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.uuid = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.gameId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.gameId = options.longs === String ? "0" : 0;
                    object.title = "";
                    object.content = "";
                    object.score = 0;
                    object.dataType = 1;
                    object.actId = 0;
                    object.videoInfo = null;
                    object.topicId = 0;
                    object.mixedContent = null;
                    object.owner = 1;
                }
                if (message.uuid != null && message.hasOwnProperty("uuid"))
                    if (typeof message.uuid === "number")
                        object.uuid = options.longs === String ? String(message.uuid) : message.uuid;
                    else
                        object.uuid = options.longs === String ? $util.Long.prototype.toString.call(message.uuid) : options.longs === Number ? new $util.LongBits(message.uuid.low >>> 0, message.uuid.high >>> 0).toNumber(true) : message.uuid;
                if (message.gameId != null && message.hasOwnProperty("gameId"))
                    if (typeof message.gameId === "number")
                        object.gameId = options.longs === String ? String(message.gameId) : message.gameId;
                    else
                        object.gameId = options.longs === String ? $util.Long.prototype.toString.call(message.gameId) : options.longs === Number ? new $util.LongBits(message.gameId.low >>> 0, message.gameId.high >>> 0).toNumber(true) : message.gameId;
                if (message.title != null && message.hasOwnProperty("title"))
                    object.title = message.title;
                if (message.content != null && message.hasOwnProperty("content"))
                    object.content = message.content;
                if (message.score != null && message.hasOwnProperty("score"))
                    object.score = message.score;
                if (message.dataType != null && message.hasOwnProperty("dataType"))
                    object.dataType = message.dataType;
                if (message.actId != null && message.hasOwnProperty("actId"))
                    object.actId = message.actId;
                if (message.videoInfo != null && message.hasOwnProperty("videoInfo"))
                    object.videoInfo = $root.knights.viewpoint.VideoInfo.toObject(message.videoInfo, options);
                if (message.topicId != null && message.hasOwnProperty("topicId"))
                    object.topicId = message.topicId;
                if (message.atUuid && message.atUuid.length) {
                    object.atUuid = [];
                    for (var j = 0; j < message.atUuid.length; ++j)
                        if (typeof message.atUuid[j] === "number")
                            object.atUuid[j] = options.longs === String ? String(message.atUuid[j]) : message.atUuid[j];
                        else
                            object.atUuid[j] = options.longs === String ? $util.Long.prototype.toString.call(message.atUuid[j]) : options.longs === Number ? new $util.LongBits(message.atUuid[j].low >>> 0, message.atUuid[j].high >>> 0).toNumber(true) : message.atUuid[j];
                }
                if (message.mixedContent != null && message.hasOwnProperty("mixedContent"))
                    object.mixedContent = $root.knights.viewpoint.MixedContent.toObject(message.mixedContent, options);
                if (message.owner != null && message.hasOwnProperty("owner"))
                    object.owner = message.owner;
                return object;
            };

            /**
             * Converts this PublishViewpointReq to JSON.
             * @function toJSON
             * @memberof knights.viewpoint.PublishViewpointReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PublishViewpointReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return PublishViewpointReq;
        })();

        viewpoint.PublishViewpointRsp = (function() {

            /**
             * Properties of a PublishViewpointRsp.
             * @memberof knights.viewpoint
             * @interface IPublishViewpointRsp
             * @property {number} retCode PublishViewpointRsp retCode
             * @property {string|null} [errMsg] PublishViewpointRsp errMsg
             * @property {string|null} [viewpointId] PublishViewpointRsp viewpointId
             */

            /**
             * Constructs a new PublishViewpointRsp.
             * @memberof knights.viewpoint
             * @classdesc Represents a PublishViewpointRsp.
             * @implements IPublishViewpointRsp
             * @constructor
             * @param {knights.viewpoint.IPublishViewpointRsp=} [properties] Properties to set
             */
            function PublishViewpointRsp(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PublishViewpointRsp retCode.
             * @member {number} retCode
             * @memberof knights.viewpoint.PublishViewpointRsp
             * @instance
             */
            PublishViewpointRsp.prototype.retCode = 0;

            /**
             * PublishViewpointRsp errMsg.
             * @member {string} errMsg
             * @memberof knights.viewpoint.PublishViewpointRsp
             * @instance
             */
            PublishViewpointRsp.prototype.errMsg = "";

            /**
             * PublishViewpointRsp viewpointId.
             * @member {string} viewpointId
             * @memberof knights.viewpoint.PublishViewpointRsp
             * @instance
             */
            PublishViewpointRsp.prototype.viewpointId = "";

            /**
             * Creates a new PublishViewpointRsp instance using the specified properties.
             * @function create
             * @memberof knights.viewpoint.PublishViewpointRsp
             * @static
             * @param {knights.viewpoint.IPublishViewpointRsp=} [properties] Properties to set
             * @returns {knights.viewpoint.PublishViewpointRsp} PublishViewpointRsp instance
             */
            PublishViewpointRsp.create = function create(properties) {
                return new PublishViewpointRsp(properties);
            };

            /**
             * Encodes the specified PublishViewpointRsp message. Does not implicitly {@link knights.viewpoint.PublishViewpointRsp.verify|verify} messages.
             * @function encode
             * @memberof knights.viewpoint.PublishViewpointRsp
             * @static
             * @param {knights.viewpoint.IPublishViewpointRsp} message PublishViewpointRsp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PublishViewpointRsp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.retCode);
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
                if (message.viewpointId != null && message.hasOwnProperty("viewpointId"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.viewpointId);
                return writer;
            };

            /**
             * Encodes the specified PublishViewpointRsp message, length delimited. Does not implicitly {@link knights.viewpoint.PublishViewpointRsp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof knights.viewpoint.PublishViewpointRsp
             * @static
             * @param {knights.viewpoint.IPublishViewpointRsp} message PublishViewpointRsp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PublishViewpointRsp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PublishViewpointRsp message from the specified reader or buffer.
             * @function decode
             * @memberof knights.viewpoint.PublishViewpointRsp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {knights.viewpoint.PublishViewpointRsp} PublishViewpointRsp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PublishViewpointRsp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.knights.viewpoint.PublishViewpointRsp();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.retCode = reader.uint32();
                        break;
                    case 2:
                        message.errMsg = reader.string();
                        break;
                    case 3:
                        message.viewpointId = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("retCode"))
                    throw $util.ProtocolError("missing required 'retCode'", { instance: message });
                return message;
            };

            /**
             * Decodes a PublishViewpointRsp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof knights.viewpoint.PublishViewpointRsp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {knights.viewpoint.PublishViewpointRsp} PublishViewpointRsp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PublishViewpointRsp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PublishViewpointRsp message.
             * @function verify
             * @memberof knights.viewpoint.PublishViewpointRsp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PublishViewpointRsp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.retCode))
                    return "retCode: integer expected";
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    if (!$util.isString(message.errMsg))
                        return "errMsg: string expected";
                if (message.viewpointId != null && message.hasOwnProperty("viewpointId"))
                    if (!$util.isString(message.viewpointId))
                        return "viewpointId: string expected";
                return null;
            };

            /**
             * Creates a PublishViewpointRsp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof knights.viewpoint.PublishViewpointRsp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {knights.viewpoint.PublishViewpointRsp} PublishViewpointRsp
             */
            PublishViewpointRsp.fromObject = function fromObject(object) {
                if (object instanceof $root.knights.viewpoint.PublishViewpointRsp)
                    return object;
                var message = new $root.knights.viewpoint.PublishViewpointRsp();
                if (object.retCode != null)
                    message.retCode = object.retCode >>> 0;
                if (object.errMsg != null)
                    message.errMsg = String(object.errMsg);
                if (object.viewpointId != null)
                    message.viewpointId = String(object.viewpointId);
                return message;
            };

            /**
             * Creates a plain object from a PublishViewpointRsp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof knights.viewpoint.PublishViewpointRsp
             * @static
             * @param {knights.viewpoint.PublishViewpointRsp} message PublishViewpointRsp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PublishViewpointRsp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.retCode = 0;
                    object.errMsg = "";
                    object.viewpointId = "";
                }
                if (message.retCode != null && message.hasOwnProperty("retCode"))
                    object.retCode = message.retCode;
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    object.errMsg = message.errMsg;
                if (message.viewpointId != null && message.hasOwnProperty("viewpointId"))
                    object.viewpointId = message.viewpointId;
                return object;
            };

            /**
             * Converts this PublishViewpointRsp to JSON.
             * @function toJSON
             * @memberof knights.viewpoint.PublishViewpointRsp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PublishViewpointRsp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return PublishViewpointRsp;
        })();

        return viewpoint;
    })();

    return knights;
})();

module.exports = $root;
