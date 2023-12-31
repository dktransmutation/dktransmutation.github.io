// services/media_session/public/mojom/media_session_service.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/media_session/public/mojom/media_session_service.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('mediaSession.mojom');
  var audio_focus$ =
      mojo.internal.exposeNamespace('mediaSession.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/media_session/public/mojom/audio_focus.mojom', 'audio_focus.mojom.js');
  }
  var media_controller$ =
      mojo.internal.exposeNamespace('mediaSession.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/media_session/public/mojom/media_controller.mojom', 'media_controller.mojom.js');
  }



  function MediaSessionService_BindAudioFocusManager_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaSessionService_BindAudioFocusManager_Params.prototype.initDefaults_ = function() {
    this.receiver = new bindings.InterfaceRequest();
  };
  MediaSessionService_BindAudioFocusManager_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaSessionService_BindAudioFocusManager_Params.validate = function(messageValidator, offset) {
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


    // validate MediaSessionService_BindAudioFocusManager_Params.receiver
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaSessionService_BindAudioFocusManager_Params.encodedSize = codec.kStructHeaderSize + 8;

  MediaSessionService_BindAudioFocusManager_Params.decode = function(decoder) {
    var packed;
    var val = new MediaSessionService_BindAudioFocusManager_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.receiver =
        decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  MediaSessionService_BindAudioFocusManager_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaSessionService_BindAudioFocusManager_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.receiver);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function MediaSessionService_BindAudioFocusManagerDebug_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaSessionService_BindAudioFocusManagerDebug_Params.prototype.initDefaults_ = function() {
    this.receiver = new bindings.InterfaceRequest();
  };
  MediaSessionService_BindAudioFocusManagerDebug_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaSessionService_BindAudioFocusManagerDebug_Params.validate = function(messageValidator, offset) {
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


    // validate MediaSessionService_BindAudioFocusManagerDebug_Params.receiver
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaSessionService_BindAudioFocusManagerDebug_Params.encodedSize = codec.kStructHeaderSize + 8;

  MediaSessionService_BindAudioFocusManagerDebug_Params.decode = function(decoder) {
    var packed;
    var val = new MediaSessionService_BindAudioFocusManagerDebug_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.receiver =
        decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  MediaSessionService_BindAudioFocusManagerDebug_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaSessionService_BindAudioFocusManagerDebug_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.receiver);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function MediaSessionService_BindMediaControllerManager_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaSessionService_BindMediaControllerManager_Params.prototype.initDefaults_ = function() {
    this.receiver = new bindings.InterfaceRequest();
  };
  MediaSessionService_BindMediaControllerManager_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaSessionService_BindMediaControllerManager_Params.validate = function(messageValidator, offset) {
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


    // validate MediaSessionService_BindMediaControllerManager_Params.receiver
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaSessionService_BindMediaControllerManager_Params.encodedSize = codec.kStructHeaderSize + 8;

  MediaSessionService_BindMediaControllerManager_Params.decode = function(decoder) {
    var packed;
    var val = new MediaSessionService_BindMediaControllerManager_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.receiver =
        decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  MediaSessionService_BindMediaControllerManager_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaSessionService_BindMediaControllerManager_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.receiver);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kMediaSessionService_BindAudioFocusManager_Name = 0;
  var kMediaSessionService_BindAudioFocusManagerDebug_Name = 1;
  var kMediaSessionService_BindMediaControllerManager_Name = 2;

  function MediaSessionServicePtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(MediaSessionService,
                                                   handleOrPtrInfo);
  }

  function MediaSessionServiceAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        MediaSessionService, associatedInterfacePtrInfo);
  }

  MediaSessionServiceAssociatedPtr.prototype =
      Object.create(MediaSessionServicePtr.prototype);
  MediaSessionServiceAssociatedPtr.prototype.constructor =
      MediaSessionServiceAssociatedPtr;

  function MediaSessionServiceProxy(receiver) {
    this.receiver_ = receiver;
  }
  MediaSessionServicePtr.prototype.bindAudioFocusManager = function() {
    return MediaSessionServiceProxy.prototype.bindAudioFocusManager
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaSessionServiceProxy.prototype.bindAudioFocusManager = function(receiver) {
    var params_ = new MediaSessionService_BindAudioFocusManager_Params();
    params_.receiver = receiver;
    var builder = new codec.MessageV0Builder(
        kMediaSessionService_BindAudioFocusManager_Name,
        codec.align(MediaSessionService_BindAudioFocusManager_Params.encodedSize));
    builder.encodeStruct(MediaSessionService_BindAudioFocusManager_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaSessionServicePtr.prototype.bindAudioFocusManagerDebug = function() {
    return MediaSessionServiceProxy.prototype.bindAudioFocusManagerDebug
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaSessionServiceProxy.prototype.bindAudioFocusManagerDebug = function(receiver) {
    var params_ = new MediaSessionService_BindAudioFocusManagerDebug_Params();
    params_.receiver = receiver;
    var builder = new codec.MessageV0Builder(
        kMediaSessionService_BindAudioFocusManagerDebug_Name,
        codec.align(MediaSessionService_BindAudioFocusManagerDebug_Params.encodedSize));
    builder.encodeStruct(MediaSessionService_BindAudioFocusManagerDebug_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaSessionServicePtr.prototype.bindMediaControllerManager = function() {
    return MediaSessionServiceProxy.prototype.bindMediaControllerManager
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaSessionServiceProxy.prototype.bindMediaControllerManager = function(receiver) {
    var params_ = new MediaSessionService_BindMediaControllerManager_Params();
    params_.receiver = receiver;
    var builder = new codec.MessageV0Builder(
        kMediaSessionService_BindMediaControllerManager_Name,
        codec.align(MediaSessionService_BindMediaControllerManager_Params.encodedSize));
    builder.encodeStruct(MediaSessionService_BindMediaControllerManager_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function MediaSessionServiceStub(delegate) {
    this.delegate_ = delegate;
  }
  MediaSessionServiceStub.prototype.bindAudioFocusManager = function(receiver) {
    return this.delegate_ && this.delegate_.bindAudioFocusManager && this.delegate_.bindAudioFocusManager(receiver);
  }
  MediaSessionServiceStub.prototype.bindAudioFocusManagerDebug = function(receiver) {
    return this.delegate_ && this.delegate_.bindAudioFocusManagerDebug && this.delegate_.bindAudioFocusManagerDebug(receiver);
  }
  MediaSessionServiceStub.prototype.bindMediaControllerManager = function(receiver) {
    return this.delegate_ && this.delegate_.bindMediaControllerManager && this.delegate_.bindMediaControllerManager(receiver);
  }

  MediaSessionServiceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kMediaSessionService_BindAudioFocusManager_Name:
      var params = reader.decodeStruct(MediaSessionService_BindAudioFocusManager_Params);
      this.bindAudioFocusManager(params.receiver);
      return true;
    case kMediaSessionService_BindAudioFocusManagerDebug_Name:
      var params = reader.decodeStruct(MediaSessionService_BindAudioFocusManagerDebug_Params);
      this.bindAudioFocusManagerDebug(params.receiver);
      return true;
    case kMediaSessionService_BindMediaControllerManager_Name:
      var params = reader.decodeStruct(MediaSessionService_BindMediaControllerManager_Params);
      this.bindMediaControllerManager(params.receiver);
      return true;
    default:
      return false;
    }
  };

  MediaSessionServiceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateMediaSessionServiceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kMediaSessionService_BindAudioFocusManager_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaSessionService_BindAudioFocusManager_Params;
      break;
      case kMediaSessionService_BindAudioFocusManagerDebug_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaSessionService_BindAudioFocusManagerDebug_Params;
      break;
      case kMediaSessionService_BindMediaControllerManager_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaSessionService_BindMediaControllerManager_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateMediaSessionServiceResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var MediaSessionService = {
    name: 'media_session.mojom.MediaSessionService',
    kVersion: 0,
    ptrClass: MediaSessionServicePtr,
    proxyClass: MediaSessionServiceProxy,
    stubClass: MediaSessionServiceStub,
    validateRequest: validateMediaSessionServiceRequest,
    validateResponse: null,
  };
  MediaSessionServiceStub.prototype.validator = validateMediaSessionServiceRequest;
  MediaSessionServiceProxy.prototype.validator = null;
  exports.MediaSessionService = MediaSessionService;
  exports.MediaSessionServicePtr = MediaSessionServicePtr;
  exports.MediaSessionServiceAssociatedPtr = MediaSessionServiceAssociatedPtr;
})();