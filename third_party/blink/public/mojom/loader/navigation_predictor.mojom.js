// third_party/blink/public/mojom/loader/navigation_predictor.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/loader/navigation_predictor.mojom';
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
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../../../url/mojom/url.mojom.js');
  }
  var geometry$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/geometry/mojom/geometry.mojom', '../../../../../ui/gfx/geometry/mojom/geometry.mojom.js');
  }



  function AnchorElementMetrics(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AnchorElementMetrics.prototype.initDefaults_ = function() {
    this.ratioArea = 0;
    this.ratioVisibleArea = 0;
    this.ratioDistanceTopToVisibleTop = 0;
    this.ratioDistanceCenterToVisibleTop = 0;
    this.ratioDistanceRootTop = 0;
    this.ratioDistanceRootBottom = 0;
    this.isInIframe = false;
    this.containsImage = false;
    this.isSameHost = false;
    this.isUrlIncrementedByOne = false;
    this.sourceUrl = null;
    this.targetUrl = null;
  };
  AnchorElementMetrics.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AnchorElementMetrics.validate = function(messageValidator, offset) {
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












    // validate AnchorElementMetrics.sourceUrl
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 32, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AnchorElementMetrics.targetUrl
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 40, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AnchorElementMetrics.encodedSize = codec.kStructHeaderSize + 48;

  AnchorElementMetrics.decode = function(decoder) {
    var packed;
    var val = new AnchorElementMetrics();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.ratioArea =
        decoder.decodeStruct(codec.Float);
    val.ratioVisibleArea =
        decoder.decodeStruct(codec.Float);
    val.ratioDistanceTopToVisibleTop =
        decoder.decodeStruct(codec.Float);
    val.ratioDistanceCenterToVisibleTop =
        decoder.decodeStruct(codec.Float);
    val.ratioDistanceRootTop =
        decoder.decodeStruct(codec.Float);
    val.ratioDistanceRootBottom =
        decoder.decodeStruct(codec.Float);
    packed = decoder.readUint8();
    val.isInIframe = (packed >> 0) & 1 ? true : false;
    val.containsImage = (packed >> 1) & 1 ? true : false;
    val.isSameHost = (packed >> 2) & 1 ? true : false;
    val.isUrlIncrementedByOne = (packed >> 3) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.sourceUrl =
        decoder.decodeStructPointer(url$.Url);
    val.targetUrl =
        decoder.decodeStructPointer(url$.Url);
    return val;
  };

  AnchorElementMetrics.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AnchorElementMetrics.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Float, val.ratioArea);
    encoder.encodeStruct(codec.Float, val.ratioVisibleArea);
    encoder.encodeStruct(codec.Float, val.ratioDistanceTopToVisibleTop);
    encoder.encodeStruct(codec.Float, val.ratioDistanceCenterToVisibleTop);
    encoder.encodeStruct(codec.Float, val.ratioDistanceRootTop);
    encoder.encodeStruct(codec.Float, val.ratioDistanceRootBottom);
    packed = 0;
    packed |= (val.isInIframe & 1) << 0
    packed |= (val.containsImage & 1) << 1
    packed |= (val.isSameHost & 1) << 2
    packed |= (val.isUrlIncrementedByOne & 1) << 3
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(url$.Url, val.sourceUrl);
    encoder.encodeStructPointer(url$.Url, val.targetUrl);
  };
  function AnchorElementMetricsHost_ReportAnchorElementMetricsOnClick_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AnchorElementMetricsHost_ReportAnchorElementMetricsOnClick_Params.prototype.initDefaults_ = function() {
    this.metrics = null;
  };
  AnchorElementMetricsHost_ReportAnchorElementMetricsOnClick_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AnchorElementMetricsHost_ReportAnchorElementMetricsOnClick_Params.validate = function(messageValidator, offset) {
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


    // validate AnchorElementMetricsHost_ReportAnchorElementMetricsOnClick_Params.metrics
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, AnchorElementMetrics, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AnchorElementMetricsHost_ReportAnchorElementMetricsOnClick_Params.encodedSize = codec.kStructHeaderSize + 8;

  AnchorElementMetricsHost_ReportAnchorElementMetricsOnClick_Params.decode = function(decoder) {
    var packed;
    var val = new AnchorElementMetricsHost_ReportAnchorElementMetricsOnClick_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.metrics =
        decoder.decodeStructPointer(AnchorElementMetrics);
    return val;
  };

  AnchorElementMetricsHost_ReportAnchorElementMetricsOnClick_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AnchorElementMetricsHost_ReportAnchorElementMetricsOnClick_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(AnchorElementMetrics, val.metrics);
  };
  function AnchorElementMetricsHost_ReportAnchorElementMetricsOnLoad_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AnchorElementMetricsHost_ReportAnchorElementMetricsOnLoad_Params.prototype.initDefaults_ = function() {
    this.metrics = null;
    this.viewportSize = null;
  };
  AnchorElementMetricsHost_ReportAnchorElementMetricsOnLoad_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AnchorElementMetricsHost_ReportAnchorElementMetricsOnLoad_Params.validate = function(messageValidator, offset) {
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


    // validate AnchorElementMetricsHost_ReportAnchorElementMetricsOnLoad_Params.metrics
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(AnchorElementMetrics), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AnchorElementMetricsHost_ReportAnchorElementMetricsOnLoad_Params.viewportSize
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, geometry$.Size, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AnchorElementMetricsHost_ReportAnchorElementMetricsOnLoad_Params.encodedSize = codec.kStructHeaderSize + 16;

  AnchorElementMetricsHost_ReportAnchorElementMetricsOnLoad_Params.decode = function(decoder) {
    var packed;
    var val = new AnchorElementMetricsHost_ReportAnchorElementMetricsOnLoad_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.metrics =
        decoder.decodeArrayPointer(new codec.PointerTo(AnchorElementMetrics));
    val.viewportSize =
        decoder.decodeStructPointer(geometry$.Size);
    return val;
  };

  AnchorElementMetricsHost_ReportAnchorElementMetricsOnLoad_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AnchorElementMetricsHost_ReportAnchorElementMetricsOnLoad_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(AnchorElementMetrics), val.metrics);
    encoder.encodeStructPointer(geometry$.Size, val.viewportSize);
  };
  var kAnchorElementMetricsHost_ReportAnchorElementMetricsOnClick_Name = 0;
  var kAnchorElementMetricsHost_ReportAnchorElementMetricsOnLoad_Name = 1;

  function AnchorElementMetricsHostPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(AnchorElementMetricsHost,
                                                   handleOrPtrInfo);
  }

  function AnchorElementMetricsHostAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        AnchorElementMetricsHost, associatedInterfacePtrInfo);
  }

  AnchorElementMetricsHostAssociatedPtr.prototype =
      Object.create(AnchorElementMetricsHostPtr.prototype);
  AnchorElementMetricsHostAssociatedPtr.prototype.constructor =
      AnchorElementMetricsHostAssociatedPtr;

  function AnchorElementMetricsHostProxy(receiver) {
    this.receiver_ = receiver;
  }
  AnchorElementMetricsHostPtr.prototype.reportAnchorElementMetricsOnClick = function() {
    return AnchorElementMetricsHostProxy.prototype.reportAnchorElementMetricsOnClick
        .apply(this.ptr.getProxy(), arguments);
  };

  AnchorElementMetricsHostProxy.prototype.reportAnchorElementMetricsOnClick = function(metrics) {
    var params_ = new AnchorElementMetricsHost_ReportAnchorElementMetricsOnClick_Params();
    params_.metrics = metrics;
    var builder = new codec.MessageV0Builder(
        kAnchorElementMetricsHost_ReportAnchorElementMetricsOnClick_Name,
        codec.align(AnchorElementMetricsHost_ReportAnchorElementMetricsOnClick_Params.encodedSize));
    builder.encodeStruct(AnchorElementMetricsHost_ReportAnchorElementMetricsOnClick_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  AnchorElementMetricsHostPtr.prototype.reportAnchorElementMetricsOnLoad = function() {
    return AnchorElementMetricsHostProxy.prototype.reportAnchorElementMetricsOnLoad
        .apply(this.ptr.getProxy(), arguments);
  };

  AnchorElementMetricsHostProxy.prototype.reportAnchorElementMetricsOnLoad = function(metrics, viewportSize) {
    var params_ = new AnchorElementMetricsHost_ReportAnchorElementMetricsOnLoad_Params();
    params_.metrics = metrics;
    params_.viewportSize = viewportSize;
    var builder = new codec.MessageV0Builder(
        kAnchorElementMetricsHost_ReportAnchorElementMetricsOnLoad_Name,
        codec.align(AnchorElementMetricsHost_ReportAnchorElementMetricsOnLoad_Params.encodedSize));
    builder.encodeStruct(AnchorElementMetricsHost_ReportAnchorElementMetricsOnLoad_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function AnchorElementMetricsHostStub(delegate) {
    this.delegate_ = delegate;
  }
  AnchorElementMetricsHostStub.prototype.reportAnchorElementMetricsOnClick = function(metrics) {
    return this.delegate_ && this.delegate_.reportAnchorElementMetricsOnClick && this.delegate_.reportAnchorElementMetricsOnClick(metrics);
  }
  AnchorElementMetricsHostStub.prototype.reportAnchorElementMetricsOnLoad = function(metrics, viewportSize) {
    return this.delegate_ && this.delegate_.reportAnchorElementMetricsOnLoad && this.delegate_.reportAnchorElementMetricsOnLoad(metrics, viewportSize);
  }

  AnchorElementMetricsHostStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kAnchorElementMetricsHost_ReportAnchorElementMetricsOnClick_Name:
      var params = reader.decodeStruct(AnchorElementMetricsHost_ReportAnchorElementMetricsOnClick_Params);
      this.reportAnchorElementMetricsOnClick(params.metrics);
      return true;
    case kAnchorElementMetricsHost_ReportAnchorElementMetricsOnLoad_Name:
      var params = reader.decodeStruct(AnchorElementMetricsHost_ReportAnchorElementMetricsOnLoad_Params);
      this.reportAnchorElementMetricsOnLoad(params.metrics, params.viewportSize);
      return true;
    default:
      return false;
    }
  };

  AnchorElementMetricsHostStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateAnchorElementMetricsHostRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kAnchorElementMetricsHost_ReportAnchorElementMetricsOnClick_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AnchorElementMetricsHost_ReportAnchorElementMetricsOnClick_Params;
      break;
      case kAnchorElementMetricsHost_ReportAnchorElementMetricsOnLoad_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AnchorElementMetricsHost_ReportAnchorElementMetricsOnLoad_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateAnchorElementMetricsHostResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var AnchorElementMetricsHost = {
    name: 'blink.mojom.AnchorElementMetricsHost',
    kVersion: 0,
    ptrClass: AnchorElementMetricsHostPtr,
    proxyClass: AnchorElementMetricsHostProxy,
    stubClass: AnchorElementMetricsHostStub,
    validateRequest: validateAnchorElementMetricsHostRequest,
    validateResponse: null,
  };
  AnchorElementMetricsHostStub.prototype.validator = validateAnchorElementMetricsHostRequest;
  AnchorElementMetricsHostProxy.prototype.validator = null;
  exports.AnchorElementMetrics = AnchorElementMetrics;
  exports.AnchorElementMetricsHost = AnchorElementMetricsHost;
  exports.AnchorElementMetricsHostPtr = AnchorElementMetricsHostPtr;
  exports.AnchorElementMetricsHostAssociatedPtr = AnchorElementMetricsHostAssociatedPtr;
})();