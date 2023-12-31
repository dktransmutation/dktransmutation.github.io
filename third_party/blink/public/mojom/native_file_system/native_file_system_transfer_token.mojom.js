// third_party/blink/public/mojom/native_file_system/native_file_system_transfer_token.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/native_file_system/native_file_system_transfer_token.mojom';
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
  var unguessable_token$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/unguessable_token.mojom', '../../../../../mojo/public/mojom/base/unguessable_token.mojom.js');
  }



  function NativeFileSystemTransferToken_GetInternalID_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NativeFileSystemTransferToken_GetInternalID_Params.prototype.initDefaults_ = function() {
  };
  NativeFileSystemTransferToken_GetInternalID_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NativeFileSystemTransferToken_GetInternalID_Params.validate = function(messageValidator, offset) {
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

  NativeFileSystemTransferToken_GetInternalID_Params.encodedSize = codec.kStructHeaderSize + 0;

  NativeFileSystemTransferToken_GetInternalID_Params.decode = function(decoder) {
    var packed;
    var val = new NativeFileSystemTransferToken_GetInternalID_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  NativeFileSystemTransferToken_GetInternalID_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NativeFileSystemTransferToken_GetInternalID_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function NativeFileSystemTransferToken_GetInternalID_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NativeFileSystemTransferToken_GetInternalID_ResponseParams.prototype.initDefaults_ = function() {
    this.id = null;
  };
  NativeFileSystemTransferToken_GetInternalID_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NativeFileSystemTransferToken_GetInternalID_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate NativeFileSystemTransferToken_GetInternalID_ResponseParams.id
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, unguessable_token$.UnguessableToken, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NativeFileSystemTransferToken_GetInternalID_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  NativeFileSystemTransferToken_GetInternalID_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NativeFileSystemTransferToken_GetInternalID_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.id =
        decoder.decodeStructPointer(unguessable_token$.UnguessableToken);
    return val;
  };

  NativeFileSystemTransferToken_GetInternalID_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NativeFileSystemTransferToken_GetInternalID_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(unguessable_token$.UnguessableToken, val.id);
  };
  function NativeFileSystemTransferToken_Clone_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NativeFileSystemTransferToken_Clone_Params.prototype.initDefaults_ = function() {
    this.tokenClone = new bindings.InterfaceRequest();
  };
  NativeFileSystemTransferToken_Clone_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NativeFileSystemTransferToken_Clone_Params.validate = function(messageValidator, offset) {
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


    // validate NativeFileSystemTransferToken_Clone_Params.tokenClone
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NativeFileSystemTransferToken_Clone_Params.encodedSize = codec.kStructHeaderSize + 8;

  NativeFileSystemTransferToken_Clone_Params.decode = function(decoder) {
    var packed;
    var val = new NativeFileSystemTransferToken_Clone_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.tokenClone =
        decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NativeFileSystemTransferToken_Clone_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NativeFileSystemTransferToken_Clone_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.tokenClone);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kNativeFileSystemTransferToken_GetInternalID_Name = 0;
  var kNativeFileSystemTransferToken_Clone_Name = 1;

  function NativeFileSystemTransferTokenPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(NativeFileSystemTransferToken,
                                                   handleOrPtrInfo);
  }

  function NativeFileSystemTransferTokenAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        NativeFileSystemTransferToken, associatedInterfacePtrInfo);
  }

  NativeFileSystemTransferTokenAssociatedPtr.prototype =
      Object.create(NativeFileSystemTransferTokenPtr.prototype);
  NativeFileSystemTransferTokenAssociatedPtr.prototype.constructor =
      NativeFileSystemTransferTokenAssociatedPtr;

  function NativeFileSystemTransferTokenProxy(receiver) {
    this.receiver_ = receiver;
  }
  NativeFileSystemTransferTokenPtr.prototype.getInternalID = function() {
    return NativeFileSystemTransferTokenProxy.prototype.getInternalID
        .apply(this.ptr.getProxy(), arguments);
  };

  NativeFileSystemTransferTokenProxy.prototype.getInternalID = function() {
    var params_ = new NativeFileSystemTransferToken_GetInternalID_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNativeFileSystemTransferToken_GetInternalID_Name,
          codec.align(NativeFileSystemTransferToken_GetInternalID_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NativeFileSystemTransferToken_GetInternalID_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NativeFileSystemTransferToken_GetInternalID_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NativeFileSystemTransferTokenPtr.prototype.clone = function() {
    return NativeFileSystemTransferTokenProxy.prototype.clone
        .apply(this.ptr.getProxy(), arguments);
  };

  NativeFileSystemTransferTokenProxy.prototype.clone = function(tokenClone) {
    var params_ = new NativeFileSystemTransferToken_Clone_Params();
    params_.tokenClone = tokenClone;
    var builder = new codec.MessageV0Builder(
        kNativeFileSystemTransferToken_Clone_Name,
        codec.align(NativeFileSystemTransferToken_Clone_Params.encodedSize));
    builder.encodeStruct(NativeFileSystemTransferToken_Clone_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function NativeFileSystemTransferTokenStub(delegate) {
    this.delegate_ = delegate;
  }
  NativeFileSystemTransferTokenStub.prototype.getInternalID = function() {
    return this.delegate_ && this.delegate_.getInternalID && this.delegate_.getInternalID();
  }
  NativeFileSystemTransferTokenStub.prototype.clone = function(tokenClone) {
    return this.delegate_ && this.delegate_.clone && this.delegate_.clone(tokenClone);
  }

  NativeFileSystemTransferTokenStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kNativeFileSystemTransferToken_Clone_Name:
      var params = reader.decodeStruct(NativeFileSystemTransferToken_Clone_Params);
      this.clone(params.tokenClone);
      return true;
    default:
      return false;
    }
  };

  NativeFileSystemTransferTokenStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kNativeFileSystemTransferToken_GetInternalID_Name:
      var params = reader.decodeStruct(NativeFileSystemTransferToken_GetInternalID_Params);
      this.getInternalID().then(function(response) {
        var responseParams =
            new NativeFileSystemTransferToken_GetInternalID_ResponseParams();
        responseParams.id = response.id;
        var builder = new codec.MessageV1Builder(
            kNativeFileSystemTransferToken_GetInternalID_Name,
            codec.align(NativeFileSystemTransferToken_GetInternalID_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NativeFileSystemTransferToken_GetInternalID_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateNativeFileSystemTransferTokenRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kNativeFileSystemTransferToken_GetInternalID_Name:
        if (message.expectsResponse())
          paramsClass = NativeFileSystemTransferToken_GetInternalID_Params;
      break;
      case kNativeFileSystemTransferToken_Clone_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NativeFileSystemTransferToken_Clone_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateNativeFileSystemTransferTokenResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kNativeFileSystemTransferToken_GetInternalID_Name:
        if (message.isResponse())
          paramsClass = NativeFileSystemTransferToken_GetInternalID_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var NativeFileSystemTransferToken = {
    name: 'blink.mojom.NativeFileSystemTransferToken',
    kVersion: 0,
    ptrClass: NativeFileSystemTransferTokenPtr,
    proxyClass: NativeFileSystemTransferTokenProxy,
    stubClass: NativeFileSystemTransferTokenStub,
    validateRequest: validateNativeFileSystemTransferTokenRequest,
    validateResponse: validateNativeFileSystemTransferTokenResponse,
  };
  NativeFileSystemTransferTokenStub.prototype.validator = validateNativeFileSystemTransferTokenRequest;
  NativeFileSystemTransferTokenProxy.prototype.validator = validateNativeFileSystemTransferTokenResponse;
  exports.NativeFileSystemTransferToken = NativeFileSystemTransferToken;
  exports.NativeFileSystemTransferTokenPtr = NativeFileSystemTransferTokenPtr;
  exports.NativeFileSystemTransferTokenAssociatedPtr = NativeFileSystemTransferTokenAssociatedPtr;
})();