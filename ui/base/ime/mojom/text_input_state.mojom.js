// ui/base/ime/mojom/text_input_state.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'ui/base/ime/mojom/text_input_state.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('ui.mojom');
  var string16$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/string16.mojom', '../../../../mojo/public/mojom/base/string16.mojom.js');
  }
  var text_direction$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/text_direction.mojom', '../../../../mojo/public/mojom/base/text_direction.mojom.js');
  }
  var ime_types$ =
      mojo.internal.exposeNamespace('ui.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/base/ime/mojom/ime_types.mojom', 'ime_types.mojom.js');
  }
  var virtual_keyboard_types$ =
      mojo.internal.exposeNamespace('ui.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/base/ime/mojom/virtual_keyboard_types.mojom', 'virtual_keyboard_types.mojom.js');
  }
  var geometry$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/geometry/mojom/geometry.mojom', '../../../gfx/geometry/mojom/geometry.mojom.js');
  }
  var range$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/range/mojom/range.mojom', '../../../gfx/range/mojom/range.mojom.js');
  }



  function ImeTextSpanInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ImeTextSpanInfo.prototype.initDefaults_ = function() {
    this.span = null;
    this.bounds = null;
  };
  ImeTextSpanInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ImeTextSpanInfo.validate = function(messageValidator, offset) {
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


    // validate ImeTextSpanInfo.span
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, ime_types$.ImeTextSpan, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ImeTextSpanInfo.bounds
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, geometry$.Rect, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ImeTextSpanInfo.encodedSize = codec.kStructHeaderSize + 16;

  ImeTextSpanInfo.decode = function(decoder) {
    var packed;
    var val = new ImeTextSpanInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.span =
        decoder.decodeStructPointer(ime_types$.ImeTextSpan);
    val.bounds =
        decoder.decodeStructPointer(geometry$.Rect);
    return val;
  };

  ImeTextSpanInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ImeTextSpanInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(ime_types$.ImeTextSpan, val.span);
    encoder.encodeStructPointer(geometry$.Rect, val.bounds);
  };
  function TextInputState(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TextInputState.prototype.initDefaults_ = function() {
    this.type = ime_types$.TextInputType.NONE;
    this.mode = ime_types$.TextInputMode.kDefault;
    this.action = ime_types$.TextInputAction.kDefault;
    this.flags = 0;
    this.value = null;
    this.selection = null;
    this.composition = null;
    this.canComposeInline = true;
    this.showImeIfNeeded = false;
    this.alwaysHideIme = false;
    this.replyToRequest = false;
    this.vkPolicy = virtual_keyboard_types$.VirtualKeyboardPolicy.AUTO;
    this.editContextControlBounds = null;
    this.editContextSelectionBounds = null;
    this.lastVkVisibilityRequest = virtual_keyboard_types$.VirtualKeyboardVisibilityRequest.NONE;
    this.imeTextSpansInfo = null;
  };
  TextInputState.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TextInputState.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 88}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TextInputState.type
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, ime_types$.TextInputType);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TextInputState.mode
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 4, ime_types$.TextInputMode);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TextInputState.action
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, ime_types$.TextInputAction);
    if (err !== validator.validationError.NONE)
        return err;



    // validate TextInputState.value
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, string16$.String16, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TextInputState.selection
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, range$.Range, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TextInputState.composition
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 32, range$.Range, true);
    if (err !== validator.validationError.NONE)
        return err;






    // validate TextInputState.editContextControlBounds
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 48, geometry$.Rect, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TextInputState.editContextSelectionBounds
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 56, geometry$.Rect, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TextInputState.vkPolicy
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 44, virtual_keyboard_types$.VirtualKeyboardPolicy);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TextInputState.lastVkVisibilityRequest
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 64, virtual_keyboard_types$.VirtualKeyboardVisibilityRequest);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TextInputState.imeTextSpansInfo
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 72, 8, new codec.PointerTo(ImeTextSpanInfo), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  TextInputState.encodedSize = codec.kStructHeaderSize + 80;

  TextInputState.decode = function(decoder) {
    var packed;
    var val = new TextInputState();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.type =
        decoder.decodeStruct(codec.Int32);
    val.mode =
        decoder.decodeStruct(codec.Int32);
    val.action =
        decoder.decodeStruct(codec.Int32);
    val.flags =
        decoder.decodeStruct(codec.Uint32);
    val.value =
        decoder.decodeStructPointer(string16$.String16);
    val.selection =
        decoder.decodeStructPointer(range$.Range);
    val.composition =
        decoder.decodeStructPointer(range$.Range);
    packed = decoder.readUint8();
    val.canComposeInline = (packed >> 0) & 1 ? true : false;
    val.showImeIfNeeded = (packed >> 1) & 1 ? true : false;
    val.alwaysHideIme = (packed >> 2) & 1 ? true : false;
    val.replyToRequest = (packed >> 3) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.vkPolicy =
        decoder.decodeStruct(codec.Int32);
    val.editContextControlBounds =
        decoder.decodeStructPointer(geometry$.Rect);
    val.editContextSelectionBounds =
        decoder.decodeStructPointer(geometry$.Rect);
    val.lastVkVisibilityRequest =
        decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.imeTextSpansInfo =
        decoder.decodeArrayPointer(new codec.PointerTo(ImeTextSpanInfo));
    return val;
  };

  TextInputState.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TextInputState.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.type);
    encoder.encodeStruct(codec.Int32, val.mode);
    encoder.encodeStruct(codec.Int32, val.action);
    encoder.encodeStruct(codec.Uint32, val.flags);
    encoder.encodeStructPointer(string16$.String16, val.value);
    encoder.encodeStructPointer(range$.Range, val.selection);
    encoder.encodeStructPointer(range$.Range, val.composition);
    packed = 0;
    packed |= (val.canComposeInline & 1) << 0
    packed |= (val.showImeIfNeeded & 1) << 1
    packed |= (val.alwaysHideIme & 1) << 2
    packed |= (val.replyToRequest & 1) << 3
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Int32, val.vkPolicy);
    encoder.encodeStructPointer(geometry$.Rect, val.editContextControlBounds);
    encoder.encodeStructPointer(geometry$.Rect, val.editContextSelectionBounds);
    encoder.encodeStruct(codec.Int32, val.lastVkVisibilityRequest);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeArrayPointer(new codec.PointerTo(ImeTextSpanInfo), val.imeTextSpansInfo);
  };
  exports.ImeTextSpanInfo = ImeTextSpanInfo;
  exports.TextInputState = TextInputState;
})();