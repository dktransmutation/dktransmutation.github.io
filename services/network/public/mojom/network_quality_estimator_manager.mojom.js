// services/network/public/mojom/network_quality_estimator_manager.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/network_quality_estimator_manager.mojom';
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
  var time$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/time.mojom', '../../../../mojo/public/mojom/base/time.mojom.js');
  }
  var network_types$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/network_types.mojom', 'network_types.mojom.js');
  }



  function NetworkQualityEstimatorManagerClient_OnNetworkQualityChanged_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkQualityEstimatorManagerClient_OnNetworkQualityChanged_Params.prototype.initDefaults_ = function() {
    this.type = 0;
    this.downlinkBandwidthKbps = 0;
    this.httpRtt = null;
    this.transportRtt = null;
  };
  NetworkQualityEstimatorManagerClient_OnNetworkQualityChanged_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkQualityEstimatorManagerClient_OnNetworkQualityChanged_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkQualityEstimatorManagerClient_OnNetworkQualityChanged_Params.type
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, network_types$.EffectiveConnectionType);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkQualityEstimatorManagerClient_OnNetworkQualityChanged_Params.httpRtt
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, time$.TimeDelta, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkQualityEstimatorManagerClient_OnNetworkQualityChanged_Params.transportRtt
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, time$.TimeDelta, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  NetworkQualityEstimatorManagerClient_OnNetworkQualityChanged_Params.encodedSize = codec.kStructHeaderSize + 24;

  NetworkQualityEstimatorManagerClient_OnNetworkQualityChanged_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkQualityEstimatorManagerClient_OnNetworkQualityChanged_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.type =
        decoder.decodeStruct(codec.Int32);
    val.downlinkBandwidthKbps =
        decoder.decodeStruct(codec.Int32);
    val.httpRtt =
        decoder.decodeStructPointer(time$.TimeDelta);
    val.transportRtt =
        decoder.decodeStructPointer(time$.TimeDelta);
    return val;
  };

  NetworkQualityEstimatorManagerClient_OnNetworkQualityChanged_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkQualityEstimatorManagerClient_OnNetworkQualityChanged_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.type);
    encoder.encodeStruct(codec.Int32, val.downlinkBandwidthKbps);
    encoder.encodeStructPointer(time$.TimeDelta, val.httpRtt);
    encoder.encodeStructPointer(time$.TimeDelta, val.transportRtt);
  };
  function NetworkQualityEstimatorManager_RequestNotifications_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkQualityEstimatorManager_RequestNotifications_Params.prototype.initDefaults_ = function() {
    this.client = new NetworkQualityEstimatorManagerClientPtr();
  };
  NetworkQualityEstimatorManager_RequestNotifications_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkQualityEstimatorManager_RequestNotifications_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkQualityEstimatorManager_RequestNotifications_Params.client
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkQualityEstimatorManager_RequestNotifications_Params.encodedSize = codec.kStructHeaderSize + 8;

  NetworkQualityEstimatorManager_RequestNotifications_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkQualityEstimatorManager_RequestNotifications_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.client =
        decoder.decodeStruct(new codec.Interface(NetworkQualityEstimatorManagerClientPtr));
    return val;
  };

  NetworkQualityEstimatorManager_RequestNotifications_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkQualityEstimatorManager_RequestNotifications_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(new codec.Interface(NetworkQualityEstimatorManagerClientPtr), val.client);
  };
  var kNetworkQualityEstimatorManagerClient_OnNetworkQualityChanged_Name = 0;

  function NetworkQualityEstimatorManagerClientPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(NetworkQualityEstimatorManagerClient,
                                                   handleOrPtrInfo);
  }

  function NetworkQualityEstimatorManagerClientAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        NetworkQualityEstimatorManagerClient, associatedInterfacePtrInfo);
  }

  NetworkQualityEstimatorManagerClientAssociatedPtr.prototype =
      Object.create(NetworkQualityEstimatorManagerClientPtr.prototype);
  NetworkQualityEstimatorManagerClientAssociatedPtr.prototype.constructor =
      NetworkQualityEstimatorManagerClientAssociatedPtr;

  function NetworkQualityEstimatorManagerClientProxy(receiver) {
    this.receiver_ = receiver;
  }
  NetworkQualityEstimatorManagerClientPtr.prototype.onNetworkQualityChanged = function() {
    return NetworkQualityEstimatorManagerClientProxy.prototype.onNetworkQualityChanged
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkQualityEstimatorManagerClientProxy.prototype.onNetworkQualityChanged = function(type, httpRtt, transportRtt, downlinkBandwidthKbps) {
    var params_ = new NetworkQualityEstimatorManagerClient_OnNetworkQualityChanged_Params();
    params_.type = type;
    params_.httpRtt = httpRtt;
    params_.transportRtt = transportRtt;
    params_.downlinkBandwidthKbps = downlinkBandwidthKbps;
    var builder = new codec.MessageV0Builder(
        kNetworkQualityEstimatorManagerClient_OnNetworkQualityChanged_Name,
        codec.align(NetworkQualityEstimatorManagerClient_OnNetworkQualityChanged_Params.encodedSize));
    builder.encodeStruct(NetworkQualityEstimatorManagerClient_OnNetworkQualityChanged_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function NetworkQualityEstimatorManagerClientStub(delegate) {
    this.delegate_ = delegate;
  }
  NetworkQualityEstimatorManagerClientStub.prototype.onNetworkQualityChanged = function(type, httpRtt, transportRtt, downlinkBandwidthKbps) {
    return this.delegate_ && this.delegate_.onNetworkQualityChanged && this.delegate_.onNetworkQualityChanged(type, httpRtt, transportRtt, downlinkBandwidthKbps);
  }

  NetworkQualityEstimatorManagerClientStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kNetworkQualityEstimatorManagerClient_OnNetworkQualityChanged_Name:
      var params = reader.decodeStruct(NetworkQualityEstimatorManagerClient_OnNetworkQualityChanged_Params);
      this.onNetworkQualityChanged(params.type, params.httpRtt, params.transportRtt, params.downlinkBandwidthKbps);
      return true;
    default:
      return false;
    }
  };

  NetworkQualityEstimatorManagerClientStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateNetworkQualityEstimatorManagerClientRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kNetworkQualityEstimatorManagerClient_OnNetworkQualityChanged_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkQualityEstimatorManagerClient_OnNetworkQualityChanged_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateNetworkQualityEstimatorManagerClientResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var NetworkQualityEstimatorManagerClient = {
    name: 'network.mojom.NetworkQualityEstimatorManagerClient',
    kVersion: 0,
    ptrClass: NetworkQualityEstimatorManagerClientPtr,
    proxyClass: NetworkQualityEstimatorManagerClientProxy,
    stubClass: NetworkQualityEstimatorManagerClientStub,
    validateRequest: validateNetworkQualityEstimatorManagerClientRequest,
    validateResponse: null,
  };
  NetworkQualityEstimatorManagerClientStub.prototype.validator = validateNetworkQualityEstimatorManagerClientRequest;
  NetworkQualityEstimatorManagerClientProxy.prototype.validator = null;
  var kNetworkQualityEstimatorManager_RequestNotifications_Name = 0;

  function NetworkQualityEstimatorManagerPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(NetworkQualityEstimatorManager,
                                                   handleOrPtrInfo);
  }

  function NetworkQualityEstimatorManagerAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        NetworkQualityEstimatorManager, associatedInterfacePtrInfo);
  }

  NetworkQualityEstimatorManagerAssociatedPtr.prototype =
      Object.create(NetworkQualityEstimatorManagerPtr.prototype);
  NetworkQualityEstimatorManagerAssociatedPtr.prototype.constructor =
      NetworkQualityEstimatorManagerAssociatedPtr;

  function NetworkQualityEstimatorManagerProxy(receiver) {
    this.receiver_ = receiver;
  }
  NetworkQualityEstimatorManagerPtr.prototype.requestNotifications = function() {
    return NetworkQualityEstimatorManagerProxy.prototype.requestNotifications
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkQualityEstimatorManagerProxy.prototype.requestNotifications = function(client) {
    var params_ = new NetworkQualityEstimatorManager_RequestNotifications_Params();
    params_.client = client;
    var builder = new codec.MessageV0Builder(
        kNetworkQualityEstimatorManager_RequestNotifications_Name,
        codec.align(NetworkQualityEstimatorManager_RequestNotifications_Params.encodedSize));
    builder.encodeStruct(NetworkQualityEstimatorManager_RequestNotifications_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function NetworkQualityEstimatorManagerStub(delegate) {
    this.delegate_ = delegate;
  }
  NetworkQualityEstimatorManagerStub.prototype.requestNotifications = function(client) {
    return this.delegate_ && this.delegate_.requestNotifications && this.delegate_.requestNotifications(client);
  }

  NetworkQualityEstimatorManagerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kNetworkQualityEstimatorManager_RequestNotifications_Name:
      var params = reader.decodeStruct(NetworkQualityEstimatorManager_RequestNotifications_Params);
      this.requestNotifications(params.client);
      return true;
    default:
      return false;
    }
  };

  NetworkQualityEstimatorManagerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateNetworkQualityEstimatorManagerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kNetworkQualityEstimatorManager_RequestNotifications_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkQualityEstimatorManager_RequestNotifications_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateNetworkQualityEstimatorManagerResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var NetworkQualityEstimatorManager = {
    name: 'network.mojom.NetworkQualityEstimatorManager',
    kVersion: 0,
    ptrClass: NetworkQualityEstimatorManagerPtr,
    proxyClass: NetworkQualityEstimatorManagerProxy,
    stubClass: NetworkQualityEstimatorManagerStub,
    validateRequest: validateNetworkQualityEstimatorManagerRequest,
    validateResponse: null,
  };
  NetworkQualityEstimatorManagerStub.prototype.validator = validateNetworkQualityEstimatorManagerRequest;
  NetworkQualityEstimatorManagerProxy.prototype.validator = null;
  exports.NetworkQualityEstimatorManagerClient = NetworkQualityEstimatorManagerClient;
  exports.NetworkQualityEstimatorManagerClientPtr = NetworkQualityEstimatorManagerClientPtr;
  exports.NetworkQualityEstimatorManagerClientAssociatedPtr = NetworkQualityEstimatorManagerClientAssociatedPtr;
  exports.NetworkQualityEstimatorManager = NetworkQualityEstimatorManager;
  exports.NetworkQualityEstimatorManagerPtr = NetworkQualityEstimatorManagerPtr;
  exports.NetworkQualityEstimatorManagerAssociatedPtr = NetworkQualityEstimatorManagerAssociatedPtr;
})();