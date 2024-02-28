# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## v0.7.0 (2024-02-28)

### BREAKING CHANGES

- change the type of `gasWanted` and `gasUsed`of `TxResult` from `number` to `bigint`,
  to match the new types returned by `@cosmjs/cosmwasm-stargate` (#115)

### Changed

- removed `long` package (#115)

#### **arch3-core**

- replace deprecated `TendermintClient` with `CometClient` (#115)
- autodetect Tendermint/CometBFT version needed on
  `ArchwayClient.connectWithBatchClient`and
  `SigningArchwayClient.connectWithSignerAndBatchClient` (#115)

#### **arch3-proto**

- update `@cosmology/telescope` to version `1.4.12`, and update codegen config
  with the option `useTelescopeGeneratedType = true` as a workaround for
  currently open
  [issue #482](https://github.com/cosmology-tech/telescope/issues/482)
  of `@cosmology/telescope` (#115)
- update codegen script and compile proto files (#115)

## v0.6.0 (2024-02-06)

### BREAKING CHANGES

- the new version of `arch3.js` will, by default, be compatible only with the
  Archway protocol version `6.0.0` and above.

### Added

#### **arch3-core**

- added `withdrawToWallet` property to the `ContractMetadata` interface (#114)

### Changed

#### **arch3-proto**

- updated to the version `6.0.0` of the protocol (#114)

## v0.5.0 (2023-11-21)

### BREAKING CHANGES

- the new version of `arch3.js` will, by default, be compatible only with the
  Archway protocol version `5.0.0` and above.

### Added

#### **arch3-core**

- added add `getAllBalances` method to the `ArchwayClient` (#110)

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
