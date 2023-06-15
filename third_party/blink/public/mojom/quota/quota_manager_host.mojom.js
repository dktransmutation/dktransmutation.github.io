// third_party/blink/public/mojom/quota/quota_manager_host.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/quota/quota_manager_host.mojom';
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
  var quota_types$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/quota/quota_types.mojom', 'quota_types.mojom.js');
  }



  function QuotaChangeListener_OnQuotaChange_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  QuotaChangeListener_OnQuotaChange_Params.prototype.initDefaults_ = function() {
  };
  QuotaChangeListener_OnQuotaChange_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  QuotaChangeListener_OnQuotaChange_Params.validate = function(messageValidator, offset) {
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

  QuotaChangeListener_OnQuotaChange_Params.encodedSize = codec.kStructHeaderSize + 0;

  QuotaChangeListener_OnQuotaChange_Params.decode = function(decoder) {
    var packed;
    var val = new QuotaChangeListener_OnQuotaChange_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  QuotaChangeListener_OnQuotaChange_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(QuotaChangeListener_OnQuotaChange_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function QuotaManagerHost_AddChangeListener_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  QuotaManagerHost_AddChangeListener_Params.prototype.initDefaults_ = function() {
    this.listener = new QuotaChangeListenerPtr();
  };
  QuotaManagerHost_AddChangeListener_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  QuotaManagerHost_AddChangeListener_Params.validate = function(messageValidator, offset) {
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


    // validate QuotaManagerHost_AddChangeListener_Params.listener
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  QuotaManagerHost_AddChangeListener_Params.encodedSize = codec.kStructHeaderSize + 8;

  QuotaManagerHost_AddChangeListener_Params.decode = function(decoder) {
    var packed;
    var val = new QuotaManagerHost_AddChangeListener_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.listener =
        decoder.decodeStruct(new codec.Interface(QuotaChangeListenerPtr));
    return val;
  };

  QuotaManagerHost_AddChangeListener_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(QuotaManagerHost_AddChangeListener_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(new codec.Interface(QuotaChangeListenerPtr), val.listener);
  };
  function QuotaManagerHost_AddChangeListener_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  QuotaManagerHost_AddChangeListener_ResponseParams.prototype.initDefaults_ = function() {
  };
  QuotaManagerHost_AddChangeListener_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  QuotaManagerHost_AddChangeListener_ResponseParams.validate = function(messageValidator, offset) {
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

  QuotaManagerHost_AddChangeListener_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  QuotaManagerHost_AddChangeListener_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new QuotaManagerHost_AddChangeListener_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  QuotaManagerHost_AddChangeListener_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(QuotaManagerHost_AddChangeListener_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  function QuotaManagerHost_QueryStorageUsageAndQuota_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  QuotaManagerHost_QueryStorageUsageAndQuota_Params.prototype.initDefaults_ = function() {
    this.storageType = 0;
  };
  QuotaManagerHost_QueryStorageUsageAndQuota_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  QuotaManagerHost_QueryStorageUsageAndQuota_Params.validate = function(messageValidator, offset) {
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


    // validate QuotaManagerHost_QueryStorageUsageAndQuota_Params.storageType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, quota_types$.StorageType);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  QuotaManagerHost_QueryStorageUsageAndQuota_Params.encodedSize = codec.kStructHeaderSize + 8;

  QuotaManagerHost_QueryStorageUsageAndQuota_Params.decode = function(decoder) {
    var packed;
    var val = new QuotaManagerHost_QueryStorageUsageAndQuota_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.storageType =
        decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  QuotaManagerHost_QueryStorageUsageAndQuota_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(QuotaManagerHost_QueryStorageUsageAndQuota_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.storageType);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function QuotaManagerHost_QueryStorageUsageAndQuota_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  QuotaManagerHost_QueryStorageUsageAndQuota_ResponseParams.prototype.initDefaults_ = function() {
    this.error = 0;
    this.currentUsage = 0;
    this.currentQuota = 0;
    this.usageBreakdown = null;
  };
  QuotaManagerHost_QueryStorageUsageAndQuota_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  QuotaManagerHost_QueryStorageUsageAndQuota_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 40}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate QuotaManagerHost_QueryStorageUsageAndQuota_ResponseParams.error
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, quota_types$.QuotaStatusCode);
    if (err !== validator.validationError.NONE)
        return err;




    // validate QuotaManagerHost_QueryStorageUsageAndQuota_ResponseParams.usageBreakdown
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, quota_types$.UsageBreakdown, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  QuotaManagerHost_QueryStorageUsageAndQuota_ResponseParams.encodedSize = codec.kStructHeaderSize + 32;

  QuotaManagerHost_QueryStorageUsageAndQuota_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new QuotaManagerHost_QueryStorageUsageAndQuota_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.error =
        decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.currentUsage =
        decoder.decodeStruct(codec.Int64);
    val.currentQuota =
        decoder.decodeStruct(codec.Int64);
    val.usageBreakdown =
        decoder.decodeStructPointer(quota_types$.UsageBreakdown);
    return val;
  };

  QuotaManagerHost_QueryStorageUsageAndQuota_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(QuotaManagerHost_QueryStorageUsageAndQuota_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.error);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Int64, val.currentUsage);
    encoder.encodeStruct(codec.Int64, val.currentQuota);
    encoder.encodeStructPointer(quota_types$.UsageBreakdown, val.usageBreakdown);
  };
  function QuotaManagerHost_RequestStorageQuota_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  QuotaManagerHost_RequestStorageQuota_Params.prototype.initDefaults_ = function() {
    this.storageType = 0;
    this.requestedSize = 0;
  };
  QuotaManagerHost_RequestStorageQuota_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  QuotaManagerHost_RequestStorageQuota_Params.validate = function(messageValidator, offset) {
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


    // validate QuotaManagerHost_RequestStorageQuota_Params.storageType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, quota_types$.StorageType);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  QuotaManagerHost_RequestStorageQuota_Params.encodedSize = codec.kStructHeaderSize + 16;

  QuotaManagerHost_RequestStorageQuota_Params.decode = function(decoder) {
    var packed;
    var val = new QuotaManagerHost_RequestStorageQuota_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.storageType =
        decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.requestedSize =
        decoder.decodeStruct(codec.Uint64);
    return val;
  };

  QuotaManagerHost_RequestStorageQuota_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(QuotaManagerHost_RequestStorageQuota_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.storageType);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Uint64, val.requestedSize);
  };
  function QuotaManagerHost_RequestStorageQuota_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  QuotaManagerHost_RequestStorageQuota_ResponseParams.prototype.initDefaults_ = function() {
    this.error = 0;
    this.currentUsage = 0;
    this.grantedQuota = 0;
  };
  QuotaManagerHost_RequestStorageQuota_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  QuotaManagerHost_RequestStorageQuota_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate QuotaManagerHost_RequestStorageQuota_ResponseParams.error
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, quota_types$.QuotaStatusCode);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  QuotaManagerHost_RequestStorageQuota_ResponseParams.encodedSize = codec.kStructHeaderSize + 24;

  QuotaManagerHost_RequestStorageQuota_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new QuotaManagerHost_RequestStorageQuota_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.error =
        decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.currentUsage =
        decoder.decodeStruct(codec.Int64);
    val.grantedQuota =
        decoder.decodeStruct(codec.Int64);
    return val;
  };

  QuotaManagerHost_RequestStorageQuota_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(QuotaManagerHost_RequestStorageQuota_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.error);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Int64, val.currentUsage);
    encoder.encodeStruct(codec.Int64, val.grantedQuota);
  };
  var kQuotaChangeListener_OnQuotaChange_Name = 0;

  function QuotaChangeListenerPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(QuotaChangeListener,
                                                   handleOrPtrInfo);
  }

  function QuotaChangeListenerAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        QuotaChangeListener, associatedInterfacePtrInfo);
  }

  QuotaChangeListenerAssociatedPtr.prototype =
      Object.create(QuotaChangeListenerPtr.prototype);
  QuotaChangeListenerAssociatedPtr.prototype.constructor =
      QuotaChangeListenerAssociatedPtr;

  function QuotaChangeListenerProxy(receiver) {
    this.receiver_ = receiver;
  }
  QuotaChangeListenerPtr.prototype.onQuotaChange = function() {
    return QuotaChangeListenerProxy.prototype.onQuotaChange
        .apply(this.ptr.getProxy(), arguments);
  };

  QuotaChangeListenerProxy.prototype.onQuotaChange = function() {
    var params_ = new QuotaChangeListener_OnQuotaChange_Params();
    var builder = new codec.MessageV0Builder(
        kQuotaChangeListener_OnQuotaChange_Name,
        codec.align(QuotaChangeListener_OnQuotaChange_Params.encodedSize));
    builder.encodeStruct(QuotaChangeListener_OnQuotaChange_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function QuotaChangeListenerStub(delegate) {
    this.delegate_ = delegate;
  }
  QuotaChangeListenerStub.prototype.onQuotaChange = function() {
    return this.delegate_ && this.delegate_.onQuotaChange && this.delegate_.onQuotaChange();
  }

  QuotaChangeListenerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kQuotaChangeListener_OnQuotaChange_Name:
      var params = reader.decodeStruct(QuotaChangeListener_OnQuotaChange_Params);
      this.onQuotaChange();
      return true;
    default:
      return false;
    }
  };

  QuotaChangeListenerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateQuotaChangeListenerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kQuotaChangeListener_OnQuotaChange_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = QuotaChangeListener_OnQuotaChange_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateQuotaChangeListenerResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var QuotaChangeListener = {
    name: 'blink.mojom.QuotaChangeListener',
    kVersion: 0,
    ptrClass: QuotaChangeListenerPtr,
    proxyClass: QuotaChangeListenerProxy,
    stubClass: QuotaChangeListenerStub,
    validateRequest: validateQuotaChangeListenerRequest,
    validateResponse: null,
  };
  QuotaChangeListenerStub.prototype.validator = validateQuotaChangeListenerRequest;
  QuotaChangeListenerProxy.prototype.validator = null;
  var kQuotaManagerHost_AddChangeListener_Name = 0;
  var kQuotaManagerHost_QueryStorageUsageAndQuota_Name = 1;
  var kQuotaManagerHost_RequestStorageQuota_Name = 2;

  function QuotaManagerHostPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(QuotaManagerHost,
                                                   handleOrPtrInfo);
  }

  function QuotaManagerHostAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        QuotaManagerHost, associatedInterfacePtrInfo);
  }

  QuotaManagerHostAssociatedPtr.prototype =
      Object.create(QuotaManagerHostPtr.prototype);
  QuotaManagerHostAssociatedPtr.prototype.constructor =
      QuotaManagerHostAssociatedPtr;

  function QuotaManagerHostProxy(receiver) {
    this.receiver_ = receiver;
  }
  QuotaManagerHostPtr.prototype.addChangeListener = function() {
    return QuotaManagerHostProxy.prototype.addChangeListener
        .apply(this.ptr.getProxy(), arguments);
  };

  QuotaManagerHostProxy.prototype.addChangeListener = function(listener) {
    var params_ = new QuotaManagerHost_AddChangeListener_Params();
    params_.listener = listener;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kQuotaManagerHost_AddChangeListener_Name,
          codec.align(QuotaManagerHost_AddChangeListener_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(QuotaManagerHost_AddChangeListener_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(QuotaManagerHost_AddChangeListener_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  QuotaManagerHostPtr.prototype.queryStorageUsageAndQuota = function() {
    return QuotaManagerHostProxy.prototype.queryStorageUsageAndQuota
        .apply(this.ptr.getProxy(), arguments);
  };

  QuotaManagerHostProxy.prototype.queryStorageUsageAndQuota = function(storageType) {
    var params_ = new QuotaManagerHost_QueryStorageUsageAndQuota_Params();
    params_.storageType = storageType;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kQuotaManagerHost_QueryStorageUsageAndQuota_Name,
          codec.align(QuotaManagerHost_QueryStorageUsageAndQuota_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(QuotaManagerHost_QueryStorageUsageAndQuota_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(QuotaManagerHost_QueryStorageUsageAndQuota_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  QuotaManagerHostPtr.prototype.requestStorageQuota = function() {
    return QuotaManagerHostProxy.prototype.requestStorageQuota
        .apply(this.ptr.getProxy(), arguments);
  };

  QuotaManagerHostProxy.prototype.requestStorageQuota = function(storageType, requestedSize) {
    var params_ = new QuotaManagerHost_RequestStorageQuota_Params();
    params_.storageType = storageType;
    params_.requestedSize = requestedSize;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kQuotaManagerHost_RequestStorageQuota_Name,
          codec.align(QuotaManagerHost_RequestStorageQuota_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(QuotaManagerHost_RequestStorageQuota_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(QuotaManagerHost_RequestStorageQuota_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function QuotaManagerHostStub(delegate) {
    this.delegate_ = delegate;
  }
  QuotaManagerHostStub.prototype.addChangeListener = function(listener) {
    return this.delegate_ && this.delegate_.addChangeListener && this.delegate_.addChangeListener(listener);
  }
  QuotaManagerHostStub.prototype.queryStorageUsageAndQuota = function(storageType) {
    return this.delegate_ && this.delegate_.queryStorageUsageAndQuota && this.delegate_.queryStorageUsageAndQuota(storageType);
  }
  QuotaManagerHostStub.prototype.requestStorageQuota = function(storageType, requestedSize) {
    return this.delegate_ && this.delegate_.requestStorageQuota && this.delegate_.requestStorageQuota(storageType, requestedSize);
  }

  QuotaManagerHostStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  QuotaManagerHostStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kQuotaManagerHost_AddChangeListener_Name:
      var params = reader.decodeStruct(QuotaManagerHost_AddChangeListener_Params);
      this.addChangeListener(params.listener).then(function(response) {
        var responseParams =
            new QuotaManagerHost_AddChangeListener_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kQuotaManagerHost_AddChangeListener_Name,
            codec.align(QuotaManagerHost_AddChangeListener_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(QuotaManagerHost_AddChangeListener_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kQuotaManagerHost_QueryStorageUsageAndQuota_Name:
      var params = reader.decodeStruct(QuotaManagerHost_QueryStorageUsageAndQuota_Params);
      this.queryStorageUsageAndQuota(params.storageType).then(function(response) {
        var responseParams =
            new QuotaManagerHost_QueryStorageUsageAndQuota_ResponseParams();
        responseParams.error = response.error;
        responseParams.currentUsage = response.currentUsage;
        responseParams.currentQuota = response.currentQuota;
        responseParams.usageBreakdown = response.usageBreakdown;
        var builder = new codec.MessageV1Builder(
            kQuotaManagerHost_QueryStorageUsageAndQuota_Name,
            codec.align(QuotaManagerHost_QueryStorageUsageAndQuota_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(QuotaManagerHost_QueryStorageUsageAndQuota_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kQuotaManagerHost_RequestStorageQuota_Name:
      var params = reader.decodeStruct(QuotaManagerHost_RequestStorageQuota_Params);
      this.requestStorageQuota(params.storageType, params.requestedSize).then(function(response) {
        var responseParams =
            new QuotaManagerHost_RequestStorageQuota_ResponseParams();
        responseParams.error = response.error;
        responseParams.currentUsage = response.currentUsage;
        responseParams.grantedQuota = response.grantedQuota;
        var builder = new codec.MessageV1Builder(
            kQuotaManagerHost_RequestStorageQuota_Name,
            codec.align(QuotaManagerHost_RequestStorageQuota_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(QuotaManagerHost_RequestStorageQuota_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateQuotaManagerHostRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kQuotaManagerHost_AddChangeListener_Name:
        if (message.expectsResponse())
          paramsClass = QuotaManagerHost_AddChangeListener_Params;
      break;
      case kQuotaManagerHost_QueryStorageUsageAndQuota_Name:
        if (message.expectsResponse())
          paramsClass = QuotaManagerHost_QueryStorageUsageAndQuota_Params;
      break;
      case kQuotaManagerHost_RequestStorageQuota_Name:
        if (message.expectsResponse())
          paramsClass = QuotaManagerHost_RequestStorageQuota_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateQuotaManagerHostResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kQuotaManagerHost_AddChangeListener_Name:
        if (message.isResponse())
          paramsClass = QuotaManagerHost_AddChangeListener_ResponseParams;
        break;
      case kQuotaManagerHost_QueryStorageUsageAndQuota_Name:
        if (message.isResponse())
          paramsClass = QuotaManagerHost_QueryStorageUsageAndQuota_ResponseParams;
        break;
      case kQuotaManagerHost_RequestStorageQuota_Name:
        if (message.isResponse())
          paramsClass = QuotaManagerHost_RequestStorageQuota_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var QuotaManagerHost = {
    name: 'blink.mojom.QuotaManagerHost',
    kVersion: 0,
    ptrClass: QuotaManagerHostPtr,
    proxyClass: QuotaManagerHostProxy,
    stubClass: QuotaManagerHostStub,
    validateRequest: validateQuotaManagerHostRequest,
    validateResponse: validateQuotaManagerHostResponse,
  };
  QuotaManagerHostStub.prototype.validator = validateQuotaManagerHostRequest;
  QuotaManagerHostProxy.prototype.validator = validateQuotaManagerHostResponse;
  exports.QuotaChangeListener = QuotaChangeListener;
  exports.QuotaChangeListenerPtr = QuotaChangeListenerPtr;
  exports.QuotaChangeListenerAssociatedPtr = QuotaChangeListenerAssociatedPtr;
  exports.QuotaManagerHost = QuotaManagerHost;
  exports.QuotaManagerHostPtr = QuotaManagerHostPtr;
  exports.QuotaManagerHostAssociatedPtr = QuotaManagerHostAssociatedPtr;
})();