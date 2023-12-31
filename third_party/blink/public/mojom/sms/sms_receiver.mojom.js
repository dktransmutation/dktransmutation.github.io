// third_party/blink/public/mojom/sms/sms_receiver.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/sms/sms_receiver.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('blink.mojom');
  var time$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/time.mojom', '../../../../../mojo/public/mojom/base/time.mojom.js');
  }


  var SmsStatus = {};
  SmsStatus.kSuccess = 0;
  SmsStatus.kTimeout = 1;
  SmsStatus.kCancelled = 2;
  SmsStatus.kAborted = 3;
  SmsStatus.MIN_VALUE = 0,
  SmsStatus.MAX_VALUE = 3,

  SmsStatus.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  SmsStatus.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function SmsReceiver_Receive_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SmsReceiver_Receive_Params.prototype.initDefaults_ = function() {
  };
  SmsReceiver_Receive_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SmsReceiver_Receive_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 8}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SmsReceiver_Receive_Params.encodedSize = codec.kStructHeaderSize + 0;

  SmsReceiver_Receive_Params.decode = function(decoder) {
    var packed;
    var val = new SmsReceiver_Receive_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  SmsReceiver_Receive_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SmsReceiver_Receive_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function SmsReceiver_Receive_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SmsReceiver_Receive_ResponseParams.prototype.initDefaults_ = function() {
    this.status = 0;
    this.otp = null;
  };
  SmsReceiver_Receive_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SmsReceiver_Receive_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SmsReceiver_Receive_ResponseParams.status
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, SmsStatus);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SmsReceiver_Receive_ResponseParams.otp
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, true)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SmsReceiver_Receive_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  SmsReceiver_Receive_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new SmsReceiver_Receive_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.status =
        decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.otp =
        decoder.decodeStruct(codec.NullableString);
    return val;
  };

  SmsReceiver_Receive_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SmsReceiver_Receive_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.status);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.NullableString, val.otp);
  };
  function SmsReceiver_Abort_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SmsReceiver_Abort_Params.prototype.initDefaults_ = function() {
  };
  SmsReceiver_Abort_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SmsReceiver_Abort_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 8}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SmsReceiver_Abort_Params.encodedSize = codec.kStructHeaderSize + 0;

  SmsReceiver_Abort_Params.decode = function(decoder) {
    var packed;
    var val = new SmsReceiver_Abort_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  SmsReceiver_Abort_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SmsReceiver_Abort_Params.encodedSize);
    encoder.writeUint32(0);
  };
  var kSmsReceiver_Receive_Name = 0;
  var kSmsReceiver_Abort_Name = 1;

  function SmsReceiverPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(SmsReceiver,
                                                   handleOrPtrInfo);
  }

  function SmsReceiverAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        SmsReceiver, associatedInterfacePtrInfo);
  }

  SmsReceiverAssociatedPtr.prototype =
      Object.create(SmsReceiverPtr.prototype);
  SmsReceiverAssociatedPtr.prototype.constructor =
      SmsReceiverAssociatedPtr;

  function SmsReceiverProxy(receiver) {
    this.receiver_ = receiver;
  }
  SmsReceiverPtr.prototype.receive = function() {
    return SmsReceiverProxy.prototype.receive
        .apply(this.ptr.getProxy(), arguments);
  };

  SmsReceiverProxy.prototype.receive = function() {
    var params_ = new SmsReceiver_Receive_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kSmsReceiver_Receive_Name,
          codec.align(SmsReceiver_Receive_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(SmsReceiver_Receive_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(SmsReceiver_Receive_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  SmsReceiverPtr.prototype.abort = function() {
    return SmsReceiverProxy.prototype.abort
        .apply(this.ptr.getProxy(), arguments);
  };

  SmsReceiverProxy.prototype.abort = function() {
    var params_ = new SmsReceiver_Abort_Params();
    var builder = new codec.MessageV0Builder(
        kSmsReceiver_Abort_Name,
        codec.align(SmsReceiver_Abort_Params.encodedSize));
    builder.encodeStruct(SmsReceiver_Abort_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function SmsReceiverStub(delegate) {
    this.delegate_ = delegate;
  }
  SmsReceiverStub.prototype.receive = function() {
    return this.delegate_ && this.delegate_.receive && this.delegate_.receive();
  }
  SmsReceiverStub.prototype.abort = function() {
    return this.delegate_ && this.delegate_.abort && this.delegate_.abort();
  }

  SmsReceiverStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kSmsReceiver_Abort_Name:
      var params = reader.decodeStruct(SmsReceiver_Abort_Params);
      this.abort();
      return true;
    default:
      return false;
    }
  };

  SmsReceiverStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kSmsReceiver_Receive_Name:
      var params = reader.decodeStruct(SmsReceiver_Receive_Params);
      this.receive().then(function(response) {
        var responseParams =
            new SmsReceiver_Receive_ResponseParams();
        responseParams.status = response.status;
        responseParams.otp = response.otp;
        var builder = new codec.MessageV1Builder(
            kSmsReceiver_Receive_Name,
            codec.align(SmsReceiver_Receive_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(SmsReceiver_Receive_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateSmsReceiverRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kSmsReceiver_Receive_Name:
        if (message.expectsResponse())
          paramsClass = SmsReceiver_Receive_Params;
      break;
      case kSmsReceiver_Abort_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = SmsReceiver_Abort_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateSmsReceiverResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kSmsReceiver_Receive_Name:
        if (message.isResponse())
          paramsClass = SmsReceiver_Receive_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var SmsReceiver = {
    name: 'blink.mojom.SmsReceiver',
    kVersion: 0,
    ptrClass: SmsReceiverPtr,
    proxyClass: SmsReceiverProxy,
    stubClass: SmsReceiverStub,
    validateRequest: validateSmsReceiverRequest,
    validateResponse: validateSmsReceiverResponse,
  };
  SmsReceiverStub.prototype.validator = validateSmsReceiverRequest;
  SmsReceiverProxy.prototype.validator = validateSmsReceiverResponse;
  exports.SmsStatus = SmsStatus;
  exports.SmsReceiver = SmsReceiver;
  exports.SmsReceiverPtr = SmsReceiverPtr;
  exports.SmsReceiverAssociatedPtr = SmsReceiverAssociatedPtr;
})();