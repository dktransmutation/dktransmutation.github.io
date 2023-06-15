// third_party/blink/public/mojom/input/input_event_result.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/input/input_event_result.mojom';
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


  var InputEventResultSource = {};
  InputEventResultSource.kUnknown = 0;
  InputEventResultSource.kCompositorThread = 1;
  InputEventResultSource.kMainThread = 2;
  InputEventResultSource.kBrowser = 3;
  InputEventResultSource.MIN_VALUE = 0,
  InputEventResultSource.MAX_VALUE = 3,

  InputEventResultSource.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  InputEventResultSource.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var InputEventResultState = {};
  InputEventResultState.kUnknown = 0;
  InputEventResultState.kConsumed = 1;
  InputEventResultState.kNotConsumed = 2;
  InputEventResultState.kConsumedShouldBubble = 3;
  InputEventResultState.kNoConsumerExists = 4;
  InputEventResultState.kIgnored = 5;
  InputEventResultState.kSetNonBlocking = 6;
  InputEventResultState.kSetNonBlockingDueToFling = 7;
  InputEventResultState.MIN_VALUE = 0,
  InputEventResultState.MAX_VALUE = 7,

  InputEventResultState.isKnownEnumValue = function(value) {
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

  InputEventResultState.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  exports.InputEventResultSource = InputEventResultSource;
  exports.InputEventResultState = InputEventResultState;
})();