// services/network/public/mojom/cors.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/cors.mojom';
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


  var CorsPreflightPolicy = {};
  CorsPreflightPolicy.kConsiderPreflight = 0;
  CorsPreflightPolicy.kPreventPreflight = 1;
  CorsPreflightPolicy.MIN_VALUE = 0,
  CorsPreflightPolicy.MAX_VALUE = 1,

  CorsPreflightPolicy.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
      return true;
    }
    return false;
  };

  CorsPreflightPolicy.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var CorsError = {};
  CorsError.kDisallowedByMode = 0;
  CorsError.kInvalidResponse = 1;
  CorsError.kWildcardOriginNotAllowed = 2;
  CorsError.kMissingAllowOriginHeader = 3;
  CorsError.kMultipleAllowOriginValues = 4;
  CorsError.kInvalidAllowOriginValue = 5;
  CorsError.kAllowOriginMismatch = 6;
  CorsError.kInvalidAllowCredentials = 7;
  CorsError.kCorsDisabledScheme = 8;
  CorsError.kPreflightInvalidStatus = 9;
  CorsError.kPreflightDisallowedRedirect = 10;
  CorsError.kPreflightWildcardOriginNotAllowed = 11;
  CorsError.kPreflightMissingAllowOriginHeader = 12;
  CorsError.kPreflightMultipleAllowOriginValues = 13;
  CorsError.kPreflightInvalidAllowOriginValue = 14;
  CorsError.kPreflightAllowOriginMismatch = 15;
  CorsError.kPreflightInvalidAllowCredentials = 16;
  CorsError.kPreflightMissingAllowExternal = 17;
  CorsError.kPreflightInvalidAllowExternal = 18;
  CorsError.kInvalidAllowMethodsPreflightResponse = 19;
  CorsError.kInvalidAllowHeadersPreflightResponse = 20;
  CorsError.kMethodDisallowedByPreflightResponse = 21;
  CorsError.kHeaderDisallowedByPreflightResponse = 22;
  CorsError.kRedirectContainsCredentials = 23;
  CorsError.MIN_VALUE = 0,
  CorsError.MAX_VALUE = 23,

  CorsError.isKnownEnumValue = function(value) {
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
    case 21:
    case 22:
    case 23:
      return true;
    }
    return false;
  };

  CorsError.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  exports.CorsPreflightPolicy = CorsPreflightPolicy;
  exports.CorsError = CorsError;
})();