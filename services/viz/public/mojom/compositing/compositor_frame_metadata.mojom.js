// services/viz/public/mojom/compositing/compositor_frame_metadata.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/viz/public/mojom/compositing/compositor_frame_metadata.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('viz.mojom');
  var time$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/time.mojom', '../../../../../mojo/public/mojom/base/time.mojom.js');
  }
  var begin_frame_args$ =
      mojo.internal.exposeNamespace('viz.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/viz/public/mojom/compositing/begin_frame_args.mojom', 'begin_frame_args.mojom.js');
  }
  var delegated_ink_metadata$ =
      mojo.internal.exposeNamespace('viz.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/viz/public/mojom/compositing/delegated_ink_metadata.mojom', 'delegated_ink_metadata.mojom.js');
  }
  var frame_deadline$ =
      mojo.internal.exposeNamespace('viz.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/viz/public/mojom/compositing/frame_deadline.mojom', 'frame_deadline.mojom.js');
  }
  var selection$ =
      mojo.internal.exposeNamespace('viz.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/viz/public/mojom/compositing/selection.mojom', 'selection.mojom.js');
  }
  var surface_id$ =
      mojo.internal.exposeNamespace('viz.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/viz/public/mojom/compositing/surface_id.mojom', 'surface_id.mojom.js');
  }
  var surface_range$ =
      mojo.internal.exposeNamespace('viz.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/viz/public/mojom/compositing/surface_range.mojom', 'surface_range.mojom.js');
  }
  var geometry$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/geometry/mojom/geometry.mojom', '../../../../../ui/gfx/geometry/mojom/geometry.mojom.js');
  }
  var display_color_spaces$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/mojom/display_color_spaces.mojom', '../../../../../ui/gfx/mojom/display_color_spaces.mojom.js');
  }
  var overlay_transform$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/mojom/overlay_transform.mojom', '../../../../../ui/gfx/mojom/overlay_transform.mojom.js');
  }
  var latency_info$ =
      mojo.internal.exposeNamespace('ui.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/latency/mojom/latency_info.mojom', '../../../../../ui/latency/mojom/latency_info.mojom.js');
  }



  function CompositorFrameMetadata(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CompositorFrameMetadata.prototype.initDefaults_ = function() {
    this.deviceScaleFactor = 0;
    this.pageScaleFactor = 0;
    this.rootScrollOffset = null;
    this.scrollableViewportSize = null;
    this.contentColorUsage = 0;
    this.mayContainVideo = false;
    this.isResourcelessSoftwareDrawWithScrollOrAnimation = false;
    this.sendFrameTokenToEmbedder = false;
    this.topControlsVisibleHeightSet = false;
    this.rootBackgroundColor = 0;
    this.frameToken = 0;
    this.latencyInfo = null;
    this.referencedSurfaces = null;
    this.deadline = null;
    this.activationDependencies = null;
    this.beginFrameAck = null;
    this.topControlsVisibleHeight = 0;
    this.minPageScaleFactor = 0;
    this.localSurfaceIdAllocationTime = null;
    this.preferredFrameInterval = null;
    this.displayTransformHint = 0;
    this.delegatedInkMetadata = null;
  };
  CompositorFrameMetadata.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CompositorFrameMetadata.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 128}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;



    // validate CompositorFrameMetadata.rootScrollOffset
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, geometry$.Vector2dF, false);
    if (err !== validator.validationError.NONE)
        return err;



    // validate CompositorFrameMetadata.scrollableViewportSize
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, geometry$.SizeF, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CompositorFrameMetadata.contentColorUsage
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 24, display_color_spaces$.ContentColorUsage);
    if (err !== validator.validationError.NONE)
        return err;





    // validate CompositorFrameMetadata.latencyInfo
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 40, 8, new codec.PointerTo(latency_info$.LatencyInfo), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CompositorFrameMetadata.referencedSurfaces
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 48, 8, new codec.PointerTo(surface_range$.SurfaceRange), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CompositorFrameMetadata.deadline
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 56, frame_deadline$.FrameDeadline, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CompositorFrameMetadata.activationDependencies
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 64, 8, new codec.PointerTo(surface_id$.SurfaceId), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CompositorFrameMetadata.beginFrameAck
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 72, begin_frame_args$.BeginFrameAck, false);
    if (err !== validator.validationError.NONE)
        return err;







    // validate CompositorFrameMetadata.localSurfaceIdAllocationTime
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 88, time$.TimeTicks, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CompositorFrameMetadata.preferredFrameInterval
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 96, time$.TimeDelta, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CompositorFrameMetadata.displayTransformHint
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 104, overlay_transform$.OverlayTransform);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CompositorFrameMetadata.delegatedInkMetadata
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 112, delegated_ink_metadata$.DelegatedInkMetadata, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CompositorFrameMetadata.encodedSize = codec.kStructHeaderSize + 120;

  CompositorFrameMetadata.decode = function(decoder) {
    var packed;
    var val = new CompositorFrameMetadata();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.deviceScaleFactor =
        decoder.decodeStruct(codec.Float);
    val.pageScaleFactor =
        decoder.decodeStruct(codec.Float);
    val.rootScrollOffset =
        decoder.decodeStructPointer(geometry$.Vector2dF);
    val.scrollableViewportSize =
        decoder.decodeStructPointer(geometry$.SizeF);
    val.contentColorUsage =
        decoder.decodeStruct(codec.Int32);
    packed = decoder.readUint8();
    val.mayContainVideo = (packed >> 0) & 1 ? true : false;
    val.isResourcelessSoftwareDrawWithScrollOrAnimation = (packed >> 1) & 1 ? true : false;
    val.sendFrameTokenToEmbedder = (packed >> 2) & 1 ? true : false;
    val.topControlsVisibleHeightSet = (packed >> 3) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.rootBackgroundColor =
        decoder.decodeStruct(codec.Uint32);
    val.frameToken =
        decoder.decodeStruct(codec.Uint32);
    val.latencyInfo =
        decoder.decodeArrayPointer(new codec.PointerTo(latency_info$.LatencyInfo));
    val.referencedSurfaces =
        decoder.decodeArrayPointer(new codec.PointerTo(surface_range$.SurfaceRange));
    val.deadline =
        decoder.decodeStructPointer(frame_deadline$.FrameDeadline);
    val.activationDependencies =
        decoder.decodeArrayPointer(new codec.PointerTo(surface_id$.SurfaceId));
    val.beginFrameAck =
        decoder.decodeStructPointer(begin_frame_args$.BeginFrameAck);
    val.topControlsVisibleHeight =
        decoder.decodeStruct(codec.Float);
    val.minPageScaleFactor =
        decoder.decodeStruct(codec.Float);
    val.localSurfaceIdAllocationTime =
        decoder.decodeStructPointer(time$.TimeTicks);
    val.preferredFrameInterval =
        decoder.decodeStructPointer(time$.TimeDelta);
    val.displayTransformHint =
        decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.delegatedInkMetadata =
        decoder.decodeStructPointer(delegated_ink_metadata$.DelegatedInkMetadata);
    return val;
  };

  CompositorFrameMetadata.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CompositorFrameMetadata.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Float, val.deviceScaleFactor);
    encoder.encodeStruct(codec.Float, val.pageScaleFactor);
    encoder.encodeStructPointer(geometry$.Vector2dF, val.rootScrollOffset);
    encoder.encodeStructPointer(geometry$.SizeF, val.scrollableViewportSize);
    encoder.encodeStruct(codec.Int32, val.contentColorUsage);
    packed = 0;
    packed |= (val.mayContainVideo & 1) << 0
    packed |= (val.isResourcelessSoftwareDrawWithScrollOrAnimation & 1) << 1
    packed |= (val.sendFrameTokenToEmbedder & 1) << 2
    packed |= (val.topControlsVisibleHeightSet & 1) << 3
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Uint32, val.rootBackgroundColor);
    encoder.encodeStruct(codec.Uint32, val.frameToken);
    encoder.encodeArrayPointer(new codec.PointerTo(latency_info$.LatencyInfo), val.latencyInfo);
    encoder.encodeArrayPointer(new codec.PointerTo(surface_range$.SurfaceRange), val.referencedSurfaces);
    encoder.encodeStructPointer(frame_deadline$.FrameDeadline, val.deadline);
    encoder.encodeArrayPointer(new codec.PointerTo(surface_id$.SurfaceId), val.activationDependencies);
    encoder.encodeStructPointer(begin_frame_args$.BeginFrameAck, val.beginFrameAck);
    encoder.encodeStruct(codec.Float, val.topControlsVisibleHeight);
    encoder.encodeStruct(codec.Float, val.minPageScaleFactor);
    encoder.encodeStructPointer(time$.TimeTicks, val.localSurfaceIdAllocationTime);
    encoder.encodeStructPointer(time$.TimeDelta, val.preferredFrameInterval);
    encoder.encodeStruct(codec.Int32, val.displayTransformHint);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(delegated_ink_metadata$.DelegatedInkMetadata, val.delegatedInkMetadata);
  };
  exports.CompositorFrameMetadata = CompositorFrameMetadata;
})();