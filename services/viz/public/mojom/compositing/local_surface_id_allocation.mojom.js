// services/viz/public/mojom/compositing/local_surface_id_allocation.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/viz/public/mojom/compositing/local_surface_id_allocation.mojom';
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
  var local_surface_id$ =
      mojo.internal.exposeNamespace('viz.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/viz/public/mojom/compositing/local_surface_id.mojom', 'local_surface_id.mojom.js');
  }



  function LocalSurfaceIdAllocation(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  LocalSurfaceIdAllocation.prototype.initDefaults_ = function() {
    this.localSurfaceId = null;
    this.allocationTime = null;
  };
  LocalSurfaceIdAllocation.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  LocalSurfaceIdAllocation.validate = function(messageValidator, offset) {
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


    // validate LocalSurfaceIdAllocation.localSurfaceId
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, local_surface_id$.LocalSurfaceId, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate LocalSurfaceIdAllocation.allocationTime
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, time$.TimeTicks, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  LocalSurfaceIdAllocation.encodedSize = codec.kStructHeaderSize + 16;

  LocalSurfaceIdAllocation.decode = function(decoder) {
    var packed;
    var val = new LocalSurfaceIdAllocation();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.localSurfaceId =
        decoder.decodeStructPointer(local_surface_id$.LocalSurfaceId);
    val.allocationTime =
        decoder.decodeStructPointer(time$.TimeTicks);
    return val;
  };

  LocalSurfaceIdAllocation.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(LocalSurfaceIdAllocation.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(local_surface_id$.LocalSurfaceId, val.localSurfaceId);
    encoder.encodeStructPointer(time$.TimeTicks, val.allocationTime);
  };
  exports.LocalSurfaceIdAllocation = LocalSurfaceIdAllocation;
})();