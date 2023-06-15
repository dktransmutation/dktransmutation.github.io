// third_party/blink/public/mojom/payments/payment_credential.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/payments/payment_credential.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('payments.mojom');
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../../../url/mojom/url.mojom.js');
  }


  var PaymentCredentialCreationStatus = {};
  PaymentCredentialCreationStatus.SUCCESS = 0;
  PaymentCredentialCreationStatus.FAILED_TO_DOWNLOAD_ICON = 1;
  PaymentCredentialCreationStatus.FAILED_TO_STORE_INSTRUMENT = 2;
  PaymentCredentialCreationStatus.MIN_VALUE = 0,
  PaymentCredentialCreationStatus.MAX_VALUE = 2,

  PaymentCredentialCreationStatus.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  PaymentCredentialCreationStatus.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function PaymentCredentialInstrument(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PaymentCredentialInstrument.prototype.initDefaults_ = function() {
    this.displayName = null;
    this.icon = null;
  };
  PaymentCredentialInstrument.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PaymentCredentialInstrument.validate = function(messageValidator, offset) {
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


    // validate PaymentCredentialInstrument.displayName
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate PaymentCredentialInstrument.icon
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PaymentCredentialInstrument.encodedSize = codec.kStructHeaderSize + 16;

  PaymentCredentialInstrument.decode = function(decoder) {
    var packed;
    var val = new PaymentCredentialInstrument();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.displayName =
        decoder.decodeStruct(codec.String);
    val.icon =
        decoder.decodeStructPointer(url$.Url);
    return val;
  };

  PaymentCredentialInstrument.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PaymentCredentialInstrument.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.displayName);
    encoder.encodeStructPointer(url$.Url, val.icon);
  };
  function PaymentCredential_StorePaymentCredential_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PaymentCredential_StorePaymentCredential_Params.prototype.initDefaults_ = function() {
    this.instrument = null;
    this.credentialId = null;
    this.rpId = null;
  };
  PaymentCredential_StorePaymentCredential_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PaymentCredential_StorePaymentCredential_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 32}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PaymentCredential_StorePaymentCredential_Params.instrument
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, PaymentCredentialInstrument, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PaymentCredential_StorePaymentCredential_Params.credentialId
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PaymentCredential_StorePaymentCredential_Params.rpId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PaymentCredential_StorePaymentCredential_Params.encodedSize = codec.kStructHeaderSize + 24;

  PaymentCredential_StorePaymentCredential_Params.decode = function(decoder) {
    var packed;
    var val = new PaymentCredential_StorePaymentCredential_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.instrument =
        decoder.decodeStructPointer(PaymentCredentialInstrument);
    val.credentialId =
        decoder.decodeArrayPointer(codec.Uint8);
    val.rpId =
        decoder.decodeStruct(codec.String);
    return val;
  };

  PaymentCredential_StorePaymentCredential_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PaymentCredential_StorePaymentCredential_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(PaymentCredentialInstrument, val.instrument);
    encoder.encodeArrayPointer(codec.Uint8, val.credentialId);
    encoder.encodeStruct(codec.String, val.rpId);
  };
  function PaymentCredential_StorePaymentCredential_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PaymentCredential_StorePaymentCredential_ResponseParams.prototype.initDefaults_ = function() {
    this.status = 0;
  };
  PaymentCredential_StorePaymentCredential_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PaymentCredential_StorePaymentCredential_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PaymentCredential_StorePaymentCredential_ResponseParams.status
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, PaymentCredentialCreationStatus);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PaymentCredential_StorePaymentCredential_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  PaymentCredential_StorePaymentCredential_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new PaymentCredential_StorePaymentCredential_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.status =
        decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  PaymentCredential_StorePaymentCredential_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PaymentCredential_StorePaymentCredential_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.status);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kPaymentCredential_StorePaymentCredential_Name = 0;

  function PaymentCredentialPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(PaymentCredential,
                                                   handleOrPtrInfo);
  }

  function PaymentCredentialAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        PaymentCredential, associatedInterfacePtrInfo);
  }

  PaymentCredentialAssociatedPtr.prototype =
      Object.create(PaymentCredentialPtr.prototype);
  PaymentCredentialAssociatedPtr.prototype.constructor =
      PaymentCredentialAssociatedPtr;

  function PaymentCredentialProxy(receiver) {
    this.receiver_ = receiver;
  }
  PaymentCredentialPtr.prototype.storePaymentCredential = function() {
    return PaymentCredentialProxy.prototype.storePaymentCredential
        .apply(this.ptr.getProxy(), arguments);
  };

  PaymentCredentialProxy.prototype.storePaymentCredential = function(instrument, credentialId, rpId) {
    var params_ = new PaymentCredential_StorePaymentCredential_Params();
    params_.instrument = instrument;
    params_.credentialId = credentialId;
    params_.rpId = rpId;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kPaymentCredential_StorePaymentCredential_Name,
          codec.align(PaymentCredential_StorePaymentCredential_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(PaymentCredential_StorePaymentCredential_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(PaymentCredential_StorePaymentCredential_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function PaymentCredentialStub(delegate) {
    this.delegate_ = delegate;
  }
  PaymentCredentialStub.prototype.storePaymentCredential = function(instrument, credentialId, rpId) {
    return this.delegate_ && this.delegate_.storePaymentCredential && this.delegate_.storePaymentCredential(instrument, credentialId, rpId);
  }

  PaymentCredentialStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  PaymentCredentialStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kPaymentCredential_StorePaymentCredential_Name:
      var params = reader.decodeStruct(PaymentCredential_StorePaymentCredential_Params);
      this.storePaymentCredential(params.instrument, params.credentialId, params.rpId).then(function(response) {
        var responseParams =
            new PaymentCredential_StorePaymentCredential_ResponseParams();
        responseParams.status = response.status;
        var builder = new codec.MessageV1Builder(
            kPaymentCredential_StorePaymentCredential_Name,
            codec.align(PaymentCredential_StorePaymentCredential_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(PaymentCredential_StorePaymentCredential_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validatePaymentCredentialRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kPaymentCredential_StorePaymentCredential_Name:
        if (message.expectsResponse())
          paramsClass = PaymentCredential_StorePaymentCredential_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validatePaymentCredentialResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kPaymentCredential_StorePaymentCredential_Name:
        if (message.isResponse())
          paramsClass = PaymentCredential_StorePaymentCredential_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var PaymentCredential = {
    name: 'payments.mojom.PaymentCredential',
    kVersion: 0,
    ptrClass: PaymentCredentialPtr,
    proxyClass: PaymentCredentialProxy,
    stubClass: PaymentCredentialStub,
    validateRequest: validatePaymentCredentialRequest,
    validateResponse: validatePaymentCredentialResponse,
  };
  PaymentCredentialStub.prototype.validator = validatePaymentCredentialRequest;
  PaymentCredentialProxy.prototype.validator = validatePaymentCredentialResponse;
  exports.PaymentCredentialCreationStatus = PaymentCredentialCreationStatus;
  exports.PaymentCredentialInstrument = PaymentCredentialInstrument;
  exports.PaymentCredential = PaymentCredential;
  exports.PaymentCredentialPtr = PaymentCredentialPtr;
  exports.PaymentCredentialAssociatedPtr = PaymentCredentialAssociatedPtr;
})();