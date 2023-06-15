// services/network/public/mojom/site_for_cookies.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/site_for_cookies.mojom';
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



  function SiteForCookies(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SiteForCookies.prototype.initDefaults_ = function() {
    this.scheme = null;
    this.registrableDomain = null;
    this.schemefullySame = false;
  };
  SiteForCookies.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SiteForCookies.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 32}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SiteForCookies.scheme
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate SiteForCookies.registrableDomain
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  SiteForCookies.encodedSize = codec.kStructHeaderSize + 24;

  SiteForCookies.decode = function(decoder) {
    var packed;
    var val = new SiteForCookies();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.scheme =
        decoder.decodeStruct(codec.String);
    val.registrableDomain =
        decoder.decodeStruct(codec.String);
    packed = decoder.readUint8();
    val.schemefullySame = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  SiteForCookies.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SiteForCookies.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.scheme);
    encoder.encodeStruct(codec.String, val.registrableDomain);
    packed = 0;
    packed |= (val.schemefullySame & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  exports.SiteForCookies = SiteForCookies;
})();