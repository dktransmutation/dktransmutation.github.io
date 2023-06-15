// third_party/blink/public/mojom/font_access/font_access.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/font_access/font_access.mojom';
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
  var permission_status$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/permissions/permission_status.mojom', '../permissions/permission_status.mojom.js');
  }
  var shared_memory$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/shared_memory.mojom', '../../../../../mojo/public/mojom/base/shared_memory.mojom.js');
  }


  var FontEnumerationStatus = {};
  FontEnumerationStatus.kOk = 0;
  FontEnumerationStatus.kUnimplemented = 1;
  FontEnumerationStatus.kUnexpectedError = 2;
  FontEnumerationStatus.kPermissionDenied = 3;
  FontEnumerationStatus.MIN_VALUE = 0,
  FontEnumerationStatus.MAX_VALUE = 3,

  FontEnumerationStatus.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  FontEnumerationStatus.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function FontAccessManager_EnumerateLocalFonts_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FontAccessManager_EnumerateLocalFonts_Params.prototype.initDefaults_ = function() {
  };
  FontAccessManager_EnumerateLocalFonts_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FontAccessManager_EnumerateLocalFonts_Params.validate = function(messageValidator, offset) {
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

  FontAccessManager_EnumerateLocalFonts_Params.encodedSize = codec.kStructHeaderSize + 0;

  FontAccessManager_EnumerateLocalFonts_Params.decode = function(decoder) {
    var packed;
    var val = new FontAccessManager_EnumerateLocalFonts_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  FontAccessManager_EnumerateLocalFonts_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FontAccessManager_EnumerateLocalFonts_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function FontAccessManager_EnumerateLocalFonts_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FontAccessManager_EnumerateLocalFonts_ResponseParams.prototype.initDefaults_ = function() {
    this.enumerationStatus = 0;
    this.enumerationTable = null;
  };
  FontAccessManager_EnumerateLocalFonts_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FontAccessManager_EnumerateLocalFonts_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate FontAccessManager_EnumerateLocalFonts_ResponseParams.enumerationStatus
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, FontEnumerationStatus);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FontAccessManager_EnumerateLocalFonts_ResponseParams.enumerationTable
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, shared_memory$.ReadOnlySharedMemoryRegion, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FontAccessManager_EnumerateLocalFonts_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  FontAccessManager_EnumerateLocalFonts_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new FontAccessManager_EnumerateLocalFonts_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.enumerationStatus =
        decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.enumerationTable =
        decoder.decodeStructPointer(shared_memory$.ReadOnlySharedMemoryRegion);
    return val;
  };

  FontAccessManager_EnumerateLocalFonts_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FontAccessManager_EnumerateLocalFonts_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.enumerationStatus);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(shared_memory$.ReadOnlySharedMemoryRegion, val.enumerationTable);
  };
  var kFontAccessManager_EnumerateLocalFonts_Name = 0;

  function FontAccessManagerPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(FontAccessManager,
                                                   handleOrPtrInfo);
  }

  function FontAccessManagerAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        FontAccessManager, associatedInterfacePtrInfo);
  }

  FontAccessManagerAssociatedPtr.prototype =
      Object.create(FontAccessManagerPtr.prototype);
  FontAccessManagerAssociatedPtr.prototype.constructor =
      FontAccessManagerAssociatedPtr;

  function FontAccessManagerProxy(receiver) {
    this.receiver_ = receiver;
  }
  FontAccessManagerPtr.prototype.enumerateLocalFonts = function() {
    return FontAccessManagerProxy.prototype.enumerateLocalFonts
        .apply(this.ptr.getProxy(), arguments);
  };

  FontAccessManagerProxy.prototype.enumerateLocalFonts = function() {
    var params_ = new FontAccessManager_EnumerateLocalFonts_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kFontAccessManager_EnumerateLocalFonts_Name,
          codec.align(FontAccessManager_EnumerateLocalFonts_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(FontAccessManager_EnumerateLocalFonts_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(FontAccessManager_EnumerateLocalFonts_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function FontAccessManagerStub(delegate) {
    this.delegate_ = delegate;
  }
  FontAccessManagerStub.prototype.enumerateLocalFonts = function() {
    return this.delegate_ && this.delegate_.enumerateLocalFonts && this.delegate_.enumerateLocalFonts();
  }

  FontAccessManagerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  FontAccessManagerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kFontAccessManager_EnumerateLocalFonts_Name:
      var params = reader.decodeStruct(FontAccessManager_EnumerateLocalFonts_Params);
      this.enumerateLocalFonts().then(function(response) {
        var responseParams =
            new FontAccessManager_EnumerateLocalFonts_ResponseParams();
        responseParams.enumerationStatus = response.enumerationStatus;
        responseParams.enumerationTable = response.enumerationTable;
        var builder = new codec.MessageV1Builder(
            kFontAccessManager_EnumerateLocalFonts_Name,
            codec.align(FontAccessManager_EnumerateLocalFonts_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(FontAccessManager_EnumerateLocalFonts_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateFontAccessManagerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kFontAccessManager_EnumerateLocalFonts_Name:
        if (message.expectsResponse())
          paramsClass = FontAccessManager_EnumerateLocalFonts_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateFontAccessManagerResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kFontAccessManager_EnumerateLocalFonts_Name:
        if (message.isResponse())
          paramsClass = FontAccessManager_EnumerateLocalFonts_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var FontAccessManager = {
    name: 'blink.mojom.FontAccessManager',
    kVersion: 0,
    ptrClass: FontAccessManagerPtr,
    proxyClass: FontAccessManagerProxy,
    stubClass: FontAccessManagerStub,
    validateRequest: validateFontAccessManagerRequest,
    validateResponse: validateFontAccessManagerResponse,
  };
  FontAccessManagerStub.prototype.validator = validateFontAccessManagerRequest;
  FontAccessManagerProxy.prototype.validator = validateFontAccessManagerResponse;
  exports.FontEnumerationStatus = FontEnumerationStatus;
  exports.FontAccessManager = FontAccessManager;
  exports.FontAccessManagerPtr = FontAccessManagerPtr;
  exports.FontAccessManagerAssociatedPtr = FontAccessManagerAssociatedPtr;
})();