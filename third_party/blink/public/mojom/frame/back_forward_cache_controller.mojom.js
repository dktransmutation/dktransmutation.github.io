// third_party/blink/public/mojom/frame/back_forward_cache_controller.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/frame/back_forward_cache_controller.mojom';
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



  function BackForwardCacheControllerHost_EvictFromBackForwardCache_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BackForwardCacheControllerHost_EvictFromBackForwardCache_Params.prototype.initDefaults_ = function() {
  };
  BackForwardCacheControllerHost_EvictFromBackForwardCache_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BackForwardCacheControllerHost_EvictFromBackForwardCache_Params.validate = function(messageValidator, offset) {
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

  BackForwardCacheControllerHost_EvictFromBackForwardCache_Params.encodedSize = codec.kStructHeaderSize + 0;

  BackForwardCacheControllerHost_EvictFromBackForwardCache_Params.decode = function(decoder) {
    var packed;
    var val = new BackForwardCacheControllerHost_EvictFromBackForwardCache_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  BackForwardCacheControllerHost_EvictFromBackForwardCache_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BackForwardCacheControllerHost_EvictFromBackForwardCache_Params.encodedSize);
    encoder.writeUint32(0);
  };
  var kBackForwardCacheControllerHost_EvictFromBackForwardCache_Name = 0;

  function BackForwardCacheControllerHostPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(BackForwardCacheControllerHost,
                                                   handleOrPtrInfo);
  }

  function BackForwardCacheControllerHostAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        BackForwardCacheControllerHost, associatedInterfacePtrInfo);
  }

  BackForwardCacheControllerHostAssociatedPtr.prototype =
      Object.create(BackForwardCacheControllerHostPtr.prototype);
  BackForwardCacheControllerHostAssociatedPtr.prototype.constructor =
      BackForwardCacheControllerHostAssociatedPtr;

  function BackForwardCacheControllerHostProxy(receiver) {
    this.receiver_ = receiver;
  }
  BackForwardCacheControllerHostPtr.prototype.evictFromBackForwardCache = function() {
    return BackForwardCacheControllerHostProxy.prototype.evictFromBackForwardCache
        .apply(this.ptr.getProxy(), arguments);
  };

  BackForwardCacheControllerHostProxy.prototype.evictFromBackForwardCache = function() {
    var params_ = new BackForwardCacheControllerHost_EvictFromBackForwardCache_Params();
    var builder = new codec.MessageV0Builder(
        kBackForwardCacheControllerHost_EvictFromBackForwardCache_Name,
        codec.align(BackForwardCacheControllerHost_EvictFromBackForwardCache_Params.encodedSize));
    builder.encodeStruct(BackForwardCacheControllerHost_EvictFromBackForwardCache_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function BackForwardCacheControllerHostStub(delegate) {
    this.delegate_ = delegate;
  }
  BackForwardCacheControllerHostStub.prototype.evictFromBackForwardCache = function() {
    return this.delegate_ && this.delegate_.evictFromBackForwardCache && this.delegate_.evictFromBackForwardCache();
  }

  BackForwardCacheControllerHostStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kBackForwardCacheControllerHost_EvictFromBackForwardCache_Name:
      var params = reader.decodeStruct(BackForwardCacheControllerHost_EvictFromBackForwardCache_Params);
      this.evictFromBackForwardCache();
      return true;
    default:
      return false;
    }
  };

  BackForwardCacheControllerHostStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateBackForwardCacheControllerHostRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kBackForwardCacheControllerHost_EvictFromBackForwardCache_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = BackForwardCacheControllerHost_EvictFromBackForwardCache_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateBackForwardCacheControllerHostResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var BackForwardCacheControllerHost = {
    name: 'blink.mojom.BackForwardCacheControllerHost',
    kVersion: 0,
    ptrClass: BackForwardCacheControllerHostPtr,
    proxyClass: BackForwardCacheControllerHostProxy,
    stubClass: BackForwardCacheControllerHostStub,
    validateRequest: validateBackForwardCacheControllerHostRequest,
    validateResponse: null,
  };
  BackForwardCacheControllerHostStub.prototype.validator = validateBackForwardCacheControllerHostRequest;
  BackForwardCacheControllerHostProxy.prototype.validator = null;
  exports.BackForwardCacheControllerHost = BackForwardCacheControllerHost;
  exports.BackForwardCacheControllerHostPtr = BackForwardCacheControllerHostPtr;
  exports.BackForwardCacheControllerHostAssociatedPtr = BackForwardCacheControllerHostAssociatedPtr;
})();