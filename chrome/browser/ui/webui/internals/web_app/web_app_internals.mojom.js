// chrome/browser/ui/webui/internals/web_app/web_app_internals.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'chrome/browser/ui/webui/internals/web_app/web_app_internals.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('mojom.webAppInternals');



  function WebApp(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WebApp.prototype.initDefaults_ = function() {
    this.id = null;
    this.name = null;
    this.debugInfo = null;
  };
  WebApp.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WebApp.validate = function(messageValidator, offset) {
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


    // validate WebApp.id
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate WebApp.name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate WebApp.debugInfo
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  WebApp.encodedSize = codec.kStructHeaderSize + 24;

  WebApp.decode = function(decoder) {
    var packed;
    var val = new WebApp();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.id =
        decoder.decodeStruct(codec.String);
    val.name =
        decoder.decodeStruct(codec.String);
    val.debugInfo =
        decoder.decodeStruct(codec.String);
    return val;
  };

  WebApp.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WebApp.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.id);
    encoder.encodeStruct(codec.String, val.name);
    encoder.encodeStruct(codec.String, val.debugInfo);
  };
  function WebAppInternalsPageHandler_IsBmoEnabled_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WebAppInternalsPageHandler_IsBmoEnabled_Params.prototype.initDefaults_ = function() {
  };
  WebAppInternalsPageHandler_IsBmoEnabled_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WebAppInternalsPageHandler_IsBmoEnabled_Params.validate = function(messageValidator, offset) {
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

  WebAppInternalsPageHandler_IsBmoEnabled_Params.encodedSize = codec.kStructHeaderSize + 0;

  WebAppInternalsPageHandler_IsBmoEnabled_Params.decode = function(decoder) {
    var packed;
    var val = new WebAppInternalsPageHandler_IsBmoEnabled_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  WebAppInternalsPageHandler_IsBmoEnabled_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WebAppInternalsPageHandler_IsBmoEnabled_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function WebAppInternalsPageHandler_IsBmoEnabled_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WebAppInternalsPageHandler_IsBmoEnabled_ResponseParams.prototype.initDefaults_ = function() {
    this.isBmoEnabled = false;
  };
  WebAppInternalsPageHandler_IsBmoEnabled_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WebAppInternalsPageHandler_IsBmoEnabled_ResponseParams.validate = function(messageValidator, offset) {
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


    return validator.validationError.NONE;
  };

  WebAppInternalsPageHandler_IsBmoEnabled_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  WebAppInternalsPageHandler_IsBmoEnabled_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new WebAppInternalsPageHandler_IsBmoEnabled_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.isBmoEnabled = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  WebAppInternalsPageHandler_IsBmoEnabled_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WebAppInternalsPageHandler_IsBmoEnabled_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.isBmoEnabled & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function WebAppInternalsPageHandler_GetWebApps_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WebAppInternalsPageHandler_GetWebApps_Params.prototype.initDefaults_ = function() {
  };
  WebAppInternalsPageHandler_GetWebApps_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WebAppInternalsPageHandler_GetWebApps_Params.validate = function(messageValidator, offset) {
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

  WebAppInternalsPageHandler_GetWebApps_Params.encodedSize = codec.kStructHeaderSize + 0;

  WebAppInternalsPageHandler_GetWebApps_Params.decode = function(decoder) {
    var packed;
    var val = new WebAppInternalsPageHandler_GetWebApps_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  WebAppInternalsPageHandler_GetWebApps_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WebAppInternalsPageHandler_GetWebApps_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function WebAppInternalsPageHandler_GetWebApps_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WebAppInternalsPageHandler_GetWebApps_ResponseParams.prototype.initDefaults_ = function() {
    this.webAppList = null;
  };
  WebAppInternalsPageHandler_GetWebApps_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WebAppInternalsPageHandler_GetWebApps_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate WebAppInternalsPageHandler_GetWebApps_ResponseParams.webAppList
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(WebApp), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  WebAppInternalsPageHandler_GetWebApps_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  WebAppInternalsPageHandler_GetWebApps_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new WebAppInternalsPageHandler_GetWebApps_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.webAppList =
        decoder.decodeArrayPointer(new codec.PointerTo(WebApp));
    return val;
  };

  WebAppInternalsPageHandler_GetWebApps_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WebAppInternalsPageHandler_GetWebApps_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(WebApp), val.webAppList);
  };
  function WebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_Params.prototype.initDefaults_ = function() {
  };
  WebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_Params.validate = function(messageValidator, offset) {
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

  WebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_Params.encodedSize = codec.kStructHeaderSize + 0;

  WebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_Params.decode = function(decoder) {
    var packed;
    var val = new WebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  WebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function WebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_ResponseParams.prototype.initDefaults_ = function() {
    this.externallyInstalledWebAppPrefs = null;
  };
  WebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate WebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_ResponseParams.externallyInstalledWebAppPrefs
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  WebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  WebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new WebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.externallyInstalledWebAppPrefs =
        decoder.decodeStruct(codec.String);
    return val;
  };

  WebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.externallyInstalledWebAppPrefs);
  };
  var kWebAppInternalsPageHandler_IsBmoEnabled_Name = 0;
  var kWebAppInternalsPageHandler_GetWebApps_Name = 1;
  var kWebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_Name = 2;

  function WebAppInternalsPageHandlerPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(WebAppInternalsPageHandler,
                                                   handleOrPtrInfo);
  }

  function WebAppInternalsPageHandlerAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        WebAppInternalsPageHandler, associatedInterfacePtrInfo);
  }

  WebAppInternalsPageHandlerAssociatedPtr.prototype =
      Object.create(WebAppInternalsPageHandlerPtr.prototype);
  WebAppInternalsPageHandlerAssociatedPtr.prototype.constructor =
      WebAppInternalsPageHandlerAssociatedPtr;

  function WebAppInternalsPageHandlerProxy(receiver) {
    this.receiver_ = receiver;
  }
  WebAppInternalsPageHandlerPtr.prototype.isBmoEnabled = function() {
    return WebAppInternalsPageHandlerProxy.prototype.isBmoEnabled
        .apply(this.ptr.getProxy(), arguments);
  };

  WebAppInternalsPageHandlerProxy.prototype.isBmoEnabled = function() {
    var params_ = new WebAppInternalsPageHandler_IsBmoEnabled_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kWebAppInternalsPageHandler_IsBmoEnabled_Name,
          codec.align(WebAppInternalsPageHandler_IsBmoEnabled_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(WebAppInternalsPageHandler_IsBmoEnabled_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(WebAppInternalsPageHandler_IsBmoEnabled_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  WebAppInternalsPageHandlerPtr.prototype.getWebApps = function() {
    return WebAppInternalsPageHandlerProxy.prototype.getWebApps
        .apply(this.ptr.getProxy(), arguments);
  };

  WebAppInternalsPageHandlerProxy.prototype.getWebApps = function() {
    var params_ = new WebAppInternalsPageHandler_GetWebApps_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kWebAppInternalsPageHandler_GetWebApps_Name,
          codec.align(WebAppInternalsPageHandler_GetWebApps_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(WebAppInternalsPageHandler_GetWebApps_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(WebAppInternalsPageHandler_GetWebApps_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  WebAppInternalsPageHandlerPtr.prototype.getExternallyInstalledWebAppPrefs = function() {
    return WebAppInternalsPageHandlerProxy.prototype.getExternallyInstalledWebAppPrefs
        .apply(this.ptr.getProxy(), arguments);
  };

  WebAppInternalsPageHandlerProxy.prototype.getExternallyInstalledWebAppPrefs = function() {
    var params_ = new WebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kWebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_Name,
          codec.align(WebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(WebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(WebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function WebAppInternalsPageHandlerStub(delegate) {
    this.delegate_ = delegate;
  }
  WebAppInternalsPageHandlerStub.prototype.isBmoEnabled = function() {
    return this.delegate_ && this.delegate_.isBmoEnabled && this.delegate_.isBmoEnabled();
  }
  WebAppInternalsPageHandlerStub.prototype.getWebApps = function() {
    return this.delegate_ && this.delegate_.getWebApps && this.delegate_.getWebApps();
  }
  WebAppInternalsPageHandlerStub.prototype.getExternallyInstalledWebAppPrefs = function() {
    return this.delegate_ && this.delegate_.getExternallyInstalledWebAppPrefs && this.delegate_.getExternallyInstalledWebAppPrefs();
  }

  WebAppInternalsPageHandlerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  WebAppInternalsPageHandlerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kWebAppInternalsPageHandler_IsBmoEnabled_Name:
      var params = reader.decodeStruct(WebAppInternalsPageHandler_IsBmoEnabled_Params);
      this.isBmoEnabled().then(function(response) {
        var responseParams =
            new WebAppInternalsPageHandler_IsBmoEnabled_ResponseParams();
        responseParams.isBmoEnabled = response.isBmoEnabled;
        var builder = new codec.MessageV1Builder(
            kWebAppInternalsPageHandler_IsBmoEnabled_Name,
            codec.align(WebAppInternalsPageHandler_IsBmoEnabled_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(WebAppInternalsPageHandler_IsBmoEnabled_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kWebAppInternalsPageHandler_GetWebApps_Name:
      var params = reader.decodeStruct(WebAppInternalsPageHandler_GetWebApps_Params);
      this.getWebApps().then(function(response) {
        var responseParams =
            new WebAppInternalsPageHandler_GetWebApps_ResponseParams();
        responseParams.webAppList = response.webAppList;
        var builder = new codec.MessageV1Builder(
            kWebAppInternalsPageHandler_GetWebApps_Name,
            codec.align(WebAppInternalsPageHandler_GetWebApps_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(WebAppInternalsPageHandler_GetWebApps_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kWebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_Name:
      var params = reader.decodeStruct(WebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_Params);
      this.getExternallyInstalledWebAppPrefs().then(function(response) {
        var responseParams =
            new WebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_ResponseParams();
        responseParams.externallyInstalledWebAppPrefs = response.externallyInstalledWebAppPrefs;
        var builder = new codec.MessageV1Builder(
            kWebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_Name,
            codec.align(WebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(WebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateWebAppInternalsPageHandlerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kWebAppInternalsPageHandler_IsBmoEnabled_Name:
        if (message.expectsResponse())
          paramsClass = WebAppInternalsPageHandler_IsBmoEnabled_Params;
      break;
      case kWebAppInternalsPageHandler_GetWebApps_Name:
        if (message.expectsResponse())
          paramsClass = WebAppInternalsPageHandler_GetWebApps_Params;
      break;
      case kWebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_Name:
        if (message.expectsResponse())
          paramsClass = WebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateWebAppInternalsPageHandlerResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kWebAppInternalsPageHandler_IsBmoEnabled_Name:
        if (message.isResponse())
          paramsClass = WebAppInternalsPageHandler_IsBmoEnabled_ResponseParams;
        break;
      case kWebAppInternalsPageHandler_GetWebApps_Name:
        if (message.isResponse())
          paramsClass = WebAppInternalsPageHandler_GetWebApps_ResponseParams;
        break;
      case kWebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_Name:
        if (message.isResponse())
          paramsClass = WebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var WebAppInternalsPageHandler = {
    name: 'mojom.web_app_internals.WebAppInternalsPageHandler',
    kVersion: 0,
    ptrClass: WebAppInternalsPageHandlerPtr,
    proxyClass: WebAppInternalsPageHandlerProxy,
    stubClass: WebAppInternalsPageHandlerStub,
    validateRequest: validateWebAppInternalsPageHandlerRequest,
    validateResponse: validateWebAppInternalsPageHandlerResponse,
  };
  WebAppInternalsPageHandlerStub.prototype.validator = validateWebAppInternalsPageHandlerRequest;
  WebAppInternalsPageHandlerProxy.prototype.validator = validateWebAppInternalsPageHandlerResponse;
  exports.WebApp = WebApp;
  exports.WebAppInternalsPageHandler = WebAppInternalsPageHandler;
  exports.WebAppInternalsPageHandlerPtr = WebAppInternalsPageHandlerPtr;
  exports.WebAppInternalsPageHandlerAssociatedPtr = WebAppInternalsPageHandlerAssociatedPtr;
})();