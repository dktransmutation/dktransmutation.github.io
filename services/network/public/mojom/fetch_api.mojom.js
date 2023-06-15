// services/network/public/mojom/fetch_api.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/fetch_api.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('network.mojom');


  var RequestMode = {};
  RequestMode.kSameOrigin = 0;
  RequestMode.kNoCors = 1;
  RequestMode.kCors = 2;
  RequestMode.kCorsWithForcedPreflight = 3;
  RequestMode.kNavigate = 4;
  RequestMode.MIN_VALUE = 0,
  RequestMode.MAX_VALUE = 4,

  RequestMode.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
      return true;
    }
    return false;
  };

  RequestMode.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var RequestDestination = {};
  RequestDestination.kEmpty = 0;
  RequestDestination.kAudio = 1;
  RequestDestination.kAudioWorklet = 2;
  RequestDestination.kDocument = 3;
  RequestDestination.kEmbed = 4;
  RequestDestination.kFont = 5;
  RequestDestination.kFrame = 6;
  RequestDestination.kIframe = 7;
  RequestDestination.kImage = 8;
  RequestDestination.kManifest = 9;
  RequestDestination.kObject = 10;
  RequestDestination.kPaintWorklet = 11;
  RequestDestination.kReport = 12;
  RequestDestination.kScript = 13;
  RequestDestination.kServiceWorker = 14;
  RequestDestination.kSharedWorker = 15;
  RequestDestination.kStyle = 16;
  RequestDestination.kTrack = 17;
  RequestDestination.kVideo = 18;
  RequestDestination.kWorker = 19;
  RequestDestination.kXslt = 20;
  RequestDestination.MIN_VALUE = 0,
  RequestDestination.MAX_VALUE = 20,

  RequestDestination.isKnownEnumValue = function(value) {
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
    case 20:
      return true;
    }
    return false;
  };

  RequestDestination.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var RedirectMode = {};
  RedirectMode.kFollow = 0;
  RedirectMode.kError = 1;
  RedirectMode.kManual = 2;
  RedirectMode.MIN_VALUE = 0,
  RedirectMode.MAX_VALUE = 2,

  RedirectMode.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  RedirectMode.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var CredentialsMode = {};
  CredentialsMode.kOmit = 0;
  CredentialsMode.kSameOrigin = 1;
  CredentialsMode.kInclude = 2;
  CredentialsMode.kOmitBug_775438_Workaround = 3;
  CredentialsMode.MIN_VALUE = 0,
  CredentialsMode.MAX_VALUE = 3,

  CredentialsMode.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  CredentialsMode.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var FetchResponseType = {};
  FetchResponseType.kBasic = 0;
  FetchResponseType.kCors = 1;
  FetchResponseType.kDefault = 2;
  FetchResponseType.kError = 3;
  FetchResponseType.kOpaque = 4;
  FetchResponseType.kOpaqueRedirect = 5;
  FetchResponseType.MIN_VALUE = 0,
  FetchResponseType.MAX_VALUE = 5,

  FetchResponseType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return true;
    }
    return false;
  };

  FetchResponseType.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var FetchResponseSource = {};
  FetchResponseSource.kUnspecified = 0;
  FetchResponseSource.kNetwork = 1;
  FetchResponseSource.kHttpCache = 2;
  FetchResponseSource.kCacheStorage = 3;
  FetchResponseSource.MIN_VALUE = 0,
  FetchResponseSource.MAX_VALUE = 3,

  FetchResponseSource.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  FetchResponseSource.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  exports.RequestMode = RequestMode;
  exports.RequestDestination = RequestDestination;
  exports.RedirectMode = RedirectMode;
  exports.CredentialsMode = CredentialsMode;
  exports.FetchResponseType = FetchResponseType;
  exports.FetchResponseSource = FetchResponseSource;
})();