// services/network/public/mojom/http_raw_request_response_info.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/http_raw_request_response_info.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('network.mojom');
  var http_raw_headers$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/http_raw_headers.mojom', 'http_raw_headers.mojom.js');
  }



  function HttpRawRequestResponseInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  HttpRawRequestResponseInfo.prototype.initDefaults_ = function() {
    this.httpStatusCode = 0;
    this.httpStatusText = null;
    this.requestHeaders = null;
    this.responseHeaders = null;
    this.requestHeadersText = null;
    this.responseHeadersText = null;
  };
  HttpRawRequestResponseInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  HttpRawRequestResponseInfo.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 56}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;



    // validate HttpRawRequestResponseInfo.httpStatusText
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate HttpRawRequestResponseInfo.requestHeaders
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 8, new codec.PointerTo(http_raw_headers$.HttpRawHeaderPair), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate HttpRawRequestResponseInfo.responseHeaders
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 8, new codec.PointerTo(http_raw_headers$.HttpRawHeaderPair), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate HttpRawRequestResponseInfo.requestHeadersText
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 32, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate HttpRawRequestResponseInfo.responseHeadersText
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 40, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  HttpRawRequestResponseInfo.encodedSize = codec.kStructHeaderSize + 48;

  HttpRawRequestResponseInfo.decode = function(decoder) {
    var packed;
    var val = new HttpRawRequestResponseInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.httpStatusCode =
        decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.httpStatusText =
        decoder.decodeStruct(codec.String);
    val.requestHeaders =
        decoder.decodeArrayPointer(new codec.PointerTo(http_raw_headers$.HttpRawHeaderPair));
    val.responseHeaders =
        decoder.decodeArrayPointer(new codec.PointerTo(http_raw_headers$.HttpRawHeaderPair));
    val.requestHeadersText =
        decoder.decodeStruct(codec.String);
    val.responseHeadersText =
        decoder.decodeStruct(codec.String);
    return val;
  };

  HttpRawRequestResponseInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(HttpRawRequestResponseInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.httpStatusCode);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.String, val.httpStatusText);
    encoder.encodeArrayPointer(new codec.PointerTo(http_raw_headers$.HttpRawHeaderPair), val.requestHeaders);
    encoder.encodeArrayPointer(new codec.PointerTo(http_raw_headers$.HttpRawHeaderPair), val.responseHeaders);
    encoder.encodeStruct(codec.String, val.requestHeadersText);
    encoder.encodeStruct(codec.String, val.responseHeadersText);
  };
  exports.HttpRawRequestResponseInfo = HttpRawRequestResponseInfo;
})();