// third_party/blink/public/mojom/native_file_system/native_file_system_error.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/native_file_system/native_file_system_error.mojom';
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
  var file_error$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/file_error.mojom', '../../../../../mojo/public/mojom/base/file_error.mojom.js');
  }


  var NativeFileSystemStatus = {};
  NativeFileSystemStatus.kOk = 0;
  NativeFileSystemStatus.kPermissionDenied = 1;
  NativeFileSystemStatus.kSecurityError = 2;
  NativeFileSystemStatus.kInvalidState = 3;
  NativeFileSystemStatus.kInvalidArgument = 4;
  NativeFileSystemStatus.kOperationFailed = 5;
  NativeFileSystemStatus.kOperationAborted = 6;
  NativeFileSystemStatus.kFileError = 7;
  NativeFileSystemStatus.MIN_VALUE = 0,
  NativeFileSystemStatus.MAX_VALUE = 7,

  NativeFileSystemStatus.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
      return true;
    }
    return false;
  };

  NativeFileSystemStatus.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function NativeFileSystemError(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NativeFileSystemError.prototype.initDefaults_ = function() {
    this.status = 0;
    this.fileError = 0;
    this.message = null;
  };
  NativeFileSystemError.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NativeFileSystemError.validate = function(messageValidator, offset) {
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


    // validate NativeFileSystemError.status
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, NativeFileSystemStatus);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NativeFileSystemError.fileError
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 4, file_error$.FileError);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NativeFileSystemError.message
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NativeFileSystemError.encodedSize = codec.kStructHeaderSize + 16;

  NativeFileSystemError.decode = function(decoder) {
    var packed;
    var val = new NativeFileSystemError();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.status =
        decoder.decodeStruct(codec.Int32);
    val.fileError =
        decoder.decodeStruct(codec.Int32);
    val.message =
        decoder.decodeStruct(codec.String);
    return val;
  };

  NativeFileSystemError.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NativeFileSystemError.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.status);
    encoder.encodeStruct(codec.Int32, val.fileError);
    encoder.encodeStruct(codec.String, val.message);
  };
  exports.NativeFileSystemStatus = NativeFileSystemStatus;
  exports.NativeFileSystemError = NativeFileSystemError;
})();