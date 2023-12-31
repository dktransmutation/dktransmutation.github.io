// services/viz/public/mojom/compositing/transferable_resource.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/viz/public/mojom/compositing/transferable_resource.mojom';
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
  var mailbox_holder$ =
      mojo.internal.exposeNamespace('gpu.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'gpu/ipc/common/mailbox_holder.mojom', '../../../../../gpu/ipc/common/mailbox_holder.mojom.js');
  }
  var vulkan_ycbcr_info$ =
      mojo.internal.exposeNamespace('gpu.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'gpu/ipc/common/vulkan_ycbcr_info.mojom', '../../../../../gpu/ipc/common/vulkan_ycbcr_info.mojom.js');
  }
  var geometry$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/geometry/mojom/geometry.mojom', '../../../../../ui/gfx/geometry/mojom/geometry.mojom.js');
  }
  var buffer_types$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/mojom/buffer_types.mojom', '../../../../../ui/gfx/mojom/buffer_types.mojom.js');
  }
  var color_space$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/mojom/color_space.mojom', '../../../../../ui/gfx/mojom/color_space.mojom.js');
  }


  var ResourceFormat = {};
  ResourceFormat.RGBA_8888 = 0;
  ResourceFormat.RGBA_4444 = 1;
  ResourceFormat.BGRA_8888 = 2;
  ResourceFormat.ALPHA_8 = 3;
  ResourceFormat.LUMINANCE_8 = 4;
  ResourceFormat.RGB_565 = 5;
  ResourceFormat.BGR_565 = 6;
  ResourceFormat.ETC1 = 7;
  ResourceFormat.RED_8 = 8;
  ResourceFormat.RG_88 = 9;
  ResourceFormat.LUMINANCE_F16 = 10;
  ResourceFormat.RGBA_F16 = 11;
  ResourceFormat.R16_EXT = 12;
  ResourceFormat.RGBX_8888 = 13;
  ResourceFormat.BGRX_8888 = 14;
  ResourceFormat.RGBX_1010102 = 15;
  ResourceFormat.BGRX_1010102 = 16;
  ResourceFormat.YVU_420 = 17;
  ResourceFormat.YUV_420_BIPLANAR = 18;
  ResourceFormat.P010 = 19;
  ResourceFormat.MIN_VALUE = 0,
  ResourceFormat.MAX_VALUE = 19,

  ResourceFormat.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
      return true;
    }
    return false;
  };

  ResourceFormat.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function TransferableResource(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TransferableResource.prototype.initDefaults_ = function() {
    this.id = 0;
    this.format = 0;
    this.filter = 0;
    this.readLockFencesEnabled = false;
    this.isSoftware = false;
    this.isOverlayCandidate = false;
    this.isBackedBySurfaceTexture = false;
    this.wantsPromotionHint = false;
    this.size = null;
    this.mailboxHolder = null;
    this.colorSpace = null;
    this.ycbcrInfo = null;
  };
  TransferableResource.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TransferableResource.validate = function(messageValidator, offset) {
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



    // validate TransferableResource.format
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 4, ResourceFormat);
    if (err !== validator.validationError.NONE)
        return err;



    // validate TransferableResource.size
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, geometry$.Size, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TransferableResource.mailboxHolder
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, mailbox_holder$.MailboxHolder, false);
    if (err !== validator.validationError.NONE)
        return err;







    // validate TransferableResource.colorSpace
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 32, color_space$.ColorSpace, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TransferableResource.ycbcrInfo
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 40, vulkan_ycbcr_info$.VulkanYCbCrInfo, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  TransferableResource.encodedSize = codec.kStructHeaderSize + 48;

  TransferableResource.decode = function(decoder) {
    var packed;
    var val = new TransferableResource();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.id =
        decoder.decodeStruct(codec.Uint32);
    val.format =
        decoder.decodeStruct(codec.Int32);
    val.filter =
        decoder.decodeStruct(codec.Uint32);
    packed = decoder.readUint8();
    val.readLockFencesEnabled = (packed >> 0) & 1 ? true : false;
    val.isSoftware = (packed >> 1) & 1 ? true : false;
    val.isOverlayCandidate = (packed >> 2) & 1 ? true : false;
    val.isBackedBySurfaceTexture = (packed >> 3) & 1 ? true : false;
    val.wantsPromotionHint = (packed >> 4) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.size =
        decoder.decodeStructPointer(geometry$.Size);
    val.mailboxHolder =
        decoder.decodeStructPointer(mailbox_holder$.MailboxHolder);
    val.colorSpace =
        decoder.decodeStructPointer(color_space$.ColorSpace);
    val.ycbcrInfo =
        decoder.decodeStructPointer(vulkan_ycbcr_info$.VulkanYCbCrInfo);
    return val;
  };

  TransferableResource.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TransferableResource.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.id);
    encoder.encodeStruct(codec.Int32, val.format);
    encoder.encodeStruct(codec.Uint32, val.filter);
    packed = 0;
    packed |= (val.readLockFencesEnabled & 1) << 0
    packed |= (val.isSoftware & 1) << 1
    packed |= (val.isOverlayCandidate & 1) << 2
    packed |= (val.isBackedBySurfaceTexture & 1) << 3
    packed |= (val.wantsPromotionHint & 1) << 4
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(geometry$.Size, val.size);
    encoder.encodeStructPointer(mailbox_holder$.MailboxHolder, val.mailboxHolder);
    encoder.encodeStructPointer(color_space$.ColorSpace, val.colorSpace);
    encoder.encodeStructPointer(vulkan_ycbcr_info$.VulkanYCbCrInfo, val.ycbcrInfo);
  };
  exports.ResourceFormat = ResourceFormat;
  exports.TransferableResource = TransferableResource;
})();