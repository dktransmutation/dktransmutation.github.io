// services/viz/public/mojom/compositing/delegated_ink_metadata.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/viz/public/mojom/compositing/delegated_ink_metadata.mojom';
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
  var skcolor$ =
      mojo.internal.exposeNamespace('skia.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'skia/public/mojom/skcolor.mojom', '../../../../../skia/public/mojom/skcolor.mojom.js');
  }
  var geometry$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/geometry/mojom/geometry.mojom', '../../../../../ui/gfx/geometry/mojom/geometry.mojom.js');
  }



  function DelegatedInkMetadata(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DelegatedInkMetadata.prototype.initDefaults_ = function() {
    this.point = null;
    this.diameter = 0;
    this.color = null;
    this.timestamp = null;
    this.presentationArea = null;
  };
  DelegatedInkMetadata.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DelegatedInkMetadata.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 48}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DelegatedInkMetadata.point
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, geometry$.PointF, false);
    if (err !== validator.validationError.NONE)
        return err;



    // validate DelegatedInkMetadata.color
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, skcolor$.SkColor, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DelegatedInkMetadata.timestamp
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, time$.TimeTicks, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DelegatedInkMetadata.presentationArea
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 32, geometry$.RectF, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DelegatedInkMetadata.encodedSize = codec.kStructHeaderSize + 40;

  DelegatedInkMetadata.decode = function(decoder) {
    var packed;
    var val = new DelegatedInkMetadata();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.point =
        decoder.decodeStructPointer(geometry$.PointF);
    val.diameter =
        decoder.decodeStruct(codec.Double);
    val.color =
        decoder.decodeStructPointer(skcolor$.SkColor);
    val.timestamp =
        decoder.decodeStructPointer(time$.TimeTicks);
    val.presentationArea =
        decoder.decodeStructPointer(geometry$.RectF);
    return val;
  };

  DelegatedInkMetadata.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DelegatedInkMetadata.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(geometry$.PointF, val.point);
    encoder.encodeStruct(codec.Double, val.diameter);
    encoder.encodeStructPointer(skcolor$.SkColor, val.color);
    encoder.encodeStructPointer(time$.TimeTicks, val.timestamp);
    encoder.encodeStructPointer(geometry$.RectF, val.presentationArea);
  };
  exports.DelegatedInkMetadata = DelegatedInkMetadata;
})();