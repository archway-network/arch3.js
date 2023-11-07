# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## v0.5.0 (Unreleased)

### BREAKING CHANGES

- the new version of `arch3.js` will, by default, be compatible only with the
  Archway protocol version `5.0.0` and above.

### Changed

- upgraded project to Typescript `5.2.2` (#104)

#### **arch3-core**

- changed the default Tendermint client to `0.37` (#106)
- increased the default gas adjustment to `1.5` (#106)

#### **arch3-proto**

- switched to `@cosmology/telescope` package to compile proto files (#104)
- updated to the version `5.0.1` of the protocol (#106)

## v0.4.0 (2023-06-27)

### Added

#### **arch3-core**

- added support to create an `SigningArchwayClient` using an
  `HttpBatchClient` (#97)
- added support to create an `ArchwayClient` using an `HttpBatchClient` (#96)

### Changed

#### **arch3-core**

- bump `@cosmjs/*` to `0.31.0` (#95)

### Fixed

#### **arch3-core**

- gracefully handle withdrawing reward contracts when no rewards exist (#91)

## v0.3.1 (2023-06-02)

### Added

#### **arch3-core**

- use the type `SigningArchwayClientOptions` for the `options` in all factory
  methods of the `SigningArchwayClient` (#89)

## v0.3.0 (2023-05-30)

### BREAKING CHANGES

- modified the response of `ArchwayCLient.getEstimateTxFees` to change the
  `estimatedFee` type from `Coin[]` to `StdFee` and moved the `gasLimit`
  into `estimatedFee.gas`

### Added

#### **arch3-core**

- method to `calculateFees` for multiple messages on
  `SigningArchwayClient` (#86)

### Changes

#### **arch3-core**

- deprecated the default `gasPrice` option on `SigningArchwayClient` (#86)

## v0.2.0 (2023-05-17)

### BREAKING CHANGES

- the package `@cosmjs/cosmwasm-stargate` is not re-exported with
  `@archwayhq/arch-core` anymore

### Added

#### **arch3-core**

- automatically estimate fees before signing (#68)
- add `x/rewards` transactions to `SigningArchwayClient` (#67)
- add `x/rewards` queries to `ArchwayClient` (#58)

#### **arch3-proto**

- generate amino types (#62)
- add protobuf deps (#39)
- generate protobuf clients using telescope (#37)

### Fixed

- release process (#33)

## v0.1.0 (2022-09-23)

### Added

#### **arch3-core**

- added the `ArchwayClient` (#18)
- added the `SigningArchwayClient` (#22)
- added the `SigningArchwayClient` (#22)
