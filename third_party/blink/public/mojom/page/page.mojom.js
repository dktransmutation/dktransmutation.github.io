// third_party/blink/public/mojom/page/page.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/page/page.mojom';
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
  var page_visibility_state$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/page/page_visibility_state.mojom', 'page_visibility_state.mojom.js');
  }


  var PagehideDispatch = {};
  PagehideDispatch.kNotDispatched = 0;
  PagehideDispatch.kDispatchedNotPersisted = 1;
  PagehideDispatch.kDispatchedPersisted = 2;
  PagehideDispatch.MIN_VALUE = 0,
  PagehideDispatch.MAX_VALUE = 2,

  PagehideDispatch.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  PagehideDispatch.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function PageLifecycleState(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PageLifecycleState.prototype.initDefaults_ = function() {
    this.isFrozen = false;
    this.isInBackForwardCache = false;
    this.visibility = 0;
    this.pagehideDispatch = 0;
  };
  PageLifecycleState.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PageLifecycleState.validate = function(messageValidator, offset) {
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



    // validate PageLifecycleState.visibility
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 4, page_visibility_state$.PageVisibilityState);
    if (err !== validator.validationError.NONE)
        return err;



    // validate PageLifecycleState.pagehideDispatch
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, PagehideDispatch);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PageLifecycleState.encodedSize = codec.kStructHeaderSize + 16;

  PageLifecycleState.decode = function(decoder) {
    var packed;
    var val = new PageLifecycleState();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.isFrozen = (packed >> 0) & 1 ? true : false;
    val.isInBackForwardCache = (packed >> 1) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.visibility =
        decoder.decodeStruct(codec.Int32);
    val.pagehideDispatch =
        decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  PageLifecycleState.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PageLifecycleState.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.isFrozen & 1) << 0
    packed |= (val.isInBackForwardCache & 1) << 1
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Int32, val.visibility);
    encoder.encodeStruct(codec.Int32, val.pagehideDispatch);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function PageRestoreParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PageRestoreParams.prototype.initDefaults_ = function() {
    this.navigationStart = null;
    this.pendingHistoryListOffset = 0;
    this.currentHistoryListLength = 0;
  };
  PageRestoreParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PageRestoreParams.validate = function(messageValidator, offset) {
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


    // validate PageRestoreParams.navigationStart
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, time$.TimeTicks, false);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  PageRestoreParams.encodedSize = codec.kStructHeaderSize + 16;

  PageRestoreParams.decode = function(decoder) {
    var packed;
    var val = new PageRestoreParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.navigationStart =
        decoder.decodeStructPointer(time$.TimeTicks);
    val.pendingHistoryListOffset =
        decoder.decodeStruct(codec.Int32);
    val.currentHistoryListLength =
        decoder.decodeStruct(codec.Int32);
    return val;
  };

  PageRestoreParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PageRestoreParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(time$.TimeTicks, val.navigationStart);
    encoder.encodeStruct(codec.Int32, val.pendingHistoryListOffset);
    encoder.encodeStruct(codec.Int32, val.currentHistoryListLength);
  };
  function PageBroadcast_SetPageLifecycleState_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PageBroadcast_SetPageLifecycleState_Params.prototype.initDefaults_ = function() {
    this.state = null;
    this.pageRestoreParams = null;
  };
  PageBroadcast_SetPageLifecycleState_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PageBroadcast_SetPageLifecycleState_Params.validate = function(messageValidator, offset) {
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


    // validate PageBroadcast_SetPageLifecycleState_Params.state
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, PageLifecycleState, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PageBroadcast_SetPageLifecycleState_Params.pageRestoreParams
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, PageRestoreParams, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PageBroadcast_SetPageLifecycleState_Params.encodedSize = codec.kStructHeaderSize + 16;

  PageBroadcast_SetPageLifecycleState_Params.decode = function(decoder) {
    var packed;
    var val = new PageBroadcast_SetPageLifecycleState_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.state =
        decoder.decodeStructPointer(PageLifecycleState);
    val.pageRestoreParams =
        decoder.decodeStructPointer(PageRestoreParams);
    return val;
  };

  PageBroadcast_SetPageLifecycleState_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PageBroadcast_SetPageLifecycleState_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(PageLifecycleState, val.state);
    encoder.encodeStructPointer(PageRestoreParams, val.pageRestoreParams);
  };
  function PageBroadcast_SetPageLifecycleState_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PageBroadcast_SetPageLifecycleState_ResponseParams.prototype.initDefaults_ = function() {
  };
  PageBroadcast_SetPageLifecycleState_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PageBroadcast_SetPageLifecycleState_ResponseParams.validate = function(messageValidator, offset) {
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

  PageBroadcast_SetPageLifecycleState_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  PageBroadcast_SetPageLifecycleState_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new PageBroadcast_SetPageLifecycleState_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  PageBroadcast_SetPageLifecycleState_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PageBroadcast_SetPageLifecycleState_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  function PageBroadcast_AudioStateChanged_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PageBroadcast_AudioStateChanged_Params.prototype.initDefaults_ = function() {
    this.isAudioPlaying = false;
  };
  PageBroadcast_AudioStateChanged_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PageBroadcast_AudioStateChanged_Params.validate = function(messageValidator, offset) {
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

  PageBroadcast_AudioStateChanged_Params.encodedSize = codec.kStructHeaderSize + 8;

  PageBroadcast_AudioStateChanged_Params.decode = function(decoder) {
    var packed;
    var val = new PageBroadcast_AudioStateChanged_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.isAudioPlaying = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  PageBroadcast_AudioStateChanged_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PageBroadcast_AudioStateChanged_Params.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.isAudioPlaying & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function PageBroadcast_SetInsidePortal_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PageBroadcast_SetInsidePortal_Params.prototype.initDefaults_ = function() {
    this.isInsidePortal = false;
  };
  PageBroadcast_SetInsidePortal_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PageBroadcast_SetInsidePortal_Params.validate = function(messageValidator, offset) {
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

  PageBroadcast_SetInsidePortal_Params.encodedSize = codec.kStructHeaderSize + 8;

  PageBroadcast_SetInsidePortal_Params.decode = function(decoder) {
    var packed;
    var val = new PageBroadcast_SetInsidePortal_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.isInsidePortal = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  PageBroadcast_SetInsidePortal_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PageBroadcast_SetInsidePortal_Params.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.isInsidePortal & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kPageBroadcast_SetPageLifecycleState_Name = 0;
  var kPageBroadcast_AudioStateChanged_Name = 1;
  var kPageBroadcast_SetInsidePortal_Name = 2;

  function PageBroadcastPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(PageBroadcast,
                                                   handleOrPtrInfo);
  }

  function PageBroadcastAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        PageBroadcast, associatedInterfacePtrInfo);
  }

  PageBroadcastAssociatedPtr.prototype =
      Object.create(PageBroadcastPtr.prototype);
  PageBroadcastAssociatedPtr.prototype.constructor =
      PageBroadcastAssociatedPtr;

  function PageBroadcastProxy(receiver) {
    this.receiver_ = receiver;
  }
  PageBroadcastPtr.prototype.setPageLifecycleState = function() {
    return PageBroadcastProxy.prototype.setPageLifecycleState
        .apply(this.ptr.getProxy(), arguments);
  };

  PageBroadcastProxy.prototype.setPageLifecycleState = function(state, pageRestoreParams) {
    var params_ = new PageBroadcast_SetPageLifecycleState_Params();
    params_.state = state;
    params_.pageRestoreParams = pageRestoreParams;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kPageBroadcast_SetPageLifecycleState_Name,
          codec.align(PageBroadcast_SetPageLifecycleState_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(PageBroadcast_SetPageLifecycleState_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(PageBroadcast_SetPageLifecycleState_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  PageBroadcastPtr.prototype.audioStateChanged = function() {
    return PageBroadcastProxy.prototype.audioStateChanged
        .apply(this.ptr.getProxy(), arguments);
  };

  PageBroadcastProxy.prototype.audioStateChanged = function(isAudioPlaying) {
    var params_ = new PageBroadcast_AudioStateChanged_Params();
    params_.isAudioPlaying = isAudioPlaying;
    var builder = new codec.MessageV0Builder(
        kPageBroadcast_AudioStateChanged_Name,
        codec.align(PageBroadcast_AudioStateChanged_Params.encodedSize));
    builder.encodeStruct(PageBroadcast_AudioStateChanged_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  PageBroadcastPtr.prototype.setInsidePortal = function() {
    return PageBroadcastProxy.prototype.setInsidePortal
        .apply(this.ptr.getProxy(), arguments);
  };

  PageBroadcastProxy.prototype.setInsidePortal = function(isInsidePortal) {
    var params_ = new PageBroadcast_SetInsidePortal_Params();
    params_.isInsidePortal = isInsidePortal;
    var builder = new codec.MessageV0Builder(
        kPageBroadcast_SetInsidePortal_Name,
        codec.align(PageBroadcast_SetInsidePortal_Params.encodedSize));
    builder.encodeStruct(PageBroadcast_SetInsidePortal_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function PageBroadcastStub(delegate) {
    this.delegate_ = delegate;
  }
  PageBroadcastStub.prototype.setPageLifecycleState = function(state, pageRestoreParams) {
    return this.delegate_ && this.delegate_.setPageLifecycleState && this.delegate_.setPageLifecycleState(state, pageRestoreParams);
  }
  PageBroadcastStub.prototype.audioStateChanged = function(isAudioPlaying) {
    return this.delegate_ && this.delegate_.audioStateChanged && this.delegate_.audioStateChanged(isAudioPlaying);
  }
  PageBroadcastStub.prototype.setInsidePortal = function(isInsidePortal) {
    return this.delegate_ && this.delegate_.setInsidePortal && this.delegate_.setInsidePortal(isInsidePortal);
  }

  PageBroadcastStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kPageBroadcast_AudioStateChanged_Name:
      var params = reader.decodeStruct(PageBroadcast_AudioStateChanged_Params);
      this.audioStateChanged(params.isAudioPlaying);
      return true;
    case kPageBroadcast_SetInsidePortal_Name:
      var params = reader.decodeStruct(PageBroadcast_SetInsidePortal_Params);
      this.setInsidePortal(params.isInsidePortal);
      return true;
    default:
      return false;
    }
  };

  PageBroadcastStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kPageBroadcast_SetPageLifecycleState_Name:
      var params = reader.decodeStruct(PageBroadcast_SetPageLifecycleState_Params);
      this.setPageLifecycleState(params.state, params.pageRestoreParams).then(function(response) {
        var responseParams =
            new PageBroadcast_SetPageLifecycleState_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kPageBroadcast_SetPageLifecycleState_Name,
            codec.align(PageBroadcast_SetPageLifecycleState_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(PageBroadcast_SetPageLifecycleState_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validatePageBroadcastRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kPageBroadcast_SetPageLifecycleState_Name:
        if (message.expectsResponse())
          paramsClass = PageBroadcast_SetPageLifecycleState_Params;
      break;
      case kPageBroadcast_AudioStateChanged_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PageBroadcast_AudioStateChanged_Params;
      break;
      case kPageBroadcast_SetInsidePortal_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PageBroadcast_SetInsidePortal_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validatePageBroadcastResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kPageBroadcast_SetPageLifecycleState_Name:
        if (message.isResponse())
          paramsClass = PageBroadcast_SetPageLifecycleState_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var PageBroadcast = {
    name: 'blink.mojom.PageBroadcast',
    kVersion: 0,
    ptrClass: PageBroadcastPtr,
    proxyClass: PageBroadcastProxy,
    stubClass: PageBroadcastStub,
    validateRequest: validatePageBroadcastRequest,
    validateResponse: validatePageBroadcastResponse,
  };
  PageBroadcastStub.prototype.validator = validatePageBroadcastRequest;
  PageBroadcastProxy.prototype.validator = validatePageBroadcastResponse;
  exports.PagehideDispatch = PagehideDispatch;
  exports.PageLifecycleState = PageLifecycleState;
  exports.PageRestoreParams = PageRestoreParams;
  exports.PageBroadcast = PageBroadcast;
  exports.PageBroadcastPtr = PageBroadcastPtr;
  exports.PageBroadcastAssociatedPtr = PageBroadcastAssociatedPtr;
})();